"use client";

import { motion } from "framer-motion";

interface SectionIntroProps {
  eyebrow: string;
  title: string;
  description: string;
  headingId: string;
  align?: "left" | "right";
  tone?: "light" | "dark";
  accent?: "orange" | "ink";
}

export function SectionIntro({
  eyebrow,
  title,
  description,
  headingId,
  align = "left",
  tone = "light",
  accent = "orange",
}: SectionIntroProps) {
  const headingClass = tone === "dark" ? "text-ink" : "text-paper";
  const descriptionClass = tone === "dark" ? "text-ink/65" : "text-muted";
  const eyebrowClass = accent === "ink" ? "text-ink" : "text-orange-brand";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      className={align === "right" ? "max-w-xl lg:ml-auto" : "max-w-xl"}
    >
      <p className={`mb-4 text-xs font-bold uppercase tracking-[0.24em] ${eyebrowClass}`}>
        {eyebrow}
      </p>
      <h2 id={headingId} className={`text-4xl font-black uppercase leading-[0.9] tracking-[-0.05em] ${headingClass} sm:text-5xl lg:text-7xl`}>
        {title}
      </h2>
      <p className={`mt-6 max-w-lg text-base leading-7 ${descriptionClass} sm:text-lg`}>
        {description}
      </p>
    </motion.div>
  );
}
