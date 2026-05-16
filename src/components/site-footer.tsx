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
    { href: `${base}#film`, label: t.nav.film },
    { href: `${base}#nearby`, label: t.nav.nearby },
    { href: `${base}#contact`, label: t.nav.contact },
  ];

  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div>
          <strong className="site-footer__brand">{SITE_CONTACT.businessName}</strong>
          <p>{t.footer.tagline}</p>
          <p className="site-footer__location">{t.footer.locationLine}</p>
        </div>
        <div>
          <h2>{t.footer.exploreTitle}</h2>
          <ul className="site-footer__links">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="site-footer__contact">
          <h2>{t.footer.contactTitle}</h2>
          <p>{SITE_CONTACT.businessName}</p>
          <p>
            <a href={telHref()}>{SITE_CONTACT.phone}</a>
          </p>
          <p>
            <a href={`mailto:${SITE_CONTACT.email}`}>{SITE_CONTACT.email}</a>
          </p>
        </div>
      </div>
      <p className="site-footer__rights">{t.footer.rights}</p>
    </footer>
  );
}
