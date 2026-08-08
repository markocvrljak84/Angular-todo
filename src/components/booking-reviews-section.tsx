"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { BookingReviewsContent } from "@/i18n/booking-reviews";

type Props = {
  content: BookingReviewsContent;
  tint?: boolean;
  topRule?: boolean;
};

const AUTO_MS = 6000;

export function BookingReviewsSection({ content, tint = false, topRule = false }: Props) {
  const { quotes } = content;
  const count = quotes.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const regionRef = useRef<HTMLDivElement>(null);

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + count) % count);
  }, [count]);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % count);
  }, [count]);

  useEffect(() => {
    if (count <= 1 || paused) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const id = window.setInterval(goNext, AUTO_MS);
    return () => window.clearInterval(id);
  }, [count, paused, goNext]);

  if (count === 0) return null;

  return (
    <section
      className={`flat-section booking-reviews${tint ? " flat-section--tint" : ""}`}
      aria-labelledby="booking-reviews-title"
    >
      <div className="flat-wrap flat-wrap--narrow">
        {topRule ? <div className="booking-reviews__top-rule" aria-hidden="true" /> : null}
        <h2 id="booking-reviews-title" className="flat-section__title">
          {content.title}
        </h2>

        <div
          ref={regionRef}
          className="booking-reviews__carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(e) => {
            if (!regionRef.current?.contains(e.relatedTarget as Node | null)) {
              setPaused(false);
            }
          }}
        >
          <div className="booking-reviews__viewport" aria-live="polite">
            {quotes.map((quote, i) => (
              <blockquote
                key={quote}
                className={`booking-reviews__slide${i === index ? " booking-reviews__slide--active" : ""}`}
                aria-hidden={i === index ? undefined : true}
              >
                <p>{quote}</p>
              </blockquote>
            ))}
          </div>

          {count > 1 ? (
            <div className="booking-reviews__nav" role="group" aria-label={content.title}>
              <button
                type="button"
                className="booking-reviews__nav-btn"
                onClick={goPrev}
                aria-label={content.prevLabel}
              >
                <span aria-hidden="true">‹</span>
              </button>
              <div className="booking-reviews__dots" aria-hidden="true">
                {quotes.map((quote, i) => (
                  <button
                    key={quote}
                    type="button"
                    className={`booking-reviews__dot${i === index ? " booking-reviews__dot--active" : ""}`}
                    onClick={() => setIndex(i)}
                    tabIndex={-1}
                  />
                ))}
              </div>
              <button
                type="button"
                className="booking-reviews__nav-btn"
                onClick={goNext}
                aria-label={content.nextLabel}
              >
                <span aria-hidden="true">›</span>
              </button>
            </div>
          ) : null}

          <p className="sr-only" aria-live="polite">
            {index + 1} / {count}
          </p>
        </div>
      </div>
    </section>
  );
}
