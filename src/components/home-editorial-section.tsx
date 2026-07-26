import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { HomeContent } from "@/i18n/home-content";
import { localePath } from "@/config/site-routes";

type Props = {
  content: HomeContent["editorial"];
  images: readonly [string, string, string];
  galleryHref: string;
  locale: Locale;
  experiencesLabel: string;
  journalLabel: string;
};

export function HomeEditorialSection({
  content,
  images,
  galleryHref,
  locale,
  experiencesLabel,
  journalLabel,
}: Props) {
  return (
    <section className="home-editorial flat-section" aria-labelledby="home-editorial-title">
      <div className="flat-wrap">
        <div className="home-editorial__head">
          <nav className="home-explore-links home-explore-links--inline" aria-label="Explore Stars Peak">
            <Link href={localePath(locale, "experiences")} className="home-explore-links__link">
              {experiencesLabel}
            </Link>
            <span className="home-explore-links__sep" aria-hidden="true">
              ·
            </span>
            <Link href={localePath(locale, "journal")} className="home-explore-links__link">
              {journalLabel}
            </Link>
          </nav>
          <h2 id="home-editorial-title" className="flat-section__title">
            {content.title}
          </h2>
          <p className="flat-section__intro flat-section__intro--lead">{content.intro}</p>
        </div>

        <ul className="home-editorial__grid">
          {content.blocks.map((block, i) => (
            <li key={block.title} className="home-editorial__item">
              <figure className="home-editorial__figure">
                <div className="home-editorial__media">
                  <Image
                    src={images[i]}
                    alt={block.imageAlt}
                    width={640}
                    height={480}
                    className="home-editorial__img"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={i === 0}
                  />
                </div>
                <figcaption className="home-editorial__caption">
                  <h3 className="home-editorial__story-title">{block.title}</h3>
                  <p className="home-editorial__story-text">{block.body}</p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <p className="home-editorial__cta">
          <Link href={galleryHref} className="home-editorial__link">
            {content.ctaLabel}
          </Link>
        </p>
      </div>
    </section>
  );
}
