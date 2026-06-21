import type { Metadata } from "next";
import { GuidesSection } from "@/components/guides-section";
import { NewsletterSignupSection } from "@/components/newsletter-signup-section";
import { PageBanner } from "@/components/page-banner";
import { getExperienceContent } from "@/i18n/experience-content";
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
  return buildPageMetadata(locale, "guides");
}

type Props = { params: Promise<{ locale: string }> };

export default async function GuidesPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const experience = getExperienceContent(locale);

  return (
    <>
      <PageBanner locale={locale} page="guides" />

      <div className="flat-section flat-section--tint">
        <div className="flat-wrap">
          <GuidesSection content={experience.guides} locale={locale} compact />
        </div>
      </div>

      <NewsletterSignupSection
        content={experience.signup}
        locale={locale}
        source="guides"
      />
    </>
  );
}
