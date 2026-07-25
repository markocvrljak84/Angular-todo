import type { Locale } from "./config";
import type { SitePageKey } from "@/config/site-routes";

export type PageSeo = { title: string; description: string };

const en: Record<SitePageKey, PageSeo> = {
  home: {
    title:
      "Mountain Retreat on Velebit, Croatia | Hiking, Nature & Stargazing – Stars Peak",
    description:
      "Private mountain cabin in Bačić Duliba on Velebit. Wake up under Bačić Kuk, reach the Adriatic in 30 minutes, and stargaze under dark skies — Stars Peak, Croatia.",
  },
  about: {
    title:
      "Off-Grid Mountain Home on Velebit | Marko & Ljiljana’s Stars Peak Story",
    description:
      "How Marko and Ljiljana rebuilt a wooden chalet into Stars Peak — a minimalist, off-grid mountain home with views of Bačić Kuk on Velebit, Croatia.",
  },
  accommodation: {
    title:
      "Mountain Cabin on Velebit | Off-Grid Holiday House in Croatia – Stars Peak",
    description:
      "Stay in a private off-grid mountain cabin for up to four guests on Velebit. Fireplace, outdoor kitchen, fast Wi‑Fi and trails from the door at Stars Peak, Croatia.",
  },
  experiences: {
    title:
      "Things to Do on Velebit | Hiking, Stargazing & Adriatic Day Trips – Stars Peak",
    description:
      "What to do on Velebit from Stars Peak: hiking Bačić Kuk, Adriatic day trips, local food and quiet mountain evenings — mountain and sea in one stay.",
  },
  gallery: {
    title:
      "Stars Peak Photo Gallery | Mountain Cabin, Velebit Views & Night Skies",
    description:
      "Photos from Stars Peak on Velebit — mountain trails, cabin interiors, fireside evenings, Adriatic days and star-filled night skies in Bačić Duliba.",
  },
  goodToKnow: {
    title:
      "Practical Tips for Stars Peak | Directions, Stay Info & Local Advice",
    description:
      "Directions to Bačić Duliba, generator, Wi‑Fi, outdoor kitchen and local tips for your stay at Stars Peak mountain cabin on Velebit, Croatia.",
  },
  hiking: {
    title:
      "Best Hikes from Stars Peak | Velebit Trails with Maps & GPX",
    description:
      "Velebit hiking from Bačić Duliba — Bačić Kuk, Budakovo Brdo and Kiza with maps, GPX files and route notes from Stars Peak mountain cabin.",
  },
  nearby: {
    title:
      "Day Trips from Velebit | Paklenica, Pag, Zavratnica & More – Stars Peak",
    description:
      "Day trips from Stars Peak: Paklenica National Park, Pag island, Zavratnica cove and Premužić Trail — mountain base, Adriatic adventures in one day.",
  },
  journal: {
    title:
      "Velebit Travel Guide | Hiking Tips, Nature & Croatia Stories – Stars Peak",
    description:
      "Velebit travel guide from Stars Peak — hiking tips, nature notes, stargazing, seasons and Croatia day-trip stories for a longer mountain stay.",
  },
  darkSkyStargazing: {
    title:
      "Stargazing Cabin in Croatia – Dark Sky Experience on Velebit | Stars Peak",
    description:
      "Dark sky accommodation on Velebit above Bačić Duliba. Low light pollution, Milky Way nights and a private stargazing cabin at Stars Peak, Croatia.",
  },
  velebitHikingRetreat: {
    title:
      "Hiking Retreat on Velebit Mountain – Stay Near Premužić Trail | Stars Peak",
    description:
      "Hiking accommodation on Velebit with trails from the door, Premužić Trail access, Bačić Kuk, GPX routes and Adriatic day trips from Stars Peak.",
  },
  offGridMountainCabin: {
    title:
      "Off Grid Mountain Cabin Croatia – Solar Powered Retreat | Stars Peak",
    description:
      "Off-grid mountain cabin on Velebit with solar power, rainwater systems and remote quiet — a sustainable holiday house at Stars Peak, Croatia.",
  },
  remoteWork: {
    title:
      "Remote Work in Nature | Mountain Cabin with Fast Internet – Stars Peak",
    description:
      "Work remotely from a quiet mountain cabin on Velebit. Reliable fast Wi‑Fi, calm focus and nature on the doorstep at Stars Peak, Croatia.",
  },
  photographyRetreat: {
    title:
      "Photography Retreat on Velebit | Landscape & Astrophotography – Stars Peak",
    description:
      "Photography retreat on Velebit for landscape and night-sky work — Bačić Kuk light, dark skies and a quiet cabin base at Stars Peak, Croatia.",
  },
  press: {
    title:
      "Press & Partners | Stars Peak on Velebit – Media Kit & Collaborations",
    description:
      "Press kit for Stars Peak on Velebit: Jutarnji feature, facts for editors, and collaboration notes for hiking blogs, photographers and outdoor media.",
  },
  htmlSitemap: {
    title: "Site Map | Stars Peak Mountain Cabin on Velebit",
    description:
      "Browse all Stars Peak pages — accommodation, hiking retreat, stargazing, journal, press and practical information for your Velebit stay.",
  },
  contact: {
    title:
      "Book Stars Peak | Contact & Mountain Cabin Booking in Croatia",
    description:
      "Contact Marko and Ljiljana to book Stars Peak — Došen Dabar 1, Bačić Duliba, Velebit. Email, WhatsApp, map and Booking.com.",
  },
};

