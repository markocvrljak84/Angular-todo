"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/i18n/config";
import { showLanguageSwitcher } from "@/i18n/config";
import type { Messages } from "@/i18n/messages";
import { SITE_CONTACT } from "@/config/site-contact";
import {
  isHomePath,
  localePath,
  MAIN_NAV_ITEMS,
  SITE_PAGE_NAV_KEYS,
  type SitePageKey,
} from "@/config/site-routes";
import { LangSwitch } from "./lang-switch";

type Props = {
  locale: Locale;
  t: Messages;
};

const MOBILE_MENU_QUERY = "(max-width: 1189px)";
const DESKTOP_QUERY = "(min-width: 1190px)";

type HeaderTone = "hero" | "glass" | "opaque";

type NavItem = {
  href: string;
  label: string;
  external: boolean;
};

function isNavLinkActive(pathname: string, item: NavItem, locale: Locale): boolean {
  if (item.external) return false;

  const current = pathname.replace(/\/$/, "") || "/";
  const target = item.href.replace(/\/$/, "") || "/";
  const homeTarget = localePath(locale, "home").replace(/\/$/, "") || "/";

  if (target === homeTarget) {
    return current === homeTarget;
  }

  return current === target || current.startsWith(`${target}/`);
}

function headerToneClass(tone: HeaderTone, menuOpen: boolean): string {
  if (menuOpen || tone === "opaque") return "site-header--opaque";
  if (tone === "glass") return "site-header--glass";
  return "site-header--over-hero";
}

function navLabel(t: Messages, page: SitePageKey): string {
  return t.nav[SITE_PAGE_NAV_KEYS[page]];
}

function buildNav(locale: Locale, t: Messages): NavItem[] {
  return MAIN_NAV_ITEMS.map((item) => ({
    href: localePath(locale, item.page),
    label: navLabel(t, item.page),
    external: false,
  }));
}

export function SiteHeader({ locale, t }: Props) {
  const pathname = usePathname();
  const onHome = isHomePath(pathname ?? "", locale);
  const [tone, setTone] = useState<HeaderTone>(() => (onHome ? "hero" : "opaque"));
  const [menuOpen, setMenuOpen] = useState(false);
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  const toneClass = onHome ? headerToneClass(tone, menuOpen) : "site-header--opaque";
  const nav = buildNav(locale, t);
  const navStart = nav.slice(0, 3);
  const navEnd = nav.slice(3);

  useEffect(() => {
    if (!onHome) {
      setTone("opaque");
      return;
    }

    const desktopMq = window.matchMedia(DESKTOP_QUERY);

    const onScroll = () => {
      const hero = document.getElementById("top");
      const headerH =
        parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 64;

      if (window.scrollY > 4) {
        setTone("opaque");
        return;
      }

      const carouselEl =
        hero?.querySelector<HTMLElement>(".hero-fs__media") ?? hero;
      const carouselRect = carouselEl?.getBoundingClientRect();
      const carouselInView =
        !!carouselRect &&
        carouselRect.bottom > headerH + 8 &&
        carouselRect.top < window.innerHeight * 0.92;

      setTone(carouselInView ? "hero" : "opaque");
    };

    desktopMq.addEventListener("change", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      desktopMq.removeEventListener("change", onScroll);
      window.removeEventListener("scroll", onScroll);
    };
  }, [onHome]);

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

  function closeMenu() {
    setMenuOpen(false);
    menuBtnRef.current?.focus();
  }

  function navLinkClassName(baseClass: string, item: NavItem): string {
    const active = isNavLinkActive(pathname ?? "", item, locale);
    return active ? `${baseClass} ${baseClass}--active` : baseClass;
  }

  function renderNavLink(item: NavItem, className: string, onClick?: () => void) {
    const linkClass = navLinkClassName(className, item);
    const active = isNavLinkActive(pathname ?? "", item, locale);

    if (item.external) {
      return (
        <a
          href={item.href}
          className={linkClass}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
        >
          {item.label}
        </a>
      );
    }
    return (
      <Link
        href={item.href}
        className={linkClass}
        aria-current={active ? "page" : undefined}
        onClick={onClick}
      >
        {item.label}
      </Link>
    );
  }

  function renderNavList(items: NavItem[], className: string, onClick?: () => void) {
    return (
      <ul>
        {items.map((item) => (
          <li key={item.href}>
            {renderNavLink(item, className, onClick)}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <header className={`site-header ${toneClass}`}>
      <div className="site-header__inner">
        <div className="site-header__col site-header__col--start">
          <nav className="site-header__nav site-header__nav--start" aria-label="Main">
            {renderNavList(navStart, "site-header__nav-link")}
          </nav>
        </div>

        <Link href={localePath(locale, "home")} className="site-header__brand">
          {SITE_CONTACT.brandMark}
        </Link>

        <div className="site-header__col site-header__col--end">
          <nav className="site-header__nav site-header__nav--end" aria-label="Secondary">
            {renderNavList(navEnd, "site-header__nav-link")}
          </nav>
          {showLanguageSwitcher ? (
            <LangSwitch currentLocale={locale} aria={t.langSwitcher.aria} />
          ) : null}
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
              {nav.map((item) => (
                <li key={item.href}>
                  {renderNavLink(item, "site-header__mobile-nav-link", closeMenu)}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
