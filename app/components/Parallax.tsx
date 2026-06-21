"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Gentle vertical drift relative to scroll. The outer wrapper is measured
 * (never transformed) so there's no feedback loop; only the inner element
 * moves. Disabled under prefers-reduced-motion.
 */
export default function Parallax({
  factor = 0.08,
  className = "",
  children,
}: {
  factor?: number;
  className?: string;
  children: ReactNode;
}) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const r = outer.getBoundingClientRect();
      const offset =
        (window.innerHeight / 2 - (r.top + r.height / 2)) * factor;
      inner.style.transform = `translate3d(0, ${offset}px, 0)`;
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
  }, [factor]);

  return (
    <div ref={outerRef} className={className}>
      <div ref={innerRef} className="will-change-transform">
        {children}
      </div>
    </div>
  );
}
