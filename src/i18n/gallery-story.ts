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
  outdoorKitchenLabel: string;
  outdoorKitchenIntro: string;
  wellnessLabel: string;
  wellnessIntro: string;
  interior: [GalleryStoryPair, GalleryStoryPair, GalleryStoryPair, GalleryStoryPair];
  outdoorKitchen: [
    GalleryStoryPair,
    GalleryStoryPair,
    GalleryStoryPair,
    GalleryStoryPair,
  ];
  wellness: [GalleryStoryPair, GalleryStoryPair];
};

const en: GalleryStoryContent = {
  interiorLabel: "Interior",
  interiorIntro:
    "Wood, light and quiet rooms — the chalet from kitchen table to loft bed. These frames show how the house holds a slower day: cooking, resting, reading, and looking out into the forest.",
  outdoorKitchenLabel: "Outdoor kitchen",
  outdoorKitchenIntro:
    "Meals under open sky — grill, fire and a table that keeps the mountain close. Days stretch here from lunch into evening without ever going indoors.",
  wellnessLabel: "Wellness",
  wellnessIntro:
    "Soft hours outside the house — sun on the deck, hammocks in the clearing, and the peaks always within reach. Rest that asks for nothing but time.",
  interior: [
    {
      image: "740290390.jpg",
      title: "Kitchen & table",
      body: "Where mornings begin slowly — a shared table, soft light, and no rush toward the day.",
      imageAlt: "Wooden dining table and kitchen at Stars Peak with forest view",
    },
    {
      image: "585009655_122107017075084437_1671659401079838438_n.jpg",
      title: "Living room",
      body: "The quieter half of the house — a place to sink in after the meal and let the afternoon stretch.",
      imageAlt: "Living room seating area at Stars Peak after a meal",
    },
    {
      image: "812808252.jpg",
      title: "The loft",
      body: "Up under the roof peak — a room made for rest, with timber wrapping the quiet.",
      imageAlt: "A-frame loft bedroom and sitting area seen from a distance",
    },
    {
      image: "812808512.jpg",
      title: "From the bed",
      body: "Waking where the forest fills the window — mornings that do not ask you to hurry downstairs.",
      imageAlt:
        "View from the loft bed toward the sitting area and triangular forest window",
    },
  ],
  outdoorKitchen: [
    {
      image: "ljetnja-kuhinja-3.jpg",
      title: "Outdoor kitchen",
      body: "Cooking where the mountain stays close — long meals that belong to the open air.",
      imageAlt:
        "Outdoor kitchen and dining table set for lunch with forest and mountain peaks at Stars Peak",
    },
    {
      image: "outdoor-kitchen-table-set.jpg",
      title: "Lunch outdoors",
      body: "A table that holds the afternoon — shade, simple food, and nowhere else to be.",
      imageAlt:
        "Round outdoor table set for lunch at the Stars Peak summer kitchen",
    },
    {
      image: "20260604_173207.jpg",
      title: "Fire in the hearth",
      body: "When the air cools, the evening finds its centre — flame, slow cooking, and the ridge still watching.",
      imageAlt: "Outdoor kitchen with wood fire burning and Bačić Kuk on the horizon",
    },
    {
      image: "20260604_132024.jpg",
      title: "Table under the trees",
      body: "Meals that taste of summer shade — unhurried, close to the ground and the day.",
      imageAlt: "Outdoor table set for lunch under the trees at Stars Peak",
    },
  ],
  wellness: [
    {
      image: "outdoor-deck-peaks.jpg",
      title: "Toward the peaks",
      body: "Late light on the limestone — a deck for watching the day lean into evening.",
      imageAlt: "Wooden deck with lounge chairs facing the Velebit peaks at sunset",
    },
    {
      image: "outdoor-hammocks-clearing.jpg",
      title: "In the clearing",
      body: "Soft hours between trees and stone — rest that needs nothing but time and sky.",
      imageAlt: "Hammocks in a forest clearing with mountain peaks beyond at Stars Peak",
    },
  ],
};

