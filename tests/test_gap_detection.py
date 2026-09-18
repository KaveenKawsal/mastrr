# -*- coding: utf-8 -*-
"""
Focused tests for the gap-detection algorithm itself:

  - gaps_service.detect_gaps()            thresholding
  - graph_utils.topological_fix_order()   prerequisite ordering
  - gaps_service.recompute_gaps()         the two combined + persisted, incl.
                                           the detected/in_tutoring/resolved
                                           state machine

No mocks: real question bank, real prerequisites.csv-derived graph, real
SQLite writes through database.get_cursor().
"""
from datetime import datetime, timezone

import networkx as nx

from backend.graph_utils import load_graph, topological_fix_order
from backend import gaps_service
from backend.gaps_service import detect_gaps
from backend.database import get_cursor


def _now():
    return datetime.now(timezone.utc).isoformat()


def _upsert_mastery(learner_id, sub_skill, score, confidence=0.8, n_attempted=6):
    with get_cursor(commit=True) as cur:
        cur.execute(
            """INSERT INTO mastery_estimates (learner_id, sub_skill, score, confidence, n_attempted, updated_at)
               VALUES (?, ?, ?, ?, ?, ?)
               ON CONFLICT(learner_id, sub_skill) DO UPDATE SET
                 score=excluded.score, confidence=excluded.confidence,
                 n_attempted=excluded.n_attempted, updated_at=excluded.updated_at""",
            (learner_id, sub_skill, score, confidence, n_attempted, _now()),
        )


# ---------------------------------------------------------------------------
# detect_gaps() thresholding
# ---------------------------------------------------------------------------
def test_detect_gaps_flags_only_below_threshold():
    estimates = [
        {"learner_id": "s1", "sub_skill": "Percentages", "score": 0.30},
        {"learner_id": "s1", "sub_skill": "Number Systems", "score": 0.90},
        {"learner_id": "s1", "sub_skill": "Averages", "score": 0.50},  # exactly at threshold
    ]
    gaps = detect_gaps(estimates, threshold=0.5)
    flagged = {g["sub_skill"] for g in gaps}

    assert flagged == {"Percentages"}  # strictly less than threshold only
    assert gaps[0]["priority_rank"] is None  # filled in later by the graph order


def test_detect_gaps_empty_when_all_mastered():
    estimates = [{"learner_id": "s1", "sub_skill": "Percentages", "score": 0.95}]
    assert detect_gaps(estimates, threshold=0.5) == []


# ---------------------------------------------------------------------------
# topological_fix_order() -- prerequisites must precede dependents
# ---------------------------------------------------------------------------
def test_topological_fix_order_respects_known_prerequisite_edge(test_db):
    # real graph: "Percentages" is a prerequisite of "Profit & Loss" (see
    # knowledge/prerequisites.csv). If a learner is weak in both, the
    # fix order must put the prerequisite first.
    G = load_graph()
    assert G.has_edge("Percentages", "Profit & Loss")

    order = topological_fix_order(G, ["Profit & Loss", "Percentages"])
    assert order.index("Percentages") < order.index("Profit & Loss")


def test_topological_fix_order_excludes_non_weak_topics():
    G = load_graph()
    order = topological_fix_order(G, ["Percentages"])
    assert order == ["Percentages"]


def test_topological_fix_order_on_synthetic_diamond():
    # A -> B -> D, A -> C -> D: both valid topological orders keep A before
    # B/C and B/C before D, regardless of tie-breaking between B and C.
    G = nx.DiGraph([("A", "B"), ("A", "C"), ("B", "D"), ("C", "D")])
    order = topological_fix_order(G, ["D", "C", "B", "A"])
    assert order.index("A") < order.index("B")
    assert order.index("A") < order.index("C")
    assert order.index("B") < order.index("D")
    assert order.index("C") < order.index("D")


# ---------------------------------------------------------------------------
# gaps_service.recompute_gaps() -- combined algorithm, persisted
# ---------------------------------------------------------------------------
def test_recompute_gaps_orders_by_prerequisite_not_by_score(test_db):
    learner_id = "learner_ordering"
    # deliberately insert the dependent skill's (worse) score first, to prove
    # ordering comes from the graph, not insertion order or score magnitude
    _upsert_mastery(learner_id, "Profit & Loss", score=0.10)
    _upsert_mastery(learner_id, "Percentages", score=0.40)

    gaps = gaps_service.recompute_gaps(learner_id)
    by_skill = {g["sub_skill"]: g for g in gaps}

    assert by_skill["Percentages"]["priority_rank"] < by_skill["Profit & Loss"]["priority_rank"]
    assert all(g["status"] == "detected" for g in gaps)


def test_recompute_gaps_resolves_when_mastery_improves(test_db):
    learner_id = "learner_improves"
    _upsert_mastery(learner_id, "Percentages", score=0.20)
    gaps = gaps_service.recompute_gaps(learner_id)
    assert gaps[0]["status"] == "detected"

    _upsert_mastery(learner_id, "Percentages", score=0.85)  # fresh diagnostic, now mastered
    gaps = gaps_service.recompute_gaps(learner_id)
    assert gaps[0]["status"] == "resolved"


def test_recompute_gaps_preserves_in_tutoring_status_across_recompute(test_db):
    learner_id = "learner_mid_tutoring"
    _upsert_mastery(learner_id, "Percentages", score=0.20)
    gaps_service.recompute_gaps(learner_id)

    with get_cursor(commit=True) as cur:
        cur.execute(
            "UPDATE gaps SET status = 'in_tutoring' WHERE learner_id = ? AND sub_skill = ?",
            (learner_id, "Percentages"),
        )

    # recomputing while still weak (e.g. another sub-skill's diagnostic ran)
    # must not reset in_tutoring back to detected
    gaps = gaps_service.recompute_gaps(learner_id)
    assert gaps[0]["status"] == "in_tutoring"


def test_recompute_gaps_regresses_resolved_gap_if_mastery_drops_again(test_db):
    learner_id = "learner_regresses"
    _upsert_mastery(learner_id, "Percentages", score=0.85)
    gaps_service.recompute_gaps(learner_id)  # nothing weak yet, no gap row

    _upsert_mastery(learner_id, "Percentages", score=0.85)
    with get_cursor(commit=True) as cur:
        cur.execute(
            """INSERT INTO gaps (learner_id, sub_skill, score, priority_rank, status)
               VALUES (?, 'Percentages', 0.85, 1, 'resolved')
               ON CONFLICT(learner_id, sub_skill) DO UPDATE SET status='resolved'""",
            (learner_id,),
        )

    _upsert_mastery(learner_id, "Percentages", score=0.30)  # a later diagnostic gets worse
    gaps = gaps_service.recompute_gaps(learner_id)
    assert next(g for g in gaps if g["sub_skill"] == "Percentages")["status"] == "detected"
