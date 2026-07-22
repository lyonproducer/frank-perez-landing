"use client";

import { ProgressiveBlur } from "./progressive-blur";
import { SmoothCursor } from "./smooth-cursor";
import { SmoothScroll } from "./smooth-scroll";

export function EffectController() {
  return (
    <>
      <SmoothScroll />
      <SmoothCursor />
      <ProgressiveBlur />
    </>
  );
}

