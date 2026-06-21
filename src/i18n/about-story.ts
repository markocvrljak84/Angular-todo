import type { Locale } from "./config";

export const JUTARNJI_ABOUT_ARTICLE_URL =
  "https://www.jutarnji.hr/domidizajn/interijeri/stars-peak-velebit-drvena-kuca-odrzivo-minimalisticko-utociste-bacic-kuk-15681080" as const;

export type AboutStoryBlock = {
  title: string;
  paragraphs: string[];
};

export type AboutStoryContent = {
  blocks: AboutStoryBlock[];
  press: {
    label: string;
    linkText: string;
    href: string;
  };
};

const en: AboutStoryContent = {
  blocks: [
    {
      title: "Why we chose Velebit",
      paragraphs: [
        "The idea of a mountain retreat did not arrive overnight. For around ten years it kept returning — sometimes quietly in the background, sometimes with full clarity. Hiking on Velebit with Ljiljana grew into a deep love for the ridge, the wind and the wide horizon.",
        "Shows about slower, braver ways of living — including Ben Fogle’s New Lives in the Wild — opened a perspective we could not ignore: a home where nature is not a weekend escape, but part of everyday rhythm.",
      ],
    },
    {
      title: "A house with a previous life",
      paragraphs: [
        "In 2021 we found a wooden chalet that was structurally solid and well built, but the interior was not ours — a crowded kitchen and living room, worn furniture, and twelve bunk beds for hikers in the attic.",
        "Renovating took about three years. The hardest part was logistics: distance, hauling materials and furniture up the mountain, clearing the old and making room for the new. For months, hikers still knocked thinking the shelter was open — one of our first lessons in how special, and how private, this place would become.",
      ],
    },
    {
      title: "Built together, layer by layer",
      paragraphs: [
        "We did everything we could ourselves — water lines, bathroom, kitchen, living room, bedroom and attic — and called in professionals for electrics, the solar system, PVC joinery and the stairs to the loft.",
        "The split came naturally: Marko with tools, cutting, sanding and assembly; Ljiljana with finances, cost planning and design. What we wanted for ourselves is what we offer guests — less clutter, more light, warmth and wood throughout.",
      ],
    },
    {
      title: "Simplicity, wood and the view of Bačić Kuk",
      paragraphs: [
        "The guiding idea was minimalism born from thinking, not trend: open the space, let in light, and use the gallery and glass wall as anchors for every other decision.",
        "Wood was the obvious choice — we are surrounded by forest, so the interior follows the outside. The living room is where we rest after work, watch films and plan what comes next — always with Bačić Kuk in the frame.",
      ],
    },
    {
      title: "Living off-grid on the mountain",
      paragraphs: [
        "At this altitude, sustainability is not a label — it is the only way to bring modern comfort to Velebit. Rainwater feeds cooking, drinking and showers through filtration. Solar powers the house; a generator runs the boiler and oven when needed. Satellite internet keeps Wi‑Fi reliably fast.",
        "Wooden surfaces and the roof need regular care — the mountain is generous, but it asks for attention in return.",
      ],
    },
    {
      title: "The experience we share with you",
      paragraphs: [
        "Every stay feels a little different. What stays the same is focus — a slower pace without city noise and deadlines. The magic is not only in big summit days, but in coffee at sunrise, silence after dark and the Adriatic within reach.",
        "Guests often say the location and the house feel unusual — in the best way. That is fine with us. We built Stars Peak to be a decision confirmed again each time someone returns.",
        "Our advice to anyone dreaming of a home in nature: be patient, keep visiting the mountain, decide firmly — and never give up.",
      ],
    },
  ],
  press: {
    label: "Featured in the press",
    linkText: "Jutarnji list — Marko and Ljiljana’s Stars Peak story",
    href: JUTARNJI_ABOUT_ARTICLE_URL,
  },
};

