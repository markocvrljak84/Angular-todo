import Link from "next/link";
import { BOOKING_URL } from "@/config/site-contact";
import { HeroVideo } from "@/components/hero-video";
import {
  HERO_LCP_SRCSET,
  HERO_VIDEO_POSTER,
} from "@/config/site-images";
import type { HomeContent } from "@/i18n/home-content";

type Props = {
  kicker: string;
  hero: HomeContent["hero"];
  experiencesHref: string;
  videoAlt: string;
};

export function HeroSection({ kicker, hero, experiencesHref, videoAlt }: Props) {
  return (
    <section id="top" className="hero-fs" aria-labelledby="hero-fs-title">
      <div className="hero-fs__media">
        <div className="hero-fs__slides">
          <div className="hero-fs__slide hero-fs__slide--active">
            {/* Poster is LCP; video preloads at low priority and plays ASAP. */}
            <picture>
              <source
                type="image/webp"
                srcSet={HERO_LCP_SRCSET}
                sizes="100vw"
              />
              <img
                className="hero-fs__poster hero-fs__img--native"
                src={HERO_VIDEO_POSTER}
                alt=""
                width={1920}
                height={1080}
                fetchPriority="high"
                decoding="async"
              />
            </picture>
            <HeroVideo alt={videoAlt} />
          </div>
          <div className="hero-fs__scrim" aria-hidden="true" />
        </div>
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
