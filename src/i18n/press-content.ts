import type { Locale } from "./config";
import { JUTARNJI_ABOUT_ARTICLE_URL } from "./about-story";
import { SITE_CONTACT } from "@/config/site-contact";

export type PressLink = {
  name: string;
  href: string;
  note: string;
};

export type PressAudience = {
  title: string;
  body: string;
  bullets: string[];
  relatedHref?: string;
  relatedLabel?: string;
};

export type PressPageContent = {
  title: string;
  intro: string;
  featuredTitle: string;
  featured: PressLink[];
  partnersTitle: string;
  partnersIntro: string;
  partners: PressLink[];
  audiencesTitle: string;
  audiences: PressAudience[];
  factsTitle: string;
  facts: string[];
  outreachTitle: string;
  outreachBody: string;
  contactLead: string;
  contactEmailLabel: string;
};

const VIA_ADRIATICA = "https://viaadriatica.org";
const PAG_OUTDOOR_EN =
  "https://www.pag-outdoor.com/en/otok-pag-ili-mjesec-podno-velebita/";

const byLocale: Record<Locale, PressPageContent> = {
  en: {
    title: "Press & partners",
    intro:
      "Stars Peak is a private mountain cabin on Velebit — useful for hiking writers, outdoor editors, photographers and local press who need a real place, clear facts and a simple contact.",
    featuredTitle: "Featured in the press",
    featured: [
      {
        name: "Jutarnji list",
        href: JUTARNJI_ABOUT_ARTICLE_URL,
        note: "Marko and Ljiljana’s Stars Peak story — wooden mountain home under Bačić Kuk.",
      },
    ],
    partnersTitle: "Useful references on Velebit & the coast",
    partnersIntro:
      "These projects and stories help place Stars Peak in the wider Velebit–Adriatic map. We welcome editorial mentions that point guests to the mountain.",
    partners: [
      {
        name: "Via Adriatica",
        href: VIA_ADRIATICA,
        note: "Croatia’s long-distance coastal mountain trail — Velebit is a key stretch for thru-hikers and section hikers.",
      },
      {
        name: "Pag Outdoor",
        href: PAG_OUTDOOR_EN,
        note: "Island-and-mountain perspective from Pag toward Velebit — useful context for day trips from Stars Peak.",
      },
    ],
    audiencesTitle: "Who we collaborate with",
    audiences: [
      {
        title: "Hiking & outdoor blogs",
        body: "If you cover Premužić Trail, Bačić Kuk, Via Adriatica stages or Velebit hiking holidays, we can host research stays and share GPX, route notes and cabin practicalities.",
        bullets: [
          "Trail access from the cabin door",
          "Maps and GPX for nearby peaks",
          "Quiet base between ridge days and Adriatic swims",
        ],
        relatedHref: "/velebit-hiking-retreat",
        relatedLabel: "Hiking retreat page",
      },
      {
        title: "Astro & landscape photographers",
        body: "Low light pollution, ridge silhouettes and Bačić Kuk views suit night-sky and landscape work. Pitch us for location visits or feature shoots.",
        bullets: [
          "Dark-sky evenings above Bačić Duliba",
          "Golden-hour light on rock and forest",
          "Private cabin for multi-day shoots",
        ],
        relatedHref: "/photography-retreat",
        relatedLabel: "Photography retreat page",
      },
      {
        title: "Local portals & travel press",
        body: "Need facts, photos credits or a quote from the hosts? Start from the Jutarnji feature and contact us for updates, new angles or language versions.",
        bullets: [
          "Off-grid solar and rainwater systems",
          "Up to four guests, fireplace and outdoor kitchen",
          "900 m elevation, ~30 min to the Adriatic",
        ],
        relatedHref: "/about",
        relatedLabel: "About the hosts",
      },
    ],
    factsTitle: "Quick facts for editors",
    facts: [
      `${SITE_CONTACT.businessName}`,
      "Address: Došen Dabar 1, Bačić Duliba / Karlobag, Croatia",
      "Elevation: about 900 m on Velebit",
      "Capacity: up to 4 guests",
      "Themes: hiking, dark skies, off-grid living, remote work, photography",
      `Contact: ${SITE_CONTACT.email} · ${SITE_CONTACT.phone}`,
    ],
    outreachTitle: "Request a mention or visit",
    outreachBody:
      "Tell us who you write for, what angle you need (hiking, stargazing, off-grid, photography) and your dates. We reply with facts, links and whether a press or creator stay is possible.",
    contactLead: "Email for press and partnerships",
    contactEmailLabel: SITE_CONTACT.email,
  },
  hr: {
    title: "Press i partneri",
    intro:
      "Stars Peak je privatna planinska kuća na Velebitu — korisna planinarskim autorima, outdoor urednicima, fotografima i lokalnim medijima kojima trebaju stvarno mjesto, jasne činjenice i jednostavan kontakt.",
    featuredTitle: "U medijima",
    featured: [
      {
        name: "Jutarnji list",
        href: JUTARNJI_ABOUT_ARTICLE_URL,
        note: "Priča Marka i Ljiljane o Stars Peaku — drvena planinska kuća ispod Bačić kuka.",
      },
    ],
    partnersTitle: "Korisne reference na Velebitu i obali",
    partnersIntro:
      "Ovi projekti i priče smještaju Stars Peak u širu mapu Velebita i Jadrana. Dobrodošle su uredničke objave koje goste usmjeravaju na planinu.",
    partners: [
      {
        name: "Via Adriatica",
        href: VIA_ADRIATICA,
        note: "Hrvatska duga planinarska staza duž priobalnih planina — Velebit je ključna dionica.",
      },
      {
        name: "Pag Outdoor",
        href: "https://www.pag-outdoor.com/hr/otok-pag-ili-mjesec-podno-velebita/",
        note: "Pogled s Paga prema Velebitu — kontekst za jednodnevne izlete sa Stars Peaka.",
      },
    ],
    audiencesTitle: "S kime surađujemo",
    audiences: [
      {
        title: "Planinarski i outdoor blogovi",
        body: "Ako pišete o Premužićevoj stazi, Bačić kuku, Via Adriatici ili odmoru na Velebitu, možemo ugostiti istraživački boravak i podijeliti GPX, bilješke o rutama i praktične detalje kuće.",
        bullets: [
          "Pristup stazama od kuće",
          "Karte i GPX za obližnje vrhove",
          "Mirna baza između grebena i Jadrana",
        ],
        relatedHref: "/velebit-hiking-retreat",
        relatedLabel: "Stranica hiking retreat",
      },
      {
        title: "Astro i pejzažni fotografi",
        body: "Malo svjetlosnog onečišćenja, siluete grebena i Bačić kuk pogoduju noćnom nebu i pejzažu. Javite se za lokacijske posjete ili feature snimanja.",
        bullets: [
          "Dark-sky večeri iznad Bačić Dulibe",
          "Zlatni sat na kamenu i šumi",
          "Privatna kuća za višednevna snimanja",
        ],
        relatedHref: "/photography-retreat",
        relatedLabel: "Stranica photography retreat",
      },
      {
        title: "Lokalni portali i travel press",
        body: "Trebate činjenice, foto kredite ili izjavu domaćina? Krenite od Jutarnjeg i kontaktirajte nas za update, novi kut ili jezične verzije.",
        bullets: [
          "Off-grid solar i kišnica",
          "Do 4 gosta, kamin i vanjska kuhinja",
          "900 m nadmorske visine, ~30 min do Jadrana",
        ],
        relatedHref: "/about",
        relatedLabel: "O nama",
      },
    ],
    factsTitle: "Brze činjenice za urednike",
    facts: [
      `${SITE_CONTACT.businessName}`,
      "Adresa: Došen Dabar 1, Bačić Duliba / Karlobag, Hrvatska",
      "Nadmorska visina: oko 900 m na Velebitu",
      "Kapacitet: do 4 gosta",
      "Teme: planinarenje, zvijezde, off-grid, remote work, fotografija",
      `Kontakt: ${SITE_CONTACT.email} · ${SITE_CONTACT.phone}`,
    ],
    outreachTitle: "Zahtjev za objavu ili posjet",
    outreachBody:
      "Recite nam za koga pišete, koji kut trebate (planinarenje, zvijezde, off-grid, fotografija) i datume. Odgovaramo s činjenicama, linkovima i mogućnošću press ili creator boravka.",
    contactLead: "E-mail za press i partnerstva",
    contactEmailLabel: SITE_CONTACT.email,
  },
  de: {
    title: "Presse & Partner",
    intro:
      "Stars Peak ist eine private Berghütte am Velebit — hilfreich für Wanderautoren, Outdoor-Redaktionen, Fotografen und lokale Medien, die einen echten Ort, klare Fakten und einen einfachen Kontakt brauchen.",
    featuredTitle: "In der Presse",
    featured: [
      {
        name: "Jutarnji list",
        href: JUTARNJI_ABOUT_ARTICLE_URL,
        note: "Die Stars-Peak-Geschichte von Marko und Ljiljana — Holzhaus unter Bačić Kuk.",
      },
    ],
    partnersTitle: "Nützliche Referenzen am Velebit & an der Küste",
    partnersIntro:
      "Diese Projekte helfen, Stars Peak in die weitere Velebit–Adria-Karte einzuordnen. Redaktionelle Erwähnungen, die Gäste zum Berg führen, sind willkommen.",
    partners: [
      {
        name: "Via Adriatica",
        href: VIA_ADRIATICA,
        note: "Kroatiens Weitwanderweg entlang der Küstenberge — der Velebit ist ein Schlüsselabschnitt.",
      },
      {
        name: "Pag Outdoor",
        href: "https://www.pag-outdoor.com/de/otok-pag-ili-mjesec-podno-velebita/",
        note: "Blick von Pag zum Velebit — Kontext für Tagesausflüge ab Stars Peak.",
      },
    ],
    audiencesTitle: "Mit wem wir zusammenarbeiten",
    audiences: [
      {
        title: "Wander- & Outdoor-Blogs",
        body: "Wenn Sie Premužić-Pfad, Bačić Kuk, Via Adriatica oder Velebit-Wanderurlaub abdecken, können wir Rechercheaufenthalte ermöglichen und GPX, Routennotizen sowie Hüttendetails teilen.",
        bullets: [
          "Wege ab der Haustür",
          "Karten und GPX für nahe Gipfel",
          "Ruhige Basis zwischen Kamm und Adria",
        ],
        relatedHref: "/velebit-hiking-retreat",
        relatedLabel: "Wanderretreat-Seite",
      },
      {
        title: "Astro- & Landschaftsfotografen",
        body: "Wenig Lichtverschmutzung, Kammsilhouetten und Bačić-Kuk-Blicke eignen sich für Nachthimmel und Landschaft. Melden Sie sich für Location-Besuche oder Feature-Shootings.",
        bullets: [
          "Dark-Sky-Abende über Bačić Duliba",
          "Goldene Stunde auf Fels und Wald",
          "Private Hütte für mehrtägige Shoots",
        ],
        relatedHref: "/photography-retreat",
        relatedLabel: "Fotografie-Retreat-Seite",
      },
      {
        title: "Lokale Portale & Reisepresse",
        body: "Fakten, Bildnachweise oder ein Zitat der Gastgeber? Starten Sie mit dem Jutarnji-Beitrag und kontaktieren Sie uns für Updates oder neue Winkel.",
        bullets: [
          "Off-Grid Solar und Regenwasser",
          "Bis 4 Gäste, Kamin und Außenküche",
          "900 m, ca. 30 Min. zur Adria",
        ],
        relatedHref: "/about",
        relatedLabel: "Über die Gastgeber",
      },
    ],
    factsTitle: "Kurzfakten für Redaktionen",
    facts: [
      `${SITE_CONTACT.businessName}`,
      "Adresse: Došen Dabar 1, Bačić Duliba / Karlobag, Kroatien",
      "Höhe: ca. 900 m am Velebit",
      "Kapazität: bis 4 Gäste",
      "Themen: Wandern, Sterne, Off-Grid, Remote Work, Fotografie",
      `Kontakt: ${SITE_CONTACT.email} · ${SITE_CONTACT.phone}`,
    ],
    outreachTitle: "Erwähnung oder Besuch anfragen",
    outreachBody:
      "Sagen Sie uns Medium, Winkel (Wandern, Sterne, Off-Grid, Fotografie) und Daten. Wir antworten mit Fakten, Links und ob ein Presse-/Creator-Aufenthalt möglich ist.",
    contactLead: "E-Mail für Presse und Partnerschaften",
    contactEmailLabel: SITE_CONTACT.email,
  },
  fr: {
    title: "Presse & partenaires",
    intro:
      "Stars Peak est un chalet privé sur le Velebit — utile aux auteurs de randonnée, rédactions outdoor, photographes et médias locaux qui ont besoin d’un lieu réel, de faits clairs et d’un contact simple.",
    featuredTitle: "Dans la presse",
    featured: [
      {
        name: "Jutarnji list",
        href: JUTARNJI_ABOUT_ARTICLE_URL,
        note: "L’histoire de Marko et Ljiljana — maison en bois sous Bačić Kuk.",
      },
    ],
    partnersTitle: "Références utiles sur le Velebit et le littoral",
    partnersIntro:
      "Ces projets aident à situer Stars Peak sur la carte Velebit–Adriatique. Les mentions éditoriales qui guident les voyageurs vers la montagne sont les bienvenues.",
    partners: [
      {
        name: "Via Adriatica",
        href: VIA_ADRIATICA,
        note: "Sentier de grande randonnée côtier de Croatie — le Velebit est un tronçon clé.",
      },
      {
        name: "Pag Outdoor",
        href: "https://www.pag-outdoor.com/fr/otok-pag-ili-mjesec-podno-velebita/",
        note: "Perspective Pag–Velebit — contexte pour les escapades depuis Stars Peak.",
      },
    ],
    audiencesTitle: "Avec qui nous collaborons",
    audiences: [
      {
        title: "Blogs randonnée & outdoor",
        body: "Si vous couvrez le sentier Premužić, Bačić Kuk, Via Adriatica ou les séjours randonnée sur le Velebit, nous pouvons accueillir des séjours de recherche et partager GPX, notes et détails pratiques.",
        bullets: [
          "Accès aux sentiers depuis la porte",
          "Cartes et GPX pour les sommets proches",
          "Base calme entre crête et Adriatique",
        ],
        relatedHref: "/velebit-hiking-retreat",
        relatedLabel: "Page retreat randonnée",
      },
      {
        title: "Photographes astro & paysage",
        body: "Peu de pollution lumineuse, silhouettes de crête et vues sur Bačić Kuk pour le ciel nocturne et le paysage. Contactez-nous pour des repérages ou des shootings.",
        bullets: [
          "Soirées dark sky au-dessus de Bačić Duliba",
          "Heure dorée sur roche et forêt",
          "Chalet privé pour shoots de plusieurs jours",
        ],
        relatedHref: "/photography-retreat",
        relatedLabel: "Page retreat photo",
      },
      {
        title: "Portails locaux & presse voyage",
        body: "Besoin de faits, crédits photo ou citation des hôtes ? Partez de l’article Jutarnji et contactez-nous pour des mises à jour.",
        bullets: [
          "Solaire et eau de pluie off-grid",
          "Jusqu’à 4 personnes, cheminée et cuisine extérieure",
          "900 m, ~30 min jusqu’à l’Adriatique",
        ],
        relatedHref: "/about",
        relatedLabel: "À propos des hôtes",
      },
    ],
    factsTitle: "Faits rapides pour les rédactions",
    facts: [
      `${SITE_CONTACT.businessName}`,
      "Adresse : Došen Dabar 1, Bačić Duliba / Karlobag, Croatie",
      "Altitude : environ 900 m sur le Velebit",
      "Capacité : jusqu’à 4 personnes",
      "Thèmes : randonnée, étoiles, off-grid, télétravail, photo",
      `Contact : ${SITE_CONTACT.email} · ${SITE_CONTACT.phone}`,
    ],
    outreachTitle: "Demander une mention ou une visite",
    outreachBody:
      "Indiquez le média, l’angle (randonnée, étoiles, off-grid, photo) et les dates. Nous répondons avec faits, liens et possibilité d’un séjour presse/créateur.",
    contactLead: "E-mail presse et partenariats",
    contactEmailLabel: SITE_CONTACT.email,
  },
  it: {
    title: "Press & partner",
    intro:
      "Stars Peak è uno chalet privato sul Velebit — utile ad autori di trekking, redazioni outdoor, fotografi e media locali che servono un luogo reale, fatti chiari e un contatto semplice.",
    featuredTitle: "Sulla stampa",
    featured: [
      {
        name: "Jutarnji list",
        href: JUTARNJI_ABOUT_ARTICLE_URL,
        note: "La storia di Marko e Ljiljana — casa di legno sotto Bačić Kuk.",
      },
    ],
    partnersTitle: "Riferimenti utili sul Velebit e sulla costa",
    partnersIntro:
      "Questi progetti aiutano a collocare Stars Peak nella mappa Velebit–Adriatico. Benvenute le citazioni editoriali che portano gli ospiti in montagna.",
    partners: [
      {
        name: "Via Adriatica",
        href: VIA_ADRIATICA,
        note: "Sentiero di lunga distanza della Croazia lungo le montagne costiere — il Velebit è un tratto chiave.",
      },
      {
        name: "Pag Outdoor",
        href: "https://www.pag-outdoor.com/it/otok-pag-ili-mjesec-podno-velebita/",
        note: "Prospettiva Pag–Velebit — contesto per gite da Stars Peak.",
      },
    ],
    audiencesTitle: "Con chi collaboriamo",
    audiences: [
      {
        title: "Blog di escursionismo e outdoor",
        body: "Se scrivete di Premužić, Bačić Kuk, Via Adriatica o vacanze sul Velebit, possiamo ospitare soggiorni di ricerca e condividere GPX, note e dettagli pratici.",
        bullets: [
          "Accesso ai sentieri dalla porta",
          "Mappe e GPX per le vette vicine",
          "Base quieta tra cresta e Adriatico",
        ],
        relatedHref: "/velebit-hiking-retreat",
        relatedLabel: "Pagina hiking retreat",
      },
      {
        title: "Fotografi astro e paesaggio",
        body: "Poca inquinamento luminoso, silhouette di cresta e viste su Bačić Kuk per cielo notturno e paesaggio. Scriveteci per sopralluoghi o shooting.",
        bullets: [
          "Sere dark sky sopra Bačić Duliba",
          "Golden hour su roccia e bosco",
          "Chalet privato per shooting di più giorni",
        ],
        relatedHref: "/photography-retreat",
        relatedLabel: "Pagina photography retreat",
      },
      {
        title: "Portali locali e travel press",
        body: "Servono fatti, crediti foto o una citazione dei padroni di casa? Partite dall’articolo Jutarnji e contattateci per aggiornamenti.",
        bullets: [
          "Solare e acqua piovana off-grid",
          "Fino a 4 ospiti, camino e cucina esterna",
          "900 m, ~30 min all’Adriatico",
        ],
        relatedHref: "/about",
        relatedLabel: "Chi siamo",
      },
    ],
    factsTitle: "Fatti rapidi per le redazioni",
    facts: [
      `${SITE_CONTACT.businessName}`,
      "Indirizzo: Došen Dabar 1, Bačić Duliba / Karlobag, Croazia",
      "Quota: circa 900 m sul Velebit",
      "Capacità: fino a 4 ospiti",
      "Temi: trekking, stelle, off-grid, remote work, fotografia",
      `Contatto: ${SITE_CONTACT.email} · ${SITE_CONTACT.phone}`,
    ],
    outreachTitle: "Richiedere una menzione o una visita",
    outreachBody:
      "Diteci il media, l’angolo (trekking, stelle, off-grid, foto) e le date. Rispondiamo con fatti, link e se è possibile un soggiorno press/creator.",
    contactLead: "Email per press e partnership",
    contactEmailLabel: SITE_CONTACT.email,
  },
};

export function getPressPageContent(locale: Locale): PressPageContent {
  return byLocale[locale];
}
