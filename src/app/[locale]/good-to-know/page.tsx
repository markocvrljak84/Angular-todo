import type { Metadata } from "next";
import { BookCta } from "@/components/book-cta";
import { FaqSection } from "@/components/faq-section";
import { InnerPageHeader } from "@/components/inner-page-header";
import { getGoodToKnow } from "@/i18n/good-to-know";
import { getMessages } from "@/i18n/messages";
import { getPageHeaderContent } from "@/lib/inner-page-content";
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
  return buildPageMetadata(locale, "goodToKnow");
}

type Props = { params: Promise<{ locale: string }> };

export default async function GoodToKnowPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const t = getMessages(locale);
  const content = getGoodToKnow(locale);
  const header = getPageHeaderContent(locale, "goodToKnow");

  return (
    <>
      <InnerPageHeader {...header} />

      <FaqSection content={content} compact />

      <BookCta
        variant="banner"
        label={t.header.bookCta}
        lead={t.cta.goodToKnowLead}
      />
    </>
  );
}
