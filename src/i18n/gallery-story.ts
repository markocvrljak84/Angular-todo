import type { Locale } from "./config";

export type GalleryStoryPair = {
  image: string;
  title: string;
  body: string;
  imageAlt: string;
};

export type GalleryStoryContent = {
  interiorLabel: string;
  interiorIntro: string;
  exteriorLabel: string;
  interior: [GalleryStoryPair, GalleryStoryPair, GalleryStoryPair, GalleryStoryPair];
  exterior: [GalleryStoryPair, GalleryStoryPair];
};

const en: GalleryStoryContent = {
  interiorLabel: "Interior",
  interiorIntro:
    "Wood, light and quiet rooms — the chalet from kitchen table to loft bed. These frames show how the house holds a slower day: cooking, resting, reading, and looking out into the forest.",
  exteriorLabel: "Outdoors",
  interior: [
    {
      image: "740290390.jpg",
      title: "Kitchen & table",
      body: "Bread on the board, flowers on the table, forest light at the window — meals that slow the day down.",
      imageAlt: "Wooden dining table and kitchen at Stars Peak with forest view",
    },
    {
      image: "585009655_122107017075084437_1671659401079838438_n.jpg",
      title: "Living room",
      body: "After lunch the house softens — a quiet seat, warm wood, and time that does not ask for plans.",
      imageAlt: "Living room seating area at Stars Peak after a meal",
    },
    {
      image: "812808252.jpg",
      title: "The loft",
      body: "The upper room at a glance — bed under the peak, a chair for reading, honey-toned timber all around.",
      imageAlt: "A-frame loft bedroom and sitting area seen from a distance",
    },
    {
      image: "812808512.jpg",
      title: "From the bed",
      body: "Books on the tray, forest in the window — mornings that begin without leaving the covers.",
      imageAlt: "View from the loft bed toward the forest window with books on a tray",
    },
  ],
  exterior: [
    {
      image: "20260604_173207.jpg",
      title: "Outdoor kitchen",
      body: "Fire in the hearth, a pot on the stove, and Bačić Kuk on the horizon — cooking with the mountain open.",
      imageAlt: "Outdoor kitchen with wood fire and view of Bačić Kuk",
    },
    {
      image: "20260604_132024.jpg",
      title: "Table on the terrace",
      body: "Caprese, peaches and mountain air — lunch that belongs outdoors under the trees.",
      imageAlt: "Outdoor table set with Caprese, bread, peaches and cherries",
    },
  ],
};

const hr: GalleryStoryContent = {
  interiorLabel: "Interijer",
  interiorIntro:
    "Drvo, svjetlo i tihe sobe — kuća od kuhinjskog stola do kreveta u galeriji. Ovi kadrovi pokazuju kako Stars Peak drži sporiji dan: kuhanje, odmor, čitanje i pogled u šumu.",
  exteriorLabel: "Vani",
  interior: [
    {
      image: "740290390.jpg",
      title: "Kuhinja i stol",
      body: "Kruh na dasci, cvijeće na stolu, šumsko svjetlo na prozoru — obroci koji usporavaju dan.",
      imageAlt: "Drveni blagovaonski stol i kuhinja na Stars Peaku s pogledom na šumu",
    },
    {
      image: "585009655_122107017075084437_1671659401079838438_n.jpg",
      title: "Dnevni boravak",
      body: "Nakon ručka kuća omekša — mirno sjedalo, toplina drveta i vrijeme koje ne traži planove.",
      imageAlt: "Dnevni boravak na Stars Peaku nakon obroka",
    },
    {
      image: "812808252.jpg",
      title: "Galerija",
      body: "Gornja soba iz daljine — krevet pod vrhom krova, fotelja za čitanje, medeno drvo posvuda.",
      imageAlt: "Galerija A-okvira s krevetom i sjedalom iz daljine",
    },
    {
      image: "812808512.jpg",
      title: "Iz kreveta",
      body: "Knjige na pladnju, šuma u prozoru — jutra koja počinju bez ustajanja.",
      imageAlt: "Pogled iz kreveta u galeriji prema šumi s knjigama na pladnju",
    },
  ],
  exterior: [
    {
      image: "20260604_173207.jpg",
      title: "Vanjska kuhinja",
      body: "Vatra u ognjištu, lonac na štednjaku i Bačić kuk na horizontu — kuhanje s planinom otvorenom pred vama.",
      imageAlt: "Vanjska kuhinja s vatrom i pogledom na Bačić kuk",
    },
    {
      image: "20260604_132024.jpg",
      title: "Stol na terasi",
      body: "Caprese, breskve i planinski zrak — ručak koji pripada vani pod drvećem.",
      imageAlt: "Vanjski stol s capreseom, kruhom, breskvama i trešnjama",
    },
  ],
};

