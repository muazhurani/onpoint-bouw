import { Bath, HousePlus, Trees } from "lucide-react";

const SERVICES = [
  {
    n: "01",
    icon: HousePlus,
    title: "Renovations and extensions",
    body: "More space, better layout, new rear extension, or an older room that needs proper attention. We help turn the idea into a realistic job.",
  },
  {
    n: "02",
    icon: Trees,
    title: "Gardens and paving",
    body: "Paving, patios, steps, drainage, raised borders and outdoor seating areas that are made for everyday use, not just a nice photo.",
  },
  {
    n: "03",
    icon: Bath,
    title: "Bathrooms and finishing",
    body: "Bathrooms, tiling, plastering, fixtures, small repairs and finish work where straight lines and clean details make the difference.",
  },
];

const EXPECTATIONS = [
  "We tell you what is realistic before you commit.",
  "We keep the work area as manageable as possible.",
  "We explain choices that affect price or planning.",
];

export default function Services() {
  return (
    <section id="services" className="section-pad scroll-mt-24">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <p className="scroll-blur eyebrow text-slate">
          <span aria-hidden="true" className="mr-2 text-accent-yellow">+</span>
          How we can help
        </p>
        <h2 className="scroll-blur mt-4 max-w-[22ch] font-display text-[clamp(1.9rem,3.5vw,2.5rem)] font-bold leading-[1.15] tracking-[-0.02em]">
          Straightforward building work for normal homes.
        </h2>
        <p className="scroll-blur mt-5 max-w-[56ch] text-[1.0625rem] leading-[1.7] text-slate">
          Most customers come to us with a practical problem: more space, a
          better garden, a tired bathroom, or work that needs finishing. We make
          the plan simple and keep the job moving.
        </p>

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
                    className="mt-2 block h-[2px] w-7 bg-accent-yellow"
                  />
                </div>
                <s.icon
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className="h-10 w-10 text-ink transition-colors duration-150 group-hover:text-signal-yellow"
                />
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

        <div className="mt-8 grid gap-3 border-y border-grid-line py-6 md:grid-cols-3">
          {EXPECTATIONS.map((item) => (
            <div key={item} className="flex gap-3 text-[0.9375rem] leading-[1.6] text-slate">
              <span aria-hidden="true" className="font-mono text-accent-yellow">
                +
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
