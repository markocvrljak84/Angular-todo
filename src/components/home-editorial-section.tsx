import Image from "next/image";
import Link from "next/link";
import type { HomeContent } from "@/i18n/home-content";

type Props = {
  content: HomeContent["editorial"];
  images: readonly [string, string, string];
  galleryHref: string;
};

export function HomeEditorialSection({ content, images, galleryHref }: Props) {
  return (
    <section className="home-editorial flat-section" aria-labelledby="home-editorial-title">
      <div className="flat-wrap">
        <div className="home-editorial__head">
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
                    height={800}
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
