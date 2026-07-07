import type { Dictionary } from "./types";

const nl: Dictionary = {
  meta: {
    title: "OnPoint Bouw | Verbouwing & Bouw in Nederland",
    description:
      "Aannemer in heel Nederland voor woningverbouwingen, aanbouwen, badkamers, tuinbestrating en patio's. Duidelijke offertes, netjes werk en eerlijk advies — vraag een vrijblijvende offerte aan.",
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
      { label: "Vertrouwen", hash: "trust" },
      { label: "Offerte", hash: "quote" },
    ],
    requestQuote: "Offerte aanvragen",
  },
  hero: {
    imageAlt:
      "Bouwers aan het werk aan een woninguitbreiding en tuinpatio bij een Nederlandse woning.",
    eyebrow: "Verbouwingen · Aanbouwen · Tuinen · Nederland",
    h1Before: "Bouwwerk aan huis, goed",
    h1Highlight: "geregeld.",
    subhead:
      "Tuin, badkamer, aanbouw of complete renovatie — wij helpen huiseigenaren in heel Nederland met helder advies, netjes werk en eerlijke communicatie, van het eerste bezoek tot de opruiming.",
    requestQuote: "Offerte aanvragen",
    call: "Bel +31 6 1571 8727",
    stats: [
      { value: "Gratis", label: "vrijblijvende offerte" },
      { value: "Nederland", label: "heel het land" },
      { value: "Eén", label: "aanspreekpunt" },
    ],
  },
  services: {
    eyebrow: "Hoe wij helpen",
    title: "Eerlijk bouwwerk voor normale woningen.",
    intro:
      "De meeste klanten komen met een praktisch probleem: meer ruimte, een betere tuin, een verouderde badkamer of werk dat af moet. Wij maken het plan helder en houden de klus in beweging.",
    items: [
      {
        n: "01",
        title: "Verbouwingen en aanbouwen",
        body: "Meer ruimte, betere indeling, een nieuwe aanbouw of een oudere kamer die echt aandacht nodig heeft. Wij helpen het idee om te zetten in een realistische klus.",
      },
      {
        n: "02",
        title: "Tuinen en bestrating",
        body: "Bestrating, terrassen, trappen, drainage, verhoogde borders en buitenplekken die gemaakt zijn voor dagelijks gebruik — niet alleen voor een mooie foto.",
      },
      {
        n: "03",
        title: "Badkamers en afwerking",
        body: "Badkamers, tegelwerk, stucwerk, sanitair, kleine reparaties en afwerkingswerk waar rechte lijnen en nette details het verschil maken.",
      },
    ],
    expectations: [
      "We vertellen wat realistisch is voordat u ja zegt.",
      "We houden de werkplek zo overzichtelijk mogelijk.",
      "We leggen keuzes uit die de prijs of planning beïnvloeden.",
    ],
  },
  projects: {
    eyebrow: "Recent werk",
    title: "Recent woningbouwprojecten in heel Nederland.",
    intro:
      "Tuinen, aanbouwen en badkamers voor particuliere huiseigenaren. Open een project om te zien wat er is gedaan en hoe het is afgerond.",
    viewProject: "Bekijk project",
    beforeLabel: "Vóór",
    afterLabel: "Na",
    beforePlaceholder: "Vóór-foto volgt",
    readouts: [
      { value: "Echte", label: "afgeronde projecten" },
      { value: "Lokaal", label: "heel Nederland" },
      { value: "Duidelijk", label: "scope en prijs" },
      { value: "Netjes", label: "schone oplevering" },
    ],
  },
  process: {
    eyebrow: "Werkwijze",
    title: "Wat gebeurt er nadat u belt.",
    intro:
      "Een huiseigenaar hoeft een bouwproject niet als aannemer te managen. Wij houden bij elke stap duidelijk wat de volgende is.",
    steps: [
      {
        n: "01",
        title: "Bezoek en scope",
        body: "We bekijken de ruimte, luisteren naar wat u wilt veranderen en controleren praktische details voordat we de werkzaamheden prijzen.",
      },
      {
        n: "02",
        title: "Duidelijke offerte",
        body: "U ontvangt een heldere offerte met de belangrijkste keuzes, planning en wat erbij is inbegrepen.",
      },
      {
        n: "03",
        title: "Netjes bouwen",
        body: "We beschermen de woning waar nodig, houden de werkplek overzichtelijk en communiceren terwijl het project vordert.",
      },
      {
        n: "04",
        title: "Afronden en opleveren",
        body: "De laatste details worden met u doorgenomen, het werkgebied wordt opgeruimd en alles wordt netjes opgeleverd.",
      },
    ],
  },
  testimonials: {
    eyebrow: "Wat klanten zeggen",
    title: "Huiseigenaren over het werken met ons.",
    intro:
      "Geen geregisseerde reclamepraat — dit is wat klanten terugkoppelen nadat het werk is opgeleverd.",
    // TODO: Replace with real customer testimonials (quote, first name, town, project type).
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
    // TODO: Replace placeholders — real Google rating, actual years active, real KvK number.
    trustBar: [
      { value: "4,9 ★", label: "op Google" },
      { value: "4+ jaar", label: "actief in de bouw" },
      { value: "KvK 89685644", label: "geregistreerd" },
      { value: "Volledig verzekerd", label: "AVB-dekking" },
    ],
  },
  trust: {
    eyebrow: "Waarom huiseigenaren voor ons kiezen",
    title: "Geen vage beloftes. Geen verrassende factuur.",
    intro:
      "Voordat u ja zegt, moet u het werk, de globale planning en wat de prijs beïnvloedt begrijpen. De meeste mensen willen gewoon een bouwer die ze kunnen vertrouwen in en rond hun huis — zo werken wij.",
    points: [
      {
        n: "01",
        title: "Duidelijke offertes",
        body: "U krijgt de scope, de belangrijkste keuzes en wat erbij hoort schriftelijk — voordat er werk begint. Geen verrassende factuur achteraf.",
      },
      {
        n: "02",
        title: "Eén aanspreekpunt",
        body: "U heeft rechtstreeks met ons te maken, van het eerste bezoek tot de oplevering. Geen achtervolgen, geen doorverwijzen.",
      },
      {
        n: "03",
        title: "Respect voor uw woning",
        body: "We beschermen vloeren en doorgangen, houden de werkplek zo overzichtelijk mogelijk en laten alles schoon achter als we klaar zijn.",
      },
      {
        n: "04",
        title: "Eerlijk advies",
        body: "We vertellen wat realistisch is, en zeggen het ook als een klus beter door een andere specialist kan worden gedaan.",
      },
    ],
    // Deliberately no price numbers on the website — pricing is discussed per project.
    pricing: {
      title: "Hoe wij met prijzen omgaan",
      disclaimer:
        "Elke prijs hangt af van uw woning en uw wensen, dus die bespreken we persoonlijk. Wat vaststaat: elke offerte wordt schriftelijk vastgelegd voordat het werk begint — dat bedrag is wat u betaalt.",
    },
    aside:
      "Nog geen bezoek nodig? Stuur een paar foto's en wij geven u een eerste indruk. Privéadressen en klantgegevens komen nooit in publieke voorbeelden.",
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
    title: "Wilt u dat wij naar uw project kijken?",
    intro:
      "Bel, mail of stuur een paar foto's mee met uw offerteaanvraag. Wij vertellen wat realistisch is, wat het inhoudt en wat de volgende stap is — meestal binnen één werkdag.",
    requestQuote: "Offerte aanvragen",
    whatsappStart: {
      title: "Of start direct via WhatsApp",
      hint: "Kies uw project — WhatsApp opent met een kant-en-klaar bericht.",
      messageTemplate:
        "Hallo OnPoint Bouw, ik wil graag een vrijblijvende offerte voor: {type}.",
    },
    photoForm: {
      eyebrow: "Eerste indruk",
      title: "Stuur een paar foto's, krijg een eerste indruk",
      intro:
        "Geen bezoek nodig om te beginnen. Stuur een paar foto's van de ruimte en wij vertellen wat realistisch is.",
      name: "Naam",
      contact: "Telefoon of e-mail",
      message: "Korte omschrijving",
      photos: "Foto's",
      photosHint: "Maximaal 5 foto's, elk tot 8 MB.",
      removePhoto: "Foto verwijderen",
      submit: "Foto's versturen",
      sending: "Versturen...",
      sendError: "Het versturen is niet gelukt.",
      note: "Direct naar OnPoint verstuurd. Wij reageren binnen één werkdag.",
    },
  },
  footer: {
    homeAria: "OnPoint Bouw — naar boven",
    tagline:
      "Verbouwingen, aanbouwen, tuinen en badkamers voor particuliere huiseigenaren in heel Nederland.",
    pages: "Pagina's",
    contact: "Contact",
    country: "Nederland",
    region: "NEDERLAND",
  },
  inquiry: {
    title: "Offerte aanvragen",
    eyebrow: "Projectgegevens",
    submit: "Offerteaanvraag versturen",
    sending: "Versturen...",
    note: "Direct naar OnPoint verstuurd. Geen e-mailapp nodig.",
    success: "Offerteaanvraag verstuurd. Wij reageren binnen één werkdag.",
    sendError: "Het versturen is niet gelukt.",
    close: "Sluiten",
    name: "Naam",
    address: "Adres / plaats",
    email: "E-mail",
    phone: "Telefoon",
    projectType: "Type project",
    preferredStart: "Gewenste start",
    message: "Bericht",
    projectTypes: [
      "Verbouwing",
      "Aanbouw",
      "Tuin / terras",
      "Badkamer",
      "Bestrating",
      "Reparaties / afwerking",
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
