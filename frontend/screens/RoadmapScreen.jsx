import { useCallback, useEffect, useMemo, useState } from "react";
import ReactFlow, { Background, Controls, MarkerType, Position } from "reactflow";
import "reactflow/dist/style.css";
import { api } from "../api.js";
import MagBackground from "../components/MagBackground.jsx";
import CurrentFocusCard from "../components/CurrentFocusCard.jsx";
import MasteryOverviewChart from "../components/MasteryOverviewChart.jsx";
import GapWorkPanel from "../components/GapWorkPanel.jsx";

const STATUS_CONFIG = {
  mastered: {
    color: "#10b981",
    label: "Mastered",
    icon: "✓",
    border: "#10b981",
    bg: "rgba(16, 185, 129, 0.16)",
  },
  gap_in_tutoring: {
    color: "#f59e0b",
    label: "In Tutoring",
    icon: "⚡",
    border: "#f59e0b",
    bg: "rgba(245, 158, 11, 0.16)",
  },
  gap_unresolved: {
    color: "#ef4444",
    label: "Gap Detected",
    icon: "!",
    border: "#ef4444",
    bg: "rgba(239, 68, 68, 0.16)",
  },
  not_tested: {
    color: "#94a3b8",
    label: "Not Tested",
    icon: "○",
    border: "#475569",
    bg: "rgba(148, 163, 184, 0.1)",
  },
};

const NEXT_CONFIG = {
  color: "#38bdf8",
  label: "Next Up",
  icon: "★",
  border: "#38bdf8",
  bg: "rgba(56, 189, 248, 0.2)",
};

const PATH_COLOR = "#fb923c";

const LEGEND = [
  { status: "mastered", label: "Mastered", color: "#10b981" },
  { status: "unlocked", label: "Next up (Ready)", color: "#38bdf8" },
  { status: "gap_in_tutoring", label: "Gap -- in tutoring", color: "#f59e0b" },
  { status: "gap_unresolved", label: "Gap -- unresolved", color: "#ef4444" },
  { status: "not_tested", label: "Not tested yet", color: "#64748b" },
];

function formatTitle(id) {
  if (!id) return "";
  return id
    .replace(/[_-]/g, " ")
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

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

  // Sort nodes in each level based on the average position of their prerequisites (barycenter heuristic)
  const maxLvl = Math.max(...Object.keys(byLevel).map(Number), 0);
  for (let lvl = 1; lvl <= maxLvl; lvl++) {
    const prevOrder = {};
    (byLevel[lvl - 1] || []).forEach((nid, idx) => {
      prevOrder[nid] = idx;
    });

    (byLevel[lvl] || []).sort((a, b) => {
      const predsA = incoming[a] || [];
      const predsB = incoming[b] || [];
      const avgA =
        predsA.length > 0
          ? predsA.reduce((sum, p) => sum + (prevOrder[p] ?? 0), 0) / predsA.length
          : 999;
      const avgB =
        predsB.length > 0
          ? predsB.reduce((sum, p) => sum + (prevOrder[p] ?? 0), 0) / predsB.length
          : 999;
      return avgA - avgB;
    });
  }

  // Calculate layout coordinates: generous horizontal and vertical separation
  const maxInLevel = Math.max(...Object.values(byLevel).map((ids) => ids.length), 1);
  const xGap = 340;
  const yGap = 122;
  const positions = {};

  Object.entries(byLevel).forEach(([lvlStr, ids]) => {
    const lvl = Number(lvlStr);
    const colHeight = ids.length * yGap;
    const maxColHeight = maxInLevel * yGap;
    // Vertically center each level column so levels with fewer nodes stay aligned with their parents
    const yOffset = (maxColHeight - colHeight) / 2;

    ids.forEach((id, idx) => {
      positions[id] = {
        x: lvl * xGap + 48,
        y: yOffset + idx * yGap + 48,
      };
    });
  });

  return positions;
}

