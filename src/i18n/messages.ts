import type { Locale } from "./config";
import fr from "./locales/fr.json";
import it from "./locales/it.json";

export type Messages = {
  meta: { siteName: string; siteDescription: string };
  header: { bookCta: string; menuOpen: string; menuClose: string };
  nav: {
    home: string;
    about: string;
    gallery: string;
    film: string;
    nearby: string;
    contact: string;
  };
  langSwitcher: { aria: string };
  footer: {
    tagline: string;
    rights: string;
    exploreTitle: string;
    contactTitle: string;
  };
  home: {
    heroBadge: string;
    heroTitle: string;
    heroLead: string;
    /** Large script-style headline on fullscreen hero */
    heroScriptTitle: string;
    /** Italic serif line under headline */
    heroCenterLine: string;
    /** Pill CTA under hero text (e.g. price teaser) */
    heroCtaPill: string;
    /** Alt text for each fullscreen slide (same order as seeds in page) */
    heroSlideAlts: string[];
    heroCarouselPrev: string;
    heroCarouselNext: string;
    /** Sans line under script (e.g. newsletter teaser) */
    heroSubscribeLine: string;
    heroEmailPlaceholder: string;
    heroSubscribeButton: string;
    heroSubscribeNote: string;
    heroSubscribeThanks: string;
    nearbyTitle: string;
    nearbyLead: string;
    itineraryImageAlts: string[];
    itineraryDays: { label: string; headline: string; body: string }[];
    /** YouTube block (#film) */
    filmTitle: string;
    filmCaption: string;
    statsLine: string;
    heroImageAlt: string;
    ctaPrimary: string;
    ctaSecondary: string;
    amenities: { label: string }[];
    amenitiesLabel: string;
    welcomeTitle: string;
    welcomeBody: string;
    featuresSectionLabel: string;
    features: { title: string; body: string }[];
    quote: string;
  };
  about: {
    title: string;
    lead: string;
    p1: string;
    p2: string;
    highlights: string[];
    highlightsTitle: string;
    sideImageAlt: string;
  };
  gallery: {
    title: string;
    intro: string;
    lightboxClose: string;
    lightboxPrev: string;
    lightboxNext: string;
    lightboxAria: string;
    lightboxOpenThumb: string;
    images: { alt: string; caption: string }[];
  };
  contact: {
    title: string;
    intro: string;
    nameLabel: string;
    contactName: string;
    addressLabel: string;
    addressMock: string;
    phoneLabel: string;
    phoneMock: string;
    emailLabel: string;
    emailMock: string;
    detailsHeading: string;
    mapHeading: string;
    mapIframeTitle: string;
    mapOpenGoogle: string;
  };
  a11y: { scrollToTop: string };
};

