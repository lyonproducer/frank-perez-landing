"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperRef } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { SectionIntro } from "../section-intro";
import { BorderGlow } from "../effects/border-glow";

// Import Swiper styles
import "swiper/css";

interface VideoSet {
  id: string;
  src: string;
  title: string;
  youtubeUrl: string;
}

const videoSets: VideoSet[] = [
  {
    id: "set-1",
    src: "/media/videos-set/set-1.mp4",
    title: "AFRO HOUSE SESSIONS #002 | Toledo Sunset Lounge 🌅 | Live DJ Set 2026 | Fran Perez (VE)",
    youtubeUrl: "https://youtu.be/ju9IB0_sNoo?si=uaEmGFiwfdOuRhEl",
  },
  {
    id: "set-2",
    src: "/media/videos-set/set-2.mp4",
    title: "AFRO HOUSE SESSIONS #001 | Madrid Courtyard 🌴 | Live DJ Set 2026 | Fran Perez (VE)",
    youtubeUrl: "https://youtu.be/CpL-u7cz3h0?si=odTeWpnUyfoomrse",
  },
  {
    id: "set-3",
    src: "/media/videos-set/set-3.mp4",
    title: "AFRO HOUSE SESSIONS #003 | Midnight Loft 🌙 | Live DJ Set 2026 | Fran Perez (VE)",
    youtubeUrl: "https://youtu.be/12lCK9f9eo4?si=_O6gzzgWHSUGZ73o",
  },
];

