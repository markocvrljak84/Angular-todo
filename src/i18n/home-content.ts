import type { Locale } from "./config";

const PAG_OUTDOOR_ARTICLE_URL: Record<Locale, string> = {
  hr: "https://www.pag-outdoor.com/hr/otok-pag-ili-mjesec-podno-velebita/",
  en: "https://www.pag-outdoor.com/en/otok-pag-ili-mjesec-podno-velebita/",
  de: "https://www.pag-outdoor.com/de/otok-pag-ili-mjesec-podno-velebita/",
  fr: "https://www.pag-outdoor.com/fr/otok-pag-ili-mjesec-podno-velebita/",
  it: "https://www.pag-outdoor.com/it/otok-pag-ili-mjesec-podno-velebita/",
};

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
  welcome: {
    title: string;
    line: string;
    artLabel: string;
  };
  whySpecial: {
    title: string;
    intro: string;
    cards: { title: string; body: string; imageAlt: string; ctaLabel: string }[];
  };
  editorial: {
    title: string;
    intro: string;
    ctaLabel: string;
    blocks: [HomeEditorialBlock, HomeEditorialBlock, HomeEditorialBlock];
  };
  accommodation: {
    title: string;
    eyebrow: string;
    lead: string;
    imageAlt: string;
    items: string[];
    ctaLabel: string;
  };
  map: {
    title: string;
    intro: string;
    homeNote: string;
    points: { name: string; note: string; link?: { href: string; label: string } }[];
  };
  finalCta: {
    headline: string;
    btnLabel: string;
  };
  localFlavours: {
    badge: string;
    items: [string, string, string];
    closing: string;
    imageAlt: string;
  };
};

