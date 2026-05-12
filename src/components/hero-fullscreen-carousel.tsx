"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export type HeroSlide = { src: string; alt: string };

type Props = {
  slides: HeroSlide[];
  kicker: string;
  scriptTitle: string;
  subscribeLine: string;
  emailPlaceholder: string;
  subscribeButton: string;
  subscribeNote: string;
  subscribeThanks: string;
  intervalMs?: number;
};

const DEFAULT_INTERVAL = 5500;

export function HeroFullscreenCarousel({
  slides,
  kicker,
  scriptTitle,
  subscribeLine,
  emailPlaceholder,
  subscribeButton,
  subscribeNote,
  subscribeThanks,
  intervalMs = DEFAULT_INTERVAL,
}: Props) {
  const [index, setIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (slides.length <= 1 || reduceMotion) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [slides.length, intervalMs, reduceMotion]);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setToast(subscribeThanks);
  }

  return (
    <section id="top" className="hero-fs" aria-labelledby="hero-fs-title">
      <div className="hero-fs__slides">
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

      <div className="hero-fs__content">
        <p className="hero-fs__kicker">{kicker}</p>
        <h1 id="hero-fs-title" className="hero-fs__script">
          {scriptTitle}
        </h1>
        <p className="hero-fs__subscribe-line">{subscribeLine}</p>

        <form className="hero-fs__subscribe" onSubmit={onSubmit}>
          <input
            type="email"
            name="email"
            className="hero-fs__email"
            placeholder={emailPlaceholder}
            autoComplete="email"
            required
          />
          <button type="submit" className="hero-fs__subscribe-btn">
            {subscribeButton}
          </button>
        </form>
        <p className="hero-fs__subscribe-note">{subscribeNote}</p>
        {toast ? (
          <p className="hero-fs__subscribe-toast" role="status">
            {toast}
          </p>
        ) : null}
      </div>
    </section>
  );
}
