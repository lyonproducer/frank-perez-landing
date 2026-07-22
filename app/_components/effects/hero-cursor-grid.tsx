"use client";

import { useEffect, useRef } from "react";

import { CursorGridEngine } from "./cursor-grid-engine";

export function HeroCursorGrid() {
  const hostRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return;

    const finePointer = window.matchMedia("(any-hover: hover) and (any-pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const hero = host.closest("section");
    let engine: CursorGridEngine | null = null;

    const destroyEngine = () => {
      const currentEngine = engine;
      engine = null;
      currentEngine?.destroy();
    };
    const isEligible = () => finePointer.matches && !reducedMotion.matches && document.visibilityState === "visible";
    const updateEligibility = () => {
      if (!isEligible()) {
        destroyEngine();
        return;
      }
      if (isEligible() && !engine) engine = new CursorGridEngine(host, canvas);
    };
    const onPointerMove = (event: PointerEvent) => {
      if (!event.isPrimary || (event.pointerType !== "mouse" && event.pointerType !== "pen")) return;
      if (!isEligible()) {
        destroyEngine();
        return;
      }
      const rect = host.getBoundingClientRect();
      const inside = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
      if (!inside) {
        destroyEngine();
        return;
      }
      updateEligibility();
      engine?.move(event.clientX - rect.left, event.clientY - rect.top);
    };
    const onPointerLeave = () => destroyEngine();
    const onPointerOver = (event: PointerEvent) => {
      if (!event.isPrimary || (event.pointerType !== "mouse" && event.pointerType !== "pen")) return;
      if (event.target instanceof Node && hero?.contains(event.target)) updateEligibility();
    };
    const onPointerOut = (event: PointerEvent) => {
      if (!event.isPrimary || (event.pointerType !== "mouse" && event.pointerType !== "pen")) return;
      const nextTarget = event.relatedTarget;
      if (!(nextTarget instanceof Node) || !hero?.contains(nextTarget)) destroyEngine();
    };
    const onVisibilityChange = () => {
      updateEligibility();
    };

    updateEligibility();
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave, { passive: true });
    window.addEventListener("pointerover", onPointerOver, { passive: true });
    window.addEventListener("pointerout", onPointerOut, { passive: true });
    window.addEventListener("blur", onPointerLeave, { passive: true });
    window.addEventListener("resize", updateEligibility, { passive: true });
    document.addEventListener("visibilitychange", onVisibilityChange);
    finePointer.addEventListener("change", updateEligibility);
    reducedMotion.addEventListener("change", updateEligibility);
    hero?.addEventListener("pointerleave", onPointerLeave, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("pointerover", onPointerOver);
      window.removeEventListener("pointerout", onPointerOut);
      window.removeEventListener("blur", onPointerLeave);
      window.removeEventListener("resize", updateEligibility);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      finePointer.removeEventListener("change", updateEligibility);
      reducedMotion.removeEventListener("change", updateEligibility);
      hero?.removeEventListener("pointerleave", onPointerLeave);
      destroyEngine();
    };
  }, []);

  return (
    <div ref={hostRef} aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 opacity-25">
      <canvas ref={canvasRef} className="pointer-events-none block h-full w-full" />
    </div>
  );
}
