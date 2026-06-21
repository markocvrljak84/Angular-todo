/**
 * Single source of truth for contact & business name (must match Google Maps listing).
 * @see https://www.google.com/maps — "Velebit mountain chalet stars peak"
 */
/** Booking.com listing */
export const BOOKING_URL =
  "https://www.booking.com/hotel/hr/chalet-velebit-mountain-retreat.hr.html" as const;

export const SITE_CONTACT = {
  /** Short brand for header logo and hero headline. */
  brandMark: "STARS PEAK",
  heroTitle: "Stars Peak",
  /** Exact name on Google Maps (NAP consistency). */
  businessName: "Velebit mountain chalet Stars Peak",
  phone: "+385 95 389 9912",
  phoneSecondary: "+385 91 337 7088",
  email: "marko.cvrljak1@gmail.com",
  address: "Došen Dabar 1, Karlobag, Croatia",
} as const;

/** Guide signup — FormSubmit forwards to host inbox (activate via confirmation email). */
export const GUIDE_SIGNUP_FORM_ACTION =
  `https://formsubmit.co/${encodeURIComponent(SITE_CONTACT.email)}` as const;

/** AJAX endpoint — submit without leaving the site (avoids baked-in _next URLs). */
export const GUIDE_SIGNUP_FORM_AJAX_ACTION =
  `${GUIDE_SIGNUP_FORM_ACTION}/ajax` as const;

export function telHref(phone: string = SITE_CONTACT.phone): string {
  return `tel:${phone.replace(/\s/g, "")}`;
}

export function whatsappHref(phone: string): string {
  return `https://wa.me/${phone.replace(/\D/g, "")}`;
}
