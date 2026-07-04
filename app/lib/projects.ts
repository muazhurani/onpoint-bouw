import type { Locale } from "@/app/lib/i18n";
import { locales } from "@/app/lib/i18n";
import {
  localizeProject,
  projectSources,
} from "@/app/lib/projects-source";

export type ProjectGalleryItem = {
  src?: string;
  alt: string;
  label: string;
};

export type ProjectGallerySection = {
  id: "before" | "after";
  items: ProjectGalleryItem[];
};

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  location: string;
  timeframe: string;
  scope: string[];
  description: string[];
  keywords: string[];
  cover: string;
  coverAlt: string;
  gallery: ProjectGalleryItem[];
  gallerySections?: ProjectGallerySection[];
};

export function getProjects(locale: Locale): Project[] {
  return projectSources.map((source) => localizeProject(source, locale));
}

export function getProject(slug: string, locale: Locale): Project | undefined {
  const source = projectSources.find((project) => project.slug === slug);
  if (!source) return undefined;
  return localizeProject(source, locale);
}

export function getAllProjectParams(): { locale: Locale; slug: string }[] {
  return locales.flatMap((locale) =>
    projectSources.map((project) => ({ locale, slug: project.slug })),
  );
}

// Back-compat for sitemap (Dutch URLs)
export const projects = getProjects("nl");
