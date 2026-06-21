import { BOOKING_URL } from "@/config/site-contact";
import type { HomeContent } from "@/i18n/home-content";

type Props = {
  content: HomeContent["finalCta"];
};

export function FinalCtaSection({ content }: Props) {
  return (
    <section className="final-cta flat-section flat-section--tint" aria-label={content.headline}>
      <div className="flat-wrap final-cta__inner">
        <p className="final-cta__headline">{content.headline}</p>
        <a
          href={BOOKING_URL}
          className="final-cta__btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          {content.btnLabel}
        </a>
      </div>
    </section>
  );
}
