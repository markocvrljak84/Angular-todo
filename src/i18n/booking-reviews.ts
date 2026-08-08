import type { Locale } from "./config";

export type BookingReviewsContent = {
  title: string;
  prevLabel: string;
  nextLabel: string;
  quotes: string[];
};

/** Guest words kept in original English — authentic Booking.com reviews. */
const QUOTES = [
  "The house was cozy and fully equipped with everything we needed",
  "The staff were incredibly friendly and attentive to everything we needed",
  "Outside, there was a barbecue area, a designated spot for a small campfire, and a large open space with breathtaking views",
  "The location of the house provided complete peace and a perfect escape from the surroundings",
  "The property is very secluded and located deep in nature, which creates a unique and peaceful atmosphere",
  "Because of its remote location and the natural environment that comes with it, it may not be suitable for everyone",
] as const;

const en: BookingReviewsContent = {
  title: "What guests say",
  prevLabel: "Previous review",
  nextLabel: "Next review",
  quotes: [...QUOTES],
};

const hr: BookingReviewsContent = {
  title: "Što kažu gosti",
  prevLabel: "Prethodna recenzija",
  nextLabel: "Sljedeća recenzija",
  quotes: [...QUOTES],
};

const de: BookingReviewsContent = {
  title: "Was Gäste sagen",
  prevLabel: "Vorherige Bewertung",
  nextLabel: "Nächste Bewertung",
  quotes: [...QUOTES],
};

const fr: BookingReviewsContent = {
  title: "Ce que disent les hôtes",
  prevLabel: "Avis précédent",
  nextLabel: "Avis suivant",
  quotes: [...QUOTES],
};

const it: BookingReviewsContent = {
  title: "Cosa dicono gli ospiti",
  prevLabel: "Recensione precedente",
  nextLabel: "Recensione successiva",
  quotes: [...QUOTES],
};

const byLocale: Record<Locale, BookingReviewsContent> = { en, hr, de, fr, it };

export function getBookingReviews(locale: Locale): BookingReviewsContent {
  return byLocale[locale];
}
