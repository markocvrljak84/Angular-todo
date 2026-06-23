import type { Metadata } from "next";
import { BookCta } from "@/components/book-cta";
import { GalleryEditorialGrid } from "@/components/gallery-editorial-grid";
import { InnerPageHeader } from "@/components/inner-page-header";
import { GALLERY_GROUPS } from "@/config/site-images";
import { getGalleryContent } from "@/i18n/gallery-content";
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
  return buildPageMetadata(locale, "gallery");
}

type Props = { params: Promise<{ locale: string }> };

const FEATURED_GALLERY_CATEGORIES = ["exterior", "outdoorLiving"] as const;
const INTERIOR_EDITORIAL_FILES = [
  "581480514_122107015833084437_6966149935686680015_n.jpg",
  "585009655_122107017075084437_1671659401079838438_n.jpg",
] as const;
const MOSAIC_GALLERY_FILES = [
  "20260601_161000.jpg",
  "20260601_163937.jpg",
  "20260601_163743.jpg",
  "20260604_173207.jpg",
  "20260604_131859-1.jpg",
  "20260604_132024.jpg",
] as const;
const INTERIOR_MOSAIC_FILES = [
  "812808252.jpg",
  "740270926.jpg",
  "581480514_122107015833084437_6966149935686680015_n.jpg",
  "812808512.jpg",
  "585009655_122107017075084437_1671659401079838438_n.jpg",
  "20260601_160317.jpg",
] as const;

export default async function GalleryPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const t = getMessages(locale);
  const gallery = getGalleryContent(locale);
  const header = getPageHeaderContent(locale, "gallery");

  const sections = FEATURED_GALLERY_CATEGORIES.map((categoryId) => {
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

  const interiorGroup = gallery.groups.find((item) => item.id === "interior");
  if (!interiorGroup) {
    throw new Error('Missing gallery content for category "interior".');
  }

  const interiorSections = INTERIOR_EDITORIAL_FILES.map((file, index) => {
    const meta = interiorGroup.images[file];
    if (!meta) {
      throw new Error(`Missing gallery metadata for "${file}".`);
    }

    const base = `/img/gallery/${file}`;
    return {
      id: `interior-${index}`,
      title: interiorGroup.title,
      slides: [
        {
          srcThumb: base,
          srcLarge: base,
          alt: meta.alt,
          caption: meta.caption,
        },
      ],
    };
  });

  const slideFromGalleryFile = (file: string) => {
    const group = gallery.groups.find((item) => file in item.images);
    const meta = group?.images[file];

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
  };

  const mosaicSlides = MOSAIC_GALLERY_FILES.map(slideFromGalleryFile);
  const interiorMosaicSlides =
    INTERIOR_MOSAIC_FILES.map(slideFromGalleryFile);

  return (
    <>
      <PageJsonLd locale={locale} messages={t} page="gallery" />

      <InnerPageHeader {...header} />

      <div className="flat-section flat-section--tint">
        <div className="flat-wrap">
          <GalleryEditorialGrid
            sections={sections}
            mosaicSlides={mosaicSlides}
            trailingSections={interiorSections}
            trailingMosaicSlides={interiorMosaicSlides}
          />
        </div>
      </div>

      <BookCta variant="banner" label={t.header.bookCta} lead={t.cta.galleryLead} />
    </>
  );
}
