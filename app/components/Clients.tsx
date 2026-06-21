/**
 * Infinite horizontal marquee of clients. Currently text wordmarks —
 * swap each entry for a real client logo (<Image className="h-8 w-auto" …/>)
 * when the files are available; the loop and spacing stay the same.
 */
const CLIENTS = [
  "Van Berlo",
  "Rimco",
];

function Track({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center"
    >
      {CLIENTS.map((name) => (
        <li key={name} className="flex shrink-0 items-center">
          <span className="px-7 font-display text-[1.05rem] font-bold uppercase tracking-[0.02em] text-ink/40 transition-colors duration-150 hover:text-ink">
            {name}
          </span>
          <span aria-hidden="true" className="font-mono text-[0.8rem] text-survey-yellow">
            +
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function Clients() {
  return (
    <section
      aria-label="Companies we have worked with"
      className="border-b border-grid-line"
    >
      <div className="mx-auto w-full max-w-[1200px] px-6 pt-8">
        <p className="scroll-blur eyebrow text-slate">
          <span aria-hidden="true" className="mr-2 text-survey-yellow">+</span>
          Trusted on site by
        </p>
      </div>
      <div className="marquee overflow-hidden py-7">
        <div className="marquee-track flex">
          <Track />
          <Track hidden />
        </div>
      </div>
    </section>
  );
}
