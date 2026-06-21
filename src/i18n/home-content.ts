import type { Locale } from "./config";

export type HomeContent = {
  hero: {
    headline: string;
    subline: string;
    facts: string[];
    ctaBook: string;
    ctaExperiences: string;
  };
  whySpecial: {
    title: string;
    cards: { title: string; body: string }[];
  };
  gallery: {
    title: string;
    intro: string;
    ctaLabel: string;
  };
  accommodation: {
    title: string;
    items: string[];
    ctaLabel: string;
  };
  map: {
    title: string;
    intro: string;
    points: { name: string; note: string }[];
  };
  finalCta: {
    headline: string;
    btnLabel: string;
  };
};

const en: HomeContent = {
  hero: {
    headline: "Summit. Swim. Stargaze.",
    subline:
      "A private mountain chalet at 900 m with views of Bačić Kuk — just 30 minutes from the Adriatic.",
    facts: [
      "900 m elevation",
      "30 min to the sea",
      "Views of Bačić Kuk",
      "Inside Velebit Nature Park",
    ],
    ctaBook: "Check availability",
    ctaExperiences: "See experiences",
  },
  whySpecial: {
    title: "Why this place is special",
    cards: [
      {
        title: "Mountain",
        body: "Bačić Kuk, Premužić trail and Dabarski kukovi — classic Velebit hiking from your door.",
      },
      {
        title: "Sea",
        body: "Karlobag, Zavratnica and Pag are half an hour away — mountain mornings, Adriatic afternoons.",
      },
      {
        title: "Stars",
        body: "No light pollution — Milky Way nights, hammocks and ridge silence after dark.",
      },
    ],
  },
  gallery: {
    title: "Experience in photos",
    intro:
      "Mountain mornings, Adriatic afternoons and starlit evenings — a glimpse of life at Stars Peak.",
    ctaLabel: "Full gallery",
  },
  accommodation: {
    title: "Your stay at a glance",
    items: [
      "Up to 4 guests",
      "Wi‑Fi",
      "Fireplace",
      "Outdoor kitchen",
      "BBQ grill",
      "Pet friendly",
    ],
    ctaLabel: "All accommodation details",
  },
  map: {
    title: "Mountain and sea in one day",
    intro: "Stars Peak sits between Velebit peaks and the Adriatic — everything below is within easy reach.",
    points: [
      { name: "Bačić Kuk", note: "Summit above the chalet" },
      { name: "Karlobag", note: "30 min · Adriatic swim" },
      { name: "Zavratnica", note: "Fjord-like cove" },
      { name: "Premužić trail", note: "Ridge hiking" },
      { name: "Pag", note: "Island day trip" },
    ],
  },
  finalCta: {
    headline: "Mountain. Sea. Stars. In one day.",
    btnLabel: "Check availability",
  },
};

