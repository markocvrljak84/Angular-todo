/**
 * Static images under /public — single source of truth for About + Gallery sections.
 * Gallery files are grouped in `GALLERY_GROUPS`; metadata lives in `src/i18n/gallery-content.ts`.
 */
/** Paths for assets in /public/img (not under /img/gallery). */
export const ROOT_IMAGE_PATHS: Readonly<Record<string, string>> = {
  "dnevni-boravak.jpg": "/img/dnevni-boravak.jpg",
};

export function galleryAssetSrc(file: string): string {
  return ROOT_IMAGE_PATHS[file] ?? `/img/gallery/${file}`;
}

export const DNEVNI_BORAVAK_IMAGE = ROOT_IMAGE_PATHS["dnevni-boravak.jpg"];

/** Home — “One day at Stars Peak” timeline image.
 *
 * Pre-render pipeline (nothing runs at `npm run build` for this file):
 * 1. Source file — `/public/img/gallery/20260608_191013.jpg` (1024×768 JPEG), Velebit limestone peaks above forest.
 * 2. NOT processed by `scripts/optimize-hero.mjs` (that script is main-carousel / LCP only).
 * 3. `next/image` in `ExperienceDaySection` — browser requests `/_next/image?url=…&w=…&q=…`;
 *    Next.js resizes to requested width, then encodes AVIF/WebP (`next.config.ts` → `images.formats`,
 *    quality from `EXPERIENCE_DAY_IMAGE_QUALITY`, default would be 75).
 * 4. CSS — `object-fit: contain` scales the decoded bitmap inside the grid cell (no crop).
 */
export const EXPERIENCE_DAY_IMAGE = galleryAssetSrc("20260608_191013.jpg") as `/img/${string}`;
export const EXPERIENCE_DAY_IMAGE_WIDTH = 1024;
export const EXPERIENCE_DAY_IMAGE_HEIGHT = 768;
/** Higher than next/image default (75) — reduces AVIF/WebP compression artifacts. */
export const EXPERIENCE_DAY_IMAGE_QUALITY = 92;

export const GALLERY_CATEGORIES = [
  "exterior",
  "outdoorLiving",
  "interior",
  "nature",
] as const;

export type GalleryCategoryId = (typeof GALLERY_CATEGORIES)[number];

export const GALLERY_GROUPS: Readonly<
  Record<GalleryCategoryId, readonly string[]>
> = {
  exterior: [
    "20260601_151354.jpg",
  ],
  outdoorLiving: [
    "20260604_131914-1.jpg",
    "20260604_132039.jpg",
    "20260604_132024.jpg",
  ],
  interior: [
    "dnevni-boravak.jpg",
    "585009655_122107017075084437_1671659401079838438_n.jpg",
    "740290390.jpg",
    "740270926.jpg",
    "20260601_160317.jpg",
    "Velebit-11.jpg",
    "578265540_122104807869084437_5111680495021054907_n.jpg",
    "812808252.jpg",
    "812808512.jpg",
    "812809121.jpg",
    "Velebit-16.jpg",
    "812160813.jpg",
  ],
  nature: [
    "738020040.jpg",
    "20260519_210050.jpeg",
    "20260615_052145.jpg",
    "whatsapp-2026-06-04-084518.jpeg",
    "whatsapp-2026-06-06-182702.jpeg",
    "whatsapp-2026-06-12-223830.jpeg",
    "812802667.jpg",
    "Velebit-15.jpg",
  ],
} as const;

/** Flat gallery order (grouped) — used on the gallery page. */
export const GALLERY_FILES = GALLERY_CATEGORIES.flatMap(
  (category) => GALLERY_GROUPS[category]
) as readonly string[];

/** Every gallery file on disk (sorted) — for sync checks when adding files. */
export const GALLERY_FILES_ON_DISK = [
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
  "20260601_151354.jpg",
  "20260601_160317.jpg",
  "20260601_161000.jpg",
  "20260601_161334.jpg",
  "20260601_163522.jpg",
  "20260601_163627.jpg",
  "20260601_163743.jpg",
  "20260601_163937.jpg",
  "20260602_054801.jpg",
  "20260602_055146.jpg",
  "20260604_131523.jpg",
  "20260604_131859-1.jpg",
  "20260604_131914-1.jpg",
  "20260604_131924.jpg",
  "20260604_131944.jpg",
  "20260604_132024.jpg",
  "20260604_132039.jpg",
  "20260604_132039-2.jpg",
  "20260604_131933.jpg",
  "20260604_173046.jpg",
  "20260604_173207.jpg",
  "20260613_121546.jpg",
  "20260615_052145.jpg",
  "Velebit-11.jpg",
  "Velebit-15.jpg",
  "Velebit-16.jpg",
  "stars-peak-chalet-deck.jpg",
  "whatsapp-2026-06-04-084518.jpeg",
  "whatsapp-2026-06-04-084649.jpeg",
  "whatsapp-2026-06-06-182702.jpeg",
  "whatsapp-2026-06-12-223830.jpeg",
] as const;

