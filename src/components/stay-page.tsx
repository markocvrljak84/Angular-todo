import Image from "next/image";
import { BOOKING_URL } from "@/config/site-contact";
import {
  ACCOMMODATION_PAGE_IMAGES,
  type AccommodationImageSlot,
} from "@/config/site-images";
import type { AccommodationPageContent } from "@/i18n/accommodation-content";
import type { BookingReviewsContent } from "@/i18n/booking-reviews";
import type { GoodToKnowContent } from "@/i18n/good-to-know";
import { BookingReviewsSection } from "@/components/booking-reviews-section";
import { FaqSection } from "@/components/faq-section";

type Props = {
  content: AccommodationPageContent;
  goodToKnow: GoodToKnowContent;
  bookingReviews: BookingReviewsContent;
};

function StayPhoto({
  slot,
  alt,
  className,
  priority,
  sizes,
}: {
  slot: AccommodationImageSlot;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const src = ACCOMMODATION_PAGE_IMAGES[slot];

  if (!src) {
    return (
      <div
        className={`stay-photo stay-photo--placeholder${className ? ` ${className}` : ""}`}
        data-image-slot={slot}
        role="img"
        aria-label={alt}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      className={`stay-photo__img${className ? ` ${className}` : ""}`}
      sizes={sizes ?? "100vw"}
    />
  );
}

export function StayPage({ content, goodToKnow, bookingReviews }: Props) {
  return (
    <>
      <section className="home-welcome home-welcome--page stay-hero-welcome" aria-labelledby="stay-hero-title">
        <div className="home-welcome__inner">
          <div className="home-welcome__copy home-welcome__copy--page">
            <h1 id="stay-hero-title" className="home-welcome__title">
              {content.hero.title}
            </h1>
            <p className="home-welcome__intro">{content.hero.intro}</p>
          </div>
          <div className="home-welcome__rule" aria-hidden="true" />
          <div className="home-welcome__visual">
            <Image
              className="home-welcome__art"
              src="/img/illustrations/header-raspberry.webp"
              alt="Etching-style illustration of a forest raspberry"
              width={800}
              height={800}
              sizes="(min-width: 768px) 15.5rem, 13.5rem"
              priority
            />
          </div>
        </div>
      </section>

      <section className="flat-section stay-house" aria-labelledby="stay-house-title">
        <div className="flat-wrap stay-house__grid">
          <div className="stay-house__media">
            <StayPhoto slot="theHouse" alt={content.theHouse.imageAlt} sizes="(max-width: 900px) 100vw, 55vw" />
          </div>
          <div className="stay-house__copy">
            <h2 id="stay-house-title" className="flat-section__title flat-section__title--start">
              {content.theHouse.title}
            </h2>
            {content.theHouse.paragraphs.map((paragraph) => (
              <p key={paragraph} className="stay-body">
                {paragraph}
              </p>
            ))}
            <p className="stay-house__features-label">{content.theHouse.featuresLabel}</p>
            <ul className="stay-checklist">
              {content.theHouse.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="flat-section flat-section--tint stay-spaces" aria-labelledby="stay-spaces-title">
        <div className="flat-wrap">
          <div className="stay-section-head">
            <p className="stay-eyebrow">{content.spaces.eyebrow}</p>
            <h2 id="stay-spaces-title" className="flat-section__title flat-section__title--start">
              {content.spaces.title}
            </h2>
          </div>
          <ul className="stay-spaces__grid">
            {content.spaces.items.map((space) => (
              <li key={space.title}>
                <article className="stay-spaces__card">
                  <h3>{space.title}</h3>
                  <p>{space.body}</p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="flat-section stay-outdoors" aria-labelledby="stay-outdoors-title">
        <div className="flat-wrap stay-outdoors__grid">
          <div className="stay-outdoors__media">
            <StayPhoto slot="outdoors" alt={content.outdoors.imageAlt} sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
          <div className="stay-outdoors__copy">
            <h2 id="stay-outdoors-title" className="flat-section__title flat-section__title--start">
              {content.outdoors.title}
            </h2>
            <p className="stay-lead">{content.outdoors.lead}</p>
            <p className="stay-body">{content.outdoors.body}</p>
            <p className="stay-outdoors__features-label">{content.outdoors.featuresLabel}</p>
            <ul className="stay-inline-list">
              {content.outdoors.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="flat-section flat-section--tint stay-included" aria-labelledby="stay-included-title">
        <div className="flat-wrap stay-included__grid">
          <div>
            <p className="stay-eyebrow">{content.included.eyebrow}</p>
            <h2 id="stay-included-title" className="flat-section__title flat-section__title--start">
              {content.included.title}
            </h2>
          </div>
          <ul className="stay-checklist">
            {content.included.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="good-to-know"
        className="flat-section stay-good-to-know"
        aria-labelledby="stay-good-to-know-title"
      >
        <div className="flat-wrap flat-wrap--narrow">
          <div className="stay-section-head stay-section-head--center">
            <h2 id="stay-good-to-know-title" className="flat-section__title">
              {goodToKnow.title}
            </h2>
          </div>
          <FaqSection content={goodToKnow} compact embedded />
        </div>
      </section>

      <section className="flat-section flat-section--tint stay-rules" aria-labelledby="stay-rules-title">
        <div className="flat-wrap stay-rules__inner">
          <p className="stay-eyebrow">{content.houseRules.eyebrow}</p>
          <h2 id="stay-rules-title" className="flat-section__title flat-section__title--start">
            {content.houseRules.title}
          </h2>
          <ul className="stay-rules__list">
            {content.houseRules.items.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="flat-section stay-closing" aria-labelledby="stay-closing-title">
        <div className="flat-wrap stay-closing__layout">
          <div className="stay-closing__copy">
            <p className="stay-eyebrow">{content.closing.eyebrow}</p>
            <h2 id="stay-closing-title" className="flat-section__title flat-section__title--start">
              {content.closing.title}
            </h2>
            <p className="stay-closing__body">{content.closing.body}</p>
          </div>
          <div className="stay-closing__motif" aria-hidden="true">
            <Image
              className="stay-closing__motif-img"
              src="/img/illustrations/header-mountain-fir.webp"
              alt=""
              width={800}
              height={800}
              sizes="(min-width: 900px) 15rem, 12rem"
            />
          </div>
        </div>
      </section>

      <section className="flat-section flat-section--tint" aria-labelledby="stay-seo-faq-title">
        <div className="flat-wrap flat-wrap--narrow">
          <h2 id="stay-seo-faq-title" className="flat-section__title">
            {content.seoFaq.title}
          </h2>
          <div className="faq__accordion">
            {content.seoFaq.items.map((faq, index) => (
              <details
                key={faq.question}
                className="faq__item"
                {...(index === 0 ? { open: true } : {})}
              >
                <summary className="faq__summary">{faq.question}</summary>
                <div className="faq__panel">
                  <p className="faq__text">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <BookingReviewsSection content={bookingReviews} tint topRule />

      <section className="final-cta flat-section" aria-label={content.cta.headline}>
        <div className="flat-wrap final-cta__inner">
          <div className="final-cta__copy">
            <p className="final-cta__headline">{content.cta.headline}</p>
            <p className="final-cta__intro">{content.cta.intro}</p>
          </div>
          <a
            href={BOOKING_URL}
            className="final-cta__btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            {content.cta.btnLabel}
          </a>
        </div>
      </section>
    </>
  );
}
