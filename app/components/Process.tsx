"use client";

import { useEffect, useRef, useState } from "react";
import { useDictionary } from "./DictionaryProvider";

export default function Process() {
  const { dict } = useDictionary();
  const process = dict.process;
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [entranceDone, setEntranceDone] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  // Drop the staggered entrance delays once they have played, so the
  // scroll-driven active-step highlight responds immediately.
  useEffect(() => {
    if (!inView) return;
    const timer = setTimeout(() => setEntranceDone(true), 1100);
    return () => clearTimeout(timer);
  }, [inView]);

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

  // Highlight steps progressively as the timeline crosses a reference line
  // at 60% of the viewport height.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const stepCount = process.steps.length;
      const progress = Math.min(
        Math.max((window.innerHeight * 0.6 - rect.top) / rect.height, 0),
        0.999
      );
      setActiveStep(Math.floor(progress * stepCount));
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [process.steps.length]);

  return (
    <section id="process" className="section-pad scroll-mt-24">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <p className="scroll-blur eyebrow text-slate">
          <span aria-hidden="true" className="mr-2 text-accent-yellow">+</span>
          {process.eyebrow}
        </p>
        <h2 className="scroll-blur mt-4 max-w-[22ch] font-display text-[clamp(1.9rem,3.5vw,2.5rem)] font-bold leading-[1.15] tracking-[-0.02em]">
          {process.title}
        </h2>
        <p className="scroll-blur mt-5 max-w-[52ch] text-[1.0625rem] leading-[1.7] text-slate">
          {process.intro}
        </p>

        <div ref={ref} className="relative mt-16">
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
            {process.steps.map((s, i) => {
              const isActive = i === activeStep;
              const isReached = i <= activeStep;
              return (
                <li key={s.n} className="relative pl-10 md:pl-0">
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 top-[0.4em] block h-[15px] w-[15px] rounded-full border-2 border-ink ring-4 ring-paper transition-all duration-300 ease-out md:static md:mb-6 md:block ${
                      inView ? (isActive ? "scale-125" : "scale-100") : "scale-0"
                    } ${isReached ? "bg-accent-yellow" : "bg-paper"}`}
                    style={{
                      transitionDelay:
                        inView && !entranceDone ? `${250 + i * 160}ms` : "0ms",
                    }}
                  />
                  <div
                    className={`transition-all duration-500 ease-out ${
                      inView ? "translate-y-0" : "translate-y-2 opacity-0"
                    } ${inView ? (isReached ? "opacity-100" : "opacity-55") : ""}`}
                    style={{
                      transitionDelay:
                        inView && !entranceDone ? `${300 + i * 160}ms` : "0ms",
                    }}
                  >
                    <span
                      className={`font-mono text-[0.8125rem] font-medium tracking-[0.08em] ${
                        isActive ? "text-ink" : "text-slate"
                      }`}
                    >
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
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
