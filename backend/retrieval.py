# -*- coding: utf-8 -*-
"""
retrieval.py -- chunking + retrieval over knowledge/notes/, factored out
of run_pipeline.py (which prototyped this inline) into something the API
can call per-request.

run_pipeline.py's prototype ran a single global TF-IDF search across
every note file, keyed only by a query string mentioning the sub-skill
name. In practice that lets a chunk from an unrelated topic outrank the
target topic's own notes whenever it happens to repeat the query words
more (e.g. a "Profit & Loss" paragraph that opens by explaining it
depends on Percentages can outscore a genuine Percentages paragraph for
the query "Explain Percentages..."). But Track 2's own plan is explicit
that retrieval should be scoped to "that sub-skill" -- so this version
restricts ranking to the target sub-skill's own notes file first, and
only falls back to the full corpus if that sub-skill has no dedicated
file yet (e.g. a newly-added Sem 2 DSA topic before its notes exist).

File-to-sub_skill matching is done by token set rather than a hardcoded
slug rule, because the notes filenames aren't perfectly consistent
(e.g. "profit_loss.txt" for "Profit & Loss", vs. "ratio_and_proportion.txt"
for "Ratio & Proportion") -- token-set matching handles both without
special-casing either.
"""
import glob
import os
import re
from pathlib import Path

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

NOTES_DIR = Path(__file__).resolve().parent.parent / "knowledge" / "notes"


def _normalize_tokens(s: str) -> frozenset:
    s = s.lower().replace("&", " ")
    tokens = re.split(r"[^a-z0-9]+", s)
    return frozenset(t for t in tokens if t and t != "and")


def load_chunks(notes_folder=NOTES_DIR):
    """Returns (chunks, chunk_ids, file_of_chunk) where file_of_chunk[i] is the
    notes filename stem that chunk i came from."""
    chunks, chunk_ids, file_of_chunk = [], [], []
    for filepath in sorted(glob.glob(os.path.join(notes_folder, "*.txt"))):
        stem = os.path.splitext(os.path.basename(filepath))[0]
        with open(filepath) as f:
            paragraphs = [p.strip() for p in f.read().split("\n\n") if p.strip()]
        for i, para in enumerate(paragraphs):
            chunks.append(para)
            chunk_ids.append(f"{stem}.txt#chunk{i + 1}")
            file_of_chunk.append(stem)
    return chunks, chunk_ids, file_of_chunk


def _build_file_token_index(file_of_chunk):
    stems = sorted(set(file_of_chunk))
    return {_normalize_tokens(stem): stem for stem in stems}


# Loaded once per process -- the notes corpus doesn't change at request time.
_CHUNKS, _CHUNK_IDS, _FILE_OF_CHUNK = load_chunks()
_FILE_TOKEN_INDEX = _build_file_token_index(_FILE_OF_CHUNK)
_VECTORIZER = TfidfVectorizer(stop_words="english")
_CHUNK_VECTORS = _VECTORIZER.fit_transform(_CHUNKS) if _CHUNKS else None


def _indices_for_sub_skill(sub_skill: str):
    stem = _FILE_TOKEN_INDEX.get(_normalize_tokens(sub_skill))
    if stem is None:
        return []
    return [i for i, f in enumerate(_FILE_OF_CHUNK) if f == stem]


def _rank(query: str, candidate_indices) -> list:
    if not candidate_indices:
        return []
    query_vector = _VECTORIZER.transform([query])
    sub_matrix = _CHUNK_VECTORS[candidate_indices]
    scores = cosine_similarity(query_vector, sub_matrix)[0]
    order = sorted(range(len(candidate_indices)), key=lambda i: scores[i], reverse=True)
    return [candidate_indices[i] for i in order]


def retrieve_top_chunks(query: str, top_k: int = 3, sub_skill: str = None):
    """Returns a list of (chunk_id, chunk_text) tuples, most relevant first.
    When sub_skill is given and has a matching notes file, results are
    restricted to that file; otherwise falls back to the full corpus."""
    if _CHUNK_VECTORS is None:
        return []

    ranked_indices = []
    if sub_skill:
        ranked_indices = _rank(query, _indices_for_sub_skill(sub_skill))

    if len(ranked_indices) < top_k:
        # backfill from the rest of the corpus without duplicating what we have
        already = set(ranked_indices)
        rest = [i for i in range(len(_CHUNKS)) if i not in already]
        ranked_indices += _rank(query, rest)

    top = ranked_indices[:top_k]
    return [(_CHUNK_IDS[i], _CHUNKS[i]) for i in top]
