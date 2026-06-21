import type { Locale } from "@/i18n/config";
import { BOOKING_URL } from "@/config/site-contact";

/** Site page keys — one route per major section. */
export const SITE_PAGE_KEYS = [
  "home",
  "accommodation",
  "experiences",
  "about",
  "gallery",
  "goodToKnow",
  "hiking",
  "nearby",
  "guides",
  "contact",
] as const;

export type SitePageKey = (typeof SITE_PAGE_KEYS)[number];

/** Primary header navigation (Rezerviraj = external booking). */
export const MAIN_NAV_ITEMS = [
  { kind: "page" as const, page: "home" as const },
  { kind: "page" as const, page: "accommodation" as const },
  { kind: "page" as const, page: "experiences" as const },
  { kind: "page" as const, page: "gallery" as const },
  { kind: "page" as const, page: "guides" as const },
  { kind: "page" as const, page: "about" as const },
  { kind: "book" as const },
];

/** Secondary links shown in the footer. */
export const FOOTER_NAV_PAGES: SitePageKey[] = [
  "goodToKnow",
  "guides",
  "contact",
];

/** URL segment after /[locale] (empty string = home). */
export const SITE_PAGE_SEGMENTS: Record<SitePageKey, string> = {
  home: "",
  accommodation: "accommodation",
  experiences: "experiences",
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
  | "home"
  | "accommodation"
  | "experiences"
  | "about"
  | "gallery"
  | "goodToKnow"
  | "hiking"
  | "nearby"
  | "guides"
  | "contact"
> = {
  home: "home",
  accommodation: "accommodation",
  experiences: "experiences",
  about: "about",
  gallery: "gallery",
  goodToKnow: "goodToKnow",
  hiking: "hiking",
  nearby: "nearby",
  guides: "guides",
  contact: "contact",
};

/** Legacy routes → current routes (301). */
export const LEGACY_ROUTE_REDIRECTS: Record<string, string> = {
  hiking: "experiences",
  nearby: "experiences",
};

export function localePath(locale: Locale, page: SitePageKey): string {
  const segment = SITE_PAGE_SEGMENTS[page];
  return segment ? `/${locale}/${segment}` : `/${locale}`;
}

export function isHomePath(pathname: string, locale: Locale): boolean {
  return pathname === `/${locale}` || pathname === `/${locale}/`;
}

export function bookNavHref(): string {
  return BOOKING_URL;
}
