"use client";

import { useDictionary } from "./DictionaryProvider";

export default function Proof() {
  const { dict } = useDictionary();
  const proof = dict.proof;

  return (
    <section
      id="proof"
      className="section-pad scroll-mt-24 border-t border-grid-line"
    >
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <p className="scroll-blur eyebrow text-slate">
          <span aria-hidden="true" className="mr-2 text-accent-yellow">
            +
          </span>
          {proof.eyebrow}
        </p>
        <h2 className="scroll-blur mt-4 max-w-[22ch] font-display text-[clamp(1.9rem,3.5vw,2.5rem)] font-bold leading-[1.15] tracking-[-0.02em]">
          {proof.title}
        </h2>
        <p className="scroll-blur mt-5 max-w-[56ch] text-[1.0625rem] leading-[1.7] text-slate">
          {proof.intro}
        </p>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {proof.items.map((item) => (
            <article
              key={item.title}
              className="flex flex-col border border-grid-line bg-paper p-8 transition-all duration-150 hover:-translate-y-1 hover:border-ink hover:shadow-[0_8px_24px_rgb(16_20_24/0.07)]"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-[0.8125rem] font-medium tracking-[0.08em] text-slate">
                  {item.n}
                </span>
                <span className="border border-ink/15 px-2.5 py-1 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-slate">
                  {item.label}
                </span>
              </div>
              <span aria-hidden="true" className="mt-4 block h-[2px] w-7 bg-accent-yellow" />
              <h3 className="mt-6 font-display text-[1.3rem] font-bold tracking-[-0.01em]">
                {item.title}
              </h3>
              <p className="mt-3 text-[0.9375rem] leading-[1.7] text-slate">
                {item.body}
              </p>
            </article>
          ))}
        </div>

        <dl className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 border-y border-grid-line py-7 md:grid-cols-4">
          {proof.trustBar.map((item) => (
            <div key={item.label}>
              <dd className="font-display text-[1.15rem] font-bold tracking-[-0.01em] text-ink">
                {item.value}
              </dd>
              <dt className="mt-1 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-slate">
                {item.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
