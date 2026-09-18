# -*- coding: utf-8 -*-
"""
Unit tests for retrieval.py -- in particular the sub-skill scoping this
module exists to add (see its own docstring: a global TF-IDF search across
every notes file let an unrelated topic's chunk outrank the actual target
topic whenever it happened to repeat query words more). These tests run
against the real notes corpus on disk, not a mocked one.
"""
import retrieval


def test_scopes_results_to_the_target_subskills_own_notes_file_when_it_has_enough():
    # percentages.txt has 4 paragraphs -- more than top_k=3, so scoping alone
    # should satisfy the request without any backfill from other files
    results = retrieval.retrieve_top_chunks(
        query="Explain the concept of Percentages with common mistakes",
        top_k=3,
        sub_skill="Percentages",
    )
    assert len(results) == 3
    assert all(chunk_id.startswith("percentages.txt#") for chunk_id, _ in results)


def test_backfills_from_full_corpus_when_subskills_own_file_runs_short():
    # ratio_and_proportion.txt only has 3 paragraphs; asking for 5 must pull
    # the rest from elsewhere in the corpus rather than returning fewer than 5
    results = retrieval.retrieve_top_chunks(
        query="Explain Ratio and Proportion",
        top_k=5,
        sub_skill="Ratio & Proportion",
    )
    assert len(results) == 5

    own_file = [cid for cid, _ in results if cid.startswith("ratio_and_proportion.txt#")]
    backfilled = [cid for cid, _ in results if not cid.startswith("ratio_and_proportion.txt#")]
    assert len(own_file) == 3  # all of the sub-skill's own chunks, ranked first
    assert len(backfilled) == 2
    assert len({cid for cid, _ in results}) == 5  # no duplicates between own-file and backfill


def test_falls_back_to_full_corpus_for_a_subskill_with_no_notes_file():
    results = retrieval.retrieve_top_chunks(
        query="Explain this topic",
        top_k=3,
        sub_skill="Not A Real Sub-Skill With No Notes File",
    )
    assert len(results) == 3  # still returns results, just unscoped


def test_normalize_tokens_matches_filenames_that_dont_match_the_subskill_name_verbatim():
    # this is the exact mismatch retrieval.py's docstring calls out:
    # "Ratio & Proportion" vs. its notes file "ratio_and_proportion.txt"
    assert retrieval._normalize_tokens("Ratio & Proportion") == retrieval._normalize_tokens("ratio_and_proportion")
    assert retrieval._normalize_tokens("Profit & Loss") == retrieval._normalize_tokens("profit_loss")


def test_normalize_tokens_drops_the_word_and_so_it_doesnt_cause_false_mismatches():
    # "and" is stripped so "Ratio and Proportion" phrasing and the
    # underscore-joined filename tokenize to the same set
    assert "and" not in retrieval._normalize_tokens("Ratio and Proportion")
