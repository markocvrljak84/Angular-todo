import Link from "next/link";
import type { HomeContent } from "@/i18n/home-content";

type Props = {
  content: HomeContent["accommodation"];
  accommodationHref: string;
};

export function AccommodationBriefSection({ content, accommodationHref }: Props) {
  return (
    <section className="flat-section flat-section--tint" aria-labelledby="accommodation-brief-title">
      <div className="flat-wrap">
        <h2 id="accommodation-brief-title" className="flat-section__title">
          {content.title}
        </h2>
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
    </section>
  );
}