const hr: HomeContent = {
  hero: {
    headline: "Vrh. More. Zvijezde.",
    subline:
      "Privatna planinska kuća na 900 m nadmorske visine s pogledom na Bačić kuk – samo 30 minuta od Jadranskog mora.",
    facts: [
      "900 m nadmorske visine",
      "30 min do mora",
      "Pogled na Bačić kuk",
      "Unutar Parka prirode Velebit",
    ],
    ctaBook: "Provjeri dostupnost",
    ctaExperiences: "Pogledaj doživljaje",
  },
  whySpecial: {
    title: "Zašto je ovo mjesto posebno",
    cards: [
      {
        title: "Planina",
        body: "Bačić kuk, Premužićeva staza i Dabarski kukovi — klasično planinarenje Velebitom odmah iz kuće.",
      },
      {
        title: "More",
        body: "Karlobag, Zavratnica i Pag udaljeni su pola sata vožnje — jutro na planini, popodne u moru.",
      },
      {
        title: "Zvijezde",
        body: "Bez svjetlosnog onečišćenja — Mliječna staza, hamaci i tišina grebena nakon mraka.",
      },
    ],
  },
  gallery: {
    title: "Doživljaj u fotografijama",
    intro:
      "Planinska jutra, jadranska popodneva i večeri pod zvijezdama — pogled na život na Stars Peaku.",
    ctaLabel: "Cijela galerija",
  },
  accommodation: {
    title: "Smještaj ukratko",
    items: [
      "Do 4 gosta",
      "Wi‑Fi",
      "Kamin",
      "Vanjska kuhinja",
      "Roštilj",
      "Pet friendly",
    ],
    ctaLabel: "Svi detalji smještaja",
  },
  map: {
    title: "Planina i more u jednom danu",
    intro: "Stars Peak leži između velebitskih vrhova i Jadrana — sve dolje je na dohvat ruke.",
    points: [
      { name: "Bačić kuk", note: "Vrh iznad kuće" },
      { name: "Karlobag", note: "30 min · kupanje u moru" },
      { name: "Zavratnica", note: "Uvala poput fjorda" },
      { name: "Premužićeva staza", note: "Hodanje grebenom" },
      { name: "Pag", note: "Izlet na otok" },
    ],
  },
  finalCta: {
    headline: "Planina. More. Zvijezde. U jednom danu.",
    btnLabel: "Provjeri dostupnost",
  },
};

const de: HomeContent = {
  ...en,
  hero: {
    headline: "Gipfel. Meer. Sterne.",
    subline:
      "Privates Berghaus auf 900 m mit Blick auf Bačić Kuk — nur 30 Minuten zur Adria.",
    facts: ["900 m Höhe", "30 Min zum Meer", "Blick auf Bačić Kuk", "Im Velebit-Naturpark"],
    ctaBook: "Verfügbarkeit prüfen",
    ctaExperiences: "Erlebnisse ansehen",
  },
  whySpecial: {
    title: "Warum dieser Ort besonders ist",
    cards: [
      { title: "Berg", body: "Bačić Kuk, Premužić-Weg und Dabarski kukovi — klassisches Velebit-Wandern ab der Haustür." },
      { title: "Meer", body: "Karlobag, Zavratnica und Pag in einer halben Stunde — Bergmorgen, Adria-Nachmittag." },
      { title: "Sterne", body: "Keine Lichtverschmutzung — Milchstraße, Hängematten und Grat-Stille." },
    ],
  },
  gallery: {
    title: "Erlebnisse in Bildern",
    intro:
      "Bergmorgen, Adria-Nachmittage und Sternennächte — ein Einblick in das Leben auf Stars Peak.",
    ctaLabel: "Galerie ansehen",
  },
  accommodation: {
    title: "Ihr Aufenthalt auf einen Blick",
    items: ["Bis 4 Gäste", "WLAN", "Kamin", "Außenküche", "Grill", "Haustiere willkommen"],
    ctaLabel: "Alle Unterkunftsdetails",
  },
  map: {
    title: "Berg und Meer an einem Tag",
    intro: "Stars Peak liegt zwischen Velebit-Gipfeln und der Adria.",
    points: [
      { name: "Bačić Kuk", note: "Gipfel über dem Haus" },
      { name: "Karlobag", note: "30 Min · Baden" },
      { name: "Zavratnica", note: "Fjordartige Bucht" },
      { name: "Premužić-Weg", note: "Gratwanderung" },
      { name: "Pag", note: "Inselausflug" },
    ],
  },
  finalCta: { headline: "Berg. Meer. Sterne. An einem Tag.", btnLabel: "Verfügbarkeit prüfen" },
};

