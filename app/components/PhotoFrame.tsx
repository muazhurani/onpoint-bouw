import Image from "next/image";

/**
 * Corner registration tick marks, like a plot sheet. Parent must be
 * `relative`; pass a light color class on dark backgrounds.
 */
export function CornerTicks({
  className = "text-ink/40",
}: {
  className?: string;
}) {
  const corners = [
    "-left-[5px] -top-[5px]",
    "-right-[5px] -top-[5px]",
    "-left-[5px] -bottom-[5px]",
    "-right-[5px] -bottom-[5px]",
  ];
  return (
    <>
      {corners.map((pos) => (
        <svg
          key={pos}
          viewBox="0 0 10 10"
          aria-hidden="true"
          className={`pointer-events-none absolute h-[10px] w-[10px] ${pos} ${className}`}
        >
          <path d="M5 0v10M0 5h10" stroke="currentColor" strokeWidth="1" />
        </svg>
      ))}
    </>
  );
}

function CameraGlyph() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className="h-8 w-8">
      <rect x="3" y="9" width="26" height="18" rx="1" stroke="var(--color-ink)" strokeOpacity="0.45" strokeWidth="1.5" />
      <path d="M11 9l2.5-4h5L21 9" stroke="var(--color-ink)" strokeOpacity="0.45" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="16" cy="18" r="5.5" stroke="var(--color-ink)" strokeOpacity="0.45" strokeWidth="1.5" />
      <circle cx="16" cy="18" r="1.5" fill="var(--color-survey-yellow)" />
    </svg>
  );
}

type PhotoFrameProps = {
  /** Mono label shown inside the placeholder, e.g. "TOTAL STATION ON CONTROL POINT" */
  label: string;
  /** Figure number for the caption, e.g. "FIG 01" */
  fig?: string;
  /** Caption text under the frame */
  caption?: string;
  /** Tailwind aspect class for the frame */
  aspect?: string;
  /** When real photography is available, pass it here — no refactor needed. */
  src?: string;
  alt?: string;
  className?: string;
};

/**
 * A photo plate styled like a figure from a survey report: sharp 1px frame,
 * corner registration ticks, mono caption. Renders a deliberate placeholder
 * until a real photo (`src`) is supplied.
 */
export default function PhotoFrame({
  label,
  fig,
  caption,
  aspect = "aspect-[4/3]",
  src,
  alt = "",
  className = "",
}: PhotoFrameProps) {
  return (
    <figure className={className}>
      <div
        className={`relative border border-grid-line bg-ink/[0.04] ${aspect}`}
      >
        <CornerTicks />
        {src ? (
          <Image src={src} alt={alt} fill className="object-cover" />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4">
            <CameraGlyph />
            <span className="text-center font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-slate">
              Photo · {label}
            </span>
          </div>
        )}
      </div>
      {(fig || caption) && (
        <figcaption className="mt-3 font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-slate">
          {fig && <span className="text-ink">{fig}</span>}
          {fig && caption && <span aria-hidden="true"> — </span>}
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
