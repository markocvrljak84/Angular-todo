import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages";
import { LangSwitch } from "./lang-switch";

type Props = {
  locale: Locale;
  t: Messages;
};

export function SiteHeader({ locale, t }: Props) {
  const base = `/${locale}`;
  const links = [
    { href: base, label: t.nav.home },
    { href: `${base}/about`, label: t.nav.about },
    { href: `${base}/gallery`, label: t.nav.gallery },
    { href: `${base}/contact`, label: t.nav.contact },
  ];

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href={base} className="site-header__brand">
          {t.meta.siteName}
        </Link>
        <nav className="site-header__nav" aria-label="Main">
          <ul>
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <LangSwitch currentLocale={locale} aria={t.langSwitcher.aria} />
      </div>
    </header>
  );
}
