import type { MetadataRoute } from "next";

import { siteContent } from "@/lib/content/site-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteContent.site.canonicalUrl.replace(/\/$/, "");
  return [
    {
      url: baseUrl,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/politica-de-privacidad`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/politica-de-cookies`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
