import type { Messages } from "@/i18n/messages";
import { getGoogleMapsUrls } from "@/config/contact-map";
import { BOOKING_URL, SITE_CONTACT, telHref } from "@/config/site-contact";
import type { Locale } from "@/i18n/config";

type Props = {
  t: Messages;
  locale: Locale;
};

export function ContactSection({ t, locale }: Props) {
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

  return (
    <>
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
        <h2 className="contact-card__title">{t.contact.detailsHeading}</h2>
        <ul className="contact-card__list">
          <li className="contact-card__item">
            <span className="contact-card__label">{t.contact.nameLabel}</span>
            <span className="contact-card__value">
              {SITE_CONTACT.businessName}
            </span>
          </li>
          <li className="contact-card__item">
            <span className="contact-card__label">{t.contact.addressLabel}</span>
            <span className="contact-card__value">{SITE_CONTACT.address}</span>
          </li>
          <li className="contact-card__item">
            <span className="contact-card__label">{t.contact.emailLabel}</span>
            <a
              className="contact-card__value contact-card__link"
              href={`mailto:${SITE_CONTACT.email}`}
            >
              {SITE_CONTACT.email}
            </a>
          </li>
          <li className="contact-card__item">
            <span className="contact-card__label">{t.contact.phoneLabel}</span>
            <a className="contact-card__value contact-card__link" href={telHref()}>
              {SITE_CONTACT.phone}
            </a>
          </li>
          <li className="contact-card__item">
            <span className="contact-card__label">{t.contact.bookingLabel}</span>
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

      <div className="flat-contact-map" aria-labelledby="contact-map-heading">
        <h2 id="contact-map-heading" className="flat-contact-map__title">
          {t.contact.mapHeading}
        </h2>
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
    </>
  );
}
