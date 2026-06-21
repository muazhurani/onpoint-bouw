export default function FinalCta() {
  return (
    <section id="quote" className="section-pad scroll-mt-24 bg-ink text-paper">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start px-6">
        <p className="scroll-blur eyebrow text-paper/50">
          <span aria-hidden="true" className="mr-2 text-survey-yellow">+</span>
          Request a quote
        </p>
        <h2 className="scroll-blur mt-4 max-w-[14ch] font-display text-[clamp(2.4rem,5.5vw,4.25rem)] font-bold leading-[1.08] tracking-[-0.03em]">
          Ready when you break ground.
        </h2>
        <p className="scroll-blur mt-6 max-w-[44ch] text-[1.0625rem] leading-[1.7] text-paper/70">
          Send us your plans and site date — we&apos;ll come back with a fixed
          quote within one working day.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
          <a
            href="mailto:info@onpointgeo.nl?subject=Quote%20request"
            className="bg-survey-yellow px-8 py-4 font-medium text-ink transition-all duration-150 hover:-translate-y-0.5 hover:bg-signal-orange"
          >
            Request a quote
          </a>
          <div className="flex flex-col gap-1 font-mono text-[0.875rem] tracking-[0.04em]">
            <a href="tel:+31614686059" className="rounded-sm text-paper/80 transition-colors duration-150 hover:text-survey-yellow">
              +31 6 1468 6059
            </a>
            <a
              href="mailto:info@onpointgeo.nl"
              className="rounded-sm text-paper/80 transition-colors duration-150 hover:text-survey-yellow"
            >
              info@onpointgeo.nl
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
