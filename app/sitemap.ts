import type { MetadataRoute } from "next";

import { siteContent } from "@/lib/content/site-content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteContent.site.canonicalUrl, changeFrequency: "monthly", priority: 0.8 }];
}
