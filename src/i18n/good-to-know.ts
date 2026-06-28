import type { Locale } from "./config";

export type GoodToKnowSection = {
  title: string;
  wide?: boolean;
  paragraphs?: string[];
  paragraphsAfter?: string[];
  listIntro?: string;
  listItems?: string[];
  phoneIntro?: string;
};

export type GoodToKnowContent = {
  title: string;
  intro: string;
  whatsappLinkLabel: string;
  sections: GoodToKnowSection[];
};

const hr: GoodToKnowContent = {
  title: "Dobro za znati",
  intro:
    "Dobro došli! Kako bi vaš boravak bio što ugodniji, molimo vas da pročitate nekoliko važnih informacija.",
  whatsappLinkLabel: "WhatsApp",
  sections: [
    {
      title: "Agregat, pećnica i topla voda",
      paragraphs: [
        "Pećnica radi pomoću agregata. Agregat je također potreban za grijanje vode za tuširanje.",
        "Kada želite koristiti pećnicu ili se tuširati, dovoljno je da nam pošaljete poruku putem WhatsAppa, a mi ćemo uključiti agregat i javiti vam kada je sve spremno.",
      ],
      listIntro: "Za komunikaciju možete poslati:",
      listItems: [
        "ako želite toplu vodu za tuširanje (obično za toplu vodu treba pričekati oko 10 minuta) — pošaljite nam poruku putem WhatsAppa",
        "ako želite koristiti pećnicu (pećnica se može početi koristiti odmah po paljenju agregata) — pošaljite nam poruku putem WhatsAppa",
      ],
      paragraphsAfter: [
        "U slučaju tuširanja i/ili pečenja u pećnici javit ćemo vam se odmah za korištenje.",
        "Ukoliko budemo odsutni, pokazat ćemo vam kako da sami koristite navedene usluge.",
      ],
    },
    {
      title: "Zabava i opuštanje",
      paragraphs: [
        "Na televizoru su vam dostupni Netflix i HBO, kao i Sony PlayStation 5 s nekoliko igrica.",
        "Lozinka za Wi-Fi bit će vam dostavljena kada se vidimo po dolasku.",
      ],
    },
    {
      title: "Vanjsko ložište",
      paragraphs: [
        "Drva za ložište su pripremljena. Potrebno je samo zapaliti vatru i uživati u večeri pod zvjezdanim nebom ili se opustiti i sunčati tijekom dana na ležaljkama.",
      ],
    },
    {
      title: "Ljetna kuhinja",
      paragraphs: [
        "U ljetnoj, odnosno vanjskoj kuhinji možete pripremati obroke. Na raspolaganju su vam roštilj i plinsko kuhalo.",
      ],
    },
    {
      title: "Rashlađivanje tijekom ljeta",
      paragraphs: [
        "Tijekom ljetnih mjeseci na gornjem katu može biti vruće u najtoplijem dijelu dana. Zato je na raspolaganju ventilator u koji se umeću ulošci s ledom iz zamrzivača kako bi puhao hladan zrak i rashladio prostoriju.",
      ],
    },
    {
      title: "Što trebate ponijeti",
      paragraphs: [
        "Potrebno je ponijeti samo odjeću i hranu. Sve ostalo dočekat će vas u kući.",
        "U hladnjaku će vas po dolasku čekati ohlađeno piće kako biste se mogli osvježiti.",
      ],
    },
    {
      title: "Aktivnosti i sadržaji",
      listIntro: "Na otvorenom su vam dostupni:",
      listItems: [
        "pikado",
        "badminton",
        "ljuljačke za djecu",
        "mali golovi za nogomet",
      ],
      paragraphsAfter: ["U kući se nalaze i neke društvene igre te puzzle."],
    },
    {
      title: "Dodatni ležajevi",
      paragraphs: [
        "Osim bračnog kreveta, na raspolaganju su vam i dva prijenosna kreveta za jednu osobu, koje možete koristiti bilo gdje u kući, prema vlastitim potrebama.",
      ],
    },
    {
      title: "Trgovine, pizzerije i kafići u Karlobagu",
      paragraphs: [
        "Karlobag je udaljen oko pola sata vožnje od objekta. U centru mjesta i uz obalu pronaći ćete:",
      ],
      listItems: [
        "Konzum, Tommy i Studenac — trgovine s dnevnim namirnicama",
        "Pizzeria Šušanj — pizza, tjestenina i jela s roštilja, Vladimira Nazora 15",
        "Bistro Adriatik — hrvatska i mediteranska kuhinja s terasom uz more, Obala Vladimira Nazora",
        "Carlito's — kafić uz obalu",
      ],
    },
    {
      title: "Plaže u Karlobagu i okolici",
      paragraphs: [
        "Za kupanje i dan uz more preporučujemo:",
      ],
      listItems: [
        "Tatinja — slikovita šljunčana uvala sjeverno od centra, idealna za obitelji",
        "Plaža u centru Karlobaga — betonske površine za sunčanje uz rivu",
        "Ribarica — mirno turističko naselje između Karlobaga i Cesarice",
        "Cesarica — tiho mjesto u pitomoj uvali s kristalno čistim morem",
      ],
    },
    {
      title: "Kontakt",
      phoneIntro: "Za sva pitanja dostupni smo putem WhatsAppa:",
    },
    {
      title: "Upute za dolazak",
      wide: true,
      paragraphs: [
        "Kuća se nalazi na adresi Došen Dabar 1, u mjestu Bačić Duliba.",
        "Do kuće možete iz dva smjera. Jedan je iz pravca Karlobaga, a drugi iz pravca Gospića.",
        "Kod hostela Čelina u mjestu Šušanj skrenete i pratite znakove za mjesto Ravni Dabar, te vozite asfaltiranom cestom sve do kraja asfalta, zatim dalje prema Bačić Dulibi vodi makadamska cesta. Cesta je održavana i pogodna za osobne automobile.",
        "Nedugo nakon što počne makadamska cesta vidjet ćete skretanje za Ravni Dabar — ne skrećite za Ravni Dabar, već nastavite još nekih 10-ak minuta vožnje do skretanja za Bačić Dulibu. Na putu će biti i putokazi za kuću za odmor „Stars Peak“, kako biste jednom kad dođete do Bačić Dulibe lakše pronašli točnu lokaciju.",
      ],
    },
  ],
};

