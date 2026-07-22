"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

interface ScrollTextRevealProps {
  children: string;
  className?: string;
  staggerDelay?: number;
}

export function ScrollTextReveal({
  children,
  className = "",
  staggerDelay = 0.015,
}: ScrollTextRevealProps) {
  const words = useMemo(() => children.split(" "), [children]);

  return (
    <motion.p
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0.2, filter: "blur(4px)", y: 3 },
            visible: { opacity: 1, filter: "blur(0px)", y: 0 },
          }}
          transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
          className="inline-block mr-[0.25em] last:mr-0"
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
}
