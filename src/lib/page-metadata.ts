import type { Metadata } from "next";
import { activeLocales, defaultLocale, localePrefixInUrl, type Locale } from "@/i18n/config";
import {
  localePath,
  type SitePageKey,
} from "@/config/site-routes";
import { ABOUT_US_IMAGE, HERO_LCP_PRELOAD_SRC } from "@/config/site-images";
import { SITE_GEO, getGeoMetaOther } from "@/config/site-location";
import { getMessages } from "@/i18n/messages";
import { getPageSeo } from "@/i18n/page-seo";
import { getSeoKeywords } from "@/lib/seo-keywords";
import { localeToHreflang, localeToOpenGraphLocale } from "@/lib/seo-locale";
import { canonicalAbsoluteUrl } from "@/lib/site-url";

export function buildPageMetadata(
  locale: Locale,
  page: SitePageKey
): Metadata {
  const seo = getPageSeo(locale, page);
  const m = getMessages(locale);
  const path = localePath(locale, page);
  const pageUrl = canonicalAbsoluteUrl(path);

  const multiLocale = activeLocales.length > 1 || localePrefixInUrl;

  const languages: Record<string, string> | undefined = multiLocale
    ? {
        "x-default": canonicalAbsoluteUrl(localePath(defaultLocale, page)),
        ...Object.fromEntries(
          activeLocales.map((loc) => [
            localeToHreflang(loc),
            canonicalAbsoluteUrl(localePath(loc, page)),
          ])
        ),
      }
    : undefined;

  return {
    title: seo.title,
    description: seo.description,
    keywords: getSeoKeywords(locale),
    applicationName: SITE_GEO.brandName,
    category: "travel",
    other: getGeoMetaOther(),
    alternates: {
      canonical: pageUrl,
      ...(languages ? { languages } : {}),
    },
    openGraph: {
      type: "website",
      locale: localeToOpenGraphLocale(locale),
      ...(multiLocale
        ? {
            alternateLocale: activeLocales
              .filter((loc) => loc !== locale)
              .map(localeToOpenGraphLocale),
          }
        : {}),
      url: pageUrl,
      siteName: m.meta.siteName,
      title: seo.title,
      description: seo.description,
      images: [
        {
          url: HERO_LCP_PRELOAD_SRC,
          width: 1280,
          height: 853,
          alt: m.about.sideImageAlt,
        },
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
      images: [HERO_LCP_PRELOAD_SRC],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}
