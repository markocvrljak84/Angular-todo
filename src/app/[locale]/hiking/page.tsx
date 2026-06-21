import type { Metadata } from "next";
import { BookCta } from "@/components/book-cta";
import { HikingRoutesSection } from "@/components/hiking-routes-section";
import { PageBanner } from "@/components/page-banner";
import { TasteOfVelebitSection } from "@/components/taste-of-velebit-section";
import { getExperienceContent } from "@/i18n/experience-content";
import { getHikingRoutes } from "@/i18n/hiking-routes";
import { getMessages } from "@/i18n/messages";
import {
  localeStaticParams,
  resolveLocale,
} from "@/lib/locale-page";
import { buildPageMetadata } from "@/lib/page-metadata";

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
  return buildPageMetadata(locale, "hiking");
}

type Props = { params: Promise<{ locale: string }> };

export default async function HikingPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const t = getMessages(locale);
  const experience = getExperienceContent(locale);

  return (
    <>
      <PageBanner locale={locale} page="hiking" />

      <HikingRoutesSection content={getHikingRoutes(locale)} compact />

      <BookCta variant="banner" label={t.header.bookCta} lead={t.cta.hikingLead} />

      <TasteOfVelebitSection content={experience.taste} />
    </>
  );
}
