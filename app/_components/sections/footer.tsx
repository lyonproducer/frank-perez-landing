import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/lib/content/site-content";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line/60 bg-ink text-paper">
      {/* Background Image with Dark Overlay & Desaturation Filter */}
      <div className="absolute inset-0 select-none pointer-events-none" aria-hidden="true">
        <Image
          src="/media/footer-bg.jpg"
          alt=""
          fill
          sizes="100vw"
          quality={85}
          className="object-cover opacity-30 brightness-75 contrast-110 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/90 via-ink/80 to-ink/95" />
      </div>

      {/* Main Footer Container */}
      <div className="relative z-10 mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-center lg:px-12">
        {/* Left Column: Navigation Links */}
        <nav
          aria-label="Navegación del pie de página"
          className="flex flex-wrap items-center justify-center gap-6 text-xs font-bold uppercase tracking-[0.18em] text-muted md:justify-start"
        >
          {siteContent.navigation.map((item) => (
            <Link
              key={item.id}
              href={`/${item.href}`}
              className="transition-colors hover:text-paper"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Center Column: Fran Pérez Logo */}
        <div className="flex shrink-0 items-center justify-center">
          <Link href="/" aria-label="Ir al inicio">
            <div className="relative h-16 w-48 transition-transform duration-300 hover:scale-105 sm:h-20 sm:w-60">
              <Image
                src="/media/logos/fran-perez-logo-linear.webp"
                alt="Fran Pérez Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Right Column: Policies & Legal Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-bold uppercase tracking-[0.18em] text-muted md:justify-end">
          <Link
            href="/politica-de-privacidad"
            className="transition-colors hover:text-paper"
          >
            Política de Privacidad
          </Link>
          <Link
            href="/politica-de-cookies"
            className="transition-colors hover:text-paper"
          >
            Política de Cookies
          </Link>
        </div>
      </div>

      {/* Bottom Bar: Copyright Lyon Incode */}
      <div className="relative z-10 w-full bg-orange-brand py-3 text-center text-xs font-bold uppercase tracking-[0.16em] text-white">
        <p className="px-4">
          Copyright Lyon Incode 2026 rights reserved
        </p>
      </div>
    </footer>
  );
}
