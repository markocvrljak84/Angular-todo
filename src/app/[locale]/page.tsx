import Image from "next/image";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { HeroFullscreenCarousel } from "@/components/hero-fullscreen-carousel";
import { GalleryGridLightbox } from "@/components/gallery-grid-lightbox";
import { FilmYoutubeSection } from "@/components/film-youtube-section";
import { getGoogleMapsUrls } from "@/config/contact-map";
import { ABOUT_US_IMAGE, GALLERY_FILES } from "@/config/site-images";

export const dynamic = "force-static";

/** Hero carousel — images in /public/img/main-carousel (first = initial slide) */
const MAIN_CAROUSEL_IMAGES = [
  "581480514_122107015833084437_6966149935686680015_n.jpg",
  "571275863_122102378865084437_4800487342368999167_n.jpg",
  "578265540_122104807869084437_5111680495021054907_n.jpg",
  "585009655_122107017075084437_1671659401079838438_n.jpg",
] as const;

const ITINERARY_SEEDS = [
  "starspeak-itin-1",
  "starspeak-itin-2",
  "starspeak-itin-3",
  "starspeak-itin-premuzic",
  "starspeak-itin-ridge",
] as const;

/** YouTube video for #film section */
const FILM_YOUTUBE_ID = "QNfDBgtFSdc" as const;

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale: l } = await params;
  if (!isLocale(l)) notFound();
  const locale = l as Locale;
  const t = getMessages(locale);

  if (t.gallery.images.length !== GALLERY_FILES.length) {
    throw new Error(
      "gallery.images length must match GALLERY_FILES in src/config/site-images.ts (and Array.from length in messages.ts).",
    );
  }

  const mapHl =
    locale === "hr" ? "hr" : locale === "de" ? "de" : locale === "fr" ? "fr" : locale === "it" ? "it" : "en";
  const { embedSrc: googleMapEmbedSrc, openHref: googleMapOpenHref } = getGoogleMapsUrls(mapHl);

  const heroSlides = MAIN_CAROUSEL_IMAGES.map((file, i) => ({
    src: `/img/main-carousel/${file}`,
    alt: t.home.heroSlideAlts[i] ?? t.home.heroImageAlt,
  }));

  return (
    <>
      <HeroFullscreenCarousel
        slides={heroSlides}
        kicker={t.home.heroBadge}
        scriptTitle={t.home.heroScriptTitle}
        subscribeLine={t.home.heroSubscribeLine}
        emailPlaceholder={t.home.heroEmailPlaceholder}
        subscribeButton={t.home.heroSubscribeButton}
        subscribeNote={t.home.heroSubscribeNote}
        subscribeThanks={t.home.heroSubscribeThanks}
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
          <p className="flat-section__intro">{t.about.lead}</p>

          <div className="flat-about">
            <div className="flat-about__main">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <h3 className="flat-about__sub">{t.about.highlightsTitle}</h3>
              <ul className="flat-list">
                {t.about.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <aside className="flat-about__side" aria-label={t.about.sideImageAlt}>
              <div className="flat-about__side-media">
                <Image
                  src={`/img/about-us/${ABOUT_US_IMAGE}`}
                  alt={t.about.sideImageAlt}
                  fill
                  className="flat-about__side-img"
                  sizes="(max-width: 799px) 100vw, 50vw"
                />
              </div>
            </aside>
          </div>

          <div className="flat-tiles">
            {t.home.features.map((f) => (
              <div key={f.title} className="flat-tile">
                <h3 className="flat-tile__h">{f.title}</h3>
                <p>{f.body}</p>
              </div>
            ))}
          </div>

          <blockquote className="flat-quote">{t.home.quote}</blockquote>
        </div>
      </section>

      <section
        id="gallery"
        className="flat-section"
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

      <FilmYoutubeSection
        videoId={FILM_YOUTUBE_ID}
        title={t.home.filmTitle}
        caption={t.home.filmCaption}
      />

      <section
        id="nearby"
        className="itinerary"
        aria-labelledby="nearby-title"
      >
        <header className="itinerary__header">
          <h2 id="nearby-title" className="itinerary__title">
            {t.home.nearbyTitle}
          </h2>
          <p className="itinerary__lead">{t.home.nearbyLead}</p>
        </header>
        <div className="itinerary__grid">
          <div className="itinerary__cell itinerary__cell--img itinerary__cell--img-1">
            <div className="itinerary__img-wrap">
              <Image
                src={`https://picsum.photos/seed/${ITINERARY_SEEDS[0]}/1000/1000`}
                alt={t.home.itineraryImageAlts[0] ?? ""}
                fill
                className="itinerary__img"
                sizes="(max-width: 959px) 100vw, 33vw"
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
              <Image
                src={`https://picsum.photos/seed/${ITINERARY_SEEDS[1]}/1000/1000`}
                alt={t.home.itineraryImageAlts[1] ?? ""}
                fill
                className="itinerary__img"
                sizes="(max-width: 959px) 100vw, 33vw"
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
              <Image
                src={`https://picsum.photos/seed/${ITINERARY_SEEDS[2]}/1000/1000`}
                alt={t.home.itineraryImageAlts[2] ?? ""}
                fill
                className="itinerary__img"
                sizes="(max-width: 959px) 100vw, 33vw"
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
              <Image
                src={`https://picsum.photos/seed/${ITINERARY_SEEDS[3]}/1000/1000`}
                alt={t.home.itineraryImageAlts[3] ?? ""}
                fill
                className="itinerary__img"
                sizes="(max-width: 959px) 100vw, 33vw"
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
              <Image
                src={`https://picsum.photos/seed/${ITINERARY_SEEDS[4]}/1000/1000`}
                alt={t.home.itineraryImageAlts[4] ?? ""}
                fill
                className="itinerary__img"
                sizes="(max-width: 959px) 100vw, 33vw"
              />
            </div>
            <span className="itinerary__ptr itinerary__ptr--w" aria-hidden />
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="flat-section flat-section--tint"
        aria-labelledby="contact-title"
      >
        <div className="flat-wrap flat-wrap--narrow">
          <h2 id="contact-title" className="flat-section__title">
            {t.contact.title}
          </h2>
          <p className="flat-section__intro">{t.contact.intro}</p>

          <div className="flat-contact">
            <div className="flat-contact__info">
              <h3 className="flat-contact__h">{t.contact.detailsHeading}</h3>
              <dl className="flat-dl">
                <dt>{t.contact.nameLabel}</dt>
                <dd>{t.contact.contactName}</dd>
                <dt>{t.contact.phoneLabel}</dt>
                <dd>
                  <a href={`tel:${t.contact.phoneMock.replace(/\s/g, "")}`}>
                    {t.contact.phoneMock}
                  </a>
                </dd>
                <dt>{t.contact.emailLabel}</dt>
                <dd>
                  <a href={`mailto:${t.contact.emailMock}`}>
                    {t.contact.emailMock}
                  </a>
                </dd>
                <dt>{t.contact.addressLabel}</dt>
                <dd>{t.contact.addressMock}</dd>
              </dl>
            </div>
          </div>

          <div className="flat-contact-map" aria-labelledby="contact-map-heading">
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
    </>
  );
}
