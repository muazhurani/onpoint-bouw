import PhotoFrame from "./PhotoFrame";

const PLATES = [
  {
    label: "Total station on site",
    fig: "FIG 01",
    caption: "Trimble S5 over a control point",
    src: "/images/onpoint-total-station-civil-site.png",
    alt: "Trimble total station set up on a concrete construction site with civil works in the background.",
  },
  {
    label: "Pre-pour elevation sweep",
    fig: "FIG 02",
    caption: "FF/FL survey ahead of a slab pour",
    src: "/images/onpoint-slab-control-point-survey.png",
    alt: "Total station standing over a control point on a concrete slab at a building site.",
  },
  {
    label: "As-built verification",
    fig: "FIG 03",
    caption: "Checking structural steel against the drawing",
    src: "/images/onpoint-steel-asbuilt-verification.png",
    alt: "Surveyor using a total station to verify steel columns and base plates on a concrete slab.",
  },
];

export default function FieldWork() {
  return (
    <section id="fieldwork" className="section-pad scroll-mt-24 border-t border-grid-line">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <p className="scroll-blur eyebrow text-slate">
          <span aria-hidden="true" className="mr-2 text-survey-yellow">+</span>
          Field work
        </p>
        <h2 className="scroll-blur mt-4 max-w-[22ch] font-display text-[clamp(1.9rem,3.5vw,2.5rem)] font-bold leading-[1.15] tracking-[-0.02em]">
          Measured where it matters.
        </h2>
        <p className="scroll-blur mt-5 max-w-[52ch] text-[1.0625rem] leading-[1.7] text-slate">
          On the deck, ahead of the crew, in the weather. The instrument does
          the measuring — showing up prepared is what keeps your schedule.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {PLATES.map((p) => (
            <PhotoFrame key={p.fig} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