const en: HomeContent = {
  hero: {
    headline: "Summit. Swim. Stargaze.",
    subline:
      "Mountain retreat at 900 metres, between the peaks of Velebit and the Adriatic Sea.",
    facts: [
      "900 meters elevation",
      "30 min to the sea",
      "Beautiful view of the mountain",
      "Inside Velebit Nature Park",
    ],
    ctaBook: "Book your stay",
    ctaExperiences: "See experiences",
  },
  welcome: {
    title: "Into Velebit wilderness",
    line: "A quiet house between peaks and sky",
    artLabel: "Etching-style illustration of a Velebit brown bear",
  },
  whySpecial: {
    title: "Three landscapes. One stay",
    intro:
      "Mountain mornings, Adriatic afternoons and quiet nights under the stars — three landscapes in a single day from Stars Peak.",
    cards: [
      {
        title: "Mountain",
        body: "Wake up under the peaks of Velebit. Trails begin just from the Stars Peak doorstep exploring the Velebit mountain.",
        imageAlt: "Stars Peak cabin beside a meadow with Bačić Kuk peaks beyond the forest",
        ctaLabel: "Hiking on Velebit",
      },
      {
        title: "Sea",
        body: "The Adriatic coast is only half an hour away, offering a rare balance of mountain and sea in a single day.",
        imageAlt: "Zavratnica cove on the Adriatic coast",
        ctaLabel: "Coast & landscapes",
      },
      {
        title: "Stars",
        body: "After sunset, silence settles across the ridge and moon and the stars becomes the brightest light in the landscape.",
        imageAlt: "Crescent moon above the Velebit ridge at dusk",
        ctaLabel: "Stargazing",
      },
    ],
  },
  editorial: {
    title: "Life at Stars Peak",
    intro:
      "Bačić Kuk outside the door, a quiet living room, and evenings in the outdoor kitchen — life at Stars Peak in three moments.",
    ctaLabel: "Full gallery",
    blocks: [
      {
        layout: "full",
        title: "View of Bačić Kuk",
        body:
          "Bačić Kuk rises above the treeline minutes from the door — forest, silence and a wide view of the summit on Velebit, right from Stars Peak.",
        imageAlt: "Stars Peak wooden cabin with Bačić Kuk rising above the forest",
      },
      {
        layout: "split",
        title: "Living room",
        body:
          "The living room is the heart of your stay — local wood, a fireplace and soft light from the gallery. A calm place to unwind after the trail, plan the next hike or watch the peaks through the glass.",
        imageAlt: "Living room with fireplace and wooden stairs",
      },
      {
        layout: "full",
        title: "Outdoor kitchen",
        body:
          "The summer kitchen and terrace are where days slow down — grill outdoors, pine-scented air and meals with the mountain close by.",
        imageAlt: "Outdoor summer kitchen and terrace at Stars Peak",
      },
    ],
  },
  accommodation: {
    title: "Designed for quiet living",
    eyebrow: "The chalet",
    lead:
      "Built for slow mornings, long evenings and life outdoors. Everything else is intentionally simple. Check availability and book your stay online.",
    imageAlt: "Dining table set for breakfast",
    items: [
      "Up to 4 guests",
      "Wi‑Fi",
      "Fireplace",
      "Outdoor kitchen",
      "BBQ grill",
      "Pet friendly",
    ],
    ctaLabel: "Accommodation details & booking",
  },
  map: {
    title: "Mountain and sea in one day",
    intro: "Stars Peak sits between Velebit peaks and the Adriatic — everything below is within easy reach.",
    homeNote:
      "Stars Peak is your base for the day: peaks, coves and island roads all within about an hour’s drive — some of Croatia’s finest nature, reached at an easy pace.",
    points: [
      {
        name: "Bačić Kuk",
        note:
          "At 1,304 m, Bačić Kuk is actually a cluster of bare rocky peaks of varying height and steepness, offering climbing challenges at every difficulty level.",
      },
      {
        name: "Karlobag",
        note:
          "Karlobag is a wonderful blend of Mediterranean and mainland life — crystal-clear sea and Croatia's finest mountain, Velebit, just minutes away by car.",
      },
      {
        name: "Zavratnica",
        note:
          "A beautiful cove with crystal-clear water. Zavratnica is surely one of the finest bays on the Croatian coast — a protected landscape on the Adriatic.",
      },
      {
        name: "Premužić trail",
        note:
          "Hiking Velebit with views of the Adriatic archipelago. The Premužić trail is considered a masterpiece of stonework — built as dry-stone walling and laid out to lead hikers simply into the harshest, most rugged parts of northern Velebit: Hajdučki and Rožanski kukovi.",
      },
      {
        name: "Pag island",
        note:
          "As the only Adriatic island with two faces, Pag offers wild scenes of raw stone and blue sky alongside gentler, greener landscapes — raw beauty and calming idyll at once.",
        link: {
          href: PAG_OUTDOOR_ARTICLE_URL.en,
          label: "Pag island in pictures",
        },
      },
      {
        name: "Paklenica National Park",
        note:
          "Paklenica's beauty is best experienced on foot, along more than 150 km of marked hiking trails. Its proximity to the coast adds a special charm — mountain and sea in one place.",
      },
    ],
  },
  finalCta: {
    headline: "Ready for a stay on Velebit? Reserve Stars Peak for your dates.",
    btnLabel: "Book your stay",
  },
  localFlavours: {
    badge: "Coming soon",
    items: ["Wild herbs.", "Mountain honey.", "Local flavours."],
    closing:
      "Soon, Stars Peak will grow beyond the house itself — into a place where the landscape is also served at the table.",
    imageAlt: "Purple wild heather in bloom on Velebit with a bee on the flowers",
  },
};

