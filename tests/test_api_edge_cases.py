# -*- coding: utf-8 -*-
"""
A few API-layer edge cases not already covered by test_pipeline_smoke.py's
happy-path flows: cold-start responses, empty input handling, and the
ValueError -> HTTPException wiring for bad session/gap ids.
"""
from conftest import run_diagnostic

WEAK_SUB_SKILL = "Percentages"


def test_roadmap_for_a_learner_with_no_activity_yet(client):
    resp = client.get("/roadmap/brand_new_learner")
    assert resp.status_code == 200
    body = resp.json()

    assert body["stage"] == "not_started"
    assert body["history"] == []
    assert body["gaps"] == []
    assert body["current_focus"] is None
    assert len(body["graph"]["nodes"]) > 0
    assert all(n["status"] == "not_tested" for n in body["graph"]["nodes"])


def test_gaps_for_a_learner_with_no_mastery_estimates_yet(client):
    resp = client.get("/gaps/brand_new_learner")
    assert resp.status_code == 200
    assert resp.json() == []


def test_questions_batch_with_no_ids_returns_empty_list(client):
    resp = client.get("/questions/batch?ids=")
    assert resp.status_code == 200
    assert resp.json() == []


def test_retest_with_unknown_gap_id_404s(client):
    resp = client.post("/retest", json={"gap_id": "not-a-real-gap-id", "answers": []})
    assert resp.status_code == 404


def test_diagnostic_answer_with_unknown_session_id_400s(client):
    resp = client.post("/diagnostic/answer", json={"session_id": "not-a-real-session", "selected_answer": "x"})
    assert resp.status_code == 400


def test_diagnostic_answer_after_session_already_complete_400s(client, correct_answer_lookup):
    result = run_diagnostic(client, correct_answer_lookup, "learner_replay", WEAK_SUB_SKILL, want_correct=True)
    resp = client.post("/diagnostic/answer", json={"session_id": result["session_id"], "selected_answer": "x"})
    assert resp.status_code == 400
