import InquiryButton from "./InquiryButton";
import PhotoFrame, { CornerTicks } from "./PhotoFrame";

const REPORT_ITEMS = [
  "Control and layout points",
  "FF/FL or deviation summary",
  "Marked drawings or heat maps",
  "As-built verification notes",
];

function ReportMockup() {
  return (
    <div
      aria-label="Survey report deliverables"
      className="relative border border-grid-line bg-white p-6 shadow-[0_8px_24px_rgb(16_20_24/0.07)] sm:p-8"
    >
      <CornerTicks />
      <div className="flex items-center justify-between gap-4 border-b border-grid-line pb-4">
        <span className="eyebrow text-ink">Survey report package</span>
        <span className="border border-grid-line px-2.5 py-1 font-mono text-[0.6875rem] font-medium tracking-[0.08em] text-slate">
          ONPOINT
        </span>
      </div>

      <ul className="mt-6 space-y-4">
        {REPORT_ITEMS.map((item, i) => (
          <li
            key={item}
            className="flex items-center justify-between gap-4 border-b border-grid-line/70 pb-4 font-mono text-[0.75rem]"
          >
            <span className="uppercase tracking-[0.08em] text-slate">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="flex-1 text-ink">{item}</span>
            <span aria-hidden="true" className="text-survey-yellow">+</span>
          </li>
        ))}
      </ul>

      <p className="mt-5 font-mono text-[0.75rem] tracking-[0.04em] text-ink">
        Project references are handled with client details removed.
      </p>
    </div>
  );
}

export default function Reports() {
  return (
    <section id="reports" className="section-pad scroll-mt-24 border-t border-grid-line">
      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-14 px-6 wide:grid-cols-2 wide:gap-20">
        <div>
          <p className="scroll-blur eyebrow text-slate">
            <span aria-hidden="true" className="mr-2 text-survey-yellow">+</span>
            The deliverable
          </p>
          <h2 className="scroll-blur mt-4 max-w-[18ch] font-display text-[clamp(1.9rem,3.5vw,2.5rem)] font-bold leading-[1.15] tracking-[-0.02em]">
            You don&apos;t get a pile of numbers.
          </h2>
          <p className="scroll-blur mt-6 max-w-[46ch] text-[1.0625rem] leading-[1.7] text-slate">
            You get a decision-ready report: heatmaps, deviation tables, and a
            clear pass/fail against your spec — the document your client, your
            engineer and your concrete crew can all act on.
          </p>
          <InquiryButton
            kind="report"
            className="mt-8 inline-block border border-ink/25 px-7 py-3.5 font-medium text-ink transition-all duration-150 hover:-translate-y-0.5 hover:border-ink"
          >
            Download sample report{" "}
            <span aria-hidden="true" className="font-mono text-[0.9em]">↗</span>
          </InquiryButton>

          <PhotoFrame
            className="mt-10 max-w-[420px]"
            label="Report reviewed on site"
            fig="FIG 04"
            caption="Walking the deviations with the site team"
            aspect="aspect-[16/9]"
            src="/images/onpoint-report-review-slab-site.png"
            alt="Construction team reviewing slab survey drawings on a tablet beside a freshly poured concrete slab."
          />
        </div>

        <div className="wide:-order-1">
          <ReportMockup />
        </div>
      </div>
    </section>
  );
}
