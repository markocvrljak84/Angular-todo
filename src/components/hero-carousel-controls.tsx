"use client";

import { useCallback, useEffect, useState } from "react";

type Props = {
  slideCount: number;
  slideAlts: string[];
  prevLabel: string;
  nextLabel: string;
};

function applySlide(index: number, slideAlts: string[]) {
  const slides = document.querySelectorAll<HTMLElement>("[data-hero-slide]");
  slides.forEach((el, i) => {
    const active = i === index;
    el.classList.toggle("hero-fs__slide--active", active);
    el.setAttribute("aria-hidden", active ? "false" : "true");
    const img = el.querySelector("img");
    if (img) img.alt = active ? (slideAlts[i] ?? "") : "";
  });
}

export function HeroCarouselControls({
  slideCount,
  slideAlts,
  prevLabel,
  nextLabel,
}: Props) {
  const [index, setIndex] = useState(0);

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + slideCount) % slideCount);
  }, [slideCount]);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % slideCount);
  }, [slideCount]);

  useEffect(() => {
    applySlide(index, slideAlts);
  }, [index, slideAlts]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const t = e.target as HTMLElement | null;
      if (t?.closest?.("input, textarea, select, [contenteditable=true]")) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goPrev, goNext]);

  if (slideCount <= 1) return null;

  return (
    <div className="hero-fs__nav" role="group" aria-label="Carousel">
      <button
        type="button"
        className="hero-fs__nav-btn hero-fs__nav-btn--prev"
        onClick={goPrev}
        aria-label={prevLabel}
      >
        <span aria-hidden="true">‹</span>
      </button>
      <div className="hero-fs__dots">
        {Array.from({ length: slideCount }, (_, i) => (
          <button
            key={i}
            type="button"
            className={`hero-fs__dot${i === index ? " hero-fs__dot--active" : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`${i + 1} / ${slideCount}`}
            aria-current={i === index}
          />
        ))}
      </div>
      <button
        type="button"
        className="hero-fs__nav-btn hero-fs__nav-btn--next"
        onClick={goNext}
        aria-label={nextLabel}
      >
        <span aria-hidden="true">›</span>
      </button>
    </div>
  );
}
