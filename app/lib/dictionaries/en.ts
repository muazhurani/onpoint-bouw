import type { Dictionary } from "./types";

const en: Dictionary = {
  meta: {
    title: "OnPoint Bouw | Renovations, Extensions & Gardens",
    description:
      "OnPoint Bouw renovates homes, extensions, bathrooms and gardens across the Netherlands. See real projects, understand the process and discuss your plans.",
    keywords: [
      "construction company Netherlands",
      "home renovation Netherlands",
      "house extension Netherlands",
      "garden renovation Netherlands",
      "patio paving Netherlands",
      "bathroom renovation Netherlands",
      "residential construction Netherlands",
    ],
    category: "Residential construction",
    ogImageAlt:
      "Home extension and garden renovation in progress at a Dutch residential property.",
  },
  nav: {
    ariaLabel: "Main navigation",
    homeAria: "OnPoint Bouw — back to top",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    links: [
      { label: "Services", hash: "services" },
      { label: "Projects", hash: "projects" },
      { label: "Process", hash: "process" },
      { label: "Agreements", hash: "trust" },
      { label: "Contact", hash: "quote" },
    ],
    requestQuote: "Request a quote",
  },
  hero: {
    imageAlt:
      "Builders working on a home extension and garden patio at a Dutch residential property.",
    eyebrow: "Renovations · Extensions · Gardens · Bathrooms",
    h1Before: "From house extension to complete",
    h1Highlight: "renovation.",
    subhead:
      "OnPoint Bouw delivers renovations, bathrooms, extensions and gardens, with one point of contact and clear agreements from start to handover.",
    requestQuote: "Request a quote",
    call: "Call +31 6 1571 8727",
    stats: [
      { value: "6", label: "projects to view" },
      { value: "Written", label: "quote and scope" },
      { value: "One", label: "point of contact" },
    ],
  },
  services: {
    eyebrow: "Services",
    title: "Building work in and around your home.",
    intro:
      "We deliver complete renovations as well as individual parts of a project. First we assess the home, the required finish and which activities need to connect.",
    items: [
      {
        n: "01",
        title: "Extensions & home renovation",
        body: "From a new opening or layout to floors, walls and final finishes. We first check what the home allows and record the agreed work.",
      },
      {
        n: "02",
        title: "Gardens, patios & paving",
        body: "Paving, patios, drainage, steps, planters and lighting, with attention to the base, water runoff and practical everyday use.",
      },
      {
        n: "03",
        title: "Bathrooms, tiling & custom work",
        body: "Waterproofing, services, tiling, sanitary ware and finishing, plus practical custom work where a standard solution does not fit.",
      },
    ],
    expectations: [
      "The scope is written down before work starts.",
      "Choices that affect cost or timing are discussed first.",
      "You have one direct point of contact.",
    ],
  },
  projects: {
    eyebrow: "Projects",
    title: "View our recent projects.",
    intro:
      "Each project shows the work, photographs and finished result. Use the before-and-after switch or open the project page for more detail.",
    viewProject: "View project",
    beforeLabel: "Before",
    afterLabel: "After",
    beforePlaceholder: "Before photo coming",
    sliderLabel: "Compare before and after",
  },
  process: {
    eyebrow: "Process",
    title: "How a project works.",
    intro:
      "From the first assessment to handover, we keep the work, agreements and next step clear.",
    steps: [
      {
        n: "01",
        title: "First assessment",
        body: "Send your requirements, location and a few photos. We review the request and explain what information is still needed.",
      },
      {
        n: "02",
        title: "Measure & agree",
        body: "On site we confirm dimensions, access, materials and the work required. You then receive a written quote.",
      },
      {
        n: "03",
        title: "Build & coordinate",
        body: "We carry out the work in a logical sequence and discuss choices that affect price, timing or finish.",
      },
      {
        n: "04",
        title: "Check & hand over",
        body: "We review the final details together, explain anything that needs care and leave the work ready to use.",
      },
    ],
  },
  testimonials: {
    eyebrow: "What customers say",
    title: "Homeowners on working with us.",
    intro:
      "No staged marketing lines — this is the feedback customers give after the work is handed over.",
    items: [
      {
        quote:
          "They explained exactly what would happen and what it would cost before starting. The work was tidy and the garden was finished ahead of schedule.",
        name: "Sanne",
        town: "Amersfoort",
        projectType: "Backyard renovation",
      },
      {
        quote:
          "One point of contact from start to finish. Questions were answered the same day and the extension turned out exactly as discussed.",
        name: "Mark",
        town: "Utrecht",
        projectType: "Rear extension",
      },
      {
        quote:
          "The bathroom was done within three weeks. The work area was cleaned up every evening — that made the difference compared to earlier jobs.",
        name: "Fatima",
        town: "Amsterdam",
        projectType: "Bathroom renovation",
      },
    ],
    trustBar: [
      { value: "4.7 ★", label: "on Google" },
      { value: "4+ years", label: "in the building trade" },
      { value: "KvK 89685644", label: "registered" },
      { value: "Fully insured", label: "liability cover" },
    ],
  },
  proof: {
    eyebrow: "Projects in detail",
    title: "More than the finished result.",
    intro:
      "Where available, the project pages show the space before work started, several construction stages and the finished result.",
    items: [
      {
        n: "01",
        title: "The starting point",
        body: "The before photographs show which space, layout or finish was changed.",
        label: "Before",
      },
      {
        n: "02",
        title: "The work behind it",
        body: "Stages such as structure, drainage, underfloor heating and waterproofing show how the work was built up.",
        label: "During",
      },
      {
        n: "03",
        title: "The finished result",
        body: "The final photographs show the completed space, materials and details of the work carried out.",
        label: "After",
      },
    ],
    trustBar: [
      { value: "6 cases", label: "published projects" },
      { value: "Before / during / after", label: "shown in sequence" },
      { value: "Scope", label: "listed per project" },
      { value: "Site photos", label: "from completed work" },
    ],
  },
  trust: {
    eyebrow: "Agreements",
    title: "Clear agreements before work starts.",
    intro:
      "Before starting, we record the work, the main choices and what the price is based on.",
    points: [
      {
        n: "01",
        title: "Defined scope",
        body: "The quote states the work, main materials and assumptions on which the price is based.",
      },
      {
        n: "02",
        title: "Changes discussed first",
        body: "If the situation changes or you choose something different, we explain the effect before carrying out additional work.",
      },
      {
        n: "03",
        title: "Direct contact",
        body: "From the first assessment to handover, you remain in direct contact with the same point of contact.",
      },
      {
        n: "04",
        title: "Built around a lived-in home",
        body: "We discuss access and floor protection in advance and keep the work area as manageable as possible.",
      },
    ],
    // Deliberately no price numbers on the website — pricing is discussed per project.
    pricing: {
      title: "What the price is based on",
      disclaimer:
        "The price is based on the agreed work and the visible situation. If demolition reveals a hidden issue, we discuss the options and any additional work before continuing.",
    },
    aside:
      "For an initial assessment, include a few photos, your location and approximate dimensions with the request.",
    requestQuote: "Request a quote",
  },
  whatsapp: {
    label: "WhatsApp",
    aria: "Send us a message on WhatsApp",
  },
  mobileBar: {
    ariaLabel: "Quick contact",
    whatsapp: "WhatsApp",
    call: "Call us",
  },
  cta: {
    eyebrow: "Request a quote",
    title: "Tell us about your project.",
    intro:
      "Describe the work and tell us where the property is. A few photos and approximate dimensions help us assess the request more quickly.",
    requestQuote: "Request a quote",
    whatsappStart: {
      title: "Start via WhatsApp",
      hint: "Choose the type of work, then add your location, requirements and any useful photos.",
      messageTemplate:
        "Hi OnPoint Bouw, I would like to discuss this project: {type}.",
    },
    photoForm: {
      eyebrow: "Initial assessment",
      title: "Send photos of the space",
      intro:
        "An overview, a detail photo and approximate dimensions help us assess your request.",
      name: "Name",
      contact: "Phone or email",
      message: "Short description",
      photos: "Photos",
      photosHint: "Up to 5 photos, max 8 MB each.",
      removePhoto: "Remove photo",
      submit: "Send photos",
      sending: "Sending...",
      sendError: "Could not send the request.",
      note: "Sent directly to OnPoint Bouw. We usually reply within one working day.",
    },
  },
  footer: {
    homeAria: "OnPoint Bouw — back to top",
    tagline:
      "Renovations, extensions, bathrooms and gardens for private homes across the Netherlands.",
    pages: "Pages",
    contact: "Contact",
    country: "Netherlands",
    region: "NETHERLANDS",
  },
  inquiry: {
    title: "Request a quote",
    eyebrow: "Project details",
    submit: "Send request",
    sending: "Sending...",
    note: "Sent directly to OnPoint Bouw. We reply personally.",
    success: "Project details received. We will come back within one working day.",
    sendError: "Could not send the request.",
    close: "Close",
    name: "Name",
    address: "Address / town",
    email: "Email",
    phone: "Phone",
    projectType: "What needs doing?",
    preferredStart: "Preferred start",
    message: "What would you like to change?",
    projectTypes: [
      "House extension",
      "Home renovation",
      "Garden / patio",
      "Bathroom / toilet",
      "Paving",
      "Custom work / finishing",
    ],
  },
  gallery: {
    tapToEnlarge: "Tap to enlarge",
    previousPhoto: "Previous photo",
    nextPhoto: "Next photo",
    projectPhotos: "Project photos",
    showPhoto: "Show {label}",
    viewFullSize: "View {label} full size",
    closeGallery: "Close gallery",
    photoOf: "{label} — photo {index} of {total}",
  },
  projectPage: {
    backToProjects: "Back to projects",
    askSimilar: "Ask about a similar project",
    callUs: "Call us",
    details: "Project details",
    region: "Area",
    type: "Type",
    scope: "Scope",
    whatWeDid: "What we did",
    howItCameTogether: "How the project came together",
    gallery: "Gallery",
    galleryBefore: "Before",
    galleryAfter: "After",
    morePhotosPending: "More photos from this project are being added.",
    swipeHint: "Swipe or use the arrows to browse the photos.",
    dragHint: "Drag the handle to compare before and after.",
    galleryMore: "More photos",
    similarCta:
      "Planning something similar? Send us a few photos and we'll tell you what is realistic before any work starts.",
    requestQuote: "Request a quote",
    breadcrumbHome: "Home",
    breadcrumbProjects: "Projects",
    areaServed: "Netherlands",
  },
  jsonLd: {
    businessDescription:
      "Residential construction, renovation, extensions, bathrooms, paving and garden projects for homeowners across the Netherlands.",
    country: "Netherlands",
    knowsAbout: [
      "Home renovation",
      "House extensions",
      "Garden renovation",
      "Paving and patios",
      "Bathroom renovation",
      "Residential construction",
    ],
    offerCatalogName: "Residential construction services",
    services: [
      { name: "Home renovations", serviceType: "Residential renovation and finishing" },
      { name: "Extensions and structural work", serviceType: "House extension construction" },
      { name: "Gardens and paving", serviceType: "Garden construction, patios and paving" },
    ],
  },
  api: {
    invalidBody: "Invalid request.",
    validationError:
      "Please enter your name, a valid email, phone number, project type, and a message of at least 10 characters.",
    rateLimited: "Too many requests. Please try again in a few minutes.",
    serverError: "Email service is not configured yet.",
    success: "Quote request sent. We will come back within one working day.",
    leadSubject: "Quote request from {name}",
    leadHeading: "New quote request",
    leadFields: {
      name: "Name",
      address: "Address / town",
      email: "Email",
      phone: "Phone",
      projectType: "Project type",
      preferredStart: "Preferred start",
      message: "Message",
    },
    confirmationSubject: "We received your OnPoint quote request",
    confirmationGreeting: "Hi {name},",
    confirmationBody:
      "Thanks for your quote request. We received your project details and will come back within one working day.",
    photoLeadSubject: "Photo inquiry from {name}",
    photoLeadHeading: "New photo inquiry (first idea)",
    photoValidationError:
      "Please enter your name, a phone number or email, a short message and at least one photo.",
    photoTooLarge: "The photos are too large. Up to 5 photos of 8 MB each.",
    photoSuccess:
      "Photos sent. We'll give you a first idea within one working day.",
    photoFields: {
      name: "Name",
      contact: "Phone / email",
      message: "Message",
      photos: "Photos",
    },
  },
};

export default en;
