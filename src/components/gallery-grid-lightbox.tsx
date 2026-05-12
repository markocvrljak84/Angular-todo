"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState } from "react";

export type GallerySlide = {
  srcThumb: string;
  srcLarge: string;
  alt: string;
  caption: string;
};

export type GalleryLightboxLabels = {
  close: string;
  prev: string;
  next: string;
  dialog: string;
  openThumb: string;
};

type Props = {
  slides: GallerySlide[];
  labels: GalleryLightboxLabels;
};

export function GalleryGridLightbox({ slides, labels }: Props) {
  const dialogTitleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const close = useCallback(() => {
    setOpen(false);
  }, []);

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % slides.length);
  }, [slides.length]);

  const openAt = useCallback((i: number) => {
    setIndex(i);
    setOpen(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => closeRef.current?.focus(), 0);
    return () => {
      document.body.style.overflow = "";
      window.clearTimeout(t);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close, goPrev, goNext]);

  if (slides.length === 0) return null;

  const current = slides[index];

  return (
    <>
      <div className="gallery-mosaic" role="list">
        {slides.map((slide, i) => (
          <div className="gallery-mosaic__cell" role="listitem" key={slide.srcThumb}>
            <button
              type="button"
              className="gallery-mosaic__thumb"
              onClick={() => openAt(i)}
              aria-haspopup="dialog"
              aria-label={`${labels.openThumb}: ${slide.caption}`}
            >
              <Image
                src={slide.srcThumb}
                alt={slide.alt}
                fill
                sizes="(max-width: 767px) 50vw, 25vw"
                className="gallery-mosaic__img"
              />
            </button>
          </div>
        ))}
      </div>

      {open ? (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby={dialogTitleId}
        >
          <button
            type="button"
            className="gallery-lightbox__scrim"
            aria-label={labels.close}
            onClick={close}
          />

          <div className="gallery-lightbox__panel" onClick={(e) => e.stopPropagation()}>
            <h2 id={dialogTitleId} className="sr-only">
              {labels.dialog}
            </h2>

            <button ref={closeRef} type="button" className="gallery-lightbox__close" onClick={close}>
              <span aria-hidden="true">×</span>
              <span className="sr-only">{labels.close}</span>
            </button>

            <div className="gallery-lightbox__viewport">
              <button type="button" className="gallery-lightbox__nav gallery-lightbox__nav--prev" onClick={goPrev}>
                <span aria-hidden="true">‹</span>
                <span className="sr-only">{labels.prev}</span>
              </button>

              <button type="button" className="gallery-lightbox__nav gallery-lightbox__nav--next" onClick={goNext}>
                <span aria-hidden="true">›</span>
                <span className="sr-only">{labels.next}</span>
              </button>

              <div className="gallery-lightbox__stage">
                <Image
                  key={current.srcLarge}
                  src={current.srcLarge}
                  alt={current.alt}
                  fill
                  className="gallery-lightbox__img"
                  sizes="(max-width: 1200px) 90vw, 1200px"
                  priority
                />
              </div>
            </div>

            <p className="gallery-lightbox__caption" aria-live="polite">
              <span className="gallery-lightbox__counter" aria-live="polite">
                {index + 1} / {slides.length}
              </span>
              {current.caption}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
