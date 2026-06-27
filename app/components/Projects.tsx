import Link from "next/link";
import PhotoFrame from "./PhotoFrame";
import { projects } from "@/app/lib/projects";

const READOUTS = [
  { value: "Real", label: "finished projects" },
  { value: "Local", label: "Eindhoven & around" },
  { value: "Clear", label: "scope and pricing" },
  { value: "Tidy", label: "clean handover" },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-pad relative scroll-mt-24 bg-paper text-ink"
    >
      <div className="relative mx-auto w-full max-w-[1200px] px-6">
        <div className="grid gap-8 wide:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] wide:items-end wide:gap-16">
          <div>
            <p className="scroll-blur eyebrow text-slate">
              <span aria-hidden="true" className="mr-2 text-accent-yellow">
                +
              </span>
              Recent work
            </p>
            <h2 className="scroll-blur mt-4 max-w-[18ch] font-display text-[clamp(1.9rem,3.5vw,2.5rem)] font-bold leading-[1.15] tracking-[-0.02em]">
              A look at recent work around Eindhoven.
            </h2>
          </div>
          <p className="scroll-blur max-w-[46ch] text-[1.0625rem] leading-[1.7] text-slate wide:justify-self-end">
            Gardens, extensions and bathrooms for private homeowners. Open a
            project to see what was involved and how it was finished.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block"
            >
              <PhotoFrame
                label={project.title}
                fig={`PROJECT ${String(index + 1).padStart(2, "0")}`}
                caption={project.summary}
                src={project.cover}
                alt={project.coverAlt}
              />
              <span className="mt-4 inline-flex border border-ink/20 px-4 py-2 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-ink transition-all duration-150 group-hover:-translate-y-0.5 group-hover:border-ink group-hover:bg-accent-yellow">
                View project
              </span>
            </Link>
          ))}
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-x-8 gap-y-8 wide:grid-cols-4">
          {READOUTS.map((item) => (
            <div key={item.label} className="px-1 py-2">
              <dd className="font-display text-[clamp(1.55rem,2.6vw,2.25rem)] font-bold leading-none text-ink">
                {item.value}
              </dd>
              <dt className="mt-2.5 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-slate">
                {item.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
