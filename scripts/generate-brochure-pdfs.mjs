import fs from "node:fs";
import path from "node:path";
import PDFDocument from "pdfkit";

const outputDir = path.resolve("public/brochures");
const fontRegular = "/System/Library/Fonts/Supplemental/Arial.ttf";
const fontBold = "/System/Library/Fonts/Supplemental/Arial Bold.ttf";

const locales = {
  hr: {
    file: "velebit-hr.pdf",
    title: "Velebit",
    subtitle: "Brošura Parka prirode Velebit",
    source: "Priređeno prema hrvatskoj brošuri Parka prirode Velebit.",
    labels: {
      contents: "Sadržaj",
      contact: "Kontakt",
      publisher: "Izdavač",
    },
    sections: [
      {
        title: "Opći podaci o Parku prirode Velebit",
        body: [
          "Velebit je najveća hrvatska planina. Proteže se u blago povijenom luku od prijevoja Vratnik do doline Zrmanje, u duljini od približno 145 kilometara. Planinski niz uobičajeno se dijeli na sjeverni, srednji, južni i jugoistočni Velebit.",
          "Na zapadu ga omeđuje Velebitski kanal Jadranskog mora, a na istoku ličko-gacka zaravan. Iako djeluje vrlo impozantno, Velebit se ne ističe iznimnom visinom; najviši vrh je Vaganski vrh s 1757 metara.",
        ],
      },
      {
        title: "Zaštita Velebita",
        body: [
          "Zbog osobitih reljefnih, vegetacijskih i krajobraznih vrijednosti, pojedini dijelovi Velebita zaštićeni su različitim kategorijama zaštite. Nacionalni park Paklenica osnovan je 1949. godine, a najvrjedniji dijelovi sjevernog i srednjeg Velebita izdvojeni su kao strogi i posebni rezervati.",
          "Velebit je 1978. uvršten u UNESCO-ovu svjetsku mrežu rezervata biosfere, a 1981. proglašen Parkom prirode. Nacionalni park Sjeverni Velebit osnovan je 1999. godine. Zbog svega toga Velebit se s pravom naziva parkom nacionalnih parkova.",
          "Među prirodnim znamenitostima posebno se ističu Cerovačke špilje, brojni geomorfološki oblici poput Kize, Tulovih greda i Stapine te hidrološki fenomeni Zrmanje, Krupe i Krnjeze.",
        ],
      },
      {
        title: "Klima",
        body: [
          "Velebit se nalazi na dodiru mediteranskog i alpsko-dinarskog klimatskog područja. Zbog susreta zračnih strujanja s kontinenta i Jadrana klima se vrlo brzo mijenja na malim udaljenostima.",
          "Od podvelebitskog kanala do vršnog pojasa izmjenjuju se submediteranska, planinska i kontinentalna obilježja. Najpoznatija klimatska značajka područja je bura, snažan sjeveroistočni vjetar koji puše s Velebita prema moru.",
        ],
      },
      {
        title: "Regije i zone",
        body: [
          "Velebit se proteže kroz tri krajobrazne regije Hrvatske. Zapadni rub pripada kvarnersko-velebitskoj regiji uz obalu Jadrana, gdje prevladava stjenovit teren s pogledima na more.",
          "Istočni rub ulazi u Liku, kao šumoviti bedem bukve i jele. Vršni pojas obilježavaju visokoplaninski reljef, krške skulpture, vapnenački vrhovi, šumovite dulibe i planinske livade.",
        ],
      },
      {
        title: "Fenomeni krša",
        body: [
          "Velebit je dio visokog krša dinarske karbonatne platforme. Kukovi, kanjoni, polja, rasjedi, špilje, jame i drugi krški oblici, nastali djelovanjem tektonskih i vodenih sila, daju planini prepoznatljiv karakter.",
          "Na području Velebita zabilježeno je 89 različitih staništa prema klasifikaciji CORINE, što čini velik dio ukupnih staništa Hrvatske. Ističu se šumska staništa, kamenite i krške kosine, livade, pašnjaci, stijene, rijeke, cretovi, špilje i podzemlje.",
        ],
      },
      {
        title: "Biološka raznolikost i flora",
        body: [
          "Raznolikost prirodnih okolnosti stvorila je staništa za mnoge hrvatske i velebitske endeme i relikte flore i faune. Posebno su važna staništa u stijenama, točilima, krškim oblicima i vodotocima Zrmanje, Krupe i Krnjeze.",
          "Flora Velebita iznimno je bogata. Zabilježeno je oko 1854 biljnih vrsta, među kojima su brojni endemi poput velebitske degenije, hrvatske sibireje i velebitske zvončike. Vegetacija se mijenja od primorskih šikara do bukovih, jelovih i smrekovih šuma viših pojaseva.",
        ],
      },
      {
        title: "Cerovačke špilje",
        body: [
          "Cerovačke špilje jedan su od najznačajnijih speleoloških lokaliteta Velebita i Hrvatske. Kompleks čine Donja, Srednja i Gornja špilja s ukupno oko četiri kilometra istraženih kanala, a za posjet je uređeno prvih 700 metara Donje i Gornje špilje.",
          "Špilje su bogate arheološkim nalazima i ostacima špiljskog medvjeda. Kapanje vode i danas stvara sige, pa se špiljski ukrasi ne smiju dirati. Posjete su moguće od travnja do studenog uz najavu, a zimi za veće grupe.",
          "Kako doći: Cerovačke špilje nalaze se 4 km od Gračaca na cesti prema Kninu. S autoceste se silazi na izlazu Sveti Rok, odakle do Gračaca ima oko 25 km.",
        ],
      },
      {
        title: "Fauna",
        body: [
          "Stoljetne velebitske šume bukve i jele dom su važnim populacijama velikih zvijeri: vuka, medvjeda, risa i divlje mačke. Od ptica se ističu tetrijeb gluhan, lještarka, suri orao, sove, djetlići i brojne planinske vrste.",
          "Park je stanište mnogih gmazova, uključujući poskoka i riđovku. Na Velebitu obitavaju i brojne vrste dnevnih leptira, od kojih su neke ugrožene i nalaze se na hrvatskim i europskim crvenim popisima.",
        ],
      },
      {
        title: "Zavratnica",
        body: [
          "Zavratnica je značajni krajobraz i jedna od najljepših uvala hrvatske obale. Nastala je kao potopljena bujična dolina s kanjonskim liticama visokim oko 100 metara, duga je oko 900 metara, a široka između 50 i 150 metara.",
          "Početkom 20. stoljeća uređena je gornja staza s vidikovcem i šetnica uz more. Plavetnilo mora, sivi velebitski kamen i oskudna vegetacija stvaraju izniman prizor koji je privlačio putnike, izletnike i umjetnike.",
          "Kako doći: Do Zavratnice se stiže iz Jablanca polusatnom šetnjom uz more ili planinarskom stazom iz sela Zavratnica.",
        ],
      },
      {
        title: "Dabri i Dabarski kukovi",
        body: [
          "Dabri su jedan od geomorfološki i krajobrazno najzanimljivijih dijelova srednjeg Velebita. Riječ je o nizu krških depresija, uvala i dolaca, među kojima su Crni Dabar, Ravni Dabar, Došen Dabar te Došen, Bačić i Crna Duliba.",
          "Nekada su to bila rijetka stalna naselja na Velebitu. Iznad njih se uzdižu Dabarski kukovi, jedan od prepoznatljivih motiva planine. U blizini Ravnog Dabra nalazi se alpinistička zona za sportsko penjanje.",
          "Kako doći: Na cesti Baške Oštarije - Karlobag, nakon 8 km skreće se prema selu Ledenik, a zatim nastavlja još oko 5 km makadamskom cestom prema Štirovači.",
        ],
      },
      {
        title: "Velebitske povijesne ceste",
        body: [
          "Velebit je stoljećima povezivao priobalje s ličkim zaleđem. Zbog trgovine i prometa Habsburška Monarhija u 18. i 19. stoljeću izgradila je više važnih cesta preko Velebita.",
          "Te su ceste građene s kamenim podlogama, potpornim zidovima i dobrom odvodnjom kako bi odoljele kiši i buri. Zbog očuvanosti i povijesne vrijednosti neke su zaštićene kao kulturno dobro Republike Hrvatske.",
        ],
      },
      {
        title: "Cesta Terezijana",
        body: [
          "Terezijana je izgrađena 1786. godine radi povezivanja Gospića i slobodne luke Karlobag te kao zamjena za stariju Karolinsku cestu. Nalog za gradnju dao je car Josip II., a cesta je nazvana po Mariji Tereziji.",
          "Od 2007. Terezijana je kulturno dobro Republike Hrvatske. Dio trase uređen je kao poučna staza za pješake, zanimljiva jer se na svega tri kilometra doživljavaju dva lica Velebita.",
          "Kako doći: Poučna staza počinje u Baškim Oštarijama, iza stare škole, i završava iznad sela Konjsko. Namijenjena je isključivo pješacima.",
        ],
      },
      {
        title: "Premužićeva staza",
        body: [
          "Premužićeva staza duga je 57 km i povezuje vršne dijelove sjevernog i srednjeg Velebita. Nazvana je po projektantu Anti Premužiću, poznatom graditelju putova i staza po Velebitu.",
          "Izgrađena je od 1930. do 1933. godine, a otvorila je pristup najljepšim i dotad teško dostupnim dijelovima planine. Zbog blagih nagiba pogodna je i za posjetitelje nenavikle na zahtjevno planinarenje. Od 2009. nalazi se na popisu kulturnih dobara.",
          "Kako doći: Za obilazak se može krenuti iz smjera Baških Oštarija ili Zavižana. Detaljne informacije daju Park prirode Velebit i Nacionalni park Sjeverni Velebit.",
        ],
      },
      {
        title: "Majstorska cesta",
        body: [
          "Majstorska cesta, također zaštićeno kulturno dobro, izgrađena je radi kraćenja puta prema Dalmaciji na relaciji Sveti Rok - Mali Alan - Obrovac. Gradnja je počela 1825. godine pod vodstvom Josipa Kajetana Knežića.",
          "Cesta duga 41 km dovršena je 1832. godine. Njezina trasa sa serpentinama po strmoj velebitskoj padini bila je velik iskorak u cestogradnji. Prolazi pokraj Tulovih greda, upečatljive skupine vapnenačkih stijena i tornjeva.",
        ],
      },
      {
        title: "Život na Velebitu",
        body: [
          "Na Velebitu su ljudi stoljećima živjeli pretežno od stočarstva. Ljetne suše i manjak vode poticale su primorske i ličke stočare na sezonske selidbe prema planinskim stanovima, gdje su čuvali stada, obrađivali polja i pripremali sijeno i drva.",
          "Polunomadsko stočarenje danas je nestalo, a velebitski pašnjaci su opustjeli. Njegovi tragovi ostali su u ljetnim stanovima, suhozidima i sjećanjima na nekadašnji način života.",
        ],
      },
      {
        title: "Tradicionalna gradnja",
        body: [
          "Velebitska tradicijska arhitektura jednostavna je i prilagođena stočarskom načinu života. Suhozidi su nastali krčenjem teških površina i vještim slaganjem kamena bez vezivnog materijala.",
          "Većina velebitskih stanova građena je od kamena, pravokutnog tlocrta, često bez prozora, s ognjištem u sredini i torovima za stoku. Slična se jednostavnost vidi i u sakralnim objektima, crkvama i kapelicama.",
        ],
      },
      {
        title: "Mirila",
        body: [
          "Mirila su kamena pogrebna spomen-znamenja smještena uz velebitske prijevoje i planinske putove prema obali. Nastajala su kada se pokojnika, preminulog u planini, nosilo prema groblju župe uz more.",
          "Na prvom mjestu počinka tijelo bi se položilo na zemlju i izmjerilo kamenim pločama. Za velebitsko stanovništvo mirila su bila važnija od groblja jer se vjerovalo da je u grobu samo tijelo, a duša ostaje na mirilu.",
          "Kako doći: U blizini Starigrada-Paklenice nalaze se dvije poučne staze s uređenim lokalitetima mirila.",
        ],
      },
      {
        title: "Posjetite nas",
        body: [
          "Velebit nudi iznimno raznolike mogućnosti posjeta: kamenite vrhove, špiljske dvorane, krške rijeke, morske uvale, poučne staze i stručna vođenja.",
          "Ljubitelji aktivnog odmora mogu birati planinarske staze i šetnice, biciklizam, alpinizam, speleološke lokalitete, rafting i vožnju kanuom na Zrmanji i Krupi.",
          "Više informacija: www.velebit.hr",
        ],
      },
      {
        title: "Pravila ponašanja u Parku prirode Velebit",
        body: [
          "Područje Parka prirode Velebit zaštićeno je zakonom. Posjetitelji trebaju čuvati izvornu biološku, geološku i kulturnu vrijednost prostora.",
          "Ne oštećujte drveće, grmlje, cvijeće i druge biljke. Ne plašite, ne uznemirujte, ne lovite i ne ubijajte životinje. Ne nosite oružje, ne oštećujte gnijezda i duplje, ne logorujte i ne palite vatru izvan označenih mjesta.",
          "Otpad odložite na predviđena mjesta, ne zagađujte vode i izvore, ne oštećujte kulturne spomenike. Komercijalno snimanje dopušteno je samo uz dozvolu Parka prirode.",
        ],
      },
    ],
  },
  en: {
    file: "velebit-en.pdf",
    title: "Velebit",
    subtitle: "Velebit Nature Park brochure",
    source: "Translated and adapted from the Croatian Velebit Nature Park brochure.",
    labels: { contents: "Contents", contact: "Contact", publisher: "Publisher" },
    sections: [
      {
        title: "General Information About Velebit Nature Park",
        body: [
          "Velebit is Croatia's largest mountain. It stretches in a gently curved arc from the Vratnik pass to the Zrmanja valley, for about 145 kilometres. The range is commonly divided into northern, central, southern and south-eastern Velebit.",
          "To the west it is bordered by the Velebit Channel of the Adriatic Sea, and to the east by the Lika-Gacka plateau. Although its appearance is imposing, Velebit is not exceptionally high; its highest summit is Vaganski vrh at 1,757 metres.",
        ],
      },
      {
        title: "Protection of Velebit",
        body: [
          "Because of its outstanding relief, vegetation and landscape values, several parts of Velebit have been protected under different conservation categories. Paklenica National Park was established in 1949, while the most valuable areas of northern and central Velebit were set aside as strict and special reserves.",
          "In 1978 Velebit became part of UNESCO's World Network of Biosphere Reserves, and in 1981 the entire mountain was declared a Nature Park. Northern Velebit National Park was established in 1999. For these reasons Velebit is often called a park of national parks.",
          "Important natural attractions include the Cerovac Caves, geomorphological landmarks such as Kiza, Tulove grede and Stapina, and the rivers and springs of the Zrmanja, Krupa and Krnjeza.",
        ],
      },
      {
        title: "Climate",
        body: [
          "Velebit lies where Mediterranean and Alpine-Dinaric climates meet. Air currents from the continent and the Adriatic collide here, so weather and climate change dramatically over short distances.",
          "From the coastal channel to the high ridge, sub-Mediterranean, mountain and continental influences alternate. The region's best-known feature is the bora, a strong north-eastern wind that blows from Velebit toward the sea.",
        ],
      },
      {
        title: "Regions and Zones",
        body: [
          "Velebit extends through three landscape regions of Croatia. Its western edge belongs to the Kvarner-Velebit coastal region, where rocky terrain opens wide views over the Adriatic.",
          "The eastern side reaches into Lika as a forested wall of beech and fir. The summit belt is marked by high-mountain relief, karst sculptures, limestone peaks, wooded dolines and mountain meadows.",
        ],
      },
      {
        title: "Karst Phenomena",
        body: [
          "Velebit is part of the high karst of the Dinaric carbonate platform. Peaks, canyons, fields, faults, caves, pits and other karst forms shaped by tectonic and water forces give the mountain its distinctive character.",
          "According to the CORINE classification, 89 habitat types occur in the Velebit area. Key habitats include forests, rocky and karst slopes with shrubs, meadows, pastures, cliffs, rivers, peat bogs, caves and the underground world.",
        ],
      },
      {
        title: "Biodiversity and Flora",
        body: [
          "Velebit's varied natural conditions have created habitats for many Croatian and Velebit endemic and relict plant and animal species. Particularly important habitats occur on cliffs, screes, karst formations and along the Zrmanja, Krupa and Krnjeza watercourses.",
          "The flora is exceptionally rich, with around 1,854 plant species, including endemics such as Degenia velebitica, Croatian sibirea and the Velebit bellflower. Vegetation ranges from coastal scrub to beech, fir and spruce forests at higher elevations.",
        ],
      },
      {
        title: "Cerovac Caves",
        body: [
          "The Cerovac Caves are among the most important speleological sites in Velebit and Croatia. The complex consists of the Lower, Middle and Upper Caves, with about four kilometres of explored passages; the first 700 metres of the Lower and Upper Caves are arranged for visitors.",
          "The caves are rich in archaeological finds and remains of the cave bear. Dripping water still creates cave formations, so visitors must not touch the decorations. Visits are possible from April to November by prior arrangement, and in winter for larger groups.",
          "How to get there: The Cerovac Caves are 4 km from Gračac on the road toward Knin. From the motorway, take the Sveti Rok exit; Gračac is about 25 km away.",
        ],
      },
      {
        title: "Fauna",
        body: [
          "Velebit's old beech and fir forests are home to important populations of large carnivores: wolf, bear, lynx and wildcat. Birds include capercaillie, hazel grouse, golden eagle, owls, woodpeckers and many mountain species.",
          "The Park is also a habitat for many reptiles, including the horned viper and common European viper. Many butterflies live in the area as well, some of them threatened and listed in Croatian and European red lists.",
        ],
      },
      {
        title: "Zavratnica",
        body: [
          "Zavratnica is a protected landscape and one of the most beautiful coves on the Croatian coast. It formed as a submerged torrent valley with canyon cliffs about 100 metres high, roughly 900 metres long and 50 to 150 metres wide.",
          "At the beginning of the 20th century an upper path with a viewpoint and a seaside promenade were built. Blue sea, grey Velebit stone and sparse vegetation create a striking scene that has long attracted travellers and artists.",
          "How to get there: Zavratnica can be reached from Jablanac by a half-hour walk along the sea, or by a hiking path from the village of Zavratnica.",
        ],
      },
      {
        title: "Dabri and the Dabarski Kukovi",
        body: [
          "Dabri are among the most interesting geomorphological and landscape areas of central Velebit. They are a series of karst depressions, coves and valleys, including Crni Dabar, Ravni Dabar, Došen Dabar and the Dulibe valleys.",
          "These places were once rare permanent settlements on Velebit. Above them rise the Dabarski kukovi, one of the mountain's recognizable motifs. Near Ravni Dabar there is a climbing area for sport climbing.",
          "How to get there: On the Baške Oštarije - Karlobag road, turn toward Ledenik after 8 km, then continue for about 5 km on a macadam road toward Štirovača.",
        ],
      },
      {
        title: "Historic Roads of Velebit",
        body: [
          "For centuries Velebit connected the coast with the Lika hinterland. In the 18th and 19th centuries the Habsburg Monarchy built several important roads across the mountain for trade and transport.",
          "These roads were built with stone foundations, retaining walls and drainage to withstand heavy rain and the bora wind. Because of their preservation and historical value, some are protected as cultural heritage of the Republic of Croatia.",
        ],
      },
      {
        title: "Terezijana Road",
        body: [
          "The Terezijana Road was built in 1786 to connect Gospić with the free port of Karlobag and to replace the older Karolina road. Construction was ordered by Emperor Joseph II, and the road was named after Maria Theresa.",
          "Since 2007 Terezijana has been protected cultural heritage. Part of the route is arranged as an educational walking trail, interesting because in only three kilometres visitors experience two faces of Velebit.",
          "How to get there: The trail starts in Baške Oštarije, behind the old school, and ends above the village of Konjsko. It is intended only for walkers.",
        ],
      },
      {
        title: "Premužić Trail",
        body: [
          "The Premužić Trail is a 57 km hiking route connecting the summit areas of northern and central Velebit. It is named after its designer Ante Premužić, a noted builder of Velebit paths and roads.",
          "Built between 1930 and 1933, it opened access to some of the mountain's most beautiful and previously hard-to-reach areas. Because it avoids steep climbs, it is suitable even for visitors not used to demanding hiking. Since 2009 it has been protected as cultural heritage.",
          "How to get there: The trail can be approached from Baške Oštarije or Zavižan. Detailed information is available from Velebit Nature Park and Northern Velebit National Park.",
        ],
      },
      {
        title: "Majstorska Road",
        body: [
          "Majstorska Road, also protected as cultural heritage, was built to shorten the route to Dalmatia between Sveti Rok, Mali Alan and Obrovac. Construction began in 1825 under the guidance of Josip Kajetan Knežić.",
          "The 41 km road was completed in 1832. Its serpentine route across the steep Velebit slope was an important achievement in road building. It passes near Tulove grede, a dramatic group of limestone cliffs and towers.",
        ],
      },
      {
        title: "Life on Velebit",
        body: [
          "For centuries people on Velebit lived mainly from livestock breeding. Summer drought and lack of water led coastal and Lika herders to move seasonally toward mountain dwellings, where they kept herds, worked fields and prepared hay and firewood.",
          "Semi-nomadic herding has disappeared today and Velebit's pastures are largely empty. Its traces remain in summer dwellings, dry-stone walls and memories of a former way of life.",
        ],
      },
      {
        title: "Traditional Building",
        body: [
          "Velebit's traditional architecture is simple and adapted to pastoral life. Dry-stone walls were created by clearing difficult land and skilfully stacking stone without binding material.",
          "Most Velebit dwellings were built of stone, rectangular in plan, often without windows, with a hearth in the centre and livestock pens nearby. The same simplicity is visible in chapels and small churches.",
        ],
      },
      {
        title: "Mirila",
        body: [
          "Mirila are stone funerary memorials placed along Velebit passes and mountain paths leading to the coast. They were created when a person who died in the mountains was carried to the cemetery of the coastal parish.",
          "At the first resting place, the body was laid on the ground and measured with two stone slabs. For the people of Velebit, mirila were more important than graves because it was believed that only the body was buried, while the soul remained at the mirilo.",
          "How to get there: Near Starigrad-Paklenica there are two educational trails with arranged mirila sites.",
        ],
      },
      {
        title: "Visit Us",
        body: [
          "Velebit offers exceptionally varied possibilities for visitors: rocky summits, cave halls, karst rivers, sea coves, educational trails and guided interpretation.",
          "Active travellers can choose hiking paths, walking trails, cycling, climbing, speleological sites, rafting and canoeing on the Zrmanja and Krupa.",
          "More information: www.velebit.hr",
        ],
      },
      {
        title: "Rules of Conduct in Velebit Nature Park",
        body: [
          "Velebit Nature Park is protected by law. Visitors are asked to preserve the area's original biological, geological and cultural values.",
          "Do not damage trees, shrubs, flowers or other plants. Do not frighten, disturb, capture, hunt or kill animals. Do not carry weapons, damage nests or hollows, camp or light fires outside designated areas.",
          "Dispose of waste only in marked places, do not pollute streams or springs, and do not damage cultural monuments. Commercial filming and photography are allowed only with permission from the Nature Park.",
        ],
      },
    ],
  },
};

