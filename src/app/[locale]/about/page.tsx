import type { Metadata } from "next";
import { AboutSection } from "@/components/about-section";
import { BookCta } from "@/components/book-cta";
import { FacilitiesGrid } from "@/components/facilities-grid";
import { PageBanner } from "@/components/page-banner";
import { getFacilityCategories } from "@/i18n/facility-categories";
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
  return buildPageMetadata(locale, "about");
}

type Props = { params: Promise<{ locale: string }> };

export default async function AboutPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const t = getMessages(locale);
  const facilities = getFacilityCategories(locale);

  return (
    <>
      <PageBanner locale={locale} page="about" />

      <div className="flat-section flat-section--tint">
        <div className="flat-wrap">
          <AboutSection t={t} />
        </div>
      </div>

      <BookCta variant="banner" label={t.header.bookCta} lead={t.cta.aboutLead} />

      <div className="flat-section">
        <div className="flat-wrap">
          <FacilitiesGrid title={t.home.facilitiesTitle} categories={facilities} />
        </div>
      </div>
    </>
  );
}
