"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { siteContent, getPublishedSocialLinks } from "@/lib/content/site-content";
import StaggeredMenu from "../effects/staggered-menu";

export function Navbar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = siteContent.navigation.map((item) => ({
    label: item.label,
    ariaLabel: item.label,
    link: item.href,
  }));

  const socialItems = getPublishedSocialLinks().map((link) => ({
    label: link.label,
    link: link.href,
  }));

  return (
    <>
      {/* Desktop Header */}
      <motion.header
        data-blur-exclusion
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
        className="sticky top-0 z-50 hidden border-b border-line/70 bg-ink/90 backdrop-blur-md md:block"
      >
        <nav
          aria-label={siteContent.labels.primaryNavigation}
          className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-12"
        >
          {/* Logo */}
          <a
            href="#top"
            className="relative flex items-center transition-transform duration-300 hover:scale-105"
            aria-label="Fran Pérez - Inicio"
          >
            <div className="relative h-10 w-36 sm:h-12 sm:w-44">
              <Image
                src="/media/logos/fran-perez-logo-linear.webp"
                alt="Fran Pérez Logo"
                fill
                priority
                sizes="(min-width: 640px) 176px, 144px"
                className="object-contain object-left"
              />
            </div>
          </a>

          {/* Desktop Links */}
          <div className="flex items-center gap-8 text-xs font-bold uppercase tracking-[0.2em] text-muted">
            {siteContent.navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="relative py-1 transition-colors hover:text-paper after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-orange-brand after:transition-all after:duration-200 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </motion.header>

      {/* Mobile Staggered Menu */}
      <div className="block md:hidden">
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#fff"
          openMenuButtonColor="#000"
          changeMenuColorOnOpen={true}
          colors={["#7a2e12", "#e8590c"]}
          logoUrl="/media/logos/fran-perez-logo-linear.webp"
          accentColor="#e8590c"
          isFixed={true}
        />
      </div>
    </>
  );
}