const hr: AboutStoryContent = {
  blocks: [
    {
      title: "Zašto smo odabrali Velebit",
      paragraphs: [
        "Ideja o kući na planini nije došla preko noći. Desetak godina vraćala se — ponekad tiho, ponekad jasno. Planinarenje s Ljiljanom na Velebitu preraslo je u ljubav prema grebenu, vjetru i širokom horizontu.",
        "Emisije o sporijem, hrabrijem načinu života — među njima i BBC-jev serijal Bena Foglea New Lives in the Wild — otvorile su perspektivu koju nismo mogli zanemariti: dom u kojem priroda nije vikend bijeg, nego dio svakodnevice.",
      ],
    },
    {
      title: "Kuća s prethodnim životom",
      paragraphs: [
        "2021. pronašli smo drvenu kuću konstrukcijski stabilnu i kvalitetno građenu, ali nam interijer nije odgovarao — pretrpanu kuhinju i dnevni boravak, staro pokućstvo i dvanaest ležajeva za planinare u potkrovlju.",
        "Uređenje trajalo je otprilike tri godine. Najveći izazov bila je logistika: udaljenost, transport materijala i namještaja, odvoženje starog. Mjesecima su planinari dolazili misleći da je sklonište još otvoreno — prva lekcija o tome koliko je ovo mjesto posebno, i koliko privatno.",
      ],
    },
    {
      title: "Gradili smo zajedno, sloj po sloj",
      paragraphs: [
        "Sve što smo mogli napravili sami — vodovod, WC, kuhinju, dnevni boravak, spavaonicu i potkrovlje — a profesionalcima prepustili električnu instalaciju, solarni sustav, PVC stolariju i stepenice.",
        "Podjela uloga bila je prirodna: Marko alatima, rezanjem, brušenjem i montažom; Ljiljana financijama, planiranjem troškova i dizajnom. Ono što smo željeli za sebe nudimo i gostima — manje suvišnih detalja, više svjetla, topline i drva.",
      ],
    },
    {
      title: "Jednostavnost, drvo i pogled na Bačić kuk",
      paragraphs: [
        "Vodila nas je misao o jednostavnosti koja je rezultat promišljanja, a ne trenda: otvoriti prostor, pustiti svjetlo, a galeriju i staklenu stijenu koristiti kao oslonac za sve ostalo.",
        "Drvo se nametnulo samo po sebi — okruženi smo prirodom pa i interijer slijedi vanjski svijet. Dnevni boravak je mjesto odmora nakon posla, filmova i planova — uvijek s Bačić kukom u kadru.",
      ],
    },
    {
      title: "Održivost na Velebitu",
      paragraphs: [
        "Na ovoj nadmorskoj visini održivost nije etiketa — jedini je način da moderne pogodnosti dođu na planinu. Kišnica služi za kuhanje, piće i tuširanje kroz filtraciju. Solarni sustav napaja kuću; agregat pokreće bojler i pećnicu kad treba. Satelitski internet osigurava pouzdan Wi‑Fi.",
        "Drvene površine i krov traže redovitu brigu — planina je velikodušna, ali traži pažnju.",
      ],
    },
    {
      title: "Iskustvo koje dijelimo s vama",
      paragraphs: [
        "Svaki boravak malo je drugačiji. Ono što ostaje isto jest usredotočenost — sporiji ritam bez gradske buke i rokova. Posebno nije samo veliki uspon, nego kava na izlasku sunca, tišina nakon mraka i Jadran na dohvat ruke.",
        "Gosti često kažu da su lokacija i kuća neobični i nesvakidašnji — u najboljem smislu. Stars Peak je odluka koja se potvrđuje svakim povratkom.",
        "Savjet onima koji sanjaju dom u prirodi: strpljenje, redoviti odlasci u planinu, jaka odluka — i nikada ne odustajati.",
      ],
    },
  ],
  press: {
    label: "U medijima",
    linkText: "Jutarnji list — Marko i Ljiljana stvorili dom iz snova na Velebitu",
    href: JUTARNJI_ABOUT_ARTICLE_URL,
  },
};

const de: AboutStoryContent = {
  blocks: [
    {
      title: "Warum wir den Velebit gewählt haben",
      paragraphs: [
        "Die Idee einer Berghütte reifte rund zehn Jahre — durch Wanderungen auf dem Velebit und den Wunsch nach einem langsameren Leben in der Natur.",
        "Sendungen wie Ben Fogles New Lives in the Wild bestärkten uns: ein Zuhause, in dem die Wildnis Alltag ist, nicht nur Wochenendausflug.",
      ],
    },
    {
      title: "Ein Haus mit Vergangenheit",
      paragraphs: [
        "2021 kauften wir eine solide Holzhütte mit unpassendem Interieur — überfüllte Küche, alte Möbel, zwölf Etagenbetten für Wanderer unter dem Dach.",
        "Die Renovierung dauerte etwa drei Jahre. Logistik war die größte Hürde: Material, Möbel, Entfernung.",
      ],
    },
    {
      title: "Gemeinsam gebaut",
      paragraphs: [
        "WC, Küche, Wohnzimmer und Dachgeschoss machten wir selbst; Elektrik, Solar, Fenster und Treppe Profis.",
        "Marko: Werkzeug und Montage. Ljiljana: Finanzen, Planung und Design.",
      ],
    },
    {
      title: "Einfachheit, Holz, Blick auf Bačić Kuk",
      paragraphs: [
        "Minimalismus aus Überlegung — mehr Licht, Galerie und Glaswand als Anker, viel Holz innen wie draußen.",
        "Das Wohnzimmer ist unser Ruhepol mit Blick auf Bačić Kuk.",
      ],
    },
    {
      title: "Off-grid am Berg",
      paragraphs: [
        "Regenwasser für Kochen und Duschen, Solar für den Alltag, Generator für Ofen und Boiler, Satelliten-WLAN.",
      ],
    },
    {
      title: "Das Erlebnis für unsere Gäste",
      paragraphs: [
        "Langsameres Leben, Fokus auf sich selbst, Berg und Meer an einem Tag. Gäste finden den Ort ungewöhnlich — das nehmen wir als Kompliment.",
        "Geduld, Entschlossenheit — und niemals aufgeben.",
      ],
    },
  ],
  press: {
    label: "In den Medien",
    linkText: "Jutarnji list — Stars Peak auf dem Velebit",
    href: JUTARNJI_ABOUT_ARTICLE_URL,
  },
};

