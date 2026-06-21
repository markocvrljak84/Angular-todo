import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages";
import { BOOKING_URL, SITE_CONTACT, telHref } from "@/config/site-contact";
import { localePath } from "@/config/site-routes";

type Props = {
  t: Messages;
  locale: Locale;
};

export function ContactStrip({ t, locale }: Props) {
  return (
    <aside className="contact-strip" aria-label={t.footer.contactTitle}>
      <div className="contact-strip__inner flat-wrap">
        <p className="contact-strip__brand">{SITE_CONTACT.businessName}</p>
        <p className="contact-strip__line">{SITE_CONTACT.address}</p>
        <p className="contact-strip__line">
          <a href={`mailto:${SITE_CONTACT.email}`}>{SITE_CONTACT.email}</a>
          {" · "}
          <a href={telHref()}>{SITE_CONTACT.phone}</a>
        </p>
        <p className="contact-strip__actions">
          <a
            href={BOOKING_URL}
            className="contact-strip__btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.header.bookCta}
          </a>
          <Link href={localePath(locale, "contact")} className="contact-strip__link">
            {t.nav.contact}
          </Link>
        </p>
      </div>
    </aside>
  );
}