const hr: GalleryStoryContent = {
  interiorLabel: "Interijer",
  interiorIntro:
    "Drvo, svjetlo i tihe sobe — kuća od kuhinjskog stola do kreveta u galeriji. Ovi kadrovi pokazuju kako Stars Peak drži sporiji dan: kuhanje, odmor, čitanje i pogled u šumu.",
  outdoorKitchenLabel: "Ljetnja kuhinja",
  outdoorKitchenIntro:
    "Obroci pod otvorenim nebom — roštilj, vatra i stol uz planinu. Dani se ovdje protežu od ručka do večeri, bez potrebe da se vraćate unutra.",
  wellnessLabel: "Wellness",
  wellnessIntro:
    "Meki sati izvan kuće — sunce na terasi, hamaci na čistini i kukovi uvijek nadomak. Odmor kojem treba samo vrijeme.",
  interior: [
    {
      image: "740290390.jpg",
      title: "Kuhinja i stol",
      body: "Gdje jutra počinju polako — zajednički stol, meko svjetlo i dan bez žurbe.",
      imageAlt: "Drveni blagovaonski stol i kuhinja na Stars Peaku s pogledom na šumu",
    },
    {
      image: "585009655_122107017075084437_1671659401079838438_n.jpg",
      title: "Dnevni boravak",
      body: "Tiša polovica kuće — mjesto za odmor nakon obroka, dok se popodne proteže.",
      imageAlt: "Sjedeći kutak dnevnog boravka na Stars Peaku nakon obroka",
    },
    {
      image: "812808252.jpg",
      title: "Galerija",
      body: "Ispod vrha krova — soba za odmor, u medenom drvetu i tišini.",
      imageAlt: "A-frame galerija s krevetom i sjedećim kutom izdaleka",
    },
    {
      image: "812808512.jpg",
      title: "Iz kreveta",
      body: "Buđenje uz šumu u prozoru — jutra koja ne traže da brzo siđete dolje.",
      imageAlt:
        "Pogled iz kreveta u galeriji prema sjedećem kutu i šumi u trokutastom prozoru",
    },
  ],
  outdoorKitchen: [
    {
      image: "ljetnja-kuhinja-3.jpg",
      title: "Ljetnja kuhinja",
      body: "Kuhanje uz planinu nadomak — dugi obroci koji pripadaju otvorenom zraku.",
      imageAlt:
        "Ljetnja kuhinja i blagovaonski stol postavljen za ručak, sa šumom i kukovima na Stars Peaku",
    },
    {
      image: "outdoor-kitchen-table-set.jpg",
      title: "Ručak vani",
      body: "Stol koji drži popodne — hladovina, jednostavna hrana i nigdje drugdje ne treba biti.",
      imageAlt:
        "Okrugli vanjski stol postavljen za ručak uz ljetnju kuhinju Stars Peaka",
    },
    {
      image: "20260604_173207.jpg",
      title: "Vatra u ognjištu",
      body: "Kad se zrak ohladi, večer nalazi središte — plamen, sporo kuhanje i greben koji još gleda.",
      imageAlt: "Vanjska kuhinja s vatrom i Bačić kukom na horizontu",
    },
    {
      image: "20260604_132024.jpg",
      title: "Stol pod drvećem",
      body: "Obroci okusa ljetne hladovine — bez žurbe, blizu tla i dana.",
      imageAlt: "Vanjski stol postavljen za ručak pod drvećem na Stars Peaku",
    },
  ],
  wellness: [
    {
      image: "outdoor-deck-peaks.jpg",
      title: "Prema kukovima",
      body: "Kasno svjetlo na vapnencu — terasa za gledanje kako dan tone u večer.",
      imageAlt: "Drvena terasa s ležaljkama prema velebitskim kukovima u zalasku sunca",
    },
    {
      image: "outdoor-hammocks-clearing.jpg",
      title: "Na čistini",
      body: "Meki sati između drveća i kamena — odmor kojem treba samo vrijeme i nebo.",
      imageAlt: "Hamaci na šumskoj čistini s planinskim kukovima u daljini na Stars Peaku",
    },
  ],
};

