"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, switchLocalePath, type Locale } from "@/app/lib/i18n";
import { useDictionary } from "./DictionaryProvider";

const LABELS: Record<Locale, string> = {
  nl: "NL",
  en: "EN",
};

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const { locale } = useDictionary();

  return (
    <div
      className="flex items-center border border-grid-line font-mono text-[0.6875rem] font-medium uppercase tracking-[0.08em]"
      role="group"
      aria-label="Language"
    >
      {locales.map((code) => (
        <Link
          key={code}
          href={switchLocalePath(pathname, code)}
          aria-current={locale === code ? "page" : undefined}
          className={`px-2.5 py-1.5 transition-colors duration-150 ${
            locale === code
              ? "bg-accent-yellow text-ink"
              : "text-slate hover:bg-grid-line/40 hover:text-ink"
          }`}
        >
          {LABELS[code]}
        </Link>
      ))}
    </div>
  );
}
