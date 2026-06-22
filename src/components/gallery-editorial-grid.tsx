import Image from "next/image";

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
};

function GalleryMedia({ slide }: { slide: GallerySlide }) {
  return (
    <figure className="gallery-editorial__figure">
      <div className="gallery-editorial__media">
        <Image
          src={slide.srcThumb}
          alt={slide.alt}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1199px) 60vw, 58vw"
          loading="lazy"
          className="gallery-editorial__img"
        />
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
}: {
  slide: GallerySlide;
  sectionTitle: string;
}) {
  return (
    <article className="gallery-editorial__item">
      <GalleryMedia slide={slide} />
      <GalleryCopy slide={slide} sectionTitle={sectionTitle} />
    </article>
  );
}

function EditorialSections({ sections }: { sections: GallerySection[] }) {
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

            <GalleryItem slide={coverSlide} sectionTitle={section.title} />
          </section>
        );
      })}
    </div>
  );
}

function MosaicGrid({ slides }: { slides: GallerySlide[] }) {
  if (slides.length === 0) return null;

  return (
    <div className="gallery-mosaic" aria-label="Gallery image grid">
      {slides.map((slide) => (
        <figure key={slide.srcThumb} className="gallery-mosaic__item">
          <Image
            src={slide.srcThumb}
            alt={slide.alt}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
            loading="lazy"
            className="gallery-mosaic__img"
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
}: Props) {
  return (
    <div className="gallery-sections">
      <EditorialSections sections={sections} />
      <MosaicGrid slides={mosaicSlides} />
      <EditorialSections sections={trailingSections} />
      <MosaicGrid slides={trailingMosaicSlides} />
    </div>
  );
}
