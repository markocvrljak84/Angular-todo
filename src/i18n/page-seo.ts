import type { Locale } from "./config";
import type { SitePageKey } from "@/config/site-routes";

export type PageSeo = { title: string; description: string };

const en: Record<SitePageKey, PageSeo> = {
  home: {
    title: "Stars Peak — Summit, swim & stargaze on Velebit",
    description:
      "Wake up beneath Bačić Kuk, swim the Adriatic before lunch, stargaze on Velebit. Stars Peak — mountain experience in Bačić Duliba, Croatia.",
  },
  about: {
    title: "About Stars Peak — Bačić Duliba mountain chalet",
    description:
      "Meet Stars Peak in Bačić Duliba — Velebit wilderness, Bačić Kuk views, fireside evenings and the Adriatic 30 minutes away. Facilities and hosts.",
  },
  gallery: {
    title: "Photo gallery — Stars Peak Velebit",
    description:
      "Photos from Stars Peak — mountain trails, fireside evenings, sea days and night skies at Bačić Duliba on Velebit.",
  },
  goodToKnow: {
    title: "Good to know — practical info for your stay",
    description:
      "Directions, generator, Wi‑Fi, house rules and local tips for staying at Stars Peak, Bačić Duliba, Velebit.",
  },
  hiking: {
    title: "Hiking routes from Stars Peak",
    description:
      "Velebit hiking from Bačić Duliba — Bačić Kuk, Budakovo Brdo, Kiza with GPX files, maps and route descriptions from Stars Peak.",
  },
  nearby: {
    title: "Day trips — sea, islands & national parks",
    description:
      "From Stars Peak reach Paklenica, Pag, Zavratnica and Premužić trail — mountain base, Adriatic adventures within a day.",
  },
  guides: {
    title: "Guides & free Velebit experience PDF",
    description:
      "Trail guides, stargazing tips and our free PDF — 5 unforgettable experiences on Velebit. Sign up from Stars Peak.",
  },
  contact: {
    title: "Contact & booking — Stars Peak",
    description:
      "Contact Marko and Ljiljana at Stars Peak, Došen Dabar 1, Bačić Duliba. Phone, email, map and Booking.com.",
  },
};

const hr: Record<SitePageKey, PageSeo> = {
  home: {
    title: "Stars Peak — vrh, more i zvijezde na Velebitu",
    description:
      "Probudite se ispod Bačić kuka, kupajte se u Jadranu prije ručka, promatrajte zvijezde na Velebitu. Iskustvo planine u Bačić Dulibi, Hrvatska.",
  },
  about: {
    title: "O Stars Peaku — planinska kuća Bačić Duliba",
    description:
      "Upoznajte Stars Peak u Bačić Dulibi — velebitska divljina, pogled na Bačić kuk, večeri uz vatru i Jadran na 30 minuta. Sadržaji i domaćini.",
  },
  gallery: {
    title: "Galerija fotografija — Stars Peak Velebit",
    description:
      "Fotografije sa Stars Peaka — planinske staze, večeri uz vatru, dani na moru i noćno nebo u Bačić Dulibi na Velebitu.",
  },
  goodToKnow: {
    title: "Dobro za znati — praktične informacije",
    description:
      "Upute za dolazak, agregat, Wi‑Fi, kućni red i lokalni savjeti za boravak na Stars Peaku, Bačić Duliba, Velebit.",
  },
  hiking: {
    title: "Planinarske rute sa Stars Peaka",
    description:
      "Planinarenje Velebitom iz Bačić Dulibe — Bačić kuk, Budakovo brdo, Kiza s GPX datotekama, kartama i opisima ruta.",
  },
  nearby: {
    title: "Izleti u blizini — more, otoci i parkovi",
    description:
      "Sa Stars Peaka do Paklenice, Paga, Zavratnice i Premužićeve staze — baza na planini, jadranske avanture u jednom danu.",
  },
  guides: {
    title: "Vodiči i besplatan PDF vodič za Velebit",
    description:
      "Planinarski vodiči, savjeti za promatranje zvijezda i besplatan PDF — 5 nezaboravnih iskustava na Velebitu.",
  },
  contact: {
    title: "Kontakt i rezervacija — Stars Peak",
    description:
      "Kontaktirajte Marka i Ljiljanu, Stars Peak, Došen Dabar 1, Bačić Duliba. Telefon, e-mail, karta i Booking.com.",
  },
};

