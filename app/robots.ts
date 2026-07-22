import type { MetadataRoute } from "next";

import { siteContent } from "@/lib/content/site-content";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: new URL("/sitemap.xml", siteContent.site.canonicalUrl).toString(),
  };
}
