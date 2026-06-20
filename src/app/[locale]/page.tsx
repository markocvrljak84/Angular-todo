import Image from "next/image";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { BookCta } from "@/components/book-cta";
import { GoodToKnowSection } from "@/components/good-to-know-section";
import { HikingRoutesSection } from "@/components/hiking-routes-section";
import { getHikingRoutes } from "@/i18n/hiking-routes";
import { getGoodToKnow } from "@/i18n/good-to-know";
import { getFacilityCategories } from "@/i18n/facility-categories";
import { getMessages } from "@/i18n/messages";
import { FacilitiesGrid } from "@/components/facilities-grid";
import { HeroFullscreenCarousel } from "@/components/hero-fullscreen-carousel";
import { GalleryGridLightbox } from "@/components/gallery-grid-lightbox";
import { FilmYoutubeSection } from "@/components/film-youtube-section";
import { ItineraryImage } from "@/components/itinerary-image";
import { getGoogleMapsUrls } from "@/config/contact-map";
import { BOOKING_URL, SITE_CONTACT, telHref } from "@/config/site-contact";
import {
  ABOUT_US_IMAGE,
  GALLERY_FILES,
  NEARBY_GRID_IMAGE_SRCS,
} from "@/config/site-images";

export const dynamic = "force-static";

/** Hero carousel — images in /public/img/main-carousel (first = initial slide) */
const MAIN_CAROUSEL_IMAGES = [
  "581480514_122107015833084437_6966149935686680015_n.jpg",
  "571275863_122102378865084437_4800487342368999167_n.jpg",
  "578265540_122104807869084437_5111680495021054907_n.jpg",
  "585009655_122107017075084437_1671659401079838438_n.jpg",
] as const;

