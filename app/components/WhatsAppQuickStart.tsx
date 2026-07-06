"use client";

import { whatsappUrl } from "@/app/lib/contact";
import { formatMessage } from "@/app/lib/format-message";
import { WhatsAppIcon } from "./WhatsAppButton";
import { useDictionary } from "./DictionaryProvider";

/**
 * One-tap quote start: pick a project type, WhatsApp opens with a
 * prefilled message. No form, no backend — just wa.me deep links.
 */
export default function WhatsAppQuickStart() {
  const { dict } = useDictionary();
  const start = dict.cta.whatsappStart;
  const types = dict.inquiry.projectTypes;

  return (
    <div className="mt-12 w-full max-w-[720px] border-t border-paper/20 pt-8">
      <h3 className="scroll-blur flex items-center gap-2.5 font-display text-[1.15rem] font-bold tracking-[-0.01em] text-paper">
        <span aria-hidden="true" className="text-accent-yellow">
          <WhatsAppIcon />
        </span>
        {start.title}
      </h3>
      <p className="scroll-blur mt-2 text-[0.9375rem] leading-[1.7] text-paper/60">
        {start.hint}
      </p>
      <ul className="mt-5 flex flex-wrap gap-2.5">
        {types.map((type) => (
          <li key={type}>
            <a
              href={whatsappUrl(formatMessage(start.messageTemplate, { type }))}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-paper/30 px-4 py-2.5 font-mono text-[0.75rem] font-medium uppercase tracking-[0.08em] text-paper transition-all duration-150 hover:-translate-y-0.5 hover:border-accent-yellow hover:text-accent-yellow"
            >
              {type}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
