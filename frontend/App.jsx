import { useState } from "react";
import StartScreen from "./screens/StartScreen.jsx";
import DiagnosticScreen from "./screens/DiagnosticScreen.jsx";
import RoadmapScreen from "./screens/RoadmapScreen.jsx";

function randomLearnerId() {
  return "learner_" + Math.random().toString(36).slice(2, 8);
}

export default function App() {
  const [learnerId, setLearnerId] = useState(randomLearnerId());
  const [screen, setScreen] = useState("start"); // start | diagnostic | roadmap
  const [activeSubSkill, setActiveSubSkill] = useState(null);

  function goToDiagnostic(subSkill) {
    setActiveSubSkill(subSkill);
    setScreen("diagnostic");
  }

  function goToRoadmap() {
    setScreen("roadmap");
  }

  return (
    <div className="app-shell">
      <header className="app-header">
        <div
          className="brand-lockup clickable"
          onClick={() => setScreen("start")}
          title="Return to Start screen"
        >
          <span className="brand-mark">M</span>
          <span className="app-wordmark">Mastrr</span>
        </div>
        <div className="header-context">
          <span className="header-status">
            <span className="status-pulse" /> Learning workspace
          </span>
          {screen !== "start" && (
            <div className="header-actions">
              <span className="learner-chip" title="Current learner session">
                {learnerId}
              </span>
              <button
                className="header-nav-btn"
                onClick={() => setScreen("start")}
                title="Change learner or return to start screen"
              >
                ← Change Learner
              </button>
            </div>
          )}
        </div>
      </header>
      <main className="app-main">
        {screen === "start" && (
          <StartScreen
            learnerId={learnerId}
            onLearnerIdChange={setLearnerId}
            onContinue={goToRoadmap}
          />
        )}
        {screen === "diagnostic" && (
          <DiagnosticScreen
            learnerId={learnerId}
            subSkill={activeSubSkill}
            onFinished={goToRoadmap}
          />
        )}
        {screen === "roadmap" && (
          <RoadmapScreen learnerId={learnerId} onStartDiagnostic={goToDiagnostic} />
        )}
      </main>
    </div>
  );
}
