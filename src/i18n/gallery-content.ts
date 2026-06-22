import type { Locale } from "./config";
import type { GalleryCategoryId } from "@/config/site-images";

export type GalleryImageMeta = {
  alt: string;
  caption: string;
};

export type GalleryGroupContent = {
  id: GalleryCategoryId;
  title: string;
  images: Record<string, GalleryImageMeta>;
};

export type GalleryContent = {
  groups: GalleryGroupContent[];
};

const en: GalleryContent = {
  groups: [
    {
      id: "exterior",
      title: "Chalet exterior",
      images: {
        "20260601_151354.jpg": {
          alt: "Wooden chalet with covered porch and limestone peaks behind",
          caption: "Chalet and ridge",
        },
        "20260601_161000.jpg": {
          alt: "Side of the chalet with chimney, meadow and Velebit peaks",
          caption: "Meadow and mountains",
        },
        "20260601_163522.jpg": {
          alt: "Chalet in a forest clearing below jagged Velebit peaks",
          caption: "Clearing and peaks",
        },
        "20260601_163627.jpg": {
          alt: "Chalet and wooden deck with Bačić Kuk in the background",
          caption: "Deck and peaks",
        },
        "20260601_163743.jpg": {
          alt: "Chalet, terrace fire pit and limestone ridge",
          caption: "Terrace and ridge",
        },
        "20260601_163937.jpg": {
          alt: "Chalet and terrace with the Velebit ridge behind",
          caption: "Chalet and deck",
        },
        "20260602_054801.jpg": {
          alt: "Golden hour light on the chalet and limestone peaks",
          caption: "Evening golden hour",
        },
        "20260602_055146.jpg": {
          alt: "Evening light on the chalet and limestone peaks",
          caption: "Evening on Velebit",
        },
        "20260613_121546.jpg": {
          alt: "Wild strawberries in the meadow by the chalet",
          caption: "Meadow in June",
        },
      },
    },
    {
      id: "outdoorLiving",
      title: "Outdoor kitchen",
      images: {
        "20260604_131523.jpg": {
          alt: "Outdoor kitchen with stone hearth and mountain view",
          caption: "Summer kitchen",
        },
        "20260604_131859-1.jpg": {
          alt: "Table set with caprese salad and fruit at the outdoor kitchen",
          caption: "Lunch outdoors",
        },
        "20260604_131914-1.jpg": {
          alt: "Outdoor dining with summer kitchen and hillside views",
          caption: "Al fresco dining",
        },
        "20260604_131944.jpg": {
          alt: "Fresh bread, peaches and caprese on the terrace table",
          caption: "Terrace spread",
        },
        "20260604_173046.jpg": {
          alt: "Fire burning in the outdoor kitchen fireplace",
          caption: "Kitchen fireplace",
        },
        "20260604_131924.jpg": {
          alt: "Summer kitchen and outdoor dining area",
          caption: "Outdoor kitchen",
        },
        "20260604_132039.jpg": {
          alt: "Breakfast at the outdoor kitchen",
          caption: "Outdoor breakfast",
        },
        "20260604_173207.jpg": {
          alt: "Cooking by the outdoor fireplace",
          caption: "Fireplace kitchen",
        },
        "20260604_132024.jpg": {
          alt: "Fresh local food on the terrace table",
          caption: "Table on the terrace",
        },
      },
    },
    {
      id: "interior",
      title: "Chalet interior",
      images: {
        "581480514_122107015833084437_6966149935686680015_n.jpg": {
          alt: "Living room with fireplace and wooden stairs",
          caption: "Living room",
        },
        "585009655_122107017075084437_1671659401079838438_n.jpg": {
          alt: "Sofa and reading corner by the window",
          caption: "Reading corner",
        },
        "740290390.jpg": {
          alt: "Dining table set for breakfast",
          caption: "Dining area",
        },
        "740270926.jpg": {
          alt: "Wing chair and books by the forest window",
          caption: "Armchair nook",
        },
        "20260601_160317.jpg": {
          alt: "Open-plan living and loft with peak views",
          caption: "Loft and living space",
        },
        "Velebit-11.jpg": {
          alt: "Dining area and wood-burning stove",
          caption: "Dining and stove",
        },
        "578265540_122104807869084437_5111680495021054907_n.jpg": {
          alt: "Loft bedroom under the A-frame roof",
          caption: "Loft bedroom",
        },
        "812808252.jpg": {
          alt: "Bedroom nook in the evening light",
          caption: "Loft at dusk",
        },
        "812808512.jpg": {
          alt: "View from the loft bed",
          caption: "From the bed",
        },
        "812809121.jpg": {
          alt: "Loft lounge with triangular window",
          caption: "Loft lounge",
        },
        "812160813.jpg": {
          alt: "Bathroom with tiled wall detail",
          caption: "Bathroom",
        },
        "Velebit-16.jpg": {
          alt: "Kitchen shelf with vintage canisters",
          caption: "Kitchen detail",
        },
      },
    },
    {
      id: "nature",
      title: "Nature & views",
      images: {
        "738020040.jpg": {
          alt: "Velebit ridge with the Adriatic and Pag in the distance",
          caption: "Ridge and sea",
        },
        "20260519_210050.jpeg": {
          alt: "Bačić Kuk silhouette at twilight with crescent moon",
          caption: "Twilight on Bačić Kuk",
        },
        "20260615_052145.jpg": {
          alt: "Wild hare below the limestone peaks",
          caption: "Wild hare at dusk",
        },
        "whatsapp-2026-06-04-084518.jpeg": {
          alt: "Horses grazing below Bačić Kuk",
          caption: "Horses below the peak",
        },
        "whatsapp-2026-06-06-182702.jpeg": {
          alt: "Meadow and Velebit ridge on a sunny morning",
          caption: "Morning meadow",
        },
        "whatsapp-2026-06-12-223830.jpeg": {
          alt: "Golden hour in the clearing with wild orchid",
          caption: "Golden hour",
        },
        "812802667.jpg": {
          alt: "Horses in the meadow seen from the window",
          caption: "Horses from the window",
        },
        "Velebit-15.jpg": {
          alt: "Velebit mountain landscape around Bačić Duliba",
          caption: "Velebit landscape",
        },
      },
    },
  ],
};

