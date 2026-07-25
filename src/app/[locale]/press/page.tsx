import type { Metadata } from "next";
import { InnerPageHeader } from "@/components/inner-page-header";
import { PageJsonLd } from "@/components/page-json-ld";
import { PressPageSections } from "@/components/press-page-sections";
import { getMessages } from "@/i18n/messages";
import { getPressPageContent } from "@/i18n/press-content";
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
  return buildPageMetadata(locale, "press");
}

type Props = { params: Promise<{ locale: string }> };

export default async function PressPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const t = getMessages(locale);
  const content = getPressPageContent(locale);
  const header = getPageHeaderContent(locale, "press");

  return (
    <>
      <PageJsonLd locale={locale} messages={t} page="press" />
      <InnerPageHeader {...header} />
      <PressPageSections content={content} locale={locale} />
    </>
  );
}
