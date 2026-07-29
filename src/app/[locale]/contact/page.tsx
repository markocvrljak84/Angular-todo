import type { Metadata } from "next";
import { BookCta } from "@/components/book-cta";
import { ContactSection } from "@/components/contact-section";
import { InnerPageHeader } from "@/components/inner-page-header";
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
  return buildPageMetadata(locale, "contact");
}

type Props = { params: Promise<{ locale: string }> };

export default async function ContactPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const t = getMessages(locale);
  const header = getPageHeaderContent(locale, "contact");

  return (
    <>
      <PageJsonLd locale={locale} messages={t} page="contact" />

      <InnerPageHeader
        {...header}
        className="home-welcome--contact"
        motif={{
          src: "/img/illustrations/header-cardinal-butterfly.webp",
          alt: "Etching-style illustration of a butterfly on a flower",
        }}
      />

      <div className="flat-section flat-section--tint flat-section--contact">
        <div className="flat-wrap">
          <ContactSection t={t} locale={locale} />
        </div>
      </div>

      <BookCta variant="banner" label={t.header.bookCta} lead={t.cta.contactLead} />
    </>
  );
}
