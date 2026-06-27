import Image from "next/image";
import { ImageIcon } from "lucide-react";

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

type PhotoFrameProps = {
  /** Mono label shown inside the placeholder, e.g. "Garden patio project" */
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
 * A photo plate styled like a project sheet: sharp 1px frame,
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
            <ImageIcon
              aria-hidden="true"
              strokeWidth={1.5}
              className="h-8 w-8 text-slate"
            />
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
