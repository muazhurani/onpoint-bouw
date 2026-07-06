import type { MetadataRoute } from "next";
import { locales, localePath } from "@/app/lib/i18n";
import { projectSources } from "@/app/lib/projects-source";

const siteUrl = "https://onpointgeo.nl";

export default function sitemap(): MetadataRoute.Sitemap {
  const homeImages = [
    `${siteUrl}/images/onpoint-residential-renovation-hero.png`,
    `${siteUrl}/images/garden-patio/garden-patio-exterior.png`,
    `${siteUrl}/images/rear-extension/rear-extension-garden-room.png`,
    `${siteUrl}/images/bathroom-renovation/renovation-garden-patio.png`,
    `${siteUrl}/images/rear-extension/rear-extension-patio-evening.png`,
    `${siteUrl}/images/kitchen-extension/kitchen-extension-exterior-finished.png`,
    `${siteUrl}/images/under-stair-storage/under-stair-storage-finished.png`,
    `${siteUrl}/images/backyard-garden-renovation/backyard-garden-finished-evening.png`,
  ];

  const homePages = locales.map((locale) => ({
    url: `${siteUrl}${localePath(locale)}`,
    lastModified: new Date("2026-06-22"),
    changeFrequency: "monthly" as const,
    priority: 1,
    images: homeImages,
    alternates: {
      languages: Object.fromEntries(
        locales.map((code) => [code, `${siteUrl}${localePath(code)}`]),
      ),
    },
  }));

  const projectPages = locales.flatMap((locale) =>
    projectSources.map((project) => ({
      url: `${siteUrl}${localePath(locale, `/projects/${project.slug}`)}`,
      lastModified: new Date("2026-06-25"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [`${siteUrl}${project.cover}`],
      alternates: {
        languages: Object.fromEntries(
          locales.map((code) => [
            code,
            `${siteUrl}${localePath(code, `/projects/${project.slug}`)}`,
          ]),
        ),
      },
    })),
  );

  return [...homePages, ...projectPages];
}