const en: GoodToKnowContent = {
  title: "Good to know",
  intro:
    "Welcome! To make your stay as comfortable as possible, please read a few important details below.",
  whatsappLinkLabel: "WhatsApp",
  sections: [
    {
      title: "Generator, oven and hot water",
      paragraphs: [
        "The oven runs on a generator. The generator is also required to heat water for showering.",
        "When you want to use the oven or take a shower, simply send us a WhatsApp message and we will start the generator and let you know when everything is ready.",
      ],
      listIntro: "For communication, you can send:",
      listItems: [
        "if you want hot water for a shower (hot water usually takes about 10 minutes) send us msg via WhatsApp",
        "if you want to use the oven (the oven can be used as soon as the generator is on) send us msg via WhatsApp",
      ],
      paragraphsAfter: [
        "For showering and/or baking, we will reply right away to confirm use.",
        "If we are away, we will show you how to operate these services yourself.",
      ],
    },
    {
      title: "Entertainment",
      paragraphs: [
        "Netflix and HBO are available on the TV, along with a Sony PlayStation 5 and several games.",
        "The Wi-Fi password will be provided when we meet on your arrival.",
      ],
    },
    {
      title: "Outdoor fireplace",
      paragraphs: [
        "Firewood is prepared for you. Just light the fire and enjoy an evening under the stars, or relax and sunbathe on the loungers during the day.",
      ],
    },
    {
      title: "Summer kitchen",
      paragraphs: [
        "You can prepare meals in the outdoor summer kitchen. A barbecue grill and a gas hob are available.",
      ],
    },
    {
      title: "Cooling in summer",
      paragraphs: [
        "During summer months the upper floor can get warm at the hottest time of day. A fan with freezer ice packs is available to blow cool air and lower the room temperature.",
      ],
    },
    {
      title: "What to bring",
      paragraphs: [
        "You only need to bring clothes and food. Everything else awaits you in the house.",
        "Chilled drinks will be waiting in the fridge when you arrive so you can refresh yourself.",
      ],
    },
    {
      title: "Activities",
      listIntro: "Outdoors you will find:",
      listItems: [
        "darts",
        "badminton",
        "children's swings",
        "small football goals",
      ],
      paragraphsAfter: ["Indoors there are also board games and puzzles."],
    },
    {
      title: "Extra beds",
      paragraphs: [
        "In addition to the double bed, two single portable beds are available and can be placed anywhere in the house to suit your needs.",
      ],
    },
    {
      title: "Shops, pizzerias and cafés in Karlobag",
      paragraphs: [
        "Karlobag is about a half-hour drive from the property. In the town centre and along the waterfront you will find:",
      ],
      listItems: [
        "Konzum, Tommy and Studenac — grocery stores for daily shopping",
        "Pizzeria Šušanj — pizza, pasta and grilled dishes, Vladimira Nazora 15",
        "Bistro Adriatik — Croatian and Mediterranean cuisine with a sea-view terrace, Obala Vladimira Nazora",
        "Carlito's — café by the sea",
      ],
    },
    {
      title: "Beaches in Karlobag and nearby",
      paragraphs: [
        "For swimming and a day by the sea, we recommend:",
      ],
      listItems: [
        "Tatinja — a scenic pebble cove north of the centre, ideal for families",
        "Karlobag town beach — concrete sunbathing areas along the promenade",
        "Ribarica — a quiet resort village between Karlobag and Cesarica",
        "Cesarica — a peaceful spot in a sheltered bay with crystal-clear sea",
      ],
    },
    {
      title: "Contact",
      phoneIntro: "For any questions, reach us on WhatsApp:",
    },
    {
      title: "Arrival directions",
      wide: true,
      paragraphs: [
        "The house is at Došen Dabar 1, in Bačić Duliba.",
        "You can reach the house from two directions — from Karlobag or from Gospić.",
        "At Hostel Čelina in Šušanj, turn off and follow the signs for Ravni Dabar, then drive on the paved road until the asphalt ends; from there a gravel road leads towards Bačić Duliba. The road is maintained and suitable for passenger cars.",
        "Shortly after the gravel road begins you will see a turn for Ravni Dabar — do not turn there; continue for about 10 minutes until the turn for Bačić Duliba. Along the way there are also signs for the Stars Peak holiday home, so once you reach Bačić Duliba you can find the exact location more easily.",
      ],
    },
  ],
};

