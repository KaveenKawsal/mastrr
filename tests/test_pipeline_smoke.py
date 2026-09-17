# -*- coding: utf-8 -*-
"""
End-to-end smoke tests for the diagnose -> gap -> tutor -> retest -> roadmap
loop, run against the real FastAPI app, real question bank, and real
prerequisite graph (isolated SQLite file per test, nothing mocked).
"""
from conftest import run_diagnostic

WEAK_SUB_SKILL = "Percentages"  # 15 questions on disk, prereq of Profit & Loss / Simple Interest


def test_health(client):
    resp = client.get("/health")
    assert resp.status_code == 200
    assert resp.json() == {"status": "ok"}


def test_unknown_sub_skill_rejected(client):
    resp = client.post(
        "/diagnostic/start", json={"learner_id": "learner_x", "sub_skill": "Not A Real Sub Skill"}
    )
    assert resp.status_code == 400


def test_diagnostic_never_leaks_correct_answer(client, correct_answer_lookup):
    resp = client.post("/diagnostic/start", json={"learner_id": "learner_leak", "sub_skill": WEAK_SUB_SKILL})
    assert resp.status_code == 200
    question = resp.json()["question"]
    assert "correct_answer" not in question

    ids = ",".join([question["id"]])
    resp = client.get(f"/questions/batch?ids={ids}")
    assert resp.status_code == 200
    for q in resp.json():
        assert "correct_answer" not in q


def test_full_wrong_answer_creates_gap_visible_on_roadmap(client, correct_answer_lookup):
    learner_id = "learner_weak"
    result = run_diagnostic(client, correct_answer_lookup, learner_id, WEAK_SUB_SKILL, want_correct=False)

    assert result["done"] is True
    assert result["mastery_estimate"]["score"] < 0.5

    gaps = client.get(f"/gaps/{learner_id}").json()
    assert any(g["sub_skill"] == WEAK_SUB_SKILL and g["status"] == "detected" for g in gaps)

    roadmap = client.get(f"/roadmap/{learner_id}").json()
    node = next(n for n in roadmap["graph"]["nodes"] if n["id"] == WEAK_SUB_SKILL)
    assert node["status"] == "gap_unresolved"
    assert roadmap["current_focus"]["sub_skill"] == WEAK_SUB_SKILL


def test_full_tutor_then_retest_resolves_gap(client, correct_answer_lookup):
    learner_id = "learner_recovers"
    run_diagnostic(client, correct_answer_lookup, learner_id, WEAK_SUB_SKILL, want_correct=False)

    tutor_resp = client.post("/tutor", json={"learner_id": learner_id, "sub_skill": WEAK_SUB_SKILL})
    assert tutor_resp.status_code == 200
    tutor_body = tutor_resp.json()
    gap_id = tutor_body["gap_id"]
    retest_ids = tutor_body["retest_question_ids"]
    assert len(retest_ids) > 0

    gaps = client.get(f"/gaps/{learner_id}").json()
    assert next(g for g in gaps if g["sub_skill"] == WEAK_SUB_SKILL)["status"] == "in_tutoring"

    answers = [{"question_id": qid, "selected_answer": correct_answer_lookup(qid)} for qid in retest_ids]
    retest_resp = client.post("/retest", json={"gap_id": gap_id, "answers": answers})
    assert retest_resp.status_code == 200
    retest_body = retest_resp.json()
    assert retest_body["passed"] is True
    assert retest_body["status"] == "resolved"

    # the fixed bug: recompute_gaps() must not silently regress a resolved
    # gap back to "detected" because mastery_estimates was left stale
    gaps_after = client.get(f"/gaps/{learner_id}").json()
    resolved_gap = next(g for g in gaps_after if g["sub_skill"] == WEAK_SUB_SKILL)
    assert resolved_gap["status"] == "resolved"

    roadmap = client.get(f"/roadmap/{learner_id}").json()
    node = next(n for n in roadmap["graph"]["nodes"] if n["id"] == WEAK_SUB_SKILL)
    assert node["status"] == "mastered"


def test_failed_retest_keeps_gap_open(client, correct_answer_lookup):
    learner_id = "learner_still_weak"
    run_diagnostic(client, correct_answer_lookup, learner_id, WEAK_SUB_SKILL, want_correct=False)
    tutor_body = client.post("/tutor", json={"learner_id": learner_id, "sub_skill": WEAK_SUB_SKILL}).json()

    answers = [
        {"question_id": qid, "selected_answer": "__definitely_wrong__"}
        for qid in tutor_body["retest_question_ids"]
    ]
    retest_body = client.post("/retest", json={"gap_id": tutor_body["gap_id"], "answers": answers}).json()

    assert retest_body["passed"] is False
    assert retest_body["status"] == "in_tutoring"

    gaps = client.get(f"/gaps/{learner_id}").json()
    assert next(g for g in gaps if g["sub_skill"] == WEAK_SUB_SKILL)["status"] == "in_tutoring"


def test_tutor_404s_without_a_prior_gap(client):
    resp = client.post("/tutor", json={"learner_id": "learner_no_gap", "sub_skill": WEAK_SUB_SKILL})
    assert resp.status_code == 404


def test_learner_history_accumulates(client, correct_answer_lookup):
    learner_id = "learner_history"
    run_diagnostic(client, correct_answer_lookup, learner_id, WEAK_SUB_SKILL, want_correct=False)
    client.post("/tutor", json={"learner_id": learner_id, "sub_skill": WEAK_SUB_SKILL})

    roadmap = client.get(f"/roadmap/{learner_id}").json()
    events = [h["event"] for h in roadmap["history"]]
    assert "diagnostic_started" in events
    assert "diagnostic_completed" in events
    assert "tutoring_generated" in events
