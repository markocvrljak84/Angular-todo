/**
 * Google Maps embed — jedan pin kad koristiš točne koordinate.
 *
 * U Google Kartama: desni klik na točno mjesto na tvojoj parceli → prvi red u kartici
 * su decimalni stupnjevi (ili „What's here?” pa kopiraj koordinate). Zalijepi u .env.local:
 *
 *   NEXT_PUBLIC_CONTACT_LAT=44.xxxxx
 *   NEXT_PUBLIC_CONTACT_LNG=15.xxxxx
 *
 * Opcionalno: NEXT_PUBLIC_CONTACT_MAP_ZOOM=18 (viši zoom = uža slika, manje „smetnji“ u kadru)
 *
 * Ako LAT/LNG nisu postavljeni, koristi se tekstualni upit — može pokazati više oznaka u blizini.
 */
export const CONTACT_MAP_QUERY = "Došen Dabar 1, Croatia";

function normalizeCoord(raw: string | undefined): string | null {
  const s = raw?.trim();
  if (!s) return null;
  const n = Number(s.replace(",", "."));
  return Number.isFinite(n) ? String(s.replace(",", ".")) : null;
}

export function getGoogleMapsUrls(localeHl: string): { embedSrc: string; openHref: string } {
  const lat = normalizeCoord(process.env.NEXT_PUBLIC_CONTACT_LAT);
  const lng = normalizeCoord(process.env.NEXT_PUBLIC_CONTACT_LNG);
  const z = process.env.NEXT_PUBLIC_CONTACT_MAP_ZOOM?.trim() || "17";
  const query = encodeURIComponent(CONTACT_MAP_QUERY);

  if (lat && lng) {
    return {
      embedSrc: `https://www.google.com/maps?q=${lat},${lng}&hl=${localeHl}&z=${z}&output=embed`,
      openHref: `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`,
    };
  }

  return {
    embedSrc: `https://www.google.com/maps?q=${query}&hl=${localeHl}&z=${z}&output=embed`,
    openHref: `https://www.google.com/maps/search/?api=1&query=${query}`,
  };
}
