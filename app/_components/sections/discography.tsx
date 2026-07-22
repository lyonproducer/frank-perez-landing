"use client";

import { motion } from "framer-motion";
import { getPublishedReleases, siteContent } from "@/lib/content/site-content";
import { SectionIntro } from "../section-intro";
import { RailControls } from "../rails/rail-controls";

export function Discography() {
  const copy = siteContent.music;
  const releases = getPublishedReleases();

  return (
    <section id="music" aria-labelledby="music-title" className="bg-ink py-20 lg:py-28">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionIntro
            eyebrow={copy.eyebrow}
            title={copy.title}
            description={copy.description}
            headingId="music-title"
          />
          {releases.length > 0 ? (
            <RailControls
              targetId="music-rail"
              label={siteContent.labels.scrollRail}
              previousLabel={siteContent.labels.previous}
              nextLabel={siteContent.labels.next}
            />
          ) : null}
        </div>

        {releases.length > 0 ? (
          <div id="music-rail" className="rail-scrollbar mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-6" aria-labelledby="music-title" tabIndex={0}>
            {releases.map((release, index) => (
              <motion.div
                key={release.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ duration: 0.4, delay: index * 0.04, ease: [0.23, 1, 0.32, 1] }}
                className="min-w-[min(80vw,24rem)] snap-start sm:min-w-[22rem]"
              >
                {release.href?.includes("spotify.com/embed") ? (
                  <iframe
                    data-testid="embed-iframe"
                    style={{ borderRadius: "12px" }}
                    src={release.href}
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  ></iframe>
                ) : (
                  <article className="border border-line bg-paper p-6 text-ink">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-brand">{release.format}</p>
                    <h3 className="mt-20 text-4xl font-black uppercase leading-none tracking-[-0.05em]">{release.title}</h3>
                    <p className="mt-5 text-sm text-ink/60">{release.year}</p>
                    <a className="mt-8 inline-flex min-h-11 items-center border-b-2 border-brand-red pb-2 text-xs font-black uppercase tracking-[0.18em] transition-transform active:scale-95" href={release.href}>
                      {siteContent.labels.heroCta}
                    </a>
                  </article>
                )}
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="mt-14 border-t border-line pt-6 text-sm uppercase tracking-[0.14em] text-muted">{copy.emptyState}</p>
        )}
      </div>
    </section>
  );
}
