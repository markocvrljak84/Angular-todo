"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages";
import { LangSwitch } from "./lang-switch";

type Props = {
  locale: Locale;
  t: Messages;
};

const SECTION_IDS = ["top", "about", "gallery", "film", "nearby", "contact"] as const;

export function SiteHeader({ locale, t }: Props) {
  const base = `/${locale}`;
  const [solid, setSolid] = useState(false);
  const [active, setActive] = useState<(typeof SECTION_IDS)[number]>("top");

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

  const nav = [
    { id: "top" as const, href: `${base}#top`, label: t.nav.home },
    { id: "about" as const, href: `${base}#about`, label: t.nav.about },
    { id: "gallery" as const, href: `${base}#gallery`, label: t.nav.gallery },
    { id: "film" as const, href: `${base}#film`, label: t.nav.film },
    { id: "nearby" as const, href: `${base}#nearby`, label: t.nav.nearby },
    { id: "contact" as const, href: `${base}#contact`, label: t.nav.contact },
  ];

  return (
    <header
      className={`site-header ${solid ? "site-header--solid" : "site-header--over-hero"}`}
    >
      <div className="site-header__inner">
        <Link href={`${base}#top`} className="site-header__brand">
          {t.meta.siteName}
        </Link>
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
        <LangSwitch currentLocale={locale} aria={t.langSwitcher.aria} />
      </div>
    </header>
  );
}
