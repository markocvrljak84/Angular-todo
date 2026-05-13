/**
 * Static images under /public — single source of truth for About + Gallery sections.
 * Filenames in `img/gallery` (sorted). Add/remove files here when the folder changes.
 * Keep `Array.from({ length: … })` in `src/i18n/messages.ts` gallery.images in sync with this list length.
 */
export const GALLERY_FILES = [
  "571275863_122102378865084437_4800487342368999167_n.jpg",
  "578265540_122104807869084437_5111680495021054907_n.jpg",
  "581480514_122107015833084437_6966149935686680015_n.jpg",
  "585009655_122107017075084437_1671659401079838438_n.jpg",
  "669526272.jpg",
  "738020040.jpg",
  "740270926.jpg",
  "740290390.jpg",
  "812160813.jpg",
  "812802667.jpg",
  "812803341.jpg",
  "812808252.jpg",
  "812808512.jpg",
  "812809121.jpg",
  "865932799.jpg",
  "866610628.jpg",
] as const;

export const GALLERY_IMAGE_COUNT = GALLERY_FILES.length;

/** Filename in /public/img/about-us */
export const ABOUT_US_IMAGE = "38410942.jpg" as const;
