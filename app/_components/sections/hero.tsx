import Image from "next/image";

import { getAsset, siteContent } from "@/lib/content/site-content";
import { HeroCursorGrid } from "../effects/hero-cursor-grid";
import { HyperText } from "../effects/hyper-text";

export function Hero() {
  const copy = siteContent.hero;
  const isSequence = copy.imageIds.length > 1;

  return (
    <section id="top" aria-labelledby="hero-title" className="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden bg-ink">
      <div className="hero-image-sequence absolute inset-0 -z-20" role="img" aria-label={getAsset(copy.imageIds[0]).alt}>
        {copy.imageIds.map((id, index) => {
          const asset = getAsset(id);
          let layerClass = "absolute inset-0";
          if (isSequence) {
            if (index === 0) {
              layerClass = "hero-image-sequence__layer hero-image-sequence__layer--first absolute inset-0";
            } else if (index === 1) {
              layerClass = "hero-image-sequence__layer hero-image-sequence__layer--second absolute inset-0";
            } else if (index === 2) {
              layerClass = "hero-image-sequence__layer hero-image-sequence__layer--third absolute inset-0";
            }
          }
          return (
            <div key={id} className={layerClass} aria-hidden="true">
              <Image
                src={asset.src}
                alt=""
                aria-hidden="true"
                fill
                priority={index === 0}
                sizes="100vw"
                quality={78}
                className="object-cover"
                style={{ objectPosition: `${asset.focalPoint.x}% ${asset.focalPoint.y}%` }}
              />
            </div>
          );
        })}
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/55 to-ink/10" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-ink/10" aria-hidden="true" />
      <HeroCursorGrid />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-4rem)] max-w-[1600px] flex-col justify-end px-5 pb-12 pt-24 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20">
        <div className="max-w-5xl lg:max-w-[1240px]">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-orange-brand">
            {copy.eyebrow}
          </p>
          <HyperText
            as="h1"
            id="hero-title"
            className="max-w-[1240px] py-0 text-[clamp(4rem,14vw,11rem)] font-black uppercase leading-[0.78] tracking-[-0.08em] text-paper"
            startOnView={true}
          >
            {copy.title}
          </HyperText>
          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-lg text-sm leading-relaxed text-paper/80 [text-wrap:balance] sm:text-base lg:text-lg">{copy.description}</p>
            <a
              data-blur-exclusion
              href={copy.ctaHref}
              className="inline-flex min-h-11 w-fit items-center justify-center bg-brand-red px-6 py-3 text-xs font-black uppercase tracking-[0.2em] text-paper transition-transform hover:-translate-y-1"
            >
              {copy.ctaLabel}
              <span className="ml-3" aria-hidden="true">↘</span>
            </a>
          </div>
        </div>
        {/* <p className="mt-10 max-w-md text-xs leading-5 text-paper/60">
          {firstAsset.caption}
        </p> */}
      </div>
    </section>
  );
}
