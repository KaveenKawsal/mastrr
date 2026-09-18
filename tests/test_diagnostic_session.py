# -*- coding: utf-8 -*-
"""
Unit tests for diagnostic_session.py's live staircase logic, exercised
directly (not through the API) so difficulty transitions, clamping, and
error paths can be asserted precisely.

Uses small synthetic sub-skills seeded straight into the test DB rather
than the real question_bank.csv, so difficulty-pool depth is controlled
and every scenario (clamping at 1/5, bank exhaustion, unknown session)
is deterministic instead of depending on how many real questions happen
to exist at each level.
"""
import pytest

from backend import diagnostic_session
from backend.database import get_cursor


def _seed_subskill(sub_skill, difficulties=(1, 2, 3, 4, 5), n_per_difficulty=5, correct="option_a"):
    """Insert n_per_difficulty synthetic questions at each given difficulty,
    plus the sub_skill_graph_nodes row start_session requires to exist."""
    with get_cursor(commit=True) as cur:
        cur.execute("INSERT OR IGNORE INTO sub_skill_graph_nodes (name) VALUES (?)", (sub_skill,))
        for d in difficulties:
            for i in range(n_per_difficulty):
                qid = f"{sub_skill}_{d}_{i}"
                cur.execute(
                    """INSERT INTO questions
                       (id, sub_skill, difficulty, text, option_a, option_b, option_c, option_d, correct_answer)
                       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)""",
                    (qid, sub_skill, d, f"question {qid}", "option_a", "option_b", "option_c", "option_d", correct),
                )


def _run_scripted_session(sub_skill, answers_correct, learner_id="scripted_learner"):
    """Drive start_session/submit_answer through a fixed correct/wrong script.

    Returns (start, responses, final) where responses[i] is the response
    dict right after the (i+1)-th answer (the last entry is the done=True
    one, included in responses too), and final == responses[-1].
    """
    start = diagnostic_session.start_session(learner_id, sub_skill)
    session_id = start["session_id"]
    responses = []
    for want_correct in answers_correct:
        selected = "option_a" if want_correct else "option_b"
        result = diagnostic_session.submit_answer(session_id, selected)
        responses.append(result)
        if result["done"]:
            break
    return start, responses, responses[-1]


# ---------------------------------------------------------------------------
# start_session
# ---------------------------------------------------------------------------
def test_start_session_returns_first_question_at_start_difficulty(test_db):
    _seed_subskill("ClampTest")
    start = diagnostic_session.start_session("learner_a", "ClampTest")

    assert start["question"]["difficulty"] == diagnostic_session.START_DIFFICULTY
    assert start["question_number"] == 1
    assert start["max_questions"] == diagnostic_session.MAX_QUESTIONS
    assert "correct_answer" not in start["question"]


def test_start_session_rejects_unknown_subskill(test_db):
    with pytest.raises(ValueError, match="Unknown sub_skill"):
        diagnostic_session.start_session("learner_a", "Not A Registered Skill")


def test_start_session_rejects_subskill_with_no_questions(test_db):
    with get_cursor(commit=True) as cur:
        cur.execute("INSERT INTO sub_skill_graph_nodes (name) VALUES ('EmptyBank')")
    with pytest.raises(ValueError, match="No questions available"):
        diagnostic_session.start_session("learner_a", "EmptyBank")


# ---------------------------------------------------------------------------
# difficulty staircase: increases on correct, decreases on wrong, clamps at 1/5
# ---------------------------------------------------------------------------
def test_difficulty_increases_on_correct_and_decreases_on_wrong(test_db):
    _seed_subskill("ClampTest")
    script = [True, True, False, True, False, False]  # 6 answers = MAX_QUESTIONS
    _, responses, final = _run_scripted_session("ClampTest", script)

    # difficulty of the *next* question shown after each of the first 5 answers
    shown_difficulties = [r["question"]["difficulty"] for r in responses[:-1]]
    assert shown_difficulties == [4, 5, 4, 5, 4]
    assert final["done"] is True
    assert final["mastery_estimate"]["n_attempted"] == 6


