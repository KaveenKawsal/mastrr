# -*- coding: utf-8 -*-
"""
diagnostic_session.py -- a *live* staircase test, one question at a time.

diagnostic_engine.py (Track 1) only runs the staircase against a
simulated learner in one batch call (`run_staircase_test`), because
when it was written there was no real UI yet for an actual person to
answer questions through. Now that the dashboard exists, /diagnostic
needs to hand back one question, wait for the learner's answer, then
decide the next question -- so this module reimplements the *same
rule* Kaveen designed as a two-step, DB-backed session instead of a
single blocking function call:

    start@3, correct -> +1 difficulty, wrong -> -1 difficulty,
    stop after MAX_QUESTIONS, score = weighted-by-difficulty accuracy,
    confidence = 1 - (recent difficulty swings / 2) * 0.3

If Track 1 later exposes a step-by-step version directly, swap this
module out for a thin wrapper around it -- don't keep two copies of
the rule alive longer than necessary.
"""
import json
import uuid

from .database import get_cursor, row_to_question_dict

MAX_QUESTIONS = 6
START_DIFFICULTY = 3


def _pick_question(cur, sub_skill: str, difficulty: int, used_ids: list):
    """Same nearby-difficulty fallback search as diagnostic_engine.run_staircase_test."""
    placeholders = ",".join("?" for _ in used_ids) or "''"
    query = (
        f"SELECT * FROM questions WHERE sub_skill = ? AND difficulty = ? "
        f"AND id NOT IN ({placeholders}) ORDER BY RANDOM() LIMIT 1"
    )
    cur.execute(query, (sub_skill, difficulty, *used_ids))
    row = cur.fetchone()
    if row:
        return row

    offset = 1
    while offset <= 4:
        for d in (difficulty - offset, difficulty + offset):
            if 1 <= d <= 5:
                cur.execute(query, (sub_skill, d, *used_ids))
                row = cur.fetchone()
                if row:
                    return row
        offset += 1
    return None


def start_session(learner_id: str, sub_skill: str) -> dict:
    with get_cursor() as cur:
        cur.execute("SELECT 1 FROM sub_skill_graph_nodes WHERE name = ?", (sub_skill,))
        if not cur.fetchone():
            raise ValueError(f"Unknown sub_skill: {sub_skill}")
        row = _pick_question(cur, sub_skill, START_DIFFICULTY, [])

    if row is None:
        raise ValueError(f"No questions available for sub_skill: {sub_skill}")

    session_id = str(uuid.uuid4())
    with get_cursor(commit=True) as cur:
        cur.execute(
            """INSERT INTO diagnostic_sessions
               (session_id, learner_id, sub_skill, difficulty, used_ids, history, current_question_id, status)
               VALUES (?, ?, ?, ?, ?, ?, ?, 'in_progress')""",
            (session_id, learner_id, sub_skill, START_DIFFICULTY, json.dumps([row["id"]]),
             json.dumps([]), row["id"]),
        )

    question = row_to_question_dict(row)
    question.pop("correct_answer")  # never send the answer key to the frontend
    return {
        "session_id": session_id,
        "question": question,
        "question_number": 1,
        "max_questions": MAX_QUESTIONS,
    }


