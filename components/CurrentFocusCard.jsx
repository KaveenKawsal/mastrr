export default function CurrentFocusCard({ focus, onStartDiagnostic }) {
  if (!focus) {
    return (
      <div className="rail-section">
        <p className="rail-heading">Current focus</p>
        <p className="empty-state">No open gaps right now. Take a diagnostic on any untested topic.</p>
      </div>
    );
  }

  return (
    <div className="rail-section">
      <p className="rail-heading">Current focus</p>
      <div className="focus-card">
        <p className="focus-skill">{focus.sub_skill}</p>
        <p className="focus-action">{focus.action}</p>
        <button className="focus-button" onClick={() => onStartDiagnostic(focus.sub_skill)}>
          Start diagnostic <span aria-hidden="true">↗</span>
        </button>
      </div>
    </div>
  );
}
