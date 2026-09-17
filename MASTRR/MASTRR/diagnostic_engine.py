# -*- coding: utf-8 -*-
"""
Diagnostic engine (Kaveen's track, being built solo for now).

Implements a simple rule-based adaptive staircase test:
  - start at difficulty 3
  - correct answer -> next question one level harder
  - wrong answer -> next question one level easier
  - stop after a fixed number of questions

This intentionally skips full IRT/Bayesian modelling for now (see the
execution plan -- start simple, upgrade later if time allows).

Since there's no real student answering live yet, we simulate one: each
fake student has a hidden "true ability" per sub-skill (0.0 to 1.0), and
we probabilistically decide if they get each question right based on how
that ability compares to the question's difficulty. This lets us test
that the staircase logic actually behaves sensibly before a real UI exists.
"""
import csv
import random
from collections import defaultdict

random.seed(42)  # reproducible runs while testing


def load_question_bank(path="question_bank.csv"):
    bank = defaultdict(lambda: defaultdict(list))
    with open(path) as f:
        for row in csv.DictReader(f):
            bank[row["sub_skill"]][int(row["difficulty"])].append(row)
    return bank


def simulate_answer(difficulty, true_ability):
    """Fake-student model: higher ability and lower difficulty both raise
    the chance of a correct answer. true_ability is 0.0-1.0, difficulty is 1-5."""
    ability_level = true_ability * 5  # put both on the same 1-5 scale
    probability_correct = 0.5 + (ability_level - difficulty) * 0.15
    probability_correct = max(0.05, min(0.95, probability_correct))
    return random.random() < probability_correct


def run_staircase_test(bank, sub_skill, true_ability, learner_id, max_questions=6):
    if sub_skill not in bank:
        raise ValueError(f"No questions found for sub-skill: {sub_skill}")

    difficulty = 3
    used_ids = set()
    weighted_correct = 0
    weight_total = 0
    history = []

    for _ in range(max_questions):
        pool = [q for q in bank[sub_skill][difficulty] if q["id"] not in used_ids]
        # if that exact difficulty is used up, search nearby difficulties
        offset = 1
        while not pool and offset <= 4:
            for d in (difficulty - offset, difficulty + offset):
                if 1 <= d <= 5:
                    pool = [q for q in bank[sub_skill][d] if q["id"] not in used_ids]
                    if pool:
                        break
            offset += 1
        if not pool:
            break  # question bank exhausted for this sub-skill

        question = random.choice(pool)
        used_ids.add(question["id"])
        correct = simulate_answer(difficulty, true_ability)

        weight_total += difficulty
        if correct:
            weighted_correct += difficulty

        history.append({"difficulty": difficulty, "correct": correct})

        difficulty = min(5, difficulty + 1) if correct else max(1, difficulty - 1)

    score = round(weighted_correct / weight_total, 2) if weight_total else 0.0

    # simple confidence heuristic: did the difficulty stop swinging by the end?
    if len(history) >= 3:
        recent_swings = sum(
            1 for i in range(len(history) - 2, len(history))
            if history[i]["difficulty"] != history[i - 1]["difficulty"]
        )
        confidence = round(1.0 - (recent_swings / 2) * 0.3, 2)
    else:
        confidence = 0.5

    return {
        "learner_id": learner_id,
        "sub_skill": sub_skill,
        "score": score,
        "confidence": confidence,
        "n_attempted": len(history)
    }, history


def detect_gaps(mastery_estimates, threshold=0.5):
    gaps = []
    for m in mastery_estimates:
        if m["score"] < threshold:
            gaps.append({
                "learner_id": m["learner_id"],
                "sub_skill": m["sub_skill"],
                "score": m["score"],
                "priority_rank": None  # filled in later by the graph's topological order
            })
    return gaps


if __name__ == "__main__":
    bank = load_question_bank()
    print(f"Loaded question bank: {len(bank)} sub-skills\n")

    # a fake student, deliberately weak in Percentages-related topics
    true_abilities = {
        "Number Systems": 0.9,
        "Ratio & Proportion": 0.8,
        "Percentages": 0.3,
        "Profit & Loss": 0.3,
        "Simple Interest": 0.3,
    }

    print("Running the staircase test per sub-skill:\n")
    estimates = []
    for sub_skill, ability in true_abilities.items():
        estimate, history = run_staircase_test(bank, sub_skill, ability, learner_id="student_042")
        estimates.append(estimate)
        diffs = [h["difficulty"] for h in history]
        marks = ["Y" if h["correct"] else "N" for h in history]
        print(f"  {sub_skill:20s} true_ability={ability}  difficulty path={diffs}  correct={marks}")
        print(f"    -> MasteryEstimate: {estimate}")
    print()

    gaps = detect_gaps(estimates, threshold=0.5)
    print(f"Gaps detected (score < 0.5): {len(gaps)}")
    for g in gaps:
        print(f"  {g}")
