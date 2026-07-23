"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { getPublishedFeaturedAt, siteContent } from "@/lib/content/site-content";
import { SectionIntro } from "../section-intro";

export function FeaturedAt() {
  const copy = siteContent.featuredAt;
  const entries = getPublishedFeaturedAt();

  return (
    <section
      id="live"
      aria-labelledby="live-title"
      className="relative overflow-hidden bg-ink py-20 text-paper lg:py-28"
    >
      {/* Background Photo with Dark Overlay */}
      <div className="absolute inset-0 -z-10 select-none pointer-events-none" aria-hidden="true">
        <Image
          src="/media/photos/featured-at-bg.webp"
          alt=""
          fill
          sizes="100vw"
          quality={85}
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/90 via-ink/80 to-ink/95" />
      </div>

      {/* Background Cutout PNG at 60% X */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 top-0 left-[45%] md:left-[55%] lg:left-[45%] right-0 pointer-events-none select-none z-0 flex items-end justify-start overflow-hidden opacity-40 sm:opacity-50 lg:opacity-70"
      >
        <div className="relative h-[85%] w-full max-w-[600px] lg:h-full">
          <Image
            src="/media/photos/fran-bandana.webp"
            alt=""
            fill
            sizes="(min-width: 1024px) 40vw, 50vw"
            quality={90}
            className="object-contain object-bottom"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <SectionIntro
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
          headingId="live-title"
        />

        {entries.length > 0 ? (
          <div className="mt-14 border-t border-paper/20">
            {entries.map((entry, index) => (
              <motion.a
                key={entry.id}
                href={entry.href!}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: [0.23, 1, 0.32, 1] }}
                whileTap={{ scale: 0.99 }}
                className="group flex flex-col justify-between gap-2 border-b border-paper/15 py-6 transition-colors hover:bg-paper/5 sm:flex-row sm:items-center sm:py-8 sm:px-4"
              >
                {/* Left Side: Store Name + Detail */}
                <div className="flex flex-wrap items-baseline gap-3 sm:gap-4">
                  <h3 className="text-2xl font-black uppercase tracking-tight text-paper sm:text-3xl lg:text-4xl group-hover:text-orange-brand transition-colors">
                    {entry.venue}
                  </h3>
                  <span className="text-xs font-medium text-paper/60 sm:text-sm">
                    {entry.date}
                  </span>
                </div>

                {/* Right Side: Arrow Icon */}
                <div className="flex items-center gap-2 self-end sm:self-center">
                  <span className="text-xs font-bold uppercase tracking-widest text-paper/50 opacity-0 transition-opacity group-hover:opacity-100 hidden sm:inline">
                    VISITAR
                  </span>
                  <svg
                    className="h-6 w-6 text-paper/80 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-orange-brand sm:h-7 sm:w-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </motion.a>
            ))}
          </div>
        ) : (
          <p className="mt-14 border-t border-line pt-6 text-sm uppercase tracking-[0.14em] text-muted">
            {copy.emptyState}
          </p>
        )}
      </div>
    </section>
  );
}