function VideoPlayer({
  src,
  title,
  youtubeUrl,
  isActive,
}: {
  src: string;
  title: string;
  youtubeUrl: string;
  isActive: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [volume, setVolume] = useState(0.8);
  const [ended, setEnded] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isActive) {
      setEnded(false);
      video.currentTime = 0;
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isActive]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume;
    }
  }, [volume]);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setMuted(nextMuted);
      if (!nextMuted && volume === 0) {
        setVolume(0.8);
      }
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      if (newVolume > 0) {
        videoRef.current.muted = false;
        setMuted(false);
      } else {
        videoRef.current.muted = true;
        setMuted(true);
      }
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Video Container Box with BorderGlow */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative w-full aspect-video rounded-2xl group/video"
      >
        <BorderGlow
          className="w-full h-full"
          backgroundColor="rgba(5, 5, 5, 0.3)"
          borderRadius={16}
          glowColor="24 90 55"
          animated={isActive}
        >
          <video
            ref={videoRef}
            src={src}
            autoPlay={isActive}
            muted={muted}
            playsInline
            onEnded={() => setEnded(true)}
            className="w-full h-full object-cover"
          />

          {/* Title Overlay */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/95 via-ink/40 to-transparent p-4 sm:p-6 lg:p-8 z-10 pointer-events-none">
            <span className="inline-block px-2 py-0.5 mb-2 sm:mb-3 text-[10px] font-bold uppercase tracking-widest bg-orange-brand/20 text-orange-brand border border-orange-brand/30 rounded-sm">
              Live Session
            </span>
            <p className="text-sm font-extrabold text-paper sm:text-base md:text-xl lg:text-2xl leading-snug max-w-2xl [text-wrap:balance]">
              {title}
            </p>
          </div>

          {/* Mute/Unmute Action Indicator on view */}
          <div className="absolute inset-0 z-0 cursor-pointer pointer-events-auto" onClick={toggleMute} aria-hidden="true" />

          {/* Control Button Overlay */}
          <button
            onClick={toggleMute}
            className="absolute top-4 right-4 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-ink/75 text-paper border border-line/30 hover:bg-orange-brand hover:border-orange-brand hover:scale-105 transition-all duration-200"
            aria-label={muted ? "Activar sonido" : "Desactivar sonido"}
          >
            {muted ? (
              <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6L4.5 9H1.5v6h3l4.5 3.75V5.25z" />
              </svg>
            ) : (
              <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
              </svg>
            )}
          </button>

          {/* Volume Control Overlay (visible only when not muted) */}
          {!muted && (
            <div
              className="absolute top-[68px] sm:top-[76px] right-4 z-20 flex flex-col items-center justify-center p-3 rounded-full bg-ink/75 text-paper border border-line/30 h-28 w-10 sm:w-12 transition-all duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={volume}
                onChange={handleVolumeChange}
                className="accent-orange-brand cursor-pointer w-1.5 h-20 bg-paper/20 rounded-md"
                style={{
                  WebkitAppearance: "slider-vertical",
                }}
              />
            </div>
          )}

          {/* YouTube Link Overlay (visible when video ends AND user is hovering) */}
          {ended && (
            <div
              className={`absolute inset-0 bg-ink/90 flex flex-col items-center justify-center gap-4 z-30 transition-opacity duration-300 ${
                hovered ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              }`}
            >
              <p className="text-paper text-sm sm:text-base md:text-lg font-bold tracking-wider uppercase text-center px-6 [text-wrap:balance]">
                ¿Querés ver el set completo?
              </p>
              <a
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-brand-red px-6 py-3 text-xs font-black uppercase tracking-[0.2em] text-paper transition-transform hover:-translate-y-1 rounded-sm shadow-lg pointer-events-auto"
              >
                Seguir viendo en YouTube
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          )}
        </BorderGlow>
      </div>

      {/* CTA Button below video container */}
      <div className="flex justify-center">
        <a
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-brand-red px-6 py-3 text-xs font-black uppercase tracking-[0.2em] text-paper transition-transform hover:-translate-y-1 rounded-sm shadow-md"
        >
          Ver en YouTube
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export function VideoSessions() {
  const swiperRef = useRef<SwiperRef>(null);
  const [realIndex, setRealIndex] = useState(0);

  const handleMouseEnter = useCallback(() => {
    if (swiperRef.current?.swiper?.autoplay) {
      swiperRef.current.swiper.autoplay.stop();
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (swiperRef.current?.swiper?.autoplay) {
      swiperRef.current.swiper.autoplay.start();
    }
  }, []);

  const handlePrev = useCallback(() => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  }, []);

  const handleNext = useCallback(() => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  }, []);

  return (
    <section aria-labelledby="videoset-title" className="relative overflow-hidden border-y border-line bg-ink py-20 lg:py-28">
      {/* Background Image with Dark Orange Overlay */}
      <div className="absolute inset-0 select-none pointer-events-none z-0" aria-hidden="true">
        <Image
          src="/media/photos/bio-background.png"
          alt=""
          fill
          sizes="100vw"
          quality={85}
          className="object-cover opacity-25 brightness-50 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-orange-brand/10 to-ink" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <SectionIntro
            eyebrow="07 / Live Sessions"
            title="Sets grabados"
            description="Explorá las sesiones exclusivas de Fran Pérez grabadas en vivo desde locaciones increíbles."
            headingId="videoset-title"
          />

          {/* Custom navigation controls */}
          <div className="flex gap-4 self-start md:self-end">
            <button
              onClick={handlePrev}
              className="flex h-12 w-12 items-center justify-center border border-line bg-paper/5 text-paper hover:bg-orange-brand hover:border-orange-brand hover:scale-105 transition-all duration-200 cursor-pointer"
              aria-label="Sesión anterior"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              className="flex h-12 w-12 items-center justify-center border border-line bg-paper/5 text-paper hover:bg-orange-brand hover:border-orange-brand hover:scale-105 transition-all duration-200 cursor-pointer"
              aria-label="Sesión siguiente"
            >
              →
            </button>
          </div>
        </div>

        {/* Swiper Slider with Hover Logic */}
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="mt-6 mx-auto max-w-4xl"
        >
          <Swiper
            ref={swiperRef}
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            onSlideChange={(swiper) => setRealIndex(swiper.realIndex)}
            className="w-full"
          >
            {videoSets.map((set, index) => (
              <SwiperSlide key={set.id}>
                <VideoPlayer
                  src={set.src}
                  title={set.title}
                  youtubeUrl={set.youtubeUrl}
                  isActive={index === realIndex}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
