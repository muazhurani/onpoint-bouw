/* House line style: 1.5px ink strokes, exactly one yellow detail per icon. */

function StakeoutIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="h-12 w-12">
      {/* plan gridlines */}
      <path d="M4 16h40M4 32h40M16 4v40M32 4v40" stroke="var(--color-ink)" strokeWidth="1.5" strokeDasharray="3 4" strokeOpacity="0.45" />
      {/* set point at the intersection */}
      <circle cx="32" cy="16" r="7" stroke="var(--color-ink)" strokeWidth="1.5" />
      <circle cx="32" cy="16" r="2.5" fill="var(--color-survey-yellow)" className="icon-detail" />
    </svg>
  );
}

function FlatnessIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="h-12 w-12">
      {/* datum line */}
      <path d="M4 24h40" stroke="var(--color-ink)" strokeWidth="1.5" strokeDasharray="3 4" strokeOpacity="0.45" />
      {/* slab profile */}
      <path d="M4 27c5 0 6-6 11-6s6 4 10 4 6-7 11-7 5 6 8 6" stroke="var(--color-ink)" strokeWidth="1.5" strokeLinecap="round" />
      {/* high-spot deviation */}
      <path d="M36 18v6" stroke="var(--color-survey-yellow)" strokeWidth="2.5" strokeLinecap="round" className="icon-detail" />
      <path d="M2 38h44" stroke="var(--color-ink)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function AsBuiltIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="h-12 w-12">
      {/* as designed */}
      <rect x="6" y="6" width="28" height="28" rx="3" stroke="var(--color-ink)" strokeWidth="1.5" strokeDasharray="3 4" strokeOpacity="0.45" />
      {/* as built, offset */}
      <rect x="13" y="13" width="28" height="28" rx="3" stroke="var(--color-ink)" strokeWidth="1.5" />
      {/* measured deviation */}
      <path d="M34 6l7 7" stroke="var(--color-survey-yellow)" strokeWidth="2.5" strokeLinecap="round" className="icon-detail" />
    </svg>
  );
}

const SERVICES = [
  {
    n: "01",
    icon: <StakeoutIcon />,
    title: "Layout & stakeout",
    body: "From plan to ground. We set design coordinates on site for industrial builds, civil works, steel, anchors, columns, gridlines and penetrations.",
  },
  {
    n: "02",
    icon: <FlatnessIcon />,
    title: "Floor flatness & levelness",
    body: "FF/FL surveys for concrete slabs before and after the pour, with clear output for high spots, low spots and next steps.",
  },
  {
    n: "03",
    icon: <AsBuiltIcon />,
    title: "As-builts & verification",
    body: "Independent checks of what was actually built versus what was drawn, with a clear report for the record.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-pad scroll-mt-24">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <p className="scroll-blur eyebrow text-slate">
          <span aria-hidden="true" className="mr-2 text-survey-yellow">+</span>
          What we measure
        </p>
        <h2 className="scroll-blur mt-4 max-w-[22ch] font-display text-[clamp(1.9rem,3.5vw,2.5rem)] font-bold leading-[1.15] tracking-[-0.02em]">
          For slabs, steel, civil works and layout.
        </h2>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="group border border-grid-line bg-paper p-8 transition-all duration-150 hover:-translate-y-1 hover:border-ink hover:shadow-[0_8px_24px_rgb(16_20_24/0.07)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="font-mono text-[0.8125rem] font-medium tracking-[0.08em] text-slate">
                    {s.n}
                  </span>
                  <span
                    aria-hidden="true"
                    className="mt-2 block h-[2px] w-7 bg-survey-yellow"
                  />
                </div>
                {s.icon}
              </div>
              <h3 className="scroll-blur mt-8 font-display text-[1.3rem] font-bold tracking-[-0.01em]">
                {s.title}
              </h3>
              <p className="scroll-blur mt-3 text-[0.9375rem] leading-[1.7] text-slate">
                {s.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
