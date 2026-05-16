/**
 * Single source of truth for contact & business name (must match Google Maps listing).
 * @see https://www.google.com/maps — "Velebit mountain chalet stars peak"
 */
export const SITE_CONTACT = {
  /** Exact name on Google Maps (NAP consistency). */
  businessName: "Velebit mountain chalet stars peak",
  phone: "+385 95 389 9912",
  email: "marko.cvrljak1@gmail.com",
  address: "Došen Dabar 1, Velebit, Karlobag, Croatia",
} as const;

export function telHref(phone: string = SITE_CONTACT.phone): string {
  return `tel:${phone.replace(/\s/g, "")}`;
}
