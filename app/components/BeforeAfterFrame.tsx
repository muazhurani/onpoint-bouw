"use client";

import Image from "next/image";
import { useState } from "react";
import { ImageIcon } from "lucide-react";
import { CornerTicks } from "./PhotoFrame";
import { useDictionary } from "./DictionaryProvider";

type BeforeAfterFrameProps = {
  afterSrc: string;
  afterAlt: string;
  beforeSrc?: string;
  beforeAlt?: string;
  sizes?: string;
};

/**
 * Photo plate with a Before/After toggle. The "before" image only mounts
 * after the first toggle, so cards stay light on initial load. Toggle
 * buttons sit above any surrounding stretched link (z-10 + preventDefault).
 */
export default function BeforeAfterFrame({
  afterSrc,
  afterAlt,
  beforeSrc,
  beforeAlt = "",
  sizes = "(max-width: 640px) calc(100vw - 48px), (max-width: 1024px) 50vw, 370px",
}: BeforeAfterFrameProps) {
  const { dict } = useDictionary();
  const copy = dict.projects;
  const [showBefore, setShowBefore] = useState(false);
  const [beforeMounted, setBeforeMounted] = useState(false);

  const options = [
    { before: true, label: copy.beforeLabel },
    { before: false, label: copy.afterLabel },
  ];

  return (
    <div className="relative aspect-[4/3] overflow-hidden border border-grid-line bg-ink/[0.04]">
      <CornerTicks />
      <Image
        src={afterSrc}
        alt={afterAlt}
        fill
        sizes={sizes}
        className={`object-cover transition-opacity duration-300 ${
          showBefore ? "opacity-0" : "opacity-100"
        }`}
      />
      {beforeMounted &&
        (beforeSrc ? (
          <Image
            src={beforeSrc}
            alt={beforeAlt}
            fill
            sizes={sizes}
            className={`object-cover transition-opacity duration-300 ${
              showBefore ? "opacity-100" : "opacity-0"
            }`}
          />
        ) : (
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center gap-3 bg-paper p-4 transition-opacity duration-300 ${
              showBefore ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <ImageIcon
              aria-hidden="true"
              strokeWidth={1.5}
              className="h-8 w-8 text-slate"
            />
            <span className="text-center font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-slate">
              {copy.beforePlaceholder}
            </span>
          </div>
        ))}

      <div className="absolute bottom-3 left-3 z-10 flex border border-ink/20 bg-paper/90 backdrop-blur-sm">
        {options.map((option) => (
          <button
            key={option.label}
            type="button"
            aria-pressed={showBefore === option.before}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              setShowBefore(option.before);
              if (option.before) setBeforeMounted(true);
            }}
            className={`px-3 py-1.5 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.08em] transition-colors duration-150 ${
              showBefore === option.before
                ? "bg-accent-yellow text-ink"
                : "text-slate hover:text-ink"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
