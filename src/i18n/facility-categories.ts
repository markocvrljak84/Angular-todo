import type { Locale } from "./config";

export type FacilityIcon =
  | "parking"
  | "wifi"
  | "kitchen"
  | "bedroom"
  | "bathroom"
  | "living"
  | "media"
  | "room"
  | "pets"
  | "yard"
  | "wellness"
  | "activities"
  | "view"
  | "building"
  | "family"
  | "misc"
  | "safety"
  | "languages";

export type FacilityCategory = {
  icon: FacilityIcon;
  title: string;
  intro?: string;
  items?: string[];
};

const hr: FacilityCategory[] = [
  {
    icon: "parking",
    title: "Parkiralište",
    intro:
      "Besplatno privatno parkiralište dostupno je u okviru objekta i nije potrebna rezervacija.",
  },
  {
    icon: "wifi",
    title: "Internet",
    intro: "Bežični pristup internetu dostupan je u cijelom objektu i ne naplaćuje se.",
  },
  {
    icon: "kitchen",
    title: "Kuhinja",
    items: [
      "kuhinjski stol",
      "sredstva za čišćenje",
      "pećnica",
      "kuhinjski pribor",
      "kuhinja",
      "hladnjak",
      "čajna kuhinja",
    ],
  },
  {
    icon: "bedroom",
    title: "Spavaća soba",
    items: ["posteljina"],
  },
  {
    icon: "bathroom",
    title: "Vlastita kupaonica",
    items: [
      "toaletni papir",
      "ručnici",
      "kada ili tuš kabina",
      "vlastita kupaonica",
      "WC",
      "besplatan toaletni pribor",
      "tuš kabina",
    ],
  },
  {
    icon: "living",
    title: "Dnevni boravak",
    items: ["blagovaonica", "kauč", "kamin", "prostor za sjedenje"],
  },
  {
    icon: "media",
    title: "Mediji i tehnologija",
    items: ["usluge streaminga (kao što je Netflix)"],
  },
  {
    icon: "room",
    title: "Sadržaji sobe",
    items: [
      "utičnica pokraj kreveta",
      "krevet na rasklapanje",
      "stalak za odjeću",
      "mreža protiv komaraca",
      "drveni ili parketni pod",
      "zvučna izolacija",
      "privatni ulaz",
      "tepih",
      "grijanje",
      "ventilator",
    ],
  },
  {
    icon: "pets",
    title: "Kućni ljubimci",
    intro: "Dozvoljen je boravak kućnih ljubimaca i mogući su dodatni troškovi.",
  },
  {
    icon: "yard",
    title: "Dvorište",
    items: [
      "vanjski kamin",
      "mjesto za piknik",
      "vrtni namještaj",
      "vanjska blagovaonica",
      "terasa za sunčanje",
      "roštilj",
      "oprema za roštilj",
      "balkon",
      "terasa",
      "vrt",
    ],
  },
  {
    icon: "wellness",
    title: "Wellness",
    items: ["suncobrani", "ležaljke za plažu"],
  },
  {
    icon: "activities",
    title: "Aktivnosti",
    items: ["razgledavanje pješice", "oprema za badminton", "planinarenje", "pikado"],
  },
  {
    icon: "view",
    title: "Dvorište i pogled",
    items: ["pogled na planinu", "pogled na vrt", "pogled"],
  },
  {
    icon: "building",
    title: "Karakteristike zgrade",
    items: ["zasebna zgrada"],
  },
  {
    icon: "family",
    title: "Zabava i obiteljski sadržaji",
    items: [
      "zaštita za utičnice",
      "društvene igre/puzle",
      "knjige, DVD-i ili glazba za djecu",
    ],
  },
  {
    icon: "misc",
    title: "Razno",
    items: [
      "posuda za ljubimce",
      "košara za ljubimce",
      "zabranjeno pušenje u cijelom objektu",
      "obiteljske sobe",
      "sobe za nepušače",
    ],
  },
  {
    icon: "safety",
    title: "Sigurnost i zaštita",
    items: ["protupožarni aparati"],
  },
  {
    icon: "languages",
    title: "Usluga dostupna na",
    items: ["engleski", "hrvatski"],
  },
];