const hr: HomeContent = {
  hero: {
    headline: "Planine.More.Zvijezde",
    subline:
      "Planinska kuća na 900 m nadmorske visine s pogledom na Bačić kuk – samo 30 minuta od Jadranskog mora.",
    facts: [
      "900 m nadmorske visine",
      "30 min do mora",
      "Pogled na Bačić kuk",
      "Unutar Parka prirode Velebit",
    ],
    ctaBook: "Rezervirajte boravak",
    ctaExperiences: "Pogledaj doživljaje",
  },
  welcome: {
    title: "U divljinu Velebita",
    line: "Tiha kuća između vrhova i neba",
    artLabel: "Ilustracija velebitskog mrkog medvjeda u stilu bakropisa",
  },
  whySpecial: {
    title: "Zašto je ovo mjesto posebno",
    intro:
      "Planinska jutra, jadranska popodneva i tihe noći pod zvijezdama — tri krajolika u jednom danu sa Stars Peaka.",
    cards: [
      {
        title: "Planina",
        body: "Bačić kuk, Premužićeva staza i Dabarski kukovi — započnite planinarenje Velebitom stazama nadomak kuće.",
        imageAlt: "Kuća Stars Peak uz livadu s vrhovima Bačić kuka iza šume",
        ctaLabel: "Planinarenje Velebitom",
      },
      {
        title: "More",
        body: "Karlobag, Zavratnica i Pag su poznati po kamenitim krajolicima, plažama, paškoj ovci i siru. Mostom povezan s kopnom — idealno za jednodnevni izlet s Stars Peaka — jutro na planini, popodne u moru.",
        imageAlt: "Uvala Zavratnica na jadranskoj obali",
        ctaLabel: "More i krajolici",
      },
      {
        title: "Zvijezde",
        body: "Bez svjetlosnog onečišćenja — Bistro noćno nebo, zvijezde i tišina grebena nakon mraka.",
        imageAlt: "Srpast mjesec iznad velebitskog grebena u sumrak",
        ctaLabel: "Zvjezdano nebo",
      },
    ],
  },
  editorial: {
    title: "Doživljaj u fotografijama",
    intro:
      "Ljetnja kuhinja, dnevni boravak i prekrasan pogled na Bačić kuk — tri trenutka života na Stars Peaku.",
    ctaLabel: "Cijela galerija",
    blocks: [
      {
        layout: "full",
        title: "Pogled na Bačić kuk",
        body:
          "Bačić kuk se diže iznad krošnji neposredno pred kućom — šuma, Velebit i pogled na kuk.",
        imageAlt: "Drvena kuća Stars Peak s Bačić kukom iznad šume",
      },
      {
        layout: "split",
        title: "Dnevni boravak",
        body:
          "Dnevni boravak je srce kuće — lokalno drvo, kamin i meka svjetlost s galerije. Mirno mjesto za odmor nakon staze, planiranje sljedećeg uspona ili pogled na vrhove kroz staklo.",
        imageAlt: "Dnevni boravak s kaminom i drvenim stubištem",
      },
      {
        layout: "full",
        title: "Ljetnja kuhinja",
        body:
          "Ljetnja kuhinja i terasa usporavaju dan — roštilj na otvorenom, miris bora i obroci uz planinu nadomak.",
        imageAlt: "Vanjska ljetnja kuhinja i terasa na Stars Peaku",
      },
    ],
  },
  accommodation: {
    title: "Smještaj ukratko",
    eyebrow: "Kuća",
    lead:
      "Privatna drvena kuća za do četiri gosta — dnevni boravak s kaminom, vanjska kuhinja i planinska okolica oko Bačić kuka. Provjerite dostupnost i rezervirajte boravak online.",
    imageAlt: "Blagovaonski stol postavljen za doručak",
    items: [
      "Do 4 gosta",
      "Wi‑Fi",
      "Kamin",
      "Vanjska kuhinja",
      "Roštilj",
      "Pet friendly",
    ],
    ctaLabel: "Detalji smještaja i rezervacija",
  },
  map: {
    title: "Planina i more u jednom danu",
    intro: "Stars Peak leži između velebitskih vrhova i Jadrana — sve dolje je na dohvat ruke.",
    homeNote:
      "Stars Peak je baza za dan: vrhovi, uvale i otok na oko sat vožnje — jedna od najljepših prirodnih scena Hrvatske, dostupna bez žurbe.",
    points: [
      { name: "Bačić kuk", note: "Bačić kuk (1304 m) sastoji se zapravo od skupine golih kamenitih kukova različite visine i strmine, zbog čega pruža mogućnost za penjačke podvige različitih stupnjeva težine." },
      { name: "Karlobag", note: "Karlobag je čudesan spoj Mediterana i kontinenta, kristalno čistog mora i najljepše hrvatske planine – Velebita, do kojega ima tek nekoliko minuta vožnje." },
      { name: "Zavratnica", note: "Prekrasna uvala sa kristalno čistim morem. Zavratnica je sigurno jedna od najljepših uvala hrvatske obale i zaštićeni krajolik na Hrvatskom Jadranu." },
      { name: "Premužićeva staza", note: "Hodanje Velebitom sa pogledom na Jadranski arhipelag. Premužićevu stazu danas smatramo pravim remek-djelom graditeljstva jer je građena u kamenu - suhozidu, te je položena tako da nas na vrlo jednostavan način vodi u najsurovije i najkrševitije dijelove sjevernog Velebita – Hajdučke i Rožanske kukove" },
      {
        name: "Otok Pag",
        note: "Kao jedini jadranski otok s dva lica, Pag pruža divlje prizore surovog kamena i plavetnila neba te nježnije, zelenije i pitomije krajolike, nudeći vam istodobno iskustvo sirove ljepote i smirujuće idile.",
        link: {
          href: PAG_OUTDOOR_ARTICLE_URL.hr,
          label: "Otok Pag u slikama",
        },
      },
      { name: "Nacionalni park Paklenica", note: "Sve ljepote Paklenice moguće je doživjeti jedino pješačenjem, a upravo tome služi preko 150 km uređenih planinarskih staza. Posebnu draž ovom prostoru daje blizina obale koja omogućuje jedinstven doživljaj svih čari planine i mora na jednom mjestu." },
    ],
  },
  finalCta: {
    headline: "Spremni za boravak na Velebitu? Rezervirajte Stars Peak za svoje termine.",
    btnLabel: "Rezervirajte boravak",
  },
  localFlavours: {
    badge: "Uskoro",
    items: ["Divlje bilje.", "Planinski med.", "Lokalni okusi."],
    closing:
      "Uskoro će Stars Peak rasti izvan same kuće — u mjesto gdje se krajolik servira i za stolom.",
    imageAlt: "Ljubičasta vrijesovina u cvatu na Velebitu s pčelom na cvjetovima",
  },
};

