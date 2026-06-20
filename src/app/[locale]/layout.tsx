import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { defaultLocale, isLocale, locales, type Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { ABOUT_US_IMAGE } from "@/config/site-images";
import { LangHtml } from "@/components/lang-html";
import { SeoJsonLd } from "@/components/seo-json-ld";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SITE_CONTACT } from "@/config/site-contact";
import { SITE_GEO, getGeoMetaOther } from "@/config/site-location";
import { getSiteUrl } from "@/lib/site-url";
import { getSeoKeywords } from "@/lib/seo-keywords";
import { localeToHreflang, localeToOpenGraphLocale } from "@/lib/seo-locale";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: l } = await params;
  if (!isLocale(l)) return {};
  const locale = l as Locale;
  const m = getMessages(locale);
  const base = getSiteUrl();
  const path = `/${locale}`;
  const pageUrl = `${base}${path}`;

  const languages: Record<string, string> = {
    "x-default": `${base}/${defaultLocale}`,
  };
  for (const loc of locales) {
    languages[localeToHreflang(loc)] = `${base}/${loc}`;
  }

  return {
    title: { default: m.meta.siteName, template: `%s · ${SITE_GEO.brandName}` },
    description: m.meta.siteDescription,
    keywords: getSeoKeywords(locale),
    applicationName: SITE_CONTACT.businessName,
    category: "travel",
    other: getGeoMetaOther(),
    alternates: {
      canonical: path,
      languages,
    },
    openGraph: {
      type: "website",
      locale: localeToOpenGraphLocale(locale),
      alternateLocale: locales.filter((loc) => loc !== locale).map(localeToOpenGraphLocale),
      url: pageUrl,
      siteName: m.meta.siteName,
      title: m.meta.siteName,
      description: m.meta.siteDescription,
      images: [
        {
          url: `/img/about-us/${ABOUT_US_IMAGE}`,
          alt: m.about.sideImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: m.meta.siteName,
      description: m.meta.siteDescription,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: l } = await params;
  if (!isLocale(l)) notFound();
  const locale = l as Locale;
  const messages = getMessages(locale);

  return (
    <>
      <SeoJsonLd locale={locale} messages={messages} />
      <LangHtml locale={locale} />
      <div className="page-shell">
        <SiteHeader locale={locale} t={messages} />
        <main className="page-main">{children}</main>
        <SiteFooter t={messages} locale={locale} />
      </div>
    </>
  );
}
