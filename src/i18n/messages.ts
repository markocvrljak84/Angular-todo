import type { Locale } from "./config";
import fr from "./locales/fr.json";
import it from "./locales/it.json";

export type Messages = {
  meta: { siteName: string; siteDescription: string };
  header: { bookCta: string; menuOpen: string; menuClose: string };
  cta: {
    aboutLead: string;
    galleryLead: string;
    hikingLead: string;
    goodToKnowLead: string;
    contactLead: string;
  };
  nav: {
    home: string;
    accommodation: string;
    experiences: string;
    about: string;
    book: string;
    gallery: string;
    hiking: string;
    nearby: string;
    guides: string;
    goodToKnow: string;
    contact: string;
  };
  langSwitcher: { aria: string };
  footer: {
    tagline: string;
    locationLine: string;
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
    nearbyTitle: string;
    nearbyLead: string;
    itineraryImageAlts: string[];
    itineraryDays: { label: string; headline: string; body: string }[];
    /** YouTube block (#film) */
    statsLine: string;
    heroImageAlt: string;
    ctaPrimary: string;
    ctaSecondary: string;
    amenities: { label: string }[];
    amenitiesLabel: string;
    welcomeTitle: string;
    welcomeBody: string;
    facilitiesTitle: string;
  };
  about: {
    title: string;
    lead: string;
    p1: string;
    hostsNote: string;
    p2: string;
    bookingLine: string;
    bookingLinkLabel: string;
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
    lead: string;
    introPrefix: string;
    introBookingLink: string;
    nameLabel: string;
    addressLabel: string;
    addressMock: string;
    phoneLabel: string;
    bookingLabel: string;
    emailLabel: string;
    whatsappLabel: string;
    detailsHeading: string;
    mapHeading: string;
    mapIframeTitle: string;
    mapOpenGoogle: string;
  };
  contactForm: {
    title: string;
    intro: string;
    firstNameLabel: string;
    lastNameLabel: string;
    emailLabel: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitLabel: string;
    successMessage: string;
  };
  forms: {
    gdprConsent: string;
    gdprNotice: string;
    gdprRequired: string;
    requiredField: string;
    invalidName: string;
    invalidEmail: string;
    invalidMessage: string;
    humanConfirmLabel: string;
    humanCheckFailed: string;
    submitting: string;
    submitError: string;
    downloadStarted: string;
  };
  a11y: { scrollToTop: string };
};