const de: GalleryStoryContent = {
  ...en,
  interiorLabel: "Innenraum",
  interiorIntro:
    "Holz, Licht und stille Räume — das Haus vom Küchentisch bis zum Bett in der Galerie. Diese Bilder zeigen, wie Stars Peak einen langsameren Tag trägt: kochen, ruhen, lesen und in den Wald blicken.",
  outdoorKitchenLabel: "Außenküche",
  outdoorKitchenIntro:
    "Mahlzeiten unter freiem Himmel — Grill, Feuer und ein Tisch nahe am Berg. Hier dehnen sich die Tage vom Mittag bis in den Abend, ohne dass man hineingehen muss.",
  wellnessLabel: "Wellness",
  wellnessIntro:
    "Weiche Stunden außerhalb des Hauses — Sonne auf dem Deck, Hängematten auf der Lichtung und die Gipfel immer nah. Ruhe, der nur Zeit genügt.",
  interior: [
    {
      image: "740290390.jpg",
      title: "Küche & Tisch",
      body: "Wo der Morgen langsam beginnt — ein gemeinsamer Tisch, weiches Licht und kein Drängen in den Tag.",
      imageAlt: "Holztisch und Küche auf Stars Peak mit Waldblick",
    },
    {
      image: "585009655_122107017075084437_1671659401079838438_n.jpg",
      title: "Wohnzimmer",
      body: "Die ruhigere Hälfte des Hauses — ein Ort zum Sinkenlassen nach dem Essen, während der Nachmittag sich dehnt.",
      imageAlt: "Wohnbereich auf Stars Peak nach dem Essen",
    },
    {
      image: "812808252.jpg",
      title: "Die Galerie",
      body: "Unter dem First — ein Raum fürs Ausruhen, in honigfarbenem Holz und Stille.",
      imageAlt: "A-Rahmen-Galerie mit Bett und Sitzecke aus der Distanz",
    },
    {
      image: "812808512.jpg",
      title: "Vom Bett aus",
      body: "Aufwachen mit dem Wald im Fenster — Morgen, die nicht verlangen, hastig hinunterzugehen.",
      imageAlt:
        "Blick vom Bett der Galerie zur Sitzecke und zum dreieckigen Waldfenster",
    },
  ],
  outdoorKitchen: [
    {
      image: "ljetnja-kuhinja-3.jpg",
      title: "Außenküche",
      body: "Kochen, wo der Berg nah bleibt — lange Mahlzeiten, die zur freien Luft gehören.",
      imageAlt:
        "Außenküche und gedeckter Esstisch mit Wald und Berggipfeln auf Stars Peak",
    },
    {
      image: "outdoor-kitchen-table-set.jpg",
      title: "Mittagessen draußen",
      body: "Ein Tisch, der den Nachmittag hält — Schatten, einfaches Essen und nirgendwo sonst hinmüssen.",
      imageAlt:
        "Runder Outdoor-Tisch gedeckt zum Mittagessen an der Stars-Peak-Sommerküche",
    },
    {
      image: "20260604_173207.jpg",
      title: "Feuer im Herd",
      body: "Wenn die Luft kühlt, findet der Abend sein Zentrum — Flamme, langsames Kochen und der Grat, der noch zuschaut.",
      imageAlt: "Außenküche mit Holzfeuer und Bačić Kuk am Horizont",
    },
    {
      image: "20260604_132024.jpg",
      title: "Tisch unter den Bäumen",
      body: "Mahlzeiten mit dem Geschmack von Sommerschatten — ohne Eile, nah am Boden und am Tag.",
      imageAlt: "Outdoor-Tisch gedeckt zum Mittagessen unter Bäumen auf Stars Peak",
    },
  ],
  wellness: [
    {
      image: "outdoor-deck-peaks.jpg",
      title: "Zu den Gipfeln",
      body: "Spätes Licht auf dem Kalk — ein Deck zum Zuschauen, wie der Tag in den Abend gleitet.",
      imageAlt: "Holzdeck mit Liegestühlen zu den Velebit-Gipfeln bei Sonnenuntergang",
    },
    {
      image: "outdoor-hammocks-clearing.jpg",
      title: "Auf der Lichtung",
      body: "Weiche Stunden zwischen Bäumen und Stein — Ruhe, der nur Zeit und Himmel genügen.",
      imageAlt: "Hängematten auf einer Waldlichtung mit Berggipfeln im Hintergrund auf Stars Peak",
    },
  ],
};

