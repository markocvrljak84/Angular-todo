import type { Metadata } from "next";
import { HtmlSitemapSections } from "@/components/html-sitemap-sections";
import { InnerPageHeader } from "@/components/inner-page-header";
import { PageJsonLd } from "@/components/page-json-ld";
import { getMessages } from "@/i18n/messages";
import { getUtilityPagesContent } from "@/i18n/utility-pages";
import { getPageHeaderContent } from "@/lib/inner-page-content";
import { buildPageMetadata } from "@/lib/page-metadata";
import { localeStaticParams, resolveLocale } from "@/lib/locale-page";

export const dynamic = "force-static";

export function generateStaticParams() {
  return localeStaticParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return buildPageMetadata(locale, "htmlSitemap");
}

type Props = { params: Promise<{ locale: string }> };

export default async function HtmlSitemapPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const t = getMessages(locale);
  const content = getUtilityPagesContent(locale).htmlSitemap;
  const header = getPageHeaderContent(locale, "htmlSitemap");

  return (
    <>
      <PageJsonLd locale={locale} messages={t} page="htmlSitemap" />
      <InnerPageHeader {...header} />
      <HtmlSitemapSections content={content} locale={locale} t={t} />
    </>
  );
}