const en: FacilityCategory[] = [
  {
    icon: "parking",
    title: "Parking",
    intro: "Free private parking is available on site; reservation is not needed.",
  },
  {
    icon: "wifi",
    title: "Internet",
    intro: "Wireless internet is available throughout the property free of charge.",
  },
  {
    icon: "kitchen",
    title: "Kitchen",
    items: [
      "kitchen table",
      "cleaning products",
      "oven",
      "kitchenware",
      "kitchen",
      "refrigerator",
      "kitchenette",
    ],
  },
  {
    icon: "bedroom",
    title: "Bedroom",
    items: ["linen"],
  },
  {
    icon: "bathroom",
    title: "Private bathroom",
    items: [
      "toilet paper",
      "towels",
      "bathtub or shower",
      "private bathroom",
      "toilet",
      "free toiletries",
      "shower",
    ],
  },
  {
    icon: "living",
    title: "Living room",
    items: ["dining area", "sofa", "fireplace", "seating area"],
  },
  {
    icon: "media",
    title: "Media & technology",
    items: ["streaming services (such as Netflix)"],
  },
  {
    icon: "room",
    title: "Room amenities",
    items: [
      "socket near the bed",
      "sofa bed",
      "clothes rack",
      "mosquito net",
      "wooden or parquet floor",
      "soundproofing",
      "private entrance",
      "carpet",
      "heating",
      "fan",
    ],
  },
  {
    icon: "pets",
    title: "Pets",
    intro: "Pets are allowed; additional charges may apply.",
  },
  {
    icon: "yard",
    title: "Outdoor",
    items: [
      "outdoor fireplace",
      "picnic area",
      "outdoor furniture",
      "outdoor dining area",
      "sun terrace",
      "barbecue",
      "barbecue equipment",
      "balcony",
      "terrace",
      "garden",
    ],
  },
  {
    icon: "wellness",
    title: "Wellness",
    items: ["sun umbrellas", "beach chairs"],
  },
  {
    icon: "activities",
    title: "Activities",
    items: ["walking tours", "badminton equipment", "hiking", "darts"],
  },
  {
    icon: "view",
    title: "Outdoor & views",
    items: ["mountain view", "garden view", "view"],
  },
  {
    icon: "building",
    title: "Property characteristics",
    items: ["detached building"],
  },
  {
    icon: "family",
    title: "Entertainment & family",
    items: ["socket covers", "board games / puzzles", "books, DVDs or music for children"],
  },
  {
    icon: "misc",
    title: "Miscellaneous",
    items: [
      "pet bowls",
      "pet basket",
      "non-smoking throughout",
      "family rooms",
      "non-smoking rooms",
    ],
  },
  {
    icon: "safety",
    title: "Safety & security",
    items: ["fire extinguishers"],
  },
  {
    icon: "languages",
    title: "Languages spoken",
    items: ["English", "Croatian"],
  },
];

