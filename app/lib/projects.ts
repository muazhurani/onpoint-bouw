import type { Locale } from "@/app/lib/i18n";
import { locales } from "@/app/lib/i18n";
import {
  getPublishedProjectSources,
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

export type ProjectGalleryPair = {
  before: string;
  after: string;
  label: string;
  beforeAlt: string;
  afterAlt: string;
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
  beforeCover?: string;
  beforeCoverAlt?: string;
  gallery: ProjectGalleryItem[];
  gallerySections?: ProjectGallerySection[];
  galleryPairs?: ProjectGalleryPair[];
};

export function getProjects(locale: Locale): Project[] {
  return getPublishedProjectSources().map((source) =>
    localizeProject(source, locale),
  );
}

export function getProject(slug: string, locale: Locale): Project | undefined {
  const source = projectSources.find(
    (project) => project.slug === slug && !project.hidden,
  );
  if (!source) return undefined;
  return localizeProject(source, locale);
}

export function getAllProjectParams(): { locale: Locale; slug: string }[] {
  return locales.flatMap((locale) =>
    getPublishedProjectSources().map((project) => ({ locale, slug: project.slug })),
  );
}

// Back-compat for sitemap (Dutch URLs)
export const projects = getProjects("nl");