const fr: AboutStoryContent = {
  blocks: en.blocks.map((b, i) =>
    i === 0
      ? {
          title: "Pourquoi nous avons choisi le Velebit",
          paragraphs: [
            "L'idée d'une maison de montagne a mûri une dizaine d'années — randonnées sur le Velebit et envie d'un rythme plus lent.",
            "Des émissions comme New Lives in the Wild de Ben Fogle ont confirmé notre vision : la nature au quotidien, pas seulement le week-end.",
          ],
        }
      : i === 1
        ? {
            title: "Une maison avec une histoire",
            paragraphs: [
              "En 2021, achat d'un chalet en bois solide mais mal aménagé — cuisine encombrée, vieux meubles, douze lits de randonneurs.",
              "Trois ans de rénovation. Le plus dur : la logistique en montagne.",
            ],
          }
        : i === 2
          ? {
              title: "Construit ensemble",
              paragraphs: [
                "Salle de bain, cuisine et combles faits main ; électricité, solaire et menuiserie par des pros.",
                "Marko : outils et montage. Ljiljana : finances et design.",
              ],
            }
          : i === 3
            ? {
                title: "Simplicité, bois et vue sur Bačić Kuk",
                paragraphs: [
                  "Minimalisme réfléchi — lumière, galerie et mur de verre, bois partout.",
                  "Le salon face à Bačić Kuk est notre refuge.",
                ],
              }
            : i === 4
              ? {
                  title: "Vivre off-grid",
                  paragraphs: [
                    "Eau de pluie filtrée, solaire, générateur pour le four, internet satellite.",
                  ],
                }
              : {
                  title: "L'expérience que nous partageons",
                  paragraphs: [
                    "Un rythme plus lent, montagne et mer le même jour. Les voyageurs trouvent l'endroit singulier — c'est voulu.",
                    "Patience, décision ferme — et ne jamais abandonner.",
                  ],
                }
  ),
  press: {
    label: "Dans la presse",
    linkText: "Jutarnji list — l'histoire de Stars Peak",
    href: JUTARNJI_ABOUT_ARTICLE_URL,
  },
};

const it: AboutStoryContent = {
  blocks: [
    {
      title: "Perché abbiamo scelto il Velebit",
      paragraphs: [
        "L'idea di una casa in montagna maturò per un decennio — escursioni sul Velebit e desiderio di un ritmo più lento.",
        "Programmi come New Lives in the Wild di Ben Fogle rafforzarono la visione: la natura ogni giorno, non solo nel weekend.",
      ],
    },
    {
      title: "Una casa con una storia",
      paragraphs: [
        "Nel 2021 abbiamo acquistato un chalet in legno solido ma con interni inadatti — cucina affollata, mobili vecchi, dodici letti per escursionisti.",
        "Circa tre anni di ristrutturazione. La logistica in montagna fu la sfida maggiore.",
      ],
    },
    {
      title: "Costruito insieme",
      paragraphs: [
        "Bagno, cucina e mansarda fatti da noi; elettrico, solare e infissi a professionisti.",
        "Marko: attrezzi e montaggio. Ljiljana: finanze e design.",
      ],
    },
    {
      title: "Semplicità, legno e vista su Bačić Kuk",
      paragraphs: [
        "Minimalismo pensato — luce, galleria e parete vetro, legno ovunque.",
        "Il soggiorno con vista su Bačić Kuk è il nostro rifugio.",
      ],
    },
    {
      title: "Vivere off-grid",
      paragraphs: [
        "Acqua piovana filtrata, solare, generatore per forno e boiler, internet satellitare.",
      ],
    },
    {
      title: "L'esperienza che condividiamo",
      paragraphs: [
        "Ritmo lento, montagna e mare in un giorno. Gli ospiti trovano il posto insolito — è voluto.",
        "Pazienza, decisione ferma — e non mollare mai.",
      ],
    },
  ],
  press: {
    label: "Sui media",
    linkText: "Jutarnji list — la storia di Stars Peak",
    href: JUTARNJI_ABOUT_ARTICLE_URL,
  },
};

const byLocale: Record<Locale, AboutStoryContent> = { en, hr, de, fr, it };

export function getAboutStory(locale: Locale): AboutStoryContent {
  return byLocale[locale];
}