const de: GoodToKnowContent = {
  title: "Gut zu wissen",
  intro:
    "Willkommen! Damit Ihr Aufenthalt so angenehm wie möglich wird, lesen Sie bitte einige wichtige Hinweise.",
  whatsappLinkLabel: "WhatsApp",
  sections: [
    {
      title: "Generator, Backofen und warmes Wasser",
      paragraphs: [
        "Der Backofen läuft über einen Generator. Der Generator wird auch zum Erwärmen des Duschwassers benötigt.",
        "Wenn Sie den Backofen nutzen oder duschen möchten, senden Sie uns einfach eine WhatsApp-Nachricht — wir schalten den Generator ein und melden uns, sobald alles bereit ist.",
      ],
      listIntro: "Zur Kommunikation können Sie senden:",
      listItems: [
        "wenn Sie warmes Duschwasser wünschen (warmes Wasser dauert in der Regel etwa 10 Minuten) — senden Sie uns eine Nachricht per WhatsApp",
        "wenn Sie den Backofen nutzen möchten (der Backofen kann direkt nach dem Start des Generators verwendet werden) — senden Sie uns eine Nachricht per WhatsApp",
      ],
      paragraphsAfter: [
        "Bei Duschen und/oder Backen antworten wir umgehend zur Freigabe.",
        "Sind wir nicht vor Ort, zeigen wir Ihnen, wie Sie die Geräte selbst bedienen können.",
      ],
    },
    {
      title: "Unterhaltung",
      paragraphs: [
        "Am Fernseher stehen Netflix und HBO zur Verfügung, außerdem eine Sony PlayStation 5 mit mehreren Spielen.",
        "Das WLAN-Passwort erhalten Sie bei unserem Treffen nach Ihrer Ankunft.",
      ],
    },
    {
      title: "Außenkamin",
      paragraphs: [
        "Brennholz ist vorbereitet. Zünden Sie einfach das Feuer an und genießen Sie den Abend unter dem Sternenhimmel — oder entspannen Sie tagsüber auf den Liegen.",
      ],
    },
    {
      title: "Sommerküche",
      paragraphs: [
        "In der Außen- bzw. Sommerküche können Sie Mahlzeiten zubereiten. Grill und Gasherd stehen zur Verfügung.",
      ],
    },
    {
      title: "Abkühlung im Sommer",
      paragraphs: [
        "In den Sommermonaten kann es im Obergeschoss zur wärmsten Tageszeit heiß werden. Ein Ventilator mit Eispacks aus dem Gefrierschrank bläst kühle Luft und kühlt den Raum.",
      ],
    },
    {
      title: "Was Sie mitbringen sollten",
      paragraphs: [
        "Bringen Sie nur Kleidung und Lebensmittel mit. Alles andere erwartet Sie im Haus.",
        "Gekühlte Getränke im Kühlschrank begrüßen Sie bei der Ankunft.",
      ],
    },
    {
      title: "Aktivitäten",
      listIntro: "Im Freien stehen zur Verfügung:",
      listItems: [
        "Darts",
        "Badminton",
        "Kinderschaukeln",
        "kleine Fußballtore",
      ],
      paragraphsAfter: ["Im Haus finden Sie außerdem Gesellschaftsspiele und Puzzles."],
    },
    {
      title: "Zusätzliche Betten",
      paragraphs: [
        "Neben dem Doppelbett stehen zwei portable Einzelbetten zur Verfügung, die Sie nach Bedarf überall im Haus aufstellen können.",
      ],
    },
    {
      title: "Geschäfte, Pizzerien und Cafés in Karlobag",
      paragraphs: [
        "Karlobag ist etwa eine halbe Stunde Fahrt vom Objekt entfernt. Im Ortszentrum und an der Uferpromenade finden Sie:",
      ],
      listItems: [
        "Konzum, Tommy und Studenac — Lebensmittelgeschäfte für den täglichen Bedarf",
        "Pizzeria Šušanj — Pizza, Pasta und Grillgerichte, Vladimira Nazora 15",
        "Bistro Adriatik — kroatische und mediterrane Küche mit Terrasse am Meer, Obala Vladimira Nazora",
        "Carlito's — Café direkt an der Küste",
      ],
    },
    {
      title: "Strände in Karlobag und Umgebung",
      paragraphs: [
        "Zum Baden und für einen Tag am Meer empfehlen wir:",
      ],
      listItems: [
        "Tatinja — malerische Kiesbucht nördlich des Zentrums, ideal für Familien",
        "Stadtstrand Karlobag — Betonflächen zum Sonnenbaden an der Promenade",
        "Ribarica — ruhiges Ferienort zwischen Karlobag und Cesarica",
        "Cesarica — ruhiger Ort in einer geschützten Bucht mit kristallklarem Meer",
      ],
    },
    {
      title: "Kontakt",
      phoneIntro: "Bei Fragen erreichen Sie uns per WhatsApp:",
    },
    {
      title: "Anfahrt",
      wide: true,
      paragraphs: [
        "Das Haus befindet sich unter der Adresse Došen Dabar 1, in Bačić Duliba.",
        "Sie erreichen das Haus aus zwei Richtungen — von Karlobag oder von Gospić.",
        "Beim Hostel Čelina in Šušanj biegen Sie ab und folgen den Schildern nach Ravni Dabar. Fahren Sie auf der asphaltierten Straße bis zum Ende des Asphalts; danach führt eine Schotterstraße in Richtung Bačić Duliba. Die Straße ist gepflegt und für Pkw geeignet.",
        "Kurz nach Beginn der Schotterstraße sehen Sie eine Abzweigung nach Ravni Dabar — biegen Sie dort nicht ab, sondern fahren Sie noch etwa 10 Minuten bis zur Abzweigung nach Bačić Duliba. Unterwegs gibt es auch Hinweisschilder zur Ferienwohnung Stars Peak, damit Sie in Bačić Duliba die genaue Lage leichter finden.",
      ],
    },
  ],
};

