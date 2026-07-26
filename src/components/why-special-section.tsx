import Image from "next/image";
import Link from "next/link";
import type { HomeContent } from "@/i18n/home-content";

type Props = {
  content: HomeContent["whySpecial"];
  images: readonly [string, string, string];
  hrefs: readonly [string, string, string];
};

export function WhySpecialSection({ content, images, hrefs }: Props) {
  return (
    <section className="flat-section flat-section--tint" aria-labelledby="why-special-title">
      <div className="flat-wrap">
        <h2 id="why-special-title" className="flat-section__title">
          {content.title}
        </h2>
        <p className="flat-section__intro">{content.intro}</p>
        <ul className="why-special__grid">
          {content.cards.map((card, i) => (
            <li key={card.title} className="why-special__card">
              <div className="why-special__media">
                <Image
                  src={images[i]}
                  alt={card.imageAlt}
                  width={960}
                  height={720}
                  className="why-special__img"
                  sizes="(max-width: 768px) 100vw, 34vw"
                />
              </div>
              <div className="why-special__body">
                <h3 className="why-special__card-title">{card.title}</h3>
                <p className="why-special__card-body">{card.body}</p>
                <p className="why-special__cta">
                  <Link href={hrefs[i]} className="why-special__btn">
                    {card.ctaLabel}
                  </Link>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
