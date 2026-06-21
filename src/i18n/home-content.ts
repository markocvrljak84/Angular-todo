import type { Locale } from "./config";

export type HomeEditorialBlock = {
  layout: "full" | "split";
  title: string;
  body: string;
  imageAlt: string;
};

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
    cards: { title: string; body: string; imageAlt: string }[];
  };
  editorial: {
    title: string;
    intro: string;
    ctaLabel: string;
    blocks: [HomeEditorialBlock, HomeEditorialBlock, HomeEditorialBlock];
  };
  accommodation: {
    title: string;
    lead: string;
    imageAlt: string;
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
        imageAlt: "Velebit ridge and forest above Bačić Duliba",
      },
      {
        title: "Sea",
        body: "Karlobag, Zavratnica and Pag are half an hour away — mountain mornings, Adriatic afternoons.",
        imageAlt: "Zavratnica cove on the Adriatic coast",
      },
      {
        title: "Stars",
        body: "No light pollution — Milky Way nights, hammocks and ridge silence after dark.",
        imageAlt: "Starry night sky above Velebit",
      },
    ],
  },
  editorial: {
    title: "Experience in photos",
    intro:
      "Mountain mornings, Adriatic afternoons and evenings by the fire — life at Stars Peak in three moments.",
    ctaLabel: "Full gallery",
    blocks: [
      {
        layout: "full",
        title: "Outdoor kitchen",
        body:
          "The summer kitchen and terrace are where days slow down — grill, pine-scented air and wide views of the valley.",
        imageAlt: "Outdoor summer kitchen and terrace at Stars Peak",
      },
      {
        layout: "split",
        title: "Wood follows the forest",
        body:
          "The living room is the heart of your stay — local wood, a fireplace and soft light from the gallery wall. A calm place to unwind after the trail, plan the next hike or watch Bačić Kuk through the glass.",
        imageAlt: "Velebit mountain chalet Stars Peak — gallery photo 8",
      },
      {
        layout: "full",
        title: "Velebit at your doorstep",
        body:
          "Forest, wildlife and silence surround the chalet — Bačić Kuk rises above the treeline minutes from the door.",
        imageAlt: "Forest and mountain landscape around the chalet",
      },
    ],
  },
  accommodation: {
    title: "Your stay at a glance",
    lead:
      "A private wooden chalet for up to four guests — fireplace, outdoor kitchen and views of Bačić Kuk from the terrace.",
    imageAlt: "Velebit mountain chalet Stars Peak — gallery photo 3",
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
      { name: "Paklenica", note: "Canyon & cliffs" },
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
        imageAlt: "Velebitski greben i šuma iznad Bačić Dulibe",
      },
      {
        title: "More",
        body: "Karlobag, Zavratnica i Pag udaljeni su pola sata vožnje — jutro na planini, popodne u moru.",
        imageAlt: "Uvala Zavratnica na jadranskoj obali",
      },
      {
        title: "Zvijezde",
        body: "Bez svjetlosnog onečišćenja — Mliječna staza, hamaci i tišina grebena nakon mraka.",
        imageAlt: "Zvjezdano noćno nebo iznad Velebita",
      },
    ],
  },
  editorial: {
    title: "Doživljaj u fotografijama",
    intro:
      "Planinska jutra, jadranska popodneva i večeri uz vatru — tri trenutka života na Stars Peaku.",
    ctaLabel: "Cijela galerija",
    blocks: [
      {
        layout: "full",
        title: "Ljetnja kuhinja",
        body:
          "Ljetnja kuhinja i terasa usporavaju dan — roštilj, miris bora i široki pogled na dolinu.",
        imageAlt: "Vanjska ljetnja kuhinja i terasa na Stars Peaku",
      },
      {
        layout: "split",
        title: "Drvo prati šumu",
        body:
          "Dnevni boravak je srce kuće — lokalno drvo, kamin i meka svjetlost s galerije. Mirno mjesto za odmor nakon staze, planiranje sljedećeg uspona ili pogled na Bačić kuk kroz staklo.",
        imageAlt: "Planinska kuća Stars Peak na Velebitu — galerija fotografija 8",
      },
      {
        layout: "full",
        title: "Velebit na dohvat ruke",
        body:
          "Šuma, divlje životinje i tišina oko kuće — Bačić kuk se diže iznad krošnji minutama od vrata.",
        imageAlt: "Šuma i planinski krajolik oko kuće",
      },
    ],
  },
  accommodation: {
    title: "Smještaj ukratko",
    lead:
      "Privatna drvena kuća za do četiri gosta — kamin, vanjska kuhinja i pogled na Bačić kuk s terase.",
    imageAlt: "Planinska kuća Stars Peak na Velebitu — galerija fotografija 3",
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
      { name: "Paklenica", note: "Kanjon i litice" },
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
      {
        title: "Berg",
        body: "Bačić Kuk, Premužić-Weg und Dabarski kukovi — klassisches Velebit-Wandern ab der Haustür.",
        imageAlt: "Velebit-Kamm und Wald über Bačić Duliba",
      },
      {
        title: "Meer",
        body: "Karlobag, Zavratnica und Pag in einer halben Stunde — Bergmorgen, Adria-Nachmittag.",
        imageAlt: "Bucht Zavratnica an der Adria",
      },
      {
        title: "Sterne",
        body: "Keine Lichtverschmutzung — Milchstraße, Hängematten und Grat-Stille.",
        imageAlt: "Sternenhimmel über dem Velebit",
      },
    ],
  },
  editorial: {
    title: "Erlebnisse in Bildern",
    intro:
      "Bergmorgen, Adria-Nachmittage und Abende am Feuer — drei Momente auf Stars Peak.",
    ctaLabel: "Galerie ansehen",
    blocks: [
      {
        layout: "full",
        title: "Außenküche",
        body:
          "Sommerküche und Terrasse — Grill, Pinienduft und weite Talblicke.",
        imageAlt: "Sommerküche und Terrasse auf Stars Peak",
      },
      {
        layout: "split",
        title: "Holz folgt dem Wald",
        body:
          "Der Wohnbereich ist das Herz des Aufenthalts — lokales Holz, Kamin und sanftes Licht. Ein ruhiger Ort nach der Tour, um zu lesen oder Bačić Kuk durch die Glaswand zu sehen.",
        imageAlt: "Berghütte Stars Peak am Velebit — Galeriebild 8",
      },
      {
        layout: "full",
        title: "Velebit vor der Tür",
        body:
          "Wald, Wildnis und Stille — Bačić Kuk ragt Minuten von der Haustür über die Baumgrenze.",
        imageAlt: "Wald und Berglandschaft um die Hütte",
      },
    ],
  },
  accommodation: {
    title: "Ihr Aufenthalt auf einen Blick",
    lead:
      "Privates Holzhaus für bis zu vier Gäste — Kamin, Außenküche und Blick auf Bačić Kuk.",
    imageAlt: "Berghütte Stars Peak am Velebit — Galeriebild 3",
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
      { name: "Paklenica", note: "Schlucht & Felswände" },
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
      {
        title: "Montagne",
        body: "Bačić Kuk, sentier Premužić et Dabarski kukovi — randonnée classique du Velebit.",
        imageAlt: "Crête du Velebit et forêt au-dessus de Bačić Duliba",
      },
      {
        title: "Mer",
        body: "Karlobag, Zavratnica et Pag à une demi-heure — matin montagne, après-midi mer.",
        imageAlt: "Crique de Zavratnica sur l'Adriatique",
      },
      {
        title: "Étoiles",
        body: "Pas de pollution lumineuse — Voie lactée et silence des crêtes.",
        imageAlt: "Ciel étoilé au-dessus du Velebit",
      },
    ],
  },
  editorial: {
    title: "L'expérience en photos",
    intro:
      "Matins en montagne, après-midis à l'Adriatique et soirées au feu — trois instants à Stars Peak.",
    ctaLabel: "Galerie complète",
    blocks: [
      {
        layout: "full",
        title: "Cuisine d'été",
        body:
          "La cuisine extérieure et la terrasse ralentissent le rythme — grillades, pin et vue sur la vallée.",
        imageAlt: "Cuisine d'été et terrasse à Stars Peak",
      },
      {
        layout: "split",
        title: "Le bois suit la forêt",
        body:
          "Le salon est le cœur du séjour — bois local, cheminée et lumière douce. Un lieu calme après la randonnée, pour lire ou regarder Bačić Kuk à travers la verrière.",
        imageAlt: "Chalet Stars Peak sur le Velebit — photo galerie 8",
      },
      {
        layout: "full",
        title: "Le Velebit à vos pieds",
        body:
          "Forêt, faune et silence — Bačić Kuk domine la crête à quelques minutes de la porte.",
        imageAlt: "Forêt et paysage montagneux autour du chalet",
      },
    ],
  },
  accommodation: {
    title: "Votre séjour en bref",
    lead:
      "Chalet en bois privé pour quatre personnes — cheminée, cuisine extérieure et vue sur Bačić Kuk.",
    imageAlt: "Chalet Stars Peak sur le Velebit — photo galerie 3",
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
      { name: "Paklenica", note: "Canyon & falaises" },
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
      {
        title: "Montagna",
        body: "Bačić Kuk, sentiero Premužić e Dabarski kukovi — escursioni classiche del Velebit.",
        imageAlt: "Cresta del Velebit e foresta sopra Bačić Duliba",
      },
      {
        title: "Mare",
        body: "Karlobag, Zavratnica e Pag a mezz'ora — mattina in montagna, pomeriggio al mare.",
        imageAlt: "Baia di Zavratnica sull'Adriatico",
      },
      {
        title: "Stelle",
        body: "Nessun inquinamento luminoso — Via Lattea e silenzio della cresta.",
        imageAlt: "Cielo stellato sopra il Velebit",
      },
    ],
  },
  editorial: {
    title: "L'esperienza in foto",
    intro:
      "Mattine in montagna, pomeriggi sull'Adriatico e serate al fuoco — tre momenti a Stars Peak.",
    ctaLabel: "Galleria completa",
    blocks: [
      {
        layout: "full",
        title: "Cucina esterna",
        body:
          "La cucina estiva e la terrazza rallentano il ritmo — griglia, pino e vista sulla valle.",
        imageAlt: "Cucina estiva e terrazza a Stars Peak",
      },
      {
        layout: "split",
        title: "Il legno segue la foresta",
        body:
          "Il soggiorno è il cuore della casa — legno locale, camino e luce morbida. Un luogo tranquillo dopo l'escursione, per leggere o guardare Bačić Kuk attraverso il vetro.",
        imageAlt: "Chalet Stars Peak sul Velebit — foto galleria 8",
      },
      {
        layout: "full",
        title: "Il Velebit a portata di mano",
        body:
          "Foresta, fauna e silenzio — Bačić Kuk svetta sopra la linea degli alberi a pochi minuti dalla porta.",
        imageAlt: "Foresta e paesaggio montano intorno al chalet",
      },
    ],
  },
  accommodation: {
    title: "Il soggiorno in breve",
    lead:
      "Chalet in legno privato per quattro ospiti — camino, cucina esterna e vista su Bačić Kuk.",
    imageAlt: "Chalet Stars Peak sul Velebit — foto galleria 3",
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
      { name: "Paklenica", note: "Canyon e falesie" },
    ],
  },
  finalCta: { headline: "Montagna. Mare. Stelle. In un giorno.", btnLabel: "Verifica disponibilità" },
};

const byLocale: Record<Locale, HomeContent> = { en, hr, de, fr, it };

export function getHomeContent(locale: Locale): HomeContent {
  return byLocale[locale];
}