const fr: GoodToKnowContent = {
  title: "Bon à savoir",
  intro:
    "Bienvenue ! Pour que votre séjour soit le plus agréable possible, veuillez lire quelques informations importantes.",
  whatsappLinkLabel: "WhatsApp",
  sections: [
    {
      title: "Groupe électrogène, four et eau chaude",
      paragraphs: [
        "Le four fonctionne avec un groupe électrogène. Celui-ci sert aussi à chauffer l'eau de la douche.",
        "Pour utiliser le four ou prendre une douche, envoyez-nous un message WhatsApp — nous démarrons le groupe et vous prévenons dès que tout est prêt.",
      ],
      listIntro: "Pour communiquer, vous pouvez envoyer :",
      listItems: [
        "si vous souhaitez de l'eau chaude pour la douche (comptez environ 10 minutes) — envoyez-nous un message via WhatsApp",
        "si vous souhaitez utiliser le four (utilisable dès que le groupe est allumé) — envoyez-nous un message via WhatsApp",
      ],
      paragraphsAfter: [
        "Pour la douche et/ou la cuisson au four, nous vous répondrons immédiatement pour confirmer l'utilisation.",
        "Si nous sommes absents, nous vous montrerons comment utiliser ces équipements vous-même.",
      ],
    },
    {
      title: "Divertissement",
      paragraphs: [
        "Netflix et HBO sont disponibles sur la télévision, ainsi qu'une PlayStation 5 Sony avec plusieurs jeux.",
        "Le mot de passe Wi-Fi vous sera communiqué lors de notre rencontre à votre arrivée.",
      ],
    },
    {
      title: "Foyer extérieur",
      paragraphs: [
        "Le bois de chauffage est préparé. Il suffit d'allumer le feu pour profiter d'une soirée sous les étoiles ou de vous détendre au soleil sur les transats.",
      ],
    },
    {
      title: "Cuisine d'été",
      paragraphs: [
        "Vous pouvez préparer vos repas dans la cuisine extérieure d'été. Un barbecue et une plaque à gaz sont à disposition.",
      ],
    },
    {
      title: "Rafraîchissement en été",
      paragraphs: [
        "En été, l'étage peut être chaud aux heures les plus chaudes. Un ventilateur avec des packs de glace du congélateur diffuse de l'air frais pour rafraîchir la pièce.",
      ],
    },
    {
      title: "Ce qu'il faut apporter",
      paragraphs: [
        "Apportez uniquement vos vêtements et votre nourriture. Tout le reste vous attend dans la maison.",
        "Des boissons fraîches vous accueilleront dans le réfrigérateur à votre arrivée.",
      ],
    },
    {
      title: "Activités",
      listIntro: "À l'extérieur, vous trouverez :",
      listItems: [
        "fléchettes",
        "badminton",
        "balançoires pour enfants",
        "petits buts de football",
      ],
      paragraphsAfter: ["À l'intérieur, des jeux de société et des puzzles sont également disponibles."],
    },
    {
      title: "Lits supplémentaires",
      paragraphs: [
        "Outre le lit double, deux lits simples portables sont disponibles et peuvent être placés où vous le souhaitez dans la maison.",
      ],
    },
    {
      title: "Commerces, pizzerias et cafés à Karlobag",
      paragraphs: [
        "Karlobag se trouve à environ une demi-heure de route du logement. Au centre-ville et le long du front de mer, vous trouverez :",
      ],
      listItems: [
        "Konzum, Tommy et Studenac — épiceries pour les courses quotidiennes",
        "Pizzeria Šušanj — pizzas, pâtes et plats grillés, Vladimira Nazora 15",
        "Bistro Adriatik — cuisine croate et méditerranéenne avec terrasse face à la mer, Obala Vladimira Nazora",
        "Carlito's — café au bord de l'eau",
      ],
    },
    {
      title: "Plages à Karlobag et aux alentours",
      paragraphs: [
        "Pour la baignade et une journée au bord de la mer, nous recommandons :",
      ],
      listItems: [
        "Tatinja — jolie crique de galets au nord du centre, idéale pour les familles",
        "Plage du centre de Karlobag — surfaces en béton pour bronzer le long de la promenade",
        "Ribarica — village de vacances paisible entre Karlobag et Cesarica",
        "Cesarica — lieu tranquille dans une baie abritée aux eaux cristallines",
      ],
    },
    {
      title: "Contact",
      phoneIntro: "Pour toute question, contactez-nous sur WhatsApp :",
    },
    {
      title: "Itinéraire d’arrivée",
      wide: true,
      paragraphs: [
        "La maison se trouve au Došen Dabar 1, à Bačić Duliba.",
        "Vous pouvez y accéder par deux itinéraires — depuis Karlobag ou depuis Gospić.",
        "À l’hostel Čelina à Šušanj, tournez et suivez les panneaux vers Ravni Dabar, puis roulez sur la route asphaltée jusqu’à la fin de l’asphalte ; ensuite une route en gravier mène vers Bačić Duliba. La route est entretenue et praticable en voiture.",
        "Peu après le début du gravier, vous verrez un embranchement pour Ravni Dabar — ne tournez pas là ; continuez encore environ 10 minutes jusqu’à l’embranchement pour Bačić Duliba. Des panneaux indiquent aussi la maison de vacances Stars Peak, pour vous aider à trouver l’emplacement exact une fois à Bačić Duliba.",
      ],
    },
  ],
};