const en: Messages = {
  meta: {
    siteName: "Velebit mountain chalet Stars Peak – Croatia",
    siteDescription:
      "Wake up beneath Bačić Kuk, swim the Adriatic before lunch, stargaze on Velebit. Stars Peak — mountain experience in Bačić Duliba, Croatia.",
  },
  header: {
    bookCta: "Check availability on Booking",
    menuOpen: "Open menu",
    menuClose: "Close menu",
  },
  cta: {
    aboutLead: "Ready for summit, sea and stars? Check dates and book your stay.",
    galleryLead: "The feeling is even better in person. Check dates and book your mountain stay.",
    hikingLead: "Use Stars Peak as your base for Velebit trails — book your stay.",
    goodToKnowLead: "Reserve your stay on Booking.com.",
    contactLead: "Prefer to book online? Availability and rates are always up to date.",
  },
  nav: {
    home: "Home",
    accommodation: "Accommodation",
    experiences: "Experiences",
    about: "About",
    book: "Book",
    gallery: "Gallery",
    hiking: "Hiking",
    nearby: "Near places",
    guides: "Blog",
    goodToKnow: "Good to know",
    contact: "Contact",
  },
  langSwitcher: { aria: "Language" },
  footer: {
    tagline: "Summit · Swim · Stargaze on Velebit",
    locationLine: "Velebit mountain chalet Stars Peak",
    rights: "© Velebit mountain chalet Stars Peak",
    exploreTitle: "Explore",
    contactTitle: "Contact us",
  },
  home: {
    heroBadge: "Summit · Swim · Stargaze",
    heroTitle: "Your hideaway above the treeline",
    heroLead:
      "Wake up to pine-scented air and wide skies. This mock homepage describes a fictional cabin so you can preview layout, typography, and navigation before adding your real story.",
    heroScriptTitle: "Velebit mountain chalet Stars Peak",
    heroCenterLine:
      "Wake up beneath Bačić Kuk. Swim in the Adriatic before lunch.",
    nearbyTitle: "Near places",
    nearbyLead:
      "From Stars Peak on Velebit you can easily reach beautiful destinations of the wider Velebit area — national parks, bays and Adriatic islands. Here are a few favourite day trips nearby.",
    itineraryImageAlts: [
      "Paklenica National Park — cliffs and pine forest",
      "Pag island — stone shore and Adriatic view",
      "Zavratnica cove — steep cliffs above calm water",
      "Premužić trail — drystone path along the ridge",
      "Bačić Kuk — summit above Bačić Duliba",
      "Karlobag — Adriatic waterfront on the Velebit coast",
    ],
    itineraryDays: [
      {
        label: "NP Paklenica",
        headline: "CANYONS & TRAILS AT THE FOOT OF VELEBIT",
        body:
          "A UNESCO-listed national park with Velika and Mala Paklenica — dramatic canyons cut into the southern slopes of Velebit. Famous among hikers and climbers, with more than 150 km of marked trails.",
      },
      {
        label: "Otok Pag",
        headline: "ISLAND DAY — SEA, WIND & LUNAR STONE",
        body:
          "One of Croatia’s sunniest islands, known for stone landscapes, beaches, Pag sheep and cheese. Linked to the mainland by bridge — perfect for a day by the Adriatic.",
      },
      {
        label: "Uvala Zavratnica",
        headline: "A FJORD-LIKE COVE ON THE KVARNER COAST",
        body:
          "A protected landscape and bay on the northern Adriatic, often called Croatia’s fjord — steep cliffs, calm turquoise water and boat trips from Jablanac or Senj.",
      },
      {
        label: "Premužić trail",
        headline: "ANTE PREMUŽIĆ’S STONE PATH ALONG THE RIDGE",
        body:
          "A hiking route through Velebit Nature Park, built with dry stone walls in the early 20th century — among Croatia’s finest walks, with views of the sea and Kvarner islands.",
      },
      {
        label: "Bačić Kuk",
        headline: "SUMMIT ABOVE THE CHALET",
        body:
          "The iconic peak rising directly above Stars Peak — a classic Velebit ascent with wide views over Bačić Duliba, the ridge and the Adriatic on clear days.",
      },
      {
        label: "Karlobag",
        headline: "ADRIATIC TOWN HALF AN HOUR AWAY",
        body:
          "The nearest seaside town on the Velebit coast — pebble beaches, waterfront cafés and a swim in the Adriatic before lunch, then back to the mountain by afternoon.",
      },
    ],
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
    facilitiesTitle: "Facilities & services",
  },
  about: {
    title: "About this place",
    lead:
      "High on Velebit, Marko and Ljiljana turned a wooden chalet into Stars Peak — an unusual, deeply personal retreat with views of Bačić Kuk and the Adriatic half an hour away.",
    p1:
      "What began as a decade-long dream became three years of hands-on work: stripping back clutter, opening the space to light and wood, and shaping a slower rhythm of life on the mountain.",
    hostsNote:
      "We are Marko and Ljiljana — we built and run Stars Peak ourselves and are here for your questions before and during your stay.",
    p2:
      "The chalet sits in Velebit Nature Park, near Karlobag and Baške Oštarije — with peaks, Paklenica, Zavratnica and Pag within easy reach. Mountain mornings and Adriatic afternoons, in one place.",
    bookingLine: "The house can be booked at the following link:",
    bookingLinkLabel: "Booking.com — Velebit Mountain Chalet Stars Peak",
    sideImageAlt: "Marko and Ljiljana, hosts of Stars Peak on Velebit",
  },
  gallery: {
    title: "Gallery",
    intro: "Moments from the mountain — trails, fireside evenings, sea days and night skies. More emotion shots coming soon.",
    lightboxClose: "Close gallery",
    lightboxPrev: "Previous image",
    lightboxNext: "Next image",
    lightboxAria: "Enlarged photo gallery",
    lightboxOpenThumb: "Open larger view",
    images: Array.from({ length: 25 }, (_, i) => ({
      alt: `Velebit mountain chalet Stars Peak — gallery photo ${i + 1}`,
      caption: `Gallery — ${i + 1}`,
    })),
  },
  contact: {
    title: "Contact",
    lead:
      "We are happy to help with availability, directions and planning your stay on Velebit. Reach us by email, phone or WhatsApp — or book directly online.",
    introPrefix: "Reach us by phone or email, or visit link for ",
    introBookingLink: "booking",
    nameLabel: "Name",
    addressLabel: "Address",
    addressMock: "Došen Dabar 1, Karlobag, Croatia",
    phoneLabel: "Direct dial",
    bookingLabel: "Booking",
    emailLabel: "Email",
    whatsappLabel: "Contact us via WhatsApp",
    detailsHeading: "Reservations & enquiries",
    mapHeading: "Map",
    mapIframeTitle: "Google Map — Došen Dabar 1, Croatia",
    mapOpenGoogle: "Open in Google Maps to find directions",
  },
  contactForm: {
    title: "Send us a message",
    intro: "Tell us about your dates, group size or any questions — we usually reply within one day.",
    firstNameLabel: "First name",
    lastNameLabel: "Last name",
    emailLabel: "Email",
    messageLabel: "Message",
    messagePlaceholder: "How can we help with your stay on Velebit?",
    submitLabel: "Send message",
    successMessage: "Thank you — your message has been sent. We will get back to you soon.",
  },
  forms: {
    gdprConsent:
      "I agree that Stars Peak may process my personal data to respond to this request, in line with GDPR.",
    gdprNotice:
      "Your data is used only to handle this request. You may ask us to delete it at any time by email.",
    gdprRequired: "Please confirm consent to process your personal data.",
    requiredField: "This field is required.",
    invalidName: "Please enter a valid name (letters only, 2–80 characters).",
    invalidEmail: "Please enter a valid email address.",
    invalidMessage: "Please enter a message of at least 10 characters.",
    humanConfirmLabel: "I confirm I am a human and not an automated bot.",
    humanCheckFailed: "Human verification failed. Please try again.",
    submitting: "Sending…",
    submitError: "Something went wrong — please try again or email us directly.",
    downloadStarted: "Your download should start automatically.",
  },
  a11y: { scrollToTop: "Back to top" },
};

