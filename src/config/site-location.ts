import { SITE_CONTACT } from "./site-contact";

/** Geographic & SEO constants — single source for meta tags and JSON-LD. */
export const SITE_GEO = {
  brandName: SITE_CONTACT.businessName,
  regionCode: "HR",
  /** Hamlet / settlement on Velebit (primary locality for SEO). */
  settlement: "Bačić Duliba",
  placename: "Bačić Duliba, Velebit, Croatia",
  placenameHr: "Bačić Duliba, Velebit, Hrvatska",
  locality: "Karlobag",
  administrativeArea: "Lika-Senj County",
  mountain: "Velebit",
  naturePark: "Velebit Nature Park",
  countryName: "Croatia",
  countryNameHr: "Hrvatska",
  /** Došen Dabar, Velebit (Wikipedia: 44°34′N 15°07′E) — override via NEXT_PUBLIC_CONTACT_LAT/LNG */
  defaultLatitude: 44.567,
  defaultLongitude: 15.117,
} as const;

function parseCoord(raw: string | undefined, fallback: number): number {
  const s = raw?.trim();
  if (!s) return fallback;
  const n = Number(s.replace(",", "."));
  return Number.isFinite(n) ? n : fallback;
}

export function getSiteCoordinates(): { latitude: number; longitude: number } {
  return {
    latitude: parseCoord(process.env.NEXT_PUBLIC_CONTACT_LAT, SITE_GEO.defaultLatitude),
    longitude: parseCoord(process.env.NEXT_PUBLIC_CONTACT_LNG, SITE_GEO.defaultLongitude),
  };
}

export function getPostalAddress() {
  const streetAddress =
    SITE_CONTACT.address.split(",")[0]?.trim() ?? SITE_CONTACT.address;
  return {
    "@type": "PostalAddress" as const,
    streetAddress,
    addressLocality: SITE_GEO.settlement,
    addressRegion: SITE_GEO.administrativeArea,
    addressCountry: SITE_GEO.regionCode,
  };
}

/** Meta tags for Next.js `metadata.other` and root `<head>`. */
export function getGeoMetaOther(): Record<string, string> {
  const { latitude, longitude } = getSiteCoordinates();
  return {
    "geo.region": SITE_GEO.regionCode,
    "geo.placename": SITE_GEO.placename,
    "geo.position": `${latitude};${longitude}`,
    ICBM: `${latitude}, ${longitude}`,
  };
}
