export const locales = ["en", "hr", "de", "fr", "it"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/**
 * Locales served by the app (routing, sitemap, static params).
 * Restore multi-language: set to `[...locales]`.
 */
export const activeLocales = ["en"] as const satisfies readonly Locale[];

/** When false, default locale URLs omit the /en prefix (e.g. /about). */
export const localePrefixInUrl = false;

/** Restore multi-language: set to true. */
export const showLanguageSwitcher = false;

export function isLocale(s: string): s is Locale {
  return (locales as readonly string[]).includes(s);
}

export function isActiveLocale(s: string): s is Locale {
  return (activeLocales as readonly string[]).includes(s);
}
