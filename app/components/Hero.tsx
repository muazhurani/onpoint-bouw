import Image from "next/image";
import Parallax from "./Parallax";

const STATS = [
  { value: "S5", label: "total station" },
  { value: "TSC7", label: "field controller" },
  { value: "1 day", label: "quote turnaround" },
];

// Static survey-point texture around the margins.
const POINTS = [
  { x: "6%", y: "16%" },
  { x: "26%", y: "9%" },
  { x: "50%", y: "13%" },
  { x: "4%", y: "52%" },
  { x: "10%", y: "80%" },
  { x: "34%", y: "87%" },
  { x: "55%", y: "78%" },
  { x: "94%", y: "20%" },
  { x: "96%", y: "70%" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="survey-grid relative flex min-h-svh flex-col overflow-hidden"
    >
      {/* survey points */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {POINTS.map((p, i) => (
          <svg
            key={i}
            viewBox="0 0 12 12"
            className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 text-ink/25"
            style={{ left: p.x, top: p.y }}
          >
            <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ))}
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1200px] flex-1 items-center gap-10 px-6 pb-10 pt-36 wide:grid-cols-[1.1fr_0.9fr] wide:gap-6 wide:pb-0">
        <div>
          <p className="eyebrow fade-up text-slate">
            <span aria-hidden="true" className="mr-2 text-survey-yellow">
              +
            </span>
            High accuracy · Trimble S5 + TSC7 · Eindhoven
          </p>

          <h1 className="fade-up mt-6 max-w-[12ch] font-display text-[clamp(3rem,6.5vw,5.25rem)] font-bold leading-[1.04] tracking-[-0.03em]">
            Every project starts with a{" "}
            <span className="relative inline-block">
              point.
              {/* straight datum rule, draws in on load */}
              <svg
                viewBox="0 0 100 8"
                preserveAspectRatio="none"
                aria-hidden="true"
                className="absolute -bottom-[0.04em] left-0 h-[0.09em] w-full"
              >
                <line
                  x1="1"
                  y1="4"
                  x2="99"
                  y2="4"
                  pathLength={1}
                  className="draw-underline"
                  stroke="var(--color-survey-yellow)"
                  strokeWidth="8"
                />
              </svg>
            </span>
          </h1>

          <p
            className="fade-up mt-8 max-w-[46ch] text-[1.125rem] leading-[1.7] text-slate"
            style={{ animationDelay: "120ms" }}
          >
            Precision surveying &amp; geomatics for construction. Stakeout,
            concrete slabs, steel, civil works and as-builts — measured once,
            measured right.
          </p>

          <div
            className="fade-up mt-10 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "200ms" }}
          >
            <a
              href="#quote"
              className="bg-survey-yellow px-7 py-3.5 font-medium text-ink transition-all duration-150 hover:-translate-y-0.5 hover:bg-signal-orange hover:shadow-[0_8px_24px_rgb(16_20_24/0.07)]"
            >
              Request a quote
            </a>
            <a
              href="#reports"
              className="border border-ink/25 px-7 py-3.5 font-medium text-ink transition-all duration-150 hover:-translate-y-0.5 hover:border-ink"
            >
              See deliverables{" "}
              <span aria-hidden="true" className="font-mono text-[0.9em]">
                ↗
              </span>
            </a>
          </div>
        </div>

        {/* The instrument itself — cut-out, drifting slightly on scroll */}
        <Parallax factor={0.07} className="fade-up relative mx-auto w-full max-w-[240px] self-end wide:max-w-[320px]">
          <div className="relative">
            <Image
              src="/totalstation-md.png"
              alt="Trimble robotic total station on a tripod"
              width={600}
              height={1600}
              priority
              sizes="(max-width: 600px) 160px, 320px"
              className="mx-auto h-auto w-full max-w-[210px] wide:max-w-[270px]"
            />

            {/* dimension line, like a drawing annotation */}
            <div
              aria-hidden="true"
              className="absolute -right-2 bottom-[4%] top-[2%] hidden flex-col items-center wide:flex"
            >
              <span className="h-px w-3 bg-ink/40" />
              <span className="w-px flex-1 bg-ink/40" />
              <span className="my-3 font-mono text-[0.6875rem] tracking-[0.08em] text-slate [writing-mode:vertical-rl]">
                TRIMBLE S5 · TSC7 · ROBOTIC
              </span>
              <span className="w-px flex-1 bg-ink/40" />
              <span className="h-px w-3 bg-ink/40" />
            </div>
          </div>
        </Parallax>
      </div>

      {/* Stat strip — data-collector readout */}
      <div className="relative z-10 border-t border-grid-line bg-paper/70 backdrop-blur-sm">
        <dl
          className="fade-up mx-auto flex w-full max-w-[1200px] flex-wrap items-baseline gap-x-12 gap-y-3 px-6 py-6"
          style={{ animationDelay: "350ms" }}
        >
          {STATS.map((s) => (
            <div key={s.label} className="flex items-baseline gap-3">
              <dd className="font-mono text-[1.0625rem] font-medium text-ink">
                {s.value}
              </dd>
              <dt className="eyebrow text-slate">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
