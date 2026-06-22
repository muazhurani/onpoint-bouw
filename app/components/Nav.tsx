"use client";

import Image from "next/image";
import { useState } from "react";
import InquiryButton from "./InquiryButton";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "Field work", href: "#fieldwork" },
  { label: "Flatness", href: "#flatness" },
  { label: "Process", href: "#process" },
  { label: "Reports", href: "#reports" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex flex-col items-center px-4">
      <nav
        aria-label="Main"
        className="flex w-full max-w-[860px] items-center justify-between border border-grid-line bg-paper/85 py-2 pl-5 pr-2 backdrop-blur-md"
      >
        <a
          href="#top"
          aria-label="OnPoint Geomatics — home"
          className="flex items-center"
        >
          <Image
            src="/logo-black.png"
            alt="OnPoint Geomatics"
            width={1400}
            height={230}
            priority
            className="h-[22px] w-auto"
          />
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 font-mono text-[0.75rem] font-medium uppercase tracking-[0.08em] text-slate transition-colors duration-150 hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <InquiryButton
            kind="quote"
            className="bg-survey-yellow px-4 py-2 text-[0.9375rem] font-medium text-ink transition-colors duration-150 hover:bg-signal-orange"
          >
            Request a quote
          </InquiryButton>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 items-center justify-center border border-grid-line md:hidden"
          >
            <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden="true">
              {open ? (
                <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              ) : (
                <path d="M2 5h12M2 11h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="mt-2 flex w-full max-w-[860px] flex-col border border-grid-line bg-paper/95 p-2 backdrop-blur-md md:hidden"
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 font-mono text-[0.8125rem] font-medium uppercase tracking-[0.08em] text-ink transition-colors duration-150 hover:bg-grid-line/40"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
