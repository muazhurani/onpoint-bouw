"use client";

import { useEffect } from "react";

export default function ScrollBlurOnce() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>(".scroll-blur"));
    if (!items.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach((item) => item.classList.add("scroll-blur--revealed"));
      return;
    }

    const reveal = (item: HTMLElement) => {
      item.classList.remove("scroll-blur--pending");
      item.classList.add("scroll-blur--revealed");
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const item = entry.target as HTMLElement;
          reveal(item);
          observer.unobserve(item);
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.2,
      }
    );

    items.forEach((item) => {
      if (item.classList.contains("scroll-blur--revealed")) return;
      item.classList.add("scroll-blur--pending");
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
