import Image from "next/image";
import Link from "next/link";

const LINKS = [
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Process", href: "/#process" },
  { label: "Trust", href: "/#trust" },
  { label: "Quote", href: "/#quote" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink text-paper">
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link
            href="/#top"
            aria-label="OnPoint Bouw — back to top"
            className="flex items-center"
          >
            <Image
              src="/logo-white.png"
              alt="OnPoint"
              width={1400}
              height={231}
              className="h-[20px] w-auto"
            />
          </Link>
          <p className="mt-5 max-w-[34ch] text-[0.9375rem] leading-[1.7] text-paper/60">
            Renovations, extensions, gardens and bathrooms for private homeowners
            in Eindhoven and the surrounding area.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-3">
          <span className="eyebrow text-paper/40">Pages</span>
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-sm text-[0.9375rem] text-paper/60 transition-colors duration-150 hover:text-paper"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <span className="eyebrow text-paper/40">Contact</span>
          <a
            href="tel:+31614686059"
            className="rounded-sm text-[0.9375rem] text-paper/60 transition-colors duration-150 hover:text-paper"
          >
            +31 6 1468 6059
          </a>
          <a
            href="mailto:info@onpointgeo.nl"
            className="rounded-sm text-[0.9375rem] text-paper/60 transition-colors duration-150 hover:text-paper"
          >
            info@onpointgeo.nl
          </a>
          <span className="text-[0.9375rem] text-paper/60">
            Eindhoven, Netherlands
          </span>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center justify-between gap-4 px-6 py-6 font-mono text-[0.75rem] tracking-[0.06em] text-paper/45">
          <span>© 2026 ONPOINT BOUW</span>
          <span>EINDHOVEN, NL</span>
        </div>
      </div>

      {/* the last point on the page */}
      <span
        aria-hidden="true"
        className="absolute bottom-5 right-6 font-mono text-[1.1rem] leading-none text-accent-yellow"
      >
        +
      </span>
    </footer>
  );
}
