import type { Messages } from "@/i18n/messages";
import { ContactForm } from "@/components/contact-form";
import { getGoogleMapsUrls } from "@/config/contact-map";
import { BOOKING_URL, SITE_CONTACT, whatsappHref } from "@/config/site-contact";
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
      <div className="contact-editorial">
        <div className="contact-editorial__body">
          <h2 className="flat-section__title flat-section__title--start">
            {t.contact.detailsHeading}
          </h2>
          <p className="contact-editorial__lead">{t.contact.lead}</p>

          <p className="contact-editorial__line">
            {t.contact.emailLabel}:{" "}
            <a
              className="contact-editorial__link"
              href={`mailto:${SITE_CONTACT.email}`}
            >
              {SITE_CONTACT.email}
            </a>
          </p>

          <p className="contact-editorial__line">
            {t.contact.whatsappLabel}:{" "}
            <a
              className="contact-editorial__link"
              href={whatsappHref(SITE_CONTACT.phone)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {SITE_CONTACT.phone}
            </a>
          </p>

          <p className="contact-editorial__line">
            {t.contact.bookingLabel}:{" "}
            <a
              className="contact-editorial__link"
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.about.bookingLinkLabel}
            </a>
          </p>

          <p className="contact-editorial__line">
            {t.contact.addressLabel}: {SITE_CONTACT.address}
          </p>
        </div>

        <ContactForm
          locale={locale}
          labels={t.forms}
          contactForm={t.contactForm}
        />
      </div>

      <div className="flat-contact-map" aria-labelledby="contact-map-heading">
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
