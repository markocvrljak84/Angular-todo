import type { Metadata } from "next";
import { BookCta } from "@/components/book-cta";
import { GalleryGridLightbox } from "@/components/gallery-grid-lightbox";
import { InnerPageHeader } from "@/components/inner-page-header";
import { GALLERY_CATEGORIES, GALLERY_GROUPS } from "@/config/site-images";
import { getGalleryContent } from "@/i18n/gallery-content";
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
  return buildPageMetadata(locale, "gallery");
}

type Props = { params: Promise<{ locale: string }> };

export default async function GalleryPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const t = getMessages(locale);
  const gallery = getGalleryContent(locale);
  const header = getPageHeaderContent(locale, "gallery");

  const sections = GALLERY_CATEGORIES.map((categoryId) => {
    const group = gallery.groups.find((item) => item.id === categoryId);
    if (!group) {
      throw new Error(`Missing gallery content for category "${categoryId}".`);
    }

    return {
      id: categoryId,
      title: group.title,
      slides: GALLERY_GROUPS[categoryId].map((file) => {
        const meta = group.images[file];
        if (!meta) {
          throw new Error(`Missing gallery metadata for "${file}".`);
        }
        const base = `/img/gallery/${file}`;
        return {
          srcThumb: base,
          srcLarge: base,
          alt: meta.alt,
          caption: meta.caption,
        };
      }),
    };
  });

  return (
    <>
      <InnerPageHeader {...header} />

      <div className="flat-section flat-section--tint">
        <div className="flat-wrap">
          <GalleryGridLightbox
            sections={sections}
            labels={{
              close: t.gallery.lightboxClose,
              prev: t.gallery.lightboxPrev,
              next: t.gallery.lightboxNext,
              dialog: t.gallery.lightboxAria,
              openThumb: t.gallery.lightboxOpenThumb,
            }}
          />
        </div>
      </div>

      <BookCta variant="banner" label={t.header.bookCta} lead={t.cta.galleryLead} />
    </>
  );
}
