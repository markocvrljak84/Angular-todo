import type { Locale } from "./config";

export type ExperiencesPageContent = {
  title: string;
  intro: string;
  categories: {
    id: string;
    title: string;
    intro: string;
  }[];
};

const en: ExperiencesPageContent = {
  title: "Experiences",
  intro:
    "From Bačić Duliba you can summit Velebit in the morning, swim in the Adriatic by afternoon, and taste the region — all in one stay.",
  categories: [
    {
      id: "hiking",
      title: "Hiking",
      intro: "Bačić Kuk, Budakovo Brdo and Kiza — marked trails with maps and GPX from Stars Peak. Alpine climbing routes on Velebit’s rocky peaks are listed below.",
    },
    {
      id: "sea",
      title: "Coast & landscapes",
      intro:
        "Karlobag, Zavratnica, Pag and Paklenica — sea, islands and canyons within about an hour of Stars Peak.",
    },
    {
      id: "food",
      title: "Food & local taste",
      intro: "Pag cheese, fresh fish in Karlobag, mountain herbs and fireside evenings on the terrace.",
    },
    {
      id: "agro",
      title: "Future agrotourism",
      intro: "Mountain teas, Velebit honey and guided herb walks — coming soon from Stars Peak.",
    },
  ],
};

const hr: ExperiencesPageContent = {
  title: "Doživljaji",
  intro:
    "Iz Bačić Dulibe ujutro ste na Velebitu, popodne u Jadranu, a usput kušate regiju — sve u jednom boravku.",
  categories: [
    {
      id: "hiking",
      title: "Planinarenje",
      intro: "Bačić kuk, Budakovo brdo i Kiza — označene staze s kartama i GPX datotekama sa Stars Peaka. Ispod su i alpinistička penjališta Velebita.",
    },
    {
      id: "sea",
      title: "More i krajolici",
      intro:
        "Karlobag, Zavratnica, Pag i Paklenica — more, otoci i kanjoni unutar otprilike sat vremena od Stars Peaka.",
    },
    {
      id: "food",
      title: "Gastronomija",
      intro: "Paški sir, svježa riba u Karlobagu, planinsko bilje i večeri uz vatru na terasi.",
    },
    {
      id: "agro",
      title: "Budući agroturizam",
      intro: "Planinski čajevi, med s Velebita i vođene šetnje biljem — uskoro sa Stars Peaka.",
    },
  ],
};

const de: ExperiencesPageContent = {
  title: "Erlebnisse",
  intro: "Vom Velebit-Gipfel bis zur Adria — alles von Bačić Duliba aus.",
  categories: [
    { id: "hiking", title: "Wandern", intro: "Bačić Kuk, Budakovo Brdo und Kiza mit Karten und GPX — plus Alpin- und Kletterrouten am Velebit." },
    { id: "sea", title: "Küste & Landschaften", intro: "Karlobag, Zavratnica, Pag und Paklenica — Meer, Inseln und Schluchten." },
    { id: "food", title: "Gastronomie", intro: "Pag-Käse, frischer Fisch, Kräuter und Abende am Feuer." },
    { id: "agro", title: "Agrotourismus (bald)", intro: "Bergtees, Honig und Kräuterwanderungen — demnächst." },
  ],
};

const fr: ExperiencesPageContent = {
  title: "Expériences",
  intro: "Du sommet du Velebit à l'Adriatique — tout depuis Bačić Duliba.",
  categories: [
    { id: "hiking", title: "Randonnée", intro: "Bačić Kuk, Budakovo Brdo et Kiza avec cartes et GPX — plus les voies d’alpinisme du Velebit." },
    { id: "sea", title: "Côte et paysages", intro: "Karlobag, Zavratnica, Pag et Paklenica — mer, îles et canyons." },
    { id: "food", title: "Gastronomie", intro: "Fromage de Pag, poisson frais, herbes et soirées au feu." },
    { id: "agro", title: "Agrotourisme (bientôt)", intro: "Thés, miel et balades botaniques — prochainement." },
  ],
};

const it: ExperiencesPageContent = {
  title: "Esperienze",
  intro: "Dalla cima del Velebit all'Adriatico — tutto da Bačić Duliba.",
  categories: [
    { id: "hiking", title: "Escursionismo", intro: "Bačić Kuk, Budakovo Brdo e Kiza con mappe e GPX — più le vie alpinistiche del Velebit." },
    { id: "sea", title: "Costa e paesaggi", intro: "Karlobag, Zavratnica, Pag e Paklenica — mare, isole e canyon." },
    { id: "food", title: "Gastronomia", intro: "Formaggio di Pag, pesce fresco, erbe e serate al fuoco." },
    { id: "agro", title: "Agroturismo (presto)", intro: "Tè di montagna, miele e passeggiate botaniche — in arrivo." },
  ],
};

const byLocale: Record<Locale, ExperiencesPageContent> = { en, hr, de, fr, it };

export function getExperiencesPageContent(locale: Locale): ExperiencesPageContent {
  return byLocale[locale];
}
