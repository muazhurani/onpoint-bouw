"use client";

import { useDictionary } from "./DictionaryProvider";

export default function Testimonials() {
  const { dict } = useDictionary();
  const testimonials = dict.testimonials;

  return (
    <section
      id="testimonials"
      className="section-pad scroll-mt-24 border-t border-grid-line"
    >
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <p className="scroll-blur eyebrow text-slate">
          <span aria-hidden="true" className="mr-2 text-accent-yellow">
            +
          </span>
          {testimonials.eyebrow}
        </p>
        <h2 className="scroll-blur mt-4 max-w-[22ch] font-display text-[clamp(1.9rem,3.5vw,2.5rem)] font-bold leading-[1.15] tracking-[-0.02em]">
          {testimonials.title}
        </h2>
        <p className="scroll-blur mt-5 max-w-[56ch] text-[1.0625rem] leading-[1.7] text-slate">
          {testimonials.intro}
        </p>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.items.map((item) => (
            <figure
              key={item.name}
              className="flex flex-col justify-between border border-grid-line bg-paper p-8 transition-all duration-150 hover:-translate-y-1 hover:border-ink hover:shadow-[0_8px_24px_rgb(16_20_24/0.07)]"
            >
              <blockquote className="relative">
                <span
                  aria-hidden="true"
                  className="block font-display text-[2rem] font-bold leading-none text-accent-yellow"
                >
                  &ldquo;
                </span>
                <p className="mt-3 text-[1rem] leading-[1.7] text-ink">
                  {item.quote}
                </p>
              </blockquote>
              <figcaption className="mt-6 border-t border-grid-line pt-5">
                <span className="block font-medium text-ink">
                  {item.name}, {item.town}
                </span>
                <span className="mt-2 inline-block border border-ink/15 px-2.5 py-1 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-slate">
                  {item.projectType}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <dl className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 border-y border-grid-line py-7 md:grid-cols-4">
          {testimonials.trustBar.map((item) => (
            <div key={item.value}>
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