const it: GoodToKnowContent = {
  title: "Da sapere",
  intro:
    "Benvenuti! Per rendere il vostro soggiorno il più confortevole possibile, leggete alcune informazioni importanti.",
  whatsappLinkLabel: "WhatsApp",
  sections: [
    {
      title: "Generatore, forno e acqua calda",
      paragraphs: [
        "Il forno funziona con un generatore. Il generatore serve anche per riscaldare l'acqua della doccia.",
        "Quando volete usare il forno o fare la doccia, inviateci un messaggio WhatsApp: accenderemo il generatore e vi avviseremo quando tutto è pronto.",
      ],
      listIntro: "Per comunicare, potete inviare:",
      listItems: [
        "se desiderate acqua calda per la doccia (in genere servono circa 10 minuti) — inviateci un messaggio via WhatsApp",
        "se desiderate usare il forno (utilizzabile subito dopo l'accensione del generatore) — inviateci un messaggio via WhatsApp",
      ],
      paragraphsAfter: [
        "Per doccia e/o cottura in forno, vi risponderemo subito per confermare l'utilizzo.",
        "Se siamo assenti, vi mostreremo come usare questi servizi in autonomia.",
      ],
    },
    {
      title: "Intrattenimento",
      paragraphs: [
        "Sulla TV sono disponibili Netflix e HBO, oltre a una Sony PlayStation 5 con diversi giochi.",
        "La password Wi-Fi vi sarà fornita quando ci incontriamo al vostro arrivo.",
      ],
    },
    {
      title: "Camino esterno",
      paragraphs: [
        "La legna è già preparata. Basta accendere il fuoco per una serata sotto le stelle o rilassarsi al sole sui lettini durante il giorno.",
      ],
    },
    {
      title: "Cucina estiva",
      paragraphs: [
        "Potete preparare i pasti nella cucina estiva. Sono disponibili barbecue e fornello a gas.",
      ],
    },
    {
      title: "Raffrescamento in estate",
      paragraphs: [
        "Nei mesi estivi il piano superiore può essere caldo nelle ore più calde. Un ventilatore con inserti di ghiaccio dal congelatore soffia aria fresca per raffreddare la stanza.",
      ],
    },
    {
      title: "Cosa portare",
      paragraphs: [
        "Portate solo abiti e cibo. Tutto il resto vi aspetta in casa.",
        "Bevande fresche vi accoglieranno in frigorifero all'arrivo.",
      ],
    },
    {
      title: "Attività",
      listIntro: "All'aperto troverete:",
      listItems: [
        "freccette",
        "badminton",
        "altalene per bambini",
        "porticine da calcio",
      ],
      paragraphsAfter: ["In casa ci sono anche giochi da tavolo e puzzle."],
    },
    {
      title: "Letti aggiuntivi",
      paragraphs: [
        "Oltre al letto matrimoniale, sono disponibili due letti singoli portatili, utilizzabili in qualsiasi punto della casa secondo le vostre esigenze.",
      ],
    },
    {
      title: "Negozi, pizzerie e caffè a Karlobag",
      paragraphs: [
        "Karlobag dista circa mezz'ora di auto dalla struttura. Nel centro e lungo il lungomare troverete:",
      ],
      listItems: [
        "Konzum, Tommy e Studenac — supermercati per la spesa quotidiana",
        "Pizzeria Šušanj — pizza, pasta e piatti alla griglia, Vladimira Nazora 15",
        "Bistro Adriatik — cucina croata e mediterranea con terrazza sul mare, Obala Vladimira Nazora",
        "Carlito's — caffè sul lungomare",
      ],
    },
    {
      title: "Spiagge a Karlobag e dintorni",
      paragraphs: [
        "Per nuotare e trascorrere una giornata al mare consigliamo:",
      ],
      listItems: [
        "Tatinja — incantevole baia di ciottoli a nord del centro, ideale per le famiglie",
        "Spiaggia nel centro di Karlobag — aree in cemento per prendere il sole lungo la passeggiata",
        "Ribarica — tranquillo borgo turistico tra Karlobag e Cesarica",
        "Cesarica — luogo tranquillo in una baia riparata con mare cristallino",
      ],
    },
    {
      title: "Contatto",
      phoneIntro: "Per qualsiasi domanda, siamo disponibili su WhatsApp:",
    },
    {
      title: "Indicazioni per l’arrivo",
      wide: true,
      paragraphs: [
        "La casa si trova in Došen Dabar 1, a Bačić Duliba.",
        "Potete raggiungerla da due direzioni — da Karlobag o da Gospić.",
        "All’ostello Čelina a Šušanj svoltate e seguite i cartelli per Ravni Dabar, poi percorrete la strada asfaltata fino alla fine dell’asfalto; da lì una strada sterrata conduce verso Bačić Duliba. La strada è mantenuta ed è adatta alle auto.",
        "Poco dopo l’inizio della strada sterrata vedrete una svolta per Ravni Dabar — non girate lì; proseguite per circa 10 minuti fino alla svolta per Bačić Duliba. Lungo il percorso ci sono anche cartelli per la casa vacanze Stars Peak, così una volta arrivati a Bačić Duliba potrete trovare più facilmente la posizione esatta.",
      ],
    },
  ],
};

const byLocale: Record<Locale, GoodToKnowContent> = { en, hr, de, fr, it };

const DIRECTIONS_SECTION_TITLES = new Set([
  "Upute za dolazak",
  "Arrival directions",
  "Anfahrt",
  "Itinéraire d’arrivée",
  "Indicazioni per l’arrivo",
]);

function withDirectionsFirst(content: GoodToKnowContent): GoodToKnowContent {
  const index = content.sections.findIndex((section) =>
    DIRECTIONS_SECTION_TITLES.has(section.title)
  );
  if (index <= 0) return content;

  const sections = [...content.sections];
  const [directions] = sections.splice(index, 1);
  return { ...content, sections: [directions, ...sections] };
}

export function getGoodToKnow(locale: Locale): GoodToKnowContent {
  return withDirectionsFirst(byLocale[locale]);
}
