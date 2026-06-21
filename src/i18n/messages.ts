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
        experience: string;
        about: string;
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
        introPrefix: string;
        introBookingLink: string;
        nameLabel: string;
        addressLabel: string;
        addressMock: string;
        phoneLabel: string;
        bookingLabel: string;
        emailLabel: string;
        detailsHeading: string;
        mapHeading: string;
        mapIframeTitle: string;
        mapOpenGoogle: string;
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
        experience: "Your day",
        about: "About",
        gallery: "Gallery",
        hiking: "Hiking",
        nearby: "Near places",
        guides: "Guides",
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
            "Stars Peak sits in Bačić Duliba with Bačić Kuk rising above the valley — a rare place where Velebit wilderness meets the Adriatic half an hour away.",
        p1:
            "Mornings start with coffee and mountain views. By midday you can stand on a summit; by afternoon swim in Karlobag. Evenings belong to the fire pit, grill and a sky full of stars.",
        hostsNote:
            "Hello! We are Marko and Ljiljana — your hosts at this holiday home, and we are happy to help with any questions you may have before or during your stay.",
        p2:
            "The property is located within the Velebit Nature Park, close to Karlobag and Baške Oštarije. Nearby are numerous Velebit peaks, the Northern Velebit National Park and Paklenica National Park, as well as the stunning Zavratnica Bay and the island of Pag. This combination of mountain and coastal surroundings makes the location ideal for exploring the diversity of Croatia’s natural beauty in one place.",
        bookingLine: "The house can be booked at the following link:",
        bookingLinkLabel: "Booking.com — Velebit Mountain Chalet Stars Peak",
        sideImageAlt: "Velebit mountain chalet Stars Peak — holiday home",
    },
    gallery: {
        title: "Gallery",
        intro: "Moments from the mountain — trails, fireside evenings, sea days and night skies. More emotion shots coming soon.",
        lightboxClose: "Close gallery",
        lightboxPrev: "Previous image",
        lightboxNext: "Next image",
        lightboxAria: "Enlarged photo gallery",
        lightboxOpenThumb: "Open larger view",
        images: Array.from({ length: 34 }, (_, i) => ({
            alt: `Velebit mountain chalet Stars Peak — gallery photo ${i + 1}`,
            caption: `Gallery — ${i + 1}`,
        })),
    },
    contact: {
        title: "Contact",
        introPrefix: "Reach us by phone or email, or visit link for ",
        introBookingLink: "booking",
        nameLabel: "Name",
        addressLabel: "Address",
        addressMock: "Došen Dabar 1, Karlobag, Croatia",
        phoneLabel: "Phone",
        bookingLabel: "Booking",
        emailLabel: "Email",
        detailsHeading: "Details",
        mapHeading: "Map",
        mapIframeTitle: "Google Map — Došen Dabar 1, Croatia",
        mapOpenGoogle: "Open in Google Maps to find directions",
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
        aboutLead: "Spremni za vrh, more i zvijezde? Provjerite datume i rezervirajte boravak.",
        galleryLead: "Osjećaj je još jači uživo. Provjerite datume i rezervirajte boravak u planinama.",
        hikingLead: "Krenite u planinarenje s Stars Peaka kao polazištem — rezervirajte smještaj.",
        goodToKnowLead: "Rezervirajte boravak na Booking.com.",
        contactLead: "Želite rezervirati online? Dostupnost i cijene su uvijek ažurne.",
    },
    nav: {
        home: "Početna",
        experience: "Jedan dan",
        about: "O nama",
        gallery: "Galerija",
        hiking: "Planinarenje",
        nearby: "U blizini",
        guides: "Vodiči",
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
            "Stars Peak leži u Bačić Dulibi s Bačić kukom iznad doline — rijetko mjesto gdje se velebitska divljina i Jadran na pola sata vožnje susreću.",
        p1:
            "Jutro počinje kavom i pogledom na planinu. Do podneva ste na vrhu; do popodneva u moru u Karlobagu. Večeri pripadaju vatri, roštilju i nebu punom zvijezda.",
        hostsNote:
            "Pozdrav! Mi smo Marko i Ljiljana — vaši domaćini te vam stojimo na raspolaganju za sva pitanja prije i tijekom boravka.",
        p2:
            "Objekt se nalazi unutar Parka prirode Velebit, u blizini Karlobaga i Baških Oštarija. U neposrednoj okolici nalaze se brojni velebitski vrhovi, Nacionalni park Sjeverni Velebit i Nacionalni park Paklenica, kao i slikoviti zaljev Zavratnica te otok Pag. Kombinacija planinskog i primorskog ambijenta ovu lokaciju čini idealnom za istraživanje raznolikosti hrvatske prirode na jednom mjestu.",
        bookingLine: "Kuću možete rezervirati na sljedećem linku:",
        bookingLinkLabel: "Booking.com — Velebit Mountain Chalet Stars Peak",
        sideImageAlt: "Velebit mountain chalet Stars Peak — smještaj",
    },
    gallery: {
        title: "Galerija",
        intro: "Trenuci s planine — staze, večeri uz vatru, dani na moru i noćno nebo. Više emocionalnih fotografija uskoro.",
        lightboxClose: "Zatvori galeriju",
        lightboxPrev: "Prethodna slika",
        lightboxNext: "Sljedeća slika",
        lightboxAria: "Povećani prikaz galerije",
        lightboxOpenThumb: "Otvori veći prikaz",
        images: Array.from({ length: 34 }, (_, i) => ({
            alt: `Velebit mountain chalet Stars Peak — galerija, fotografija ${i + 1}`,
            caption: `Galerija — ${i + 1}`,
        })),
    },
    contact: {
        title: "Kontakt",
        introPrefix: "Javite nam se telefonom ili e-poštom ili posjetite link za ",
        introBookingLink: "rezervaciju",
        nameLabel: "Naziv",
        addressLabel: "Adresa",
        addressMock: "Došen Dabar 1, Karlobag, Hrvatska",
        phoneLabel: "Telefon",
        bookingLabel: "Rezervacija",
        emailLabel: "E-pošta",
        detailsHeading: "Podaci",
        mapHeading: "Karta",
        mapIframeTitle: "Google karta — Došen Dabar 1, Hrvatska",
        mapOpenGoogle: "Otvori u Google Kartama za upute do lokacije",
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
        experience: "Ihr Tag",
        about: "Über uns",
        gallery: "Galerie",
        hiking: "Wandern",
        nearby: "In der Nähe",
        guides: "Guides",
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
            "Stars Peak liegt in Bačić Duliba mit Bačić Kuk über dem Tal — ein seltener Ort, an dem Velebit-Wildnis und Adria in einer halben Stunde zusammentreffen.",
        p1:
            "Der Morgen beginnt mit Kaffee und Bergblick. Mittags stehen Sie auf einem Gipfel; nachmittags baden Sie in Karlobag. Abende gehören Feuerstelle, Grill und Sternenhimmel.",
        hostsNote:
            "Hallo! Wir sind Marko und Ljiljana — Ihre Gastgeber in diesem Ferienhaus und gerne für alle Fragen vor und während Ihres Aufenthalts da.",
        p2:
            "Das Haus liegt im Naturpark Velebit, nahe Karlobag und Baške Oštarije. In der Nähe: zahlreiche Velebit-Gipfel, der Nationalpark Nordlicher Velebit und Paklenica, die Bucht Zavratnica und die Insel Pag. ideal, um Kroatiens Naturvielfalt an einem Ort zu entdecken.",
        bookingLine: "Das Haus kann über den folgenden Link gebucht werden:",
        bookingLinkLabel: "Booking.com — Velebit Mountain Chalet Stars Peak",
        sideImageAlt: "Velebit mountain chalet Stars Peak — Ferienhaus",
    },
    gallery: {
        title: "Galerie",
        intro: "Momente am Berg — Wege, Abende am Feuer, Meerestage und Nachthimmel. Mehr emotionale Fotos folgen.",
        lightboxClose: "Galerie schließen",
        lightboxPrev: "Vorheriges Bild",
        lightboxNext: "Nächstes Bild",
        lightboxAria: "Vergrößerte Galerie",
        lightboxOpenThumb: "Größere Ansicht öffnen",
        images: Array.from({ length: 34 }, (_, i) => ({
            alt: `Velebit mountain chalet Stars Peak — Galeriefoto ${i + 1}`,
            caption: `Galerie — ${i + 1}`,
        })),
    },
    contact: {
        title: "Kontakt",
        introPrefix: "Erreichen Sie uns telefonisch oder per E-Mail, oder besuchen Sie den Link für ",
        introBookingLink: "Buchung",
        nameLabel: "Name",
        addressLabel: "Adresse",
        addressMock: "Došen Dabar 1, Karlobag, Kroatien",
        phoneLabel: "Telefon",
        bookingLabel: "Buchung",
        emailLabel: "E-Mail",
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