const de: HomeContent = {
  ...en,
  hero: {
    headline: "Gipfel. Meer. Sterne.",
    subline:
      "Privates Berghaus auf 900 m mit Blick auf Bačić Kuk — nur 30 Minuten zur Adria.",
    facts: ["900 m Höhe", "30 Min zum Meer", "Blick auf Bačić Kuk", "Im Velebit-Naturpark"],
    ctaBook: "Aufenthalt buchen",
    ctaExperiences: "Erlebnisse ansehen",
  },
  welcome: {
    title: "In die Wildnis des Velebit",
    line: "Ein stilles Haus zwischen Gipfeln und Himmel",
    artLabel: "Radierung eines Velebit-Braunbären",
  },
  whySpecial: {
    title: "Warum dieser Ort besonders ist",
    intro:
      "Bergmorgen, Adria-Nachmittage und stille Nächte unter den Sternen — drei Landschaften an einem Tag von Stars Peak.",
    cards: [
      {
        title: "Berg",
        body: "Bačić Kuk, Premužić-Weg und Dabarski kukovi — klassisches Velebit-Wandern ab der Haustür.",
        imageAlt: "Stars-Peak-Hütte an einer Wiese mit Bačić-Kuk-Gipfeln hinter dem Wald",
        ctaLabel: "Wandern am Velebit",
      },
      {
        title: "Meer",
        body: "Karlobag, Zavratnica und Pag in einer halben Stunde — Bergmorgen, Adria-Nachmittag.",
        imageAlt: "Bucht Zavratnica an der Adria",
        ctaLabel: "Küste & Landschaften",
      },
      {
        title: "Sterne",
        body: "Keine Lichtverschmutzung — Milchstraße, Hängematten und Grat-Stille.",
        imageAlt: "Mondsichel über dem Velebit-Grat in der Dämmerung",
        ctaLabel: "Sternenhimmel",
      },
    ],
  },
  editorial: {
    title: "Erlebnisse in Bildern",
    intro:
      "Außenküche, Wohnzimmer und grandioser Blick auf Bačić Kuk — drei Momente auf Stars Peak.",
    ctaLabel: "Galerie ansehen",
    blocks: [
      {
        layout: "full",
        title: "Blick auf Bačić Kuk",
        body:
          "Bačić Kuk ragt Minuten von der Haustür über die Baumgrenze — Wald, Stille und Blick auf den Velebit, direkt von Stars Peak aus.",
        imageAlt: "Holzhütte Stars Peak mit Bačić Kuk über dem Wald",
      },
      {
        layout: "split",
        title: "Wohnzimmer",
        body:
          "Das Wohnzimmer ist das Herz des Aufenthalts — lokales Holz, Kamin und sanftes Licht von der Galerie. Ein ruhiger Ort nach der Tour, um die nächste Wanderung zu planen oder die Gipfel durchs Glas zu sehen.",
        imageAlt: "Wohnzimmer mit Kamin und Holztreppe",
      },
      {
        layout: "full",
        title: "Außenküche",
        body:
          "Sommerküche und Terrasse — draußen grillen, Pinienduft und Mahlzeiten mit dem Berg in der Nähe.",
        imageAlt: "Sommerküche und Terrasse auf Stars Peak",
      },
    ],
  },
  accommodation: {
    title: "Ihr Aufenthalt auf einen Blick",
    eyebrow: "Die Hütte",
    lead:
      "Privates Holzhaus für bis zu vier Gäste — Wohnzimmer mit Kamin, Außenküche und Berglandschaft um Bačić Kuk. Verfügbarkeit prüfen und Ihren Aufenthalt online buchen.",
    imageAlt: "Gedeckter Esstisch zum Frühstück",
    items: ["Bis 4 Gäste", "WLAN", "Kamin", "Außenküche", "Grill", "Haustiere willkommen"],
    ctaLabel: "Unterkunft & Buchung",
  },
  map: {
    title: "Berg und Meer an einem Tag",
    intro: "Stars Peak liegt zwischen Velebit-Gipfeln und der Adria.",
    homeNote:
      "Stars Peak ist Ihre Basis für den Tag: Gipfel, Buchten und Inselstraßen in etwa einer Autostunde — einige der schönsten Naturkulissen Kroatiens, in ruhigem Tempo.",
    points: [
      {
        name: "Bačić Kuk",
        note:
          "Bačić Kuk (1.304 m) besteht eigentlich aus einer Gruppe kahler, felsiger Spitzen unterschiedlicher Höhe und Steilheit und bietet Kletterherausforderungen in verschiedenen Schwierigkeitsgraden.",
      },
      {
        name: "Karlobag",
        note:
          "Karlobag ist eine wunderbare Verbindung aus Mittelmeer und Festland — kristallklares Meer und Kroatiens schönster Berg, der Velebit, nur wenige Minuten Fahrt entfernt.",
      },
      {
        name: "Zavratnica",
        note:
          "Eine wunderschöne Bucht mit kristallklarem Wasser. Zavratnica gehört sicher zu den schönsten Buchten der kroatischen Küste — ein geschütztes Landschaftsgebiet an der Adriaküste.",
      },
      {
        name: "Premužić-Weg",
        note:
          "Wandern am Velebit mit Blick auf den Adriatischen Archipel. Der Premužić-Weg gilt heute als echtes Meisterwerk des Steinbaus — als Trockenmauerwerk angelegt führt er auf einfache Weise in die rauhesten und kargsten Teile des nördlichen Velebit: Hajdučki und Rožanski kukovi.",
      },
      {
        name: "Insel Pag",
        note:
          "Als einzige Adriainsel mit zwei Gesichtern bietet Pag wilde Bilder aus purem Fels und tiefblauem Himmel sowie sanftere, grünere Landschaften — rohe Schönheit und beruhigende Idylle zugleich.",
        link: {
          href: PAG_OUTDOOR_ARTICLE_URL.de,
          label: "Insel Pag in Bildern",
        },
      },
      {
        name: "Nationalpark Paklenica",
        note:
          "Paklenicas Schönheit lässt sich am besten zu Fuß erleben, auf über 150 km markierter Wanderwege. Die Nähe zur Küste verleiht dem Gebiet besonderen Reiz — Berg und Meer an einem Ort.",
      },
    ],
  },
  finalCta: {
    headline: "Bereit für Velebit? Reservieren Sie Stars Peak für Ihre Termine.",
    btnLabel: "Jetzt buchen",
  },
  localFlavours: {
    badge: "Demnächst",
    items: ["Wildkräuter.", "Berghonig.", "Lokale Aromen."],
    closing:
      "Bald wächst Stars Peak über das Haus hinaus — zu einem Ort, an dem die Landschaft auch am Tisch serviert wird.",
    imageAlt: "Lila Heidekraut in Blüte am Velebit mit einer Biene an den Blüten",
  },
};