const hr: GalleryContent = {
  groups: [
    {
      id: "exterior",
      title: "Kuća eksterijer",
      images: {
        "20260601_151354.jpg": {
          alt: "Drvena kuća s natkrivenom terasom i litičastim vrhovima u pozadini",
          caption: "Kuća i greben",
        },
        "20260601_161000.jpg": {
          alt: "Bočni pogled na kuću s dimnjakom, livada i velebitski vrhovi",
          caption: "Livada i planine",
        },
        "20260601_163522.jpg": {
          alt: "Kuća u šumskoj čistini ispod oštrih vrhova Velebita",
          caption: "Čistina i vrhovi",
        },
        "20260601_163627.jpg": {
          alt: "Kuća i drveni deck s Bačić kukom u pozadini",
          caption: "Deck i vrhovi",
        },
        "20260601_163743.jpg": {
          alt: "Kuća, ognjište na terasi i litičasti greben",
          caption: "Terasa i greben",
        },
        "20260601_163937.jpg": {
          alt: "Kuća i terasa s velebitskim grebenom u pozadini",
          caption: "Kuća i deck",
        },
        "20260602_054801.jpg": {
          alt: "Kuća u zlatnom svjetlu s litičastim vrhovima Velebita",
          caption: "Zlatni sat",
        },
        "20260602_055146.jpg": {
          alt: "Večernje svjetlo na kući i litičastim vrhovima",
          caption: "Večer na Velebitu",
        },
        "20260613_121546.jpg": {
          alt: "Divlje jagode na livadi ispred kuće",
          caption: "Livada u lipnju",
        },
      },
    },
    {
      id: "outdoorLiving",
      title: "Vanjska kuhinja",
      images: {
        "20260604_131523.jpg": {
          alt: "Vanjska kuhinja s kamenim ognjištem i pogledom na planinu",
          caption: "Ljetnja kuhinja",
        },
        "20260604_131859-1.jpg": {
          alt: "Stol s caprese salatom i voćem u vanjskoj kuhinji",
          caption: "Ručak na otvorenom",
        },
        "20260604_131914-1.jpg": {
          alt: "Vanjski blagovanje s ljetnjom kuhinjom i pogledom na brdo",
          caption: "Blagovanje na otvorenom",
        },
        "20260604_131944.jpg": {
          alt: "Svježi kruh, breskve i caprese na stolu na terasi",
          caption: "Stol na terasi",
        },
        "20260604_173046.jpg": {
          alt: "Vatra u kaminu vanjske kuhinje",
          caption: "Kamin vanjske kuhinje",
        },
        "20260604_131924.jpg": {
          alt: "Ljetnja kuhinja i vanjski blagovaonski kutak",
          caption: "Vanjska kuhinja",
        },
        "20260604_132039.jpg": {
          alt: "Doručak u vanjskoj kuhinji",
          caption: "Vanjski doručak",
        },
        "20260604_173207.jpg": {
          alt: "Kuhanje kod vanjskog kamina",
          caption: "Kuhinja uz kamin",
        },
        "20260604_132024.jpg": {
          alt: "Svježa hrana na stolu na terasi",
          caption: "Hrana na terasi",
        },
      },
    },
    {
      id: "interior",
      title: "Kuća interijer",
      images: {
        "581480514_122107015833084437_6966149935686680015_n.jpg": {
          alt: "Dnevni boravak s kaminom i drvenim stubištem",
          caption: "Dnevni boravak",
        },
        "585009655_122107017075084437_1671659401079838438_n.jpg": {
          alt: "Kutak za sjedenje i čitanje uz prozor",
          caption: "Kutak za čitanje",
        },
        "740290390.jpg": {
          alt: "Blagovaonski stol postavljen za doručak",
          caption: "Blagovaonica",
        },
        "740270926.jpg": {
          alt: "Fotelja i knjige uz prozor s pogledom na šumu",
          caption: "Fotelja uz prozor",
        },
        "20260601_160317.jpg": {
          alt: "Otvoreni dnevni boravak i galerija s pogledom na vrh",
          caption: "Galerija i boravak",
        },
        "Velebit-11.jpg": {
          alt: "Blagovaonica i kamin na drva",
          caption: "Blagovaonica i kamin",
        },
        "578265540_122104807869084437_5111680495021054907_n.jpg": {
          alt: "Spavaća soba u potkrovlju A-okvira",
          caption: "Spavaća u potkrovlju",
        },
        "812808252.jpg": {
          alt: "Spavaći kutak u večernjem svjetlu",
          caption: "Potkrovlje u sumrak",
        },
        "812808512.jpg": {
          alt: "Pogled s kreveta u potkrovlju",
          caption: "S kreveta",
        },
        "812809121.jpg": {
          alt: "Salon u potkrovlju s trokutastim prozorom",
          caption: "Salon u potkrovlju",
        },
        "812160813.jpg": {
          alt: "Kupaonica s pločicama na zidu",
          caption: "Kupaonica",
        },
        "Velebit-16.jpg": {
          alt: "Kuhinjska polica s vintage posudama",
          caption: "Detalj kuhinje",
        },
      },
    },
    {
      id: "nature",
      title: "Priroda i pogledi",
      images: {
        "738020040.jpg": {
          alt: "Velebitski greben s Jadranom i Pagom u daljini",
          caption: "Greben i more",
        },
        "20260519_210050.jpeg": {
          alt: "Silueta Bačić kuka u sumrak s mladim mjesecom",
          caption: "Sumrak na Bačić kuku",
        },
        "20260615_052145.jpg": {
          alt: "Divlji zec ispod litičastih vrhova",
          caption: "Zec u sumrak",
        },
        "whatsapp-2026-06-04-084518.jpeg": {
          alt: "Konji na paši ispod Bačić kuka",
          caption: "Konji ispod vrha",
        },
        "whatsapp-2026-06-06-182702.jpeg": {
          alt: "Livada i velebitski greben sunčanog jutra",
          caption: "Jutarnja livada",
        },
        "whatsapp-2026-06-12-223830.jpeg": {
          alt: "Zlatni sat u čistini s divljom orchidejom",
          caption: "Zlatni sat",
        },
        "812802667.jpg": {
          alt: "Konji na livadi viđeni iz prozora",
          caption: "Konji iz prozora",
        },
        "Velebit-15.jpg": {
          alt: "Planinski krajolik Velebita oko Bačić Dulibe",
          caption: "Krajolik Velebita",
        },
      },
    },
  ],
};

