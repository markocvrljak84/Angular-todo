import Link from "next/link";
import { BOOKING_URL } from "@/config/site-contact";
import { HeroCarouselControls } from "@/components/hero-carousel-controls";
import {
  HERO_LCP_PRELOAD_SRC,
  HERO_LCP_SRCSET,
  heroSlideWebpSrc,
  type MainCarouselFile,
} from "@/config/site-images";
import type { HomeContent } from "@/i18n/home-content";

export type HeroSlideInput = {
  file: MainCarouselFile;
  alt: string;
};

type Props = {
  slides: HeroSlideInput[];
  kicker: string;
  hero: HomeContent["hero"];
  experiencesHref: string;
  carouselPrevLabel: string;
  carouselNextLabel: string;
};

export function HeroSection({
  slides,
  kicker,
  hero,
  experiencesHref,
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
          {hero.headline}
        </h1>
        <p className="hero-fs__tagline">{hero.subline}</p>

        <ul className="hero-fs__facts">
          {hero.facts.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>

        <div className="hero-fs__actions">
          <a
            href={BOOKING_URL}
            className="hero-fs__btn hero-fs__btn--primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {hero.ctaBook}
          </a>
          <Link href={experiencesHref} className="hero-fs__btn hero-fs__btn--secondary">
            {hero.ctaExperiences}
          </Link>
        </div>
      </div>
    </section>
  );
}
