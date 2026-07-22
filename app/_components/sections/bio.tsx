"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { getAsset, siteContent } from "@/lib/content/site-content";
import { ScrollTextReveal } from "../effects/scroll-text-reveal";
import { SectionIntro } from "../section-intro";

export function Bio() {
  const copy = siteContent.bio;
  const asset = getAsset(copy.imageId);

  return (
    <section
      id="bio"
      aria-labelledby="bio-title"
      className="relative overflow-hidden border-b border-paper/20 bg-ink py-20 text-paper lg:py-28"
    >
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none" aria-hidden="true">
        <Image
          src="/media/footer-bg.jpg"
          alt=""
          fill
          sizes="100vw"
          quality={85}
          className="object-cover opacity-40 brightness-75 contrast-110 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/65 to-ink/90" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        {/* Section Header following Design System */}
        <SectionIntro
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
          headingId="bio-title"
          tone="light"
        />

        {/* Content Grid */}
        <div className="mt-12 grid items-stretch gap-8 lg:mt-16 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Fran Perez Photo */}
          <motion.figure
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="relative min-h-[28rem] w-full overflow-hidden rounded-2xl border border-paper/15 bg-paper/5 shadow-2xl lg:col-span-5 lg:min-h-[42rem]"
          >
            <Image
              src={asset.src}
              alt={asset.alt}
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              quality={90}
              priority
              className="object-cover object-top"
              style={{ objectPosition: `${asset.focalPoint.x}% ${asset.focalPoint.y}%` }}
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
            {asset.caption ? (
              <figcaption className="absolute bottom-5 left-5 max-w-xs bg-ink/75 px-3 py-2 text-xs leading-5 text-paper/85 backdrop-blur-sm sm:left-8">
                {asset.caption}
              </figcaption>
            ) : null}
          </motion.figure>

          {/* Right Column: Bio Paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col justify-center lg:col-span-7"
          >
            <div className="space-y-6 text-base leading-relaxed text-paper/85 sm:text-lg">
              {copy.paragraphs.map((paragraph, index) => {
                const isRankHighlight = paragraph.includes("Ranked #40");
                if (isRankHighlight) {
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.96 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      className="my-6 rounded-xl border border-orange-brand/30 bg-orange-brand/10 p-5 text-sm font-bold uppercase tracking-wider text-orange-brand sm:text-base"
                    >
                      🏆 {paragraph}
                    </motion.div>
                  );
                }
                return (
                  <ScrollTextReveal key={index}>
                    {paragraph}
                  </ScrollTextReveal>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