const de: FacilityCategory[] = [
  {
    icon: "parking",
    title: "Parkplatz",
    intro: "Kostenlose Privatparkplätze stehen vor Ort zur Verfügung; eine Reservierung ist nicht erforderlich.",
  },
  {
    icon: "wifi",
    title: "Internet",
    intro: "WLAN ist im gesamten Objekt kostenfrei verfügbar.",
  },
  {
    icon: "kitchen",
    title: "Küche",
    items: [
      "Küchentisch",
      "Reinigungsmittel",
      "Backofen",
      "Küchenutensilien",
      "Küche",
      "Kühlschrank",
      "Kochnische",
    ],
  },
  { icon: "bedroom", title: "Schlafzimmer", items: ["Bettwäsche"] },
  {
    icon: "bathroom",
    title: "Eigenes Badezimmer",
    items: [
      "Toilettenpapier",
      "Handtücher",
      "Badewanne oder Dusche",
      "eigenes Badezimmer",
      "WC",
      "kostenlose Pflegeprodukte",
      "Dusche",
    ],
  },
  {
    icon: "living",
    title: "Wohnzimmer",
    items: ["Essbereich", "Sofa", "Kamin", "Sitzbereich"],
  },
  {
    icon: "media",
    title: "Medien & Technik",
    items: ["Streaming-Dienste (z. B. Netflix)"],
  },
  {
    icon: "room",
    title: "Zimmerausstattung",
    items: [
      "Steckdose in Bettnähe",
      "Schlafsofa",
      "Kleiderständer",
      "Moskitonetz",
      "Holz- oder Parkettboden",
      "Schallisolierung",
      "eigener Eingang",
      "Teppichboden",
      "Heizung",
      "Ventilator",
    ],
  },
  {
    icon: "pets",
    title: "Haustiere",
    intro: "Haustiere sind erlaubt; zusätzliche Gebühren können anfallen.",
  },
  {
    icon: "yard",
    title: "Außenbereich",
    items: [
      "Außenkamin",
      "Picknickplatz",
      "Gartenmöbel",
      "Essbereich im Freien",
      "Sonnenterrasse",
      "Grill",
      "Grillausstattung",
      "Balkon",
      "Terrasse",
      "Garten",
    ],
  },
  { icon: "wellness", title: "Wellness", items: ["Sonnenschirme", "Strandliegen"] },
  {
    icon: "activities",
    title: "Aktivitäten",
    items: ["Wanderungen", "Badmintonausrüstung", "Wandern", "Darts"],
  },
  {
    icon: "view",
    title: "Außenbereich & Ausblick",
    items: ["Bergblick", "Gartenblick", "Aussicht"],
  },
  { icon: "building", title: "Gebäude", items: ["freistehendes Gebäude"] },
  {
    icon: "family",
    title: "Unterhaltung & Familie",
    items: ["Steckdosenschutz", "Brettspiele / Puzzles", "Bücher, DVDs oder Musik für Kinder"],
  },
  {
    icon: "misc",
    title: "Sonstiges",
    items: [
      "Näpfe für Haustiere",
      "Körbchen für Haustiere",
      "Nichtraucherunterkunft",
      "Familienzimmer",
      "Nichtraucherzimmer",
    ],
  },
  { icon: "safety", title: "Sicherheit", items: ["Feuerlöscher"] },
  { icon: "languages", title: "Gesprochene Sprachen", items: ["Englisch", "Kroatisch"] },
];

const fr: FacilityCategory[] = [
  {
    icon: "parking",
    title: "Parking",
    intro: "Parking privé gratuit sur place, sans réservation.",
  },
  {
    icon: "wifi",
    title: "Internet",
    intro: "Connexion Wi-Fi gratuite disponible dans tout l’établissement.",
  },
  {
    icon: "kitchen",
    title: "Cuisine",
    items: [
      "table de cuisine",
      "produits ménagers",
      "four",
      "ustensiles de cuisine",
      "cuisine",
      "réfrigérateur",
      "kitchenette",
    ],
  },
  { icon: "bedroom", title: "Chambre", items: ["linge de lit"] },
  {
    icon: "bathroom",
    title: "Salle de bain privative",
    items: [
      "papier toilette",
      "serviettes",
      "baignoire ou douche",
      "salle de bain privative",
      "toilettes",
      "articles de toilette gratuits",
      "douche",
    ],
  },
  {
    icon: "living",
    title: "Salon",
    items: ["coin repas", "canapé", "cheminée", "coin salon"],
  },
  {
    icon: "media",
    title: "Médias et technologie",
    items: ["services de streaming (comme Netflix)"],
  },
  {
    icon: "room",
    title: "Équipements de la chambre",
    items: [
      "prise près du lit",
      "canapé-lit",
      "portant",
      "moustiquaire",
      "sol en bois ou parquet",
      "insonorisation",
      "entrée privée",
      "moquette",
      "chauffage",
      "ventilateur",
    ],
  },
  {
    icon: "pets",
    title: "Animaux",
    intro: "Les animaux sont acceptés ; des frais supplémentaires peuvent s’appliquer.",
  },
  {
    icon: "yard",
    title: "Extérieur",
    items: [
      "foyer extérieur",
      "aire de pique-nique",
      "mobilier de jardin",
      "repas en plein air",
      "terrasse exposée au soleil",
      "barbecue",
      "équipement de barbecue",
      "balcon",
      "terrasse",
      "jardin",
    ],
  },
  { icon: "wellness", title: "Bien-être", items: ["parasols", "chaises longues"] },
  {
    icon: "activities",
    title: "Activités",
    items: ["visites à pied", "équipement de badminton", "randonnée", "fléchettes"],
  },
  {
    icon: "view",
    title: "Extérieur et vue",
    items: ["vue sur la montagne", "vue sur le jardin", "vue"],
  },
  { icon: "building", title: "Bâtiment", items: ["bâtiment indépendant"] },
  {
    icon: "family",
    title: "Divertissement et famille",
    items: [
      "cache-prises",
      "jeux de société / puzzles",
      "livres, DVD ou musique pour enfants",
    ],
  },
  {
    icon: "misc",
    title: "Divers",
    items: [
      "gamelles pour animaux",
      "panier pour animaux",
      "établissement entièrement non-fumeurs",
      "chambres familiales",
      "chambres non-fumeurs",
    ],
  },
  { icon: "safety", title: "Sécurité", items: ["extincteurs"] },
  { icon: "languages", title: "Langues parlées", items: ["anglais", "croate"] },
];

