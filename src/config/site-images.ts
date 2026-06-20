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
  "20260519_210050.jpeg",
  "20260601_160317.jpg",
  "20260601_161334.jpg",
  "20260601_163937.jpg",
  "20260602_055146.jpg",
  "20260604_131924.jpg",
  "20260604_132024.jpg",
  "20260604_132039.jpg",
  "20260604_173207.jpg",
  "20260613_121546.jpg",
  "20260615_052145.jpg",
  "Velebit-11.jpg",
  "Velebit-15.jpg",
  "Velebit-16.jpg",
  "whatsapp-2026-06-04-084518.jpeg",
  "whatsapp-2026-06-04-084649.jpeg",
  "whatsapp-2026-06-06-182702.jpeg",
  "whatsapp-2026-06-12-223830.jpeg",
] as const;

export const GALLERY_IMAGE_COUNT = GALLERY_FILES.length;

/** First hero carousel slide — LCP candidate; keep in sync with page carousel order. */
export const HERO_LCP_IMAGE = "581480514_122107015833084437_6966149935686680015_n.jpg" as const;
export const HERO_LCP_SRC = `/img/main-carousel/${HERO_LCP_IMAGE}` as const;

/** Filename in /public/img/about-us */
export const ABOUT_US_IMAGE = "38410942.jpg" as const;

/**
 * Near places checkerboard — order matches `itineraryImageAlts` in messages.
 * ASCII paths only (folder on disk: /public/img/premuzic).
 */
export const NEARBY_GRID_IMAGE_SRCS = [
  "/img/paklenica/shutterstock_1617270832-scaled.jpg",
  "/img/pag/680708859_122096686946355213_4665446078753106627_n.jpg",
  "/img/zavratnica/681124824_122096686808355213_9208103830857597187_n.jpeg",
  "/img/premuzic/681316395_122096686874355213_6869570910689081219_n.jpg",
  "/img/premuzic/681345586_122096686718355213_276619802998470916_n.jpg",
  "/img/pag/681604802_122096686880355213_4265220364878636676_n.jpg",
  "/img/premuzic/velebit.jpg",
  "/img/paklenica/shutterstock_1617270832-scaled.jpg",
] as const;
