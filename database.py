# -*- coding: utf-8 -*-
"""
database.py -- SQLite schema for Mastrr (Track 3, Step 1).

One table per contract from schemas.py, plus a couple of purely
operational tables (diagnostic_sessions, retest_attempts) needed to run
a *live* diagnostic instead of the simulated one in diagnostic_engine.py.

Kept as plain sqlite3 rather than an ORM -- the plan's own guidance for
Track 1 ("plain functions first, no class hierarchy") applies just as
well here: six tables is not enough surface area to justify SQLAlchemy's
overhead, and plain SQL is easier for the rest of the team to read.
"""
import json
import sqlite3
from contextlib import contextmanager
from pathlib import Path

DB_PATH = Path(__file__).parent / "mastrr.db"

SCHEMA = """
CREATE TABLE IF NOT EXISTS questions (
    id              TEXT PRIMARY KEY,
    sub_skill       TEXT NOT NULL,
    difficulty      INTEGER NOT NULL CHECK (difficulty BETWEEN 1 AND 5),
    text            TEXT NOT NULL,
    option_a        TEXT NOT NULL,
    option_b        TEXT NOT NULL,
    option_c        TEXT NOT NULL,
    option_d        TEXT NOT NULL,
    correct_answer  TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS sub_skill_graph_nodes (
    name TEXT PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS sub_skill_graph_edges (
    from_skill TEXT NOT NULL,
    to_skill   TEXT NOT NULL,
    PRIMARY KEY (from_skill, to_skill)
);

CREATE TABLE IF NOT EXISTS mastery_estimates (
    learner_id  TEXT NOT NULL,
    sub_skill   TEXT NOT NULL,
    score       REAL NOT NULL,
    confidence  REAL NOT NULL,
    n_attempted INTEGER NOT NULL,
    updated_at  TEXT NOT NULL,
    PRIMARY KEY (learner_id, sub_skill)
);

CREATE TABLE IF NOT EXISTS gaps (
    learner_id     TEXT NOT NULL,
    sub_skill      TEXT NOT NULL,
    score          REAL NOT NULL,
    priority_rank  INTEGER,
    status         TEXT NOT NULL DEFAULT 'detected',
    PRIMARY KEY (learner_id, sub_skill)
);

CREATE TABLE IF NOT EXISTS tutoring_content (
    gap_id               TEXT PRIMARY KEY,
    learner_id           TEXT NOT NULL,
    sub_skill            TEXT NOT NULL,
    explanation          TEXT NOT NULL,
    source_chunks        TEXT NOT NULL,  -- JSON list
    retest_question_ids  TEXT NOT NULL,  -- JSON list
    generated_by         TEXT NOT NULL   -- 'llm' | 'extractive_fallback'
);

CREATE TABLE IF NOT EXISTS learner_state (
    learner_id TEXT PRIMARY KEY,
    stage      TEXT NOT NULL DEFAULT 'not_started',
    history    TEXT NOT NULL DEFAULT '[]'  -- JSON list
);

-- Operational only (not one of the six contracts): holds an in-progress
-- staircase test between /diagnostic/start and /diagnostic/answer calls.
CREATE TABLE IF NOT EXISTS diagnostic_sessions (
    session_id       TEXT PRIMARY KEY,
    learner_id       TEXT NOT NULL,
    sub_skill        TEXT NOT NULL,
    difficulty       INTEGER NOT NULL,
    used_ids         TEXT NOT NULL,  -- JSON list
    history          TEXT NOT NULL,  -- JSON list of {difficulty, correct}
    current_question_id TEXT,
    status           TEXT NOT NULL DEFAULT 'in_progress'  -- in_progress | complete
);
"""


def get_connection():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA foreign_keys = ON")
    return conn


@contextmanager
def get_cursor(commit=False):
    conn = get_connection()
    try:
        cur = conn.cursor()
        yield cur
        if commit:
            conn.commit()
    finally:
        conn.close()


def init_db():
    with get_cursor(commit=True) as cur:
        cur.executescript(SCHEMA)


def is_seeded() -> bool:
    with get_cursor() as cur:
        cur.execute("SELECT COUNT(*) AS c FROM questions")
        return cur.fetchone()["c"] > 0


def row_to_question_dict(row: sqlite3.Row) -> dict:
    return {
        "id": row["id"],
        "sub_skill": row["sub_skill"],
        "difficulty": row["difficulty"],
        "text": row["text"],
        "options": [row["option_a"], row["option_b"], row["option_c"], row["option_d"]],
        "correct_answer": row["correct_answer"],
    }


def dumps(obj) -> str:
    return json.dumps(obj)


def loads(s: str):
    return json.loads(s) if s else []
