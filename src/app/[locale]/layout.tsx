import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isActiveLocale, isLocale, type Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { LangHtml } from "@/components/lang-html";
import { SeoJsonLd } from "@/components/seo-json-ld";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactStripGate } from "@/components/contact-strip-gate";
import { SITE_GEO } from "@/config/site-location";
import { localeStaticParams } from "@/lib/locale-page";

export function generateStaticParams() {
  return localeStaticParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: l } = await params;
  if (!isLocale(l) || !isActiveLocale(l)) return {};
  const m = getMessages(l as Locale);

  return {
    title: { default: m.meta.siteName, template: `%s · ${SITE_GEO.brandName}` },
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
  if (!isLocale(l) || !isActiveLocale(l)) notFound();
  const locale = l as Locale;
  const messages = getMessages(locale);

  return (
    <>
      <SeoJsonLd locale={locale} messages={messages} />
      <LangHtml locale={locale} />
      <div className="page-shell">
        <SiteHeader locale={locale} t={messages} />
        <main className="page-main">{children}</main>
        <ContactStripGate t={messages} locale={locale} />
        <SiteFooter t={messages} locale={locale} />
      </div>
    </>
  );
}