const hr: Messages = {
  meta: {
    siteName: "Velebit mountain chalet Stars Peak – Hrvatska",
    siteDescription:
      "Probudite se ispod Bačić kuka, kupajte se u Jadranu prije ručka, promatrajte zvijezde na Velebitu. Stars Peak — iskustvo planine u Bačić Dulibi, Hrvatska.",
  },
  header: {
    bookCta: "Provjeri dostupnost na Booking",
    menuOpen: "Otvori izbornik",
    menuClose: "Zatvori izbornik",
  },
  cta: {
    aboutLead: "Posjetite Velebitske vrhove, Jadransko more i čisto zvijezdano nebo? Provjerite datume i rezervirajte boravak.",
    galleryLead: "Velebit je jedinstvena planina u Hrvatskoj. Provjerite datume i rezervirajte boravak u planinama.",
    hikingLead: "Krenite u planinarenje s Stars Peaka kao polazištem — rezervirajte smještaj.",
    goodToKnowLead: "Rezervirajte boravak na Booking.com.",
    contactLead: "Želite rezervirati online? Dostupnost i cijene su uvijek ažurne.",
  },
  nav: {
    home: "Početna",
    accommodation: "Smještaj",
    experiences: "Doživljaji",
    about: "O nama",
    book: "Rezerviraj",
    gallery: "Galerija",
    hiking: "Planinarenje",
    nearby: "U blizini",
    guides: "Blog",
    goodToKnow: "Dobro za znati",
    contact: "Kontakt",
  },
  langSwitcher: { aria: "Jezik" },
  footer: {
    tagline: "Vrh · More · Zvijezde na Velebitu",
    locationLine: "Velebit mountain chalet Stars Peak",
    rights: "© Velebit mountain chalet Stars Peak",
    exploreTitle: "Poveznice",
    contactTitle: "Kontakt",
  },
  home: {
    heroBadge: "Vrh · More · Zvijezde",
    heroTitle: "Skriveno mjesto iznad krošnji",
    heroLead:
      "Probudite se uz miris bora i široko nebo. Ovaj mock opisuje izmišljenu kolibu kako biste vidjeli raspored i tipografiju prije pravog sadržaja.",
    heroScriptTitle: "Velebit mountain chalet Stars Peak",
    heroCenterLine:
      "Probudite se ispod Bačić kuka. Prije ručka kupajte se u Jadranu.",
    heroCtaPill: "Od 129 € / noć · mock cijena",
    heroSlideAlts: [
      "Kuća za odmor — fotografija 3",
      "Kuća za odmor — fotografija 1",
      "Kuća za odmor — fotografija 2",
      "Kuća za odmor — fotografija 4",
    ],
    heroCarouselPrev: "Prethodna slika",
    heroCarouselNext: "Sljedeća slika",
    nearbyTitle: "U blizini",
    nearbyLead:
      "Sa Stars Peaka na Velebitu lako stižete do prekrasnih odredišta šireg velebitskog područja — nacionalnih parkova, uvala i jadranskih otoka. Evo nekoliko omiljenih izleta u blizini.",
    itineraryImageAlts: [
      "NP Paklenica — litice i borova šuma",
      "Otok Pag — kamena obala i pogled na more",
      "Uvala Zavratnica — litice iznad mirne vode",
      "Premužićeva staza — suhozidni put duž grebena",
      "Bačić kuk — vrh iznad Bačić Dulibe",
      "Karlobag — riva i Jadran na velebitskoj obali",
    ],
    itineraryDays: [
      {
        label: "NP Paklenica",
        headline: "KANJONI I STAZE PODNOŽJEM VELEBITA",
        body:
          "UNESCO-ov zaštićeni nacionalni park s Velikom i Malom Paklenicom — uskim kanjonima urezanim u južne padine Velebita. Omiljeno odredište planinara i penjača, s više od 150 km označenih staza.",
      },
      {
        label: "Otok Pag",
        headline: "IZLET NA OTOK — MORE, VJETAR I „MJESEČEV“ KAMEN",
        body:
          "Jedan od najsunčanijih hrvatskih otoka, poznat po kamenitim krajolicima, plažama, paškoj ovci i siru. Mostom ste povezani s kopnom — idealno za jednodnevni izlet do mora.",
      },
      {
        label: "Uvala Zavratnica",
        headline: "DRAMATIČNE LITICE I TIRKIZNA VODA",
        body:
          "Zaštićeni krajolik i uvala na sjevernom Jadranu, često nazivana „fjordom“ Hrvatske — strme litice, mirna tirkizna voda i izleti brodom iz Jablanaca ili Senja.",
      },
      {
        label: "Premužićeva staza",
        headline: "KAMENI PUT ANTUNA PREMUŽIĆA DUŽ GREBENA",
        body:
          "Pješačka staza kroz Park prirode Velebit, izgrađena suhozidom početkom 20. stoljeća — jedan od najljepših hodova u Hrvatskoj s pogledom na more i Kvarnerske otoke.",
      },
      {
        label: "Bačić kuk",
        headline: "VRH IZNAD KUĆE",
        body:
          "Ikonični vrh koji se diže iznad Stars Peaka — klasičan uspon Velebitom s širokim pogledom na Bačić Dulibu, greben i Jadran u vedrim danima.",
      },
      {
        label: "Karlobag",
        headline: "PRIMORSKI GRAD POLA SATA VOŽNJE",
        body:
          "Najbliži grad na moru uz velebitsku obalu — šljunčane plaže, kafići na rivi i kupanje u Jadranu prije ručka, a popodne opet na planini.",
      },
    ],
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
    facilitiesTitle: "Sadržaji objekta",
  },
  about: {
    title: "O ovom mjestu",
    lead:
      "Visoko na Velebitu, Marko i Ljiljana pretvorili su drvenu kuću u Stars Peak — neobično, nesvakidašnje utočište s pogledom na Bačić kuk.",
    p1:
      "Ono što je počelo kao san od deset godina postalo je tri godine rada vlastitim rukama: manje suvišnih detalja, više svjetla i drva, sporiji ritam života na planini.",
    hostsNote:
      "Mi smo Marko i Ljiljana — Stars Peak smo sami izgradili i vodimo; stojimo vam na raspolaganju prije i tijekom boravka.",
    p2:
      "Kuća leži u Parku prirode Velebit, blizu Karlobaga i Baških Oštarija — s vrhovima, Paklenicom, Zavratnicom i Pagom na dohvat ruke. Planinsko jutro i jadransko popodne, na jednom mjestu.",
    bookingLine: "Kuću možete rezervirati na sljedećem linku:",
    bookingLinkLabel: "Booking.com — Velebit Mountain Chalet Stars Peak",
    sideImageAlt: "Marko i Ljiljana, domaćini Stars Peaka na Velebitu",
  },
  gallery: {
    title: "Galerija",
    intro: "Trenuci s planine — planinarske staze, večeri uz vatru, dani na moru i noćno nebo.",
    lightboxClose: "Zatvori galeriju",
    lightboxPrev: "Prethodna slika",
    lightboxNext: "Sljedeća slika",
    lightboxAria: "Povećani prikaz galerije",
    lightboxOpenThumb: "Otvori veći prikaz",
    images: Array.from({ length: 25 }, (_, i) => ({
      alt: `Velebit mountain chalet Stars Peak — galerija, fotografija ${i + 1}`,
      caption: `Galerija — ${i + 1}`,
    })),
  },
  contact: {
    title: "Kontakt",
    lead:
      "Rado ćemo vam pomoći oko dostupnosti, uputa za dolazak i planiranja boravka na Velebitu. Javite nam se e-poštom, telefonom ili WhatsAppom — ili rezervirajte izravno online.",
    introPrefix: "Javite nam se telefonom ili e-poštom ili posjetite link za ",
    introBookingLink: "rezervaciju",
    nameLabel: "Naziv",
    addressLabel: "Adresa",
    addressMock: "Došen Dabar 1, Karlobag, Hrvatska",
    phoneLabel: "Telefon",
    bookingLabel: "Rezervacija",
    emailLabel: "E-pošta",
    whatsappLabel: "Kontaktirajte nas putem WhatsAppa",
    detailsHeading: "Rezervacije i upiti",
    mapHeading: "Karta",
    mapIframeTitle: "Google karta — Došen Dabar 1, Hrvatska",
    mapOpenGoogle: "Otvori u Google Kartama za upute do lokacije",
  },
  contactForm: {
    title: "Pošaljite nam poruku",
    intro: "Recite nam datume, broj gostiju ili pitanja — obično odgovaramo u roku od jednog dana.",
    firstNameLabel: "Ime",
    lastNameLabel: "Prezime",
    emailLabel: "E-pošta",
    messageLabel: "Poruka",
    messagePlaceholder: "Kako vam možemo pomoći oko boravka na Velebitu?",
    submitLabel: "Pošalji poruku",
    successMessage: "Hvala — vaša poruka je poslana. Javit ćemo vam se uskoro.",
  },
  forms: {
    gdprConsent:
      "Slažem se da Stars Peak smije obrađivati moje osobne podatke radi odgovora na upit, u skladu s GDPR-om.",
    gdprNotice:
      "Podatke koristimo samo za obradu ovog upita. Možete zatražiti brisanje u bilo kojem trenutku e-poštom.",
    gdprRequired: "Molimo potvrdite privolu za obradu osobnih podataka.",
    requiredField: "Ovo polje je obavezno.",
    invalidName: "Unesite ispravno ime (samo slova, 2–80 znakova).",
    invalidEmail: "Unesite ispravnu adresu e-pošte.",
    invalidMessage: "Poruka mora imati najmanje 10 znakova.",
    humanConfirmLabel: "Potvrđujem da sam čovjek, a ne automatizirani bot.",
    humanCheckFailed: "Provjera nije uspjela. Pokušajte ponovno.",
    submitting: "Slanje…",
    submitError: "Nešto je pošlo po krivu — pokušajte ponovno ili nam pišite izravno.",
    downloadStarted: "Preuzimanje bi trebalo početi automatski.",
  },
  a11y: { scrollToTop: "Natrag na vrh" },
};