const deProper: GalleryContent = {
  groups: [
    {
      id: "exterior",
      title: "Hütte Exterieur",
      images: {
        "20260601_151354.jpg": {
          alt: "Holzhütte mit überdachter Veranda und Kalkgipfeln im Hintergrund",
          caption: "Hütte und Kamm",
        },
        "20260601_161000.jpg": {
          alt: "Seitenansicht der Hütte mit Schornstein, Wiese und Velebit-Gipfeln",
          caption: "Wiese und Berge",
        },
        "20260601_163522.jpg": {
          alt: "Hütte in einer Waldlichtung unterhalb zerklüfteter Velebit-Gipfel",
          caption: "Lichtung und Gipfel",
        },
        "20260601_163627.jpg": {
          alt: "Hütte und Holzdeck mit Bačić Kuk im Hintergrund",
          caption: "Deck und Gipfel",
        },
        "20260601_163743.jpg": {
          alt: "Hütte, Feuerstelle auf der Terrasse und Kalkkamm",
          caption: "Terrasse und Kamm",
        },
        "20260601_163937.jpg": {
          alt: "Hütte und Terrasse mit Velebit-Kamm im Hintergrund",
          caption: "Hütte und Deck",
        },
        "20260602_054801.jpg": {
          alt: "Hütte im goldenen Licht mit Kalkgipfeln des Velebit",
          caption: "Goldene Stunde",
        },
        "20260602_055146.jpg": {
          alt: "Abendlicht auf der Hütte und den Kalkgipfeln",
          caption: "Abend am Velebit",
        },
        "20260613_121546.jpg": {
          alt: "Wald-Erdbeeren auf der Wiese vor der Hütte",
          caption: "Wiese im Juni",
        },
      },
    },
    {
      id: "outdoorLiving",
      title: "Außenküche",
      images: {
        "20260604_131523.jpg": {
          alt: "Außenküche mit Steinkamin und Bergblick",
          caption: "Sommerküche",
        },
        "20260604_131859-1.jpg": {
          alt: "Gedeckter Tisch mit Caprese und Obst in der Außenküche",
          caption: "Mittagessen draußen",
        },
        "20260604_131914-1.jpg": {
          alt: "Essen im Freien mit Sommerküche und Hügelblick",
          caption: "Al fresco",
        },
        "20260604_131944.jpg": {
          alt: "Frisches Brot, Pfirsiche und Caprese auf dem Terrassentisch",
          caption: "Terrassentisch",
        },
        "20260604_173046.jpg": {
          alt: "Feuer im Kamin der Außenküche",
          caption: "Küchenkamin",
        },
        "20260604_131924.jpg": {
          alt: "Sommerküche und Essbereich im Freien",
          caption: "Außenküche",
        },
        "20260604_132039.jpg": {
          alt: "Frühstück in der Außenküche",
          caption: "Frühstück draußen",
        },
        "20260604_173207.jpg": {
          alt: "Kochen am Außenkamin",
          caption: "Küche am Kamin",
        },
        "20260604_132024.jpg": {
          alt: "Frische lokale Speisen auf dem Terrassentisch",
          caption: "Tisch auf der Terrasse",
        },
      },
    },
    {
      id: "interior",
      title: "Hütte Interieur",
      images: {
        "581480514_122107015833084437_6966149935686680015_n.jpg": {
          alt: "Wohnzimmer mit Kamin und Holztreppe",
          caption: "Wohnzimmer",
        },
        "585009655_122107017075084437_1671659401079838438_n.jpg": {
          alt: "Sofa und Leseecke am Fenster",
          caption: "Leseecke",
        },
        "740290390.jpg": {
          alt: "Gedeckter Esstisch zum Frühstück",
          caption: "Essbereich",
        },
        "740270926.jpg": {
          alt: "Sessel und Bücher am Fenster mit Waldblick",
          caption: "Sesselnische",
        },
        "20260601_160317.jpg": {
          alt: "Offener Wohnbereich und Galerie mit Gipfelblick",
          caption: "Galerie und Wohnraum",
        },
        "Velebit-11.jpg": {
          alt: "Essbereich und Holzofen",
          caption: "Essen und Ofen",
        },
        "578265540_122104807869084437_5111680495021054907_n.jpg": {
          alt: "Schlafzimmer in der A-frame-Galerie",
          caption: "Galerie-Schlafzimmer",
        },
        "812808252.jpg": {
          alt: "Schlafnische im Abendlicht",
          caption: "Galerie in der Dämmerung",
        },
        "812808512.jpg": {
          alt: "Blick vom Bett in der Galerie",
          caption: "Vom Bett aus",
        },
        "812809121.jpg": {
          alt: "Galerie-Lounge mit Dreiecksfenster",
          caption: "Galerie-Lounge",
        },
        "812160813.jpg": {
          alt: "Badezimmer mit Fliesenwand",
          caption: "Badezimmer",
        },
        "Velebit-16.jpg": {
          alt: "Küchenregal mit Vintage-Dosen",
          caption: "Küchendetail",
        },
      },
    },
    {
      id: "nature",
      title: "Natur & Ausblicke",
      images: {
        "738020040.jpg": {
          alt: "Velebit-Kamm mit Adria und Pag in der Ferne",
          caption: "Kamm und Meer",
        },
        "20260519_210050.jpeg": {
          alt: "Bačić Kuk Silhouette in der Dämmerung mit Mondsichel",
          caption: "Dämmerung auf Bačić Kuk",
        },
        "20260615_052145.jpg": {
          alt: "Wilder Hase unter den Kalkgipfeln",
          caption: "Hase in der Dämmerung",
        },
        "whatsapp-2026-06-04-084518.jpeg": {
          alt: "Pferde auf der Weide unterhalb von Bačić Kuk",
          caption: "Pferde unter dem Gipfel",
        },
        "whatsapp-2026-06-06-182702.jpeg": {
          alt: "Wiese und Velebit-Kamm an einem sonnigen Morgen",
          caption: "Morgenwiese",
        },
        "whatsapp-2026-06-12-223830.jpeg": {
          alt: "Goldene Stunde in der Lichtung mit wilder Orchidee",
          caption: "Goldene Stunde",
        },
        "812802667.jpg": {
          alt: "Pferde auf der Wiese vom Fenster aus gesehen",
          caption: "Pferde vom Fenster",
        },
        "Velebit-15.jpg": {
          alt: "Velebit-Berglandschaft um Bačić Duliba",
          caption: "Velebit-Landschaft",
        },
      },
    },
  ],
};

const fr: GalleryContent = {
  groups: en.groups.map((group) => ({
    ...group,
    title:
      group.id === "exterior"
        ? "Extérieur du chalet"
        : group.id === "outdoorLiving"
          ? "Cuisine extérieure"
          : group.id === "interior"
            ? "Intérieur du chalet"
            : "Nature & vues",
  })),
};

const it: GalleryContent = {
  groups: en.groups.map((group) => ({
    ...group,
    title:
      group.id === "exterior"
        ? "Esterno del chalet"
        : group.id === "outdoorLiving"
          ? "Cucina esterna"
          : group.id === "interior"
            ? "Interno del chalet"
            : "Natura & panorami",
  })),
};

const byLocale: Record<Locale, GalleryContent> = {
  en,
  hr,
  de: deProper,
  fr,
  it,
};

export function getGalleryContent(locale: Locale): GalleryContent {
  return byLocale[locale];
}
