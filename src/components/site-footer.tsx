import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages";
import { SITE_CONTACT, telHref } from "@/config/site-contact";

export function SiteFooter({ t, locale }: { t: Messages; locale: Locale }) {
  const base = `/${locale}`;
  const links = [
    { href: `${base}#top`, label: t.nav.home },
    { href: `${base}#about`, label: t.nav.about },
    { href: `${base}#gallery`, label: t.nav.gallery },
    { href: `${base}#hiking`, label: t.nav.hiking },
    { href: `${base}#nearby`, label: t.nav.nearby },
    { href: `${base}#contact`, label: t.nav.contact },
    { href: `${base}#good-to-know`, label: t.nav.goodToKnow },
  ];

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__grid">
          <div className="site-footer__brand-col">
            <strong className="site-footer__brand">{SITE_CONTACT.brandMark}</strong>
            <p className="site-footer__tagline">{t.footer.tagline}</p>
            <p className="site-footer__location">{t.footer.locationLine}</p>
          </div>
          <div className="site-footer__nav-col">
            <h2 className="site-footer__heading">{t.footer.exploreTitle}</h2>
            <ul className="site-footer__links">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="site-footer__contact-col">
            <h2 className="site-footer__heading">{t.footer.contactTitle}</h2>
            <address className="site-footer__contact">
              <p className="site-footer__contact-line site-footer__contact-line--name">
                {SITE_CONTACT.businessName}
              </p>
              <p className="site-footer__contact-line">{SITE_CONTACT.address}</p>
              <p className="site-footer__contact-line">
                <a href={`mailto:${SITE_CONTACT.email}`}>{SITE_CONTACT.email}</a>
              </p>
              <p className="site-footer__contact-line">
                <a href={telHref()}>{SITE_CONTACT.phone}</a>
              </p>
            </address>
          </div>
        </div>
        <p className="site-footer__rights">{t.footer.rights}</p>
      </div>
    </footer>
  );
}
