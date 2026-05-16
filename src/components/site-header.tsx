"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages";
import { SITE_CONTACT } from "@/config/site-contact";
import { LangSwitch } from "./lang-switch";

type Props = {
  locale: Locale;
  t: Messages;
};

const MOBILE_MENU_QUERY = "(max-width: 879px)";

export function SiteHeader({ locale, t }: Props) {
  const base = `/${locale}`;
  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  const toneClass = solid || menuOpen ? "site-header--solid" : "site-header--over-hero";

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("top");
      const h = hero?.offsetHeight ?? window.innerHeight;
      setSolid(window.scrollY > h - 56);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_MENU_QUERY);
    const onChange = () => {
      if (!mq.matches) setMenuOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const nav = [
    { href: `${base}#top`, label: t.nav.home },
    { href: `${base}#about`, label: t.nav.about },
    { href: `${base}#gallery`, label: t.nav.gallery },
    { href: `${base}#film`, label: t.nav.film },
    { href: `${base}#nearby`, label: t.nav.nearby },
    { href: `${base}#contact`, label: t.nav.contact },
  ];

  function closeMenu() {
    setMenuOpen(false);
    menuBtnRef.current?.focus();
  }

  return (
    <header className={`site-header ${toneClass}`}>
      <div className="site-header__inner">
        <Link href={`${base}#top`} className="site-header__brand">
          {SITE_CONTACT.businessName}
        </Link>

        <div className="site-header__desktop">
          <nav className="site-header__nav" aria-label="Main">
            <ul>
              {nav.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="site-header__nav-link">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link href={`${base}#contact`} className="site-header__cta">
            {t.header.bookCta}
          </Link>
        </div>

        <div className="site-header__tools">
          <button
            ref={menuBtnRef}
            type="button"
            className="site-header__menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="site-header-mobile-menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="site-header__menu-bars" aria-hidden="true" />
            <span className="sr-only">{menuOpen ? t.header.menuClose : t.header.menuOpen}</span>
          </button>
          <LangSwitch currentLocale={locale} aria={t.langSwitcher.aria} />
        </div>
      </div>

      <div
        id="site-header-mobile-menu"
        className={`site-header__mobile-menu${menuOpen ? " site-header__mobile-menu--open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className="site-header__mobile-menu-backdrop"
          tabIndex={menuOpen ? 0 : -1}
          aria-label={t.header.menuClose}
          onClick={closeMenu}
        />
        <div className="site-header__mobile-menu-panel">
          <nav className="site-header__mobile-nav" aria-label="Main">
            <ul>
              {nav.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="site-header__mobile-nav-link" onClick={closeMenu}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link href={`${base}#contact`} className="site-header__mobile-cta" onClick={closeMenu}>
            {t.header.bookCta}
          </Link>
        </div>
      </div>
    </header>
  );
}
