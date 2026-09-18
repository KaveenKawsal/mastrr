# -*- coding: utf-8 -*-
"""
seed_data.py -- populate mastrr.db from the checked-in source files.

Run directly to (re)seed:
    python -m backend.seed_data

Idempotent: clears questions / graph tables and reloads them from disk
each time, so it's safe to re-run after editing data/question_bank.csv or
knowledge/prerequisites.csv. Does NOT touch learner data (mastery
estimates, gaps, tutoring content, sessions) -- that's real progress,
not seed data.
"""
import csv
from pathlib import Path

from .database import init_db, get_cursor
from .graph_utils import load_graph

QUESTION_BANK_CSV = Path(__file__).resolve().parent.parent / "data" / "question_bank.csv"


def seed_questions(csv_path=QUESTION_BANK_CSV):
    with open(csv_path) as f:
        rows = list(csv.DictReader(f))

    with get_cursor(commit=True) as cur:
        cur.execute("DELETE FROM questions")
        cur.executemany(
            """INSERT INTO questions
               (id, sub_skill, difficulty, text, option_a, option_b, option_c, option_d, correct_answer)
               VALUES (:id, :sub_skill, :difficulty, :text, :option_a, :option_b, :option_c, :option_d, :correct_answer)""",
            [
                {
                    "id": r["id"],
                    "sub_skill": r["sub_skill"],
                    "difficulty": int(r["difficulty"]),
                    "text": r["text"],
                    "option_a": r["option_a"],
                    "option_b": r["option_b"],
                    "option_c": r["option_c"],
                    "option_d": r["option_d"],
                    "correct_answer": r["correct_answer"],
                }
                for r in rows
            ],
        )
    return len(rows)


def seed_graph():
    G = load_graph()
    with get_cursor(commit=True) as cur:
        cur.execute("DELETE FROM sub_skill_graph_nodes")
        cur.execute("DELETE FROM sub_skill_graph_edges")
        cur.executemany(
            "INSERT INTO sub_skill_graph_nodes (name) VALUES (?)",
            [(n,) for n in G.nodes()],
        )
        cur.executemany(
            "INSERT INTO sub_skill_graph_edges (from_skill, to_skill) VALUES (?, ?)",
            [(u, v) for u, v in G.edges()],
        )
    return G.number_of_nodes(), G.number_of_edges()


def seed_all(verbose=True):
    init_db()
    n_questions = seed_questions()
    n_nodes, n_edges = seed_graph()
    if verbose:
        print(f"Seeded {n_questions} questions.")
        print(f"Seeded graph: {n_nodes} nodes, {n_edges} edges.")

        # flag sub-skills that are short of the plan's 15-20/sub-skill target
        with get_cursor() as cur:
            cur.execute(
                "SELECT sub_skill, COUNT(*) AS c FROM questions GROUP BY sub_skill HAVING c < 15"
            )
            short = cur.fetchall()
        if short:
            print(
                f"\nNote: {len(short)} sub-skills have fewer than 15 questions "
                f"(execution plan targets 15-20/sub-skill for ~400-500 total; "
                f"data/question_bank.csv currently has {n_questions}). "
                f"Diagnostic sessions still work -- run_staircase logic already "
                f"falls back to nearby difficulties -- but each sub-skill will "
                f"run out of fresh questions sooner and repeat sessions may reuse items."
            )


if __name__ == "__main__":
    seed_all()
