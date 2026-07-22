import { ImageResponse } from "next/og";

import { siteContent } from "@/lib/content/site-content";

export const alt = siteContent.site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#050505",
          color: "#f3eee7",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px",
          width: "100%",
        }}
      >
        <div style={{ color: "#e8590c", fontSize: 28, letterSpacing: "0.2em" }}>{siteContent.site.name.toUpperCase()}</div>
        <div style={{ fontSize: 84, fontWeight: 900, letterSpacing: "-0.07em", lineHeight: 0.9, maxWidth: 850 }}>{siteContent.hero.title}</div>
        <div style={{ color: "#a7a19b", fontSize: 24 }}>{siteContent.footer.status}</div>
      </div>
    ),
    size,
  );
}
