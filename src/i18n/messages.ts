import type { Locale } from "./config";

export type Messages = {
  meta: { siteName: string; siteDescription: string };
  nav: { home: string; about: string; gallery: string; contact: string };
  langSwitcher: { aria: string };
  footer: { tagline: string; rights: string };
  home: {
    heroBadge: string;
    heroTitle: string;
    heroLead: string;
    ctaPrimary: string;
    ctaSecondary: string;
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
    asideTitle: string;
    asideBody: string;
  };
  gallery: {
    title: string;
    intro: string;
    images: { alt: string; caption: string }[];
  };
  contact: {
    title: string;
    intro: string;
    addressLabel: string;
    addressMock: string;
    phoneLabel: string;
    phoneMock: string;
    emailLabel: string;
    emailMock: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    submit: string;
    formNote: string;
    detailsHeading: string;
    messageHeading: string;
    mockToast: string;
  };
};

const en: Messages = {
  meta: {
    siteName: "Stars Peak Holiday Home",
    siteDescription:
      "A quiet mountain retreat — mock brochure site. Replace text and images anytime.",
  },
  nav: {
    home: "Home",
    about: "About",
    gallery: "Gallery",
    contact: "Contact",
  },
  langSwitcher: { aria: "Language" },
  footer: {
    tagline: "Mock vacation rental site — swap copy & photos when ready.",
    rights: "© Stars Peak — placeholder",
  },
  home: {
    heroBadge: "Velebit · Croatia (mock)",
    heroTitle: "Your hideaway above the treeline",
    heroLead:
      "Wake up to pine-scented air and wide skies. This mock homepage describes a fictional cabin so you can preview layout, typography, and navigation before adding your real story.",
    ctaPrimary: "View gallery",
    ctaSecondary: "Get in touch",
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
    asideTitle: "House rules (sample)",
    asideBody:
      "Quiet hours after 10 p.m., no parties, leave shoes in the mudroom. Replace with your actual rules and local regulations.",
  },
  gallery: {
    title: "Gallery",
    intro:
      "Placeholder photos from Picsum. Seed-based URLs stay stable between builds — replace with your own shots in /public or your CDN.",
    images: [
      { alt: "Mock exterior of a wooden cabin", caption: "South facade — replace" },
      { alt: "Mock living room with sofa", caption: "Living area — replace" },
      { alt: "Mock bedroom with window", caption: "Main bedroom — replace" },
      { alt: "Mock kitchen counter", caption: "Kitchen — replace" },
      { alt: "Mock deck with chairs", caption: "Deck — replace" },
      { alt: "Mock mountain landscape", caption: "View from plot — replace" },
    ],
  },
  contact: {
    title: "Contact",
    intro:
      "This form does not send mail yet — wire it to your inbox or a form service later. Details below are fake.",
    addressLabel: "Address (mock)",
    addressMock: "123 Ridge Road, Fictional Village, HR-00000",
    phoneLabel: "Phone (mock)",
    phoneMock: "+385 99 000 0000",
    emailLabel: "Email (mock)",
    emailMock: "hello@starspeak.example",
    formName: "Name",
    formEmail: "Email",
    formMessage: "Message",
    submit: "Send (mock)",
    formNote: "Submitting shows a demo alert only.",
    detailsHeading: "Details",
    messageHeading: "Message",
    mockToast: "Demo only — connect this form to email or a provider later.",
  },
};

