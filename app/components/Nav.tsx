"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { localePath } from "@/app/lib/i18n";
import InquiryButton from "./InquiryButton";
import LanguageSwitcher from "./LanguageSwitcher";
import { useDictionary } from "./DictionaryProvider";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { dict, locale } = useDictionary();
  const nav = dict.nav;
  const navWidth = locale === "nl" ? "max-w-[980px]" : "max-w-[860px]";

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex flex-col items-center px-4">
      <nav
        aria-label={nav.ariaLabel}
        className={`flex w-full min-w-0 ${navWidth} items-center justify-between border border-grid-line bg-paper/85 py-2 pl-4 pr-2 backdrop-blur-md sm:pl-5`}
      >
        <Link
          href={localePath(locale, "/#top")}
          aria-label={nav.homeAria}
          className="flex items-center"
        >
          <Image
            src="/logo-black.png"
            alt="OnPoint"
            width={1400}
            height={230}
            priority
            className="h-[22px] w-auto"
          />
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {nav.links.map((l) => (
            <Link
              key={l.hash}
              href={localePath(locale, `/#${l.hash}`)}
              className="px-3 py-1.5 font-mono text-[0.75rem] font-medium uppercase tracking-[0.08em] text-slate transition-colors duration-150 hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <InquiryButton
            kind="quote"
            className="hidden bg-accent-yellow px-4 py-2 text-[0.9375rem] font-medium text-ink transition-colors duration-150 hover:bg-signal-orange sm:inline-block"
          >
            {nav.requestQuote}
          </InquiryButton>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? nav.closeMenu : nav.openMenu}
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
          className={`mt-2 flex w-full min-w-0 ${navWidth} flex-col border border-grid-line bg-paper/95 p-2 backdrop-blur-md md:hidden`}
        >
          {nav.links.map((l) => (
            <Link
              key={l.hash}
              href={localePath(locale, `/#${l.hash}`)}
              onClick={() => setOpen(false)}
              className="px-4 py-3 font-mono text-[0.8125rem] font-medium uppercase tracking-[0.08em] text-ink transition-colors duration-150 hover:bg-grid-line/40"
            >
              {l.label}
            </Link>
          ))}
          <InquiryButton
            kind="quote"
            className="mx-4 mt-2 bg-accent-yellow px-4 py-3 text-[0.9375rem] font-medium text-ink"
          >
            {nav.requestQuote}
          </InquiryButton>
        </div>
      )}
    </header>
  );
}
