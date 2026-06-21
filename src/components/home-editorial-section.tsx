import Image from "next/image";
import Link from "next/link";
import type { HomeContent } from "@/i18n/home-content";

type Slide = { src: string; alt: string };

type Props = {
  content: HomeContent["gallery"];
  slides: Slide[];
  galleryHref: string;
};

export function HomeEditorialSection({ content, slides, galleryHref }: Props) {
  return (
    <section className="home-gallery flat-section" aria-labelledby="home-gallery-title">
      <div className="flat-wrap">
        <div className="home-gallery__head">
          <h2 id="home-gallery-title" className="flat-section__title">
            {content.title}
          </h2>
          <p className="flat-section__intro">{content.intro}</p>
          <Link href={galleryHref} className="home-gallery__link">
            {content.ctaLabel}
          </Link>
        </div>

        <ul className="home-gallery__grid">
          {slides.map((slide) => (
            <li key={slide.src} className="home-gallery__item">
              <Image
                src={slide.src}
                alt={slide.alt}
                width={640}
                height={480}
                className="home-gallery__img"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
