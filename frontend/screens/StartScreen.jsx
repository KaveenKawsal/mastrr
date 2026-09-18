export default function StartScreen({ learnerId, onLearnerIdChange, onContinue }) {
  return (
    <div className="start-screen">
      <h1>Find your gaps. Close them in order.</h1>
      <p className="tagline">
        A short diagnostic per topic, a roadmap that always tells you what to fix next, and a
        retest to prove it stuck.
      </p>

      <label className="field-label" htmlFor="learner-id">
        Learner ID
      </label>
      <input
        id="learner-id"
        className="text-input"
        value={learnerId}
        onChange={(e) => onLearnerIdChange(e.target.value)}
        placeholder="e.g. student_042"
      />

      <button className="primary-button" onClick={onContinue} disabled={!learnerId.trim()}>
        View my roadmap
      </button>
    </div>
  );
}