const fr: HomeContent = {
  ...en,
  hero: {
    headline: "Sommet. Mer. Étoiles.",
    subline: "Chalet privé à 900 m avec vue sur Bačić Kuk — à 30 minutes de l'Adriatique.",
    facts: ["900 m d'altitude", "30 min de la mer", "Vue sur Bačić Kuk", "Dans le parc naturel Velebit"],
    ctaBook: "Vérifier disponibilité",
    ctaExperiences: "Voir les expériences",
  },
  whySpecial: {
    title: "Pourquoi cet endroit est unique",
    cards: [
      { title: "Montagne", body: "Bačić Kuk, sentier Premužić et Dabarski kukovi — randonnée classique du Velebit." },
      { title: "Mer", body: "Karlobag, Zavratnica et Pag à une demi-heure — matin montagne, après-midi mer." },
      { title: "Étoiles", body: "Pas de pollution lumineuse — Voie lactée et silence des crêtes." },
    ],
  },
  gallery: {
    title: "L'expérience en photos",
    intro:
      "Matins en montagne, après-midis à l'Adriatique et soirées sous les étoiles — la vie à Stars Peak.",
    ctaLabel: "Galerie complète",
  },
  accommodation: {
    title: "Votre séjour en bref",
    items: ["Jusqu'à 4 personnes", "Wi‑Fi", "Cheminée", "Cuisine extérieure", "Barbecue", "Animaux acceptés"],
    ctaLabel: "Détails du logement",
  },
  map: {
    title: "Montagne et mer en une journée",
    intro: "Stars Peak se situe entre les sommets du Velebit et l'Adriatique.",
    points: [
      { name: "Bačić Kuk", note: "Sommet au-dessus du chalet" },
      { name: "Karlobag", note: "30 min · baignade" },
      { name: "Zavratnica", note: "Crique fjord" },
      { name: "Sentier Premužić", note: "Randonnée crête" },
      { name: "Pag", note: "Excursion île" },
    ],
  },
  finalCta: { headline: "Montagne. Mer. Étoiles. En une journée.", btnLabel: "Vérifier disponibilité" },
};

const it: HomeContent = {
  ...en,
  hero: {
    headline: "Cima. Mare. Stelle.",
    subline: "Chalet privato a 900 m con vista su Bačić Kuk — a 30 minuti dall'Adriatico.",
    facts: ["900 m di quota", "30 min dal mare", "Vista su Bačić Kuk", "Nel parco naturale Velebit"],
    ctaBook: "Verifica disponibilità",
    ctaExperiences: "Scopri le esperienze",
  },
  whySpecial: {
    title: "Perché questo posto è speciale",
    cards: [
      { title: "Montagna", body: "Bačić Kuk, sentiero Premužić e Dabarski kukovi — escursioni classiche del Velebit." },
      { title: "Mare", body: "Karlobag, Zavratnica e Pag a mezz'ora — mattina in montagna, pomeriggio al mare." },
      { title: "Stelle", body: "Nessun inquinamento luminoso — Via Lattea e silenzio della cresta." },
    ],
  },
  gallery: {
    title: "L'esperienza in foto",
    intro:
      "Mattine in montagna, pomeriggi sull'Adriatico e serate sotto le stelle — la vita a Stars Peak.",
    ctaLabel: "Galleria completa",
  },
  accommodation: {
    title: "Il soggiorno in breve",
    items: ["Fino a 4 ospiti", "Wi‑Fi", "Camino", "Cucina esterna", "Barbecue", "Animali ammessi"],
    ctaLabel: "Dettagli alloggio",
  },
  map: {
    title: "Montagna e mare in un giorno",
    intro: "Stars Peak si trova tra le cime del Velebit e l'Adriatico.",
    points: [
      { name: "Bačić Kuk", note: "Cima sopra il chalet" },
      { name: "Karlobag", note: "30 min · bagno" },
      { name: "Zavratnica", note: "Baia fiord" },
      { name: "Sentiero Premužić", note: "Trekking cresta" },
      { name: "Pag", note: "Gita isola" },
    ],
  },
  finalCta: { headline: "Montagna. Mare. Stelle. In un giorno.", btnLabel: "Verifica disponibilità" },
};

const byLocale: Record<Locale, HomeContent> = { en, hr, de, fr, it };

export function getHomeContent(locale: Locale): HomeContent {
  return byLocale[locale];
}
