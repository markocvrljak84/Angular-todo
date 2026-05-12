import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages";

export function SiteFooter({ t, locale }: { t: Messages; locale: Locale }) {
  const base = `/${locale}`;
  const links = [
    { href: `${base}#top`, label: t.nav.home },
    { href: `${base}#things`, label: t.nav.things },
    { href: `${base}#gallery`, label: t.nav.gallery },
    { href: `${base}#about`, label: t.nav.about },
    { href: `${base}#contact`, label: t.nav.contact },
  ];

  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div>
          <strong className="site-footer__brand">{t.meta.siteName}</strong>
          <p>{t.footer.tagline}</p>
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
          <p>
            <a href={`tel:${t.contact.phoneMock.replace(/\s/g, "")}`}>{t.contact.phoneMock}</a>
          </p>
          <p>
            <a href={`mailto:${t.contact.emailMock}`}>{t.contact.emailMock}</a>
          </p>
        </div>
      </div>
      <p className="site-footer__rights">{t.footer.rights}</p>
    </footer>
  );
}
