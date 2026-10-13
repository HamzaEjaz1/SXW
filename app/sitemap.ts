import type { MetadataRoute } from "next";
import { guides } from "@/lib/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: "https://www.sxwcarpentry.co.uk/",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.sxwcarpentry.co.uk/guides",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...guides.map((guide) => ({
      url: `https://www.sxwcarpentry.co.uk/guides/${guide.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
