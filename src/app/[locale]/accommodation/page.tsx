import type { Metadata } from "next";
import { StayPage } from "@/components/stay-page";
import { getAccommodationPageContent } from "@/i18n/accommodation-content";
import { getBookingReviews } from "@/i18n/booking-reviews";
import { getGoodToKnow } from "@/i18n/good-to-know";
import { getMessages } from "@/i18n/messages";
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
  const content = getAccommodationPageContent(locale);
  const goodToKnow = getGoodToKnow(locale);
  const bookingReviews = getBookingReviews(locale);

  return (
    <>
      <PageJsonLd locale={locale} messages={t} page="accommodation" />

      <StayPage
        content={content}
        goodToKnow={goodToKnow}
        bookingReviews={bookingReviews}
      />
    </>
  );
}
