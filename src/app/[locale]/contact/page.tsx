import type { Metadata } from "next";
import { BookCta } from "@/components/book-cta";
import { ContactSection } from "@/components/contact-section";
import { PageBanner } from "@/components/page-banner";
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
  return buildPageMetadata(locale, "contact");
}

type Props = { params: Promise<{ locale: string }> };

export default async function ContactPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const t = getMessages(locale);

  return (
    <>
      <PageBanner locale={locale} page="contact" />

      <div className="flat-section flat-section--tint">
        <div className="flat-wrap">
          <ContactSection t={t} locale={locale} />
        </div>
      </div>

      <BookCta variant="banner" label={t.header.bookCta} lead={t.cta.contactLead} />
    </>
  );
}
