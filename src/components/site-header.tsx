"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages";
import { LangSwitch } from "./lang-switch";

type Props = {
  locale: Locale;
  t: Messages;
};

const SECTION_IDS = ["top", "about", "gallery", "film", "nearby", "contact"] as const;
const MOBILE_MENU_QUERY = "(max-width: 879px)";

export function SiteHeader({ locale, t }: Props) {
  const base = `/${locale}`;
  const [solid, setSolid] = useState(false);
  const [active, setActive] = useState<(typeof SECTION_IDS)[number]>("top");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  const toneClass = solid || menuOpen ? "site-header--solid" : "site-header--over-hero";

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("top");
      const h = hero?.offsetHeight ?? window.innerHeight;
      setSolid(window.scrollY > h - 56);
      if (window.scrollY < h * 0.32) {
        setActive("top");
      }
    };

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const id = visible[0]?.target.id;
        if (id && SECTION_IDS.includes(id as (typeof SECTION_IDS)[number])) {
          setActive(id as (typeof SECTION_IDS)[number]);
        }
      },
      { root: null, rootMargin: "-38% 0px -42% 0px", threshold: [0, 0.15, 0.35, 0.55, 0.75, 1] },
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      obs.disconnect();
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
    { id: "top" as const, href: `${base}#top`, label: t.nav.home },
    { id: "about" as const, href: `${base}#about`, label: t.nav.about },
    { id: "gallery" as const, href: `${base}#gallery`, label: t.nav.gallery },
    { id: "film" as const, href: `${base}#film`, label: t.nav.film },
    { id: "nearby" as const, href: `${base}#nearby`, label: t.nav.nearby },
    { id: "contact" as const, href: `${base}#contact`, label: t.nav.contact },
  ];

  function closeMenu() {
    setMenuOpen(false);
    menuBtnRef.current?.focus();
  }

  return (
    <header className={`site-header ${toneClass}`}>
      <div className="site-header__inner">
        <Link href={`${base}#top`} className="site-header__brand">
          {t.meta.siteName}
        </Link>

        <div className="site-header__desktop">
          <nav className="site-header__nav" aria-label="Main">
            <ul>
              {nav.map(({ id, href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`site-header__nav-link${active === id ? " site-header__nav-link--active" : ""}`}
                  >
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
              {nav.map(({ id, href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`site-header__mobile-nav-link${active === id ? " site-header__mobile-nav-link--active" : ""}`}
                    onClick={closeMenu}
                  >
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
