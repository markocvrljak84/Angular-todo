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

const MOBILE_MENU_QUERY = "(max-width: 1064px)";
const DESKTOP_QUERY = "(min-width: 1065px)";

type HeaderTone = "hero" | "glass" | "opaque";

function headerToneClass(tone: HeaderTone, menuOpen: boolean): string {
  if (menuOpen || tone === "opaque") return "site-header--opaque";
  if (tone === "glass") return "site-header--glass";
  return "site-header--over-hero";
}

export function SiteHeader({ locale, t }: Props) {
  const base = `/${locale}`;
  const [tone, setTone] = useState<HeaderTone>("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  const toneClass = headerToneClass(tone, menuOpen);

  useEffect(() => {
    const desktopMq = window.matchMedia(DESKTOP_QUERY);

    const onScroll = () => {
      const hero = document.getElementById("top");
      const about = document.getElementById("about");
      const headerH =
        parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 64;
      const y = window.scrollY;
      const aboutTop = (about?.offsetTop ?? Number.POSITIVE_INFINITY) - headerH;

      const carouselEl =
        hero?.querySelector<HTMLElement>(".hero-fs__media") ?? hero;
      const carouselRect = carouselEl?.getBoundingClientRect();
      const carouselInView =
        !!carouselRect &&
        carouselRect.bottom > headerH + 8 &&
        carouselRect.top < window.innerHeight * 0.92;

      if (carouselInView) {
        setTone("hero");
      } else if (y < aboutTop) {
        setTone("glass");
      } else {
        setTone("opaque");
      }
    };

    desktopMq.addEventListener("change", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      desktopMq.removeEventListener("change", onScroll);
      window.removeEventListener("scroll", onScroll);
    };
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
    { href: `${base}#good-to-know`, label: t.nav.goodToKnow },
    { href: `${base}#hiking`, label: t.nav.hiking },
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
          {SITE_CONTACT.brandMark}
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
        </div>
      </div>
    </header>
  );
}
