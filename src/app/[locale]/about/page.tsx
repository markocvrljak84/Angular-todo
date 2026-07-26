import type { Metadata } from "next";
import { AboutSection } from "@/components/about-section";
import { AboutStorySection } from "@/components/about-story-section";
import { BookCta } from "@/components/book-cta";
import { getAboutStory } from "@/i18n/about-story";
import { getMessages } from "@/i18n/messages";
import {
  localeStaticParams,
  resolveLocale,
} from "@/lib/locale-page";
import { PageJsonLd } from "@/components/page-json-ld";
import { buildPageMetadata } from "@/lib/page-metadata";
import { localePath } from "@/config/site-routes";

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

  return (
    <>
      <PageJsonLd locale={locale} messages={t} page="about" />

      <div className="flat-section flat-section--tint flat-section--under-header">
        <div className="flat-wrap">
          <AboutSection t={t} />
        </div>
      </div>

      <AboutStorySection content={story} pressKitHref={localePath(locale, "press")} />

      <BookCta variant="banner" label={t.header.bookCta} lead={t.cta.aboutLead} />
    </>
  );
}
