"use client";

import { useEffect, useState } from "react";

export function ProgressiveBlur() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reducedTransparency = window.matchMedia("(prefers-reduced-transparency: reduce)");
    const supported = CSS.supports("backdrop-filter", "blur(2px)") || CSS.supports("-webkit-backdrop-filter", "blur(2px)");

    if (!reducedTransparency.matches && supported) {
      setEnabled(true);
    }
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        data-progressive-blur
        aria-hidden="true"
        className="progressive-blur progressive-blur-top"
      />
      <div
        data-progressive-blur
        aria-hidden="true"
        className="progressive-blur progressive-blur-bottom"
      />
    </>
  );
}

