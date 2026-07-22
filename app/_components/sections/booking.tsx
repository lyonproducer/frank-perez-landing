"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { getAsset, siteContent } from "@/lib/content/site-content";
import { SectionIntro } from "../section-intro";

export function Booking() {
  const copy = siteContent.booking;
  const asset = getAsset(copy.imageId);

  return (
    <section id="booking" aria-labelledby="booking-title" className="bg-orange-brand text-ink">
      <div className="mx-auto grid max-w-[1600px] lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col justify-between px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <SectionIntro
            eyebrow={copy.eyebrow}
            title={copy.title}
            description={copy.description}
            headingId="booking-title"
            tone="dark"
            accent="ink"
          />
          <div className="mt-16 border-t border-ink/30 pt-6">
            <p className="text-2xl font-black uppercase leading-none tracking-[-0.04em]">{copy.availability}</p>
            <p className="mt-4 max-w-md text-sm leading-6 text-ink/70">{copy.note}</p>
          </div>
        </div>
        <motion.figure
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="relative min-h-[28rem] overflow-hidden border-t border-ink/30 lg:min-h-[44rem] lg:border-l lg:border-t-0"
        >
          <Image
            src={asset.src}
            alt={asset.alt}
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            quality={78}
            className="object-cover"
            style={{ objectPosition: `${asset.focalPoint.x}% ${asset.focalPoint.y}%` }}
          />
          {asset.caption ? (
            <figcaption className="absolute bottom-5 left-5 max-w-xs bg-ink/75 px-3 py-2 text-xs leading-5 text-paper/85 backdrop-blur-sm sm:left-8">
              {asset.caption}
            </figcaption>
          ) : null}
        </motion.figure>
      </div>
    </section>
  );
}