const hr: Messages = {
  meta: {
    siteName: "Kuća za odmor Stars Peak",
    siteDescription:
      "Tihi planinski boravak — probna stranica. Kasnije zamijenite tekst i slike.",
  },
  nav: {
    home: "Početna",
    about: "O nama",
    gallery: "Galerija",
    contact: "Kontakt",
  },
  langSwitcher: { aria: "Jezik" },
  footer: {
    tagline: "Probna stranica za najam — zamijenite tekst i fotografije.",
    rights: "© Stars Peak — placeholder",
  },
  home: {
    heroBadge: "Velebit · Hrvatska (mock)",
    heroTitle: "Skriveno mjesto iznad krošnji",
    heroLead:
      "Probudite se uz miris bora i široko nebo. Ovaj mock opisuje izmišljenu kolibu kako biste vidjeli raspored i tipografiju prije pravog sadržaja.",
    ctaPrimary: "Galerija",
    ctaSecondary: "Kontakt",
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
    asideTitle: "Kućni red (primjer)",
    asideBody:
      "Tišina nakon 22 h, bez žurki, obuća u predsoblju. Zamijenite stvarnim pravilima i lokalnim propisima.",
  },
  gallery: {
    title: "Galerija",
    intro:
      "Probne slike s Picsuma. URL-ovi po seedu ostaju stabilni — zamijenite vlastitim u /public ili na CDN-u.",
    images: [
      { alt: "Mock vanjski izgled drvene kolibe", caption: "Južna strana — zamijeniti" },
      { alt: "Mock dnevni boravak s kaučem", caption: "Dnevni boravak — zamijeniti" },
      { alt: "Mock spavaća soba s prozorom", caption: "Glavna soba — zamijeniti" },
      { alt: "Mock kuhinja", caption: "Kuhinja — zamijeniti" },
      { alt: "Mock terasa sa stolicama", caption: "Terasa — zamijeniti" },
      { alt: "Mock planinski krajolik", caption: "Pogled s parcele — zamijeniti" },
    ],
  },
  contact: {
    title: "Kontakt",
    intro:
      "Formular još ne šalje e-poštu — kasnije povežite s inboxom ili servisom. Podaci su izmišljeni.",
    addressLabel: "Adresa (mock)",
    addressMock: "Primorska 123, Izmišljeno Selo, HR-00000",
    phoneLabel: "Telefon (mock)",
    phoneMock: "+385 99 000 0000",
    emailLabel: "E-pošta (mock)",
    emailMock: "hello@starspeak.example",
    formName: "Ime",
    formEmail: "E-pošta",
    formMessage: "Poruka",
    submit: "Pošalji (mock)",
    formNote: "Slanje prikazuje samo demo obavijest.",
    detailsHeading: "Podaci",
    messageHeading: "Poruka",
    mockToast: "Samo demo — kasnije povežite formular s e-poštom ili servisom.",
  },
};

const de: Messages = {
  meta: {
    siteName: "Ferienhaus Stars Peak",
    siteDescription:
      "Ruhiger Bergurlaub — Demoseite. Texte und Bilder später austauschen.",
  },
  nav: {
    home: "Start",
    about: "Über uns",
    gallery: "Galerie",
    contact: "Kontakt",
  },
  langSwitcher: { aria: "Sprache" },
  footer: {
    tagline: "Demo-Ferienhaus-Website — Inhalte und Fotos ersetzen.",
    rights: "© Stars Peak — Platzhalter",
  },
  home: {
    heroBadge: "Velebit · Kroatien (Mock)",
    heroTitle: "Ihr Rückzugsort über den Baumwipfeln",
    heroLead:
      "Wachen Sie auf mit Kiefernduft und weitem Himmel. Diese Demo-Startseite beschreibt eine fiktive Hütte, damit Sie Layout und Navigation testen können.",
    ctaPrimary: "Zur Galerie",
    ctaSecondary: "Kontakt",
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
    asideTitle: "Hausregeln (Beispiel)",
    asideBody:
      "Ruhe ab 22 Uhr, keine Partys, Schuhe im Hausflur. Durch Ihre echten Regeln ersetzen.",
  },
  gallery: {
    title: "Galerie",
    intro:
      "Platzhalterbilder von Picsum. Seed-URLs bleiben stabil — eigene Fotos in /public oder CDN einbinden.",
    images: [
      { alt: "Mock Außenansicht Holzhütte", caption: "Südseite — ersetzen" },
      { alt: "Mock Wohnzimmer mit Sofa", caption: "Wohnbereich — ersetzen" },
      { alt: "Mock Schlafzimmer mit Fenster", caption: "Hauptschlafzimmer — ersetzen" },
      { alt: "Mock Küche", caption: "Küche — ersetzen" },
      { alt: "Mock Terrasse mit Stühlen", caption: "Terrasse — ersetzen" },
      { alt: "Mock Berglandschaft", caption: "Blick vom Grundstück — ersetzen" },
    ],
  },
  contact: {
    title: "Kontakt",
    intro:
      "Dieses Formular sendet noch keine E-Mails — später anbinden. Angaben sind erfunden.",
    addressLabel: "Adresse (Mock)",
    addressMock: "Waldweg 123, Musterdorf, HR-00000",
    phoneLabel: "Telefon (Mock)",
    phoneMock: "+385 99 000 0000",
    emailLabel: "E-Mail (Mock)",
    emailMock: "hello@starspeak.example",
    formName: "Name",
    formEmail: "E-Mail",
    formMessage: "Nachricht",
    submit: "Senden (Mock)",
    formNote: "Absenden zeigt nur eine Demo-Meldung.",
    detailsHeading: "Kontaktdaten",
    messageHeading: "Nachricht",
    mockToast: "Nur Demo — Formular später mit E-Mail oder Dienst verbinden.",
  },
};

export const messages: Record<Locale, Messages> = { en, hr, de };

export function getMessages(locale: Locale): Messages {
  return messages[locale];
}
