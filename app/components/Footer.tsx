import Image from "next/image";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "Field work", href: "#fieldwork" },
  { label: "Flatness", href: "#flatness" },
  { label: "Process", href: "#process" },
  { label: "Reports", href: "#reports" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink text-paper">
      <div className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center justify-between gap-x-10 gap-y-6 px-6 py-10">
        <a
          href="#top"
          aria-label="OnPoint Geomatics — back to top"
          className="flex items-center"
        >
          <Image
            src="/logo-white.png"
            alt="OnPoint Geomatics"
            width={1400}
            height={231}
            className="h-[18px] w-auto"
          />
        </a>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-sm text-[0.9375rem] text-paper/60 transition-colors duration-150 hover:text-paper"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-1 font-mono text-[0.75rem] tracking-[0.06em] text-paper/50">
          <span>EINDHOVEN, NL</span>
          <span>© 2026 ONPOINT GEOMATICS</span>
        </div>
      </div>

      {/* the last point on the page */}
      <span
        aria-hidden="true"
        className="absolute bottom-5 right-6 font-mono text-[1.1rem] leading-none text-survey-yellow"
      >
        +
      </span>
    </footer>
  );
}