locales.de = {
  file: "velebit-de.pdf",
  title: "Velebit",
  subtitle: "Broschüre des Naturparks Velebit",
  source: "Übersetzt und angepasst nach der kroatischen Broschüre des Naturparks Velebit.",
  labels: { contents: "Inhalt", contact: "Kontakt", publisher: "Herausgeber" },
  sections: locales.en.sections.map((section) => section),
};

locales.fr = {
  file: "velebit-fr.pdf",
  title: "Velebit",
  subtitle: "Brochure du Parc naturel du Velebit",
  source: "Traduit et adapté à partir de la brochure croate du Parc naturel du Velebit.",
  labels: { contents: "Sommaire", contact: "Contact", publisher: "Éditeur" },
  sections: locales.en.sections.map((section) => section),
};

locales.it = {
  file: "velebit-it.pdf",
  title: "Velebit",
  subtitle: "Brochure del Parco naturale del Velebit",
  source: "Tradotto e adattato dalla brochure croata del Parco naturale del Velebit.",
  labels: { contents: "Indice", contact: "Contatto", publisher: "Editore" },
  sections: locales.en.sections.map((section) => section),
};

const translatedOverrides = {
  de: [
    ["Allgemeine Informationen über den Naturpark Velebit", ["Velebit ist das größte Gebirge Kroatiens. Es erstreckt sich in einem sanft gebogenen Bogen vom Pass Vratnik bis zum Tal der Zrmanja über etwa 145 Kilometer. Der Gebirgszug wird gewöhnlich in nördlichen, mittleren, südlichen und südöstlichen Velebit gegliedert.", "Im Westen wird er vom Velebit-Kanal der Adria begrenzt, im Osten von der Lika-Gacka-Hochebene. Obwohl Velebit sehr eindrucksvoll wirkt, ist es nicht außergewöhnlich hoch; der höchste Gipfel ist der Vaganski vrh mit 1.757 Metern."]],
    ["Schutz des Velebit", ["Aufgrund seiner besonderen Relief-, Vegetations- und Landschaftswerte stehen mehrere Teile des Velebit unter verschiedenen Schutzkategorien. Der Nationalpark Paklenica wurde 1949 gegründet, während die wertvollsten Bereiche des nördlichen und mittleren Velebit als strenge und besondere Reservate ausgewiesen wurden.", "1978 wurde Velebit in das weltweite UNESCO-Netz der Biosphärenreservate aufgenommen, 1981 wurde das gesamte Gebirge zum Naturpark erklärt. Der Nationalpark Nördlicher Velebit wurde 1999 gegründet. Deshalb wird Velebit oft als Park der Nationalparks bezeichnet.", "Zu den wichtigsten Natursehenswürdigkeiten zählen die Cerovac-Höhlen, geomorphologische Formen wie Kiza, Tulove grede und Stapina sowie die Flüsse und Quellen von Zrmanja, Krupa und Krnjeza."]],
    ["Klima", ["Velebit liegt an der Berührungszone des mediterranen und des alpin-dinarischen Klimas. Luftströmungen vom Kontinent und von der Adria treffen hier aufeinander, weshalb sich Wetter und Klima auf kurzen Distanzen stark verändern.", "Vom Küstenkanal bis zum Gipfelbereich wechseln submediterrane, Gebirgs- und kontinentale Einflüsse. Die bekannteste Erscheinung der Region ist die Bora, ein starker Nordostwind, der vom Velebit zum Meer weht."]],
    ["Regionen und Zonen", ["Velebit erstreckt sich durch drei Landschaftsregionen Kroatiens. Der westliche Rand gehört zur Kvarner-Velebit-Küstenregion, wo felsiges Gelände weite Blicke über die Adria bietet.", "Die Ostseite reicht nach Lika hinein wie eine bewaldete Mauer aus Buchen und Tannen. Der Gipfelgürtel ist geprägt von Hochgebirgsrelief, Karstformen, Kalkgipfeln, bewaldeten Dolinen und Bergwiesen."]],
    ["Karstphänomene", ["Velebit ist Teil des Hochkarsts der dinarischen Karbonatplattform. Gipfel, Schluchten, Poljen, Verwerfungen, Höhlen, Schächte und andere Karstformen, geprägt durch tektonische Kräfte und Wasser, geben dem Gebirge seinen unverwechselbaren Charakter.", "Nach der CORINE-Klassifikation kommen im Gebiet des Velebit 89 Lebensraumtypen vor. Besonders wichtig sind Wälder, felsige und karstige Hänge mit Gebüsch, Wiesen, Weiden, Felsen, Flüsse, Moore, Höhlen und die unterirdische Welt."]],
    ["Biologische Vielfalt und Flora", ["Die vielfältigen natürlichen Bedingungen des Velebit haben Lebensräume für zahlreiche kroatische und velebitische Endemiten sowie Reliktarten geschaffen. Besonders bedeutend sind Lebensräume an Felsen, Schutthalden, Karstformen und entlang der Wasserläufe Zrmanja, Krupa und Krnjeza.", "Die Flora ist außergewöhnlich reich: rund 1.854 Pflanzenarten sind bekannt, darunter Endemiten wie die Velebit-Degenie, die kroatische Sibiree und die Velebit-Glockenblume. Die Vegetation reicht von Küstengebüsch bis zu Buchen-, Tannen- und Fichtenwäldern höherer Lagen."]],
    ["Cerovac-Höhlen", ["Die Cerovac-Höhlen gehören zu den bedeutendsten speläologischen Stätten des Velebit und Kroatiens. Der Komplex besteht aus Unterer, Mittlerer und Oberer Höhle mit etwa vier Kilometern erforschter Gänge; die ersten 700 Meter der Unteren und Oberen Höhle sind für Besucher eingerichtet.", "Die Höhlen sind reich an archäologischen Funden und Überresten des Höhlenbären. Tropfwasser bildet noch heute Sinterformen, daher dürfen Höhlenschmuck und Tropfsteine nicht berührt werden. Besuche sind von April bis November nach Anmeldung möglich, im Winter für größere Gruppen.", "Anfahrt: Die Cerovac-Höhlen liegen 4 km von Gračac an der Straße nach Knin. Von der Autobahn nimmt man die Ausfahrt Sveti Rok; bis Gračac sind es etwa 25 km."]],
    ["Fauna", ["Die alten Buchen- und Tannenwälder des Velebit beherbergen bedeutende Populationen großer Raubtiere: Wolf, Bär, Luchs und Wildkatze. Unter den Vögeln finden sich Auerhuhn, Haselhuhn, Steinadler, Eulen, Spechte und zahlreiche Gebirgsarten.", "Der Park ist außerdem Lebensraum vieler Reptilien, darunter Hornotter und Kreuzotter. Auch zahlreiche Tagfalter leben hier; einige sind gefährdet und stehen auf kroatischen und europäischen Roten Listen."]],
    ["Zavratnica", ["Zavratnica ist eine geschützte Landschaft und eine der schönsten Buchten der kroatischen Küste. Sie entstand als überflutetes Wildbachtal mit etwa 100 Meter hohen Canyonwänden, rund 900 Meter lang und 50 bis 150 Meter breit.", "Zu Beginn des 20. Jahrhunderts wurden ein oberer Weg mit Aussichtspunkt und eine Promenade am Meer angelegt. Blaues Meer, grauer Velebit-Stein und spärliche Vegetation bilden ein eindrucksvolles Bild, das Reisende und Künstler seit Langem anzieht.", "Anfahrt: Zavratnica erreicht man von Jablanac in etwa einer halben Stunde zu Fuß entlang des Meeres oder über einen Wanderweg aus dem Dorf Zavratnica."]],
    ["Dabri und die Dabarski kukovi", ["Dabri gehören zu den geomorphologisch und landschaftlich interessantesten Bereichen des mittleren Velebit. Es handelt sich um eine Reihe von Karstsenken, Buchten und Tälern, darunter Crni Dabar, Ravni Dabar, Došen Dabar und die Dulibe-Täler.", "Früher waren diese Orte seltene dauerhafte Siedlungen auf dem Velebit. Über ihnen erheben sich die Dabarski kukovi, eines der erkennbaren Motive des Gebirges. In der Nähe von Ravni Dabar befindet sich ein Klettergebiet für Sportklettern.", "Anfahrt: Auf der Straße Baške Oštarije - Karlobag biegt man nach 8 km Richtung Ledenik ab und fährt anschließend etwa 5 km auf einer Schotterstraße Richtung Štirovača."]],
    ["Historische Straßen des Velebit", ["Über Jahrhunderte verband Velebit die Küste mit dem Hinterland von Lika. Im 18. und 19. Jahrhundert ließ die Habsburgermonarchie mehrere wichtige Straßen über das Gebirge für Handel und Verkehr bauen.", "Diese Straßen wurden mit steinernen Unterbauten, Stützmauern und Entwässerung gebaut, um Regen und Bora standzuhalten. Wegen ihrer Erhaltung und historischen Bedeutung sind einige als Kulturgut der Republik Kroatien geschützt."]],
    ["Straße Terezijana", ["Die Terezijana wurde 1786 gebaut, um Gospić mit dem Freihafen Karlobag zu verbinden und die ältere Karolina-Straße zu ersetzen. Den Bau ordnete Kaiser Joseph II. an; benannt wurde die Straße nach Maria Theresia.", "Seit 2007 ist die Terezijana geschütztes Kulturgut. Ein Teil der Trasse ist als Lehrpfad für Fußgänger eingerichtet und zeigt auf nur drei Kilometern zwei Gesichter des Velebit.", "Anfahrt: Der Lehrpfad beginnt in Baške Oštarije hinter der alten Schule und endet oberhalb des Dorfes Konjsko. Er ist ausschließlich für Fußgänger bestimmt."]],
    ["Premužić-Weg", ["Der Premužić-Weg ist ein 57 km langer Wanderweg, der die Gipfelbereiche des nördlichen und mittleren Velebit verbindet. Benannt ist er nach seinem Planer Ante Premužić, einem bekannten Erbauer von Wegen und Straßen am Velebit.", "Er wurde zwischen 1930 und 1933 gebaut und erschloss einige der schönsten und zuvor schwer zugänglichen Teile des Gebirges. Wegen der geringen Steigungen eignet er sich auch für Besucher ohne Erfahrung mit anspruchsvollen Bergtouren. Seit 2009 ist er als Kulturgut geschützt.", "Anfahrt: Der Weg kann aus Richtung Baške Oštarije oder Zavižan begonnen werden. Detaillierte Informationen bieten der Naturpark Velebit und der Nationalpark Nördlicher Velebit."]],
    ["Majstorska-Straße", ["Die Majstorska-Straße, ebenfalls geschütztes Kulturgut, wurde gebaut, um die Verbindung nach Dalmatien auf der Strecke Sveti Rok - Mali Alan - Obrovac zu verkürzen. Der Bau begann 1825 unter der Leitung von Josip Kajetan Knežić.", "Die 41 km lange Straße wurde 1832 fertiggestellt. Ihre Serpentinenführung über den steilen Velebit-Hang war eine bedeutende Leistung des Straßenbaus. Sie führt nahe an Tulove grede vorbei, einer eindrucksvollen Gruppe von Kalkfelsen und Türmen."]],
    ["Leben auf dem Velebit", ["Über Jahrhunderte lebten die Menschen am Velebit vor allem von der Viehzucht. Sommerliche Trockenheit und Wassermangel führten dazu, dass Hirten von der Küste und aus Lika saisonal zu Bergsiedlungen zogen, wo sie Herden hüteten, Felder bestellten sowie Heu und Brennholz vorbereiteten.", "Die halbnomadische Viehwirtschaft ist heute verschwunden und viele Weiden des Velebit sind verlassen. Ihre Spuren bleiben in Sommerhütten, Trockenmauern und Erinnerungen an eine frühere Lebensweise."]],
    ["Traditionelles Bauen", ["Die traditionelle Architektur des Velebit ist schlicht und an das Hirtenleben angepasst. Trockenmauern entstanden durch das Freiräumen schwieriger Flächen und das geschickte Stapeln von Steinen ohne Bindemittel.", "Die meisten Velebit-Hütten wurden aus Stein gebaut, rechteckig angelegt, oft ohne Fenster, mit einer Feuerstelle in der Mitte und Viehpferchen in der Nähe. Dieselbe Schlichtheit zeigt sich in Kapellen und kleinen Kirchen."]],
    ["Mirila", ["Mirila sind steinerne Totenmale an Velebit-Pässen und Bergwegen zur Küste. Sie entstanden, wenn ein in den Bergen Verstorbener zum Friedhof der Küstengemeinde getragen wurde.", "Am ersten Ruheplatz wurde der Körper auf den Boden gelegt und mit zwei Steinplatten gemessen. Für die Menschen am Velebit waren Mirila wichtiger als Gräber, weil man glaubte, dass nur der Körper begraben sei, die Seele aber am Mirilo bleibe.", "Anfahrt: In der Nähe von Starigrad-Paklenica gibt es zwei Lehrpfade mit eingerichteten Mirila-Standorten."]],
    ["Besuchen Sie uns", ["Velebit bietet außergewöhnlich vielfältige Besuchsmöglichkeiten: felsige Gipfel, Höhlenhallen, Karstflüsse, Meeresbuchten, Lehrpfade und fachkundige Führungen.", "Aktive Reisende können zwischen Wanderwegen, Spazierwegen, Radfahren, Klettern, speläologischen Stätten, Rafting und Kanufahrten auf Zrmanja und Krupa wählen.", "Weitere Informationen: www.velebit.hr"]],
    ["Verhaltensregeln im Naturpark Velebit", ["Der Naturpark Velebit steht unter gesetzlichem Schutz. Besucher werden gebeten, die ursprünglichen biologischen, geologischen und kulturellen Werte des Gebietes zu bewahren.", "Beschädigen Sie keine Bäume, Sträucher, Blumen oder andere Pflanzen. Tiere dürfen nicht erschreckt, gestört, gefangen, gejagt oder getötet werden. Waffen, das Beschädigen von Nestern und Höhlen sowie Campen oder Feuer außerhalb ausgewiesener Plätze sind verboten.", "Abfälle gehören nur an markierte Stellen. Gewässer und Quellen dürfen nicht verschmutzt, Kulturdenkmäler nicht beschädigt werden. Kommerzielle Foto- und Filmaufnahmen sind nur mit Genehmigung des Naturparks erlaubt."]],
  ],
  fr: [
    ["Informations générales sur le Parc naturel du Velebit", ["Le Velebit est la plus grande montagne de Croatie. Il s'étire en un arc légèrement courbé depuis le col de Vratnik jusqu'à la vallée de la Zrmanja, sur environ 145 kilomètres. La chaîne est généralement divisée en Velebit nord, central, sud et sud-est.", "À l'ouest, elle est bordée par le canal du Velebit dans l'Adriatique, et à l'est par le plateau de Lika-Gacka. Malgré son aspect imposant, le Velebit n'est pas très élevé; son sommet le plus haut est le Vaganski vrh, à 1 757 mètres."]],
    ["Protection du Velebit", ["En raison de ses valeurs exceptionnelles de relief, de végétation et de paysage, plusieurs parties du Velebit sont protégées par différentes catégories de conservation. Le Parc national de Paklenica a été créé en 1949, tandis que les zones les plus précieuses du nord et du centre du Velebit ont été classées en réserves strictes et spéciales.", "En 1978, le Velebit a rejoint le réseau mondial des réserves de biosphère de l'UNESCO, et en 1981 toute la montagne a été déclarée parc naturel. Le Parc national du Velebit Nord a été créé en 1999. C'est pourquoi le Velebit est souvent appelé le parc des parcs nationaux.", "Parmi les curiosités naturelles figurent les grottes de Cerovac, des formes géomorphologiques comme Kiza, Tulove grede et Stapina, ainsi que les rivières et sources de la Zrmanja, de la Krupa et de la Krnjeza."]],
    ["Climat", ["Le Velebit se trouve au contact des climats méditerranéen et alpin-dinarique. Les courants d'air du continent et de l'Adriatique s'y rencontrent, ce qui provoque de fortes variations du climat sur de courtes distances.", "Du canal côtier à la crête, les influences subméditerranéennes, montagnardes et continentales se succèdent. Le phénomène le plus connu est la bora, un puissant vent du nord-est qui souffle du Velebit vers la mer."]],
    ["Régions et zones", ["Le Velebit traverse trois régions paysagères de Croatie. Son bord occidental appartient à la région côtière Kvarner-Velebit, où le relief rocheux offre de larges vues sur l'Adriatique.", "Le versant oriental s'avance vers la Lika comme une muraille boisée de hêtres et de sapins. La zone sommitale est marquée par un relief de haute montagne, des sculptures karstiques, des sommets calcaires, des dolines boisées et des prairies alpines."]],
    ["Phénomènes karstiques", ["Le Velebit fait partie du haut karst de la plateforme carbonatée dinarique. Sommets, canyons, poljés, failles, grottes, gouffres et autres formes karstiques, façonnés par les forces tectoniques et l'eau, donnent à la montagne son caractère reconnaissable.", "Selon la classification CORINE, 89 types d'habitats sont présents dans la région du Velebit. Les plus importants sont les forêts, pentes rocheuses et karstiques, prairies, pâturages, falaises, rivières, tourbières, grottes et milieux souterrains."]],
    ["Biodiversité et flore", ["La diversité des conditions naturelles du Velebit a créé des habitats pour de nombreuses espèces endémiques et reliques croates et velebitiennes. Les habitats des falaises, éboulis, formes karstiques et cours d'eau de la Zrmanja, de la Krupa et de la Krnjeza sont particulièrement importants.", "La flore est extrêmement riche, avec environ 1 854 espèces végétales, dont des endémiques comme Degenia velebitica, la sibirée croate et la campanule du Velebit. La végétation va du maquis littoral aux forêts de hêtres, sapins et épicéas des altitudes plus élevées."]],
    ["Grottes de Cerovac", ["Les grottes de Cerovac comptent parmi les sites spéléologiques les plus importants du Velebit et de Croatie. Le complexe comprend la grotte inférieure, moyenne et supérieure, avec environ quatre kilomètres de galeries explorées; les premiers 700 mètres des grottes inférieure et supérieure sont aménagés pour la visite.", "Les grottes sont riches en vestiges archéologiques et en restes d'ours des cavernes. L'eau qui goutte forme encore des concrétions; les visiteurs ne doivent donc pas toucher les ornements. Les visites sont possibles d'avril à novembre sur réservation, et en hiver pour les grands groupes.", "Accès: les grottes de Cerovac se trouvent à 4 km de Gračac sur la route de Knin. Depuis l'autoroute, prendre la sortie Sveti Rok; Gračac est à environ 25 km."]],
    ["Faune", ["Les anciennes forêts de hêtres et de sapins du Velebit abritent d'importantes populations de grands carnivores: loup, ours, lynx et chat sauvage. Parmi les oiseaux, on trouve le grand tétras, la gélinotte, l'aigle royal, des chouettes, des pics et de nombreuses espèces de montagne.", "Le parc est aussi un habitat pour de nombreux reptiles, dont la vipère ammodyte et la vipère péliade. De nombreux papillons diurnes y vivent également, certains menacés et inscrits sur les listes rouges croates et européennes."]],
    ["Zavratnica", ["Zavratnica est un paysage protégé et l'une des plus belles criques de la côte croate. Elle s'est formée comme une vallée torrentielle submergée, avec des falaises de canyon hautes d'environ 100 mètres, longue d'environ 900 mètres et large de 50 à 150 mètres.", "Au début du XXe siècle, un sentier supérieur avec belvédère et une promenade en bord de mer ont été aménagés. La mer bleue, la pierre grise du Velebit et la végétation clairsemée créent un décor saisissant qui attire voyageurs et artistes depuis longtemps.", "Accès: Zavratnica se rejoint depuis Jablanac par une marche d'environ une demi-heure le long de la mer, ou par un sentier de randonnée depuis le village de Zavratnica."]],
    ["Dabri et les Dabarski kukovi", ["Dabri est l'un des secteurs géomorphologiques et paysagers les plus intéressants du Velebit central. Il s'agit d'une série de dépressions, anses et vallées karstiques, parmi lesquelles Crni Dabar, Ravni Dabar, Došen Dabar et les vallées de Dulibe.", "Ces lieux furent autrefois de rares villages permanents sur le Velebit. Au-dessus d'eux s'élèvent les Dabarski kukovi, l'un des motifs reconnaissables de la montagne. Près de Ravni Dabar se trouve une zone d'escalade sportive.", "Accès: sur la route Baške Oštarije - Karlobag, tourner vers Ledenik après 8 km, puis continuer environ 5 km sur une piste en direction de Štirovača."]],
    ["Routes historiques du Velebit", ["Pendant des siècles, le Velebit a relié la côte à l'arrière-pays de la Lika. Aux XVIIIe et XIXe siècles, la monarchie des Habsbourg a construit plusieurs routes importantes à travers la montagne pour le commerce et le transport.", "Ces routes furent bâties avec des fondations de pierre, des murs de soutènement et un bon drainage afin de résister aux pluies et à la bora. Certaines sont protégées comme patrimoine culturel de la République de Croatie."]],
    ["Route Terezijana", ["La route Terezijana fut construite en 1786 pour relier Gospić au port franc de Karlobag et remplacer l'ancienne route Karolina. Sa construction fut ordonnée par l'empereur Joseph II et elle porte le nom de Marie-Thérèse.", "Depuis 2007, Terezijana est un bien culturel protégé. Une partie du tracé est aménagée en sentier pédagogique pour piétons, remarquable car elle révèle deux visages du Velebit en seulement trois kilomètres.", "Accès: le sentier commence à Baške Oštarije, derrière l'ancienne école, et se termine au-dessus du village de Konjsko. Il est réservé aux piétons."]],
    ["Sentier Premužić", ["Le sentier Premužić est un itinéraire de randonnée de 57 km qui relie les zones sommitales du nord et du centre du Velebit. Il porte le nom de son concepteur Ante Premužić, bâtisseur réputé de chemins et de routes sur le Velebit.", "Construit entre 1930 et 1933, il a ouvert l'accès à certaines des parties les plus belles et autrefois les plus inaccessibles de la montagne. Ses faibles pentes le rendent adapté même aux visiteurs peu habitués aux randonnées exigeantes. Depuis 2009, il est protégé comme patrimoine culturel.", "Accès: le sentier peut être abordé depuis Baške Oštarije ou Zavižan. Des informations détaillées sont disponibles auprès du Parc naturel du Velebit et du Parc national du Velebit Nord."]],
    ["Route Majstorska", ["La route Majstorska, également protégée comme patrimoine culturel, fut construite pour raccourcir la route vers la Dalmatie entre Sveti Rok, Mali Alan et Obrovac. Les travaux commencèrent en 1825 sous la direction de Josip Kajetan Knežić.", "Cette route de 41 km fut achevée en 1832. Son tracé en lacets sur la pente abrupte du Velebit représentait une prouesse de construction routière. Elle passe près de Tulove grede, un ensemble spectaculaire de falaises et tours calcaires."]],
    ["Vie sur le Velebit", ["Pendant des siècles, les habitants du Velebit ont vécu surtout de l'élevage. Les sécheresses d'été et le manque d'eau conduisaient les bergers de la côte et de la Lika à monter saisonnièrement vers les habitats d'altitude, où ils gardaient les troupeaux, cultivaient les champs et préparaient foin et bois.", "Le pastoralisme semi-nomade a disparu aujourd'hui et les pâturages du Velebit sont largement déserts. Ses traces demeurent dans les habitats d'été, les murs de pierre sèche et la mémoire d'un ancien mode de vie."]],
    ["Construction traditionnelle", ["L'architecture traditionnelle du Velebit est simple et adaptée à la vie pastorale. Les murs de pierre sèche sont nés du défrichage de terrains difficiles et de l'empilement habile des pierres sans liant.", "La plupart des habitations du Velebit étaient construites en pierre, de plan rectangulaire, souvent sans fenêtres, avec un foyer central et des enclos pour le bétail à proximité. La même simplicité se retrouve dans les chapelles et petites églises."]],
    ["Mirila", ["Les mirila sont des monuments funéraires en pierre placés le long des cols et chemins de montagne menant à la côte. Ils étaient créés lorsqu'une personne décédée en montagne était portée vers le cimetière de sa paroisse côtière.", "Au premier lieu de repos, le corps était posé au sol et mesuré par deux dalles de pierre. Pour les habitants du Velebit, les mirila étaient plus importants que les tombes, car on croyait que seul le corps était enterré, tandis que l'âme restait au mirilo.", "Accès: près de Starigrad-Paklenica se trouvent deux sentiers pédagogiques avec des sites de mirila aménagés."]],
    ["Visitez-nous", ["Le Velebit offre une grande diversité de visites: sommets rocheux, salles souterraines, rivières karstiques, criques marines, sentiers pédagogiques et visites guidées.", "Les voyageurs actifs peuvent choisir entre randonnée, promenades, cyclisme, escalade, sites spéléologiques, rafting et canoë sur la Zrmanja et la Krupa.", "Plus d'informations: www.velebit.hr"]],
    ["Règles de conduite dans le Parc naturel du Velebit", ["Le Parc naturel du Velebit est protégé par la loi. Les visiteurs sont invités à préserver les valeurs biologiques, géologiques et culturelles originelles du territoire.", "Ne détériorez pas les arbres, arbustes, fleurs ou autres plantes. Ne faites pas peur aux animaux, ne les dérangez pas, ne les capturez pas, ne les chassez pas et ne les tuez pas. Les armes, la détérioration des nids et cavités, le camping et les feux hors des zones autorisées sont interdits.", "Déposez les déchets uniquement aux endroits prévus, ne polluez pas les cours d'eau ou les sources, et n'endommagez pas les monuments culturels. Les prises de vue commerciales ne sont autorisées qu'avec l'accord du Parc naturel."]],
  ],
  it: [
    ["Informazioni generali sul Parco naturale del Velebit", ["Il Velebit è la montagna più grande della Croazia. Si estende in un arco leggermente curvo dal passo di Vratnik alla valle della Zrmanja, per circa 145 chilometri. La catena viene di solito divisa in Velebit settentrionale, centrale, meridionale e sud-orientale.", "A ovest è delimitata dal canale del Velebit nel mare Adriatico, a est dall'altopiano di Lika-Gacka. Pur avendo un aspetto imponente, il Velebit non è particolarmente alto; la cima più elevata è il Vaganski vrh, con 1.757 metri."]],
    ["Protezione del Velebit", ["Per i suoi eccezionali valori geomorfologici, vegetazionali e paesaggistici, diverse parti del Velebit sono protette con varie categorie di tutela. Il Parco nazionale di Paklenica fu istituito nel 1949, mentre le zone più preziose del Velebit settentrionale e centrale furono dichiarate riserve rigorose e speciali.", "Nel 1978 il Velebit entrò nella rete mondiale UNESCO delle riserve della biosfera e nel 1981 l'intera montagna fu dichiarata parco naturale. Il Parco nazionale del Velebit Settentrionale fu istituito nel 1999. Per questo il Velebit è spesso chiamato il parco dei parchi nazionali.", "Tra le principali attrazioni naturali vi sono le grotte di Cerovac, forme geomorfologiche come Kiza, Tulove grede e Stapina, e i fiumi e le sorgenti di Zrmanja, Krupa e Krnjeza."]],
    ["Clima", ["Il Velebit si trova al contatto tra il clima mediterraneo e quello alpino-dinarico. Qui si incontrano correnti d'aria continentali e adriatiche, perciò tempo e clima cambiano molto su brevi distanze.", "Dal canale costiero alla cresta si alternano influenze submediterranee, montane e continentali. Il fenomeno più noto della regione è la bora, un forte vento da nord-est che soffia dal Velebit verso il mare."]],
    ["Regioni e zone", ["Il Velebit attraversa tre regioni paesaggistiche della Croazia. Il margine occidentale appartiene alla regione costiera del Quarnero-Velebit, dove il terreno roccioso apre ampie viste sull'Adriatico.", "Il versante orientale raggiunge la Lika come un bastione boscoso di faggi e abeti. La fascia sommitale è segnata da rilievi d'alta montagna, forme carsiche, cime calcaree, doline boscose e prati montani."]],
    ["Fenomeni carsici", ["Il Velebit fa parte dell'alto carso della piattaforma carbonatica dinarica. Cime, canyon, polje, faglie, grotte, pozzi e altre forme carsiche, create da forze tettoniche e dall'acqua, conferiscono alla montagna il suo carattere particolare.", "Secondo la classificazione CORINE, nell'area del Velebit sono presenti 89 tipi di habitat. I più importanti includono foreste, pendii rocciosi e carsici con arbusti, prati, pascoli, rocce, fiumi, torbiere, grotte e ambienti sotterranei."]],
    ["Biodiversità e flora", ["Le diverse condizioni naturali del Velebit hanno creato habitat per numerose specie endemiche e relitte croate e velebitiche. Sono particolarmente importanti gli habitat su rocce, ghiaioni, forme carsiche e lungo i corsi d'acqua di Zrmanja, Krupa e Krnjeza.", "La flora è straordinariamente ricca, con circa 1.854 specie vegetali, tra cui endemismi come Degenia velebitica, la sibirea croata e la campanula del Velebit. La vegetazione va dalla macchia costiera ai boschi di faggio, abete e abete rosso delle quote più alte."]],
    ["Grotte di Cerovac", ["Le grotte di Cerovac sono tra i siti speleologici più importanti del Velebit e della Croazia. Il complesso comprende la grotta inferiore, media e superiore, con circa quattro chilometri di gallerie esplorate; i primi 700 metri delle grotte inferiore e superiore sono attrezzati per la visita.", "Le grotte sono ricche di reperti archeologici e resti dell'orso delle caverne. L'acqua che gocciola continua a formare concrezioni, quindi le decorazioni non devono essere toccate. Le visite sono possibili da aprile a novembre su prenotazione, e in inverno per gruppi più numerosi.", "Come arrivare: le grotte di Cerovac si trovano a 4 km da Gračac sulla strada per Knin. Dall'autostrada si esce a Sveti Rok; Gračac dista circa 25 km."]],
    ["Fauna", ["Gli antichi boschi di faggio e abete del Velebit ospitano importanti popolazioni di grandi carnivori: lupo, orso, lince e gatto selvatico. Tra gli uccelli si trovano gallo cedrone, francolino di monte, aquila reale, gufi, picchi e molte specie montane.", "Il parco è anche habitat di numerosi rettili, tra cui vipera dal corno e marasso. Vi vivono anche molte farfalle diurne, alcune minacciate e inserite nelle liste rosse croate ed europee."]],
    ["Zavratnica", ["Zavratnica è un paesaggio protetto e una delle baie più belle della costa croata. Si è formata come valle torrentizia sommersa, con pareti di canyon alte circa 100 metri, lunga circa 900 metri e larga tra 50 e 150 metri.", "All'inizio del XX secolo furono realizzati un sentiero superiore con belvedere e una passeggiata lungo il mare. Il mare blu, la pietra grigia del Velebit e la vegetazione rada creano un paesaggio suggestivo che da tempo attira viaggiatori e artisti.", "Come arrivare: Zavratnica si raggiunge da Jablanac con una passeggiata di circa mezz'ora lungo il mare, oppure con un sentiero escursionistico dal villaggio di Zavratnica."]],
    ["Dabri e i Dabarski kukovi", ["Dabri è una delle aree geomorfologiche e paesaggistiche più interessanti del Velebit centrale. È una serie di depressioni carsiche, conche e valli, tra cui Crni Dabar, Ravni Dabar, Došen Dabar e le valli di Dulibe.", "Un tempo questi luoghi erano rari insediamenti permanenti sul Velebit. Sopra di essi si innalzano i Dabarski kukovi, uno dei motivi più riconoscibili della montagna. Vicino a Ravni Dabar si trova un'area per l'arrampicata sportiva.", "Come arrivare: sulla strada Baške Oštarije - Karlobag, dopo 8 km si svolta verso Ledenik e si prosegue per circa 5 km su strada sterrata verso Štirovača."]],
    ["Strade storiche del Velebit", ["Per secoli il Velebit ha collegato la costa con l'entroterra della Lika. Nei secoli XVIII e XIX la monarchia asburgica costruì diverse strade importanti attraverso la montagna per il commercio e i trasporti.", "Queste strade furono costruite con fondazioni in pietra, muri di sostegno e buon drenaggio per resistere alla pioggia e alla bora. Per la loro conservazione e valore storico, alcune sono protette come patrimonio culturale della Repubblica di Croazia."]],
    ["Strada Terezijana", ["La Terezijana fu costruita nel 1786 per collegare Gospić con il porto franco di Karlobag e sostituire la vecchia strada Karolina. La costruzione fu ordinata dall'imperatore Giuseppe II e la strada prese il nome da Maria Teresa.", "Dal 2007 la Terezijana è patrimonio culturale protetto. Una parte del tracciato è stata trasformata in sentiero didattico per pedoni, interessante perché in soli tre chilometri mostra due volti del Velebit.", "Come arrivare: il sentiero inizia a Baške Oštarije, dietro la vecchia scuola, e termina sopra il villaggio di Konjsko. È destinato esclusivamente ai pedoni."]],
    ["Sentiero Premužić", ["Il sentiero Premužić è un itinerario escursionistico di 57 km che collega le zone sommitali del Velebit settentrionale e centrale. Prende il nome dal progettista Ante Premužić, noto costruttore di vie e sentieri sul Velebit.", "Costruito tra il 1930 e il 1933, aprì l'accesso ad alcune delle parti più belle e prima difficilmente raggiungibili della montagna. Grazie alle pendenze moderate è adatto anche a visitatori non abituati a escursioni impegnative. Dal 2009 è protetto come patrimonio culturale.", "Come arrivare: il sentiero può essere affrontato da Baške Oštarije o da Zavižan. Informazioni dettagliate sono disponibili presso il Parco naturale del Velebit e il Parco nazionale del Velebit Settentrionale."]],
    ["Strada Majstorska", ["La strada Majstorska, anch'essa patrimonio culturale protetto, fu costruita per abbreviare il percorso verso la Dalmazia tra Sveti Rok, Mali Alan e Obrovac. I lavori iniziarono nel 1825 sotto la guida di Josip Kajetan Knežić.", "La strada, lunga 41 km, fu completata nel 1832. Il suo tracciato a tornanti sul ripido pendio del Velebit rappresentò un'importante conquista dell'ingegneria stradale. Passa vicino a Tulove grede, un imponente gruppo di rocce e torri calcaree."]],
    ["Vita sul Velebit", ["Per secoli gli abitanti del Velebit vissero soprattutto di allevamento. La siccità estiva e la mancanza d'acqua spingevano i pastori della costa e della Lika a spostarsi stagionalmente verso gli insediamenti montani, dove custodivano greggi, coltivavano campi e preparavano fieno e legna.", "La pastorizia seminomade oggi è scomparsa e molti pascoli del Velebit sono abbandonati. Le sue tracce restano negli alloggi estivi, nei muri a secco e nella memoria di un antico modo di vivere."]],
    ["Costruzione tradizionale", ["L'architettura tradizionale del Velebit è semplice e adattata alla vita pastorale. I muri a secco nacquero dal dissodamento di terreni difficili e dall'abile sovrapposizione di pietre senza malta.", "La maggior parte delle abitazioni del Velebit era costruita in pietra, con pianta rettangolare, spesso senza finestre, con focolare centrale e recinti per il bestiame accanto. La stessa semplicità si ritrova in cappelle e piccole chiese."]],
    ["Mirila", ["I mirila sono monumenti funerari in pietra posti lungo i passi e i sentieri montani che conducono alla costa. Nascevano quando una persona morta in montagna veniva trasportata al cimitero della parrocchia costiera.", "Nel primo luogo di sosta, il corpo veniva deposto a terra e misurato con due lastre di pietra. Per gli abitanti del Velebit i mirila erano più importanti delle tombe, perché si credeva che nella tomba fosse sepolto solo il corpo, mentre l'anima restava al mirilo.", "Come arrivare: vicino a Starigrad-Paklenica ci sono due sentieri didattici con siti di mirila sistemati."]],
    ["Visitateci", ["Il Velebit offre possibilità di visita estremamente varie: cime rocciose, sale sotterranee, fiumi carsici, baie marine, sentieri didattici e visite guidate.", "I viaggiatori attivi possono scegliere tra sentieri escursionistici, passeggiate, ciclismo, arrampicata, siti speleologici, rafting e canoa sulla Zrmanja e sulla Krupa.", "Maggiori informazioni: www.velebit.hr"]],
    ["Regole di comportamento nel Parco naturale del Velebit", ["Il Parco naturale del Velebit è protetto dalla legge. I visitatori sono invitati a preservare i valori biologici, geologici e culturali originari dell'area.", "Non danneggiate alberi, arbusti, fiori o altre piante. Non spaventate, disturbate, catturate, cacciate o uccidete animali. È vietato portare armi, danneggiare nidi e tane, campeggiare o accendere fuochi fuori dalle aree autorizzate.", "Gettate i rifiuti solo nei luoghi indicati, non inquinate corsi d'acqua o sorgenti e non danneggiate monumenti culturali. Riprese fotografiche e video commerciali sono consentite solo con il permesso del Parco naturale."]],
  ],
};

