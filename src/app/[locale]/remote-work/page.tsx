import type { Metadata } from "next";
import { InnerPageHeader } from "@/components/inner-page-header";
import { PageJsonLd } from "@/components/page-json-ld";
import { TopicPageSections } from "@/components/topic-page-sections";
import { getMessages } from "@/i18n/messages";
import { getRemoteWorkPageContent } from "@/i18n/topic-pages";
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
  return buildPageMetadata(locale, "remoteWork");
}

type Props = { params: Promise<{ locale: string }> };

export default async function RemoteWorkPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const t = getMessages(locale);
  const content = getRemoteWorkPageContent(locale);
  const header = getPageHeaderContent(locale, "remoteWork");

  return (
    <>
      <PageJsonLd locale={locale} messages={t} page="remoteWork" />
      <InnerPageHeader {...header} />
      <TopicPageSections content={content} bookLabel={t.header.bookCta} />
    </>
  );
}