def test_difficulty_clamps_at_5_and_never_exceeds_it(test_db):
    _seed_subskill("ClampTest")  # 5 questions per difficulty -- enough depth at 5
    script = [True] * 6
    _, responses, final = _run_scripted_session("ClampTest", script)

    shown_difficulties = [r["question"]["difficulty"] for r in responses[:-1]]
    assert shown_difficulties == [4, 5, 5, 5, 5]
    assert max(shown_difficulties) == 5
    assert final["mastery_estimate"]["score"] == 1.0
    assert final["mastery_estimate"]["confidence"] == 1.0  # no swings once pinned at 5


def test_difficulty_clamps_at_1_and_never_goes_below_it(test_db):
    _seed_subskill("ClampTest")
    script = [False] * 6
    _, responses, final = _run_scripted_session("ClampTest", script)

    shown_difficulties = [r["question"]["difficulty"] for r in responses[:-1]]
    assert shown_difficulties == [2, 1, 1, 1, 1]
    assert min(shown_difficulties) == 1
    assert final["mastery_estimate"]["score"] == 0.0


# ---------------------------------------------------------------------------
# session-state errors
# ---------------------------------------------------------------------------
def test_submit_answer_rejects_unknown_session(test_db):
    with pytest.raises(ValueError, match="Unknown session_id"):
        diagnostic_session.submit_answer("not-a-real-session-id", "option_a")


def test_submit_answer_rejects_already_complete_session(test_db):
    _seed_subskill("ClampTest")
    _, _, final = _run_scripted_session("ClampTest", [True] * 6)

    with pytest.raises(ValueError, match="already complete"):
        diagnostic_session.submit_answer(final["session_id"], "option_a")


# ---------------------------------------------------------------------------
# question-bank exhaustion: stop early instead of erroring
# ---------------------------------------------------------------------------
def test_session_ends_early_with_note_when_question_bank_is_exhausted(test_db):
    _seed_subskill("TinyBank", difficulties=(3,), n_per_difficulty=2)  # only 2 questions total

    start = diagnostic_session.start_session("learner_a", "TinyBank")
    session_id = start["session_id"]

    r1 = diagnostic_session.submit_answer(session_id, "option_b")  # wrong
    assert r1["done"] is False  # one fallback question left nearby

    r2 = diagnostic_session.submit_answer(session_id, "option_b")  # wrong, bank now exhausted
    assert r2["done"] is True
    assert r2.get("note") == "question bank exhausted early"
    assert r2["mastery_estimate"]["n_attempted"] == 2  # stopped well short of MAX_QUESTIONS


# ---------------------------------------------------------------------------
# _score() formula, tested directly against contrived histories
# ---------------------------------------------------------------------------
def test_score_weighted_by_difficulty_and_confidence_from_swings(test_db):
    history = [
        {"difficulty": 3, "correct": True, "question_id": "q1"},
        {"difficulty": 4, "correct": False, "question_id": "q2"},
        {"difficulty": 2, "correct": True, "question_id": "q3"},
    ]
    estimate = diagnostic_session._score("learner_a", "ClampTest", history)

    assert estimate["score"] == round((3 + 2) / (3 + 4 + 2), 2)  # 0.56
    assert estimate["confidence"] == 0.7  # two swings across the last two comparisons
    assert estimate["n_attempted"] == 3


def test_score_confidence_is_fixed_when_history_shorter_than_3(test_db):
    for history in ([], [{"difficulty": 3, "correct": True, "question_id": "q1"}]):
        estimate = diagnostic_session._score("learner_a", "ClampTest", history)
        assert estimate["confidence"] == 0.5


def test_score_handles_empty_history_without_dividing_by_zero(test_db):
    estimate = diagnostic_session._score("learner_a", "ClampTest", [])
    assert estimate["score"] == 0.0
    assert estimate["n_attempted"] == 0
