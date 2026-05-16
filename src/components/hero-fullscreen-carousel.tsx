"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export type HeroSlide = { src: string; alt: string };

type Props = {
  slides: HeroSlide[];
  kicker: string;
  scriptTitle: string;
  centerLine: string;
  carouselPrevLabel: string;
  carouselNextLabel: string;
};

export function HeroFullscreenCarousel({
  slides,
  kicker,
  scriptTitle,
  centerLine,
  carouselPrevLabel,
  carouselNextLabel,
}: Props) {
  const [index, setIndex] = useState(0);

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % slides.length);
  }, [slides.length]);

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

  return (
    <section
      id="top"
      className="hero-fs"
      aria-labelledby="hero-fs-title"
      aria-roledescription="carousel"
    >
      <div className="hero-fs__slides" aria-live="polite" aria-atomic="true">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className={`hero-fs__slide${i === index ? " hero-fs__slide--active" : ""}`}
            aria-hidden={i !== index}
          >
            <Image
              src={slide.src}
              alt={i === index ? slide.alt : ""}
              fill
              priority={i === 0}
              className="hero-fs__img"
              sizes="100vw"
            />
          </div>
        ))}
        <div className="hero-fs__scrim" aria-hidden="true" />
      </div>

      {slides.length > 1 ? (
        <div className="hero-fs__nav" role="group" aria-label="Carousel">
          <button
            type="button"
            className="hero-fs__nav-btn hero-fs__nav-btn--prev"
            onClick={goPrev}
            aria-label={carouselPrevLabel}
          >
            <span aria-hidden="true">‹</span>
          </button>
          <div className="hero-fs__dots">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                className={`hero-fs__dot${i === index ? " hero-fs__dot--active" : ""}`}
                onClick={() => setIndex(i)}
                aria-label={`${i + 1} / ${slides.length}`}
                aria-current={i === index}
              />
            ))}
          </div>
          <button
            type="button"
            className="hero-fs__nav-btn hero-fs__nav-btn--next"
            onClick={goNext}
            aria-label={carouselNextLabel}
          >
            <span aria-hidden="true">›</span>
          </button>
        </div>
      ) : null}

      <div className="hero-fs__content">
        <p className="hero-fs__kicker">{kicker}</p>
        <h1 id="hero-fs-title" className="hero-fs__script">
          {scriptTitle}
        </h1>
        <p className="hero-fs__tagline">{centerLine}</p>
      </div>
    </section>
  );
}
