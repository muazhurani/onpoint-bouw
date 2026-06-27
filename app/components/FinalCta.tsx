import InquiryButton from "./InquiryButton";

export default function FinalCta() {
  return (
    <section id="quote" className="section-pad scroll-mt-24 bg-ink text-paper">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start px-6">
        <p className="scroll-blur eyebrow text-paper/50">
          <span aria-hidden="true" className="mr-2 text-accent-yellow">+</span>
          Request a quote
        </p>
        <h2 className="scroll-blur mt-4 max-w-[14ch] font-display text-[clamp(2.4rem,5.5vw,4.25rem)] font-bold leading-[1.08] tracking-[-0.03em]">
          Want us to look at your project?
        </h2>
        <p className="scroll-blur mt-6 max-w-[46ch] text-[1.0625rem] leading-[1.7] text-paper/70">
          Call, email, or send a few photos with your quote request. We&apos;ll
          tell you what&apos;s realistic, what it involves and the sensible next
          step — usually within one working day.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
          <InquiryButton
            kind="quote"
            className="bg-accent-yellow px-8 py-4 font-medium text-ink transition-all duration-150 hover:-translate-y-0.5 hover:bg-signal-orange"
          >
            Request a quote
          </InquiryButton>
          <div className="flex flex-col gap-1 font-mono text-[0.875rem] tracking-[0.04em]">
            <a href="tel:+31614686059" className="rounded-sm text-paper/80 transition-colors duration-150 hover:text-accent-yellow">
              +31 6 1468 6059
            </a>
            <a
              href="mailto:info@onpointgeo.nl"
              className="rounded-sm text-paper/80 transition-colors duration-150 hover:text-accent-yellow"
            >
              info@onpointgeo.nl
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
