import { useEffect, useState } from "react";
import { api } from "../api.js";

export default function DiagnosticScreen({ learnerId, subSkill, onFinished }) {
  const [sessionId, setSessionId] = useState(null);
  const [question, setQuestion] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [maxQuestions, setMaxQuestions] = useState(6);
  const [selected, setSelected] = useState(null);
  const [lastCorrect, setLastCorrect] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setError(null);
    api
      .startDiagnostic(learnerId, subSkill)
      .then((data) => {
        if (cancelled) return;
        setSessionId(data.session_id);
        setQuestion(data.question);
        setQuestionNumber(data.question_number);
        setMaxQuestions(data.max_questions);
      })
      .catch((e) => setError(e.message));

    return () => {
      cancelled = true;
    };
  }, [learnerId, subSkill]);

  function handleAnswer(option) {
    if (selected) return;
    setSelected(option);
    api
      .answerDiagnostic(sessionId, option)
      .then((data) => {
        if (data.done) {
          setResult(data.mastery_estimate);
          setLastCorrect(null);
          return;
        }
        setLastCorrect(data.correct);
        setTimeout(() => {
          setQuestion(data.question);
          setQuestionNumber(data.question_number);
          setSelected(null);
          setLastCorrect(null);
        }, 650);
      })
      .catch((e) => setError(e.message));
  }

  if (error) {
    return (
      <div className="diagnostic-screen">
        <p className="empty-state">Couldn't start this diagnostic: {error}</p>
      </div>
    );
  }

  if (result) {
    return (
      <div className="diagnostic-screen">
        <div className="result-card">
          <h2>{subSkill} -- diagnostic complete</h2>
          <p>Based on {result.n_attempted} questions, weighted by difficulty:</p>
          <div className="result-score">{Math.round(result.score * 100)}%</div>
          <p style={{ color: "var(--ink-soft)", fontSize: 13 }}>
            confidence {Math.round(result.confidence * 100)}%
          </p>
          <button className="primary-button" onClick={onFinished}>
            View roadmap
          </button>
        </div>
      </div>
    );
  }

  if (!question) {
    return (
      <div className="diagnostic-screen">
        <p className="empty-state">Loading the first question…</p>
      </div>
    );
  }

  return (
    <div className="diagnostic-screen">
      <div className="diagnostic-meta">
        <span>{subSkill}</span>
        <span>
          Question {questionNumber} of {maxQuestions}
        </span>
      </div>
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${(questionNumber / maxQuestions) * 100}%` }}
        />
      </div>

      <div className="staircase-dots">
        {[1, 2, 3, 4, 5].map((level) => (
          <div
            key={level}
            className={`staircase-dot${level === question.difficulty ? " active" : ""}`}
            title={`difficulty ${level}`}
          >
            {level}
          </div>
        ))}
      </div>

      <div className="question-card">
        <p className="question-text">{question.text}</p>
        <div className="option-list">
          {question.options.map((opt) => {
            let cls = "option-button";
            if (selected) {
              if (opt === selected) {
                cls += lastCorrect === false ? " incorrect" : lastCorrect === true ? " correct" : "";
              }
            }
            return (
              <button
                key={opt}
                className={cls}
                disabled={!!selected}
                onClick={() => handleAnswer(opt)}
              >
                {opt}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