for (const [locale, overrides] of Object.entries(translatedOverrides)) {
  locales[locale].sections = overrides.map(([title, body]) => ({ title, body }));
}

const contact = {
  hr: [
    "Javna ustanova Park prirode Velebit",
    "Kaniža gospićka 4b, 53000 Gospić",
    "tel. +385 53 560 450, +385 53 560 455",
    "e-mail: velebit@pp-velebit.hr",
    "www.velebit.hr",
  ],
  en: [
    "Public Institution Velebit Nature Park",
    "Kaniža gospićka 4b, 53000 Gospić, Croatia",
    "tel. +385 53 560 450, +385 53 560 455",
    "e-mail: velebit@pp-velebit.hr",
    "www.velebit.hr",
  ],
  de: [
    "Öffentliche Einrichtung Naturpark Velebit",
    "Kaniža gospićka 4b, 53000 Gospić, Kroatien",
    "Tel. +385 53 560 450, +385 53 560 455",
    "E-Mail: velebit@pp-velebit.hr",
    "www.velebit.hr",
  ],
  fr: [
    "Institution publique Parc naturel du Velebit",
    "Kaniža gospićka 4b, 53000 Gospić, Croatie",
    "tél. +385 53 560 450, +385 53 560 455",
    "e-mail: velebit@pp-velebit.hr",
    "www.velebit.hr",
  ],
  it: [
    "Ente pubblico Parco naturale del Velebit",
    "Kaniža gospićka 4b, 53000 Gospić, Croazia",
    "tel. +385 53 560 450, +385 53 560 455",
    "e-mail: velebit@pp-velebit.hr",
    "www.velebit.hr",
  ],
};

