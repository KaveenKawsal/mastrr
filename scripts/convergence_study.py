# -*- coding: utf-8 -*-
"""
convergence_study.py -- Objective #2 / Expected Outcome #3 evidence.

The live system (diagnostic_session.py) always runs a fixed MAX_QUESTIONS=6
staircase -- it never stops early even if the estimate has already settled.
This script asks the question the execution plan and review deck promise an
answer to: *how many of those 6 questions were actually needed?* i.e. does
the mastery estimate stabilize well before question 6, which would justify
6 as a safe, slightly-conservative bound rather than an arbitrary one.

Method
------
For each of the 35 sub-skills in question_bank.csv, simulate 100 fake
learners with a known "true_ability" drawn uniformly from [0, 1]. Run the
*exact same* rule as diagnostic_session.py / diagnostic_engine.py:

    start at difficulty 3, correct -> +1, wrong -> -1, stop after 6
    questions (or when the bank for that sub-skill runs out)

but, unlike diagnostic_engine.run_staircase_test (which only returns the
final score), track the running weighted-by-difficulty score after *every*
question. A learner's estimate is considered "converged" at question k if,
for every question from k to the last one asked, the running estimate never
drifts more than TOLERANCE away from the final score.

Output
------
- convergence_study_results.csv  -- one row per simulated learner run
- convergence_study_summary.csv  -- one row per sub-skill, aggregated
- convergence_study.png          -- 2-panel chart:
    (1) histogram of "questions needed to converge" across all learners
    (2) cumulative % of learners converged by question number

Run with:  python scripts/convergence_study.py
"""
import csv
import random
import sys
from pathlib import Path

import matplotlib
matplotlib.use("Agg")  # headless -- just save the PNG, don't try to open a window
import matplotlib.pyplot as plt

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / "reference"))
from diagnostic_engine import simulate_answer  # noqa: E402  (reuse the exact same fake-student model)

QUESTION_BANK_CSV = ROOT / "data" / "question_bank.csv"
MAX_QUESTIONS = 6          # must match diagnostic_session.MAX_QUESTIONS
START_DIFFICULTY = 3       # must match diagnostic_session.START_DIFFICULTY
N_LEARNERS_PER_SUBSKILL = 100
TOLERANCE = 0.10           # "converged" = running score within +/-0.10 of the final score
RNG_SEED = 42

random.seed(RNG_SEED)


def load_bank(path=QUESTION_BANK_CSV):
    bank = {}
    with open(path, newline="") as f:
        for row in csv.DictReader(f):
            sk, d = row["sub_skill"], int(row["difficulty"])
            bank.setdefault(sk, {}).setdefault(d, []).append(row["id"])
    return bank


def pick_question(pool_by_difficulty, difficulty, used_ids):
    """Same nearby-difficulty fallback search used by diagnostic_session._pick_question
    and diagnostic_engine.run_staircase_test, so the simulation matches production."""
    candidates = [qid for qid in pool_by_difficulty.get(difficulty, []) if qid not in used_ids]
    if candidates:
        return random.choice(candidates)
    offset = 1
    while offset <= 4:
        for d in (difficulty - offset, difficulty + offset):
            if 1 <= d <= 5:
                candidates = [qid for qid in pool_by_difficulty.get(d, []) if qid not in used_ids]
                if candidates:
                    return random.choice(candidates)
        offset += 1
    return None


def run_one_learner(bank, sub_skill, true_ability, learner_id):
    """Runs the staircase and returns a dict with the full running-score trace."""
    pool_by_difficulty = bank[sub_skill]
    difficulty = START_DIFFICULTY
    used_ids = set()
    weighted_correct = 0
    weight_total = 0
    running_scores = []  # running_scores[i] = score after (i+1) questions

    for _ in range(MAX_QUESTIONS):
        qid = pick_question(pool_by_difficulty, difficulty, used_ids)
        if qid is None:
            break  # bank exhausted for this sub-skill
        used_ids.add(qid)

        correct = simulate_answer(difficulty, true_ability)
        weight_total += difficulty
        if correct:
            weighted_correct += difficulty
        running_scores.append(round(weighted_correct / weight_total, 4))

        difficulty = min(5, difficulty + 1) if correct else max(1, difficulty - 1)

    n_attempted = len(running_scores)
    final_score = running_scores[-1] if running_scores else 0.0

    # Convergence point: earliest k (1-indexed) such that every score from k
    # onward stays within TOLERANCE of the final score.
    convergence_q = n_attempted  # default: never stabilized until the very last question
    for k in range(1, n_attempted + 1):
        if all(abs(s - final_score) <= TOLERANCE for s in running_scores[k - 1:]):
            convergence_q = k
            break

    return {
        "learner_id": learner_id,
        "sub_skill": sub_skill,
        "true_ability": round(true_ability, 3),
        "n_attempted": n_attempted,
        "final_score": final_score,
        "convergence_question": convergence_q,
        "converged_before_max": convergence_q < MAX_QUESTIONS,
    }


