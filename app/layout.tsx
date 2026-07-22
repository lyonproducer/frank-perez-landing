import type { Metadata, Viewport } from "next";

import { EffectController } from "./_components/effects/effect-controller";
import { getAsset, siteContent } from "@/lib/content/site-content";
import "./globals.css";

const openGraphAsset = getAsset(siteContent.site.ogImageId);

export const metadata: Metadata = {
  metadataBase: new URL(siteContent.site.canonicalUrl),
  title: siteContent.site.title,
  description: siteContent.site.description,
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  alternates: {
    canonical: siteContent.site.canonicalUrl,
  },
  openGraph: {
    type: "website",
    locale: siteContent.site.locale,
    title: siteContent.site.title,
    description: siteContent.site.description,
    url: siteContent.site.canonicalUrl,
    siteName: siteContent.site.name,
    images: [{ url: openGraphAsset.src, width: openGraphAsset.width, height: openGraphAsset.height, alt: openGraphAsset.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.site.title,
    description: siteContent.site.description,
    images: ["/opengraph-image"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="bg-ink">
      <body>
        <a href="#content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-3 focus:text-sm focus:text-paper">
          {siteContent.labels.skipLink}
        </a>
        <EffectController />
        {children}
      </body>
    </html>
  );
}