const hr: Record<SitePageKey, PageSeo> = {
  home: {
    title:
      "Planinski retreat na Velebitu, Hrvatska | Planinarenje, priroda i zvijezde – Stars Peak",
    description:
      "Privatna planinska kuća u Bačić Dulibi na Velebitu. Jutro ispod Bačić kuka, Jadran za 30 minuta i zvijezde noću — Stars Peak, Hrvatska.",
  },
  about: {
    title:
      "Off-grid planinska kuća na Velebitu | Priča Marka i Ljiljane – Stars Peak",
    description:
      "Kako su Marko i Ljiljana pretvorili drvenu kuću u Stars Peak — minimalistički off-grid dom s pogledom na Bačić kuk na Velebitu.",
  },
  accommodation: {
    title:
      "Planinska kuća na Velebitu | Off-grid kuća za odmor u Hrvatskoj – Stars Peak",
    description:
      "Privatna off-grid planinska kuća za do 4 gosta na Velebitu. Kamin, vanjska kuhinja, brzi Wi‑Fi i staze od kuće — Stars Peak.",
  },
  experiences: {
    title:
      "Što raditi na Velebitu | Planinarenje, zvijezde i izleti na Jadran – Stars Peak",
    description:
      "Što raditi na Velebitu sa Stars Peaka: uspon na Bačić kuk, izleti na Jadran, lokalna hrana i tihe planinske večeri.",
  },
  gallery: {
    title:
      "Galerija Stars Peak | Planinska kuća, Velebit i noćno nebo",
    description:
      "Fotografije sa Stars Peaka — staze, interijer, večeri uz vatru, dani na moru i zvjezdano nebo u Bačić Dulibi.",
  },
  goodToKnow: {
    title:
      "Praktične informacije za Stars Peak | Dolazak, boravak i savjeti",
    description:
      "Upute do Bačić Dulibe, agregat, Wi‑Fi, vanjska kuhinja i lokalni savjeti za boravak u planinskoj kući Stars Peak.",
  },
  hiking: {
    title:
      "Najbolje staze sa Stars Peaka | Planinarenje Velebitom s kartama i GPX",
    description:
      "Planinarenje Velebitom iz Bačić Dulibe — Bačić kuk, Budakovo brdo i Kiza s kartama, GPX datotekama i opisima ruta.",
  },
  nearby: {
    title:
      "Izleti s Velebita | Paklenica, Pag, Zavratnica i više – Stars Peak",
    description:
      "Dnevni izleti sa Stars Peaka: NP Paklenica, Pag, Zavratnica i Premužićeva staza — baza na planini, Jadran u jednom danu.",
  },
  journal: {
    title:
      "Vodič za Velebit | Planinarenje, priroda i priče iz Hrvatske – Stars Peak",
    description:
      "Vodič za Velebit sa Stars Peaka — savjeti za planinarenje, priroda, zvijezde, godišnja doba i izleti u okolici.",
  },
  darkSkyStargazing: {
    title:
      "Stargazing cabin u Hrvatskoj – dark sky iskustvo na Velebitu | Stars Peak",
    description:
      "Dark sky smještaj na Velebitu iznad Bačić Dulibe. Malo svjetlosnog onečišćenja, Mliječni put i privatna kuća za zvijezde — Stars Peak.",
  },
  velebitHikingRetreat: {
    title:
      "Hiking retreat na Velebitu – smještaj blizu Premužićeve staze | Stars Peak",
    description:
      "Planinarski smještaj na Velebitu: staze od kuće, Premužićeva staza, Bačić kuk, GPX rute i izleti na Jadran sa Stars Peaka.",
  },
  offGridMountainCabin: {
    title:
      "Off-grid planinska kuća Hrvatska – solar retreat | Stars Peak",
    description:
      "Off-grid planinska kuća na Velebitu sa solarnom energijom, kišnicom i mirom — održiva kuća za odmor Stars Peak.",
  },
  remoteWork: {
    title:
      "Remote work u prirodi | Planinska kuća s brzim internetom – Stars Peak",
    description:
      "Radite remote iz mirne planinske kuće na Velebitu. Pouzdan brzi Wi‑Fi, fokus i priroda pred vratima — Stars Peak.",
  },
  photographyRetreat: {
    title:
      "Fotografski retreat na Velebitu | Pejzaž i astrofotografija – Stars Peak",
    description:
      "Fotografski retreat na Velebitu za pejzaž i noćno nebo — Bačić kuk, tamno nebo i mirna baza Stars Peak.",
  },
  press: {
    title:
      "Press i partneri | Stars Peak na Velebitu – media kit i suradnje",
    description:
      "Press kit za Stars Peak: Jutarnji, činjenice za urednike i suradnja s planinarskim blogovima, fotografima i outdoor medijima.",
  },
  htmlSitemap: {
    title: "Mapa stranica | Stars Peak planinska kuća na Velebitu",
    description:
      "Pregled svih stranica Stars Peaka — smještaj, hiking retreat, zvijezde, journal, press i praktične informacije.",
  },
  contact: {
    title:
      "Rezervacija Stars Peak | Kontakt i booking planinske kuće u Hrvatskoj",
    description:
      "Kontaktirajte Marka i Ljiljanu za Stars Peak — Došen Dabar 1, Bačić Duliba, Velebit. E-mail, WhatsApp, karta i Booking.com.",
  },
};

