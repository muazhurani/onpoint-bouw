/**
 * The OnPoint logo mark: a total-station reticle drawn as the letter "O" —
 * circle, four tick marks, yellow center point.
 */
export default function CrosshairMark({
  className = "h-6 w-6",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle
        cx="12"
        cy="12"
        r="8"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <line x1="12" y1="1" x2="12" y2="5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="12" y1="18.5" x2="12" y2="23" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="1" y1="12" x2="5.5" y2="12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="18.5" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="12" r="2.2" fill="var(--color-survey-yellow)" />
    </svg>
  );
}