function getPrerequisitePath(nodeId, edges) {
  const incoming = {};
  edges.forEach((edge) => {
    (incoming[edge.to] ||= []).push(edge.from);
  });

  const pathIds = new Set();
  const pathEdges = new Set();
  const pending = [nodeId];

  while (pending.length > 0) {
    const current = pending.pop();
    (incoming[current] || []).forEach((prerequisite) => {
      pathIds.add(prerequisite);
      pathEdges.add(`${prerequisite}->${current}`);
      pending.push(prerequisite);
    });
  }

  return { pathIds, pathEdges };
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
    const masteredIds = new Set(
      roadmap.graph.nodes.filter((node) => node.status === "mastered").map((node) => node.id),
    );
    const nextIds = new Set(
      roadmap.graph.edges
        .filter((edge) => masteredIds.has(edge.from))
        .map((edge) => edge.to)
        .filter((id) => !masteredIds.has(id)),
    );
    const selectedTopic = roadmap.graph.nodes.find((node) => node.id === selectedNode);
    const selectedPath =
      selectedTopic && selectedTopic.status !== "mastered"
        ? getPrerequisitePath(selectedNode, roadmap.graph.edges)
        : { pathIds: new Set(), pathEdges: new Set() };

    const rfNodes = roadmap.graph.nodes.map((n) => {
      const isMastered = n.status === "mastered";
      const isNext = nextIds.has(n.id) && !isMastered;
      const isSelected = n.id === selectedNode;
      const cfg = isNext ? NEXT_CONFIG : STATUS_CONFIG[n.status] || STATUS_CONFIG.not_tested;

      return {
        id: n.id,
        position: positions[n.id] || { x: 0, y: 0 },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        data: {
          label: (
            <div className="flow-node-content">
              <div className="flow-node-header">
                <span
                  className="flow-node-badge"
                  style={{
                    color: cfg.color,
                    backgroundColor: cfg.bg,
                    borderColor: cfg.border,
                  }}
                >
                  <span className="flow-node-icon">{cfg.icon}</span>
                  {cfg.label}
                </span>
                {isNext && <span className="next-pulse-ring" title="Ready to unlock next" />}
              </div>
              <div className="flow-node-title" title={n.id}>
                {formatTitle(n.id)}
              </div>
            </div>
          ),
        },
        zIndex: isSelected ? 10 : isNext ? 5 : 1,
        className: `flow-node${isSelected ? " selected" : ""}${isNext ? " next-node" : ""} status-${n.status}`,
        style: {
          borderColor: isSelected ? "#38bdf8" : cfg.border,
          boxShadow: isSelected
            ? `0 0 0 3px rgba(56, 189, 248, 0.45), 0 0 24px rgba(56, 189, 248, 0.4), 0 12px 24px rgba(0, 0, 0, 0.6)`
            : isNext
            ? `0 0 0 2px rgba(56, 189, 248, 0.35), 0 0 16px rgba(56, 189, 248, 0.25), 0 8px 18px rgba(0, 0, 0, 0.5)`
            : `0 4px 16px rgba(0, 0, 0, 0.4), 0 0 8px ${cfg.bg}`,
        },
      };
    });

    const rfEdges = roadmap.graph.edges.map((e) => {
      const edgeKey = `${e.from}->${e.to}`;
      const isPrereq = selectedPath.pathEdges.has(edgeKey);
      return {
        id: edgeKey,
        source: e.from,
        target: e.to,
        type: "smoothstep",
        animated: isPrereq,
        zIndex: isPrereq ? 4 : 0,
        className: isPrereq ? "prerequisite-edge" : "standard-edge",
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 18,
          height: 18,
          color: isPrereq ? PATH_COLOR : "rgba(148, 163, 184, 0.6)",
        },
        style: isPrereq
          ? {
              stroke: PATH_COLOR,
              strokeWidth: 3.5,
              filter: "drop-shadow(0 0 6px rgba(251, 146, 60, 0.8))",
            }
          : {
              stroke: "rgba(148, 163, 184, 0.35)",
              strokeWidth: 2,
            },
      };
    });

    return { rfNodes, rfEdges };
  }, [roadmap, selectedNode]);

  if (error) {
    return (
      <div className="roadmap-screen dark-theme">
        <p className="empty-state" style={{ margin: "auto" }}>
          Couldn't load the roadmap: {error}
        </p>
      </div>
    );
  }

  if (!roadmap) {
    return (
      <div className="roadmap-screen dark-theme">
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
    <div className="roadmap-screen dark-theme">
      <div className="roadmap-main-area">
        <div className="roadmap-top-bar">
          <div className="map-title-wrap">
            <span className="map-kicker">Skill Graph</span>
            <h1 className="map-title">Prerequisite Roadmap</h1>
          </div>
          <div className="map-hint">
            <span className="map-hint-dot" /> Select a node to trace prerequisites & actions
          </div>
        </div>

        <div className="roadmap-canvas-wrapper">
          <MagBackground theme="dark" density={220} particlesScale={0.75} />
          <ReactFlow
            nodes={rfNodes}
            edges={rfEdges}
            onNodeClick={(_, node) => setSelectedNode(node.id)}
            nodesDraggable={true}
            nodesConnectable={false}
            fitView
            fitViewOptions={{ padding: 0.15 }}
            proOptions={{ hideAttribution: true }}
          >
            <Background color="rgba(255, 255, 255, 0.08)" gap={32} size={1.2} />
            <Controls showInteractive={false} />
          </ReactFlow>
        </div>
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
                <span className="legend-swatch" style={{ background: item.color }} />
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