const de: Record<SitePageKey, PageSeo> = {
  home: {
    title:
      "Bergretreat am Velebit, Kroatien | Wandern, Natur & Sterne – Stars Peak",
    description:
      "Private Berghütte in Bačić Duliba am Velebit. Aufwachen unter Bačić Kuk, Adria in 30 Minuten, Sternenhimmel — Stars Peak, Kroatien.",
  },
  about: {
    title:
      "Off-Grid Berghaus am Velebit | Geschichte von Marko & Ljiljana – Stars Peak",
    description:
      "Wie Marko und Ljiljana ein Holzhaus in Stars Peak verwandelten — minimalistisch, off-grid, mit Blick auf Bačić Kuk.",
  },
  accommodation: {
    title:
      "Berghütte am Velebit | Off-Grid Ferienhaus in Kroatien – Stars Peak",
    description:
      "Private Off-Grid Berghütte für bis zu 4 Gäste am Velebit. Kamin, Außenküche, schnelles WLAN und Wanderwege ab der Haustür.",
  },
  experiences: {
    title:
      "Aktivitäten am Velebit | Wandern, Sterne & Adria-Tagesausflüge – Stars Peak",
    description:
      "Was man am Velebit von Stars Peak aus unternehmen kann: Wandern, Adria-Ausflüge, lokale Küche und stille Bergabende.",
  },
  gallery: {
    title:
      "Fotogalerie Stars Peak | Berghütte, Velebit & Nachthimmel",
    description:
      "Fotos von Stars Peak — Wanderwege, Interieur, Abende am Feuer, Meerestage und Sternenhimmel in Bačić Duliba.",
  },
  goodToKnow: {
    title:
      "Praktische Infos zu Stars Peak | Anfahrt, Aufenthalt & Tipps",
    description:
      "Anfahrt nach Bačić Duliba, Generator, WLAN, Außenküche und lokale Tipps für Ihren Aufenthalt in der Berghütte Stars Peak.",
  },
  hiking: {
    title:
      "Beste Wanderungen ab Stars Peak | Velebit-Wege mit Karten & GPX",
    description:
      "Velebit-Wandern ab Bačić Duliba — Bačić Kuk, Budakovo Brdo und Kiza mit Karten, GPX und Routeninfos.",
  },
  nearby: {
    title:
      "Tagesausflüge vom Velebit | Paklenica, Pag, Zavratnica – Stars Peak",
    description:
      "Tagesausflüge ab Stars Peak: Nationalpark Paklenica, Pag, Zavratnica und Premužić-Pfad — Bergbasis, Adria an einem Tag.",
  },
  journal: {
    title:
      "Velebit Reiseführer | Wandertipps, Natur & Kroatien-Geschichten – Stars Peak",
    description:
      "Velebit-Reiseführer von Stars Peak — Wandertipps, Natur, Sterne, Jahreszeiten und Ausflugsgeschichten.",
  },
  darkSkyStargazing: {
    title:
      "Stargazing Cabin in Kroatien – Dark-Sky Erlebnis am Velebit | Stars Peak",
    description:
      "Dark-Sky Unterkunft am Velebit über Bačić Duliba. Wenig Lichtverschmutzung, Milchstraße und private Hütte — Stars Peak.",
  },
  velebitHikingRetreat: {
    title:
      "Wanderretreat am Velebit – Unterkunft nahe Premužić-Pfad | Stars Peak",
    description:
      "Wanderunterkunft am Velebit: Wege ab der Haustür, Premužić-Pfad, Bačić Kuk, GPX und Adria-Ausflüge ab Stars Peak.",
  },
  offGridMountainCabin: {
    title:
      "Off-Grid Berghütte Kroatien – Solar-powered Retreat | Stars Peak",
    description:
      "Off-Grid Berghütte am Velebit mit Solarstrom, Regenwasser und Ruhe — nachhaltiges Ferienhaus Stars Peak.",
  },
  remoteWork: {
    title:
      "Remote Work in der Natur | Berghütte mit schnellem Internet – Stars Peak",
    description:
      "Remote arbeiten in einer ruhigen Berghütte am Velebit. Schnelles WLAN, Fokus und Natur vor der Tür — Stars Peak.",
  },
  photographyRetreat: {
    title:
      "Fotografie-Retreat am Velebit | Landschaft & Astrofotografie – Stars Peak",
    description:
      "Fotografie-Retreat am Velebit für Landschaft und Nachthimmel — Bačić Kuk, dunkler Himmel und ruhige Basis Stars Peak.",
  },
  press: {
    title:
      "Presse & Partner | Stars Peak am Velebit – Media Kit & Kooperationen",
    description:
      "Presskit für Stars Peak: Jutarnji-Beitrag, Fakten für Redaktionen und Kooperationen mit Wanderblogs, Fotografen und Outdoor-Medien.",
  },
  htmlSitemap: {
    title: "Sitemap | Stars Peak Berghütte am Velebit",
    description:
      "Alle Stars-Peak-Seiten — Unterkunft, Wanderretreat, Sterne, Journal, Presse und praktische Infos.",
  },
  contact: {
    title:
      "Stars Peak buchen | Kontakt & Ferienhaus-Buchung in Kroatien",
    description:
      "Kontaktieren Sie Marko und Ljiljana — Stars Peak, Došen Dabar 1, Bačić Duliba. Telefon, E-Mail, Karte und Booking.com.",
  },
};

