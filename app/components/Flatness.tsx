import Image from "next/image";
import Parallax from "./Parallax";
import { CornerTicks } from "./PhotoFrame";

const READOUTS = [
  { value: "FF/FL", unit: "", label: "Survey package" },
  { value: "S5", unit: "", label: "Total station" },
  { value: "TSC7", unit: "", label: "Field controller" },
  { value: "24", unit: "hr", label: "Report turnaround" },
];

function DeviationLegend() {
  return (
    <div className="mx-auto w-full max-w-[440px]">
      <div
        aria-hidden="true"
        className="h-1.5 w-full"
        style={{
          background:
            "linear-gradient(90deg, #1c3fa8 0%, #168ad8 22%, #18a85f 45%, #f5d323 62%, #ff7a21 78%, #9c1f2b 100%)",
        }}
      />
      <div className="mt-2 flex items-baseline justify-between font-mono text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-slate">
        <span>Low</span>
        <span className="text-slate/55">0 datum</span>
        <span>High</span>
      </div>
    </div>
  );
}

function ReadoutStrip() {
  return (
    <dl className="grid grid-cols-2 border-y border-grid-line wide:grid-cols-4">
      {READOUTS.map((item, i) => (
        <div
          key={item.label}
          className={`border-grid-line px-5 py-6 wide:border-r wide:px-8 wide:last:border-r-0 ${
            i % 2 === 0 ? "border-r" : ""
          } ${i < 2 ? "border-b wide:border-b-0" : ""}`}
        >
          <dd className="font-display text-[clamp(1.9rem,3.2vw,2.6rem)] font-bold leading-none text-ink">
            {item.value}
            <span className="ml-1.5 font-mono text-[0.55em] font-medium text-survey-yellow">
              {item.unit}
            </span>
          </dd>
          <dt className="mt-2.5 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-slate">
            {item.label}
          </dt>
        </div>
      ))}
    </dl>
  );
}

export default function Flatness() {
  return (
    <section
      id="flatness"
      className="survey-grid section-pad relative scroll-mt-24 overflow-hidden border-y border-grid-line bg-paper text-ink"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink/12 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-ink/10 to-transparent"
      />

      <div className="relative mx-auto w-full max-w-[1200px] px-6">
        {/* header */}
        <div className="grid gap-8 wide:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] wide:items-end wide:gap-16">
          <div>
            <p className="scroll-blur eyebrow text-slate">
              <span aria-hidden="true" className="mr-2 text-survey-yellow">
                +
              </span>
              Floor flatness
            </p>
            <h2 className="scroll-blur mt-4 max-w-[18ch] font-display text-[clamp(1.9rem,3.5vw,2.5rem)] font-bold leading-[1.15] tracking-[-0.02em]">
              Slab variation, made obvious.
            </h2>
          </div>
          <p className="scroll-blur max-w-[46ch] text-[1.0625rem] leading-[1.7] text-slate wide:justify-self-end">
            We turn elevation shots into a readable FF/FL package — heat maps,
            deviation limits, and repair zones your site team can act on before
            the next trade is waiting.
          </p>
        </div>

        {/* heatmap centerpiece */}
        <figure className="mt-14 wide:mt-16">
          <div className="relative mx-auto max-w-[840px]">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[80%] w-[88%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgb(255_201_31/0.12),transparent_68%)]"
            />
            <CornerTicks className="text-ink/30" />
            <Parallax
              factor={0.06}
              className="relative px-5 py-4 sm:px-10 sm:py-7"
            >
              <Image
                src="/heatmap.png"
                alt="Illustrative 3D floor flatness heat map of a surveyed slab, color-coded from low areas to high areas."
                width={2332}
                height={1161}
                sizes="(max-width: 900px) calc(100vw - 88px), 760px"
                className="w-full drop-shadow-[0_24px_38px_rgb(16_20_24/0.18)]"
              />
            </Parallax>
          </div>

          <figcaption className="mt-7 flex flex-col items-center gap-4">
            <DeviationLegend />
            <p className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-slate">
              <span className="text-ink">FIG 03</span>
              <span aria-hidden="true"> — </span>
              Floor-flatness output · deviation map
            </p>
          </figcaption>
        </figure>

        {/* readouts */}
        <div className="mt-14 wide:mt-16">
          <ReadoutStrip />
        </div>
      </div>
    </section>
  );
}
