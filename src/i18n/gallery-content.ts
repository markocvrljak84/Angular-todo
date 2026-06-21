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
      title: "The chalet",
      images: {
        "571275863_122102378865084437_4800487342368999167_n.jpg": {
          alt: "Wooden chalet in the meadow below Bačić Kuk",
          caption: "The chalet in Bačić Duliba",
        },
        "865932799.jpg": {
          alt: "Stars Peak chalet on a clear summer day",
          caption: "Summer at Stars Peak",
        },
        "669526272.jpg": {
          alt: "Stars Peak retreat nestled in the Velebit forest",
          caption: "Forest clearing",
        },
        "20260601_163937.jpg": {
          alt: "Chalet and terrace with the Velebit ridge behind",
          caption: "Chalet and deck",
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
      title: "Outdoor living",
      images: {
        "20260601_161334.jpg": {
          alt: "Fire pit on the wooden terrace",
          caption: "Terrace fire pit",
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
        "whatsapp-2026-06-04-084649.jpeg": {
          alt: "Horse passing the outdoor shelter",
          caption: "Horse by the shelter",
        },
      },
    },
    {
      id: "interior",
      title: "Indoor",
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
        "866610628.jpg": {
          alt: "Cosy corner at dusk with mountain views",
          caption: "Evening indoors",
        },
        "812803341.jpg": {
          alt: "Armchair facing Bačić Kuk through the glass wall",
          caption: "View from the armchair",
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
      title: "Kuća",
      images: {
        "571275863_122102378865084437_4800487342368999167_n.jpg": {
          alt: "Drvena kuća na livadi ispod Bačić kuka",
          caption: "Kuća u Bačić Dulibi",
        },
        "865932799.jpg": {
          alt: "Stars Peak kuća na vedrom ljetnom danu",
          caption: "Ljeto na Stars Peaku",
        },
        "669526272.jpg": {
          alt: "Stars Peak utočište u šumi Velebita",
          caption: "Šumska čistina",
        },
        "20260601_163937.jpg": {
          alt: "Kuća i terasa s velebitskim grebenom u pozadini",
          caption: "Kuća i deck",
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
      title: "Vanjski život",
      images: {
        "20260601_161334.jpg": {
          alt: "Ognjište na drvenoj terasi",
          caption: "Ognjište na terasi",
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
          caption: "Stol na terasi",
        },
        "whatsapp-2026-06-04-084649.jpeg": {
          alt: "Konj prolazi pored vanjskog sjenika",
          caption: "Konj kod sjenika",
        },
      },
    },
    {
      id: "interior",
      title: "Interijer",
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
        "866610628.jpg": {
          alt: "Ugodan kutak u sumrak s pogledom na planinu",
          caption: "Interijer u sumrak",
        },
        "812803341.jpg": {
          alt: "Fotelja s pogledom na Bačić kuk kroz staklenu stijenu",
          caption: "Pogled iz fotelje",
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
      title: "Die Hütte",
      images: {
        "571275863_122102378865084437_4800487342368999167_n.jpg": {
          alt: "Holzhütte auf der Wiese unterhalb von Bačić Kuk",
          caption: "Die Hütte in Bačić Duliba",
        },
        "865932799.jpg": {
          alt: "Stars Peak Hütte an einem klaren Sommertag",
          caption: "Sommer auf Stars Peak",
        },
        "669526272.jpg": {
          alt: "Stars Peak Rückzugsort im Velebit-Wald",
          caption: "Waldlichtung",
        },
        "20260601_163937.jpg": {
          alt: "Hütte und Terrasse mit Velebit-Kamm im Hintergrund",
          caption: "Hütte und Deck",
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
      title: "Draußen leben",
      images: {
        "20260601_161334.jpg": {
          alt: "Feuerstelle auf der Holzterrasse",
          caption: "Feuerstelle auf der Terrasse",
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
        "whatsapp-2026-06-04-084649.jpeg": {
          alt: "Pferd am Außenshelter vorbeigehend",
          caption: "Pferd am Shelter",
        },
      },
    },
    {
      id: "interior",
      title: "Innen",
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
        "866610628.jpg": {
          alt: "Gemütliche Ecke in der Dämmerung mit Bergblick",
          caption: "Abend drinnen",
        },
        "812803341.jpg": {
          alt: "Sessel mit Blick auf Bačić Kuk durch die Glaswand",
          caption: "Blick vom Sessel",
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
        ? "Le chalet"
        : group.id === "outdoorLiving"
          ? "Vie en plein air"
          : group.id === "interior"
            ? "Intérieur"
            : "Nature & vues",
  })),
};

const it: GalleryContent = {
  groups: en.groups.map((group) => ({
    ...group,
    title:
      group.id === "exterior"
        ? "Il chalet"
        : group.id === "outdoorLiving"
          ? "Vita all'aperto"
          : group.id === "interior"
            ? "Interni"
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