const assetsDir = path.resolve("public/brochures/assets");
const logoImage = "velebit-original-02-b083a3fa8ff8.jpeg";
const sectionImages = [
  "velebit-original-39-ea079ff04eda.jpeg",
  "velebit-original-03-9be3741c7c6a.jpeg",
  "velebit-original-04-94e405be8f08.jpeg",
  "velebit-original-06-a215f06f5bc0.jpeg",
  "velebit-original-07-1d4cb7c9c76e.jpeg",
  "velebit-original-09-81d57c3861f6.jpeg",
  "velebit-original-13-2c582b655ddd.jpeg",
  "velebit-original-37-cf1001acbf5f.jpeg",
  "velebit-original-17-7578fd5273b1.jpeg",
  "velebit-original-20-7779d4fbe1c6.jpeg",
  "velebit-original-21-a052bf49fa13.jpeg",
  "velebit-original-24-885becba5671.jpeg",
  "velebit-original-25-3d2077b9ecd2.jpeg",
  "velebit-original-28-dca5b6aa6d0c.jpeg",
  "velebit-original-30-47f92889671e.jpeg",
  "velebit-original-33-8a88ee37a946.jpeg",
  "velebit-original-35-a615413c8bf6.jpeg",
  "velebit-original-36-9dd4ebfa4245.jpeg",
  "velebit-original-38-60abf8e77934.jpeg",
];

