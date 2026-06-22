import type { MetadataRoute } from "next";

const siteUrl = "https://onpointgeo.nl";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-06-22"),
      changeFrequency: "monthly",
      priority: 1,
      images: [
        `${siteUrl}/images/onpoint-total-station-civil-site.png`,
        `${siteUrl}/images/onpoint-slab-control-point-survey.png`,
        `${siteUrl}/images/onpoint-steel-asbuilt-verification.png`,
        `${siteUrl}/images/onpoint-report-review-slab-site.png`,
      ],
    },
  ];
}
