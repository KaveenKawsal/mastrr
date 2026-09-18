import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { api } from "../api.js";
import TutoringModal from "./TutoringModal.jsx";

const STATUS_LABEL = {
  not_tested: "Not tested yet",
  mastered: "Mastered",
  gap_in_tutoring: "Gap -- in tutoring",
  gap_unresolved: "Gap -- unresolved",
};

const MODAL_TITLE = {
  tutoring: "Tutoring",
  retest: "Retest",
  result: "Retest result",
};

export default function GapWorkPanel({ learnerId, subSkill, status, onStartDiagnostic, onResolved }) {
  const [tutoring, setTutoring] = useState(null);
  const [loadingTutoring, setLoadingTutoring] = useState(false);
  const [retestQuestions, setRetestQuestions] = useState(null);
  const [answers, setAnswers] = useState({});
  const [retestResult, setRetestResult] = useState(null);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  function fetchTutoring() {
    setLoadingTutoring(true);
    setError(null);
    api
      .requestTutoring(learnerId, subSkill)
      .then((data) => {
        setTutoring(data);
        setRetestQuestions(null);
        setRetestResult(null);
        setAnswers({});
        setModalOpen(true);
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoadingTutoring(false));
  }

  function fetchRetestQuestions() {
    setError(null);
    api
      .getQuestionsBatch(tutoring.retest_question_ids)
      .then(setRetestQuestions)
      .catch((e) => setError(e.message));
  }

  function submitRetest() {
    const payload = Object.entries(answers).map(([question_id, selected_answer]) => ({
      question_id,
      selected_answer,
    }));
    api
      .submitRetest(tutoring.gap_id, payload)
      .then((data) => {
        setRetestResult(data);
        if (data.passed) onResolved();
      })
      .catch((e) => setError(e.message));
  }

  let phase = "gap";
  if (retestResult) phase = "result";
  else if (retestQuestions) phase = "retest";
  else if (tutoring) phase = "tutoring";
  else if (status === "mastered") phase = "mastered";
  else if (status === "not_tested") phase = "not_tested";

  const modalPhases = phase === "tutoring" || phase === "retest" || phase === "result";

  return (
    <div className="rail-section">
      <p className="rail-heading">Selected topic</p>
      <div className="node-detail">
        <h3>{subSkill}</h3>
        <p className="status-label">{STATUS_LABEL[status]}</p>

        {error && <p className="empty-state">{error}</p>}

        {phase === "not_tested" && (
          <button className="primary-button" onClick={() => onStartDiagnostic(subSkill)}>
            Take diagnostic
          </button>
        )}

        {phase === "mastered" && <p className="empty-state">Nothing to do here -- well mastered.</p>}

        {phase === "gap" && (
          <button className="primary-button" onClick={fetchTutoring} disabled={loadingTutoring}>
            {loadingTutoring ? "Fetching notes…" : "Get help for this topic"}
          </button>
        )}

        {modalPhases && (
          <>
            <p className="empty-state">
              {phase === "tutoring" && "Tutoring notes are ready."}
              {phase === "retest" && "Retest in progress."}
              {phase === "result" &&
                (retestResult.passed
                  ? `Passed (${retestResult.n_correct}/${retestResult.n_total}) -- marked mastered.`
                  : `${retestResult.n_correct}/${retestResult.n_total} -- not quite, try again.`)}
            </p>
            <button className="primary-button" onClick={() => setModalOpen(true)}>
              {phase === "tutoring" && "Open tutoring"}
              {phase === "retest" && "Continue retest"}
              {phase === "result" && "View result"}
            </button>
          </>
        )}
      </div>

      {modalPhases && modalOpen && (
        <TutoringModal title={MODAL_TITLE[phase]} onClose={() => setModalOpen(false)}>
          {phase === "tutoring" && (
            <>
              <div className="explanation-text">
                <ReactMarkdown>{tutoring.explanation}</ReactMarkdown>
              </div>
              <p className="chunk-refs">
                Source: {tutoring.source_chunks.join(", ")}
                {tutoring.generated_by === "extractive_fallback" ? " (excerpted from notes)" : " (LLM-generated)"}
              </p>
              <button className="primary-button" onClick={fetchRetestQuestions}>
                Take retest
              </button>
            </>
          )}

          {phase === "retest" && (
            <>
              {retestQuestions.map((q) => (
                <div key={q.id} className="retest-question">
                  <p>{q.text}</p>
                  {q.options.map((opt) => (
                    <label key={opt} className="retest-option">
                      <input
                        type="radio"
                        name={q.id}
                        value={opt}
                        checked={answers[q.id] === opt}
                        onChange={() => setAnswers((prev) => ({ ...prev, [q.id]: opt }))}
                      />{" "}
                      {opt}
                    </label>
                  ))}
                </div>
              ))}
              <button
                className="primary-button"
                onClick={submitRetest}
                disabled={Object.keys(answers).length < retestQuestions.length}
              >
                Submit retest
              </button>
            </>
          )}

          {phase === "result" && (
            <p className="explanation-text">
              {retestResult.passed
                ? `Passed (${retestResult.n_correct}/${retestResult.n_total}) -- marked mastered.`
                : `${retestResult.n_correct}/${retestResult.n_total} -- not quite. Review the notes above and retest again.`}
            </p>
          )}
        </TutoringModal>
      )}
    </div>
  );
}
