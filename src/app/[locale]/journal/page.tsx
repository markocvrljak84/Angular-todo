import type { Metadata } from "next";
import { JournalHub } from "@/components/journal-hub";
import { InnerPageHeader } from "@/components/inner-page-header";
import { NewsletterSignupSection } from "@/components/newsletter-signup-section";
import { getExperienceContent } from "@/i18n/experience-content";
import { getJournalContent } from "@/i18n/journal-content";
import { getPageHeaderContent } from "@/lib/inner-page-content";
import {
  localeStaticParams,
  resolveLocale,
} from "@/lib/locale-page";
import { PageJsonLd } from "@/components/page-json-ld";
import { getMessages } from "@/i18n/messages";
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
  return buildPageMetadata(locale, "journal");
}

type Props = { params: Promise<{ locale: string }> };

export default async function JournalPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const t = getMessages(locale);
  const experience = getExperienceContent(locale);
  const journal = getJournalContent(locale);
  const header = getPageHeaderContent(locale, "journal");

  return (
    <>
      <PageJsonLd locale={locale} messages={t} page="journal" />

      <InnerPageHeader
        {...header}
        motif={{
          src: "/img/illustrations/header-wild-strawberry.webp",
          alt: "Etching-style illustration of a wild strawberry",
        }}
      />

      <div className="flat-section flat-section--tint">
        <div className="flat-wrap flat-wrap--wide">
          <JournalHub content={journal} locale={locale} compact />
        </div>
      </div>

      <NewsletterSignupSection
        content={experience.signup}
        locale={locale}
        source="journal"
      />
    </>
  );
}