const de: Messages = {
  meta: {
    siteName: "Velebit mountain chalet Stars Peak – Kroatien",
    siteDescription:
      "Erwachen Sie unter Bačić Kuk, baden Sie mittags in der Adria, beobachten Sie Sterne am Velebit. Stars Peak — Bergerlebnis in Bačić Duliba, Kroatien.",
  },
  header: {
    bookCta: "Verfügbarkeit auf Booking prüfen",
    menuOpen: "Menü öffnen",
    menuClose: "Menü schließen",
  },
  cta: {
    aboutLead: "Bereit für Gipfel, Meer und Sterne? Termine prüfen und buchen.",
    galleryLead: "Das Erlebnis ist vor Ort noch stärker. Termine prüfen und Bergurlaub buchen.",
    hikingLead: "Stars Peak als Ausgangspunkt für Wanderungen — jetzt buchen.",
    goodToKnowLead: "Reservieren Sie Ihren Aufenthalt auf Booking.com.",
    contactLead: "Lieber online buchen? Verfügbarkeit und Preise sind stets aktuell.",
  },
  nav: {
    home: "Start",
    accommodation: "Unterkunft",
    experiences: "Erlebnisse",
    about: "Über uns",
    book: "Buchen",
    gallery: "Galerie",
    hiking: "Wandern",
    nearby: "In der Nähe",
    guides: "Blog",
    goodToKnow: "Gut zu wissen",
    contact: "Kontakt",
  },
  langSwitcher: { aria: "Sprache" },
  footer: {
    tagline: "Gipfel · Meer · Sterne am Velebit",
    locationLine: "Velebit mountain chalet Stars Peak",
    rights: "© Velebit mountain chalet Stars Peak",
    exploreTitle: "Navigation",
    contactTitle: "Kontakt",
  },
  home: {
    heroBadge: "Gipfel · Meer · Sterne",
    heroTitle: "Ihr Rückzugsort über den Baumwipfeln",
    heroLead:
      "Wachen Sie auf mit Kiefernduft und weitem Himmel. Diese Demo-Startseite beschreibt eine fiktive Hütte, damit Sie Layout und Navigation testen können.",
    heroScriptTitle: "Velebit mountain chalet Stars Peak",
    heroCenterLine:
      "Erwachen Sie unter Bačić Kuk. Baden Sie mittags in der Adria.",
    heroCtaPill: "Ab 129 € / Nacht · Platzhalterpreis",
    heroSlideAlts: [
      "Ferienhaus — Foto 3",
      "Ferienhaus — Foto 1",
      "Ferienhaus — Foto 2",
      "Ferienhaus — Foto 4",
    ],
    heroCarouselPrev: "Vorheriges Bild",
    heroCarouselNext: "Nächstes Bild",
    nearbyTitle: "In der Nähe",
    nearbyLead:
      "Von Ihrer Bergbasis am Velebit erreichen Sie leicht die schönsten Ziele Norddalmatiens — Nationalparks, Buchten und Adriainseln. Hier einige beliebte Tagesausflüge in der Nähe.",
    itineraryImageAlts: [
      "Nationalpark Paklenica — Felswände und Kiefernwald",
      "Insel Pag — Steinküste und Adria-Panorama",
      "Bucht Zavratnica — Steilwände über ruhigem Wasser",
      "Premužić-Weg — Trockenmauerweg am Grat",
      "Bačić Kuk — Gipfel über Bačić Duliba",
      "Karlobag — Adria-Promenade an der Velebit-Küste",
    ],
    itineraryDays: [
      {
        label: "NP Paklenica",
        headline: "SCHLUCHTEN UND WEGE AM FUß DES VELEBIT",
        body:
          "UNESCO-Nationalpark mit Velika und Mala Paklenica — dramatische Schluchten im südlichen Velebit. Beliebt bei Wanderern und Kletterern, mit über 150 km markierter Wege.",
      },
      {
        label: "Insel Pag",
        headline: "INSELTAG — MEER, WIND UND „MOND“-STEIN",
        body:
          "Eine der sonnenreichsten Inseln Kroatiens, bekannt für Steinlandschaften, Strände, Pag-Schafe und Käse. Per Brücke vom Festland — ideal für einen Tag am Meer.",
      },
      {
        label: "Bucht Zavratnica",
        headline: "GESCHÜTZTE BUCHT MIT FJORDARTIGEM CHARAKTER",
        body:
          "Geschützte Landschaft und Bucht an der nördlichen Adria, oft Kroatiens Fjord genannt — steile Klippen, türkisfarbenes Wasser und Bootsausflüge ab Jablanac oder Senj.",
      },
      {
        label: "Premužić-Weg",
        headline: "ANTE PREMUŽIĆS STEINWEG AM KAMM",
        body:
          "Wanderroute durch den Naturpark Velebit, Anfang des 20. Jahrhunderts als Trockenmauerweg angelegt — eine der schönsten Touren Kroatiens mit Blick auf Meer und Kvarner-Inseln.",
      },
      {
        label: "Bačić Kuk",
        headline: "GIPFEL ÜBER DER HÜTTE",
        body:
          "Der markante Gipfel direkt über Stars Peak — ein klassischer Velebit-Aufstieg mit weitem Blick über Bačić Duliba, den Kamm und an klaren Tagen die Adria.",
      },
      {
        label: "Karlobag",
        headline: "KÜSTENORT IN EINER HALBEN STUNDE",
        body:
          "Die nächste Stadt am Meer an der Velebit-Küste — Kiesstrände, Cafés an der Promenade und ein Bad in der Adria vor dem Mittagessen, am Nachmittag zurück in den Bergen.",
      },
    ],
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
    facilitiesTitle: "Ausstattung & Service",
  },
  about: {
    title: "Über dieses Haus",
    lead:
      "Hoch am Velebit haben Marko und Ljiljana eine Holzhütte in Stars Peak verwandelt — ein ungewöhnliches, persönliches Refugium mit Blick auf Bačić Kuk und Adria in einer halben Stunde.",
    p1:
      "Aus einem jahrzehntelangen Traum wurden drei Jahre Eigenarbeit: weniger Ballast, mehr Licht und Holz, ein langsamerer Rhythmus am Berg.",
    hostsNote:
      "Wir sind Marko und Ljiljana — wir haben Stars Peak selbst gebaut und führen es; bei Fragen vor und während Ihres Aufenthalts sind wir da.",
    p2:
      "Das Haus liegt im Naturpark Velebit, nahe Karlobag und Baške Oštarije — Gipfel, Paklenica, Zavratnica und Pag in Reichweite.",
    bookingLine: "Das Haus kann über den folgenden Link gebucht werden:",
    bookingLinkLabel: "Booking.com — Velebit Mountain Chalet Stars Peak",
    sideImageAlt: "Marko und Ljiljana, Gastgeber von Stars Peak am Velebit",
  },
  gallery: {
    title: "Galerie",
    intro: "Momente am Berg — Wege, Abende am Feuer, Meerestage und Nachthimmel. Mehr emotionale Fotos folgen.",
    lightboxClose: "Galerie schließen",
    lightboxPrev: "Vorheriges Bild",
    lightboxNext: "Nächstes Bild",
    lightboxAria: "Vergrößerte Galerie",
    lightboxOpenThumb: "Größere Ansicht öffnen",
    images: Array.from({ length: 25 }, (_, i) => ({
      alt: `Velebit mountain chalet Stars Peak — Galeriefoto ${i + 1}`,
      caption: `Galerie — ${i + 1}`,
    })),
  },
  contact: {
    title: "Kontakt",
    lead:
      "Wir helfen Ihnen gern bei Verfügbarkeit, Anfahrt und Planung Ihres Aufenthalts am Velebit. Erreichen Sie uns per E-Mail, Telefon oder WhatsApp — oder buchen Sie direkt online.",
    introPrefix: "Erreichen Sie uns telefonisch oder per E-Mail, oder besuchen Sie den Link für ",
    introBookingLink: "Buchung",
    nameLabel: "Name",
    addressLabel: "Adresse",
    addressMock: "Došen Dabar 1, Karlobag, Kroatien",
    phoneLabel: "Direktwahl",
    bookingLabel: "Buchung",
    emailLabel: "E-Mail",
    whatsappLabel: "Kontakt per WhatsApp",
    detailsHeading: "Reservierungen & Anfragen",
    mapHeading: "Karte",
    mapIframeTitle: "Google Karte — Došen Dabar 1, Kroatien",
    mapOpenGoogle: "In Google Maps öffnen, um die Route zu finden",
  },
  contactForm: {
    title: "Nachricht senden",
    intro: "Nennen Sie uns Termine, Gästezahl oder Fragen — wir antworten in der Regel innerhalb eines Tages.",
    firstNameLabel: "Vorname",
    lastNameLabel: "Nachname",
    emailLabel: "E-Mail",
    messageLabel: "Nachricht",
    messagePlaceholder: "Wobei können wir Ihren Aufenthalt am Velebit unterstützen?",
    submitLabel: "Nachricht senden",
    successMessage: "Danke — Ihre Nachricht wurde gesendet. Wir melden uns bald.",
  },
  forms: {
    gdprConsent:
      "Ich stimme zu, dass Stars Peak meine personenbezogenen Daten zur Beantwortung dieser Anfrage gemäß DSGVO verarbeitet.",
    gdprNotice:
      "Ihre Daten werden nur für diese Anfrage verwendet. Sie können jederzeit per E-Mail die Löschung verlangen.",
    gdprRequired: "Bitte bestätigen Sie die Einwilligung zur Datenverarbeitung.",
    requiredField: "Dieses Feld ist erforderlich.",
    invalidName: "Bitte geben Sie einen gültigen Namen ein (nur Buchstaben, 2–80 Zeichen).",
    invalidEmail: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
    invalidMessage: "Die Nachricht muss mindestens 10 Zeichen lang sein.",
    humanConfirmLabel: "Ich bestätige, dass ich ein Mensch und kein Bot bin.",
    humanCheckFailed: "Die Überprüfung ist fehlgeschlagen. Bitte erneut versuchen.",
    submitting: "Wird gesendet…",
    submitError: "Etwas ist schiefgelaufen — bitte erneut versuchen oder uns direkt mailen.",
    downloadStarted: "Ihr Download sollte automatisch starten.",
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
