"use client";

import { Phone } from "lucide-react";
import { PHONE_TEL, whatsappUrl } from "@/app/lib/contact";
import { WhatsAppIcon } from "./WhatsAppButton";
import { useDictionary } from "./DictionaryProvider";

export default function MobileContactBar() {
  const { dict } = useDictionary();
  const bar = dict.mobileBar;

  return (
    <nav
      aria-label={bar.ariaLabel}
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-white/15 bg-ink pb-[env(safe-area-inset-bottom)] md:hidden"
    >
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={dict.whatsapp.aria}
        className="flex items-center justify-center gap-2.5 py-3.5 font-medium text-paper"
      >
        <span className="text-accent-yellow">
          <WhatsAppIcon />
        </span>
        {bar.whatsapp}
      </a>
      <a
        href={`tel:${PHONE_TEL}`}
        className="flex items-center justify-center gap-2.5 bg-accent-yellow py-3.5 font-medium text-ink"
      >
        <Phone aria-hidden="true" strokeWidth={2} className="h-[18px] w-[18px]" />
        {bar.call}
      </a>
    </nav>
  );
}
