"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { getPublishedSocialLinks, siteContent } from "@/lib/content/site-content";
import { SectionIntro } from "../section-intro";

function InstagramIcon() {
  return (
    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" clipRule="evenodd" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.97-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.55-1.36 1.46-1.46 2.45-.16 1.25.35 2.55 1.34 3.26.96.71 2.3.83 3.37.33 1.13-.51 1.91-1.66 2.01-2.88.05-2.39.02-4.78.02-7.17-.01-4.01-.01-8.03-.01-12.04z" />
    </svg>
  );
}

function getPlatformIcon(platform: string) {
  switch (platform.toLowerCase()) {
    case "instagram":
      return <InstagramIcon />;
    case "youtube":
      return <YouTubeIcon />;
    case "facebook":
      return <FacebookIcon />;
    case "tiktok":
      return <TikTokIcon />;
    default:
      return null;
  }
}

function DockItem({
  href,
  label,
  platform,
  mouseX,
}: {
  href: string;
  label: string;
  platform: string;
  mouseX: ReturnType<typeof useMotionValue<number>>;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [72, 104, 72]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ width, height: width }}
      className="group relative flex items-center justify-center rounded-2xl border border-ink/20 bg-paper shadow-lg transition-colors hover:border-orange-brand hover:bg-orange-brand hover:text-paper"
      whileTap={{ scale: 0.95 }}
    >
      {getPlatformIcon(platform)}

      {/* Tooltip Label */}
      <span className="absolute -top-10 scale-0 rounded-md bg-ink px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-paper shadow-md transition-all duration-200 group-hover:scale-100">
        {label}
      </span>
    </motion.a>
  );
}

export function SocialLinks() {
  const copy = siteContent.social;
  const links = getPublishedSocialLinks();
  const mouseX = useMotionValue(Infinity);

  return (
    <section id="social" aria-labelledby="social-title" className="relative overflow-hidden bg-paper py-20 text-ink lg:py-28">
      {/* Centered Image on X axis, positioned at bottom between blocks */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 pointer-events-none select-none z-0 w-[280px] h-[240px] sm:w-[400px] sm:h-[320px] lg:w-[540px] lg:h-[400px] xl:w-[620px] xl:h-[440px]">
        <Image
          src="/media/photos/fran-zooyork.png"
          alt="Fran Pérez"
          fill
          quality={95}
          className="object-contain object-bottom filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.1)]"
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1600px] flex-col gap-12 px-5 sm:px-8 lg:px-12 lg:flex-row lg:items-center lg:justify-between">
        {/* Left Side: Section Intro */}
        <div className="max-w-xl">
          <SectionIntro
            eyebrow={copy.eyebrow}
            title={copy.title}
            description={copy.description}
            headingId="social-title"
            tone="dark"
          />
        </div>

        {/* Right Side: Interactive macOS-style Dock */}
        <div className="flex justify-start lg:justify-end">
          {links.length > 0 ? (
            <motion.div
              onMouseMove={(e) => mouseX.set(e.pageX)}
              onMouseLeave={() => mouseX.set(Infinity)}
              className="flex items-center gap-4 rounded-3xl border border-ink/15 bg-ink/5 p-3.5 backdrop-blur-md"
            >
              {links.map((link) => (
                <DockItem
                  key={link.id}
                  href={link.href!}
                  label={link.label}
                  platform={link.platform}
                  mouseX={mouseX}
                />
              ))}
            </motion.div>
          ) : (
            <p className="border-t border-ink/20 pt-6 text-sm uppercase tracking-[0.14em] text-ink/60">
              {copy.emptyState}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}