export const GALLERY_IMAGE_COUNT = GALLERY_FILES.length;

/** Hero carousel stills — kept for fallback / scripts; hero UI uses video. */
export const MAIN_CAROUSEL_IMAGES = [
  "581480514_122107015833084437_6966149935686680015_n.jpg",
  "578265540_122104807869084437_5111680495021054907_n.jpg",
  "585009655_122107017075084437_1671659401079838438_n.jpg",
] as const;

export type MainCarouselFile = (typeof MAIN_CAROUSEL_IMAGES)[number];

/** Fullscreen hero background video (muted autoplay loop). Uses 720p for fast start. */
export const HERO_VIDEO_SRC = "/video/hero.mp4" as const;
export const HERO_VIDEO_SRC_720 = "/video/hero-720p.mp4" as const;
export const HERO_VIDEO_POSTER = "/video/hero-poster.jpg" as const;
export const HERO_VIDEO_POSTER_WEBP = "/video/hero-poster.webp" as const;
export const HERO_VIDEO_POSTER_WEBP_1280 = "/video/hero-poster-1280.webp" as const;
export const HERO_VIDEO_POSTER_WEBP_640 = "/video/hero-poster-640.webp" as const;

/** LCP poster for hero (WebP preferred). */
export const HERO_LCP_PRELOAD_SRC = HERO_VIDEO_POSTER_WEBP_1280;

export const HERO_LCP_SRCSET =
  `${HERO_VIDEO_POSTER_WEBP_640} 640w, ${HERO_VIDEO_POSTER_WEBP_1280} 1280w, ${HERO_VIDEO_POSTER_WEBP} 1920w` as const;

/** @deprecated Use HERO_LCP_PRELOAD_SRC — kept for backwards compatibility. */
export const HERO_LCP_IMAGE = MAIN_CAROUSEL_IMAGES[0];
export const HERO_LCP_SRC = HERO_LCP_PRELOAD_SRC;

export function heroSlideWebpSrc(file: MainCarouselFile): string {
  return `/img/main-carousel/${file.replace(/\.jpg$/i, "-1280.webp")}`;
}

/** Filename in /public/img/about-us — host photo (About page). */
export const ABOUT_US_IMAGE = "38410942.jpg" as const;

/** Curated gallery for the home page (experience-focused). */
export const HOME_GALLERY_FILES = [
  "20260601_160317.jpg",
  "Velebit-15.jpg",
  "20260604_132039.jpg",
  "20260602_055146.jpg",
  "20260613_121546.jpg",
  "20260604_173207.jpg",
  "812808512.jpg",
  "Velebit-11.jpg",
  "20260615_052145.jpg",
  "whatsapp-2026-06-06-182702.jpeg",
] as const;

/** Homepage editorial photography — paths under /public/img */
export const HOME_IMAGES = {
  whySpecial: {
    mountain: "/img/why-special-mountain.jpg",
    sea: "/img/why-special-sea.jpg",
    stars: "/img/why-special-stars.jpg",
  },
  editorial: {
    outdoorKitchen: "/img/ljetnja-kuhinja-3.jpg",
    interior: DNEVNI_BORAVAK_IMAGE,
    surroundings: "/img/life-bacic-kuk-cabin.jpg",
  },
  accommodation: "/img/gallery/740290390.jpg",
  localFlavours: "/img/home-local-flavours.jpg",
  experienceMap: {
    mountain: "/img/velebit.jpg",
    sea: "/img/zavratnica/uvala.jpeg",
  },
} as const;

/** Accommodation page photography — curated from gallery (`gallery-content.ts` alt text). */
export const ACCOMMODATION_PAGE_IMAGE_SLOTS = ["hero", "theHouse", "outdoors"] as const;

export type AccommodationImageSlot = (typeof ACCOMMODATION_PAGE_IMAGE_SLOTS)[number];

export const ACCOMMODATION_PAGE_IMAGES: Record<AccommodationImageSlot, `/img/${string}` | null> = {
  /** Chalet and terrace with Velebit ridge — retreat overview. */
  hero: galleryAssetSrc("20260601_163937.jpg") as `/img/${string}`,
  /** Living room with fireplace — wood, windows, hearth. */
  theHouse: galleryAssetSrc("dnevni-boravak.jpg") as `/img/${string}`,
  /** Outdoor kitchen breakfast — terrace, summer kitchen, life outside. */
  outdoors: galleryAssetSrc("20260604_132039.jpg") as `/img/${string}`,
};

/**
 * Near places checkerboard — order matches `itineraryImageAlts` in messages.
 * ASCII paths only (folder on disk: /public/img/premuzic).
 */
export const NEARBY_GRID_IMAGE_SRCS = [
  "/img/paklenica/shutterstock_1617270832-scaled.jpg",
  "/img/pag/680708859_122096686946355213_4665446078753106627_n.jpg",
  "/img/zavratnica/uvala.jpeg",
  "/img/premuzic/681316395_122096686874355213_6869570910689081219_n.jpg",
  "/img/bacic-kuk.jpeg",
  "/img/karlobag.jpeg",
] as const;
