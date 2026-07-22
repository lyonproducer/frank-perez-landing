"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const INSTAGRAM_URL = "https://www.instagram.com/franperezve/";

const galleryImages = [
  {
    src: "/media/photos/gallery-1.jpg",
    alt: "Fran Pérez con lentes de sol",
  },
  {
    src: "/media/photos/gallery-2.jpg",
    alt: "Fran Pérez en la cabina de DJ con auriculares",
  },
  {
    src: "/media/photos/gallery-3.jpg",
    alt: "Fran Pérez en AGAIN Club",
  },
  {
    src: "/media/photos/gallery-4.jpg",
    alt: "Fran Pérez de espalda con camiseta gráfica",
  },
  {
    src: "/media/photos/fran-bio-vertical-preview.webp",
    alt: "Fran Pérez en sesión de fotos",
  },
  {
    src: "/media/photos/fran-hero-dj-frontal-horizontal.jpg",
    alt: "Fran Pérez en vivo frente a la cabina",
  },
  {
    src: "/media/photos/fran-hero-live-horizontal.jpg",
    alt: "Fran Pérez actuando en festival",
  },
  {
    src: "/media/photos/fran-booking-vertical-preview.jpg",
    alt: "Fran Pérez en presentación oficial",
  },
];

export function InstagramGallery() {
  return (
    <section id="gallery" aria-label="Galería de Instagram" className="bg-black py-20 lg:py-28">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center justify-center"
        >
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-paper/70">
            INSTAGRAM
          </h2>
          <div className="mt-2 h-[2px] w-8 bg-paper/40" />
        </motion.div>

        {/* 8-Photo Grid */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {galleryImages.map((img, idx) => (
            <motion.a
              key={idx}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.4, delay: idx * 0.04, ease: [0.23, 1, 0.32, 1] }}
              whileTap={{ scale: 0.97 }}
              className="group relative aspect-square w-full overflow-hidden rounded-lg bg-ink/50"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                quality={85}
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/40 flex items-center justify-center">
                <svg
                  className="h-8 w-8 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" clipRule="evenodd" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <motion.a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.97 }}
            className="inline-block border border-paper/30 bg-transparent px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] text-paper transition-colors duration-300 hover:border-paper hover:bg-paper hover:text-black"
          >
            FOLLOW US ON INSTAGRAM
          </motion.a>
        </div>
      </div>
    </section>
  );
}
