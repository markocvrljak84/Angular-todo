import type { Metadata } from "next";
import { BookCta } from "@/components/book-cta";
import { GalleryGridLightbox } from "@/components/gallery-grid-lightbox";
import { InnerPageHeader } from "@/components/inner-page-header";
import { GALLERY_FILES } from "@/config/site-images";
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
  const header = getPageHeaderContent(locale, "gallery");

  if (t.gallery.images.length !== GALLERY_FILES.length) {
    throw new Error("gallery.images length must match GALLERY_FILES.");
  }

  return (
    <>
      <InnerPageHeader {...header} />

      <div className="flat-section flat-section--tint">
        <div className="flat-wrap">
          <GalleryGridLightbox
            slides={GALLERY_FILES.map((file, i) => {
              const meta = t.gallery.images[i];
              const base = `/img/gallery/${file}`;
              return {
                srcThumb: base,
                srcLarge: base,
                alt: meta?.alt ?? "",
                caption: meta?.caption ?? "",
              };
            })}
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
