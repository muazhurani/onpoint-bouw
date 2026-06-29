"use client";

import InquiryButton from "./InquiryButton";
import { useDictionary } from "./DictionaryProvider";

export default function Reports() {
  const { dict } = useDictionary();
  const trust = dict.trust;

  return (
    <section
      id="trust"
      className="section-pad scroll-mt-24 border-t border-grid-line"
    >
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <div className="grid gap-8 wide:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] wide:items-end wide:gap-16">
          <div>
            <p className="scroll-blur eyebrow text-slate">
              <span aria-hidden="true" className="mr-2 text-accent-yellow">
                +
              </span>
              {trust.eyebrow}
            </p>
            <h2 className="scroll-blur mt-4 max-w-[18ch] font-display text-[clamp(1.9rem,3.5vw,2.5rem)] font-bold leading-[1.15] tracking-[-0.02em]">
              {trust.title}
            </h2>
          </div>
          <p className="scroll-blur max-w-[46ch] text-[1.0625rem] leading-[1.7] text-slate wide:justify-self-end">
            {trust.intro}
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {trust.points.map((point) => (
            <article
              key={point.title}
              className="border border-grid-line bg-paper p-8 transition-all duration-150 hover:-translate-y-1 hover:border-ink hover:shadow-[0_8px_24px_rgb(16_20_24/0.07)]"
            >
              <span className="font-mono text-[0.8125rem] font-medium tracking-[0.08em] text-slate">
                {point.n}
              </span>
              <span
                aria-hidden="true"
                className="mt-2 block h-[2px] w-7 bg-accent-yellow"
              />
              <h3 className="mt-6 font-display text-[1.3rem] font-bold tracking-[-0.01em]">
                {point.title}
              </h3>
              <p className="mt-3 text-[0.9375rem] leading-[1.7] text-slate">
                {point.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-grid-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[48ch] text-[0.9375rem] leading-[1.7] text-slate">
            {trust.aside}
          </p>
          <InquiryButton
            kind="quote"
            className="shrink-0 bg-accent-yellow px-7 py-3.5 font-medium text-ink transition-all duration-150 hover:-translate-y-0.5 hover:bg-signal-orange"
          >
            {trust.requestQuote}
          </InquiryButton>
        </div>
      </div>
    </section>
  );
}
