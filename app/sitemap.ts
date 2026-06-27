import type { MetadataRoute } from "next";
import { projects } from "@/app/lib/projects";

const siteUrl = "https://onpointgeo.nl";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-06-22"),
      changeFrequency: "monthly",
      priority: 1,
      images: [
        `${siteUrl}/images/onpoint-residential-renovation-hero.png`,
        `${siteUrl}/images/garden-patio-exterior.png`,
        `${siteUrl}/images/rear-extension-garden-room.png`,
        `${siteUrl}/images/renovation-garden-patio.png`,
      ],
    },
    ...projects.map((project) => ({
      url: `${siteUrl}/projects/${project.slug}`,
      lastModified: new Date("2026-06-25"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [`${siteUrl}${project.cover}`],
    })),
  ];
}
