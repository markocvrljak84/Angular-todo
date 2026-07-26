import type { Metadata } from "next";
import { BookCta } from "@/components/book-cta";
import { GalleryStorySections } from "@/components/gallery-story-sections";
import { getGalleryStoryContent } from "@/i18n/gallery-story";
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
  return buildPageMetadata(locale, "gallery");
}

type Props = { params: Promise<{ locale: string }> };

export default async function GalleryPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const t = getMessages(locale);
  const story = getGalleryStoryContent(locale);

  return (
    <>
      <PageJsonLd locale={locale} messages={t} page="gallery" />

      <GalleryStorySections content={story} />

      <BookCta variant="banner" label={t.header.bookCta} lead={t.cta.galleryLead} />
    </>
  );
}
