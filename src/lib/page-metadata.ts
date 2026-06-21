import type { Metadata } from "next";
import { defaultLocale, locales, type Locale } from "@/i18n/config";
import {
  SITE_PAGE_SEGMENTS,
  type SitePageKey,
} from "@/config/site-routes";
import { ABOUT_US_IMAGE } from "@/config/site-images";
import { SITE_GEO, getGeoMetaOther } from "@/config/site-location";
import { getMessages } from "@/i18n/messages";
import { getPageSeo } from "@/i18n/page-seo";
import { getSeoKeywords } from "@/lib/seo-keywords";
import { localeToHreflang, localeToOpenGraphLocale } from "@/lib/seo-locale";
import { getSiteUrl } from "@/lib/site-url";

export function buildPageMetadata(
  locale: Locale,
  page: SitePageKey
): Metadata {
  const seo = getPageSeo(locale, page);
  const m = getMessages(locale);
  const base = getSiteUrl();
  const segment = SITE_PAGE_SEGMENTS[page];
  const path = segment ? `/${locale}/${segment}` : `/${locale}`;
  const pageUrl = `${base}${path}`;

  const languages: Record<string, string> = {
    "x-default": segment
      ? `${base}/${defaultLocale}/${segment}`
      : `${base}/${defaultLocale}`,
  };
  for (const loc of locales) {
    const locPath = SITE_PAGE_SEGMENTS[page]
      ? `/${loc}/${SITE_PAGE_SEGMENTS[page]}`
      : `/${loc}`;
    languages[localeToHreflang(loc)] = `${base}${locPath}`;
  }

  return {
    title: seo.title,
    description: seo.description,
    keywords: getSeoKeywords(locale),
    applicationName: SITE_GEO.brandName,
    category: "travel",
    other: getGeoMetaOther(),
    alternates: {
      canonical: path,
      languages,
    },
    openGraph: {
      type: "website",
      locale: localeToOpenGraphLocale(locale),
      alternateLocale: locales
        .filter((loc) => loc !== locale)
        .map(localeToOpenGraphLocale),
      url: pageUrl,
      siteName: m.meta.siteName,
      title: seo.title,
      description: seo.description,
      images: [
        {
          url: `/img/about-us/${ABOUT_US_IMAGE}`,
          alt: m.about.sideImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}