def submit_answer(session_id: str, selected_answer: str) -> dict:
    with get_cursor() as cur:
        cur.execute("SELECT * FROM diagnostic_sessions WHERE session_id = ?", (session_id,))
        session = cur.fetchone()
        if session is None:
            raise ValueError("Unknown session_id")
        if session["status"] == "complete":
            raise ValueError("This diagnostic session is already complete")

        cur.execute("SELECT * FROM questions WHERE id = ?", (session["current_question_id"],))
        current_q = cur.fetchone()

    correct = str(selected_answer).strip() == str(current_q["correct_answer"]).strip()
    difficulty = session["difficulty"]
    used_ids = json.loads(session["used_ids"])
    history = json.loads(session["history"])
    history.append({
        "difficulty": difficulty,
        "correct": correct,
        "question_id": current_q["id"],
        "selected_answer": selected_answer,
    })

    next_difficulty = min(5, difficulty + 1) if correct else max(1, difficulty - 1)

    if len(history) >= MAX_QUESTIONS:
        estimate = _score(session["learner_id"], session["sub_skill"], history)
        with get_cursor(commit=True) as cur:
            cur.execute(
                "UPDATE diagnostic_sessions SET history = ?, status = 'complete' WHERE session_id = ?",
                (json.dumps(history), session_id),
            )
        return {"done": True, "session_id": session_id, "mastery_estimate": estimate}

    with get_cursor() as cur:
        next_row = _pick_question(cur, session["sub_skill"], next_difficulty, used_ids)

    if next_row is None:
        # question bank exhausted for this sub-skill -- stop early, same as
        # diagnostic_engine.run_staircase_test does in the batch version
        estimate = _score(session["learner_id"], session["sub_skill"], history)
        with get_cursor(commit=True) as cur:
            cur.execute(
                "UPDATE diagnostic_sessions SET history = ?, status = 'complete' WHERE session_id = ?",
                (json.dumps(history), session_id),
            )
        return {"done": True, "session_id": session_id, "mastery_estimate": estimate,
                 "note": "question bank exhausted early"}

    used_ids.append(next_row["id"])
    with get_cursor(commit=True) as cur:
        cur.execute(
            """UPDATE diagnostic_sessions
               SET difficulty = ?, used_ids = ?, history = ?, current_question_id = ?
               WHERE session_id = ?""",
            (next_difficulty, json.dumps(used_ids), json.dumps(history), next_row["id"], session_id),
        )

    next_question = row_to_question_dict(next_row)
    next_question.pop("correct_answer")
    return {
        "done": False,
        "session_id": session_id,
        "correct": correct,
        "question": next_question,
        "question_number": len(history) + 1,
        "max_questions": MAX_QUESTIONS,
    }


def _score(learner_id: str, sub_skill: str, history: list) -> dict:
    """Identical formula to diagnostic_engine.run_staircase_test: weighted-by-
    difficulty accuracy for the score, swing-based heuristic for confidence."""
    weight_total = sum(h["difficulty"] for h in history)
    weighted_correct = sum(h["difficulty"] for h in history if h["correct"])
    score = round(weighted_correct / weight_total, 2) if weight_total else 0.0

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
        "n_attempted": len(history),
    }


def get_missed_questions(learner_id: str, sub_skill: str) -> list:
    """Questions the learner answered incorrectly in their most recent completed
    diagnostic session for this sub_skill, for the tutor to use as worked examples
    instead of inventing its own. Newest session wins if they've run the
    diagnostic more than once (rowid order == insertion order -- session rows
    are only ever inserted, never replaced)."""
    with get_cursor() as cur:
        cur.execute(
            """SELECT history FROM diagnostic_sessions
               WHERE learner_id = ? AND sub_skill = ? AND status = 'complete'
               ORDER BY rowid DESC LIMIT 1""",
            (learner_id, sub_skill),
        )
        session = cur.fetchone()
    if session is None:
        return []

    history = json.loads(session["history"])
    missed = [h for h in history if not h["correct"]]
    if not missed:
        return []

    question_ids = [h["question_id"] for h in missed]
    with get_cursor() as cur:
        placeholders = ",".join("?" for _ in question_ids)
        cur.execute(f"SELECT * FROM questions WHERE id IN ({placeholders})", tuple(question_ids))
        rows_by_id = {r["id"]: r for r in cur.fetchall()}

    out = []
    for h in missed:
        row = rows_by_id.get(h["question_id"])
        if row is None:
            continue
        out.append({
            "text": row["text"],
            "options": [row["option_a"], row["option_b"], row["option_c"], row["option_d"]],
            "correct_answer": row["correct_answer"],
            "selected_answer": h.get("selected_answer"),
        })
    return out