const de: Record<SitePageKey, PageSeo> = {
  home: {
    title: "Stars Peak — Gipfel, Meer & Sterne am Velebit",
    description:
      "Erwachen Sie unter Bačić Kuk, baden Sie mittags in der Adria, beobachten Sie Sterne am Velebit. Bergerlebnis in Bačić Duliba, Kroatien.",
  },
  about: {
    title: "Über Stars Peak — Berghütte Bačić Duliba",
    description:
      "Stars Peak in Bačić Duliba — Velebit-Wildnis, Blick auf Bačić Kuk, Abende am Feuer, Adria in 30 Minuten. Ausstattung und Gastgeber.",
  },
  gallery: {
    title: "Fotogalerie — Stars Peak Velebit",
    description:
      "Fotos von Stars Peak — Bergwege, Abende am Feuer, Meerestage und Nachthimmel in Bačić Duliba am Velebit.",
  },
  goodToKnow: {
    title: "Gut zu wissen — praktische Infos",
    description:
      "Anfahrt, Generator, WLAN, Hausregeln und lokale Tipps für Stars Peak, Bačić Duliba, Velebit.",
  },
  hiking: {
    title: "Wanderungen ab Stars Peak",
    description:
      "Velebit-Wanderungen ab Bačić Duliba — Bačić Kuk, Budakovo Brdo, Kiza mit GPX, Karten und Routenbeschreibungen.",
  },
  nearby: {
    title: "Tagesausflüge — Meer, Inseln & Parks",
    description:
      "Von Stars Peak nach Paklenica, Pag, Zavratnica und Premužić-Pfad — Bergbasis, Adriaausflüge an einem Tag.",
  },
  guides: {
    title: "Guides & kostenloser Velebit-PDF-Guide",
    description:
      "Wander-Guides, Sternenhimmel-Tipps und kostenloses PDF — 5 unvergessliche Erlebnisse am Velebit.",
  },
  contact: {
    title: "Kontakt & Buchung — Stars Peak",
    description:
      "Marko und Ljiljana, Stars Peak, Došen Dabar 1, Bačić Duliba. Telefon, E-Mail, Karte und Booking.com.",
  },
};

const fr: Record<SitePageKey, PageSeo> = {
  home: {
    title: "Stars Peak — sommet, mer et étoiles sur le Velebit",
    description:
      "Réveillez-vous sous Bačić Kuk, baignez-vous en Adriatique avant le déjeuner. Expérience montagne à Bačić Duliba, Croatie.",
  },
  about: {
    title: "À propos de Stars Peak — chalet Bačić Duliba",
    description:
      "Stars Peak à Bačić Duliba — nature du Velebit, vue sur Bačić Kuk, soirées au feu, Adriatique à 30 minutes.",
  },
  gallery: {
    title: "Galerie photo — Stars Peak Velebit",
    description:
      "Photos de Stars Peak — sentiers, soirées au feu, journées mer et ciel étoilé à Bačić Duliba.",
  },
  goodToKnow: {
    title: "Bon à savoir — infos pratiques",
    description:
      "Accès, générateur, Wi‑Fi, règlement et conseils locaux pour Stars Peak, Bačić Duliba.",
  },
  hiking: {
    title: "Randonnées depuis Stars Peak",
    description:
      "Randonnées Velebit depuis Bačić Duliba — Bačić Kuk, Budakovo Brdo, Kiza avec GPX et cartes.",
  },
  nearby: {
    title: "Excursions — mer, îles et parcs",
    description:
      "Depuis Stars Peak : Paklenica, Pag, Zavratnica et sentier Premužić — base montagne, mer en une journée.",
  },
  guides: {
    title: "Guides & PDF gratuit Velebit",
    description:
      "Guides sentiers, astrologie et PDF gratuit — 5 expériences inoubliables sur le Velebit.",
  },
  contact: {
    title: "Contact & réservation — Stars Peak",
    description:
      "Marko et Ljiljana, Stars Peak, Došen Dabar 1, Bačić Duliba. Téléphone, e-mail, carte et Booking.com.",
  },
};

const it: Record<SitePageKey, PageSeo> = {
  home: {
    title: "Stars Peak — cima, mare e stelle sul Velebit",
    description:
      "Svegliati sotto Bačić Kuk, nuota in Adriatico prima di pranzo. Esperienza di montagna a Bačić Duliba, Croazia.",
  },
  about: {
    title: "Su Stars Peak — chalet Bačić Duliba",
    description:
      "Stars Peak a Bačić Duliba — natura del Velebit, vista su Bačić Kuk, serate al fuoco, Adriatico a 30 minuti.",
  },
  gallery: {
    title: "Galleria fotografica — Stars Peak Velebit",
    description:
      "Foto da Stars Peak — sentieri, serate al fuoco, giornate al mare e cielo stellato a Bačić Duliba.",
  },
  goodToKnow: {
    title: "Da sapere — informazioni pratiche",
    description:
      "Indicazioni, generatore, Wi‑Fi, regole della casa e consigli locali per Stars Peak, Bačić Duliba.",
  },
  hiking: {
    title: "Escursioni da Stars Peak",
    description:
      "Escursioni sul Velebit da Bačić Duliba — Bačić Kuk, Budakovo Brdo, Kiza con GPX e mappe.",
  },
  nearby: {
    title: "Gite — mare, isole e parchi",
    description:
      "Da Stars Peak a Paklenica, Pag, Zavratnica e sentiero Premužić — base in montagna, mare in un giorno.",
  },
  guides: {
    title: "Guide & PDF gratuito sul Velebit",
    description:
      "Guide sentieri, osservazione stelle e PDF gratuito — 5 esperienze indimenticabili sul Velebit.",
  },
  contact: {
    title: "Contatti & prenotazione — Stars Peak",
    description:
      "Marko e Ljiljana, Stars Peak, Došen Dabar 1, Bačić Duliba. Telefono, e-mail, mappa e Booking.com.",
  },
};

const byLocale: Record<Locale, Record<SitePageKey, PageSeo>> = {
  en,
  hr,
  de,
  fr,
  it,
};

export function getPageSeo(locale: Locale, page: SitePageKey): PageSeo {
  return byLocale[locale][page];
}
