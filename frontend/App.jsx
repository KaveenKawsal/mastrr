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
        <span className="app-wordmark">Mastrr</span>
        {screen !== "start" && <span className="learner-chip">{learnerId}</span>}
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