def main():
    bank = load_bank()
    sub_skills = sorted(bank.keys())
    print(f"Loaded question bank: {len(sub_skills)} sub-skills")
    print(f"Simulating {N_LEARNERS_PER_SUBSKILL} learners x {len(sub_skills)} sub-skills "
          f"= {N_LEARNERS_PER_SUBSKILL * len(sub_skills)} runs (tolerance={TOLERANCE})\n")

    results = []
    for sub_skill in sub_skills:
        for i in range(N_LEARNERS_PER_SUBSKILL):
            true_ability = random.random()
            learner_id = f"sim_{sub_skill.replace(' ', '_').replace('&', 'and')}_{i:03d}"
            results.append(run_one_learner(bank, sub_skill, true_ability, learner_id))

    # ---- per-learner CSV -----------------------------------------------
    results_csv = ROOT / "convergence_study_results.csv"
    with open(results_csv, "w", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=list(results[0].keys()))
        writer.writeheader()
        writer.writerows(results)

    # ---- per-sub-skill summary CSV --------------------------------------
    summary_csv = ROOT / "convergence_study_summary.csv"
    with open(summary_csv, "w", newline="") as f:
        writer = csv.writer(f)
        writer.writerow([
            "sub_skill", "n_learners", "mean_convergence_question",
            "median_convergence_question", "pct_converged_before_max", "mean_n_attempted",
        ])
        for sub_skill in sub_skills:
            rows = [r for r in results if r["sub_skill"] == sub_skill]
            convs = sorted(r["convergence_question"] for r in rows)
            n = len(rows)
            mean_conv = sum(convs) / n
            median_conv = convs[n // 2] if n % 2 else (convs[n // 2 - 1] + convs[n // 2]) / 2
            pct_early = 100 * sum(r["converged_before_max"] for r in rows) / n
            mean_attempted = sum(r["n_attempted"] for r in rows) / n
            writer.writerow([
                sub_skill, n, round(mean_conv, 2), round(median_conv, 2),
                round(pct_early, 1), round(mean_attempted, 2),
            ])

    # ---- overall numbers for the console / report -----------------------
    all_convs = [r["convergence_question"] for r in results]
    overall_mean = sum(all_convs) / len(all_convs)
    overall_pct_early = 100 * sum(r["converged_before_max"] for r in results) / len(results)
    print(f"Overall mean questions-to-converge: {overall_mean:.2f} (out of {MAX_QUESTIONS} max)")
    print(f"Overall %% of learners converged before using all {MAX_QUESTIONS} questions: "
          f"{overall_pct_early:.1f}%")
    print(f"\nWrote {results_csv.name} ({len(results)} rows)")
    print(f"Wrote {summary_csv.name} ({len(sub_skills)} rows)")

    # ---- chart ------------------------------------------------------------
    fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 4.5))

    ax1.hist(all_convs, bins=range(1, MAX_QUESTIONS + 2), align="left",
              rwidth=0.8, color="#4C72B0")
    ax1.set_xlabel("Questions needed to converge")
    ax1.set_ylabel("Number of simulated learners")
    ax1.set_title(f"Convergence point (tolerance = ±{TOLERANCE})")
    ax1.set_xticks(range(1, MAX_QUESTIONS + 1))

    cumulative_pct = [
        100 * sum(1 for c in all_convs if c <= q) / len(all_convs)
        for q in range(1, MAX_QUESTIONS + 1)
    ]
    ax2.plot(range(1, MAX_QUESTIONS + 1), cumulative_pct, marker="o", color="#DD8452")
    ax2.set_xlabel("Question number")
    ax2.set_ylabel("% of learners converged by this question")
    ax2.set_title("Cumulative convergence")
    ax2.set_ylim(0, 105)
    ax2.set_xticks(range(1, MAX_QUESTIONS + 1))
    ax2.grid(alpha=0.3)

    fig.suptitle(
        f"Mastrr diagnostic convergence study "
        f"({N_LEARNERS_PER_SUBSKILL} learners x {len(sub_skills)} sub-skills)",
        fontsize=11,
    )
    fig.tight_layout(rect=[0, 0, 1, 0.94])
    chart_path = ROOT / "convergence_study.png"
    fig.savefig(chart_path, dpi=150)
    print(f"Wrote {chart_path.name}")


if __name__ == "__main__":
    main()
