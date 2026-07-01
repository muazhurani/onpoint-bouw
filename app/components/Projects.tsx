"use client";

import Link from "next/link";
import { getProjects } from "@/app/lib/projects";
import { localePath } from "@/app/lib/i18n";
import PhotoFrame from "./PhotoFrame";
import { useDictionary } from "./DictionaryProvider";

export default function Projects() {
  const { dict, locale } = useDictionary();
  const copy = dict.projects;
  const projects = getProjects(locale);

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
              {copy.eyebrow}
            </p>
            <h2 className="scroll-blur mt-4 max-w-[18ch] font-display text-[clamp(1.9rem,3.5vw,2.5rem)] font-bold leading-[1.15] tracking-[-0.02em]">
              {copy.title}
            </h2>
          </div>
          <p className="scroll-blur max-w-[46ch] text-[1.0625rem] leading-[1.7] text-slate wide:justify-self-end">
            {copy.intro}
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={localePath(locale, `/projects/${project.slug}`)}
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
                {copy.viewProject}
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
