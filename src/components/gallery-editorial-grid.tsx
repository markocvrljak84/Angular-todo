"use client";

import Image from "next/image";
import { useCallback, useMemo, useState } from "react";
import {
  GalleryLightbox,
  type GalleryLightboxLabels,
} from "@/components/gallery-lightbox";

export type GallerySlide = {
  srcThumb: string;
  srcLarge: string;
  alt: string;
  caption: string;
};

export type GallerySection = {
  id: string;
  title: string;
  slides: GallerySlide[];
};

type Props = {
  sections: GallerySection[];
  mosaicSlides?: GallerySlide[];
  trailingSections?: GallerySection[];
  trailingMosaicSlides?: GallerySlide[];
  lightboxLabels: GalleryLightboxLabels & { openThumb: string };
};

function collectLightboxSlides(
  sections: GallerySection[],
  mosaicSlides: GallerySlide[],
  trailingSections: GallerySection[],
  trailingMosaicSlides: GallerySlide[]
): GallerySlide[] {
  const coverSlides = (items: GallerySection[]) =>
    items.flatMap((section) => (section.slides[0] ? [section.slides[0]] : []));

  return [
    ...coverSlides(sections),
    ...mosaicSlides,
    ...coverSlides(trailingSections),
    ...trailingMosaicSlides,
  ];
}

function GalleryThumb({
  slide,
  openLabel,
  onOpen,
}: {
  slide: GallerySlide;
  openLabel: string;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      className="gallery-thumb"
      onClick={onOpen}
      aria-label={`${openLabel}: ${slide.caption}`}
    >
      <Image
        src={slide.srcThumb}
        alt=""
        fill
        sizes="(max-width: 767px) 100vw, (max-width: 1199px) 60vw, 58vw"
        loading="lazy"
        className="gallery-thumb__img"
        aria-hidden="true"
      />
    </button>
  );
}

function GalleryMedia({
  slide,
  openLabel,
  onOpen,
}: {
  slide: GallerySlide;
  openLabel: string;
  onOpen: () => void;
}) {
  return (
    <figure className="gallery-editorial__figure">
      <div className="gallery-editorial__media gallery-editorial__media--interactive">
        <GalleryThumb slide={slide} openLabel={openLabel} onOpen={onOpen} />
      </div>
    </figure>
  );
}

function GalleryCopy({
  slide,
  sectionTitle,
}: {
  slide: GallerySlide;
  sectionTitle: string;
}) {
  return (
    <div className="gallery-editorial__copy">
      <p className="gallery-editorial__eyebrow">{slide.caption}</p>
      <h3 className="gallery-editorial__title">{sectionTitle}</h3>
      <p className="gallery-editorial__text">{slide.alt}</p>
    </div>
  );
}

function GalleryItem({
  slide,
  sectionTitle,
  openLabel,
  onOpen,
}: {
  slide: GallerySlide;
  sectionTitle: string;
  openLabel: string;
  onOpen: () => void;
}) {
  return (
    <article className="gallery-editorial__item">
      <GalleryMedia slide={slide} openLabel={openLabel} onOpen={onOpen} />
      <GalleryCopy slide={slide} sectionTitle={sectionTitle} />
    </article>
  );
}

function EditorialSections({
  sections,
  openLabel,
  onOpenSlide,
}: {
  sections: GallerySection[];
  openLabel: string;
  onOpenSlide: (slide: GallerySlide) => void;
}) {
  return (
    <div className="gallery-editorial">
      {sections.map((section) => {
        const coverSlide = section.slides[0];
        if (!coverSlide) return null;

        const variant =
          section.id === "exterior"
            ? "gallery-section--featured"
            : "gallery-section--secondary";

        return (
          <section
            key={section.id}
            className={`gallery-section ${variant}`}
            aria-labelledby={`${section.id}-title`}
          >
            <h2 id={`${section.id}-title`} className="sr-only">
              {section.title}
            </h2>

            <GalleryItem
              slide={coverSlide}
              sectionTitle={section.title}
              openLabel={openLabel}
              onOpen={() => onOpenSlide(coverSlide)}
            />
          </section>
        );
      })}
    </div>
  );
}

function MosaicGrid({
  slides,
  openLabel,
  onOpenSlide,
}: {
  slides: GallerySlide[];
  openLabel: string;
  onOpenSlide: (slide: GallerySlide) => void;
}) {
  if (slides.length === 0) return null;

  return (
    <div className="gallery-mosaic" aria-label="Gallery image grid">
      {slides.map((slide) => (
        <figure key={slide.srcThumb} className="gallery-mosaic__item">
          <GalleryThumb
            slide={slide}
            openLabel={openLabel}
            onOpen={() => onOpenSlide(slide)}
          />
        </figure>
      ))}
    </div>
  );
}

export function GalleryEditorialGrid({
  sections,
  mosaicSlides = [],
  trailingSections = [],
  trailingMosaicSlides = [],
  lightboxLabels,
}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const lightboxSlides = useMemo(
    () =>
      collectLightboxSlides(
        sections,
        mosaicSlides,
        trailingSections,
        trailingMosaicSlides
      ),
    [sections, mosaicSlides, trailingSections, trailingMosaicSlides]
  );

  const openSlide = useCallback(
    (slide: GallerySlide) => {
      const index = lightboxSlides.findIndex(
        (item) => item.srcThumb === slide.srcThumb
      );
      if (index >= 0) setOpenIndex(index);
    },
    [lightboxSlides]
  );

  const closeLightbox = useCallback(() => setOpenIndex(null), []);

  return (
    <div className="gallery-sections">
      <EditorialSections
        sections={sections}
        openLabel={lightboxLabels.openThumb}
        onOpenSlide={openSlide}
      />
      <MosaicGrid
        slides={mosaicSlides}
        openLabel={lightboxLabels.openThumb}
        onOpenSlide={openSlide}
      />
      <EditorialSections
        sections={trailingSections}
        openLabel={lightboxLabels.openThumb}
        onOpenSlide={openSlide}
      />
      <MosaicGrid
        slides={trailingMosaicSlides}
        openLabel={lightboxLabels.openThumb}
        onOpenSlide={openSlide}
      />

      {openIndex !== null ? (
        <GalleryLightbox
          slides={lightboxSlides}
          index={openIndex}
          labels={lightboxLabels}
          onClose={closeLightbox}
          onChange={setOpenIndex}
        />
      ) : null}
    </div>
  );
}