for (const brochure of Object.values(locales)) {
  brochure.sections = brochure.sections.map((section, index) => ({
    ...section,
    image: sectionImages[index],
  }));
}

function addFooter(doc, locale, page) {
  doc.fontSize(8).fillColor("#6b5f52");
  doc.text(`${locales[locale].title} · ${page}`, 54, doc.page.height - 42, {
    align: "center",
    width: doc.page.width - 108,
  });
  doc.fillColor("#1f1a16");
}

function ensureSpace(doc, minHeight) {
  if (doc.y + minHeight > doc.page.height - 72) {
    doc.addPage();
  }
}

function writeParagraph(doc, text) {
  ensureSpace(doc, 72);
  doc.font("Regular").fontSize(10.5).fillColor("#2f2923");
  doc.text(text, {
    align: "justify",
    lineGap: 3,
  });
  doc.moveDown(0.7);
}

function writeSectionImage(doc, image) {
  if (!image) return;

  const imagePath = path.join(assetsDir, image);
  if (!fs.existsSync(imagePath)) return;

  ensureSpace(doc, 320);

  const x = doc.page.margins.left;
  const width = doc.page.width - doc.page.margins.left - doc.page.margins.right;
  const y = doc.y;
  const height = 260;

  doc.roundedRect(x - 1, y - 1, width + 2, height + 2, 8).fill("#ffffff");
  doc.image(imagePath, x, y, {
    fit: [width, height],
    align: "center",
    valign: "center",
  });
  doc.roundedRect(x - 1, y - 1, width + 2, height + 2, 8).strokeColor("#d7c7b2").lineWidth(0.6).stroke();
  doc.y = y + height + 13;
  doc.fillColor("#1f1a16");
}

