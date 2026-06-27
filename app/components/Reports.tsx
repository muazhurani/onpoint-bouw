import InquiryButton from "./InquiryButton";

const TRUST_POINTS = [
  {
    n: "01",
    title: "Clear quotes",
    body: "You get the scope, the main choices and what is included in writing — before any work starts. No mystery invoice at the end.",
  },
  {
    n: "02",
    title: "One point of contact",
    body: "You deal with us directly, from the first visit to the final handover. No chasing, no being passed between people.",
  },
  {
    n: "03",
    title: "Respect for your home",
    body: "We protect floors and access, keep the work area as manageable as possible and leave it clean when we finish.",
  },
  {
    n: "04",
    title: "Honest advice",
    body: "We tell you what is realistic, and we say when a job is better handled by another specialist instead of pretending.",
  },
];

export default function Reports() {
  return (
    <section
      id="trust"
      className="section-pad scroll-mt-24 border-t border-grid-line"
    >
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <div className="grid gap-8 wide:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] wide:items-end wide:gap-16">
          <div>
            <p className="scroll-blur eyebrow text-slate">
              <span aria-hidden="true" className="mr-2 text-accent-yellow">
                +
              </span>
              Why homeowners choose us
            </p>
            <h2 className="scroll-blur mt-4 max-w-[18ch] font-display text-[clamp(1.9rem,3.5vw,2.5rem)] font-bold leading-[1.15] tracking-[-0.02em]">
              No vague promises. No mystery invoice.
            </h2>
          </div>
          <p className="scroll-blur max-w-[46ch] text-[1.0625rem] leading-[1.7] text-slate wide:justify-self-end">
            Before you say yes, you should understand the work, the rough timing
            and what affects the price. Most people just want a builder they can
            trust in and around their home — so that is how we work.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {TRUST_POINTS.map((point) => (
            <article
              key={point.title}
              className="border border-grid-line bg-paper p-8 transition-all duration-150 hover:-translate-y-1 hover:border-ink hover:shadow-[0_8px_24px_rgb(16_20_24/0.07)]"
            >
              <span className="font-mono text-[0.8125rem] font-medium tracking-[0.08em] text-slate">
                {point.n}
              </span>
              <span
                aria-hidden="true"
                className="mt-2 block h-[2px] w-7 bg-accent-yellow"
              />
              <h3 className="mt-6 font-display text-[1.3rem] font-bold tracking-[-0.01em]">
                {point.title}
              </h3>
              <p className="mt-3 text-[0.9375rem] leading-[1.7] text-slate">
                {point.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-grid-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[48ch] text-[0.9375rem] leading-[1.7] text-slate">
            Not ready for a site visit? Send a few photos and we can give you a
            first idea. Private addresses and client details are always kept out
            of public examples.
          </p>
          <InquiryButton
            kind="quote"
            className="shrink-0 bg-accent-yellow px-7 py-3.5 font-medium text-ink transition-all duration-150 hover:-translate-y-0.5 hover:bg-signal-orange"
          >
            Request a quote
          </InquiryButton>
        </div>
      </div>
    </section>
  );
}