/** YouTube video for #film section */
const FILM_YOUTUBE_ID = "QNfDBgtFSdc" as const;

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale: l } = await params;
  if (!isLocale(l)) notFound();
  const locale = l as Locale;
  const t = getMessages(locale);
  const facilities = getFacilityCategories(locale);

  if (t.gallery.images.length !== GALLERY_FILES.length) {
    throw new Error(
      "gallery.images length must match GALLERY_FILES in src/config/site-images.ts (and Array.from length in messages.ts)."
    );
  }

  if (t.home.itineraryImageAlts.length !== NEARBY_GRID_IMAGE_SRCS.length) {
    throw new Error(
      "home.itineraryImageAlts length must match NEARBY_GRID_IMAGE_SRCS in src/config/site-images.ts."
    );
  }

  const mapHl =
    locale === "hr"
      ? "hr"
      : locale === "de"
      ? "de"
      : locale === "fr"
      ? "fr"
      : locale === "it"
      ? "it"
      : "en";
  const { embedSrc: googleMapEmbedSrc, openHref: googleMapOpenHref } =
    getGoogleMapsUrls(mapHl);

  const heroSlides = MAIN_CAROUSEL_IMAGES.map((file, i) => ({
    src: `/img/main-carousel/${file}`,
    alt: t.home.heroSlideAlts[i] ?? t.home.heroImageAlt,
  }));

  return (
    <>
      <HeroFullscreenCarousel
        slides={heroSlides}
        kicker={t.home.heroBadge}
        scriptTitle={SITE_CONTACT.heroTitle}
        centerLine={t.home.heroCenterLine}
        bookCtaLabel={t.header.bookCta}
        carouselPrevLabel={t.home.heroCarouselPrev}
        carouselNextLabel={t.home.heroCarouselNext}
      />

      <section
        id="about"
        className="flat-section flat-section--tint"
        aria-labelledby="about-title"
      >
        <div className="flat-wrap">
          <h2 id="about-title" className="flat-section__title">
            {t.about.title}
          </h2>
          <p className="flat-section__intro flat-section__intro--lead">
            {t.about.lead}
          </p>

          <div className="flat-about">
            <div className="flat-about__main">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>
            <aside
              className="flat-about__side"
              aria-label={t.about.sideImageAlt}
            >
              <div className="flat-about__side-media">
                <Image
                  src={`/img/about-us/${ABOUT_US_IMAGE}`}
                  alt={t.about.sideImageAlt}
                  fill
                  className="flat-about__side-img"
                  sizes="(max-width: 799px) 100vw, 50vw"
                />
              </div>
              <p className="flat-about__hosts-note">{t.about.hostsNote}</p>
            </aside>
          </div>
        </div>
      </section>

      <BookCta
        variant="banner"
        label={t.header.bookCta}
        lead={t.cta.aboutLead}
      />

      <section
        id="facilities"
        className="flat-section"
        aria-labelledby="facilities-title"
      >
        <div className="flat-wrap">
          <FacilitiesGrid
            title={t.home.facilitiesTitle}
            categories={facilities}
          />
        </div>
      </section>

      <section
        id="gallery"
        className="flat-section flat-section--tint"
        aria-labelledby="gallery-title"
      >
        <div className="flat-wrap">
          <h2 id="gallery-title" className="flat-section__title">
            {t.gallery.title}
          </h2>
          <p className="flat-section__intro">{t.gallery.intro}</p>
          <GalleryGridLightbox
            slides={GALLERY_FILES.map((file, i) => {
              const meta = t.gallery.images[i];
              const base = `/img/gallery/${file}`;
              return {
                srcThumb: base,
                srcLarge: base,
                alt: meta?.alt ?? "",
                caption: meta?.caption ?? "",
              };
            })}
            labels={{
              close: t.gallery.lightboxClose,
              prev: t.gallery.lightboxPrev,
              next: t.gallery.lightboxNext,
              dialog: t.gallery.lightboxAria,
              openThumb: t.gallery.lightboxOpenThumb,
            }}
          />
        </div>
      </section>

      <BookCta
        variant="banner"
        label={t.header.bookCta}
        lead={t.cta.galleryLead}
      />

      <FilmYoutubeSection videoId={FILM_YOUTUBE_ID} />

      <GoodToKnowSection content={getGoodToKnow(locale)} />

      <BookCta
        variant="banner"
        label={t.header.bookCta}
        lead={t.cta.goodToKnowLead}
      />

      <HikingRoutesSection content={getHikingRoutes(locale)} />

      <BookCta
        variant="banner"
        label={t.header.bookCta}
        lead={t.cta.hikingLead}
      />

      <section id="nearby" className="itinerary" aria-labelledby="nearby-title">
        <header className="itinerary__header">
          <h2 id="nearby-title" className="itinerary__title">
            {t.home.nearbyTitle}
          </h2>
          <p className="itinerary__lead">{t.home.nearbyLead}</p>
        </header>
        <div className="itinerary__grid">
          <div className="itinerary__cell itinerary__cell--img itinerary__cell--img-1">
            <div className="itinerary__img-wrap">
              <ItineraryImage
                src={NEARBY_GRID_IMAGE_SRCS[0]}
                alt={t.home.itineraryImageAlts[0] ?? ""}
              />
            </div>
            <span className="itinerary__ptr itinerary__ptr--e" aria-hidden />
          </div>

          <div className="itinerary__cell itinerary__cell--txt itinerary__cell--txt-1">
            <p className="itinerary__label">{t.home.itineraryDays[0].label}</p>
            <h3 className="itinerary__headline">
              {t.home.itineraryDays[0].headline}
            </h3>
            <p className="itinerary__body">{t.home.itineraryDays[0].body}</p>
          </div>

          <div className="itinerary__cell itinerary__cell--img itinerary__cell--img-2">
            <div className="itinerary__img-wrap">
              <ItineraryImage
                src={NEARBY_GRID_IMAGE_SRCS[1]}
                alt={t.home.itineraryImageAlts[1] ?? ""}
              />
            </div>
            <span className="itinerary__ptr itinerary__ptr--s" aria-hidden />
          </div>

          <div className="itinerary__cell itinerary__cell--txt itinerary__cell--txt-2">
            <p className="itinerary__label">{t.home.itineraryDays[1].label}</p>
            <h3 className="itinerary__headline">
              {t.home.itineraryDays[1].headline}
            </h3>
            <p className="itinerary__body">{t.home.itineraryDays[1].body}</p>
          </div>

          <div className="itinerary__cell itinerary__cell--img itinerary__cell--img-3">
            <div className="itinerary__img-wrap">
              <ItineraryImage
                src={NEARBY_GRID_IMAGE_SRCS[2]}
                alt={t.home.itineraryImageAlts[2] ?? ""}
              />
            </div>
            <span className="itinerary__ptr itinerary__ptr--w" aria-hidden />
            <span className="itinerary__ptr itinerary__ptr--s" aria-hidden />
          </div>

          <div className="itinerary__cell itinerary__cell--txt itinerary__cell--txt-3">
            <p className="itinerary__label">{t.home.itineraryDays[2].label}</p>
            <h3 className="itinerary__headline">
              {t.home.itineraryDays[2].headline}
            </h3>
            <p className="itinerary__body">{t.home.itineraryDays[2].body}</p>
          </div>

          <div className="itinerary__cell itinerary__cell--img itinerary__cell--img-4">
            <div className="itinerary__img-wrap">
              <ItineraryImage
                src={NEARBY_GRID_IMAGE_SRCS[3]}
                alt={t.home.itineraryImageAlts[3] ?? ""}
              />
            </div>
            <span className="itinerary__ptr itinerary__ptr--e" aria-hidden />
          </div>

          <div className="itinerary__cell itinerary__cell--txt itinerary__cell--txt-4">
            <p className="itinerary__label">{t.home.itineraryDays[3].label}</p>
            <h3 className="itinerary__headline">
              {t.home.itineraryDays[3].headline}
            </h3>
            <p className="itinerary__body">{t.home.itineraryDays[3].body}</p>
          </div>

          <div className="itinerary__cell itinerary__cell--img itinerary__cell--img-5">
            <div className="itinerary__img-wrap">
              <ItineraryImage
                src={NEARBY_GRID_IMAGE_SRCS[4]}
                alt={t.home.itineraryImageAlts[4] ?? ""}
              />
            </div>
            <span className="itinerary__ptr itinerary__ptr--w" aria-hidden />
          </div>

          <div className="itinerary__cell itinerary__cell--img itinerary__cell--img-6">
            <div className="itinerary__img-wrap">
              <ItineraryImage
                src={NEARBY_GRID_IMAGE_SRCS[5]}
                alt={t.home.itineraryImageAlts[5] ?? ""}
              />
            </div>
          </div>

          <div className="itinerary__cell itinerary__cell--img itinerary__cell--img-7">
            <div className="itinerary__img-wrap">
              <ItineraryImage
                src={NEARBY_GRID_IMAGE_SRCS[6]}
                alt={t.home.itineraryImageAlts[6] ?? ""}
              />
            </div>
          </div>

          <div className="itinerary__cell itinerary__cell--img itinerary__cell--img-8">
            <div className="itinerary__img-wrap">
              <ItineraryImage
                src={NEARBY_GRID_IMAGE_SRCS[7]}
                alt={t.home.itineraryImageAlts[7] ?? ""}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="flat-section flat-section--tint"
        aria-labelledby="contact-title"
      >
        <div className="flat-wrap">
          <h2 id="contact-title" className="flat-section__title">
            {t.contact.title}
          </h2>
          <p className="flat-section__intro">
            {t.contact.introPrefix}
            <a
              href={BOOKING_URL}
              className="flat-section__intro-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.contact.introBookingLink}
            </a>
          </p>

          <div className="contact-card">
            <h3 className="contact-card__title">{t.contact.detailsHeading}</h3>
            <ul className="contact-card__list">
              <li className="contact-card__item">
                <span className="contact-card__label">
                  {t.contact.nameLabel}
                </span>
                <span className="contact-card__value">
                  {SITE_CONTACT.businessName}
                </span>
              </li>
              <li className="contact-card__item">
                <span className="contact-card__label">
                  {t.contact.addressLabel}
                </span>
                <span className="contact-card__value">
                  {SITE_CONTACT.address}
                </span>
              </li>
              <li className="contact-card__item">
                <span className="contact-card__label">
                  {t.contact.emailLabel}
                </span>
                <a
                  className="contact-card__value contact-card__link"
                  href={`mailto:${SITE_CONTACT.email}`}
                >
                  {SITE_CONTACT.email}
                </a>
              </li>
              <li className="contact-card__item">
                <span className="contact-card__label">
                  {t.contact.phoneLabel}
                </span>
                <a
                  className="contact-card__value contact-card__link"
                  href={telHref()}
                >
                  {SITE_CONTACT.phone}
                </a>
              </li>
              <li className="contact-card__item">
                <span className="contact-card__label">
                  {t.contact.bookingLabel}
                </span>
                <a
                  className="contact-card__value contact-card__link"
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.about.bookingLinkLabel}
                </a>
              </li>
            </ul>
          </div>

          <div
            className="flat-contact-map"
            aria-labelledby="contact-map-heading"
          >
            <h3 id="contact-map-heading" className="flat-contact-map__title">
              {t.contact.mapHeading}
            </h3>
            <div className="flat-contact-map__frame">
              <iframe
                title={t.contact.mapIframeTitle}
                src={googleMapEmbedSrc}
                className="flat-contact-map__iframe"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <a
              className="flat-contact-map__link"
              href={googleMapOpenHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.contact.mapOpenGoogle}
            </a>
          </div>
        </div>
      </section>

      <BookCta
        variant="banner"
        label={t.header.bookCta}
        lead={t.cta.contactLead}
      />
    </>
  );
}
