"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Magnet from "../effects/magnet";
import { Particles } from "../effects/particles";

export function HeadShowcase() {
  const [particleSize, setParticleSize] = useState(0.8);

  useEffect(() => {
    const handleResize = () => {
      setParticleSize(window.innerWidth >= 768 ? 1.2 : 0.8);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section aria-label="Fran Pérez Portrait" className="relative overflow-hidden bg-ink py-20 lg:py-28">
      {/* Background Particles */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={90}
        size={particleSize}
        ease={80}
        color="#6b2d12"
        refresh
      />

      {/* Background Radial Glow */}
      <div className="absolute inset-0 z-0 flex items-center justify-center select-none pointer-events-none">
        <div className="h-[400px] w-[400px] rounded-full bg-orange-brand/15 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1600px] justify-center px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          <Magnet padding={180} magnetStrength={3} wrapperClassName="flex justify-center">
            <div className="relative h-[320px] w-[220px] sm:h-[450px] sm:w-[300px] md:h-[550px] md:w-[370px]">
              <Image
                src="/media/photos/fran-head.png"
                alt="Fran Pérez"
                fill
                priority
                sizes="(min-width: 768px) 370px, 220px"
                quality={95}
                className="object-contain filter drop-shadow-[0_20px_40px_rgba(232,89,12,0.25)]"
              />
            </div>
          </Magnet>
        </motion.div>
      </div>
    </section>
  );
}
