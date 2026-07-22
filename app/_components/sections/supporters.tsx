"use client";

import Image from "next/image";
import { siteContent } from "@/lib/content/site-content";
import { SectionIntro } from "../section-intro";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

const videos = [
  "/videos-support/SnapInsta.to_AQN5RNfQ-ZJPl2vhfwOh9oxs0jgoEcgWC9kQKgWRuhso685JLDebarFPrD87H7piiFyl2MkmywaM1nB2tI5e72Ty5xFzwfre9o4H8Kg.mp4",
  "/videos-support/SnapInsta.to_AQNZ05kTWW90m2-RiBWSS2_jTFig8ae-F5PI1Bmcb7NOnnH-uoBNSYk6IEB33UBrhSKozYKNfVXtknJHrcO0axc9TXpPoaXXlqI6xus.mp4",
  "/videos-support/SnapInsta.to_AQOloHs5326Z1BvnUt-UkqCcEXITbbAIxDn7xFtXFG1nlcYNMDSz6113ZbMekLv0PGEGXwPNOpW8XWs0s_sp33SoTbdpEWI7FMrf4Co.mp4",
  "/videos-support/SnapInsta.to_AQP5VwA4xWYJhTLJD-Tws3Tg_ZsPhJjJBmjBTr1_juuGB4uZBWmBU5riO7wHh_-1Jgoxj97FsOUkaNDi4j2tGZjJIjgCunAPkJm1ql4.mp4",
];

export function Supporters() {
  const copy = siteContent.supporters;

  return (
    <section aria-labelledby="supporters-title" className="relative overflow-hidden border-y border-line bg-ink">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 select-none pointer-events-none" aria-hidden="true">
        <Image
          src="/media/photos/supporters-bg.webp"
          alt=""
          fill
          sizes="100vw"
          quality={85}
          className="object-cover opacity-75 brightness-75 contrast-110 "
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/90 via-ink/80 to-ink/95" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <SectionIntro
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
          headingId="supporters-title"
        />
        <div className="mt-12 border-t border-line pt-12">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={16}
            slidesPerView={1.5}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              480: {
                slidesPerView: 2.2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3.5,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 4.5,
                spaceBetween: 24,
              },
            }}
            className="w-full"
          >
            {videos.map((video, index) => (
              <SwiperSlide key={index}>
                <div className="relative overflow-hidden rounded-xl border border-line bg-paper/5 aspect-[9/16]">
                  <video
                    src={video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
