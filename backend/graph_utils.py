# -*- coding: utf-8 -*-
"""
graph_utils.py -- importable version of Sri Somesh's reference/build_graph.py.

reference/build_graph.py is a standalone script -- it prints a report
when run directly, which is exactly what you want at the terminal but
not what you want every time an API process imports it. This module
loads the identical graph (same CSV, same standalone-roots list) as a
plain function the API can call, so Track 2's real graph is the one
actually powering the dashboard -- Checkpoint 1 in the plan, done.

If the standalone-roots list in reference/build_graph.py ever changes,
mirror the change here too.
"""
import csv
from pathlib import Path

import networkx as nx

PREREQ_CSV = Path(__file__).resolve().parent.parent / "knowledge" / "prerequisites.csv"
STANDALONE_ROOTS = ["Simplification", "Coding-Decoding", "Series", "Clocks & Calendars"]


def load_graph(csv_path=None) -> nx.DiGraph:
    csv_path = csv_path or PREREQ_CSV
    G = nx.DiGraph()
    with open(csv_path, newline="") as f:
        for row in csv.DictReader(f):
            G.add_edge(row["prerequisite"], row["sub_skill"])
    G.add_nodes_from(STANDALONE_ROOTS)
    return G


def topological_fix_order(G: nx.DiGraph, weak_topics: list) -> list:
    """Same approach as build_graph.py's demo: take the full topological
    order and filter it down to just the weak topics, preserving order."""
    full_order = list(nx.topological_sort(G))
    return [t for t in full_order if t in weak_topics]


def graph_as_contract(G: nx.DiGraph) -> dict:
    """Shape the graph as the SubSkillGraph contract (nodes + edges)."""
    return {
        "nodes": list(G.nodes()),
        "edges": [{"from": u, "to": v} for u, v in G.edges()],
    }
