import type { Dictionary } from "./types";

const en: Dictionary = {
  meta: {
    title: "OnPoint Bouw | Renovation & Construction in the Netherlands",
    description:
      "Builder across the Netherlands for home renovations, extensions, bathrooms, garden paving and patios. Clear quotes, tidy work and honest advice — request a free, no-obligation quote.",
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
      { label: "Trust", hash: "trust" },
      { label: "Quote", hash: "quote" },
    ],
    requestQuote: "Request a quote",
  },
  hero: {
    imageAlt:
      "Builders working on a home extension and garden patio at a Dutch residential property.",
    eyebrow: "Renovations · Extensions · Gardens · Netherlands",
    h1Before: "Home building work, done",
    h1Highlight: "properly.",
    subhead:
      "Garden, bathroom, extension or full renovation — we help homeowners across the Netherlands with clear advice, tidy work and honest communication, from the first visit to the final clean-up.",
    requestQuote: "Request a quote",
    call: "Call +31 6 1468 6059",
    stats: [
      { value: "Free", label: "no-obligation quote" },
      { value: "Netherlands", label: "nationwide" },
      { value: "One", label: "point of contact" },
    ],
  },
  services: {
    eyebrow: "How we can help",
    title: "Straightforward building work for normal homes.",
    intro:
      "Most customers come to us with a practical problem: more space, a better garden, a tired bathroom, or work that needs finishing. We make the plan simple and keep the job moving.",
    items: [
      {
        n: "01",
        title: "Renovations and extensions",
        body: "More space, better layout, a new rear extension, or an older room that needs proper attention. We help turn the idea into a realistic job.",
      },
      {
        n: "02",
        title: "Gardens and paving",
        body: "Paving, patios, steps, drainage, raised borders and outdoor seating areas made for everyday use — not just a nice photo.",
      },
      {
        n: "03",
        title: "Bathrooms and finishing",
        body: "Bathrooms, tiling, plastering, fixtures, small repairs and finish work where straight lines and clean details make the difference.",
      },
    ],
    expectations: [
      "We tell you what is realistic before you commit.",
      "We keep the work area as manageable as possible.",
      "We explain choices that affect price or planning.",
    ],
  },
  projects: {
    eyebrow: "Recent work",
    title: "Recent residential work across the Netherlands.",
    intro:
      "Gardens, extensions and bathrooms for private homeowners. Open a project to see what was involved and how it was finished.",
    viewProject: "View project",
    readouts: [
      { value: "Real", label: "finished projects" },
      { value: "Local", label: "across the Netherlands" },
      { value: "Clear", label: "scope and pricing" },
      { value: "Tidy", label: "clean handover" },
    ],
  },
  process: {
    eyebrow: "How we work",
    title: "What happens after you call.",
    intro:
      "A homeowner should not need to manage a building project like a contractor. We keep the next step clear at each stage.",
    steps: [
      {
        n: "01",
        title: "Visit & scope",
        body: "We look at the space, listen to what you want changed and check practical details before pricing the work.",
      },
      {
        n: "02",
        title: "Clear quote",
        body: "You receive a straightforward quote with the main choices, planning assumptions and what is included.",
      },
      {
        n: "03",
        title: "Build neatly",
        body: "We protect the home where needed, keep the work area manageable and communicate as the project moves.",
      },
      {
        n: "04",
        title: "Finish & handover",
        body: "The final details are checked with you, the area is cleaned up and the work is handed over properly.",
      },
    ],
  },
  trust: {
    eyebrow: "Why homeowners choose us",
    title: "No vague promises. No mystery invoice.",
    intro:
      "Before you say yes, you should understand the work, the rough timing and what affects the price. Most people just want a builder they can trust in and around their home — so that is how we work.",
    points: [
      {
        n: "01",
        title: "Clear quotes",
        body: "You get the scope, the main choices and what is included in writing — before any work starts. No mystery invoice at the end.",
      },
      {
        n: "02",
        title: "One point of contact",
        body: "You deal with us directly, from the first visit to the final handover. No chasing, no being passed between people.",
      },
      {
        n: "03",
        title: "Respect for your home",
        body: "We protect floors and access, keep the work area as manageable as possible and leave it clean when we finish.",
      },
      {
        n: "04",
        title: "Honest advice",
        body: "We tell you what is realistic, and we say when a job is better handled by another specialist instead of pretending.",
      },
    ],
    aside:
      "Not ready for a site visit? Send a few photos and we can give you a first idea. Private addresses and client details are always kept out of public examples.",
    requestQuote: "Request a quote",
  },
  cta: {
    eyebrow: "Request a quote",
    title: "Want us to look at your project?",
    intro:
      "Call, email, or send a few photos with your quote request. We'll tell you what's realistic, what it involves and the sensible next step — usually within one working day.",
    requestQuote: "Request a quote",
  },
  footer: {
    homeAria: "OnPoint Bouw — back to top",
    tagline:
      "Renovations, extensions, gardens and bathrooms for private homeowners across the Netherlands.",
    pages: "Pages",
    contact: "Contact",
    country: "Netherlands",
    region: "NETHERLANDS",
  },
  inquiry: {
    title: "Request a quote",
    eyebrow: "Project details",
    submit: "Send quote request",
    sending: "Sending...",
    note: "Sent directly to OnPoint. No email app needed.",
    success: "Quote request sent. We will come back within one working day.",
    sendError: "Could not send the request.",
    close: "Close",
    name: "Name",
    address: "Address / town",
    email: "Email",
    phone: "Phone",
    projectType: "Project type",
    preferredStart: "Preferred start",
    message: "Message",
    projectTypes: [
      "Renovation",
      "House extension",
      "Garden / patio",
      "Bathroom",
      "Paving",
      "Repairs / finishing",
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
    morePhotosPending: "More photos from this project are being added.",
    swipeHint: "Swipe or use the arrows to browse the photos.",
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
  },
};

export default en;