const en: Messages = {
  meta: {
    siteName: "Stars Peak Holiday Home",
    siteDescription:
      "A quiet mountain retreat — mock brochure site. Replace text and images anytime.",
  },
  header: {
    bookCta: "Check availability",
    menuOpen: "Open menu",
    menuClose: "Close menu",
  },
  nav: {
    home: "Home",
    about: "About",
    gallery: "Gallery",
    film: "Video",
    nearby: "Near places",
    contact: "Contact",
  },
  langSwitcher: { aria: "Language" },
  footer: {
    tagline: "Mock vacation rental site — swap copy & photos when ready.",
    rights: "© Stars Peak — placeholder",
    exploreTitle: "Explore",
    contactTitle: "Contact us",
  },
  home: {
    heroBadge: "Velebit · Croatia (mock)",
    heroTitle: "Your hideaway above the treeline",
    heroLead:
      "Wake up to pine-scented air and wide skies. This mock homepage describes a fictional cabin so you can preview layout, typography, and navigation before adding your real story.",
    heroScriptTitle: "Stars Peak",
    heroCenterLine:
      "You will always have quiet trails to walk and a warm house to return to — your base in the Velebit hills.",
    heroSubscribeLine: "Get the special offers directly in your email.",
    heroEmailPlaceholder: "Enter email address",
    heroSubscribeButton: "Subscribe",
    heroSubscribeNote: "Demo only — wire this field to your newsletter or CRM.",
    heroSubscribeThanks: "Thanks — demo only. Connect to your newsletter tool.",
    nearbyTitle: "Near places",
    nearbyLead:
      "Paklenica, Pag, Zavratnica and the Premužić trail — day trips from your base in the Velebit hills.",
    itineraryImageAlts: [
      "Paklenica National Park — cliffs and pine forest",
      "Pag island — stone shore and Adriatic view",
      "Zavratnica cove — steep cliffs above calm water",
      "Premužić trail — drystone path along the ridge",
      "Premužić trail — sea and islands in the distance",
      "Pag — coastal road and lunar landscape",
      "Premužić trail — viewpoint along the route",
      "Paklenica — wide view of the canyon slopes",
    ],
    itineraryDays: [
      {
        label: "NP Paklenica",
        headline: "CANYONS & TRAILS AT THE FOOT OF VELEBIT",
        body:
          "Paklenica is one of Croatia’s flagship national parks — narrow gorges, cliffs, and marked routes for every fitness level. Plan a half or full day and check seasonal opening hours before you go.",
      },
      {
        label: "Otok Pag",
        headline: "ISLAND DAY — SEA, WIND & LUNAR STONE",
        body:
          "Pag is an easy island hop for beaches, cycling, and local flavours (think cheese and lamb). Cross by bridge from the mainland or combine with a coastal drive — ideal for a sunny day out.",
      },
      {
        label: "Uvala Zavratnica",
        headline: "A FJORD-LIKE COVE ON THE KVARNER COAST",
        body:
          "Zavratnica is a famous sheltered bay with dramatic cliffs and calm water — perfect for a boat trip or a scenic stop if you’re exploring the northern Adriatic. Pair it with a walk along the shore or a swim where allowed.",
      },
      {
        label: "Premužić trail",
        headline: "ANTE PREMUŽIĆ’S STONE PATH ALONG THE RIDGE",
        body:
          "The Premužić trail is one of Velebit’s icons — a drystone hiking route with gentle gradients and huge views over the sea and the Kvarner islands. Choose a section that fits your time and fitness, carry water, and check weather on the mountain.",
      },
    ],
    filmTitle: "A moment on the trail",
    filmCaption: "Short clip from the area — play with the controls below.",
    heroCtaPill: "From €129 / night · mock rate",
    heroSlideAlts: [
      "Holiday home — photo 3",
      "Holiday home — photo 1",
      "Holiday home — photo 2",
      "Holiday home — photo 4",
    ],
    heroCarouselPrev: "Previous slide",
    heroCarouselNext: "Next slide",
    statsLine: "Entire home · Sleeps 6 · 3 bedrooms · 2 bathrooms",
    heroImageAlt: "Placeholder exterior photo of the holiday home",
    ctaPrimary: "View gallery",
    ctaSecondary: "Get in touch",
    amenitiesLabel: "At a glance",
    amenities: [
      { label: "Up to 6 guests" },
      { label: "Full kitchen" },
      { label: "Free parking" },
      { label: "Wi‑Fi" },
    ],
    welcomeTitle: "Why book direct",
    welcomeBody:
      "Independent holiday homes like this one often offer better flexibility and clearer house rules when you message the owner directly. Replace this block with your own story, seasonal offers, or a link to your live calendar when you connect a booking tool.",
    featuresSectionLabel: "What to expect",
    features: [
      {
        title: "Sleeps 6 (mock)",
        body: "Three bedrooms, two bathrooms — placeholder numbers until you confirm capacity.",
      },
      {
        title: "Outdoor deck",
        body: "Morning coffee spot with pretend mountain views. Photo coming soon.",
      },
      {
        title: "Slow evenings",
        body: "Fireplace, board games, and zero itinerary. Marketing fluff you can rewrite.",
      },
    ],
    quote:
      "“We loved the silence.” — Guest review placeholder. Replace with a real testimonial.",
  },
  about: {
    title: "About this place",
    lead: "Stars Peak is a sample name for your holiday house. The text below is lorem-style vacation copy.",
    p1:
      "Built from local stone (fictional), the house was imagined as a weekend escape for families who hike by day and cook together at night. Swap this paragraph with your history: when you bought the land, what you renovated, and what makes your home special.",
    p2:
      "We are ten minutes from a trailhead (mock distance), twenty from the nearest bakery (also mock), and a world away from inbox stress. Update distances, road type, and parking notes for real guests.",
    highlights: [
      "Self check-in with lockbox (example — change if inaccurate)",
      "Parking for two cars on gravel (mock)",
      "Pet-friendly on request — set your real policy",
      "Starlink / Wi-Fi — mention only if true",
    ],
    highlightsTitle: "Highlights",
    sideImageAlt: "Stars Peak holiday home — view of the house and setting",
  },
  gallery: {
    title: "Gallery",
    intro:
      "Photos from the property in one seamless grid — open any picture to view it larger. Use the arrow keys or the side buttons to browse.",
    lightboxClose: "Close gallery",
    lightboxPrev: "Previous image",
    lightboxNext: "Next image",
    lightboxAria: "Enlarged photo gallery",
    lightboxOpenThumb: "Open larger view",
    images: Array.from({ length: 16 }, (_, i) => ({
      alt: `Stars Peak holiday home — gallery photo ${i + 1}`,
      caption: `Gallery — ${i + 1}`,
    })),
  },
  contact: {
    title: "Contact",
    intro: "Reach us by phone or email, or visit us at the address below.",
    nameLabel: "Name",
    contactName: "Velebit Stars Peak",
    addressLabel: "Address",
    addressMock: "Došen Dabar 1, Croatia",
    phoneLabel: "Phone",
    phoneMock: "+385 99 000 0000",
    emailLabel: "Email",
    emailMock: "info@velebit-starspeak.com",
    detailsHeading: "Details",
    mapHeading: "Map",
    mapIframeTitle: "Google Map — Došen Dabar 1, Croatia",
    mapOpenGoogle: "Open in Google Maps to find directions",
  },
  a11y: { scrollToTop: "Back to top" },
};

