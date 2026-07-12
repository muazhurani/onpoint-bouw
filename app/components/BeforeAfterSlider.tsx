"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { ChevronsLeftRight, Maximize2, X } from "lucide-react";
import { CornerTicks } from "./PhotoFrame";
import { useDictionary } from "./DictionaryProvider";
import { formatMessage } from "@/app/lib/format-message";

type SliderFrameProps = {
  beforeSrc: string;
  beforeAlt: string;
  afterSrc: string;
  afterAlt: string;
  sizes: string;
  position: number;
  onPositionChange: (position: number) => void;
  beforeLabel: string;
  afterLabel: string;
  sliderLabel: string;
  className: string;
  actions?: ReactNode;
};

/**
 * Interactive comparison frame: the before image is clipped to the left of a
 * draggable divider, the after image shows on the right. Dragging is
 * pointer-based with touch-action pan-y so vertical page scrolling keeps
 * working. Rendered once as the inline card and again inside the lightbox,
 * sharing one position state.
 */
function SliderFrame({
  beforeSrc,
  beforeAlt,
  afterSrc,
  afterAlt,
  sizes,
  position,
  onPositionChange,
  beforeLabel,
  afterLabel,
  sliderLabel,
  className,
  actions,
}: SliderFrameProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  const updateFromClientX = useCallback(
    (clientX: number) => {
      const frame = frameRef.current;
      if (!frame) return;
      const rect = frame.getBoundingClientRect();
      if (!rect.width) return;
      const next = ((clientX - rect.left) / rect.width) * 100;
      onPositionChange(Math.min(100, Math.max(0, next)));
    },
    [onPositionChange],
  );

  return (
    <div
      ref={frameRef}
      className={`relative touch-pan-y select-none overflow-hidden ${className}`}
      onPointerDown={(event) => {
        draggingRef.current = true;
        event.currentTarget.setPointerCapture(event.pointerId);
        updateFromClientX(event.clientX);
      }}
      onPointerMove={(event) => {
        if (draggingRef.current) updateFromClientX(event.clientX);
      }}
      onPointerUp={() => {
        draggingRef.current = false;
      }}
      onPointerCancel={() => {
        draggingRef.current = false;
      }}
    >
      <CornerTicks />
      <Image
        src={afterSrc}
        alt={afterAlt}
        fill
        sizes={sizes}
        className="pointer-events-none object-cover"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          sizes={sizes}
          className="object-cover"
        />
      </div>

      <span className="pointer-events-none absolute left-3 top-3 border border-ink/20 bg-paper/90 px-2.5 py-1 font-mono text-[0.625rem] font-medium uppercase tracking-[0.08em] text-ink backdrop-blur-sm">
        {beforeLabel}
      </span>
      <span className="pointer-events-none absolute right-3 top-3 border border-ink/20 bg-paper/90 px-2.5 py-1 font-mono text-[0.625rem] font-medium uppercase tracking-[0.08em] text-ink backdrop-blur-sm">
        {afterLabel}
      </span>

      <div
        role="slider"
        tabIndex={0}
        aria-label={sliderLabel}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        aria-orientation="horizontal"
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            onPositionChange(Math.max(0, position - 5));
          }
          if (event.key === "ArrowRight") {
            event.preventDefault();
            onPositionChange(Math.min(100, position + 5));
          }
        }}
        className="absolute inset-y-0 w-10 -translate-x-1/2 cursor-ew-resize outline-none"
        style={{ left: `${position}%` }}
      >
        <div className="absolute inset-y-0 left-1/2 w-[2px] -translate-x-1/2 bg-paper shadow-[0_0_8px_rgb(16_20_24/0.35)]" />
        <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-ink/20 bg-accent-yellow text-ink shadow-[0_8px_24px_rgb(16_20_24/0.25)]">
          <ChevronsLeftRight aria-hidden="true" className="h-5 w-5" />
        </div>
      </div>

      {actions}
    </div>
  );
}

type BeforeAfterSliderProps = {
  beforeSrc: string;
  beforeAlt: string;
  afterSrc: string;
  afterAlt: string;
  label?: string;
  sizes?: string;
};

export default function BeforeAfterSlider({
  beforeSrc,
  beforeAlt,
  afterSrc,
  afterAlt,
  label,
  sizes = "(max-width: 640px) calc(100vw - 48px), (max-width: 900px) 50vw, 330px",
}: BeforeAfterSliderProps) {
  const { dict } = useDictionary();
  const copy = dict.projects;
  const gallery = dict.gallery;
  const [position, setPosition] = useState(50);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (!expanded) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setExpanded(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [expanded]);

  const frameProps = {
    beforeSrc,
    beforeAlt,
    afterSrc,
    afterAlt,
    position,
    onPositionChange: setPosition,
    beforeLabel: copy.beforeLabel,
    afterLabel: copy.afterLabel,
    sliderLabel: label ?? copy.sliderLabel,
  };

  return (
    <>
      <SliderFrame
        {...frameProps}
        sizes={sizes}
        className="aspect-[4/3] border border-grid-line bg-ink/[0.04]"
        actions={
          <button
            type="button"
            aria-label={formatMessage(gallery.viewFullSize, {
              label: label ?? copy.sliderLabel,
            })}
            onClick={() => setExpanded(true)}
            onPointerDown={(event) => event.stopPropagation()}
            className="absolute bottom-3 right-3 z-10 flex h-9 w-9 items-center justify-center border border-ink/20 bg-paper/90 text-ink backdrop-blur-sm transition-colors duration-150 hover:bg-accent-yellow"
          >
            <Maximize2 aria-hidden="true" className="h-4 w-4" />
          </button>
        }
      />

      {expanded ? (
        <div
          role="presentation"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/88 p-4 backdrop-blur-sm sm:p-8"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setExpanded(false);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={label ?? copy.sliderLabel}
            className="relative w-full max-w-[1100px]"
          >
            <button
              type="button"
              aria-label={gallery.closeGallery}
              onClick={() => setExpanded(false)}
              className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center border border-paper/30 bg-ink text-paper transition-colors duration-150 hover:border-paper"
            >
              <X aria-hidden="true" className="h-4 w-4" />
            </button>

            <SliderFrame
              {...frameProps}
              sizes="min(1100px, 100vw)"
              className="aspect-[4/3] max-h-[78vh] border border-paper/25 bg-ink"
            />

            <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
              {label ? (
                <p className="font-mono text-[0.75rem] uppercase tracking-[0.08em] text-paper/75">
                  {label}
                </p>
              ) : null}
              <p className="font-mono text-[0.75rem] uppercase tracking-[0.08em] text-paper/55">
                {copy.beforeLabel} / {copy.afterLabel}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
