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
  exterior: [GalleryStoryPair, GalleryStoryPair, GalleryStoryPair, GalleryStoryPair];
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
      body: "Tray on the covers, blue chair and forest in the gable window — mornings that begin without leaving the loft.",
      imageAlt:
        "View from the loft bed toward the sitting area and triangular forest window",
    },
  ],
  exterior: [
    {
      image: "ljetnja-kuhinja-3.jpg",
      title: "Outdoor kitchen",
      body: "The summer kitchen under the trees — wood stacked for the fire, a stove ready to cook, and the table already set with the mountain just beyond.",
      imageAlt:
        "Outdoor kitchen and dining table set for lunch with forest and mountain peaks at Stars Peak",
    },
    {
      image: "outdoor-kitchen-table-set.jpg",
      title: "Lunch outdoors",
      body: "Caprese, cherries, bread and peaches on the round table — a long outdoor lunch with the kitchen open behind you.",
      imageAlt:
        "Round outdoor table set with Caprese, cherries, bread and peaches at the Stars Peak summer kitchen",
    },
    {
      image: "20260604_173207.jpg",
      title: "Fire in the hearth",
      body: "When the evening cools, the outdoor fireplace takes over — wood fire, a pot on the stove, and Bačić Kuk still on the horizon.",
      imageAlt: "Outdoor kitchen with wood fire burning and Bačić Kuk on the horizon",
    },
    {
      image: "20260604_132024.jpg",
      title: "Table under the trees",
      body: "Fresh tomatoes, mozzarella and fruit in the shade — simple food that tastes better outside.",
      imageAlt: "Outdoor table set with Caprese, bread, peaches and cherries under the trees",
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
      imageAlt: "Sjedeći kutak dnevnog boravka na Stars Peaku nakon obroka",
    },
    {
      image: "812808252.jpg",
      title: "Galerija",
      body: "Gornja soba izdaleka — krevet pod vrhom krova, stolica za čitanje, medeno drvo svuda oko vas.",
      imageAlt: "A-frame galerija s krevetom i sjedećim kutom izdaleka",
    },
    {
      image: "812808512.jpg",
      title: "Iz kreveta",
      body: "Pladanj na pokrivaču, plava stolica i šuma u trokutastom prozoru — jutra koja počinju bez ustajanja iz galerije.",
      imageAlt:
        "Pogled iz kreveta u galeriji prema sjedećem kutu i šumi u trokutastom prozoru",
    },
  ],
  exterior: [
    {
      image: "ljetnja-kuhinja-3.jpg",
      title: "Ljetnja kuhinja",
      body: "Kuhinja pod drvećem — drva spremna za vatru, štednjak za kuhanje i stol već postavljen, s planinom nadomak.",
      imageAlt:
        "Ljetnja kuhinja i blagovaonski stol postavljen za ručak, sa šumom i kukovima na Stars Peaku",
    },
    {
      image: "outdoor-kitchen-table-set.jpg",
      title: "Ručak vani",
      body: "Caprese, trešnje, kruh i breskve na okruglom stolu — dug vanjski ručak uz otvorenu kuhinju iza leđa.",
      imageAlt:
        "Okrugli vanjski stol s capreseom, trešnjama, kruhom i breskvama uz ljetnju kuhinju Stars Peaka",
    },
    {
      image: "20260604_173207.jpg",
      title: "Vatra u ognjištu",
      body: "Kad se večer ohladi, vanjsko ognjište preuzima — vatra, lonac na štednjaku i Bačić kuk još na horizontu.",
      imageAlt: "Vanjska kuhinja s vatrom i Bačić kukom na horizontu",
    },
    {
      image: "20260604_132024.jpg",
      title: "Stol pod drvećem",
      body: "Svježi rajčice, mozzarella i voće u hladu — jednostavna hrana koja vani ima bolji okus.",
      imageAlt: "Vanjski stol s capreseom, kruhom, breskvama i trešnjama pod drvećem",
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
      body: "Tablett auf der Decke, blauer Sessel und Wald im Giebelfenster — Morgen, die in der Galerie beginnen.",
      imageAlt:
        "Blick vom Bett der Galerie zur Sitzecke und zum dreieckigen Waldfenster",
    },
  ],
  exterior: [
    {
      image: "ljetnja-kuhinja-3.jpg",
      title: "Außenküche",
      body: "Die Sommerküche unter den Bäumen — Holz fürs Feuer, Herd zum Kochen und der Tisch schon gedeckt, mit dem Berg ganz nah.",
      imageAlt:
        "Außenküche und gedeckter Esstisch mit Wald und Berggipfeln auf Stars Peak",
    },
    {
      image: "outdoor-kitchen-table-set.jpg",
      title: "Mittagessen draußen",
      body: "Caprese, Kirschen, Brot und Pfirsiche auf dem runden Tisch — ein langes Outdoor-Mittagessen mit offener Küche hinter Ihnen.",
      imageAlt:
        "Runder Outdoor-Tisch mit Caprese, Kirschen, Brot und Pfirsichen an der Stars-Peak-Sommerküche",
    },
    {
      image: "20260604_173207.jpg",
      title: "Feuer im Herd",
      body: "Wenn der Abend kühlt, übernimmt der Außenkamin — Holzfeuer, Topf auf dem Herd und Bačić Kuk noch am Horizont.",
      imageAlt: "Außenküche mit Holzfeuer und Bačić Kuk am Horizont",
    },
    {
      image: "20260604_132024.jpg",
      title: "Tisch unter den Bäumen",
      body: "Frische Tomaten, Mozzarella und Obst im Schatten — einfaches Essen, das draußen besser schmeckt.",
      imageAlt: "Outdoor-Tisch mit Caprese, Brot, Pfirsichen und Kirschen unter Bäumen",
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
      body: "Plateau sur la couette, fauteuil bleu et forêt dans la fenêtre en pignon — des matins qui commencent sans quitter la mezzanine.",
      imageAlt:
        "Vue depuis le lit de la mezzanine vers le coin salon et la fenêtre triangulaire sur la forêt",
    },
  ],
  exterior: [
    {
      image: "ljetnja-kuhinja-3.jpg",
      title: "Cuisine d'été",
      body: "La cuisine sous les arbres — bois prêt pour le feu, plaque pour cuisiner, et la table déjà dressée, la montagne tout près.",
      imageAlt:
        "Cuisine d'été et table dressée pour le déjeuner avec forêt et sommets à Stars Peak",
    },
    {
      image: "outdoor-kitchen-table-set.jpg",
      title: "Déjeuner dehors",
      body: "Caprese, cerises, pain et pêches sur la table ronde — un long déjeuner dehors, cuisine ouverte derrière vous.",
      imageAlt:
        "Table ronde extérieure avec caprese, cerises, pain et pêches près de la cuisine d'été Stars Peak",
    },
    {
      image: "20260604_173207.jpg",
      title: "Feu dans l'âtre",
      body: "Quand le soir fraîchit, le foyer extérieur prend le relais — feu de bois, casserole sur le feu, et Bačić Kuk encore à l'horizon.",
      imageAlt: "Cuisine extérieure avec feu de bois et Bačić Kuk à l'horizon",
    },
    {
      image: "20260604_132024.jpg",
      title: "Table sous les arbres",
      body: "Tomates fraîches, mozzarella et fruits à l'ombre — une cuisine simple qui a meilleur goût dehors.",
      imageAlt: "Table extérieure avec caprese, pain, pêches et cerises sous les arbres",
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
      body: "Vassoio sulla coperta, poltrona blu e bosco nella finestra a timpano — mattine che iniziano senza lasciare il loft.",
      imageAlt:
        "Vista dal letto del loft verso l'angolo salotto e la finestra triangolare sul bosco",
    },
  ],
  exterior: [
    {
      image: "ljetnja-kuhinja-3.jpg",
      title: "Cucina estiva",
      body: "La cucina sotto gli alberi — legna pronta per il fuoco, fornello per cucinare e tavolo già apparecchiato, con la montagna vicina.",
      imageAlt:
        "Cucina estiva e tavolo apparecchiato per il pranzo con bosco e cime a Stars Peak",
    },
    {
      image: "outdoor-kitchen-table-set.jpg",
      title: "Pranzo all'aperto",
      body: "Caprese, ciliegie, pane e pesche sul tavolo rotondo — un lungo pranzo fuori, con la cucina aperta alle spalle.",
      imageAlt:
        "Tavolo rotondo all'aperto con caprese, ciliegie, pane e pesche presso la cucina estiva Stars Peak",
    },
    {
      image: "20260604_173207.jpg",
      title: "Fuoco nel focolare",
      body: "Quando la sera si raffredda, il focolare esterno prende il posto — fuoco di legna, pentola sul fornello e Bačić Kuk ancora all'orizzonte.",
      imageAlt: "Cucina esterna con fuoco e Bačić Kuk all'orizzonte",
    },
    {
      image: "20260604_132024.jpg",
      title: "Tavolo sotto gli alberi",
      body: "Pomodori freschi, mozzarella e frutta all'ombra — cibo semplice che fuori ha un sapore migliore.",
      imageAlt: "Tavolo all'aperto con caprese, pane, pesche e ciliegie sotto gli alberi",
    },
  ],
};

const byLocale: Record<Locale, GalleryStoryContent> = { en, hr, de, fr, it };

export function getGalleryStoryContent(locale: Locale): GalleryStoryContent {
  return byLocale[locale] ?? en;
}
