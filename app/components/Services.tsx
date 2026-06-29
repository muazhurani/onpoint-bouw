"use client";

import { Bath, HousePlus, Trees } from "lucide-react";
import { useDictionary } from "./DictionaryProvider";

const ICONS = [HousePlus, Trees, Bath];

export default function Services() {
  const { dict } = useDictionary();
  const services = dict.services;

  return (
    <section id="services" className="section-pad scroll-mt-24">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <p className="scroll-blur eyebrow text-slate">
          <span aria-hidden="true" className="mr-2 text-accent-yellow">+</span>
          {services.eyebrow}
        </p>
        <h2 className="scroll-blur mt-4 max-w-[22ch] font-display text-[clamp(1.9rem,3.5vw,2.5rem)] font-bold leading-[1.15] tracking-[-0.02em]">
          {services.title}
        </h2>
        <p className="scroll-blur mt-5 max-w-[56ch] text-[1.0625rem] leading-[1.7] text-slate">
          {services.intro}
        </p>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {services.items.map((s, index) => {
            const Icon = ICONS[index];
            return (
              <article
                key={s.title}
                className="group border border-grid-line bg-paper p-8 transition-all duration-150 hover:-translate-y-1 hover:border-ink hover:shadow-[0_8px_24px_rgb(16_20_24/0.07)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="font-mono text-[0.8125rem] font-medium tracking-[0.08em] text-slate">
                      {s.n}
                    </span>
                    <span
                      aria-hidden="true"
                      className="mt-2 block h-[2px] w-7 bg-accent-yellow"
                    />
                  </div>
                  <Icon
                    aria-hidden="true"
                    strokeWidth={1.5}
                    className="h-10 w-10 text-ink transition-colors duration-150 group-hover:text-signal-yellow"
                  />
                </div>
                <h3 className="scroll-blur mt-8 font-display text-[1.3rem] font-bold tracking-[-0.01em]">
                  {s.title}
                </h3>
                <p className="scroll-blur mt-3 text-[0.9375rem] leading-[1.7] text-slate">
                  {s.body}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-8 grid gap-3 border-y border-grid-line py-6 md:grid-cols-3">
          {services.expectations.map((item) => (
            <div key={item} className="flex gap-3 text-[0.9375rem] leading-[1.6] text-slate">
              <span aria-hidden="true" className="font-mono text-accent-yellow">
                +
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
