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
      intro: "Bačić Kuk, Budakovo Brdo and Kiza — marked trails with maps and GPX from Stars Peak. More routes coming soon.",
    },
    {
      id: "sea",
      title: "Sea & beaches",
      intro: "Karlobag, Zavratnica, Pag and Paklenica — Adriatic day trips within 30–60 minutes.",
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
      intro: "Bačić kuk, Budakovo brdo i Kiza — označene staze s kartama i GPX datotekama sa Stars Peaka. Uskoro dolaze nove staze.",
    },
    {
      id: "sea",
      title: "More i plaže",
      intro: "Karlobag, Zavratnica, Pag i Paklenica — jadranski izleti u 30–60 minuta vožnje.",
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
    { id: "hiking", title: "Wandern", intro: "Bačić Kuk, Budakovo Brdo und Kiza mit Karten und GPX. Weitere Routen folgen in Kürze." },
    { id: "sea", title: "Meer & Strände", intro: "Karlobag, Zavratnica, Pag und Paklenica — Tagesausflüge." },
    { id: "food", title: "Gastronomie", intro: "Pag-Käse, frischer Fisch, Kräuter und Abende am Feuer." },
    { id: "agro", title: "Agrotourismus (bald)", intro: "Bergtees, Honig und Kräuterwanderungen — demnächst." },
  ],
};

const fr: ExperiencesPageContent = {
  title: "Expériences",
  intro: "Du sommet du Velebit à l'Adriatique — tout depuis Bačić Duliba.",
  categories: [
    { id: "hiking", title: "Randonnée", intro: "Bačić Kuk, Budakovo Brdo et Kiza avec cartes et GPX. D'autres itinéraires arrivent bientôt." },
    { id: "sea", title: "Mer & plages", intro: "Karlobag, Zavratnica, Pag et Paklenica — excursions." },
    { id: "food", title: "Gastronomie", intro: "Fromage de Pag, poisson frais, herbes et soirées au feu." },
    { id: "agro", title: "Agrotourisme (bientôt)", intro: "Thés, miel et balades botaniques — prochainement." },
  ],
};

const it: ExperiencesPageContent = {
  title: "Esperienze",
  intro: "Dalla cima del Velebit all'Adriatico — tutto da Bačić Duliba.",
  categories: [
    { id: "hiking", title: "Escursionismo", intro: "Bačić Kuk, Budakovo Brdo e Kiza con mappe e GPX. Altre escursioni in arrivo." },
    { id: "sea", title: "Mare & spiagge", intro: "Karlobag, Zavratnica, Pag e Paklenica — gite giornaliere." },
    { id: "food", title: "Gastronomia", intro: "Formaggio di Pag, pesce fresco, erbe e serate al fuoco." },
    { id: "agro", title: "Agroturismo (presto)", intro: "Tè di montagna, miele e passeggiate botaniche — in arrivo." },
  ],
};

const byLocale: Record<Locale, ExperiencesPageContent> = { en, hr, de, fr, it };

export function getExperiencesPageContent(locale: Locale): ExperiencesPageContent {
  return byLocale[locale];
}
