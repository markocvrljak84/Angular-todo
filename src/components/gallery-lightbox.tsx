"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";

export type GalleryLightboxSlide = {
  srcLarge: string;
  alt: string;
  caption: string;
};

export type GalleryLightboxLabels = {
  close: string;
  prev: string;
  next: string;
  aria: string;
};

type Props = {
  slides: GalleryLightboxSlide[];
  index: number;
  labels: GalleryLightboxLabels;
  onClose: () => void;
  onChange: (index: number) => void;
};

export function GalleryLightbox({
  slides,
  index,
  labels,
  onClose,
  onChange,
}: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const slide = slides[index];
  const count = slides.length;
  const hasPrev = index > 0;
  const hasNext = index < count - 1;

  const goPrev = useCallback(() => {
    if (hasPrev) onChange(index - 1);
  }, [hasPrev, index, onChange]);

  const goNext = useCallback(() => {
    if (hasNext) onChange(index + 1);
  }, [hasNext, index, onChange]);

  useEffect(() => {
    closeRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      }
    }

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [goNext, goPrev, onClose]);

  if (!slide) return null;

  return (
    <div
      className="gallery-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={labels.aria}
    >
      <button
        type="button"
        className="gallery-lightbox__backdrop"
        aria-label={labels.close}
        onClick={onClose}
      />

      <div className="gallery-lightbox__panel">
        <button
          ref={closeRef}
          type="button"
          className="gallery-lightbox__close"
          onClick={onClose}
          aria-label={labels.close}
        >
          <span aria-hidden="true">×</span>
        </button>

        {count > 1 ? (
          <button
            type="button"
            className="gallery-lightbox__nav gallery-lightbox__nav--prev"
            onClick={goPrev}
            disabled={!hasPrev}
            aria-label={labels.prev}
          >
            <span aria-hidden="true">‹</span>
          </button>
        ) : null}

        <figure className="gallery-lightbox__figure">
          <div className="gallery-lightbox__media">
            <Image
              src={slide.srcLarge}
              alt={slide.alt}
              fill
              sizes="100vw"
              priority
              className="gallery-lightbox__img"
            />
          </div>
          <figcaption className="gallery-lightbox__caption">
            <p className="gallery-lightbox__caption-title">{slide.caption}</p>
            <p className="gallery-lightbox__caption-text">{slide.alt}</p>
            {count > 1 ? (
              <p className="gallery-lightbox__counter" aria-live="polite">
                {index + 1} / {count}
              </p>
            ) : null}
          </figcaption>
        </figure>

        {count > 1 ? (
          <button
            type="button"
            className="gallery-lightbox__nav gallery-lightbox__nav--next"
            onClick={goNext}
            disabled={!hasNext}
            aria-label={labels.next}
          >
            <span aria-hidden="true">›</span>
          </button>
        ) : null}
      </div>
    </div>
  );
}
