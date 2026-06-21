import Image from "next/image";
import Link from "next/link";
import type { HomeContent } from "@/i18n/home-content";

type Props = {
  content: HomeContent["accommodation"];
  imageSrc: string;
  accommodationHref: string;
};

export function AccommodationBriefSection({ content, imageSrc, accommodationHref }: Props) {
  return (
    <section className="flat-section flat-section--tint" aria-labelledby="accommodation-brief-title">
      <div className="flat-wrap accommodation-brief">
        <div className="accommodation-brief__media">
          <Image
            src={imageSrc}
            alt={content.imageAlt}
            width={1200}
            height={800}
            className="accommodation-brief__img"
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
        <div className="accommodation-brief__body">
          <h2 id="accommodation-brief-title" className="accommodation-brief__title">
            {content.title}
          </h2>
          <p className="accommodation-brief__lead">{content.lead}</p>
          <ul className="accommodation-brief__list">
            {content.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="accommodation-brief__cta">
            <Link href={accommodationHref} className="accommodation-brief__link">
              {content.ctaLabel}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
