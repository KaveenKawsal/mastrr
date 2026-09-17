# -*- coding: utf-8 -*-
"""
gaps_service.py -- turns stored MasteryEstimates into ordered, persisted
Gap rows, using the two teammates' REAL modules (not mocks):

  - diagnostic_engine.detect_gaps()      (Track 1, Kaveen)
  - graph_utils.topological_fix_order()  (Track 2, Sri Somesh's graph)

A gap's `status` tracks where it is in the remediation loop:
  detected -> in_tutoring -> resolved
and can drop back to `detected` if a learner's mastery regresses below
threshold again after being marked resolved.
"""
import sys
from pathlib import Path

try:
    from diagnostic_engine import detect_gaps  # noqa: E402  (Track 1's real function)
except ModuleNotFoundError:
    sys.path.insert(0, str(Path(__file__).parent / "MASTRR" / "MASTRR"))
    from diagnostic_engine import detect_gaps  # noqa: E402

from database import get_cursor  # noqa: E402
from graph_utils import load_graph, topological_fix_order  # noqa: E402

THRESHOLD = 0.5  # mirrors diagnostic_engine.detect_gaps's own default


def recompute_gaps(learner_id: str) -> list:
    with get_cursor() as cur:
        cur.execute("SELECT * FROM mastery_estimates WHERE learner_id = ?", (learner_id,))
        estimates = [dict(r) for r in cur.fetchall()]

    weak = detect_gaps(estimates, threshold=THRESHOLD)  # Kaveen's real function
    weak_sub_skills = [g["sub_skill"] for g in weak]

    G = load_graph()  # Sri Somesh's real graph
    fix_order = topological_fix_order(G, weak_sub_skills)
    for g in weak:
        g["priority_rank"] = fix_order.index(g["sub_skill"]) + 1

    with get_cursor() as cur:
        cur.execute("SELECT * FROM gaps WHERE learner_id = ?", (learner_id,))
        existing = {r["sub_skill"]: dict(r) for r in cur.fetchall()}

    with get_cursor(commit=True) as cur:
        # sub-skills that are weak right now: insert or update, preserving
        # in_tutoring/resolved status unless they've regressed back to weak
        # after being resolved
        for g in weak:
            prior = existing.get(g["sub_skill"])
            if prior is None:
                status = "detected"
            elif prior["status"] == "resolved":
                status = "detected"  # regressed
            else:
                status = prior["status"]  # keep detected/in_tutoring as-is

            cur.execute(
                """INSERT INTO gaps (learner_id, sub_skill, score, priority_rank, status)
                   VALUES (?, ?, ?, ?, ?)
                   ON CONFLICT(learner_id, sub_skill) DO UPDATE SET
                     score=excluded.score, priority_rank=excluded.priority_rank, status=excluded.status""",
                (learner_id, g["sub_skill"], g["score"], g["priority_rank"], status),
            )

        # sub-skills that used to be weak but no longer are (mastery improved
        # on a fresh diagnostic): mark resolved instead of leaving them stuck
        for sub_skill, prior in existing.items():
            if sub_skill not in weak_sub_skills and prior["status"] != "resolved":
                cur.execute(
                    "UPDATE gaps SET status = 'resolved' WHERE learner_id = ? AND sub_skill = ?",
                    (learner_id, sub_skill),
                )

    with get_cursor() as cur:
        cur.execute(
            "SELECT * FROM gaps WHERE learner_id = ? ORDER BY priority_rank IS NULL, priority_rank",
            (learner_id,),
        )
        return [dict(r) for r in cur.fetchall()]
