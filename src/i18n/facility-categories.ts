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
    intro: "Besplatno privatno parkiralište dostupno je u okviru objekta.",
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
      "hladnjak",
      "čajna kuhinja",
    ],
  },
  {
    icon: "bedroom",
    title: "Spavaća soba",
    items: ["jedan bračni krevet", "dva jednokrevetna"],
  },
  {
    icon: "bathroom",
    title: "Kupaonica",
    items: ["ručnici", "WC", "besplatan toaletni pribor", "tuš kabina"],
  },
  {
    icon: "living",
    title: "Dnevni boravak",
    items: ["blagovaonica", "kauč", "kamin", "prostor za sjedenje"],
  },
  {
    icon: "room",
    title: "Sadržaji sobe",
    items: [
      "utičnica pokraj kreveta",
      "krevet na rasklapanje",
      "stalak za odjeću",
      "mreža protiv komaraca",
      "tepih",
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
      "vanjska blagovaonica",
      "terasa za sunčanje",
      "roštilj",
      "oprema za roštilj",
      "vrt",
    ],
  },
  {
    icon: "wellness",
    title: "Wellness",
    items: ["suncobrani", "ležaljke za plažu", "hamaci"],
  },
  {
    icon: "activities",
    title: "Aktivnosti",
    items: [
      "oprema za badminton",
      "planinarenje",
      "biciklizam",
      "penjanje",
      "ljuljačke",
      "mali nogomet",
      "pikado",
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
    ],
  },
  {
    icon: "safety",
    title: "Sigurnost i zaštita",
    items: ["protupožarni aparati", "prva pomoć", "sredstva za dezinfekciju"],
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
    intro: "Free private parking is available on site.",
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
      "refrigerator",
      "kitchenette",
    ],
  },
  {
    icon: "bedroom",
    title: "Bedroom",
    items: ["one large bed", "two single beds"],
  },
  {
    icon: "bathroom",
    title: "Bathroom",
    items: ["towels", "toilet", "free toiletries", "shower"],
  },
  {
    icon: "living",
    title: "Living room",
    items: ["dining area", "sofa", "fireplace", "seating area"],
  },
  {
    icon: "room",
    title: "Room amenities",
    items: [
      "socket near the bed",
      "sofa bed",
      "clothes rack",
      "mosquito net",
      "carpet",
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
      "outdoor dining area",
      "sun terrace",
      "barbecue",
      "barbecue equipment",
      "garden",
    ],
  },
  {
    icon: "wellness",
    title: "Wellness",
    items: ["sun umbrellas", "beach chairs", "hammocks"],
  },
  {
    icon: "activities",
    title: "Activities",
    items: [
      "badminton equipment",
      "hiking",
      "cycling",
      "climbing",
      "swings",
      "small-sided football",
      "darts",
    ],
  },
  {
    icon: "misc",
    title: "Miscellaneous",
    items: [
      "pet bowls",
      "pet basket",
      "non-smoking throughout",
      "family rooms",
    ],
  },
  {
    icon: "safety",
    title: "Safety & security",
    items: ["fire extinguishers", "first aid kit", "disinfectants"],
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
      "Kühlschrank",
      "Kochnische",
    ],
  },
  {
    icon: "bedroom",
    title: "Schlafzimmer",
    items: ["ein Doppelbett", "zwei Einzelbetten"],
  },
  {
    icon: "bathroom",
    title: "Eigenes Badezimmer",
    items: [
      "Toilettenpapier",
      "Handtücher",
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
    icon: "room",
    title: "Zimmerausstattung",
    items: [
      "Steckdose in Bettnähe",
      "Schlafsofa",
      "Kleiderständer",
      "Moskitonetz",
      "Holz- oder Parkettboden",
      "Schallisolierung",
      "Teppichboden",
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
  { icon: "wellness", title: "Wellness", items: ["Sonnenschirme", "Strandliegen", "Hängematten"] },
  {
    icon: "activities",
    title: "Aktivitäten",
    items: [
      "Badmintonausrüstung",
      "Wandern",
      "Radfahren",
      "Klettern",
      "Schaukeln",
      "Kleinfeld-Fußball",
      "Darts",
    ],
  },
  {
    icon: "misc",
    title: "Sonstiges",
    items: [
      "Näpfe für Haustiere",
      "Körbchen für Haustiere",
      "Nichtraucherunterkunft",
      "Familienzimmer",
    ],
  },
  { icon: "safety", title: "Sicherheit", items: ["Feuerlöscher", "Erste-Hilfe-Set", "Desinfektionsmittel"] },
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
      "réfrigérateur",
      "kitchenette",
    ],
  },
  {
    icon: "bedroom",
    title: "Chambre",
    items: ["un grand lit", "deux lits simples"],
  },
  {
    icon: "bathroom",
    title: "Salle de bain privative",
    items: [
      "papier toilette",
      "serviettes",
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
    icon: "room",
    title: "Équipements de la chambre",
    items: [
      "prise près du lit",
      "canapé-lit",
      "portant",
      "moustiquaire",
      "sol en bois ou parquet",
      "insonorisation",
      "moquette",
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
  { icon: "wellness", title: "Bien-être", items: ["parasols", "chaises longues", "hamacs"] },
  {
    icon: "activities",
    title: "Activités",
    items: [
      "équipement de badminton",
      "randonnée",
      "cyclisme",
      "escalade",
      "balançoires",
      "petit foot",
      "fléchettes",
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
    ],
  },
  { icon: "safety", title: "Sécurité", items: ["extincteurs", "trousse de premiers secours", "produits désinfectants"] },
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
      "frigorifero",
      "angolo cottura",
    ],
  },
  {
    icon: "bedroom",
    title: "Camera da letto",
    items: ["un letto matrimoniale", "due letti singoli"],
  },
  {
    icon: "bathroom",
    title: "Bagno privato",
    items: [
      "carta igienica",
      "asciugamani",
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
    icon: "room",
    title: "Servizi in camera",
    items: [
      "presa elettrica vicino al letto",
      "divano letto",
      "appendiabiti",
      "zanzariera",
      "pavimento in legno o parquet",
      "insonorizzazione",
      "moquette",
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
  { icon: "wellness", title: "Benessere", items: ["ombrelloni", "sedie a sdraio", "amache"] },
  {
    icon: "activities",
    title: "Attività",
    items: [
      "attrezzatura da badminton",
      "escursionismo",
      "ciclismo",
      "arrampicata",
      "altalene",
      "calcetto",
      "freccette",
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
    ],
  },
  { icon: "safety", title: "Sicurezza", items: ["estintori", "kit di pronto soccorso", "disinfettanti"] },
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
