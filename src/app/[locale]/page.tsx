import Image from "next/image";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { HeroFullscreenCarousel } from "@/components/hero-fullscreen-carousel";
import { ScrollTopArrow } from "@/components/scroll-top-arrow";
import { GalleryGridLightbox } from "@/components/gallery-grid-lightbox";
import { VideoViewportSection } from "@/components/video-viewport-section";

export const dynamic = "force-static";

/** Hero carousel — images in /public/img/main-carousel */
const MAIN_CAROUSEL_IMAGES = [
  "571275863_122102378865084437_4800487342368999167_n.jpg",
  "578265540_122104807869084437_5111680495021054907_n.jpg",
  "581480514_122107015833084437_6966149935686680015_n.jpg",
  "585009655_122107017075084437_1671659401079838438_n.jpg",
] as const;

const GALLERY_SEEDS = [
  "starspeak-gal-1",
  "starspeak-gal-2",
  "starspeak-gal-3",
  "starspeak-gal-4",
  "starspeak-gal-5",
  "starspeak-gal-6",
  "starspeak-gal-7",
  "starspeak-gal-8",
] as const;

const ITINERARY_SEEDS = [
  "starspeak-itin-1",
  "starspeak-itin-2",
  "starspeak-itin-3",
] as const;

const FILM_VIDEO =
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" as const;
const FILM_POSTER_SEED = "starspeak-film-poster" as const;

/** Geocoding query for Google Maps (embed + external link) */
const CONTACT_MAP_QUERY = "Došen Dabar 1, Croatia";

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale: l } = await params;
  if (!isLocale(l)) notFound();
  const locale = l as Locale;
  const t = getMessages(locale);

  const mapHl = locale === "hr" ? "hr" : locale === "de" ? "de" : "en";
  const googleMapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(CONTACT_MAP_QUERY)}&hl=${mapHl}&z=16&output=embed`;
  const googleMapOpenHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_MAP_QUERY)}`;

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
      />

      <section
        id="things"
        className="things-intro"
        aria-labelledby="things-title"
      >
        <p className="things-intro__headline">
          <span className="things-intro__caps">{t.home.thingsHeadBefore}</span>{" "}
          <span className="things-intro__accent">
            {t.home.thingsHeadAccent}
          </span>{" "}
          <span className="things-intro__caps">{t.home.thingsHeadAfter}</span>
        </p>
      </section>

      <section
        id="itinerary"
        className="itinerary"
        aria-labelledby="itinerary-title"
      >
        <h2 id="itinerary-title" className="itinerary__title">
          {t.home.itineraryTitle}
        </h2>
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
            <span className="itinerary__ptr itinerary__ptr--n" aria-hidden />
          </div>

          <div className="itinerary__cell itinerary__cell--txt itinerary__cell--txt-3">
            <p className="itinerary__label">{t.home.itineraryDays[2].label}</p>
            <h3 className="itinerary__headline">
              {t.home.itineraryDays[2].headline}
            </h3>
            <p className="itinerary__body">{t.home.itineraryDays[2].body}</p>
          </div>
        </div>
      </section>

      <VideoViewportSection
        videoSrc={FILM_VIDEO}
        posterSrc={`https://picsum.photos/seed/${FILM_POSTER_SEED}/1920/1080`}
        title={t.home.filmTitle}
        hint={t.home.filmHint}
        unmuteLabel={t.home.filmUnmute}
      />

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
            slides={GALLERY_SEEDS.map((seed, i) => {
              const meta = t.gallery.images[i];
              return {
                srcThumb: `https://picsum.photos/seed/${seed}/800/800`,
                srcLarge: `https://picsum.photos/seed/${seed}/1600/1600`,
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
            <aside className="flat-about__side">
              <h3 className="flat-about__side-title">{t.about.asideTitle}</h3>
              <p>{t.about.asideBody}</p>
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
        id="contact"
        className="flat-section flat-section--dark"
        aria-labelledby="contact-title"
      >
        <div className="flat-wrap flat-wrap--narrow">
          <h2
            id="contact-title"
            className="flat-section__title flat-section__title--on-dark"
          >
            {t.contact.title}
          </h2>
          <p className="flat-section__intro flat-section__intro--on-dark">
            {t.contact.intro}
          </p>

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
