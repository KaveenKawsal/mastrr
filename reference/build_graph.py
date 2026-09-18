import csv
import networkx as nx

# ---------------------------------------------------------------------------
# Step 3: load the edge list into a directed graph
# ---------------------------------------------------------------------------
G = nx.DiGraph()

with open("prerequisites.csv") as f:
    reader = csv.DictReader(f)
    for row in reader:
        # add_edge(A, B) means: A must come before B
        G.add_edge(row["prerequisite"], row["sub_skill"])

# a few topics have no prerequisite AND nothing depends on them yet
# (they never appear in the CSV at all) -- add them explicitly so they
# aren't silently missing from the graph
standalone_roots = ["Simplification", "Coding-Decoding", "Series", "Clocks & Calendars"]
G.add_nodes_from(standalone_roots)

print(f"Total sub-skills (nodes): {G.number_of_nodes()}")
print(f"Total prerequisite links (edges): {G.number_of_edges()}")
print()

# ---------------------------------------------------------------------------
# Validity check: no student should ever face a circular requirement
# (e.g. "A needs B" and "B needs A" at the same time)
# ---------------------------------------------------------------------------
is_valid = nx.is_directed_acyclic_graph(G)
print(f"Graph is valid (no circular dependencies): {is_valid}")

if not is_valid:
    cycle = nx.find_cycle(G)
    print(f"Problem found in this loop: {cycle}")
else:
    print()
    print("Full valid learning order (prerequisites always come first):")
    for i, topic in enumerate(nx.topological_sort(G), start=1):
        print(f"  {i:2d}. {topic}")

# ---------------------------------------------------------------------------
# Step 4: test the ordering logic on a fake student's weak topics
# ---------------------------------------------------------------------------
print()
print("=" * 60)
print("Test: a fake student is weak in 3 topics, in random order:")
fake_weak_topics = ["Profit & Loss", "Percentages", "Time & Distance"]
print(f"  Detected as weak (unordered): {fake_weak_topics}")

# keep only the fake student's weak topics, but in the correct fix-order
full_order = list(nx.topological_sort(G))
fix_order = [t for t in full_order if t in fake_weak_topics]

print(f"  Correct order to fix them in: {fix_order}")
print()
print("  (Percentages should come first, since Profit & Loss and")
print("   Time & Distance both depend on it, directly or indirectly.)")
