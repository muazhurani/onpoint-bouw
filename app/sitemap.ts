import type { MetadataRoute } from "next";
import { locales, localePath } from "@/app/lib/i18n";
import { projectSources } from "@/app/lib/projects-source";
import { SITE_URL } from "@/app/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const homeImages = [
    `${SITE_URL}/images/onpoint-residential-renovation-hero.png`,
    `${SITE_URL}/images/garden-patio/garden-patio-exterior.png`,
    `${SITE_URL}/images/rear-extension/rear-extension-garden-room.png`,
    `${SITE_URL}/images/bathroom-renovation/renovation-garden-patio.png`,
    `${SITE_URL}/images/rear-extension/rear-extension-patio-evening.png`,
    `${SITE_URL}/images/kitchen-extension/kitchen-extension-exterior-finished.png`,
    `${SITE_URL}/images/under-stair-storage/under-stair-storage-finished.png`,
    `${SITE_URL}/images/backyard-garden-renovation/backyard-garden-finished-evening.png`,
  ];

  const homePages = locales.map((locale) => ({
    url: `${SITE_URL}${localePath(locale)}`,
    lastModified: new Date("2026-06-22"),
    changeFrequency: "monthly" as const,
    priority: 1,
    images: homeImages,
    alternates: {
      languages: Object.fromEntries(
        locales.map((code) => [code, `${SITE_URL}${localePath(code)}`]),
      ),
    },
  }));

  const projectPages = locales.flatMap((locale) =>
    projectSources.map((project) => ({
      url: `${SITE_URL}${localePath(locale, `/projects/${project.slug}`)}`,
      lastModified: new Date("2026-06-25"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [`${SITE_URL}${project.cover}`],
      alternates: {
        languages: Object.fromEntries(
          locales.map((code) => [
            code,
            `${SITE_URL}${localePath(code, `/projects/${project.slug}`)}`,
          ]),
        ),
      },
    })),
  );

  return [...homePages, ...projectPages];
}
