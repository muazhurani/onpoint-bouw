"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Dictionary } from "@/app/lib/dictionaries";
import type { Locale } from "@/app/lib/i18n";

type DictionaryContextValue = {
  dict: Dictionary;
  locale: Locale;
};

const DictionaryContext = createContext<DictionaryContextValue | null>(null);

export function DictionaryProvider({
  dict,
  locale,
  children,
}: {
  dict: Dictionary;
  locale: Locale;
  children: ReactNode;
}) {
  return (
    <DictionaryContext.Provider value={{ dict, locale }}>
      {children}
    </DictionaryContext.Provider>
  );
}

export function useDictionary() {
  const value = useContext(DictionaryContext);
  if (!value) {
    throw new Error("useDictionary must be used within DictionaryProvider");
  }
  return value;
}