const fr: GalleryStoryContent = {
  ...en,
  interiorLabel: "Intérieur",
  interiorIntro:
    "Bois, lumière et pièces tranquilles — la maison de la table de cuisine au lit en mezzanine. Ces images montrent comment Stars Peak porte une journée plus lente : cuisiner, se reposer, lire et regarder la forêt.",
  outdoorKitchenLabel: "Cuisine d'été",
  outdoorKitchenIntro:
    "Des repas à ciel ouvert — grill, feu et une table près de la montagne. Les jours s'étirent ici du déjeuner au soir, sans rentrer à l'intérieur.",
  wellnessLabel: "Bien-être",
  wellnessIntro:
    "Des heures douces hors de la maison — soleil sur la terrasse, hamacs dans la clairière, sommets toujours proches. Un repos qui n'a besoin que de temps.",
  interior: [
    {
      image: "740290390.jpg",
      title: "Cuisine & table",
      body: "Là où le matin commence lentement — une table partagée, une lumière douce, sans précipitation.",
      imageAlt: "Table en bois et cuisine à Stars Peak avec vue sur la forêt",
    },
    {
      image: "585009655_122107017075084437_1671659401079838438_n.jpg",
      title: "Salon",
      body: "La moitié plus calme de la maison — un endroit pour s'installer après le repas, tandis que l'après-midi s'étire.",
      imageAlt: "Salon à Stars Peak après le repas",
    },
    {
      image: "812808252.jpg",
      title: "La mezzanine",
      body: "Sous le faîte — une pièce pour se reposer, dans le bois miel et le silence.",
      imageAlt: "Mezzanine en A avec lit et coin lecture vus de loin",
    },
    {
      image: "812808512.jpg",
      title: "Depuis le lit",
      body: "S'éveiller avec la forêt à la fenêtre — des matins qui ne demandent pas de descendre vite.",
      imageAlt:
        "Vue depuis le lit de la mezzanine vers le coin salon et la fenêtre triangulaire sur la forêt",
    },
  ],
  outdoorKitchen: [
    {
      image: "ljetnja-kuhinja-3.jpg",
      title: "Cuisine d'été",
      body: "Cuisiner près de la montagne — de longs repas qui appartiennent à l'air libre.",
      imageAlt:
        "Cuisine d'été et table dressée pour le déjeuner avec forêt et sommets à Stars Peak",
    },
    {
      image: "outdoor-kitchen-table-set.jpg",
      title: "Déjeuner dehors",
      body: "Une table qui retient l'après-midi — ombre, cuisine simple, et nulle part ailleurs où être.",
      imageAlt:
        "Table ronde extérieure dressée pour le déjeuner près de la cuisine d'été Stars Peak",
    },
    {
      image: "20260604_173207.jpg",
      title: "Feu dans l'âtre",
      body: "Quand l'air fraîchit, le soir trouve son centre — flamme, cuisson lente, et la crête qui veille encore.",
      imageAlt: "Cuisine extérieure avec feu de bois et Bačić Kuk à l'horizon",
    },
    {
      image: "20260604_132024.jpg",
      title: "Table sous les arbres",
      body: "Des repas au goût d'ombre d'été — sans hâte, près du sol et du jour.",
      imageAlt: "Table extérieure dressée pour le déjeuner sous les arbres à Stars Peak",
    },
  ],
  wellness: [
    {
      image: "outdoor-deck-peaks.jpg",
      title: "Vers les sommets",
      body: "Lumière tardive sur le calcaire — une terrasse pour voir le jour glisser vers le soir.",
      imageAlt: "Terrasse en bois avec chaises longues face aux sommets du Velebit au coucher du soleil",
    },
    {
      image: "outdoor-hammocks-clearing.jpg",
      title: "Dans la clairière",
      body: "Des heures douces entre arbres et pierre — un repos qui n'a besoin que de temps et de ciel.",
      imageAlt: "Hamacs dans une clairière forestière avec des sommets au loin à Stars Peak",
    },
  ],
};