const fr: HomeContent = {
  ...en,
  hero: {
    headline: "Sommet. Mer. Étoiles.",
    subline: "Chalet privé à 900 m avec vue sur Bačić Kuk — à 30 minutes de l'Adriatique.",
    facts: ["900 m d'altitude", "30 min de la mer", "Vue sur Bačić Kuk", "Dans le parc naturel Velebit"],
    ctaBook: "Réserver votre séjour",
    ctaExperiences: "Voir les expériences",
  },
  welcome: {
    title: "Dans la nature sauvage du Velebit",
    line: "Une maison tranquille entre sommets et ciel",
    artLabel: "Gravure d'un ours brun du Velebit",
  },
  whySpecial: {
    title: "Pourquoi cet endroit est unique",
    intro:
      "Matins en montagne, après-midis adriatiques et nuits calmes sous les étoiles — trois paysages en une journée depuis Stars Peak.",
    cards: [
      {
        title: "Montagne",
        body: "Bačić Kuk, sentier Premužić et Dabarski kukovi — randonnée classique du Velebit.",
        imageAlt: "Chalet Stars Peak près d’une prairie avec les sommets de Bačić Kuk derrière la forêt",
        ctaLabel: "Randonnée sur le Velebit",
      },
      {
        title: "Mer",
        body: "Karlobag, Zavratnica et Pag à une demi-heure — matin montagne, après-midi mer.",
        imageAlt: "Crique de Zavratnica sur l'Adriatique",
        ctaLabel: "Côte et paysages",
      },
      {
        title: "Étoiles",
        body: "Pas de pollution lumineuse — Voie lactée et silence des crêtes.",
        imageAlt: "Croissant de lune au-dessus de la crête du Velebit au crépuscule",
        ctaLabel: "Ciel étoilé",
      },
    ],
  },
  editorial: {
    title: "L'expérience en photos",
    intro:
      "Cuisine extérieure, salon et vue imprenable sur Bačić Kuk — trois instants à Stars Peak.",
    ctaLabel: "Galerie complète",
    blocks: [
      {
        layout: "full",
        title: "Vue sur Bačić Kuk",
        body:
          "Bačić Kuk domine la crête à quelques minutes de la porte — forêt, silence et vue sur le Velebit, depuis Stars Peak.",
        imageAlt: "Chalet en bois Stars Peak avec Bačić Kuk au-dessus de la forêt",
      },
      {
        layout: "split",
        title: "Salon",
        body:
          "Le salon est le cœur du séjour — bois local, cheminée et lumière douce de la mezzanine. Un lieu calme après la randonnée, pour planifier la prochaine ascension ou regarder les sommets à travers la verrière.",
        imageAlt: "Salon avec cheminée et escalier en bois",
      },
      {
        layout: "full",
        title: "Cuisine d'été",
        body:
          "La cuisine extérieure et la terrasse ralentissent le rythme — grillades en plein air, pin et repas avec la montagne tout près.",
        imageAlt: "Cuisine d'été et terrasse à Stars Peak",
      },
    ],
  },
  accommodation: {
    title: "Votre séjour en bref",
    eyebrow: "Le chalet",
    lead:
      "Chalet en bois privé pour quatre personnes — salon avec cheminée, cuisine extérieure et nature montagneuse autour de Bačić Kuk. Consultez les disponibilités et réservez votre séjour en ligne.",
    imageAlt: "Dining table set for breakfast",
    items: ["Jusqu'à 4 personnes", "Wi‑Fi", "Cheminée", "Cuisine extérieure", "Barbecue", "Animaux acceptés"],
    ctaLabel: "Logement & réservation",
  },
  map: {
    title: "Montagne et mer en une journée",
    intro: "Stars Peak se situe entre les sommets du Velebit et l'Adriatique.",
    homeNote:
      "Stars Peak est votre base pour la journée : sommets, criques et routes d’île à environ une heure de route — parmi les plus beaux paysages de Croatie, à un rythme doux.",
    points: [
      {
        name: "Bačić Kuk",
        note:
          "Bačić Kuk (1 304 m) est en réalité un groupe de sommets rocheux dénudés, de hauteurs et pentes variées, offrant des défis d'escalade à tous les niveaux.",
      },
      {
        name: "Karlobag",
        note:
          "Karlobag est un merveilleux mélange de Méditerranée et de continent — mer cristalline et plus belle montagne de Croatie, le Velebit, à quelques minutes en voiture.",
      },
      {
        name: "Zavratnica",
        note:
          "Une magnifique crique aux eaux cristallines. Zavratnica compte parmi les plus belles baies de la côte croate — un paysage protégé de l'Adriatique.",
      },
      {
        name: "Sentier Premužić",
        note:
          "Randonnée sur le Velebit avec vue sur l'archipel adriatique. Le sentier Premužić est considéré comme un chef-d'œuvre de construction en pierres sèches, tracé pour mener simplement vers les parties les plus sauvages et escarpées du Velebit septentrional — les kukovi de Hajdučki et Rožanski.",
      },
      {
        name: "Île Pag",
        note:
          "Seule île adriatique à double visage, Pag offre des paysages sauvages de pierre nue et de ciel bleu, ainsi que des horizons plus doux et verdoyants — beauté brute et idylle apaisante à la fois.",
        link: {
          href: PAG_OUTDOOR_ARTICLE_URL.fr,
          label: "Île Pag en images",
        },
      },
      {
        name: "Parc national de Paklenica",
        note:
          "Les beautés de Paklenica ne se découvrent qu'à pied, sur plus de 150 km de sentiers balisés. La proximité de la côte ajoute un charme unique — montagne et mer au même endroit.",
      },
    ],
  },
  finalCta: {
    headline: "Prêt pour le Velebit ? Réservez Stars Peak pour vos dates.",
    btnLabel: "Réserver votre séjour",
  },
  localFlavours: {
    badge: "Bientôt",
    items: ["Herbes sauvages.", "Miel de montagne.", "Saveurs locales."],
    closing:
      "Bientôt, Stars Peak ira au-delà de la maison — vers un lieu où le paysage se retrouve aussi à table.",
    imageAlt: "Bruyère pourpre en fleurs sur le Velebit avec une abeille sur les fleurs",
  },
};

