import type { Locale } from "@/i18n/config";

/** Open Graph `locale` tag (BCP 47 with region). */
export function localeToOpenGraphLocale(locale: Locale): string {
  const map: Record<Locale, string> = {
    en: "en_US",
    hr: "hr_HR",
    de: "de_DE",
    fr: "fr_FR",
    it: "it_IT",
  };
  return map[locale];
}

/** HTML `hreflang` attribute (ISO 639-1). */
export function localeToHreflang(locale: Locale): string {
  return locale;
}
