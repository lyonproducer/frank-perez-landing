"use client";

interface RailControlsProps {
  targetId: string;
  label: string;
  previousLabel: string;
  nextLabel: string;
}

export function RailControls({
  targetId,
  label,
  previousLabel,
  nextLabel,
}: RailControlsProps) {
  function scrollRail(direction: number) {
    const rail = document.getElementById(targetId);
    if (!rail) return;
    rail.scrollBy({ left: direction * Math.max(rail.clientWidth * 0.8, 280), behavior: "smooth" });
  }

  return (
    <div className="flex items-center gap-2" aria-label={label}>
      <button
        type="button"
        className="grid h-11 w-11 place-items-center border border-line text-lg text-paper transition-colors hover:border-orange-brand hover:text-orange-brand"
        aria-controls={targetId}
        aria-label={previousLabel}
        onClick={() => scrollRail(-1)}
      >
        ←
      </button>
      <button
        type="button"
        className="grid h-11 w-11 place-items-center border border-line text-lg text-paper transition-colors hover:border-orange-brand hover:text-orange-brand"
        aria-controls={targetId}
        aria-label={nextLabel}
        onClick={() => scrollRail(1)}
      >
        →
      </button>
    </div>
  );
}