const it: HomeContent = {
  ...en,
  hero: {
    headline: "Cima. Mare. Stelle.",
    subline: "Chalet privato a 900 m con vista su Bačić Kuk — a 30 minuti dall'Adriatico.",
    facts: ["900 m di quota", "30 min dal mare", "Vista su Bačić Kuk", "Nel parco naturale Velebit"],
    ctaBook: "Prenota il soggiorno",
    ctaExperiences: "Scopri le esperienze",
  },
  welcome: {
    title: "Nella natura selvaggia del Velebit",
    line: "Una casa quieta tra cime e cielo",
    artLabel: "Incisione di un orso bruno del Velebit",
  },
  whySpecial: {
    title: "Perché questo posto è speciale",
    intro:
      "Mattine in montagna, pomeriggi adriatici e notti quiete sotto le stelle — tre paesaggi in un solo giorno da Stars Peak.",
    cards: [
      {
        title: "Montagna",
        body: "Bačić Kuk, sentiero Premužić e Dabarski kukovi — escursioni classiche del Velebit.",
        imageAlt: "Chalet Stars Peak accanto a un prato con le cime di Bačić Kuk oltre il bosco",
        ctaLabel: "Escursioni sul Velebit",
      },
      {
        title: "Mare",
        body: "Karlobag, Zavratnica e Pag a mezz'ora — mattina in montagna, pomeriggio al mare.",
        imageAlt: "Baia di Zavratnica sull'Adriatico",
        ctaLabel: "Costa e paesaggi",
      },
      {
        title: "Stelle",
        body: "Nessun inquinamento luminoso — Via Lattea e silenzio della cresta.",
        imageAlt: "Mezzaluna sopra la cresta del Velebit al crepuscolo",
        ctaLabel: "Cielo stellato",
      },
    ],
  },
  editorial: {
    title: "L'esperienza in foto",
    intro:
      "Cucina esterna, soggiorno e vista mozzafiato su Bačić Kuk — tre momenti a Stars Peak.",
    ctaLabel: "Galleria completa",
    blocks: [
      {
        layout: "full",
        title: "Vista su Bačić Kuk",
        body:
          "Bačić Kuk svetta sopra la linea degli alberi a pochi minuti dalla porta — foresta, silenzio e vista sul Velebit, direttamente da Stars Peak.",
        imageAlt: "Chalet in legno Stars Peak con Bačić Kuk sopra il bosco",
      },
      {
        layout: "split",
        title: "Soggiorno",
        body:
          "Il soggiorno è il cuore della casa — legno locale, camino e luce morbida dalla galleria. Un luogo tranquillo dopo l'escursione, per pianificare la prossima salita o guardare le cime attraverso il vetro.",
        imageAlt: "Soggiorno con camino e scala in legno",
      },
      {
        layout: "full",
        title: "Cucina esterna",
        body:
          "La cucina estiva e la terrazza rallentano il ritmo — griglia all'aperto, profumo di pino e pasti con la montagna a portata di mano.",
        imageAlt: "Cucina estiva e terrazza a Stars Peak",
      },
    ],
  },
  accommodation: {
    title: "Il soggiorno in breve",
    eyebrow: "Il chalet",
    lead:
      "Chalet in legno privato per quattro ospiti — soggiorno con camino, cucina esterna e natura montana intorno a Bačić Kuk. Verificate disponibilità e prenotate il soggiorno online.",
    imageAlt: "Dining table set for breakfast",
    items: ["Fino a 4 ospiti", "Wi‑Fi", "Camino", "Cucina esterna", "Barbecue", "Animali ammessi"],
    ctaLabel: "Alloggio e prenotazione",
  },
  map: {
    title: "Montagna e mare in un giorno",
    intro: "Stars Peak si trova tra le cime del Velebit e l'Adriatico.",
    homeNote:
      "Stars Peak è la base per la giornata: cime, calette e strade dell’isola a circa un’ora di auto — tra le più belle scene naturali della Croazia, senza fretta.",
    points: [
      {
        name: "Bačić Kuk",
        note:
          "Bačić Kuk (1.304 m) è in realtà un gruppo di torri rocciose spoglie, di altezze e pendenza diverse, che offre sfide d'arrampicata a ogni livello di difficoltà.",
      },
      {
        name: "Karlobag",
        note:
          "Karlobag è una meravigliosa fusione tra Mediterraneo e continente — mare cristallino e la più bella montagna croata, il Velebit, a pochi minuti di auto.",
      },
      {
        name: "Zavratnica",
        note:
          "Una splendida insenatura con mare cristallino. Zavratnica è senza dubbio una delle baie più belle della costa croata — un paesaggio protetto dell'Adriatico.",
      },
      {
        name: "Sentiero Premužić",
        note:
          "Camminare sul Velebit con vista sull'arcipelago adriatico. Il sentiero Premužić è considerato un capolavoro di costruzione in pietra a secco, tracciato per condurci in modo semplice nelle parti più aspre e selvagge del Velebit settentrionale — i kukovi di Hajdučki e Rožanski.",
      },
      {
        name: "Isola Pag",
        note:
          "Unica isola adriatica con due volti, Pag offre scenari selvaggi di roccia nuda e cielo azzurro, ma anche paesaggi più dolci e verdi — bellezza cruda e idillio rilassante insieme.",
        link: {
          href: PAG_OUTDOOR_ARTICLE_URL.it,
          label: "Isola Pag in immagini",
        },
      },
      {
        name: "Parco nazionale Paklenica",
        note:
          "Le bellezze di Paklenica si vivono solo a piedi, lungo oltre 150 km di sentieri escursionistici segnalati. La vicinanza alla costa aggiunge un fascino unico — montagna e mare nello stesso luogo.",
      },
    ],
  },
  finalCta: {
    headline: "Pronti per il Velebit? Prenotate Stars Peak per le vostre date.",
    btnLabel: "Prenota il soggiorno",
  },
  localFlavours: {
    badge: "In arrivo",
    items: ["Erbe selvatiche.", "Miele di montagna.", "Sapori locali."],
    closing:
      "Presto Stars Peak crescerà oltre la casa — in un luogo dove il paesaggio arriva anche a tavola.",
    imageAlt: "Erica viola in fiore sul Velebit con un'ape sui fiori",
  },
};

const byLocale: Record<Locale, HomeContent> = { en, hr, de, fr, it };

export function getHomeContent(locale: Locale): HomeContent {
  return byLocale[locale];
}