const fr: Record<SitePageKey, PageSeo> = {
  home: {
    title:
      "Retreat de montagne sur le Velebit, Croatie | Randonnée, nature & étoiles – Stars Peak",
    description:
      "Chalet privé à Bačić Duliba sur le Velebit. Réveil sous Bačić Kuk, Adriatique en 30 minutes, ciel étoilé — Stars Peak, Croatie.",
  },
  about: {
    title:
      "Maison de montagne off-grid sur le Velebit | L’histoire de Marko & Ljiljana",
    description:
      "Comment Marko et Ljiljana ont transformé un chalet en bois en Stars Peak — maison minimaliste off-grid face à Bačić Kuk.",
  },
  accommodation: {
    title:
      "Chalet de montagne sur le Velebit | Maison de vacances off-grid en Croatie – Stars Peak",
    description:
      "Chalet off-grid privé pour jusqu’à 4 personnes sur le Velebit. Cheminée, cuisine extérieure, Wi‑Fi rapide et sentiers depuis la porte.",
  },
  experiences: {
    title:
      "Que faire sur le Velebit | Randonnée, étoiles & excursions Adriatique – Stars Peak",
    description:
      "Activités sur le Velebit depuis Stars Peak : randonnée, excursions Adriatique, gastronomie locale et soirées calmes en montagne.",
  },
  gallery: {
    title:
      "Galerie photo Stars Peak | Chalet, Velebit & ciels nocturnes",
    description:
      "Photos de Stars Peak — sentiers, intérieur, soirées au feu, journées mer et ciel étoilé à Bačić Duliba.",
  },
  goodToKnow: {
    title:
      "Infos pratiques Stars Peak | Accès, séjour & conseils locaux",
    description:
      "Accès à Bačić Duliba, générateur, Wi‑Fi, cuisine extérieure et conseils locaux pour votre séjour à Stars Peak.",
  },
  hiking: {
    title:
      "Meilleures randonnées depuis Stars Peak | Sentiers Velebit avec cartes & GPX",
    description:
      "Randonnées Velebit depuis Bačić Duliba — Bačić Kuk, Budakovo Brdo et Kiza avec cartes, GPX et descriptions.",
  },
  nearby: {
    title:
      "Excursions depuis le Velebit | Paklenica, Pag, Zavratnica – Stars Peak",
    description:
      "Excursions depuis Stars Peak : parc de Paklenica, Pag, Zavratnica et sentier Premužić — montagne et mer en une journée.",
  },
  journal: {
    title:
      "Guide de voyage Velebit | Randonnée, nature & récits de Croatie – Stars Peak",
    description:
      "Guide Velebit depuis Stars Peak — conseils randonnée, nature, étoiles, saisons et récits d’excursions en Croatie.",
  },
  darkSkyStargazing: {
    title:
      "Stargazing cabin en Croatie – expérience dark sky sur le Velebit | Stars Peak",
    description:
      "Hébergement dark sky sur le Velebit au-dessus de Bačić Duliba. Peu de pollution lumineuse et chalet privé — Stars Peak.",
  },
  velebitHikingRetreat: {
    title:
      "Retreat randonnée sur le Velebit – près du sentier Premužić | Stars Peak",
    description:
      "Hébergement randonnée sur le Velebit : sentiers depuis la porte, Premužić, Bačić Kuk, GPX et excursions Adriatique.",
  },
  offGridMountainCabin: {
    title:
      "Chalet off-grid Croatie – retreat solaire sur le Velebit | Stars Peak",
    description:
      "Chalet off-grid sur le Velebit avec solaire, eau de pluie et calme — maison de vacances durable Stars Peak.",
  },
  remoteWork: {
    title:
      "Télétravail en nature | Chalet de montagne avec internet rapide – Stars Peak",
    description:
      "Travaillez à distance depuis un chalet calme sur le Velebit. Wi‑Fi rapide, concentration et nature à la porte — Stars Peak.",
  },
  photographyRetreat: {
    title:
      "Retreat photo sur le Velebit | Paysage & astrophotographie – Stars Peak",
    description:
      "Retreat photo sur le Velebit pour paysage et ciel nocturne — Bačić Kuk, ciel sombre et base calme Stars Peak.",
  },
  press: {
    title:
      "Presse & partenaires | Stars Peak sur le Velebit – kit média",
    description:
      "Kit presse Stars Peak : article Jutarnji, faits pour rédactions et collaborations blogs randonnée, photographes et médias outdoor.",
  },
  htmlSitemap: {
    title: "Plan du site | Chalet Stars Peak sur le Velebit",
    description:
      "Toutes les pages Stars Peak — hébergement, randonnée, étoiles, journal, presse et infos pratiques.",
  },
  contact: {
    title:
      "Réserver Stars Peak | Contact & réservation chalet en Croatie",
    description:
      "Contactez Marko et Ljiljana — Stars Peak, Došen Dabar 1, Bačić Duliba. Téléphone, e-mail, carte et Booking.com.",
  },
};

