/**
 * Two stacked, fixed-position layers that sit behind everything: a slowly
 * drifting aurora gradient and a subtle scan-line grid. Both ignore pointer
 * events so they can never block interaction.
 */
export function GrainOverlay() {
  return (
    <>
      <div className="ab-aurora" aria-hidden>
        <div className="ab-aurora-blob" />
      </div>
      <div className="ab-grid" aria-hidden />
    </>
  );
}

export default GrainOverlay;
