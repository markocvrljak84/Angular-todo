/**
 * Stable vacation-rental facts for JSON-LD (identifier must not change across locales).
 */
export const VACATION_RENTAL_IDENTIFIER = "stars-peak-chalet-bacic-duliba" as const;

export const VACATION_RENTAL_STATS = {
  occupancy: 6,
  numberOfBedrooms: 3,
  numberOfBathroomsTotal: 2,
  numberOfRooms: 5,
} as const;

/** Curated gallery filenames — bedroom, bathroom, common area, exterior (Google min. 8). */
export const VACATION_RENTAL_SCHEMA_IMAGES = [
  "578265540_122104807869084437_5111680495021054907_n.jpg",
  "812808252.jpg",
  "812160813.jpg",
  "581480514_122107015833084437_6966149935686680015_n.jpg",
  "740290390.jpg",
  "585009655_122107017075084437_1671659401079838438_n.jpg",
  "20260601_160317.jpg",
  "20260601_151354.jpg",
  "20260601_163743.jpg",
  "20260604_132039.jpg",
] as const;