const it: GalleryStoryContent = {
  ...en,
  interiorLabel: "Interni",
  interiorIntro:
    "Legno, luce e stanze quiete — la casa dal tavolo della cucina al letto nel loft. Queste immagini mostrano come Stars Peak accompagna una giornata più lenta: cucinare, riposare, leggere e guardare il bosco.",
  outdoorKitchenLabel: "Cucina estiva",
  outdoorKitchenIntro:
    "Pasti a cielo aperto — grill, fuoco e un tavolo vicino alla montagna. Qui i giorni si allungano dal pranzo alla sera senza rientrare in casa.",
  wellnessLabel: "Wellness",
  wellnessIntro:
    "Ore morbide fuori dalla casa — sole sul deck, amache nella radura e le cime sempre vicine. Un riposo a cui basta il tempo.",
  interior: [
    {
      image: "740290390.jpg",
      title: "Cucina e tavolo",
      body: "Dove le mattine iniziano piano — un tavolo condiviso, luce morbida e niente fretta.",
      imageAlt: "Tavolo in legno e cucina a Stars Peak con vista sul bosco",
    },
    {
      image: "585009655_122107017075084437_1671659401079838438_n.jpg",
      title: "Soggiorno",
      body: "La metà più quieta della casa — un posto per adagiarsi dopo il pasto, mentre il pomeriggio si allunga.",
      imageAlt: "Soggiorno a Stars Peak dopo il pasto",
    },
    {
      image: "812808252.jpg",
      title: "Il loft",
      body: "Sotto il colmo — una stanza per riposare, nel legno miele e nel silenzio.",
      imageAlt: "Loft a A-frame con letto e zona lettura visti da lontano",
    },
    {
      image: "812808512.jpg",
      title: "Dal letto",
      body: "Svegliarsi con il bosco alla finestra — mattine che non chiedono di scendere in fretta.",
      imageAlt:
        "Vista dal letto del loft verso l'angolo salotto e la finestra triangolare sul bosco",
    },
  ],
  outdoorKitchen: [
    {
      image: "ljetnja-kuhinja-3.jpg",
      title: "Cucina estiva",
      body: "Cucinare vicino alla montagna — pasti lunghi che appartengono all'aria aperta.",
      imageAlt:
        "Cucina estiva e tavolo apparecchiato per il pranzo con bosco e cime a Stars Peak",
    },
    {
      image: "outdoor-kitchen-table-set.jpg",
      title: "Pranzo all'aperto",
      body: "Un tavolo che tiene il pomeriggio — ombra, cibo semplice e nessun altro posto dove dover essere.",
      imageAlt:
        "Tavolo rotondo all'aperto apparecchiato per il pranzo presso la cucina estiva Stars Peak",
    },
    {
      image: "20260604_173207.jpg",
      title: "Fuoco nel focolare",
      body: "Quando l'aria si raffredda, la sera trova il suo centro — fiamma, cottura lenta e la cresta che ancora guarda.",
      imageAlt: "Cucina esterna con fuoco e Bačić Kuk all'orizzonte",
    },
    {
      image: "20260604_132024.jpg",
      title: "Tavolo sotto gli alberi",
      body: "Pasti dal sapore di ombra estiva — senza fretta, vicini al suolo e al giorno.",
      imageAlt: "Tavolo all'aperto apparecchiato per il pranzo sotto gli alberi a Stars Peak",
    },
  ],
  wellness: [
    {
      image: "outdoor-deck-peaks.jpg",
      title: "Verso le cime",
      body: "Luce tarda sul calcare — un deck per guardare il giorno scivolare nella sera.",
      imageAlt: "Deck in legno con lettini verso le cime del Velebit al tramonto",
    },
    {
      image: "outdoor-hammocks-clearing.jpg",
      title: "Nella radura",
      body: "Ore morbide tra alberi e pietra — un riposo a cui bastano tempo e cielo.",
      imageAlt: "Amache in una radura boschiva con cime montuose sullo sfondo a Stars Peak",
    },
  ],
};

const byLocale: Record<Locale, GalleryStoryContent> = { en, hr, de, fr, it };

export function getGalleryStoryContent(locale: Locale): GalleryStoryContent {
  return byLocale[locale] ?? en;
}