const it: FacilityCategory[] = [
  {
    icon: "parking",
    title: "Parcheggio",
    intro: "Parcheggio privato gratuito in loco, senza prenotazione.",
  },
  {
    icon: "wifi",
    title: "Internet",
    intro: "Connessione Wi-Fi gratuita disponibile in tutta la struttura.",
  },
  {
    icon: "kitchen",
    title: "Cucina",
    items: [
      "tavolo da cucina",
      "prodotti per le pulizie",
      "forno",
      "stoviglie",
      "cucina",
      "frigorifero",
      "angolo cottura",
    ],
  },
  { icon: "bedroom", title: "Camera da letto", items: ["biancheria da letto"] },
  {
    icon: "bathroom",
    title: "Bagno privato",
    items: [
      "carta igienica",
      "asciugamani",
      "vasca o doccia",
      "bagno privato",
      "WC",
      "set di cortesia gratuito",
      "doccia",
    ],
  },
  {
    icon: "living",
    title: "Soggiorno",
    items: ["zona pranzo", "divano", "camino", "zona soggiorno"],
  },
  {
    icon: "media",
    title: "Media e tecnologia",
    items: ["servizi di streaming (come Netflix)"],
  },
  {
    icon: "room",
    title: "Servizi in camera",
    items: [
      "presa elettrica vicino al letto",
      "divano letto",
      "appendiabiti",
      "zanzariera",
      "pavimento in legno o parquet",
      "insonorizzazione",
      "ingresso indipendente",
      "moquette",
      "riscaldamento",
      "ventilatore",
    ],
  },
  {
    icon: "pets",
    title: "Animali domestici",
    intro: "Animali ammessi; potrebbero essere applicati costi aggiuntivi.",
  },
  {
    icon: "yard",
    title: "Esterni",
    items: [
      "camino esterno",
      "area picnic",
      "arredi da giardino",
      "zona pranzo all’aperto",
      "terrazza solarium",
      "barbecue",
      "attrezzatura per barbecue",
      "balcone",
      "terrazza",
      "giardino",
    ],
  },
  { icon: "wellness", title: "Benessere", items: ["ombrelloni", "sedie a sdraio"] },
  {
    icon: "activities",
    title: "Attività",
    items: ["tour a piedi", "attrezzatura da badminton", "escursionismo", "freccette"],
  },
  {
    icon: "view",
    title: "Esterni e vista",
    items: ["vista montagna", "vista giardino", "vista"],
  },
  { icon: "building", title: "Caratteristiche", items: ["edificio indipendente"] },
  {
    icon: "family",
    title: "Intrattenimento e famiglia",
    items: [
      "copriprese",
      "giochi da tavolo / puzzle",
      "libri, DVD o musica per bambini",
    ],
  },
  {
    icon: "misc",
    title: "Varie",
    items: [
      "ciotole per animali",
      "cestino per animali",
      "struttura interamente non fumatori",
      "camere familiari",
      "camere non fumatori",
    ],
  },
  { icon: "safety", title: "Sicurezza", items: ["estintori"] },
  { icon: "languages", title: "Lingue parlate", items: ["inglese", "croato"] },
];

export const facilityCategoriesByLocale: Record<Locale, FacilityCategory[]> = {
  en,
  hr,
  de,
  fr,
  it,
};

export function getFacilityCategories(locale: Locale): FacilityCategory[] {
  return facilityCategoriesByLocale[locale];
}