const de: GalleryStoryContent = {
  ...en,
  interiorLabel: "Innenraum",
  interiorIntro:
    "Holz, Licht und stille Räume — das Haus vom Küchentisch bis zum Bett in der Galerie. Diese Bilder zeigen, wie Stars Peak einen langsameren Tag trägt: kochen, ruhen, lesen und in den Wald blicken.",
  exteriorLabel: "Draußen",
  interior: [
    {
      image: "740290390.jpg",
      title: "Küche & Tisch",
      body: "Brot auf dem Brett, Blumen auf dem Tisch, Waldlicht am Fenster — Mahlzeiten, die den Tag verlangsamen.",
      imageAlt: "Holztisch und Küche auf Stars Peak mit Waldblick",
    },
    {
      image: "585009655_122107017075084437_1671659401079838438_n.jpg",
      title: "Wohnzimmer",
      body: "Nach dem Mittagessen wird das Haus leiser — ein ruhiger Sitzplatz, warmes Holz und Zeit ohne Plan.",
      imageAlt: "Wohnbereich auf Stars Peak nach dem Essen",
    },
    {
      image: "812808252.jpg",
      title: "Die Galerie",
      body: "Der Oberraum im Überblick — Bett unter dem First, Sessel zum Lesen, honigfarbenes Holz überall.",
      imageAlt: "A-Rahmen-Galerie mit Bett und Sitzecke aus der Distanz",
    },
    {
      image: "812808512.jpg",
      title: "Vom Bett aus",
      body: "Bücher auf dem Tablett, Wald im Fenster — Morgen, die ohne Aufstehen beginnen.",
      imageAlt: "Blick vom Bett der Galerie zum Wald mit Büchern auf dem Tablett",
    },
  ],
  exterior: [
    {
      image: "20260604_173207.jpg",
      title: "Außenküche",
      body: "Feuer im Herd, Topf auf dem Herd und Bačić Kuk am Horizont — kochen mit offenem Bergblick.",
      imageAlt: "Außenküche mit Holzfeuer und Blick auf Bačić Kuk",
    },
    {
      image: "20260604_132024.jpg",
      title: "Tisch auf der Terrasse",
      body: "Caprese, Pfirsiche und Bergluft — Mittagessen, das nach draußen unter die Bäume gehört.",
      imageAlt: "Outdoor-Tisch mit Caprese, Brot, Pfirsichen und Kirschen",
    },
  ],
};

