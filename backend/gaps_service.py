# -*- coding: utf-8 -*-
"""
gaps_service.py -- turns stored MasteryEstimates into ordered, persisted
Gap rows.

detect_gaps() started life in Kaveen's reference/diagnostic_engine.py
(Track 1) but is a genuine live dependency, not just a prototype, so it
lives here now instead of being imported out of the historical-reference
copy. topological_fix_order() is Sri Somesh's real graph (Track 2).

A gap's `status` tracks where it is in the remediation loop:
  detected -> in_tutoring -> resolved
and can drop back to `detected` if a learner's mastery regresses below
threshold again after being marked resolved.
"""
from .database import get_cursor
from .graph_utils import load_graph, topological_fix_order

THRESHOLD = 0.5  # mirrors detect_gaps's own default


def detect_gaps(mastery_estimates, threshold=THRESHOLD):
    gaps = []
    for m in mastery_estimates:
        if m["score"] < threshold:
            gaps.append({
                "learner_id": m["learner_id"],
                "sub_skill": m["sub_skill"],
                "score": m["score"],
                "priority_rank": None,  # filled in below by the graph's topological order
            })
    return gaps


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
