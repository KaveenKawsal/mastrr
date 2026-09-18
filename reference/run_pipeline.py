# -*- coding: utf-8 -*-
"""
The first true end-to-end run of Mastrr's core loop, solo-built:

  Question Bank -> Diagnostic (staircase) -> Mastery Scores -> Gap Detection
  -> Topological Ordering -> RAG Tutoring Content

Every piece here was built and tested separately (diagnostic_engine.py,
build_graph.py, build_tutoring.py). This script just wires them together.
"""
import csv
import glob
import os
import networkx as nx
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

from diagnostic_engine import load_question_bank, run_staircase_test, detect_gaps

# ---------------------------------------------------------------------------
# Step 1: run the diagnostic across a student's topics
# ---------------------------------------------------------------------------
bank = load_question_bank("question_bank.csv")

true_abilities = {
    "Number Systems": 0.9,
    "Ratio & Proportion": 0.8,
    "Percentages": 0.3,
    "Profit & Loss": 0.3,
    "Simple Interest": 0.3,
}

print("STEP 1 — Diagnostic staircase test")
estimates = []
for sub_skill, ability in true_abilities.items():
    estimate, _ = run_staircase_test(bank, sub_skill, ability, learner_id="student_042")
    estimates.append(estimate)
    print(f"  {sub_skill:20s} -> score {estimate['score']}")

# ---------------------------------------------------------------------------
# Step 2: detect gaps
# ---------------------------------------------------------------------------
print("\nSTEP 2 — Gap detection (score < 0.5)")
gaps = detect_gaps(estimates, threshold=0.5)
for g in gaps:
    print(f"  Weak in: {g['sub_skill']} (score {g['score']})")

if not gaps:
    print("No gaps detected -- nothing to remediate. Exiting.")
    raise SystemExit

# ---------------------------------------------------------------------------
# Step 3: order the gaps using the prerequisite graph
# ---------------------------------------------------------------------------
print("\nSTEP 3 — Topological ordering via prerequisite graph")
G = nx.DiGraph()
with open("prerequisites.csv") as f:
    for row in csv.DictReader(f):
        G.add_edge(row["prerequisite"], row["sub_skill"])
G.add_nodes_from(["Simplification", "Coding-Decoding", "Series", "Clocks & Calendars"])

full_order = list(nx.topological_sort(G))
weak_topics = [g["sub_skill"] for g in gaps]
fix_order = [t for t in full_order if t in weak_topics]

for gap in gaps:
    gap["priority_rank"] = fix_order.index(gap["sub_skill"]) + 1

gaps.sort(key=lambda g: g["priority_rank"])
print("  Correct remediation order:")
for g in gaps:
    print(f"    {g['priority_rank']}. {g['sub_skill']} (score {g['score']})")

# ---------------------------------------------------------------------------
# Step 4: generate tutoring content for the top-priority gap
# ---------------------------------------------------------------------------
print("\nSTEP 4 — RAG tutoring content for the top-priority gap")
top_gap = gaps[0]
print(f"  Generating tutoring content for: {top_gap['sub_skill']}\n")


def load_chunks(notes_folder):
    chunks, chunk_ids = [], []
    for filepath in glob.glob(os.path.join(notes_folder, "*.txt")):
        sub_skill = os.path.splitext(os.path.basename(filepath))[0]
        with open(filepath) as f:
            paragraphs = [p.strip() for p in f.read().split("\n\n") if p.strip()]
        for i, para in enumerate(paragraphs):
            chunks.append(para)
            chunk_ids.append(f"{sub_skill}.txt#chunk{i+1}")
    return chunks, chunk_ids


chunks, chunk_ids = load_chunks("notes")
vectorizer = TfidfVectorizer(stop_words="english")
chunk_vectors = vectorizer.fit_transform(chunks)

query = f"Explain the concept of {top_gap['sub_skill']} with common mistakes"
query_vector = vectorizer.transform([query])
scores = cosine_similarity(query_vector, chunk_vectors)[0]
ranked = sorted(range(len(scores)), key=lambda i: scores[i], reverse=True)[:2]
top_chunks = [(chunk_ids[i], chunks[i]) for i in ranked]

tutoring_content = {
    "gap_id": f"{top_gap['learner_id']}_{top_gap['sub_skill']}",
    "sub_skill": top_gap["sub_skill"],
    "explanation": "[LLM would generate a grounded explanation here, using only the retrieved chunks below]",
    "source_chunks": [cid for cid, _ in top_chunks],
    "retest_question_ids": [q["id"] for q in bank[top_gap["sub_skill"]][1][:3]] if bank[top_gap["sub_skill"]][1] else []
}

print("  Final TutoringContent packet:")
for key, value in tutoring_content.items():
    print(f"    {key}: {value}")

print("\n" + "=" * 60)
print("Full loop complete: diagnosed -> detected gap -> ordered by")
print("prerequisite -> retrieved grounded tutoring content.")