const fr: GalleryStoryContent = {
  ...en,
  interiorLabel: "Intérieur",
  interiorIntro:
    "Bois, lumière et pièces tranquilles — la maison de la table de cuisine au lit en mezzanine. Ces images montrent comment Stars Peak porte une journée plus lente : cuisiner, se reposer, lire et regarder la forêt.",
  exteriorLabel: "Extérieur",
  interior: [
    {
      image: "740290390.jpg",
      title: "Cuisine & table",
      body: "Pain sur la planche, fleurs sur la table, lumière de forêt à la fenêtre — des repas qui ralentissent le jour.",
      imageAlt: "Table en bois et cuisine à Stars Peak avec vue sur la forêt",
    },
    {
      image: "585009655_122107017075084437_1671659401079838438_n.jpg",
      title: "Salon",
      body: "Après le déjeuner, la maison s'adoucit — un siège calme, le bois chaud, et du temps sans plan.",
      imageAlt: "Salon à Stars Peak après le repas",
    },
    {
      image: "812808252.jpg",
      title: "La mezzanine",
      body: "La pièce du haut d'un coup d'œil — lit sous le faîte, fauteuil pour lire, bois miel partout.",
      imageAlt: "Mezzanine en A avec lit et coin lecture vus de loin",
    },
    {
      image: "812808512.jpg",
      title: "Depuis le lit",
      body: "Livres sur le plateau, forêt à la fenêtre — des matins qui commencent sans se lever.",
      imageAlt: "Vue depuis le lit de la mezzanine vers la forêt avec des livres",
    },
  ],
  exterior: [
    {
      image: "20260604_173207.jpg",
      title: "Cuisine extérieure",
      body: "Feu dans l'âtre, casserole sur le feu, et Bačić Kuk à l'horizon — cuisiner face à la montagne.",
      imageAlt: "Cuisine extérieure avec feu de bois et vue sur Bačić Kuk",
    },
    {
      image: "20260604_132024.jpg",
      title: "Table en terrasse",
      body: "Caprese, pêches et air de montagne — un déjeuner qui appartient dehors sous les arbres.",
      imageAlt: "Table extérieure avec caprese, pain, pêches et cerises",
    },
  ],
};

const it: GalleryStoryContent = {
  ...en,
  interiorLabel: "Interni",
  interiorIntro:
    "Legno, luce e stanze quiete — la casa dal tavolo della cucina al letto nel loft. Queste immagini mostrano come Stars Peak accompagna una giornata più lenta: cucinare, riposare, leggere e guardare il bosco.",
  exteriorLabel: "Esterni",
  interior: [
    {
      image: "740290390.jpg",
      title: "Cucina e tavolo",
      body: "Pane sul tagliere, fiori sul tavolo, luce del bosco alla finestra — pasti che rallentano la giornata.",
      imageAlt: "Tavolo in legno e cucina a Stars Peak con vista sul bosco",
    },
    {
      image: "585009655_122107017075084437_1671659401079838438_n.jpg",
      title: "Soggiorno",
      body: "Dopo pranzo la casa si fa più quieta — un sedile calmo, legno caldo e tempo senza piani.",
      imageAlt: "Soggiorno a Stars Peak dopo il pasto",
    },
    {
      image: "812808252.jpg",
      title: "Il loft",
      body: "La stanza di sopra a colpo d'occhio — letto sotto il colmo, poltrona per leggere, legno miele ovunque.",
      imageAlt: "Loft a A-frame con letto e zona lettura visti da lontano",
    },
    {
      image: "812808512.jpg",
      title: "Dal letto",
      body: "Libri sul vassoio, bosco alla finestra — mattine che iniziano senza alzarsi.",
      imageAlt: "Vista dal letto del loft verso il bosco con libri sul vassoio",
    },
  ],
  exterior: [
    {
      image: "20260604_173207.jpg",
      title: "Cucina esterna",
      body: "Fuoco nel focolare, pentola sul fornello e Bačić Kuk all'orizzonte — cucinare con la montagna aperta.",
      imageAlt: "Cucina esterna con fuoco e vista su Bačić Kuk",
    },
    {
      image: "20260604_132024.jpg",
      title: "Tavolo in terrazza",
      body: "Caprese, pesche e aria di montagna — un pranzo che appartiene fuori sotto gli alberi.",
      imageAlt: "Tavolo all'aperto con caprese, pane, pesche e ciliegie",
    },
  ],
};

const byLocale: Record<Locale, GalleryStoryContent> = { en, hr, de, fr, it };

export function getGalleryStoryContent(locale: Locale): GalleryStoryContent {
  return byLocale[locale] ?? en;
}