const hr: Messages = {
  meta: {
    siteName: "Kuća za odmor Stars Peak",
    siteDescription:
      "Tihi planinski boravak — probna stranica. Kasnije zamijenite tekst i slike.",
  },
  header: {
    bookCta: "Provjeri dostupnost",
    menuOpen: "Otvori izbornik",
    menuClose: "Zatvori izbornik",
  },
  nav: {
    home: "Početna",
    about: "O nama",
    gallery: "Galerija",
    film: "Video",
    nearby: "U blizini",
    contact: "Kontakt",
  },
  langSwitcher: { aria: "Jezik" },
  footer: {
    tagline: "Probna stranica za najam — zamijenite tekst i fotografije.",
    rights: "© Stars Peak — placeholder",
    exploreTitle: "Poveznice",
    contactTitle: "Kontakt",
  },
  home: {
    heroBadge: "Velebit · Hrvatska (mock)",
    heroTitle: "Skriveno mjesto iznad krošnji",
    heroLead:
      "Probudite se uz miris bora i široko nebo. Ovaj mock opisuje izmišljenu kolibu kako biste vidjeli raspored i tipografiju prije pravog sadržaja.",
    heroScriptTitle: "Stars Peak",
    heroCenterLine:
      "Uvijek imate tihe staze za šetnju i topli dom za povratak — vaša baza u velebitskim bregima.",
    heroCtaPill: "Od 129 € / noć · mock cijena",
    heroSlideAlts: [
      "Kuća za odmor — fotografija 3",
      "Kuća za odmor — fotografija 1",
      "Kuća za odmor — fotografija 2",
      "Kuća za odmor — fotografija 4",
    ],
    heroCarouselPrev: "Prethodna slika",
    heroCarouselNext: "Sljedeća slika",
    heroSubscribeLine: "Posebne ponude stižu izravno na vašu e-poštu.",
    heroEmailPlaceholder: "Unesite e-adresu",
    heroSubscribeButton: "Pretplati se",
    heroSubscribeNote: "Samo demo — kasnije povežite s newsletter servisom.",
    heroSubscribeThanks: "Hvala — samo demo. Povežite s alatom za newsletter.",
    nearbyTitle: "U blizini",
    nearbyLead:
      "NP Paklenica, Pag, Zavratnica i Premužićeva staza — izleti iz vaše baze u velebitskim bregima.",
    itineraryImageAlts: [
      "NP Paklenica — litice i borova šuma",
      "Otok Pag — kamena obala i pogled na more",
      "Uvala Zavratnica — litice iznad mirne vode",
      "Premužićeva staza — suhozidni put duž grebena",
      "Premužićeva staza — more i otočići u daljini",
      "Pag — obalni krajolik i „mjesečev“ kamen",
      "Premužićeva staza — vidikovac uz stazu",
      "Paklenica — širok pogled na kanjonske strmine",
    ],
    itineraryDays: [
      {
        label: "NP Paklenica",
        headline: "KANJONI I STAZE PODNOŽJEM VELEBITA",
        body:
          "Paklenica je jedan od najpoznatijih hrvatskih nacionalnih parkova — uski kanjoni, litice i označene rute za različite razine kondicije. Planirajte pola ili cijeli dan i prije polaska provjerite radno vrijeme i ulaz.",
      },
      {
        label: "Otok Pag",
        headline: "IZLET NA OTOK — MORE, VJETAR I „MJESEČEV“ KAMEN",
        body:
          "Pag je blizu — plaže, biciklizam i lokalni okusi (sir, janjetina). Most s kopna ili kombinacija obalnom cestom; idealan dan za sunce i more.",
      },
      {
        label: "Uvala Zavratnica",
        headline: "DRAMATIČNE LITICE I TIRKIZNA VODA",
        body:
          "Zavratnica je poznata uvala s liticama i mirnom, tirkiznom vodom — izlet brodom ili zaustavljanje uz obilazak sjevernog Jadrana. Provjerite pravila kupanja i pristup za posjetitelje.",
      },
      {
        label: "Premužićeva staza",
        headline: "KAMENI PUT ANTUNA PREMUŽIĆA DUŽ GREBENA",
        body:
          "Jedna je od najljepših planinarskih staza na Velebitu — suhozidna trasa s blagim usponima i pogledom na more te otoke Kvarnera. Odaberite odcijek prema vremenu i kondiciji, ponesite vodu i provjerite vremensku prognozu za planinu.",
      },
    ],
    filmTitle: "Trenutak na stazi",
    filmCaption: "Kratki video područja — reproduciraj kontrolama u playeru.",
    statsLine: "Cijela kuća · Do 6 osoba · 3 spavaće sobe · 2 kupaonice",
    heroImageAlt: "Probna vanjska fotografija kuće za odmor",
    ctaPrimary: "Galerija",
    ctaSecondary: "Kontakt",
    amenitiesLabel: "Ukratko",
    amenities: [
      { label: "Do 6 gostiju" },
      { label: "Puna kuhinja" },
      { label: "Besplatan parking" },
      { label: "Wi‑Fi" },
    ],
    welcomeTitle: "Zašto izravno kod vlasnika",
    welcomeBody:
      "Često dobijete jasnija pravila i fleksibilnije dogovore kad pišete vlasniku izravno. Ovaj tekst zamijenite svojom pričom, sezonskim ponudama ili poveznicom na kalendar kad ga povežete.",
    featuresSectionLabel: "Što vas čeka",
    features: [
      {
        title: "Do 6 osoba (mock)",
        body: "Tri spavaće sobe, dvije kupaonice — brojke su primjer dok ne potvrdite kapacitet.",
      },
      {
        title: "Terasa na otvorenom",
        body: "Jutarnja kava s izmišljenim pogledom. Fotografija dolazi kasnije.",
      },
      {
        title: "Spora večer",
        body: "Kamin, društvene igre, bez rasporeda — marketing tekst za zamjenu.",
      },
    ],
    quote:
      "„Voljeli smo tišinu.“ — primjer recenzije. Zamijenite pravim iskustvom gosta.",
  },
  about: {
    title: "O ovom mjestu",
    lead: "Stars Peak je primjer naziva za vašu kuću. Tekst ispod je probni opis za odmor.",
    p1:
      "Od lokalnog kamena (izmišljeno), kuća je zamišljena kao vikend bijeg za obitelji koje danju planinare, a navečer kuhaju zajedno. Ovdje opišite pravu povijest: kada ste kupili zemlju, što ste renovirali.",
    p2:
      "Deset minuta do staze (mock udaljenost), dvadeset do najbliže pekare (također mock), i daleko od stresa pretinca. Ažurirajte udaljenosti, cestu i parking za stvarne goste.",
    highlights: [
      "Samostalni check-in s lockboxom (primjer — prilagodite)",
      "Parking za dva auta na šljunčanom (mock)",
      "Kućni ljubimci na upit — postavite pravilo",
      "Starlink / Wi-Fi — navedite samo ako vrijedi",
    ],
    highlightsTitle: "Sažeto",
    sideImageAlt: "Kuća Stars Peak — pogled na objekt i okruženje",
  },
  gallery: {
    title: "Galerija",
    intro:
      "Fotografije objekta u jednom mozaiku — dodirnite sliku za veći prikaz. Strelicama na tipkovnici ili gumbima listate dalje.",
    lightboxClose: "Zatvori galeriju",
    lightboxPrev: "Prethodna slika",
    lightboxNext: "Sljedeća slika",
    lightboxAria: "Povećani prikaz galerije",
    lightboxOpenThumb: "Otvori veći prikaz",
    images: Array.from({ length: 16 }, (_, i) => ({
      alt: `Kuća za odmor Stars Peak — galerija, fotografija ${i + 1}`,
      caption: `Galerija — ${i + 1}`,
    })),
  },
  contact: {
    title: "Kontakt",
    intro: "Javite se telefonom ili e-poštom ili nas posjetite na adresi.",
    nameLabel: "Naziv",
    contactName: "Velebit Stars Peak",
    addressLabel: "Adresa",
    addressMock: "Došen Dabar 1, Hrvatska",
    phoneLabel: "Telefon",
    phoneMock: "+385 99 000 0000",
    emailLabel: "E-pošta",
    emailMock: "info@velebit-starspeak.com",
    detailsHeading: "Podaci",
    mapHeading: "Karta",
    mapIframeTitle: "Google karta — Došen Dabar 1, Hrvatska",
    mapOpenGoogle: "Otvori u Google Kartama za upute do lokacije",
  },
  a11y: { scrollToTop: "Natrag na vrh" },
};

