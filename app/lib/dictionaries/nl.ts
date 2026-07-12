import type { Dictionary } from "./types";

const nl: Dictionary = {
  meta: {
    title: "OnPoint Bouw | Verbouwing, Aanbouw & Tuin",
    description:
      "OnPoint Bouw realiseert verbouwingen, aanbouwen, badkamers en tuinen in Nederland. Bekijk echte projecten, onze werkwijze en bespreek uw plannen.",
    keywords: [
      "bouwbedrijf Nederland",
      "verbouwing Nederland",
      "aanbouw Nederland",
      "tuinrenovatie Nederland",
      "terras bestrating Nederland",
      "badkamer renovatie Nederland",
      "woningbouw Nederland",
    ],
    category: "Woningbouw",
    ogImageAlt:
      "Woninguitbreiding en tuinrenovatie in uitvoering bij een Nederlandse woning.",
  },
  nav: {
    ariaLabel: "Hoofdnavigatie",
    homeAria: "OnPoint Bouw — naar boven",
    openMenu: "Menu openen",
    closeMenu: "Menu sluiten",
    links: [
      { label: "Diensten", hash: "services" },
      { label: "Projecten", hash: "projects" },
      { label: "Werkwijze", hash: "process" },
      { label: "Afspraken", hash: "trust" },
      { label: "Contact", hash: "quote" },
    ],
    requestQuote: "Offerte aanvragen",
  },
  hero: {
    imageAlt:
      "Bouwers aan het werk aan een woninguitbreiding en tuinpatio bij een Nederlandse woning.",
    eyebrow: "Verbouwingen · Aanbouwen · Tuinen · Badkamers",
    h1Before: "Van aanbouw tot complete",
    h1Highlight: "renovatie.",
    subhead:
      "OnPoint Bouw verzorgt verbouwingen, badkamers, aanbouwen en tuinen. Met één aanspreekpunt, duidelijke afspraken en een heldere planning van start tot oplevering.",
    requestQuote: "Offerte aanvragen",
    call: "Bel +31 6 1571 8727",
    stats: [
      { value: "6", label: "projecten om te bekijken" },
      { value: "Schriftelijk", label: "offerte en werkzaamheden" },
      { value: "Eén", label: "vast aanspreekpunt" },
    ],
  },
  services: {
    eyebrow: "Diensten",
    title: "Werk in en rond uw woning.",
    intro:
      "Wij verzorgen complete verbouwingen en afzonderlijke onderdelen. Vooraf bekijken we de woning, de gewenste afwerking en welke werkzaamheden op elkaar moeten aansluiten.",
    items: [
      {
        n: "01",
        title: "Aanbouw & woningverbouwing",
        body: "Van een nieuwe doorbraak of indeling tot vloeren, wanden en afwerking. We bekijken eerst wat de woning toelaat en leggen de werkzaamheden vooraf vast.",
      },
      {
        n: "02",
        title: "Tuin, terras & bestrating",
        body: "Bestrating, terrassen, drainage, trappen, plantenbakken en verlichting. We letten op een goede ondergrond, afwatering en praktisch dagelijks gebruik.",
      },
      {
        n: "03",
        title: "Badkamer, tegelwerk & maatwerk",
        body: "Waterdichting, leidingwerk, tegelwerk, sanitair en afwerking. Ook voor praktisch maatwerk wanneer een standaardoplossing niet goed past.",
      },
    ],
    expectations: [
      "De scope staat op papier vóór de start.",
      "Keuzes met invloed op prijs of planning bespreken we eerst.",
      "U heeft één direct aanspreekpunt.",
    ],
  },
  projects: {
    eyebrow: "Projecten",
    title: "Bekijk onze recente projecten.",
    intro:
      "Bij ieder project ziet u de werkzaamheden, de foto's en het eindresultaat. Gebruik de schakelaar voor vóór en na, of open de projectpagina voor meer details.",
    viewProject: "Bekijk project",
    beforeLabel: "Vóór",
    afterLabel: "Na",
    beforePlaceholder: "Vóór-foto volgt",
    sliderLabel: "Vergelijk vóór en na",
  },
  process: {
    eyebrow: "Werkwijze",
    title: "Zo verloopt een project.",
    intro:
      "Van de eerste beoordeling tot de oplevering houden we de werkzaamheden, afspraken en volgende stap duidelijk.",
    steps: [
      {
        n: "01",
        title: "Eerste beoordeling",
        body: "Stuur uw wensen, plaats en een paar foto's. We bekijken de aanvraag en geven aan welke informatie nog nodig is.",
      },
      {
        n: "02",
        title: "Inmeten & afspreken",
        body: "Op locatie controleren we maten, bereikbaarheid, materialen en werkzaamheden. Daarna ontvangt u een schriftelijke offerte.",
      },
      {
        n: "03",
        title: "Bouwen & afstemmen",
        body: "We voeren het werk in een logische volgorde uit en bespreken keuzes die invloed hebben op prijs, planning of afwerking.",
      },
      {
        n: "04",
        title: "Controleren & opleveren",
        body: "We lopen de laatste details samen na, leggen uit wat onderhoud vraagt en laten het werk klaar voor gebruik achter.",
      },
    ],
  },
  testimonials: {
    eyebrow: "Wat klanten zeggen",
    title: "Huiseigenaren over het werken met ons.",
    intro:
      "Geen geregisseerde reclamepraat — dit is wat klanten terugkoppelen nadat het werk is opgeleverd.",
    items: [
      {
        quote:
          "Vooraf precies uitgelegd wat er zou gebeuren en wat het zou kosten. Het werk was netjes en de tuin lag er eerder bij dan gepland.",
        name: "Sanne",
        town: "Amersfoort",
        projectType: "Achtertuinrenovatie",
      },
      {
        quote:
          "Eén aanspreekpunt van begin tot eind. Vragen werden dezelfde dag beantwoord en de aanbouw is precies geworden zoals besproken.",
        name: "Mark",
        town: "Utrecht",
        projectType: "Aanbouw",
      },
      {
        quote:
          "De badkamer was binnen drie weken klaar. Elke avond werd de werkplek opgeruimd — dat maakte het verschil met eerdere klussen.",
        name: "Fatima",
        town: "Amsterdam",
        projectType: "Badkamerrenovatie",
      },
    ],
    trustBar: [
      { value: "4.7 ★", label: "op Google" },
      { value: "4+ jaar", label: "actief in de bouw" },
      { value: "KvK 89685644", label: "geregistreerd" },
      { value: "Volledig verzekerd", label: "AVB-dekking" },
    ],
  },
  proof: {
    eyebrow: "Projecten in beeld",
    title: "Meer dan alleen het eindresultaat.",
    intro:
      "Op de projectpagina's tonen we waar mogelijk de situatie vóór de start, een aantal bouwfasen en het afgewerkte resultaat.",
    items: [
      {
        n: "01",
        title: "De beginsituatie",
        body: "De foto's van vóór de start laten zien welke ruimte, indeling of afwerking is aangepakt.",
        label: "Vóór",
      },
      {
        n: "02",
        title: "Het werk erachter",
        body: "Bouwfasen zoals constructie, drainage, vloerverwarming en waterdichting laten zien hoe het werk is opgebouwd.",
        label: "Tijdens",
      },
      {
        n: "03",
        title: "Het afgewerkte resultaat",
        body: "De eindfoto's tonen de afgewerkte ruimte, materialen en details van het uitgevoerde werk.",
        label: "Na",
      },
    ],
    trustBar: [
      { value: "6 projecten", label: "uitgebreid vastgelegd" },
      { value: "Vóór / tijdens / na", label: "in volgorde getoond" },
      { value: "Scope", label: "per project benoemd" },
      { value: "Projectfoto's", label: "van uitgevoerd werk" },
    ],
  },
  trust: {
    eyebrow: "Afspraken",
    title: "Duidelijke afspraken vóór de start.",
    intro:
      "Voor de start leggen we vast wat er wordt uitgevoerd, welke keuzes zijn gemaakt en waarop de prijs is gebaseerd.",
    points: [
      {
        n: "01",
        title: "Afgebakende scope",
        body: "In de offerte staan de werkzaamheden, de belangrijkste materialen en de uitgangspunten waarop de prijs is gebaseerd.",
      },
      {
        n: "02",
        title: "Meerwerk eerst bespreken",
        body: "Verandert de situatie of kiest u iets anders, dan leggen we de gevolgen uit voordat we aanvullend werk uitvoeren.",
      },
      {
        n: "03",
        title: "Direct contact",
        body: "Van de eerste beoordeling tot de oplevering heeft u rechtstreeks contact met hetzelfde aanspreekpunt.",
      },
      {
        n: "04",
        title: "Werken in een bewoond huis",
        body: "We bespreken toegang en vloerbescherming vooraf en houden de werkplek tijdens de werkzaamheden zo overzichtelijk mogelijk.",
      },
    ],
    // Deliberately no price numbers on the website — pricing is discussed per project.
    pricing: {
      title: "Waar de prijs op is gebaseerd",
      disclaimer:
        "De prijs is gebaseerd op de afgesproken werkzaamheden en de zichtbare situatie. Als tijdens sloopwerk een verborgen probleem naar voren komt, bespreken we de opties en het eventuele meerwerk voordat we verdergaan.",
    },
    aside:
      "Wilt u eerst weten of uw plan haalbaar is? Stuur een paar foto's, uw plaats en globale maten mee met de aanvraag.",
    requestQuote: "Offerte aanvragen",
  },
  whatsapp: {
    label: "WhatsApp",
    aria: "Stuur ons een bericht via WhatsApp",
  },
  mobileBar: {
    ariaLabel: "Snel contact",
    whatsapp: "WhatsApp",
    call: "Bel ons",
  },
  cta: {
    eyebrow: "Offerte aanvragen",
    title: "Bespreek uw project met ons.",
    intro:
      "Vertel wat u wilt laten uitvoeren en waar de woning staat. Met een paar foto's en globale maten kunnen we de aanvraag sneller beoordelen.",
    requestQuote: "Offerte aanvragen",
    whatsappStart: {
      title: "Start via WhatsApp",
      hint: "Kies het type werk en voeg daarna uw plaats, wensen en eventueel foto's toe.",
      messageTemplate:
        "Hallo OnPoint Bouw, ik wil graag dit project bespreken: {type}.",
    },
    photoForm: {
      eyebrow: "Eerste beoordeling",
      title: "Stuur foto's van de ruimte",
      intro:
        "Een overzichtsfoto, een detailfoto en globale maten helpen ons om uw aanvraag goed te beoordelen.",
      name: "Naam",
      contact: "Telefoon of e-mail",
      message: "Korte omschrijving",
      photos: "Foto's",
      photosHint: "Maximaal 5 foto's, elk tot 8 MB.",
      removePhoto: "Foto verwijderen",
      submit: "Foto's versturen",
      sending: "Versturen...",
      sendError: "Het versturen is niet gelukt.",
      note: "Direct naar OnPoint Bouw verstuurd. Wij reageren meestal binnen één werkdag.",
    },
  },
  footer: {
    homeAria: "OnPoint Bouw — naar boven",
    tagline:
      "Verbouwingen, aanbouwen, badkamers en tuinen voor particuliere woningen in Nederland.",
    pages: "Pagina's",
    contact: "Contact",
    country: "Nederland",
    region: "NEDERLAND",
  },
  inquiry: {
    title: "Offerte aanvragen",
    eyebrow: "Projectgegevens",
    submit: "Aanvraag versturen",
    sending: "Versturen...",
    note: "Direct naar OnPoint Bouw verstuurd. Wij reageren persoonlijk.",
    success: "Projectgegevens ontvangen. Wij reageren binnen één werkdag.",
    sendError: "Het versturen is niet gelukt.",
    close: "Sluiten",
    name: "Naam",
    address: "Adres / plaats",
    email: "E-mail",
    phone: "Telefoon",
    projectType: "Wat moet er gebeuren?",
    preferredStart: "Gewenste start",
    message: "Wat wilt u veranderen?",
    projectTypes: [
      "Aanbouw / uitbouw",
      "Woningverbouwing",
      "Tuin / terras",
      "Badkamer / toilet",
      "Bestrating",
      "Maatwerk / afwerking",
    ],
  },
  gallery: {
    tapToEnlarge: "Tik om te vergroten",
    previousPhoto: "Vorige foto",
    nextPhoto: "Volgende foto",
    projectPhotos: "Projectfoto's",
    showPhoto: "Toon {label}",
    viewFullSize: "{label} op volledige grootte bekijken",
    closeGallery: "Galerij sluiten",
    photoOf: "{label} — foto {index} van {total}",
  },
  projectPage: {
    backToProjects: "Terug naar projecten",
    askSimilar: "Vraag over een vergelijkbaar project",
    callUs: "Bel ons",
    details: "Projectgegevens",
    region: "Regio",
    type: "Type",
    scope: "Werkzaamheden",
    whatWeDid: "Wat we deden",
    howItCameTogether: "Hoe het project tot stand kwam",
    gallery: "Galerij",
    galleryBefore: "Vóór",
    galleryAfter: "Na",
    morePhotosPending: "Meer foto's van dit project worden toegevoegd.",
    swipeHint: "Veeg of gebruik de pijlen om door de foto's te bladeren.",
    dragHint: "Sleep de schuif om vóór en na te vergelijken.",
    galleryMore: "Meer beelden",
    similarCta:
      "Plant u iets vergelijkbaars? Stuur ons een paar foto's en wij vertellen wat realistisch is voordat er werk begint.",
    requestQuote: "Offerte aanvragen",
    breadcrumbHome: "Start",
    breadcrumbProjects: "Projecten",
    areaServed: "Nederland",
  },
  jsonLd: {
    businessDescription:
      "Woningbouw, verbouwingen, aanbouwen, badkamers, bestrating en tuinprojecten voor huiseigenaren in heel Nederland.",
    country: "Nederland",
    knowsAbout: [
      "Woningverbouwing",
      "Aanbouwen",
      "Tuinrenovatie",
      "Bestrating en terrassen",
      "Badkamerrenovatie",
      "Woningbouw",
    ],
    offerCatalogName: "Woningbouwdiensten",
    services: [
      { name: "Woningverbouwingen", serviceType: "Verbouwing en afwerking" },
      { name: "Aanbouwen en constructiewerk", serviceType: "Aanbouw en constructie" },
      { name: "Tuinen en bestrating", serviceType: "Tuinbouw, terrassen en bestrating" },
    ],
  },
  api: {
    invalidBody: "Ongeldig verzoek.",
    validationError:
      "Vul uw naam, een geldig e-mailadres, telefoonnummer, type project en een bericht van minimaal 10 tekens in.",
    rateLimited: "Te veel verzoeken. Probeer het over een paar minuten opnieuw.",
    serverError: "E-mailservice is nog niet geconfigureerd.",
    success: "Offerteaanvraag verstuurd. Wij reageren binnen één werkdag.",
    leadSubject: "Offerteaanvraag van {name}",
    leadHeading: "Nieuwe offerteaanvraag",
    leadFields: {
      name: "Naam",
      address: "Adres / plaats",
      email: "E-mail",
      phone: "Telefoon",
      projectType: "Type project",
      preferredStart: "Gewenste start",
      message: "Bericht",
    },
    confirmationSubject: "Wij hebben uw offerteaanvraag ontvangen",
    confirmationGreeting: "Hallo {name},",
    confirmationBody:
      "Bedankt voor uw offerteaanvraag. Wij hebben uw projectgegevens ontvangen en reageren binnen één werkdag.",
    photoLeadSubject: "Foto-aanvraag van {name}",
    photoLeadHeading: "Nieuwe foto-aanvraag (eerste indruk)",
    photoValidationError:
      "Vul uw naam, telefoonnummer of e-mailadres, een kort bericht en minimaal één foto in.",
    photoTooLarge:
      "De foto's zijn te groot. Maximaal 5 foto's van elk 8 MB.",
    photoSuccess:
      "Foto's verstuurd. Wij geven u binnen één werkdag een eerste indruk.",
    photoFields: {
      name: "Naam",
      contact: "Telefoon / e-mail",
      message: "Bericht",
      photos: "Foto's",
    },
  },
};

export default nl;
