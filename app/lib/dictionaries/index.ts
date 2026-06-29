import type { Locale } from "@/app/lib/i18n";
import en from "./en";
import nl from "./nl";
import type { Dictionary } from "./types";

const dictionaries: Record<Locale, Dictionary> = { nl, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary } from "./types";