const de: Messages = {
  meta: {
    siteName: "Ferienhaus Stars Peak",
    siteDescription:
      "Ruhiger Bergurlaub — Demoseite. Texte und Bilder später austauschen.",
  },
  header: {
    bookCta: "Verfügbarkeit prüfen",
    menuOpen: "Menü öffnen",
    menuClose: "Menü schließen",
  },
  nav: {
    home: "Start",
    about: "Über uns",
    gallery: "Galerie",
    film: "Video",
    nearby: "In der Nähe",
    contact: "Kontakt",
  },
  langSwitcher: { aria: "Sprache" },
  footer: {
    tagline: "Demo-Ferienhaus-Website — Inhalte und Fotos ersetzen.",
    rights: "© Stars Peak — Platzhalter",
    exploreTitle: "Navigation",
    contactTitle: "Kontakt",
  },
  home: {
    heroBadge: "Velebit · Kroatien (Mock)",
    heroTitle: "Ihr Rückzugsort über den Baumwipfeln",
    heroLead:
      "Wachen Sie auf mit Kiefernduft und weitem Himmel. Diese Demo-Startseite beschreibt eine fiktive Hütte, damit Sie Layout und Navigation testen können.",
    heroScriptTitle: "Stars Peak",
    heroCenterLine:
      "Immer ruhige Wege zum Wandern und ein warmes Haus zum Zurückkehren — Ihre Basis in den Velebit-Hügeln.",
    heroCtaPill: "Ab 129 € / Nacht · Platzhalterpreis",
    heroSlideAlts: [
      "Ferienhaus — Foto 3",
      "Ferienhaus — Foto 1",
      "Ferienhaus — Foto 2",
      "Ferienhaus — Foto 4",
    ],
    heroCarouselPrev: "Vorheriges Bild",
    heroCarouselNext: "Nächstes Bild",
    heroSubscribeLine: "Spezialangebote direkt in Ihrer E-Mail.",
    heroEmailPlaceholder: "E-Mail-Adresse eingeben",
    heroSubscribeButton: "Abonnieren",
    heroSubscribeNote: "Nur Demo — später mit Newsletter-Tool verbinden.",
    heroSubscribeThanks: "Danke — nur Demo. Mit Newsletter-Tool verbinden.",
    nearbyTitle: "In der Nähe",
    nearbyLead:
      "NP Paklenica, Pag, Zavratnica und der Premužić-Weg — Tagesausflüge von Ihrer Basis in den Velebit-Bergen.",
    itineraryImageAlts: [
      "Nationalpark Paklenica — Felswände und Kiefernwald",
      "Insel Pag — Steinküste und Adria-Panorama",
      "Bucht Zavratnica — Steilwände über ruhigem Wasser",
      "Premužić-Weg — Trockenmauerweg am Grat",
      "Premužić-Weg — Meer und Inseln in der Ferne",
      "Pag — Küstenlandschaft und „Mond“-Stein",
      "Premužić-Weg — Aussichtspunkt am Weg",
      "Paklenica — weiter Blick in die Schluchten",
    ],
    itineraryDays: [
      {
        label: "NP Paklenica",
        headline: "SCHLUCHTEN UND WEGE AM FUß DES VELEBIT",
        body:
          "Paklenica ist einer Kroatiens bekanntesten Nationalparks — enge Schluchten, Felswände und markierte Routen für jedes Niveau. Planen Sie einen halben oder ganzen Tag und prüfen Sie Öffnungszeiten vorab.",
      },
      {
        label: "Insel Pag",
        headline: "INSELTAG — MEER, WIND UND „MOND“-STEIN",
        body:
          "Pag ist gut erreichbar: Strände, Radfahren und lokale Spezialitäten (Käse, Lamm). Über die Brücke vom Festland oder als Teil einer Küstenfahrt — ideal für einen sonnigen Tag.",
      },
      {
        label: "Bucht Zavratnica",
        headline: "GESCHÜTZTE BUCHT MIT FJORDARTIGEM CHARAKTER",
        body:
          "Zavratnica ist eine berühmte, windgeschützte Bucht mit steilen Klippen und ruhigem Wasser — perfekt für eine Bootstour oder einen Fotostopp an der Kvarner-Küste. Bade- und Zutrittsregeln bitte vor Ort beachten.",
      },
      {
        label: "Premužić-Weg",
        headline: "ANTE PREMUŽIĆS STEINWEG AM KAMM",
        body:
          "Der Premužić-Weg gehört zu Velebits Klassikern — ein trockenmauerwerkter Höhenweg mit sanften Steigungen und Weitblick auf Meer und Kvarner-Inseln. Wählen Sie eine Etappe passend zu Zeit und Kondition, nehmen Sie Wasser mit und beachten Sie das Bergwetter.",
      },
    ],
    filmTitle: "Ein Moment auf dem Weg",
    filmCaption: "Kurzer Clip aus der Umgebung — mit den Player-Steuerungen abspielen.",
    statsLine: "Gesamtes Haus · 6 Gäste · 3 Schlafzimmer · 2 Bäder",
    heroImageAlt: "Platzhalter-Außenfoto des Ferienhauses",
    ctaPrimary: "Zur Galerie",
    ctaSecondary: "Kontakt",
    amenitiesLabel: "Kurzinfo",
    amenities: [
      { label: "Bis zu 6 Gäste" },
      { label: "Voll ausgestattete Küche" },
      { label: "Gratis Parkplatz" },
      { label: "WLAN" },
    ],
    welcomeTitle: "Direkt beim Gastgeber buchen",
    welcomeBody:
      "Oft erhalten Sie persönliche Antworten und klarere Hausregeln, wenn Sie direkt beim Eigentümer anfragen. Ersetzen Sie diesen Text durch Ihre Geschichte, Saisonangebote oder einen Kalender-Link.",
    featuresSectionLabel: "Das erwartet Sie",
    features: [
      {
        title: "6 Personen (Mock)",
        body: "Drei Schlafzimmer, zwei Bäder — Platzhalter bis Sie die Kapazität festlegen.",
      },
      {
        title: "Außenterrasse",
        body: "Kaffee am Morgen mit erfundener Aussicht. Foto folgt.",
      },
      {
        title: "Ruhige Abende",
        body: "Kamin, Gesellschaftsspiele, kein Plan — Marketingtext zum Überarbeiten.",
      },
    ],
    quote:
      "„Wir liebten die Stille.“ — Beispielbewertung. Durch echtes Feedback ersetzen.",
  },
  about: {
    title: "Über dieses Haus",
    lead: "Stars Peak ist ein Beispielname. Der folgende Text ist Platzhalter für Ihr Ferienhaus.",
    p1:
      "Aus regionalem Stein (fiktiv) — gedacht als Wochenendrefugium für Familien, die tags wandern und abends gemeinsam kochen. Ersetzen Sie dies mit Ihrer Geschichte.",
    p2:
      "Zehn Minuten zum Wanderparkplatz (Mock), zwanzig zur Bäckerei (Mock), und weit weg vom Posteingang. Entfernungen und Zufahrt real beschreiben.",
    highlights: [
      "Self-Check-in mit Schlüsselbox (Beispiel)",
      "Parkplatz für zwei Autos auf Schotter (Mock)",
      "Haustiere auf Anfrage — Ihre Regel",
      "Starlink / WLAN — nur wenn vorhanden",
    ],
    highlightsTitle: "Auf einen Blick",
    sideImageAlt: "Ferienhaus Stars Peak — Haus und Umgebung",
  },
  gallery: {
    title: "Galerie",
    intro:
      "Fotos vom Objekt in einem nahtlosen Raster — antippen für die Großansicht. Pfeiltasten oder Seitenknöpfe zum Blättern.",
    lightboxClose: "Galerie schließen",
    lightboxPrev: "Vorheriges Bild",
    lightboxNext: "Nächstes Bild",
    lightboxAria: "Vergrößerte Galerie",
    lightboxOpenThumb: "Größere Ansicht öffnen",
    images: Array.from({ length: 16 }, (_, i) => ({
      alt: `Ferienhaus Stars Peak — Galeriefoto ${i + 1}`,
      caption: `Galerie — ${i + 1}`,
    })),
  },
  contact: {
    title: "Kontakt",
    intro: "Erreichen Sie uns telefonisch oder per E-Mail, oder besuchen Sie uns vor Ort.",
    nameLabel: "Name",
    contactName: "Velebit Stars Peak",
    addressLabel: "Adresse",
    addressMock: "Došen Dabar 1, Kroatien",
    phoneLabel: "Telefon",
    phoneMock: "+385 99 000 0000",
    emailLabel: "E-Mail",
    emailMock: "info@velebit-starspeak.com",
    detailsHeading: "Kontaktdaten",
    mapHeading: "Karte",
    mapIframeTitle: "Google Karte — Došen Dabar 1, Kroatien",
    mapOpenGoogle: "In Google Maps öffnen, um die Route zu finden",
  },
  a11y: { scrollToTop: "Nach oben" },
};

export const messages: Record<Locale, Messages> = {
  en,
  hr,
  de,
  fr: fr as Messages,
  it: it as Messages,
};

export function getMessages(locale: Locale): Messages {
  return messages[locale];
}
