import type { Locale } from "./config";
import type { SeoTopicPageKey } from "@/config/site-routes";

export type TopicPageBlock = { title: string; body: string };
export type TopicFaq = { question: string; answer: string };
export type TopicPageContent = {
  title: string;
  intro: string;
  blocks: TopicPageBlock[];
  pointsLabel: string;
  points: string[];
  faqTitle: string;
  faqs: TopicFaq[];
  ctaLead: string;
};

const byLocale: Record<Locale, Record<SeoTopicPageKey, TopicPageContent>> = {
  en: {
    darkSkyStargazing: {
      title: "Stargazing on Velebit",
      intro:
        "Above Bačić Duliba, nights stay dark enough for the Milky Way — a natural dark sky accommodation Croatia guests seek when coastal glare is left behind. Stars Peak is a stargazing cabin on Velebit where slow evenings under open sky are part of the stay.",
      blocks: [
        {
          title: "Dark skies, quiet nights",
          body: "With little light pollution on the ridge, stars appear quickly after dusk. Bring a blanket to the terrace, step a few metres from the house, and let your eyes adjust — the mountain does the rest.",
        },
        {
          title: "Cabin evenings under open sky",
          body: "Come back inside to fireplace light, or stay out until the ridge silhouette sharpens against the sky. Either way, the night is part of the stay — not an afterthought at this Velebit base.",
        },
        {
          title: "Pair stars with hiking days",
          body: "Hike Bačić Kuk by day, watch the Adriatic horizon fade at sunset, then wait for the first bright planets. Summit, sea and stargaze remain the rhythm of Stars Peak.",
        },
      ],
      pointsLabel: "What makes nights special here",
      points: [
        "Dark sky conditions with low light pollution above Bačić Duliba",
        "Quiet terrace and outdoor spaces for stargazing after dusk",
        "Milky Way potential on clear, moonless summer nights",
        "Fireplace warmth when mountain air turns cool",
        "A private stargazing cabin between Velebit peaks and the Adriatic",
      ],
      faqTitle: "Stargazing FAQ",
      faqs: [
        {
          question: "Is Stars Peak suitable for stargazing?",
          answer:
            "Yes. Low light pollution above Bačić Duliba keeps the ridge dark enough for naked-eye stars and, on clear moonless nights, a strong Milky Way arc — ideal dark sky accommodation Croatia travellers look for.",
        },
        {
          question: "When is the best time for night skies?",
          answer:
            "Late spring through early autumn brings the warmest evenings and longer dark hours after dusk. New-moon windows and dry, clear nights after a front passes are usually the best for deep sky views.",
        },
        {
          question: "Do I need special equipment?",
          answer:
            "No. Eyes and patience are enough for constellation and Milky Way nights. A red torch, warm layers and a tripod help if you want longer looks or simple night photos from the terrace.",
        },
        {
          question: "Can I stargaze from the cabin terrace?",
          answer:
            "Yes. The terrace and nearby open ground give clear sightlines toward the ridge and sky. Step a few metres from house lights, let your eyes adapt, and the dark sky of Velebit does the work.",
        },
      ],
      ctaLead: "Plan a stay for clear mountain nights under Velebit skies.",
    },
    velebitHikingRetreat: {
      title: "Hiking retreat on Velebit",
      intro:
        "Stars Peak is hiking accommodation on Velebit built for trail days and quiet cabin evenings — routes leave from the door toward Bačić Kuk, forest paths and longer ridge days. Use it as a Premužić trail accommodation base for southern sections, Via Adriatica context and Adriatic day trips to Zavratnica.",
      blocks: [
        {
          title: "Trails from the cabin door",
          body: "Marked paths climb through beech and pine toward Bačić Kuk and the rocky Dabarski Kukovi line. You can start a proper mountain day without driving — boots on, map ready, Velebit underfoot.",
        },
        {
          title: "Premužić, ridge days and Via Adriatica",
          body: "Southern Premužić Trail approaches and ridge sections sit within reach for a full hiking day from Baške Oštarije or Skropovac. Stars Peak also sits in the wider Via Adriatica story — a mountain cabin for Velebit hiking holidays between peaks and sea.",
        },
        {
          title: "Maps, GPX and side trips",
          body: "Route notes, maps and GPX tracks for nearby trails are available from Stars Peak so you can choose by weather and energy. On rest days, Zavratnica and the Karlobag coast make an easy Adriatic contrast to the ridge.",
        },
      ],
      pointsLabel: "Why hikers stay here",
      points: [
        "Hiking routes and nearby trails starting close to the cabin",
        "Bačić Kuk and southern Velebit day hikes from your door",
        "Premužić Trail day sections within driving reach",
        "GPX tracks and maps shared with Stars Peak guests",
        "Zavratnica and Adriatic day trips between mountain days",
      ],
      faqTitle: "Hiking retreat FAQ",
      faqs: [
        {
          question: "Can I hike directly from the cabin?",
          answer:
            "Yes. Trails toward Bačić Kuk and surrounding forest and ridge paths start near the house, so many day hikes begin without a transfer — classic hiking accommodation Velebit guests appreciate.",
        },
        {
          question: "How far to Premužić Trail?",
          answer:
            "Southern Premužić approaches around Baške Oštarije and Skropovac are a drive away for a full ridge day. From Stars Peak you combine local peaks with Premužić trail accommodation logistics for longer Velebit hiking holidays.",
        },
        {
          question: "Are GPX tracks available?",
          answer:
            "Yes. Stars Peak shares maps and GPX for nearby marked routes so you can load tracks into Gaia GPS, Komoot or similar apps before you leave the cabin.",
        },
        {
          question: "Is Zavratnica realistic as a day trip?",
          answer:
            "Yes. Zavratnica is a natural Adriatic day trip from the mountain — swim or walk the cove, then return to quiet cabin evenings on Velebit.",
        },
      ],
      ctaLead: "Book a mountain base for Velebit hiking holidays with trails from the door.",
    },
    offGridMountainCabin: {
      title: "Off-grid mountain cabin",
      intro:
        "Stars Peak is an off grid cabin Croatia guests choose when they want real mountain quiet without giving up everyday comfort. Solar power, rainwater and thoughtful systems keep this remote cabin Croatia stay warm, bright and practical high on Velebit.",
      blocks: [
        {
          title: "Solar-powered mountain living",
          body: "A solar system runs day-to-day electricity for lights, devices and cabin comfort. When needed, a generator supports the boiler and oven — a solar powered retreat designed for actual stays, not just weekend experiments.",
        },
        {
          title: "Rainwater, filtered for use",
          body: "Collected rainwater feeds cooking, drinking and showers through filtration. At this altitude, water management is part of living lightly on the mountain — reliable, not improvised.",
        },
        {
          title: "Sustainable comfort, not hardship",
          body: "Fireplace evenings, outdoor kitchen time and a private house for up to four guests mean off-grid here feels like a calm remote cabin Croatia holiday — modern where it matters, simple where the mountain asks for it.",
        },
      ],
      pointsLabel: "How off-grid works at Stars Peak",
      points: [
        "Solar power for everyday cabin electricity",
        "Rainwater collection with filtration for kitchen and showers",
        "Generator backup for boiler and oven when needed",
        "Satellite internet for reliable fast Wi‑Fi",
        "Private off grid cabin Croatia setting above Bačić Duliba",
      ],
      faqTitle: "Off-grid cabin FAQ",
      faqs: [
        {
          question: "Is the cabin fully solar powered?",
          answer:
            "Day-to-day power comes from solar. A generator can run the boiler and oven when demand is higher — a practical solar powered retreat rather than a bare-bones camp.",
        },
        {
          question: "Where does the water come from?",
          answer:
            "Rainwater is collected and filtered for cooking, drinking and showers. We explain simple use tips on arrival so the system stays comfortable throughout your stay.",
        },
        {
          question: "How comfortable is an off-grid stay?",
          answer:
            "Expect a warm, private mountain house with fireplace, outdoor spaces and the facilities of a careful remote cabin Croatia — not rough camping. Comfort is intentional; connection to place is the point.",
        },
        {
          question: "Will I have internet off-grid?",
          answer:
            "Yes. Satellite internet keeps Wi‑Fi reliably fast for calls, maps and uploads even though the cabin sits away from the grid.",
        },
      ],
      ctaLead: "Stay in a solar powered retreat where mountain systems meet real comfort.",
    },
    remoteWork: {
      title: "Remote work in nature",
      intro:
        "Stars Peak offers the rare mix digital nomads look for: reliable fast internet, deep quiet, and a mountain cabin setting where focus comes easily between hikes and slow mornings. Work remotely without the noise of a crowded desk.",
      blocks: [
        {
          title: "Fast Wi‑Fi on the mountain",
          body: "Satellite internet keeps video calls and uploads steady enough for real remote work. You are high on Velebit, not cut off from the tools you need.",
        },
        {
          title: "Silence as a work advantage",
          body: "No city noise, no crowded coworking buzz — just forest air, changing light and space to think. Mornings for deep work, afternoons for a ridge walk if the day allows.",
        },
        {
          title: "Cabin comfort between sessions",
          body: "A fireplace for cooler days, a terrace for breaks outdoors, and a private house for up to four — share a workation or come alone for a focused week.",
        },
      ],
      pointsLabel: "Built for calm productivity",
      points: [
        "Reliable fast Wi‑Fi for calls and uploads",
        "Quiet mountain setting with few distractions",
        "Private cabin for focused days and restful evenings",
        "Outdoor spaces for short breaks in fresh air",
        "Trails and Adriatic day trips when you log off",
      ],
      faqTitle: "Remote work FAQ",
      faqs: [
        {
          question: "Is the internet reliable enough for remote work?",
          answer:
            "Yes. Satellite internet at Stars Peak is fast and stable enough for video calls, uploads and everyday cloud tools — the practical base remote workers need on the mountain.",
        },
        {
          question: "Is this like a coworking space?",
          answer:
            "No. You get a private cabin, not shared desks. If you prefer quiet focus over coworking energy, the mountain house is the point — silence, terrace breaks and your own rhythm.",
        },
        {
          question: "Can more than one person work from the cabin?",
          answer:
            "Yes. The house sleeps up to four, so couples or small teams can share a workation — just agree who takes calls from which room when schedules overlap.",
        },
        {
          question: "What if I want to hike during the work week?",
          answer:
            "That is part of the stay. Plan deep-work mornings and shorter ridge walks or Adriatic day trips when you log off — remote work with nature on the doorstep.",
        },
      ],
      ctaLead: "Book a quiet mountain base for remote work with nature on the doorstep.",
    },
    photographyRetreat: {
      title: "Photography retreat on Velebit",
      intro:
        "Stars Peak is a photography retreat on Velebit for landscape and night work — Bačić Kuk above the house, dark skies after dusk, and golden hour light across ridge and forest. Bring a camera for landscape photography Croatia days that end under open mountain sky.",
      blocks: [
        {
          title: "Landscape frames from the door",
          body: "Bačić Kuk and the surrounding kukovi give strong silhouettes at sunrise and sunset. Forest paths, meadow edges and ridge lines sit minutes from the cabin — no long transfer before the first frames.",
        },
        {
          title: "Astrophotography-friendly dark skies",
          body: "Low light pollution above Bačić Duliba supports Milky Way and night landscape work when skies are clear. A terrace base and short walks to open ground keep setups simple between cabin and ridge.",
        },
        {
          title: "Golden hour, then mountain quiet",
          body: "Shoot the warm last light on rock and beech, then return to fireplace and silence. This photography retreat Velebit stay is built for early starts, long evenings and room to review files without rush.",
        },
      ],
      pointsLabel: "What photographers find here",
      points: [
        "Bačić Kuk views and ridge silhouettes from near the cabin",
        "Dark skies for astrophotography on clear moonless nights",
        "Golden hour and blue hour light across forest and rock",
        "Private space to store gear, charge batteries and edit",
        "Day-trip options toward Adriatic coves for contrast frames",
      ],
      faqTitle: "Photography retreat FAQ",
      faqs: [
        {
          question: "Can I use a tripod around the cabin?",
          answer:
            "Yes. Tripods are welcome on the terrace and nearby open ground. Give paths and house access space if other guests or hosts are moving around, and pack lights down after night shoots.",
        },
        {
          question: "How bad is light pollution for night photography?",
          answer:
            "Light pollution is low above Bačić Duliba compared with the coast. On clear, moonless nights the Milky Way can rise strongly — conditions many seek for a photography retreat Velebit stay.",
        },
        {
          question: "When is the best season for landscape photography?",
          answer:
            "Late spring and autumn bring crisp air and changing forest colour; summer offers long golden hours and warm night sessions. Winter is quieter and dramatic when weather and access allow.",
        },
        {
          question: "Is Stars Peak only for astrophotography?",
          answer:
            "No. Landscape photography Croatia days — ridge, forest and Adriatic contrast — sit alongside night work. Many guests mix both in one stay.",
        },
      ],
      ctaLead: "Plan a photography retreat Velebit stay for landscape light and dark skies.",
    },
  },

  hr: {
    darkSkyStargazing: {
      title: "Promatranje zvijezda na Velebitu",
      intro:
        "Iznad Bačić Dulibe noći ostaju dovoljno tamne za Mliječni put — prirodni dark sky smještaj kakav gosti traže kad ostave obalnu svjetlost iza sebe. Stars Peak je kuća za promatranje zvijezda na Velebitu, gdje spore večeri pod otvorenim nebom pripadaju boravku.",
      blocks: [
        {
          title: "Tamno nebo, tihe noći",
          body: "Uz malo svjetlosnog onečišćenja na grebenu, zvijezde se brzo pojave nakon sumraka. Ponesite deku na terasu, zakoračite malo od kuće i pustite očima da se priviknu — planina radi ostatak.",
        },
        {
          title: "Večeri u kući pod otvorenim nebom",
          body: "Vratite se kaminu ili ostanite vani dok se silueta grebena ne oštri na nebu. Noć je dio boravka — ne dodatak na ovoj velebitskoj bazi.",
        },
        {
          title: "Zvijezde uz planinarske dane",
          body: "Danju Bačić kuk, u sumrak Jadran na horizontu, noću prvi sjajni planeti. Vrh, more i zvijezde ostaju ritam Stars Peaka.",
        },
      ],
      pointsLabel: "Što čini noći posebnima",
      points: [
        "Tamno nebo i malo svjetlosnog onečišćenja iznad Bačić Dulibe",
        "Tiha terasa i vanjski prostori za promatranje zvijezda",
        "Potencijal Mliječnog puta po vedrim noćima bez Mjeseca",
        "Toplina kamina kad planinski zrak zahladi",
        "Privatna kuća za zvijezde između velebitskih vrhova i Jadrana",
      ],
      faqTitle: "Česta pitanja o zvijezdama",
      faqs: [
        {
          question: "Je li Stars Peak pogodan za promatranje zvijezda?",
          answer:
            "Da. Malo svjetlosnog onečišćenja iznad Bačić Dulibe drži greben dovoljno tamnim za zvijezde golim okom i, po vedrim noćima bez Mjeseca, za jak luk Mliječnog puta.",
        },
        {
          question: "Kad je najbolje vrijeme za noćno nebo?",
          answer:
            "Kasno proljeće do rane jeseni donosi najtoplije večeri i dulje sate tame nakon sumraka. Prozor oko mladog Mjeseca i vedre noći nakon prolaska fronte obično su najbolji za duboko nebo.",
        },
        {
          question: "Trebam li posebnu opremu?",
          answer:
            "Ne. Oči i strpljenje dovoljni su za zviježđa i Mliječni put. Crvena svjetiljka, topli slojevi i stativ pomažu za dulje gledanje ili jednostavne noćne fotografije s terase.",
        },
        {
          question: "Mogu li gledati zvijezde s terase kuće?",
          answer:
            "Da. Terasa i otvoreni prostor u blizini daju jasan pogled prema grebenu i nebu. Odmaknite se od svjetala kuće, pustite očima da se priviknu i tamno nebo Velebita radi posao.",
        },
      ],
      ctaLead: "Planirajte boravak za vedre planinske noći pod velebitskim nebom.",
    },
    velebitHikingRetreat: {
      title: "Planinarsko utočište na Velebitu",
      intro:
        "Stars Peak je planinarski smještaj na Velebitu za dane na stazi i mirne večeri u kući — rute kreću od vrata prema Bačić kuku, šumskim stazama i duljim danima na grebenu. Koristite ga kao bazu za južne dionice Premužićeve staze, kontekst Via Adriatice i izlete do Zavratnice.",
      blocks: [
        {
          title: "Staze od vrata kuće",
          body: "Označene staze penju se kroz bukvu i bor prema Bačić kuku i liniji Dabarskih kukova. Pravi planinarski dan možete započeti bez vožnje — čizme, karta, Velebit pod nogama.",
        },
        {
          title: "Premužić, greben i Via Adriatica",
          body: "Južni pristupi Premužićevoj stazi i grebenske dionice dostupni su za puni planinarski dan iz Baških Oštarija ili Skropovca. Stars Peak stoji i u širem kontekstu Via Adriatice — kuća za planinarske praznike između vrhova i mora.",
        },
        {
          title: "Karte, GPX i bočni izleti",
          body: "Opisi ruta, karte i GPX tragovi za obližnje staze dostupni su sa Stars Peaka kako biste birali prema vremenu i energiji. Na dane odmora Zavratnica i karlobaška obala daju jadranski kontrast grebenu.",
        },
      ],
      pointsLabel: "Zašto planinari ostaju ovdje",
      points: [
        "Planinarske rute i obližnje staze blizu kuće",
        "Bačić kuk i južni Velebit za dnevne uspone od vrata",
        "Dionice Premužićeve staze u dosegu vožnje",
        "GPX tragovi i karte koje dijelimo s gostima",
        "Zavratnica i jadranski izleti između planinskih dana",
      ],
      faqTitle: "Česta pitanja o planinarenju",
      faqs: [
        {
          question: "Mogu li planinariti izravno od kuće?",
          answer:
            "Da. Staze prema Bačić kuku te okolnim šumskim i grebenskim putovima kreću blizu kuće, pa mnogi dnevni usponi počinju bez transfera.",
        },
        {
          question: "Koliko je daleko Premužićeva staza?",
          answer:
            "Južni pristupi oko Baških Oštarija i Skropovca udaljeni su vožnjom za puni grebenski dan. Sa Stars Peaka kombinirate lokalne vrhove s logistikom za Premužić i dulje planinarske praznike na Velebitu.",
        },
        {
          question: "Jesu li GPX tragovi dostupni?",
          answer:
            "Da. Stars Peak dijeli karte i GPX za obližnje označene rute kako biste trag učitali u Gaia GPS, Komoot ili slične aplikacije prije izlaska iz kuće.",
        },
        {
          question: "Je li Zavratnica realan jednodnevni izlet?",
          answer:
            "Da. Zavratnica je prirodan jadranski izlet s planine — šetnja ili kupanje u uvali, pa povratak u mirne večeri na Velebitu.",
        },
      ],
      ctaLead: "Rezervirajte planinsku bazu za velebitske planinarske praznike sa stazama od vrata.",
    },
    offGridMountainCabin: {
      title: "Off-grid planinska kuća",
      intro:
        "Stars Peak je off-grid kuća u Hrvatskoj koju gosti biraju kad žele pravu planinsku tišinu bez odricanja od svakodnevne udobnosti. Solarna energija, kišnica i promišljeni sustavi drže ovaj udaljeni boravak na Velebitu toplim, svijetlim i praktičnim.",
      blocks: [
        {
          title: "Život na solarnu energiju",
          body: "Solarni sustav pokreće svakodnevnu struju za svjetla, uređaje i udobnost kuće. Kad zatreba, agregat podržava bojler i pećnicu — solarno utočište za stvarne boravke, ne samo vikend eksperimente.",
        },
        {
          title: "Kišnica, filtrirana za uporabu",
          body: "Sakupljena kišnica hrani kuhanje, piće i tuširanje kroz filtraciju. Na ovoj nadmorskoj visini upravljanje vodom dio je laganog života na planini — pouzdano, ne improvizirano.",
        },
        {
          title: "Održiva udobnost, ne odricanje",
          body: "Večeri uz kamin, vanjska kuhinja i privatna kuća za do četiri gosta znače da off-grid ovdje djeluje kao miran udaljeni odmor — moderno gdje treba, jednostavno gdje planina traži.",
        },
      ],
      pointsLabel: "Kako off-grid funkcionira na Stars Peaku",
      points: [
        "Solarna energija za svakodnevnu struju u kući",
        "Sakupljanje kišnice s filtracijom za kuhinju i tuš",
        "Agregat kao podrška za bojler i pećnicu kad zatreba",
        "Satelitski internet za pouzdan brzi Wi‑Fi",
        "Privatni off-grid smještaj iznad Bačić Dulibe",
      ],
      faqTitle: "Česta pitanja o off-grid kući",
      faqs: [
        {
          question: "Je li kuća potpuno na solarnu energiju?",
          answer:
            "Svakodnevnu struju daje solar. Agregat može pokrenuti bojler i pećnicu kad je potrošnja veća — praktično solarno utočište, ne kamp bez komfora.",
        },
        {
          question: "Odakle dolazi voda?",
          answer:
            "Kišnica se sakuplja i filtrira za kuhanje, piće i tuširanje. Po dolasku objasnimo jednostavne savjete korištenja kako bi sustav ostao ugodan tijekom cijelog boravka.",
        },
        {
          question: "Koliko je udoban off-grid boravak?",
          answer:
            "Očekujte toplu, privatnu planinsku kuću s kaminom, vanjskim prostorima i sadržajima pažljivo uređenog remote smještaja — ne grubi kamp. Udobnost je namjerna; povezanost s mjestom je poanta.",
        },
        {
          question: "Hoću li imati internet off-grid?",
          answer:
            "Da. Satelitski internet drži Wi‑Fi pouzdano brzim za pozive, karte i uploade iako je kuća izvan mreže.",
        },
      ],
      ctaLead: "Boravite u solarnom utočištu gdje se planinski sustavi susreću s pravom udobnošću.",
    },
    remoteWork: {
      title: "Remote work u prirodi",
      intro:
        "Stars Peak nudi rijetku kombinaciju koju digitalni nomadi traže: pouzdan brzi internet, duboku tišinu i planinsku kuću u kojoj se lako fokusirati između šetnji i sporih jutara. Radite remote bez buke gužve za stolom.",
      blocks: [
        {
          title: "Brzi Wi‑Fi na planini",
          body: "Satelitski internet drži video pozive i uploade dovoljno stabilnima za pravi remote rad. Na Velebitu ste — ali ne bez alata koji vam trebaju.",
        },
        {
          title: "Tišina kao prednost",
          body: "Bez gradske buke i bez gužve coworkinga — samo šumski zrak, promjenjivo svjetlo i prostor za razmišljanje. Jutra za duboki rad, popodne greben ako dan dopušta.",
        },
        {
          title: "Udobnost kuće između sesija",
          body: "Kamin za hladnije dane, terasa za pauze vani i privatna kuća za do četiri osobe — workation u dvoje ili fokusiran tjedan sami.",
        },
      ],
      pointsLabel: "Za miran i produktivan rad",
      points: [
        "Pouzdan brzi Wi‑Fi za pozive i uploade",
        "Tiha planinska lokacija s malo ometanja",
        "Privatna kuća za fokusirane dane i mirne večeri",
        "Vanjski prostori za kratke pauze na zraku",
        "Staze i izleti na Jadran kad ugasite laptop",
      ],
      faqTitle: "Česta pitanja o remote worku",
      faqs: [
        {
          question: "Je li internet dovoljno pouzdan za remote rad?",
          answer:
            "Da. Satelitski internet na Stars Peaku dovoljno je brz i stabilan za video pozive, uploade i svakodnevne cloud alate — praktična baza koju remote radnici trebaju na planini.",
        },
        {
          question: "Je li ovo kao coworking prostor?",
          answer:
            "Ne. Dobivate privatnu kuću, ne dijeljene stolove. Ako više volite tihi fokus od energije coworkinga, planinska kuća je poanta — tišina, pauze na terasi i vlastiti ritam.",
        },
        {
          question: "Može li više osoba raditi iz kuće?",
          answer:
            "Da. Kuća prima do četiri gosta, pa parovi ili mali timovi mogu dijeliti workation — dogovorite samo tko uzima pozive iz koje sobe kad se rasporedi preklapaju.",
        },
        {
          question: "Što ako želim planinariti tijekom radnog tjedna?",
          answer:
            "To je dio boravka. Planirajte jutra za duboki rad i kraće šetnje grebenom ili jadranske izlete kad ugasite laptop — remote work s prirodom pred vratima.",
        },
      ],
      ctaLead: "Rezervirajte mirnu planinsku bazu za remote work s prirodom pred vratima.",
    },
    photographyRetreat: {
      title: "Fotografsko utočište na Velebitu",
      intro:
        "Stars Peak je fotografsko utočište na Velebitu za pejzaž i noćni rad — Bačić kuk iznad kuće, tamno nebo nakon sumraka i zlatni sat preko grebena i šume. Ponesite kameru za dane pejzažne fotografije u Hrvatskoj koji završavaju pod otvorenim planinskim nebom.",
      blocks: [
        {
          title: "Pejzažni kadrovi od vrata",
          body: "Bačić kuk i okolni kukovi daju jake siluete u izlasku i zalasku sunca. Šumske staze, rubovi livada i linije grebena udaljeni su minutama od kuće — bez dugog transfera prije prvih kadrova.",
        },
        {
          title: "Tamno nebo pogodno za astrofotografiju",
          body: "Malo svjetlosnog onečišćenja iznad Bačić Dulibe podržava rad na Mliječnom putu i noćnom pejzažu kad je nebo vedro. Terasa i kratke šetnje do otvorenog terena drže setup jednostavnim između kuće i grebena.",
        },
        {
          title: "Zlatni sat, zatim planinska tišina",
          body: "Uhvatite toplu posljednju svjetlost na kamenu i bukvi, pa se vratite kaminu i tišini. Ovaj fotografski boravak na Velebitu građen je za rane početke, duge večeri i prostor za pregled datoteka bez žurbe.",
        },
      ],
      pointsLabel: "Što fotografi nalaze ovdje",
      points: [
        "Pogledi na Bačić kuk i siluete grebena blizu kuće",
        "Tamno nebo za astrofotografiju po vedrim noćima bez Mjeseca",
        "Zlatni i plavi sat preko šume i kamena",
        "Privatni prostor za opremu, punjenje baterija i obradu",
        "Izleti prema jadranskim uvalama za kontrastne kadrove",
      ],
      faqTitle: "Česta pitanja za fotografe",
      faqs: [
        {
          question: "Mogu li koristiti stativ oko kuće?",
          answer:
            "Da. Stativi su dobrodošli na terasi i obližnjem otvorenom terenu. Ostavite prolaz ako se netko kreće oko kuće i smanjite svjetla nakon noćnog snimanja.",
        },
        {
          question: "Koliko je jako svjetlosno onečišćenje za noćnu fotografiju?",
          answer:
            "Svjetlosno onečišćenje iznad Bačić Dulibe nisko je u usporedbi s obalom. Po vedrim noćima bez Mjeseca Mliječni put može jako izaći — uvjeti koje mnogi traže za fotografsko utočište na Velebitu.",
        },
        {
          question: "Kad je najbolja sezona za pejzažnu fotografiju?",
          answer:
            "Kasno proljeće i jesen donose oštar zrak i promjenu boja šume; ljeto nudi duge zlatne sate i tople noćne sesije. Zima je tiša i dramatična kad vrijeme i pristup dopuštaju.",
        },
        {
          question: "Je li Stars Peak samo za astrofotografiju?",
          answer:
            "Ne. Dani pejzažne fotografije — greben, šuma i jadranski kontrast — stoje uz noćni rad. Mnogi gosti miješaju oboje u jednom boravku.",
        },
      ],
      ctaLead: "Planirajte fotografski boravak na Velebitu za pejzažno svjetlo i tamno nebo.",
    },
  },

  de: {
    darkSkyStargazing: {
      title: "Sterne beobachten am Velebit",
      intro:
        "Über Bačić Duliba bleiben die Nächte dunkel genug für die Milchstraße — eine natürliche Dark-Sky-Unterkunft in Kroatien, wenn Küstenlicht zurückbleibt. Stars Peak ist eine Sternenhütte am Velebit, in der langsame Abende unter offenem Himmel zum Aufenthalt gehören.",
      blocks: [
        {
          title: "Dunkler Himmel, stille Nächte",
          body: "Mit wenig Lichtverschmutzung am Kamm erscheinen die Sterne schnell nach der Dämmerung. Nehmen Sie eine Decke auf die Terrasse, treten Sie ein paar Meter vom Haus und lassen Sie die Augen sich anpassen.",
        },
        {
          title: "Hüttenabende unter offenem Himmel",
          body: "Zurück zum Kaminlicht — oder draußen bleiben, bis die Kammsilhouette scharf am Himmel steht. Die Nacht gehört zum Aufenthalt auf dieser Velebit-Basis.",
        },
        {
          title: "Sterne nach Wandertagen",
          body: "Tagsüber Bačić Kuk, bei Sonnenuntergang der Adriahorizont, danach die ersten hellen Planeten. Gipfel, Meer und Sterne bleiben der Rhythmus von Stars Peak.",
        },
      ],
      pointsLabel: "Was die Nächte besonders macht",
      points: [
        "Dunkler Himmel mit geringer Lichtverschmutzung über Bačić Duliba",
        "Ruhige Terrasse und Außenbereiche zum Sterngucken",
        "Milchstraßen-Potenzial an klaren, mondlosen Sommernächten",
        "Kaminwärme, wenn die Bergluft kühl wird",
        "Private Sternenhütte zwischen Velebit-Gipfeln und Adria",
      ],
      faqTitle: "FAQ zum Sterngucken",
      faqs: [
        {
          question: "Eignet sich Stars Peak zum Sterngucken?",
          answer:
            "Ja. Geringe Lichtverschmutzung über Bačić Duliba hält den Kamm dunkel genug für Sterne mit bloßem Auge und an klaren mondlosen Nächten für einen starken Milchstraßenbogen.",
        },
        {
          question: "Wann ist die beste Zeit für den Nachthimmel?",
          answer:
            "Spätes Frühjahr bis Frühherbst bringt die wärmsten Abende und längere dunkle Stunden nach der Dämmerung. Neumondfenster und klare Nächte nach einer Front sind meist am besten für Tiefhimmel.",
        },
        {
          question: "Brauche ich spezielle Ausrüstung?",
          answer:
            "Nein. Augen und Geduld reichen für Sternbilder und Milchstraße. Eine Rotlichtlampe, warme Schichten und ein Stativ helfen für längere Blicke oder einfache Nachtfotos von der Terrasse.",
        },
        {
          question: "Kann ich von der Terrasse aus Sterne beobachten?",
          answer:
            "Ja. Terrasse und nahe offene Flächen geben freie Sicht zum Kamm und Himmel. Treten Sie von den Hauslichtern weg, lassen Sie die Augen adaptieren — der dunkle Velebit-Himmel erledigt den Rest.",
        },
      ],
      ctaLead: "Planen Sie einen Aufenthalt für klare Bergnächte unter dem Velebit-Himmel.",
    },
    velebitHikingRetreat: {
      title: "Wanderretreat am Velebit",
      intro:
        "Stars Peak ist Wanderunterkunft am Velebit für Trailtage und ruhige Hüttenabende — Routen führen von der Tür zu Bačić Kuk, Waldwegen und längeren Kammtagen. Nutzen Sie es als Basis für südliche Premužić-Abschnitte, Via-Adriatica-Kontext und Tagesausflüge nach Zavratnica.",
      blocks: [
        {
          title: "Wege ab der Haustür",
          body: "Markierte Pfade steigen durch Buche und Kiefer zu Bačić Kuk und der Linie der Dabarski Kukovi. Ein echter Bergtag beginnt ohne Transfer — Schuhe an, Karte bereit, Velebit unter den Füßen.",
        },
        {
          title: "Premužić, Kammtage und Via Adriatica",
          body: "Südliche Premužić-Zugänge und Kammabschnitte sind für einen vollen Wandertag von Baške Oštarije oder Skropovac erreichbar. Stars Peak steht auch im weiteren Via-Adriatica-Kontext — eine Hütte für Velebit-Wanderferien zwischen Gipfeln und Meer.",
        },
        {
          title: "Karten, GPX und Seitenausflüge",
          body: "Routennotizen, Karten und GPX-Tracks für nahe Wege gibt es von Stars Peak — Wahl nach Wetter und Energie. An Ruhetagen bieten Zavratnica und die Küste bei Karlobag einen Adria-Kontrast zum Kamm.",
        },
      ],
      pointsLabel: "Warum Wanderer hier bleiben",
      points: [
        "Wanderrouten und nahe Trails nah an der Hütte",
        "Bačić Kuk und Südvelebit-Tageswanderungen ab der Tür",
        "Premužić-Abschnitte in Fahrreichweite",
        "GPX-Tracks und Karten für Stars-Peak-Gäste",
        "Zavratnica und Adria-Ausflüge zwischen Bergtagen",
      ],
      faqTitle: "FAQ zum Wanderretreat",
      faqs: [
        {
          question: "Kann ich direkt von der Hütte wandern?",
          answer:
            "Ja. Wege zu Bačić Kuk sowie Wald- und Kammpfade beginnen nahe am Haus — viele Tageswanderungen starten ohne Transfer.",
        },
        {
          question: "Wie weit ist der Premužić-Weg?",
          answer:
            "Südliche Zugänge um Baške Oštarije und Skropovac sind eine Fahrt für einen vollen Kammtag entfernt. Von Stars Peak kombinieren Sie lokale Gipfel mit Premužić-Logistik für längere Velebit-Wanderferien.",
        },
        {
          question: "Gibt es GPX-Tracks?",
          answer:
            "Ja. Stars Peak teilt Karten und GPX für nahe markierte Routen — laden Sie die Tracks vor dem Start in Gaia GPS, Komoot oder ähnliche Apps.",
        },
        {
          question: "Ist Zavratnica als Tagesausflug realistisch?",
          answer:
            "Ja. Zavratnica ist ein natürlicher Adria-Tagesausflug vom Berg — Bucht wandern oder schwimmen, dann zurück zu ruhigen Abenden am Velebit.",
        },
      ],
      ctaLead: "Buchen Sie eine Bergbasis für Velebit-Wanderferien mit Wegen ab der Tür.",
    },
    offGridMountainCabin: {
      title: "Off-Grid Berghütte",
      intro:
        "Stars Peak ist eine Off-Grid-Hütte in Kroatien für echte Bergruhe ohne Verzicht auf Alltagskomfort. Solarstrom, Regenwasser und durchdachte Systeme halten diesen abgelegenen Aufenthalt am Velebit warm, hell und praktisch.",
      blocks: [
        {
          title: "Leben mit Solarstrom",
          body: "Eine Solaranlage versorgt Alltagselektrizität für Licht, Geräte und Hüttenkomfort. Bei Bedarf stützt ein Generator Boiler und Backofen — ein solarbetriebenes Retreat für echte Aufenthalte, nicht nur Wochenendversuche.",
        },
        {
          title: "Regenwasser, gefiltert nutzbar",
          body: "Gesammeltes Regenwasser speist Kochen, Trinken und Duschen über Filterung. In dieser Höhe gehört Wassermanagement zum leichten Leben am Berg — zuverlässig, nicht improvisiert.",
        },
        {
          title: "Nachhaltiger Komfort, kein Verzicht",
          body: "Kaminabende, Außenküche und ein privates Haus für bis zu vier Gäste bedeuten: Off-Grid fühlt sich hier wie ein ruhiger abgelegener Kroatien-Aufenthalt an — modern wo nötig, schlicht wo der Berg es verlangt.",
        },
      ],
      pointsLabel: "So funktioniert Off-Grid bei Stars Peak",
      points: [
        "Solarstrom für den täglichen Hüttenbedarf",
        "Regenwassersammlung mit Filterung für Küche und Dusche",
        "Generator-Backup für Boiler und Ofen bei Bedarf",
        "Satelliteninternet für zuverlässiges schnelles WLAN",
        "Private Off-Grid-Lage über Bačić Duliba",
      ],
      faqTitle: "FAQ zur Off-Grid-Hütte",
      faqs: [
        {
          question: "Läuft die Hütte vollständig auf Solar?",
          answer:
            "Der Alltagslauf kommt aus Solar. Ein Generator kann Boiler und Ofen bei höherem Bedarf betreiben — ein praktisches Solar-Retreat statt kargem Camp.",
        },
        {
          question: "Woher kommt das Wasser?",
          answer:
            "Regenwasser wird gesammelt und gefiltert für Kochen, Trinken und Duschen. Bei Ankunft erklären wir einfache Nutzungstipps, damit das System den ganzen Aufenthalt komfortabel bleibt.",
        },
        {
          question: "Wie komfortabel ist ein Off-Grid-Aufenthalt?",
          answer:
            "Erwarten Sie ein warmes, privates Berghaus mit Kamin, Außenbereichen und sorgfältiger Ausstattung — kein raues Camping. Komfort ist Absicht; Verbindung zum Ort ist der Punkt.",
        },
        {
          question: "Habe ich Off-Grid trotzdem Internet?",
          answer:
            "Ja. Satelliteninternet hält WLAN zuverlässig schnell für Calls, Karten und Uploads, obwohl die Hütte vom Netz entfernt liegt.",
        },
      ],
      ctaLead: "Bleiben Sie in einem Solar-Retreat, wo Bergsysteme auf echten Komfort treffen.",
    },
    remoteWork: {
      title: "Remote Work in der Natur",
      intro:
        "Stars Peak bietet die seltene Mischung, die digitale Nomaden suchen: zuverlässiges schnelles Internet, tiefe Ruhe und eine Berghütte, in der Fokus zwischen Wanderungen und langsamen Morgen leicht fällt. Arbeiten Sie remote ohne den Lärm voller Schreibtische.",
      blocks: [
        {
          title: "Schnelles WLAN am Berg",
          body: "Satelliteninternet hält Videoanrufe und Uploads stabil genug für echte Remote-Arbeit. Sie sind hoch am Velebit — aber nicht ohne die nötigen Tools.",
        },
        {
          title: "Stille als Vorteil",
          body: "Kein Stadtlärm, kein Crowded-Coworking — nur Waldluft, wechselndes Licht und Raum zum Denken. Vormittags Deep Work, nachmittags ein Kammweg, wenn der Tag es erlaubt.",
        },
        {
          title: "Hüttenkomfort zwischen Sessions",
          body: "Kamin an kühleren Tagen, Terrasse für Pausen draußen und ein privates Haus für bis zu vier — Workation zu zweit oder eine fokussierte Woche allein.",
        },
      ],
      pointsLabel: "Für ruhige Produktivität",
      points: [
        "Zuverlässiges schnelles WLAN für Calls und Uploads",
        "Ruhige Berglage mit wenigen Ablenkungen",
        "Private Hütte für fokussierte Tage und erholsame Abende",
        "Außenbereiche für kurze Pausen an der frischen Luft",
        "Wanderwege und Adria-Ausflüge nach Feierabend",
      ],
      faqTitle: "FAQ zu Remote Work",
      faqs: [
        {
          question: "Ist das Internet zuverlässig genug für Remote Work?",
          answer:
            "Ja. Satelliteninternet bei Stars Peak ist schnell und stabil genug für Videoanrufe, Uploads und alltägliche Cloud-Tools — die praktische Basis, die Remote-Arbeiter am Berg brauchen.",
        },
        {
          question: "Ist das wie ein Coworking-Space?",
          answer:
            "Nein. Sie bekommen eine private Hütte, keine geteilten Schreibtische. Wenn Sie ruhigen Fokus der Coworking-Energie vorziehen, ist das Berghaus der Punkt — Stille, Terrassenpausen und Ihr eigener Rhythmus.",
        },
        {
          question: "Können mehrere Personen aus der Hütte arbeiten?",
          answer:
            "Ja. Das Haus bietet Platz für bis zu vier — Paare oder kleine Teams können eine Workation teilen. Stimmen Sie nur ab, wer Calls aus welchem Raum nimmt, wenn Termine überlappen.",
        },
        {
          question: "Was, wenn ich in der Arbeitswoche wandern will?",
          answer:
            "Das gehört zum Aufenthalt. Planen Sie Deep-Work-Vormittage und kürzere Kammwege oder Adria-Ausflüge nach Feierabend — Remote Work mit Natur vor der Tür.",
        },
      ],
      ctaLead: "Buchen Sie eine ruhige Bergbasis für Remote Work mit Natur vor der Tür.",
    },
    photographyRetreat: {
      title: "Fotografie-Retreat am Velebit",
      intro:
        "Stars Peak ist ein Fotografie-Retreat am Velebit für Landschaft und Nachtarbeit — Bačić Kuk über dem Haus, dunkler Himmel nach der Dämmerung und goldenes Licht über Kamm und Wald. Nehmen Sie die Kamera mit für Landschaftsfotografie in Kroatien, die unter offenem Berghimmel endet.",
      blocks: [
        {
          title: "Landschaftsrahmen ab der Tür",
          body: "Bačić Kuk und die umliegenden Kukovi geben starke Silhouetten bei Sonnenauf- und -untergang. Waldwege, Wiesenränder und Kammlinien liegen Minuten von der Hütte — ohne langen Transfer vor den ersten Frames.",
        },
        {
          title: "Astrofreundlicher dunkler Himmel",
          body: "Geringe Lichtverschmutzung über Bačić Duliba unterstützt Milchstraße und Nachtlandschaft bei klarem Himmel. Terrassenbasis und kurze Wege zu offenen Flächen halten Setups zwischen Hütte und Kamm einfach.",
        },
        {
          title: "Goldene Stunde, dann Bergstille",
          body: "Fotografieren Sie das warme letzte Licht auf Fels und Buche, dann zurück zu Kamin und Stille. Dieser Fotografie-Aufenthalt am Velebit ist für frühe Starts, lange Abende und Raum zum Prüfen der Dateien ohne Hetze gebaut.",
        },
      ],
      pointsLabel: "Was Fotografen hier finden",
      points: [
        "Bačić-Kuk-Blicke und Kammsilhouetten nah an der Hütte",
        "Dunkler Himmel für Astrofotografie an klaren mondlosen Nächten",
        "Goldene und blaue Stunde über Wald und Fels",
        "Privater Raum für Gear, Akkus laden und Editieren",
        "Tagesausflüge zu Adriabuchten für Kontrastmotive",
      ],
      faqTitle: "FAQ für Fotografen",
      faqs: [
        {
          question: "Kann ich ein Stativ um die Hütte nutzen?",
          answer:
            "Ja. Stative sind auf Terrasse und nahe offenen Flächen willkommen. Lassen Sie Wege frei, wenn jemand ums Haus geht, und dimmen Sie Lichter nach Nachtschüssen.",
        },
        {
          question: "Wie stark ist Lichtverschmutzung für Nachtfotografie?",
          answer:
            "Die Lichtverschmutzung über Bačić Duliba ist im Vergleich zur Küste gering. An klaren mondlosen Nächten kann die Milchstraße stark aufsteigen — Bedingungen, die viele für ein Fotografie-Retreat am Velebit suchen.",
        },
        {
          question: "Wann ist die beste Saison für Landschaftsfotografie?",
          answer:
            "Spätes Frühjahr und Herbst bringen klare Luft und wechselnde Waldfarben; der Sommer bietet lange goldene Stunden und warme Nachtsessions. Der Winter ist ruhiger und dramatisch, wenn Wetter und Zugang es erlauben.",
        },
        {
          question: "Ist Stars Peak nur für Astrofotografie?",
          answer:
            "Nein. Landschaftstage — Kamm, Wald und Adria-Kontrast — stehen neben der Nachtarbeit. Viele Gäste mischen beides in einem Aufenthalt.",
        },
      ],
      ctaLead: "Planen Sie ein Fotografie-Retreat am Velebit für Landschaftslicht und dunklen Himmel.",
    },
  },

  fr: {
    darkSkyStargazing: {
      title: "Observation des étoiles sur le Velebit",
      intro:
        "Au-dessus de Bačić Duliba, les nuits restent assez sombres pour la Voie lactée — un hébergement ciel sombre en Croatie lorsque l’éclat côtier est laissé derrière. Stars Peak est un chalet d’observation sur le Velebit, où les soirées lentes sous le ciel ouvert font partie du séjour.",
      blocks: [
        {
          title: "Ciel sombre, nuits calmes",
          body: "Avec peu de pollution lumineuse sur la crête, les étoiles apparaissent vite après le crépuscule. Une couverture sur la terrasse, quelques pas hors de la maison, et les yeux s’adaptent.",
        },
        {
          title: "Soirées au chalet sous ciel ouvert",
          body: "Revenez au feu de cheminée, ou restez dehors jusqu’à ce que la silhouette de la crête se dessine. La nuit fait partie du séjour sur cette base du Velebit.",
        },
        {
          title: "Les étoiles après les journées de randonnée",
          body: "Bačić Kuk le jour, l’horizon adriatique au coucher du soleil, puis les premières planètes. Sommet, mer et étoiles restent le rythme de Stars Peak.",
        },
      ],
      pointsLabel: "Ce qui rend les nuits particulières",
      points: [
        "Ciel sombre et faible pollution lumineuse au-dessus de Bačić Duliba",
        "Terrasse et espaces extérieurs calmes pour observer les étoiles",
        "Potentiel de Voie lactée les nuits d’été claires sans lune",
        "Chaleur de la cheminée quand l’air de montagne fraîchit",
        "Chalet privé pour les étoiles entre sommets du Velebit et Adriatique",
      ],
      faqTitle: "FAQ observation des étoiles",
      faqs: [
        {
          question: "Stars Peak convient-il à l’observation des étoiles ?",
          answer:
            "Oui. La faible pollution lumineuse au-dessus de Bačić Duliba garde la crête assez sombre pour les étoiles à l’œil nu et, les nuits claires sans lune, pour un fort arc de Voie lactée.",
        },
        {
          question: "Quelle est la meilleure période pour le ciel nocturne ?",
          answer:
            "De la fin du printemps au début de l’automne : soirées plus douces et heures d’obscurité plus longues après le crépuscule. Les fenêtres de nouvelle lune et les nuits claires après un front sont souvent les meilleures.",
        },
        {
          question: "Faut-il un équipement spécial ?",
          answer:
            "Non. Yeux et patience suffisent pour les constellations et la Voie lactée. Une lampe rouge, des couches chaudes et un trépied aident pour des regards plus longs ou de simples photos de nuit depuis la terrasse.",
        },
        {
          question: "Puis-je observer depuis la terrasse du chalet ?",
          answer:
            "Oui. La terrasse et le terrain ouvert à proximité offrent des vues dégagées vers la crête et le ciel. Éloignez-vous des lumières de la maison, laissez les yeux s’adapter — le ciel sombre du Velebit fait le reste.",
        },
      ],
      ctaLead: "Planifiez un séjour pour des nuits de montagne claires sous le ciel du Velebit.",
    },
    velebitHikingRetreat: {
      title: "Retraite de randonnée sur le Velebit",
      intro:
        "Stars Peak est un hébergement de randonnée sur le Velebit pour les jours de sentier et les soirées calmes au chalet — les itinéraires partent de la porte vers Bačić Kuk, les chemins forestiers et les longues journées de crête. Base pour les sections sud du sentier Premužić, le contexte Via Adriatica et les escapades à Zavratnica.",
      blocks: [
        {
          title: "Sentiers depuis la porte",
          body: "Des chemins balisés montent à travers hêtres et pins vers Bačić Kuk et la ligne des Dabarski Kukovi. Une vraie journée de montagne commence sans transfert — chaussures, carte, Velebit sous les pieds.",
        },
        {
          title: "Premužić, crête et Via Adriatica",
          body: "Les approches sud du sentier Premužić et les tronçons de crête sont à portée pour une pleine journée depuis Baške Oštarije ou Skropovac. Stars Peak s’inscrit aussi dans le récit plus large de la Via Adriatica — un chalet pour vacances de randonnée entre sommets et mer.",
        },
        {
          title: "Cartes, GPX et escapades latérales",
          body: "Notes d’itinéraire, cartes et traces GPX pour les sentiers proches sont disponibles depuis Stars Peak selon la météo et l’énergie. Les jours de repos, Zavratnica et la côte de Karlobag offrent un contraste adriatique à la crête.",
        },
      ],
      pointsLabel: "Pourquoi les randonneurs restent ici",
      points: [
        "Itinéraires et sentiers proches du chalet",
        "Bačić Kuk et randonnées du sud Velebit depuis la porte",
        "Sections du sentier Premužić à portée en voiture",
        "Traces GPX et cartes partagées avec les hôtes",
        "Zavratnica et escapades adriatiques entre jours de montagne",
      ],
      faqTitle: "FAQ retraite de randonnée",
      faqs: [
        {
          question: "Puis-je randonner directement depuis le chalet ?",
          answer:
            "Oui. Les sentiers vers Bačić Kuk et les chemins forestiers et de crête commencent près de la maison — beaucoup de randonnées à la journée démarrent sans transfert.",
        },
        {
          question: "À quelle distance se trouve le sentier Premužić ?",
          answer:
            "Les approches sud autour de Baške Oštarije et Skropovac sont à une conduite pour une pleine journée de crête. Depuis Stars Peak, vous combinez sommets locaux et logistique Premužić pour de plus longues vacances de randonnée sur le Velebit.",
        },
        {
          question: "Y a-t-il des traces GPX ?",
          answer:
            "Oui. Stars Peak partage cartes et GPX pour les itinéraires balisés proches — chargez les traces dans Gaia GPS, Komoot ou une app similaire avant de partir.",
        },
        {
          question: "Zavratnica est-elle réaliste en journée ?",
          answer:
            "Oui. Zavratnica est une escapade adriatique naturelle depuis la montagne — marcher ou nager dans la crique, puis revenir aux soirées calmes sur le Velebit.",
        },
      ],
      ctaLead: "Réservez une base de montagne pour des vacances de randonnée sur le Velebit, sentiers à la porte.",
    },
    offGridMountainCabin: {
      title: "Chalet de montagne hors réseau",
      intro:
        "Stars Peak est un chalet hors réseau en Croatie pour le vrai calme de montagne sans renoncer au confort quotidien. Énergie solaire, eau de pluie et systèmes pensés gardent ce séjour isolé sur le Velebit chaud, lumineux et pratique.",
      blocks: [
        {
          title: "Vivre à l’énergie solaire",
          body: "Un système solaire alimente l’électricité du quotidien pour lumières, appareils et confort du chalet. Au besoin, un générateur soutient le ballon et le four — une retraite solaire pour de vrais séjours, pas seulement des essais de week-end.",
        },
        {
          title: "Eau de pluie, filtrée pour l’usage",
          body: "L’eau de pluie collectée alimente cuisine, boisson et douches via filtration. À cette altitude, la gestion de l’eau fait partie d’une vie légère en montagne — fiable, pas improvisée.",
        },
        {
          title: "Confort durable, pas de privation",
          body: "Soirées au feu, cuisine extérieure et maison privée jusqu’à quatre hôtes : hors réseau ici ressemble à un séjour isolé calme en Croatie — moderne où il faut, simple où la montagne le demande.",
        },
      ],
      pointsLabel: "Comment fonctionne le hors réseau à Stars Peak",
      points: [
        "Énergie solaire pour l’électricité quotidienne du chalet",
        "Collecte d’eau de pluie filtrée pour cuisine et douches",
        "Générateur de secours pour ballon et four si besoin",
        "Internet satellite pour un Wi‑Fi rapide et fiable",
        "Cadre hors réseau privé au-dessus de Bačić Duliba",
      ],
      faqTitle: "FAQ chalet hors réseau",
      faqs: [
        {
          question: "Le chalet fonctionne-t-il entièrement au solaire ?",
          answer:
            "Le quotidien vient du solaire. Un générateur peut alimenter ballon et four quand la demande monte — une retraite solaire pratique plutôt qu’un camp rudimentaire.",
        },
        {
          question: "D’où vient l’eau ?",
          answer:
            "L’eau de pluie est collectée et filtrée pour cuisiner, boire et se doucher. À l’arrivée, nous expliquons de simples conseils d’usage pour garder le système confortable tout le séjour.",
        },
        {
          question: "Quel confort pour un séjour hors réseau ?",
          answer:
            "Attendez-vous à une maison de montagne chaude et privée avec cheminée, espaces extérieurs et équipements soignés — pas du camping rudimentaire. Le confort est voulu ; le lien au lieu est le point.",
        },
        {
          question: "Aurai-je internet hors réseau ?",
          answer:
            "Oui. L’internet satellite garde le Wi‑Fi fiable et rapide pour appels, cartes et uploads même si le chalet est hors du réseau.",
        },
      ],
      ctaLead: "Séjournez dans une retraite solaire où les systèmes de montagne rencontrent le vrai confort.",
    },
    remoteWork: {
      title: "Télétravail en nature",
      intro:
        "Stars Peak offre le mélange rare que cherchent les nomades numériques : internet rapide et fiable, silence profond, et un chalet de montagne où la concentration vient facilement entre randonnées et matins lents. Travaillez à distance sans le bruit des bureaux bondés.",
      blocks: [
        {
          title: "Wi‑Fi rapide en montagne",
          body: "Internet satellite maintient appels vidéo et uploads assez stables pour un vrai télétravail. Vous êtes haut sur le Velebit — sans être coupé de vos outils.",
        },
        {
          title: "Le silence comme avantage",
          body: "Pas de bruit urbain ni de coworking bondé — seulement l’air de la forêt, la lumière qui change et de l’espace pour penser. Matins de deep work, après-midi sur la crête si le jour le permet.",
        },
        {
          title: "Confort du chalet entre les sessions",
          body: "Cheminée les jours frais, terrasse pour les pauses dehors, maison privée jusqu’à quatre — workation à deux ou semaine concentrée seul.",
        },
      ],
      pointsLabel: "Pour une productivité calme",
      points: [
        "Wi‑Fi rapide et fiable pour appels et uploads",
        "Cadre montagneux calme, peu de distractions",
        "Chalet privé pour journées concentrées et soirées reposantes",
        "Espaces extérieurs pour de courtes pauses au grand air",
        "Sentiers et excursions Adriatique une fois le travail terminé",
      ],
      faqTitle: "FAQ télétravail",
      faqs: [
        {
          question: "Internet est-il assez fiable pour le télétravail ?",
          answer:
            "Oui. L’internet satellite à Stars Peak est assez rapide et stable pour appels vidéo, uploads et outils cloud du quotidien — la base pratique dont les télétravailleurs ont besoin en montagne.",
        },
        {
          question: "Est-ce comme un espace de coworking ?",
          answer:
            "Non. Vous avez un chalet privé, pas de bureaux partagés. Si vous préférez le focus calme à l’énergie du coworking, la maison de montagne est le point — silence, pauses terrasse et votre propre rythme.",
        },
        {
          question: "Plusieurs personnes peuvent-elles travailler depuis le chalet ?",
          answer:
            "Oui. La maison accueille jusqu’à quatre — couples ou petites équipes peuvent partager une workation. Convenez seulement qui prend les appels dans quelle pièce si les plannings se croisent.",
        },
        {
          question: "Et si je veux randonner pendant la semaine de travail ?",
          answer:
            "Cela fait partie du séjour. Planifiez des matins de deep work et de plus courtes marches de crête ou escapades adriatiques une fois le travail terminé — télétravail avec la nature à la porte.",
        },
      ],
      ctaLead: "Réservez une base montagne calme pour télétravail avec la nature à la porte.",
    },
    photographyRetreat: {
      title: "Retraite photo sur le Velebit",
      intro:
        "Stars Peak est une retraite photo sur le Velebit pour le paysage et le travail de nuit — Bačić Kuk au-dessus de la maison, ciel sombre après le crépuscule et lumière dorée sur crête et forêt. Apportez l’appareil pour des journées de photographie de paysage en Croatie qui se terminent sous le ciel ouvert de montagne.",
      blocks: [
        {
          title: "Cadres paysage depuis la porte",
          body: "Bačić Kuk et les kukovi alentour offrent de fortes silhouettes au lever et au coucher du soleil. Chemins forestiers, lisières de prairies et lignes de crête sont à minutes du chalet — sans long transfert avant les premiers cadres.",
        },
        {
          title: "Ciel sombre pour l’astrophotographie",
          body: "La faible pollution lumineuse au-dessus de Bačić Duliba soutient Voie lactée et paysage nocturne par ciel clair. Terrasse et courtes marches vers un terrain ouvert gardent les setups simples entre chalet et crête.",
        },
        {
          title: "Heure dorée, puis calme de montagne",
          body: "Capturez la dernière lumière chaude sur roche et hêtre, puis retour feu et silence. Ce séjour photo sur le Velebit est fait pour les départs tôt, les longues soirées et l’espace pour revoir les fichiers sans précipitation.",
        },
      ],
      pointsLabel: "Ce que trouvent les photographes",
      points: [
        "Vues sur Bačić Kuk et silhouettes de crête près du chalet",
        "Ciel sombre pour l’astrophotographie les nuits claires sans lune",
        "Heure dorée et heure bleue sur forêt et roche",
        "Espace privé pour le matériel, charger les batteries et éditer",
        "Escapades vers les criques adriatiques pour des contrastes",
      ],
      faqTitle: "FAQ photographes",
      faqs: [
        {
          question: "Puis-je utiliser un trépied autour du chalet ?",
          answer:
            "Oui. Les trépieds sont les bienvenus sur la terrasse et le terrain ouvert proche. Laissez libre les passages si quelqu’un circule, et baissez les lumières après les prises de nuit.",
        },
        {
          question: "Quelle pollution lumineuse pour la photo de nuit ?",
          answer:
            "La pollution lumineuse au-dessus de Bačić Duliba est faible face à la côte. Les nuits claires sans lune, la Voie lactée peut monter fort — conditions recherchées pour une retraite photo sur le Velebit.",
        },
        {
          question: "Quelle est la meilleure saison pour le paysage ?",
          answer:
            "Fin de printemps et automne apportent un air net et des couleurs de forêt changeantes ; l’été offre de longues heures dorées et des sessions de nuit douces. L’hiver est plus calme et dramatique quand météo et accès le permettent.",
        },
        {
          question: "Stars Peak est-il seulement pour l’astrophotographie ?",
          answer:
            "Non. Les journées de paysage — crête, forêt et contraste adriatique — côtoient le travail de nuit. Beaucoup d’hôtes mélangent les deux en un séjour.",
        },
      ],
      ctaLead: "Planifiez une retraite photo sur le Velebit pour la lumière du paysage et le ciel sombre.",
    },
  },

  it: {
    darkSkyStargazing: {
      title: "Osservazione delle stelle sul Velebit",
      intro:
        "Sopra Bačić Duliba le notti restano abbastanza scure per la Via Lattea — un alloggio dark sky in Croazia quando il bagliore costiero resta alle spalle. Stars Peak è uno chalet per le stelle sul Velebit, dove le serate lente sotto il cielo aperto fanno parte del soggiorno.",
      blocks: [
        {
          title: "Cielo scuro, notti quiete",
          body: "Con poca inquinamento luminoso sulla cresta, le stelle appaiono presto dopo il tramonto. Una coperta in terrazza, pochi passi dalla casa, e gli occhi si adattano.",
        },
        {
          title: "Serate nello chalet sotto cielo aperto",
          body: "Tornate al camino, o restate fuori finché la silhouette della cresta non si staglia. La notte fa parte del soggiorno su questa base del Velebit.",
        },
        {
          title: "Stelle dopo le giornate di trekking",
          body: "Bačić Kuk di giorno, l’orizzonte adriatico al tramonto, poi i primi pianeti. Cima, mare e stelle restano il ritmo di Stars Peak.",
        },
      ],
      pointsLabel: "Cosa rende speciali le notti",
      points: [
        "Cielo scuro e poco inquinamento luminoso sopra Bačić Duliba",
        "Terrazza e spazi esterni quieti per osservare le stelle",
        "Potenziale Via Lattea nelle notti estive chiare senza luna",
        "Calore del camino quando l’aria di montagna si raffredda",
        "Chalet privato per le stelle tra vette del Velebit e Adriatico",
      ],
      faqTitle: "FAQ osservazione stelle",
      faqs: [
        {
          question: "Stars Peak è adatto all’osservazione delle stelle?",
          answer:
            "Sì. Il basso inquinamento luminoso sopra Bačić Duliba mantiene la cresta abbastanza scura per le stelle a occhio nudo e, nelle notti chiare senza luna, per un forte arco di Via Lattea.",
        },
        {
          question: "Qual è il periodo migliore per il cielo notturno?",
          answer:
            "Dalla fine della primavera all’inizio dell’autunno: serate più miti e ore di buio più lunghe dopo il tramonto. Le finestre di luna nuova e le notti chiare dopo un fronte sono di solito le migliori.",
        },
        {
          question: "Serve attrezzatura speciale?",
          answer:
            "No. Occhi e pazienza bastano per costellazioni e Via Lattea. Una torcia rossa, strati caldi e un treppiede aiutano per sguardi più lunghi o semplici foto notturne dalla terrazza.",
        },
        {
          question: "Posso osservare dalla terrazza dello chalet?",
          answer:
            "Sì. Terrazza e terreno aperto vicino danno viste libere verso cresta e cielo. Allontanatevi dalle luci della casa, lasciate adattare gli occhi — il cielo scuro del Velebit fa il resto.",
        },
      ],
      ctaLead: "Pianificate un soggiorno per notti di montagna chiare sotto il cielo del Velebit.",
    },
    velebitHikingRetreat: {
      title: "Ritiro escursionistico sul Velebit",
      intro:
        "Stars Peak è un alloggio escursionistico sul Velebit per giornate di sentiero e serate quiete nello chalet — i percorsi partono dalla porta verso Bačić Kuk, sentieri nel bosco e giornate più lunghe di cresta. Base per tratti sud del sentiero Premužić, contesto Via Adriatica e gite a Zavratnica.",
      blocks: [
        {
          title: "Sentieri dalla porta di casa",
          body: "Percorsi segnalati salgono tra faggi e pini verso Bačić Kuk e la linea dei Dabarski Kukovi. Una vera giornata di montagna inizia senza transfer — scarponi, mappa, Velebit sotto i piedi.",
        },
        {
          title: "Premužić, cresta e Via Adriatica",
          body: "Gli accessi sud del sentiero Premužić e i tratti di cresta sono a portata per una giornata intera da Baške Oštarije o Skropovac. Stars Peak si colloca anche nel racconto più ampio della Via Adriatica — uno chalet per vacanze di trekking tra vette e mare.",
        },
        {
          title: "Mappe, GPX e gite laterali",
          body: "Note di percorso, mappe e tracce GPX per i sentieri vicini sono disponibili da Stars Peak in base a meteo ed energie. Nei giorni di riposo, Zavratnica e la costa di Karlobag offrono un contrasto adriatico alla cresta.",
        },
      ],
      pointsLabel: "Perché gli escursionisti restano qui",
      points: [
        "Itinerari e sentieri vicini allo chalet",
        "Bačić Kuk ed escursioni del Velebit sud dalla porta",
        "Tratti del sentiero Premužić a portata in auto",
        "Tracce GPX e mappe condivise con gli ospiti",
        "Zavratnica e gite adriatiche tra giornate di montagna",
      ],
      faqTitle: "FAQ ritiro escursionistico",
      faqs: [
        {
          question: "Posso fare trekking direttamente dallo chalet?",
          answer:
            "Sì. I sentieri verso Bačić Kuk e i percorsi nel bosco e di cresta partono vicino alla casa — molte escursioni giornaliere iniziano senza transfer.",
        },
        {
          question: "Quanto dista il sentiero Premužić?",
          answer:
            "Gli accessi sud intorno a Baške Oštarije e Skropovac sono a una guida di distanza per una giornata intera di cresta. Da Stars Peak combinate vette locali e logistica Premužić per vacanze di trekking più lunghe sul Velebit.",
        },
        {
          question: "Ci sono tracce GPX?",
          answer:
            "Sì. Stars Peak condivide mappe e GPX per gli itinerari segnalati vicini — caricate le tracce in Gaia GPS, Komoot o app simili prima di uscire.",
        },
        {
          question: "Zavratnica è realistica come gita giornaliera?",
          answer:
            "Sì. Zavratnica è una gita adriatica naturale dalla montagna — camminare o nuotare nella baia, poi tornare alle serate quiete sul Velebit.",
        },
      ],
      ctaLead: "Prenota una base di montagna per vacanze di trekking sul Velebit con sentieri dalla porta.",
    },
    offGridMountainCabin: {
      title: "Chalet di montagna off-grid",
      intro:
        "Stars Peak è uno chalet off-grid in Croazia per il vero silenzio di montagna senza rinunciare al comfort quotidiano. Energia solare, acqua piovana e sistemi pensati tengono questo soggiorno remoto sul Velebit caldo, luminoso e pratico.",
      blocks: [
        {
          title: "Vivere con l’energia solare",
          body: "Un impianto solare alimenta l’elettricità quotidiana per luci, dispositivi e comfort dello chalet. Quando serve, un generatore sostiene boiler e forno — un ritiro solare per soggiorni veri, non solo prove del weekend.",
        },
        {
          title: "Acqua piovana, filtrata per l’uso",
          body: "L’acqua piovana raccolta alimenta cucina, bevande e docce tramite filtrazione. A questa quota, gestire l’acqua fa parte di una vita leggera in montagna — affidabile, non improvvisata.",
        },
        {
          title: "Comfort sostenibile, non privazione",
          body: "Serate al camino, cucina esterna e casa privata fino a quattro ospiti: off-grid qui sembra un soggiorno remoto quieto in Croazia — moderno dove serve, semplice dove la montagna lo chiede.",
        },
      ],
      pointsLabel: "Come funziona l’off-grid a Stars Peak",
      points: [
        "Energia solare per l’elettricità quotidiana dello chalet",
        "Raccolta di acqua piovana filtrata per cucina e docce",
        "Generatore di backup per boiler e forno quando serve",
        "Internet satellitare per Wi‑Fi veloce e affidabile",
        "Contesto off-grid privato sopra Bačić Duliba",
      ],
      faqTitle: "FAQ chalet off-grid",
      faqs: [
        {
          question: "Lo chalet è completamente a energia solare?",
          answer:
            "Il quotidiano arriva dal solare. Un generatore può alimentare boiler e forno quando la domanda sale — un ritiro solare pratico, non un campeggio spartano.",
        },
        {
          question: "Da dove arriva l’acqua?",
          answer:
            "L’acqua piovana viene raccolta e filtrata per cucinare, bere e fare la doccia. All’arrivo spieghiamo semplici consigli d’uso perché il sistema resti confortevole per tutto il soggiorno.",
        },
        {
          question: "Quanto è comodo un soggiorno off-grid?",
          answer:
            "Aspettatevi una casa di montagna calda e privata con camino, spazi esterni e attrezzature curate — non un campeggio ruvido. Il comfort è intenzionale; il legame con il luogo è il punto.",
        },
        {
          question: "Avrò internet anche off-grid?",
          answer:
            "Sì. L’internet satellitare mantiene il Wi‑Fi affidabile e veloce per call, mappe e upload anche se lo chalet è fuori dalla rete.",
        },
      ],
      ctaLead: "Soggiornate in un ritiro solare dove i sistemi di montagna incontrano il vero comfort.",
    },
    remoteWork: {
      title: "Remote work in natura",
      intro:
        "Stars Peak offre la rara combinazione cercata dai digital nomad: internet veloce e affidabile, silenzio profondo e uno chalet di montagna dove la concentrazione arriva facilmente tra escursioni e mattine lente. Lavorate in remote senza il rumore di scrivanie affollate.",
      blocks: [
        {
          title: "Wi‑Fi veloce in montagna",
          body: "Internet satellitare mantiene videochiamate e upload abbastanza stabili per un vero remote work. Siete in alto sul Velebit — senza restare senza strumenti.",
        },
        {
          title: "Il silenzio come vantaggio",
          body: "Niente rumore di città né coworking affollato — solo aria di bosco, luce che cambia e spazio per pensare. Mattine di deep work, pomeriggi sulla cresta se la giornata lo permette.",
        },
        {
          title: "Comfort dello chalet tra una sessione e l’altra",
          body: "Camino nei giorni freschi, terrazza per le pause fuori e casa privata fino a quattro — workation in due o una settimana concentrata da soli.",
        },
      ],
      pointsLabel: "Per una produttività quieta",
      points: [
        "Wi‑Fi veloce e affidabile per call e upload",
        "Ambiente di montagna quieto, poche distrazioni",
        "Chalet privato per giornate concentrate e serate di riposo",
        "Spazi esterni per brevi pause all’aria aperta",
        "Sentieri e gite in Adriatico a fine giornata",
      ],
      faqTitle: "FAQ remote work",
      faqs: [
        {
          question: "Internet è abbastanza affidabile per il remote work?",
          answer:
            "Sì. L’internet satellitare a Stars Peak è abbastanza veloce e stabile per videochiamate, upload e strumenti cloud quotidiani — la base pratica di cui i remote worker hanno bisogno in montagna.",
        },
        {
          question: "È come uno spazio di coworking?",
          answer:
            "No. Avete uno chalet privato, non scrivanie condivise. Se preferite il focus quieto all’energia del coworking, la casa di montagna è il punto — silenzio, pause in terrazza e il vostro ritmo.",
        },
        {
          question: "Più persone possono lavorare dallo chalet?",
          answer:
            "Sì. La casa ospita fino a quattro — coppie o piccoli team possono condividere una workation. Concordate solo chi prende le call da quale stanza se gli orari si sovrappongono.",
        },
        {
          question: "E se voglio fare trekking durante la settimana di lavoro?",
          answer:
            "Fa parte del soggiorno. Pianificate mattine di deep work e camminate più brevi sulla cresta o gite adriatiche a fine giornata — remote work con la natura davanti alla porta.",
        },
      ],
      ctaLead: "Prenota una base di montagna quieta per remote work con la natura davanti alla porta.",
    },
    photographyRetreat: {
      title: "Ritiro fotografico sul Velebit",
      intro:
        "Stars Peak è un ritiro fotografico sul Velebit per paesaggio e lavoro notturno — Bačić Kuk sopra la casa, cielo scuro dopo il tramonto e luce dorata su cresta e bosco. Portate la macchina per giornate di fotografia di paesaggio in Croazia che finiscono sotto il cielo aperto di montagna.",
      blocks: [
        {
          title: "Inquadrature di paesaggio dalla porta",
          body: "Bačić Kuk e i kukovi intorno danno silhouette forti all’alba e al tramonto. Sentieri nel bosco, margini di prato e linee di cresta sono a minuti dallo chalet — senza lunghi transfer prima dei primi scatti.",
        },
        {
          title: "Cielo scuro per l’astrofotografia",
          body: "Il basso inquinamento luminoso sopra Bačić Duliba sostiene Via Lattea e paesaggio notturno a cielo sereno. Terrazza e brevi camminate verso terreno aperto tengono i setup semplici tra chalet e cresta.",
        },
        {
          title: "Ora dorata, poi quiete di montagna",
          body: "Catturate l’ultima luce calda su roccia e faggio, poi ritorno al camino e al silenzio. Questo soggiorno fotografico sul Velebit è pensato per partenze presto, serate lunghe e spazio per rivedere i file senza fretta.",
        },
      ],
      pointsLabel: "Cosa trovano i fotografi",
      points: [
        "Viste su Bačić Kuk e silhouette di cresta vicino allo chalet",
        "Cielo scuro per l’astrofotografia nelle notti chiare senza luna",
        "Ora dorata e ora blu su bosco e roccia",
        "Spazio privato per attrezzatura, caricare batterie e editare",
        "Gite verso baie adriatiche per contrasti",
      ],
      faqTitle: "FAQ fotografi",
      faqs: [
        {
          question: "Posso usare un treppiede intorno allo chalet?",
          answer:
            "Sì. I treppiedi sono benvenuti in terrazza e sul terreno aperto vicino. Lasciate liberi i passaggi se qualcuno si muove, e abbassate le luci dopo gli scatti notturni.",
        },
        {
          question: "Quanto è forte l’inquinamento luminoso per la foto notturna?",
          answer:
            "L’inquinamento luminoso sopra Bačić Duliba è basso rispetto alla costa. Nelle notti chiare senza luna la Via Lattea può salire forte — condizioni cercate per un ritiro fotografico sul Velebit.",
        },
        {
          question: "Qual è la stagione migliore per la fotografia di paesaggio?",
          answer:
            "Fine primavera e autunno portano aria nitida e colori del bosco che cambiano; l’estate offre ore dorate lunghe e sessioni notturne miti. L’inverno è più quieto e drammatico quando meteo e accesso lo permettono.",
        },
        {
          question: "Stars Peak è solo per l’astrofotografia?",
          answer:
            "No. Le giornate di paesaggio — cresta, bosco e contrasto adriatico — stanno accanto al lavoro notturno. Molti ospiti mischiano entrambi in un soggiorno.",
        },
      ],
      ctaLead: "Pianificate un ritiro fotografico sul Velebit per la luce del paesaggio e il cielo scuro.",
    },
  },
};

export function getTopicPageContent(
  locale: Locale,
  page: SeoTopicPageKey,
): TopicPageContent {
  return byLocale[locale][page];
}

export function getDarkSkyStargazingPageContent(
  locale: Locale,
): TopicPageContent {
  return getTopicPageContent(locale, "darkSkyStargazing");
}

export function getVelebitHikingRetreatPageContent(
  locale: Locale,
): TopicPageContent {
  return getTopicPageContent(locale, "velebitHikingRetreat");
}

export function getOffGridMountainCabinPageContent(
  locale: Locale,
): TopicPageContent {
  return getTopicPageContent(locale, "offGridMountainCabin");
}

export function getRemoteWorkPageContent(locale: Locale): TopicPageContent {
  return getTopicPageContent(locale, "remoteWork");
}

export function getPhotographyRetreatPageContent(
  locale: Locale,
): TopicPageContent {
  return getTopicPageContent(locale, "photographyRetreat");
}
