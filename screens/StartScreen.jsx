export default function StartScreen({ learnerId, onLearnerIdChange, onContinue }) {
  return (
    <div className="start-screen">
      <div className="start-kicker"><span className="kicker-dot" /> Adaptive learning workspace</div>
      <h1>Find your gaps.<br /><em>Close them in order.</em></h1>
      <p className="tagline">
        A short diagnostic per topic, a roadmap that always tells you what to fix next, and a
        retest to prove it stuck.
      </p>

      <div className="start-form">
        <label className="field-label" htmlFor="learner-id">Learner ID</label>
        <div className="input-row">
          <input
            id="learner-id"
            className="text-input"
            value={learnerId}
            onChange={(e) => onLearnerIdChange(e.target.value)}
            placeholder="e.g. student_042"
          />
          <button className="primary-button" onClick={onContinue} disabled={!learnerId.trim()}>
            Open roadmap <span aria-hidden="true">↗</span>
          </button>
        </div>
      </div>
      <div className="start-notes">
        <span><strong>01</strong> Diagnose</span>
        <span><strong>02</strong> Practice</span>
        <span><strong>03</strong> Retest</span>
      </div>
    </div>
  );
}