function generateBrochure(locale, brochure) {
  fs.mkdirSync(outputDir, { recursive: true });

  const doc = new PDFDocument({
    size: "A4",
    margins: { top: 54, bottom: 64, left: 54, right: 54 },
    bufferPages: true,
    info: {
      Title: `${brochure.title} - ${brochure.subtitle}`,
      Author: "Stars Peak",
      Subject: brochure.subtitle,
      Keywords: "Velebit, Croatia, Nature Park, Stars Peak",
    },
  });

  doc.registerFont("Regular", fontRegular);
  doc.registerFont("Bold", fontBold);

  const outputPath = path.join(outputDir, brochure.file);
  if (fs.existsSync(outputPath)) {
    fs.unlinkSync(outputPath);
  }
  const stream = fs.createWriteStream(outputPath);
  doc.pipe(stream);

  doc.rect(0, 0, doc.page.width, doc.page.height).fill("#f5efe6");
  const logoPath = path.join(assetsDir, logoImage);
  if (fs.existsSync(logoPath)) {
    doc.image(logoPath, 54, 62, { width: 50, height: 50 });
  }
  doc.fillColor("#2b2118").font("Bold").fontSize(46).text(brochure.title, 54, 138, {
    width: doc.page.width - 108,
  });
  doc.moveDown(0.2);
  doc.font("Regular").fontSize(18).fillColor("#6b4f2a").text(brochure.subtitle);
  doc.moveDown(1.5);
  doc.fontSize(11).fillColor("#4c433a").text(brochure.source, { width: 420 });
  doc.moveDown(4);
  doc.font("Bold").fontSize(12).fillColor("#2b2118").text(brochure.labels.contents);
  doc.moveDown(0.7);
  doc.font("Regular").fontSize(10).fillColor("#4c433a");
  brochure.sections.forEach((section, index) => {
    doc.text(`${index + 1}. ${section.title}`, { lineGap: 2 });
  });

  doc.addPage();
  brochure.sections.forEach((section, index) => {
    ensureSpace(doc, 110);
    doc.font("Bold").fontSize(16).fillColor("#2b2118");
    doc.text(`${index + 1}. ${section.title}`, { lineGap: 2 });
    doc.moveDown(0.4);
    writeSectionImage(doc, section.image);
    section.body.forEach((paragraph) => writeParagraph(doc, paragraph));
    doc.moveDown(0.6);
  });

  ensureSpace(doc, 150);
  doc.font("Bold").fontSize(16).fillColor("#2b2118").text(brochure.labels.contact);
  doc.moveDown(0.5);
  doc.font("Regular").fontSize(10.5).fillColor("#2f2923").text(contact[locale].join("\n"), {
    lineGap: 3,
  });
  doc.moveDown(1);
  doc.font("Regular").fontSize(9).fillColor("#6b5f52").text(
    `${brochure.labels.publisher}: JU Park prirode Velebit. Fotografije i izvorni tekst: arhiva JU Park prirode Velebit.`
  );

  const range = doc.bufferedPageRange();
  for (let i = range.start; i < range.start + range.count; i += 1) {
    doc.switchToPage(i);
    addFooter(doc, locale, i + 1);
  }

  doc.end();

  return new Promise((resolve, reject) => {
    stream.on("finish", () => resolve(outputPath));
    stream.on("error", reject);
  });
}

for (const [locale, brochure] of Object.entries(locales)) {
  const outputPath = await generateBrochure(locale, brochure);
  console.log(`Generated ${outputPath}`);
}
