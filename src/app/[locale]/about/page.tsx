import type { Metadata } from "next";
import { AboutSection } from "@/components/about-section";
import { AboutStorySection } from "@/components/about-story-section";
import { BookCta } from "@/components/book-cta";
import { InnerPageHeader } from "@/components/inner-page-header";
import { getAboutStory } from "@/i18n/about-story";
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
  return buildPageMetadata(locale, "about");
}

type Props = { params: Promise<{ locale: string }> };

export default async function AboutPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const t = getMessages(locale);
  const story = getAboutStory(locale);
  const header = getPageHeaderContent(locale, "about");

  return (
    <>
      <PageJsonLd locale={locale} messages={t} page="about" />

      <InnerPageHeader {...header} />

      <div className="flat-section flat-section--tint">
        <div className="flat-wrap">
          <AboutSection t={t} />
        </div>
      </div>

      <AboutStorySection content={story} />

      <BookCta variant="banner" label={t.header.bookCta} lead={t.cta.aboutLead} />
    </>
  );
}
