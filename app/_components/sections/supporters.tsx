"use client";

import { useState, useRef } from "react";
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

function SupporterVideoCard({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setMuted(nextMuted);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-xl border border-line bg-paper/5 aspect-[9/16] group/supporter-video">
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted={muted}
        playsInline
        className="w-full h-full object-cover"
      />

      {/* Click overlay to toggle sound */}
      <div 
        className="absolute inset-0 cursor-pointer z-10" 
        onClick={toggleMute} 
        aria-hidden="true" 
      />

      {/* Mute/Unmute Button */}
      <button
        onClick={toggleMute}
        className="absolute top-3 right-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-ink/75 text-paper border border-line/30 hover:bg-orange-brand hover:border-orange-brand hover:scale-105 transition-all duration-200"
        aria-label={muted ? "Activar sonido" : "Desactivar sonido"}
      >
        {muted ? (
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6L4.5 9H1.5v6h3l4.5 3.75V5.25z" />
          </svg>
        ) : (
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
          </svg>
        )}
      </button>
    </div>
  );
}

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
                <SupporterVideoCard src={video} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
