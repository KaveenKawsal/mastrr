# -*- coding: utf-8 -*-
"""
Small, focused tests for database.py's schema/helpers and graph_utils.py's
CSV-loading + contract-shaping, isolated from the bigger integration flows
covered elsewhere in this suite.
"""
import csv

from backend import database
from backend import graph_utils
from backend.database import get_cursor


def test_is_seeded_reflects_whether_questions_table_has_rows(test_db):
    assert database.is_seeded() is False

    with get_cursor(commit=True) as cur:
        cur.execute(
            """INSERT INTO questions (id, sub_skill, difficulty, text, option_a, option_b, option_c, option_d, correct_answer)
               VALUES ('q1', 'Percentages', 1, 'text', 'a', 'b', 'c', 'd', 'a')"""
        )
    assert database.is_seeded() is True


def test_row_to_question_dict_shape(test_db):
    with get_cursor(commit=True) as cur:
        cur.execute(
            """INSERT INTO questions (id, sub_skill, difficulty, text, option_a, option_b, option_c, option_d, correct_answer)
               VALUES ('q1', 'Percentages', 2, 'What is X?', 'a', 'b', 'c', 'd', 'b')"""
        )
    with get_cursor() as cur:
        cur.execute("SELECT * FROM questions WHERE id = 'q1'")
        row = cur.fetchone()

    q = database.row_to_question_dict(row)
    assert q == {
        "id": "q1",
        "sub_skill": "Percentages",
        "difficulty": 2,
        "text": "What is X?",
        "options": ["a", "b", "c", "d"],
        "correct_answer": "b",
    }


def test_loads_dumps_roundtrip():
    data = [{"a": 1}, {"b": 2}]
    assert database.loads(database.dumps(data)) == data


def test_loads_treats_empty_or_missing_json_as_empty_list():
    assert database.loads("") == []
    assert database.loads(None) == []


def test_load_graph_includes_standalone_roots_even_with_no_edges():
    G = graph_utils.load_graph()
    for root in graph_utils.STANDALONE_ROOTS:
        assert root in G.nodes()
        assert G.in_degree(root) == 0
        assert G.out_degree(root) == 0


def test_load_graph_with_a_custom_csv_path(tmp_path):
    csv_path = tmp_path / "prereqs.csv"
    with open(csv_path, "w", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=["sub_skill", "prerequisite"])
        writer.writeheader()
        writer.writerow({"sub_skill": "B", "prerequisite": "A"})

    G = graph_utils.load_graph(csv_path=csv_path)
    assert G.has_edge("A", "B")
    # standalone roots are always added, regardless of which CSV was used
    for root in graph_utils.STANDALONE_ROOTS:
        assert root in G.nodes()


def test_graph_as_contract_shape():
    G = graph_utils.load_graph()
    contract = graph_utils.graph_as_contract(G)

    assert set(contract.keys()) == {"nodes", "edges"}
    assert "Percentages" in contract["nodes"]
    assert {"from": "Percentages", "to": "Profit & Loss"} in contract["edges"]
