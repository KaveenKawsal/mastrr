import { useCallback, useEffect, useMemo, useState } from "react";
import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";
import { api } from "../api.js";
import CurrentFocusCard from "../components/CurrentFocusCard.jsx";
import MasteryOverviewChart from "../components/MasteryOverviewChart.jsx";
import GapWorkPanel from "../components/GapWorkPanel.jsx";

const STATUS_COLOR = {
  not_tested: "#9ca3af",
  mastered: "#2f9e44",
  gap_in_tutoring: "#e8a33d",
  gap_unresolved: "#d0503f",
};

const LEGEND = [
  { status: "not_tested", label: "Not tested" },
  { status: "mastered", label: "Mastered" },
  { status: "gap_in_tutoring", label: "Gap -- in tutoring" },
  { status: "gap_unresolved", label: "Gap -- unresolved" },
];

function layoutGraph(nodes, edges) {
  const incoming = {};
  nodes.forEach((n) => (incoming[n.id] = []));
  edges.forEach((e) => {
    if (incoming[e.to]) incoming[e.to].push(e.from);
  });

  const level = {};
  function computeLevel(id, seen) {
    if (level[id] !== undefined) return level[id];
    if (seen.has(id)) return 0;
    seen.add(id);
    const preds = incoming[id] || [];
    level[id] = preds.length === 0 ? 0 : 1 + Math.max(...preds.map((p) => computeLevel(p, seen)));
    return level[id];
  }

  nodes.forEach((n) => computeLevel(n.id, new Set()));

  const byLevel = {};
  nodes.forEach((n) => {
    const lvl = level[n.id];
    (byLevel[lvl] = byLevel[lvl] || []).push(n.id);
  });

  const positions = {};
  const xGap = 210;
  const yGap = 74;
  Object.entries(byLevel).forEach(([lvlStr, ids]) => {
    const lvl = Number(lvlStr);
    ids.forEach((id, idx) => {
      positions[id] = { x: lvl * xGap, y: idx * yGap };
    });
  });

  return positions;
}

export default function RoadmapScreen({ learnerId, onStartDiagnostic }) {
  const [roadmap, setRoadmap] = useState(null);
  const [selectedNode, setSelectedNode] = useState(null);
  const [error, setError] = useState(null);

  const refresh = useCallback(() => {
    api
      .getRoadmap(learnerId)
      .then(setRoadmap)
      .catch((e) => setError(e.message));
  }, [learnerId]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const { rfNodes, rfEdges } = useMemo(() => {
    if (!roadmap) return { rfNodes: [], rfEdges: [] };
    const positions = layoutGraph(roadmap.graph.nodes, roadmap.graph.edges);
    const rfNodes = roadmap.graph.nodes.map((n) => ({
      id: n.id,
      position: positions[n.id] || { x: 0, y: 0 },
      data: { label: n.id },
      className: `flow-node${n.id === selectedNode ? " selected" : ""}`,
      style: { background: STATUS_COLOR[n.status] },
    }));
    const rfEdges = roadmap.graph.edges.map((e) => ({
      id: `${e.from}->${e.to}`,
      source: e.from,
      target: e.to,
      style: { stroke: "var(--border)" },
    }));
    return { rfNodes, rfEdges };
  }, [roadmap, selectedNode]);

  if (error) {
    return (
      <div className="roadmap-screen">
        <p className="empty-state" style={{ margin: "auto" }}>
          Couldn't load the roadmap: {error}
        </p>
      </div>
    );
  }

  if (!roadmap) {
    return (
      <div className="roadmap-screen">
        <p className="empty-state" style={{ margin: "auto" }}>
          Loading roadmap…
        </p>
      </div>
    );
  }

  const selectedStatus = selectedNode
    ? roadmap.graph.nodes.find((n) => n.id === selectedNode)?.status
    : null;

  return (
    <div className="roadmap-screen">
      <div className="roadmap-graph">
        <ReactFlow
          nodes={rfNodes}
          edges={rfEdges}
          onNodeClick={(_, node) => setSelectedNode(node.id)}
          nodesDraggable={false}
          nodesConnectable={false}
          fitView
          proOptions={{ hideAttribution: true }}
        >
          <Background color="var(--border)" gap={24} />
          <Controls showInteractive={false} />
        </ReactFlow>
      </div>

      <div className="roadmap-rail">
        <CurrentFocusCard focus={roadmap.current_focus} onStartDiagnostic={onStartDiagnostic} />

        <MasteryOverviewChart nodes={roadmap.graph.nodes} />

        {selectedNode && (
          <GapWorkPanel
            key={selectedNode}
            learnerId={learnerId}
            subSkill={selectedNode}
            status={selectedStatus}
            onStartDiagnostic={onStartDiagnostic}
            onResolved={refresh}
          />
        )}

        <div className="rail-section">
          <p className="rail-heading">Legend</p>
          <div className="legend">
            {LEGEND.map((item) => (
              <div key={item.status} className="legend-row">
                <span className="legend-swatch" style={{ background: STATUS_COLOR[item.status] }} />
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
