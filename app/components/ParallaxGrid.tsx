"use client";

import { useEffect, useRef } from "react";

/**
 * The dark section's background grid, scrolling at 0.5× — the only parallax
 * on the page. rAF-throttled passive scroll listener, transform-only writes.
 */
export default function ParallaxGrid() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    const section = el?.parentElement;
    if (!el || !section) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const top = section.getBoundingClientRect().top;
      el.style.transform = `translate3d(0, ${top * -0.5}px, 0)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="survey-grid-dark absolute -inset-y-full inset-x-0 will-change-transform"
    />
  );
}
