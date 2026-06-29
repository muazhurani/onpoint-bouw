"use client";

import Image from "next/image";
import InquiryButton from "./InquiryButton";
import { useDictionary } from "./DictionaryProvider";

const POINTS = [
  { x: "6%", y: "16%" },
  { x: "26%", y: "9%" },
  { x: "50%", y: "13%" },
  { x: "4%", y: "52%" },
  { x: "10%", y: "80%" },
  { x: "34%", y: "87%" },
  { x: "55%", y: "78%" },
  { x: "94%", y: "20%" },
  { x: "96%", y: "70%" },
];

export default function Hero() {
  const { dict } = useDictionary();
  const hero = dict.hero;

  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col overflow-hidden bg-ink text-paper"
    >
      <Image
        src="/images/onpoint-residential-renovation-hero.png"
        alt={hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-ink/88 via-ink/56 to-ink/12"
      />
      <div aria-hidden="true" className="layout-grid-dark absolute inset-0 opacity-35" />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {POINTS.map((p, i) => (
          <svg
            key={i}
            viewBox="0 0 12 12"
            className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 text-paper/25"
            style={{ left: p.x, top: p.y }}
          >
            <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ))}
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1200px] flex-1 items-center gap-10 px-6 pb-10 pt-36 wide:grid-cols-[1.1fr_0.9fr] wide:gap-6 wide:pb-0">
        <div>
          <p className="eyebrow fade-up text-paper/75">
            <span aria-hidden="true" className="mr-2 text-accent-yellow">
              +
            </span>
            {hero.eyebrow}
          </p>

          <h1 className="fade-up mt-6 max-w-[13ch] font-display text-[clamp(2.8rem,6.2vw,5rem)] font-bold leading-[1.04] tracking-[-0.03em]">
            {hero.h1Before}{" "}
            <span className="relative inline-block">
              {hero.h1Highlight}
              <svg
                viewBox="0 0 100 8"
                preserveAspectRatio="none"
                aria-hidden="true"
                className="absolute -bottom-[0.04em] left-0 h-[0.09em] w-full"
              >
                <line
                  x1="1"
                  y1="4"
                  x2="99"
                  y2="4"
                  pathLength={1}
                  className="draw-underline"
                  stroke="var(--color-accent-yellow)"
                  strokeWidth="8"
                />
              </svg>
            </span>
          </h1>

          <p
            className="fade-up mt-8 max-w-[47ch] text-[1.125rem] leading-[1.7] text-paper/76"
            style={{ animationDelay: "120ms" }}
          >
            {hero.subhead}
          </p>

          <div
            className="fade-up mt-10 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "200ms" }}
          >
            <InquiryButton
              kind="quote"
              className="bg-accent-yellow px-7 py-3.5 font-medium text-ink transition-all duration-150 hover:-translate-y-0.5 hover:bg-signal-orange hover:shadow-[0_8px_24px_rgb(16_20_24/0.07)]"
            >
              {hero.requestQuote}
            </InquiryButton>
            <a
              href="tel:+31614686059"
              className="border border-paper/40 px-7 py-3.5 font-medium text-paper transition-all duration-150 hover:-translate-y-0.5 hover:border-paper"
            >
              {hero.call}
            </a>
          </div>
        </div>

        <div className="hidden wide:block" />
      </div>

      <div className="relative z-10 border-t border-white/15 bg-ink/72 backdrop-blur-sm">
        <dl
          className="fade-up mx-auto flex w-full max-w-[1200px] flex-wrap items-baseline gap-x-12 gap-y-3 px-6 py-6"
          style={{ animationDelay: "350ms" }}
        >
          {hero.stats.map((s) => (
            <div key={s.label} className="flex items-baseline gap-3">
              <dd className="font-mono text-[1.0625rem] font-medium text-paper">
                {s.value}
              </dd>
              <dt className="eyebrow text-paper/55">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
