import { defaultLocale, localePrefixInUrl, type Locale } from "@/i18n/config";
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
  "journal",
  "contact",
] as const;

export type SitePageKey = (typeof SITE_PAGE_KEYS)[number];

/** Pages listed in sitemap.xml (excludes legacy redirects). */
export const INDEXABLE_PAGE_KEYS = [
  "home",
  "accommodation",
  "experiences",
  "about",
  "gallery",
  "goodToKnow",
  "journal",
  "contact",
] as const satisfies readonly SitePageKey[];

export type IndexablePageKey = (typeof INDEXABLE_PAGE_KEYS)[number];

/** Relative priority for sitemap.xml entries. */
export const SITEMAP_PAGE_PRIORITY: Record<IndexablePageKey, number> = {
  home: 1,
  accommodation: 0.95,
  experiences: 0.9,
  gallery: 0.85,
  journal: 0.85,
  about: 0.8,
  goodToKnow: 0.8,
  contact: 0.75,
};

export const SITEMAP_CHANGE_FREQUENCY: Record<
  IndexablePageKey,
  "weekly" | "monthly"
> = {
  home: "weekly",
  accommodation: "weekly",
  experiences: "weekly",
  gallery: "monthly",
  journal: "monthly",
  about: "monthly",
  goodToKnow: "monthly",
  contact: "monthly",
};

/** Primary header navigation. */
export const MAIN_NAV_ITEMS = [
  { kind: "page" as const, page: "home" as const },
  { kind: "page" as const, page: "accommodation" as const },
  { kind: "page" as const, page: "experiences" as const },
  { kind: "page" as const, page: "gallery" as const },
  { kind: "page" as const, page: "journal" as const },
  { kind: "page" as const, page: "about" as const },
  { kind: "page" as const, page: "contact" as const },
];

/** Secondary links shown in the footer. */
export const FOOTER_NAV_PAGES: SitePageKey[] = [
  "goodToKnow",
  "journal",
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
  journal: "journal",
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
  | "journal"
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
  journal: "journal",
  contact: "contact",
};

/** Legacy routes → current routes (301). */
export const LEGACY_ROUTE_REDIRECTS: Record<string, string> = {
  hiking: "experiences",
  nearby: "experiences",
};

export function localePath(locale: Locale, page: SitePageKey): string {
  const segment = SITE_PAGE_SEGMENTS[page];
  if (!localePrefixInUrl && locale === defaultLocale) {
    return segment ? `/${segment}` : "/";
  }
  return segment ? `/${locale}/${segment}` : `/${locale}`;
}

export function isHomePath(pathname: string, locale: Locale): boolean {
  const normalized = pathname.replace(/\/$/, "") || "/";
  if (!localePrefixInUrl && locale === defaultLocale) {
    return normalized === "/";
  }
  return normalized === `/${locale}`;
}

export function bookNavHref(): string {
  return BOOKING_URL;
}