const it: Record<SitePageKey, PageSeo> = {
  home: {
    title:
      "Retreat di montagna sul Velebit, Croazia | Escursioni, natura e stelle – Stars Peak",
    description:
      "Chalet privato a Bačić Duliba sul Velebit. Sveglia sotto Bačić Kuk, Adriatico in 30 minuti, cielo stellato — Stars Peak, Croazia.",
  },
  about: {
    title:
      "Casa di montagna off-grid sul Velebit | La storia di Marko e Ljiljana",
    description:
      "Come Marko e Ljiljana hanno trasformato un chalet di legno in Stars Peak — casa minimalista off-grid con vista su Bačić Kuk.",
  },
  accommodation: {
    title:
      "Chalet di montagna sul Velebit | Casa vacanze off-grid in Croazia – Stars Peak",
    description:
      "Chalet off-grid privato per fino a 4 ospiti sul Velebit. Camino, cucina esterna, Wi‑Fi veloce e sentieri dalla porta.",
  },
  experiences: {
    title:
      "Cosa fare sul Velebit | Escursioni, stelle e gite in Adriatico – Stars Peak",
    description:
      "Cosa fare sul Velebit da Stars Peak: escursioni, gite in Adriatico, cucina locale e serene serate di montagna.",
  },
  gallery: {
    title:
      "Galleria foto Stars Peak | Chalet, Velebit e cieli notturni",
    description:
      "Foto da Stars Peak — sentieri, interni, serate al fuoco, giornate al mare e cielo stellato a Bačić Duliba.",
  },
  goodToKnow: {
    title:
      "Info pratiche Stars Peak | Indicazioni, soggiorno e consigli",
    description:
      "Come arrivare a Bačić Duliba, generatore, Wi‑Fi, cucina esterna e consigli locali per il soggiorno a Stars Peak.",
  },
  hiking: {
    title:
      "Migliori escursioni da Stars Peak | Sentieri del Velebit con mappe e GPX",
    description:
      "Escursioni sul Velebit da Bačić Duliba — Bačić Kuk, Budakovo Brdo e Kiza con mappe, GPX e descrizioni.",
  },
  nearby: {
    title:
      "Gite dal Velebit | Paklenica, Pag, Zavratnica e altro – Stars Peak",
    description:
      "Gite giornaliere da Stars Peak: Parco di Paklenica, Pag, Zavratnica e sentiero Premužić — montagna e mare in un giorno.",
  },
  journal: {
    title:
      "Guida di viaggio Velebit | Escursioni, natura e storie dalla Croazia – Stars Peak",
    description:
      "Guida al Velebit da Stars Peak — consigli escursionistici, natura, stelle, stagioni e racconti di gite in Croazia.",
  },
  darkSkyStargazing: {
    title:
      "Stargazing cabin in Croazia – dark sky sul Velebit | Stars Peak",
    description:
      "Alloggio dark sky sul Velebit sopra Bačić Duliba. Poca inquinamento luminoso e chalet privato — Stars Peak.",
  },
  velebitHikingRetreat: {
    title:
      "Hiking retreat sul Velebit – vicino al sentiero Premužić | Stars Peak",
    description:
      "Alloggio escursionistico sul Velebit: sentieri dalla porta, Premužić, Bačić Kuk, GPX e gite in Adriatico.",
  },
  offGridMountainCabin: {
    title:
      "Chalet off-grid Croazia – retreat solare sul Velebit | Stars Peak",
    description:
      "Chalet off-grid sul Velebit con solare, acqua piovana e quiete — casa vacanze sostenibile Stars Peak.",
  },
  remoteWork: {
    title:
      "Remote work in natura | Chalet di montagna con internet veloce – Stars Peak",
    description:
      "Lavora in remote da un chalet tranquillo sul Velebit. Wi‑Fi veloce, concentrazione e natura davanti alla porta — Stars Peak.",
  },
  photographyRetreat: {
    title:
      "Photography retreat sul Velebit | Paesaggio e astrofotografia – Stars Peak",
    description:
      "Retreat fotografico sul Velebit per paesaggio e cielo notturno — Bačić Kuk, cielo scuro e base quieta Stars Peak.",
  },
  press: {
    title:
      "Press & partner | Stars Peak sul Velebit – media kit e collaborazioni",
    description:
      "Media kit Stars Peak: articolo Jutarnji, fatti per redazioni e collaborazioni con blog di trekking, fotografi e media outdoor.",
  },
  htmlSitemap: {
    title: "Mappa del sito | Chalet Stars Peak sul Velebit",
    description:
      "Tutte le pagine Stars Peak — alloggio, hiking retreat, stelle, journal, press e info pratiche.",
  },
  contact: {
    title:
      "Prenota Stars Peak | Contatti e booking chalet in Croazia",
    description:
      "Contatta Marko e Ljiljana — Stars Peak, Došen Dabar 1, Bačić Duliba. Telefono, e-mail, mappa e Booking.com.",
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
