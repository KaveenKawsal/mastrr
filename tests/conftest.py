# -*- coding: utf-8 -*-
"""
Shared pytest fixtures.

Every test runs against a real, freshly-seeded SQLite file (seeded from the
actual question_bank.csv and the actual prerequisite graph on disk) instead
of a mocked DB or hand-built fixtures -- the point is to exercise the same
code paths production uses, just pointed at a throwaway file per test.
"""
import sys
from pathlib import Path

import pytest

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT))
sys.path.insert(0, str(ROOT / "MASTRR" / "MASTRR"))

import database  # noqa: E402


@pytest.fixture()
def test_db(tmp_path, monkeypatch):
    """Point database.DB_PATH at a throwaway file for the duration of one test."""
    db_path = tmp_path / "test_mastrr.db"
    monkeypatch.setattr(database, "DB_PATH", db_path)
    database.init_db()
    yield db_path


@pytest.fixture()
def client(test_db):
    """A TestClient backed by the isolated DB, seeded via the app's real startup path."""
    from fastapi.testclient import TestClient

    import main  # imported here so its module-level state doesn't leak across tests

    with TestClient(main.app) as c:
        yield c


@pytest.fixture()
def correct_answer_lookup(test_db):
    """Look up a question's real correct_answer straight from the seeded DB,
    so tests can deliberately answer right or wrong without guessing."""

    def _lookup(question_id: str) -> str:
        with database.get_cursor() as cur:
            cur.execute("SELECT correct_answer FROM questions WHERE id = ?", (question_id,))
            row = cur.fetchone()
        return row["correct_answer"]

    return _lookup


def run_diagnostic(client, correct_answer_lookup, learner_id, sub_skill, want_correct):
    """Drive a full /diagnostic/start -> /diagnostic/answer session to completion.

    `want_correct` is either a bool (apply to every question) or a callable
    taking the 1-indexed question number and returning a bool, so tests can
    script an exact difficulty path (e.g. "fail everything" or "fail then
    recover") instead of relying on randomness.
    """
    resp = client.post("/diagnostic/start", json={"learner_id": learner_id, "sub_skill": sub_skill})
    resp.raise_for_status()
    body = resp.json()
    session_id = body["session_id"]
    question = body["question"]
    question_number = body["question_number"]

    while True:
        should_be_correct = want_correct(question_number) if callable(want_correct) else want_correct
        real_answer = correct_answer_lookup(question["id"])
        if should_be_correct:
            selected = real_answer
        else:
            selected = next(opt for opt in question["options"] if opt != real_answer)

        resp = client.post("/diagnostic/answer", json={"session_id": session_id, "selected_answer": selected})
        resp.raise_for_status()
        body = resp.json()
        if body["done"]:
            return body
        question = body["question"]
        question_number = body["question_number"]
