import type { Metadata } from "next";
import { BookCta } from "@/components/book-cta";
import { FacilitiesGrid } from "@/components/facilities-grid";
import { InnerPageHeader } from "@/components/inner-page-header";
import { getFacilityCategories } from "@/i18n/facility-categories";
import { getMessages } from "@/i18n/messages";
import { getPageHeaderContent } from "@/lib/inner-page-content";
import {
  localeStaticParams,
  resolveLocale,
} from "@/lib/locale-page";
import { PageJsonLd } from "@/components/page-json-ld";
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
  return buildPageMetadata(locale, "accommodation");
}

type Props = { params: Promise<{ locale: string }> };

export default async function AccommodationPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const t = getMessages(locale);
  const facilities = getFacilityCategories(locale);
  const header = getPageHeaderContent(locale, "accommodation");

  return (
    <>
      <PageJsonLd locale={locale} messages={t} page="accommodation" />

      <InnerPageHeader {...header} />

      <div className="flat-section flat-section--tint">
        <div className="flat-wrap">
          <FacilitiesGrid title={t.home.facilitiesTitle} categories={facilities} />
        </div>
      </div>

      <BookCta variant="banner" label={t.header.bookCta} lead={t.cta.aboutLead} />
    </>
  );
}
