"use client";

import { useEffect, useRef, useState } from "react";

const STEPS = [
  {
    n: "01",
    title: "Setup & control",
    body: "We establish the control network on site — the known points everything else is measured from.",
  },
  {
    n: "02",
    title: "Measure",
    body: "Trimble S5 total-station fieldwork with a TSC7 controller, capturing the points that matter to the build.",
  },
  {
    n: "03",
    title: "Analyze",
    body: "Raw coordinates become FF/FL values, deviation tables and heatmaps, checked against your spec.",
  },
  {
    n: "04",
    title: "Report",
    body: "A decision-ready report in your inbox, usually within 24 hours of leaving site.",
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const raf = requestAnimationFrame(() => setInView(true));
      return () => cancelAnimationFrame(raf);
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="process" className="section-pad scroll-mt-24">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <p className="scroll-blur eyebrow text-slate">
          <span aria-hidden="true" className="mr-2 text-survey-yellow">+</span>
          How we work
        </p>
        <h2 className="scroll-blur mt-4 max-w-[22ch] font-display text-[clamp(1.9rem,3.5vw,2.5rem)] font-bold leading-[1.15] tracking-[-0.02em]">
          Four steps from plan to proof.
        </h2>

        <div ref={ref} className="relative mt-16">
          {/* leveling line — draws left to right (top to bottom on mobile) */}
          <div
            aria-hidden="true"
            className={`absolute left-0 right-0 top-[7px] hidden h-px origin-left bg-ink/20 transition-transform duration-700 ease-out md:block ${
              inView ? "scale-x-100" : "scale-x-0"
            }`}
          />
          <div
            aria-hidden="true"
            className={`absolute bottom-2 left-[7px] top-0 w-px origin-top bg-ink/20 transition-transform duration-700 ease-out md:hidden ${
              inView ? "scale-y-100" : "scale-y-0"
            }`}
          />

          <ol className="grid gap-10 md:grid-cols-4 md:gap-8">
            {STEPS.map((s, i) => (
              <li key={s.n} className="relative pl-10 md:pl-0">
                {/* point marker pops in sequence */}
                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-[0.4em] block h-[15px] w-[15px] rounded-full border-2 border-ink bg-survey-yellow ring-4 ring-paper transition-transform duration-300 ease-out md:static md:mb-6 md:block ${
                    inView ? "scale-100" : "scale-0"
                  }`}
                  style={{ transitionDelay: inView ? `${250 + i * 160}ms` : "0ms" }}
                />
                <div
                  className={`transition-all duration-500 ease-out ${
                    inView ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                  }`}
                  style={{ transitionDelay: inView ? `${300 + i * 160}ms` : "0ms" }}
                >
                  <span className="font-mono text-[0.8125rem] font-medium tracking-[0.08em] text-slate">
                    {s.n}
                  </span>
                  <h3 className="mt-1 font-display text-[1.15rem] font-bold tracking-[-0.01em]">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[0.9375rem] leading-[1.7] text-slate">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
