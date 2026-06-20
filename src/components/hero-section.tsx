import { BookCta } from "@/components/book-cta";
import { HeroCarouselControls } from "@/components/hero-carousel-controls";
import {
  HERO_LCP_PRELOAD_SRC,
  HERO_LCP_SRCSET,
  heroSlideWebpSrc,
  type MainCarouselFile,
} from "@/config/site-images";

export type HeroSlideInput = {
  file: MainCarouselFile;
  alt: string;
};

type Props = {
  slides: HeroSlideInput[];
  kicker: string;
  scriptTitle: string;
  centerLine: string;
  bookCtaLabel: string;
  carouselPrevLabel: string;
  carouselNextLabel: string;
};

/**
 * Server-rendered hero — LCP image is a native <img> in the initial HTML
 * (no JS / hydration required). Carousel controls hydrate separately.
 */
export function HeroSection({
  slides,
  kicker,
  scriptTitle,
  centerLine,
  bookCtaLabel,
  carouselPrevLabel,
  carouselNextLabel,
}: Props) {
  const slideAlts = slides.map((slide) => slide.alt);

  return (
    <section
      id="top"
      className="hero-fs"
      aria-labelledby="hero-fs-title"
      aria-roledescription="carousel"
    >
      <div className="hero-fs__media">
        <div className="hero-fs__slides" aria-live="polite" aria-atomic="true">
          {slides.map((slide, i) => (
            <div
              key={slide.file}
              data-hero-slide={i}
              className={`hero-fs__slide${i === 0 ? " hero-fs__slide--active" : ""}`}
              aria-hidden={i !== 0}
            >
              {i === 0 ? (
                <img
                  src={HERO_LCP_PRELOAD_SRC}
                  srcSet={HERO_LCP_SRCSET}
                  sizes="100vw"
                  alt={slide.alt}
                  width={1280}
                  height={853}
                  fetchPriority="high"
                  decoding="async"
                  className="hero-fs__img hero-fs__img--native"
                />
              ) : (
                <img
                  src={heroSlideWebpSrc(slide.file)}
                  alt=""
                  width={1280}
                  height={853}
                  loading="lazy"
                  decoding="async"
                  className="hero-fs__img hero-fs__img--native"
                />
              )}
            </div>
          ))}
          <div className="hero-fs__scrim" aria-hidden="true" />
        </div>

        <HeroCarouselControls
          slideCount={slides.length}
          slideAlts={slideAlts}
          prevLabel={carouselPrevLabel}
          nextLabel={carouselNextLabel}
        />
      </div>

      <div className="hero-fs__content">
        <p className="hero-fs__kicker">{kicker}</p>
        <h1 id="hero-fs-title" className="hero-fs__title">
          {scriptTitle}
        </h1>
        <p className="hero-fs__tagline">{centerLine}</p>
        <BookCta label={bookCtaLabel} variant="hero" />
      </div>
    </section>
  );
}
