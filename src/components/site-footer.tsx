import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages";
import { SocialLinks } from "@/components/social-links";
import { SITE_CONTACT, telHref } from "@/config/site-contact";
import {
  FOOTER_NAV_PAGES,
  localePath,
  SITE_PAGE_NAV_KEYS,
} from "@/config/site-routes";

export function SiteFooter({ t, locale }: { t: Messages; locale: Locale }) {
  const links = FOOTER_NAV_PAGES.map((page) => ({
    href: localePath(locale, page),
    label: t.nav[SITE_PAGE_NAV_KEYS[page]],
  }));

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__grid">
          <div className="site-footer__brand-col">
            <strong className="site-footer__brand">{SITE_CONTACT.brandMark}</strong>
            <p className="site-footer__tagline">{t.footer.tagline}</p>
            <p className="site-footer__location">{t.footer.locationLine}</p>
            <SocialLinks
              ariaLabel={t.footer.socialTitle}
              className="site-footer__social"
            />
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
