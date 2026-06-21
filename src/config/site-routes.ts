import type { Locale } from "@/i18n/config";

/** Site page keys — one route per major section. */
export const SITE_PAGE_KEYS = [
  "home",
  "about",
  "gallery",
  "goodToKnow",
  "hiking",
  "nearby",
  "guides",
  "contact",
] as const;

export type SitePageKey = (typeof SITE_PAGE_KEYS)[number];

export const MAIN_NAV_PAGES: SitePageKey[] = [
  "home",
  "about",
  "gallery",
  "goodToKnow",
  "hiking",
  "nearby",
  "guides",
  "contact",
];

/** URL segment after /[locale] (empty string = home). */
export const SITE_PAGE_SEGMENTS: Record<SitePageKey, string> = {
  home: "",
  about: "about",
  gallery: "gallery",
  goodToKnow: "good-to-know",
  hiking: "hiking",
  nearby: "nearby",
  guides: "guides",
  contact: "contact",
};

/** Maps nav label keys in messages.ts */
export const SITE_PAGE_NAV_KEYS: Record<
  SitePageKey,
  "home" | "about" | "gallery" | "goodToKnow" | "hiking" | "nearby" | "guides" | "contact"
> = {
  home: "home",
  about: "about",
  gallery: "gallery",
  goodToKnow: "goodToKnow",
  hiking: "hiking",
  nearby: "nearby",
  guides: "guides",
  contact: "contact",
};

export function localePath(locale: Locale, page: SitePageKey): string {
  const segment = SITE_PAGE_SEGMENTS[page];
  return segment ? `/${locale}/${segment}` : `/${locale}`;
}

export function isHomePath(pathname: string, locale: Locale): boolean {
  return pathname === `/${locale}` || pathname === `/${locale}/`;
}
