export type StatItem = { value: string; label: string };

export type ServiceItem = {
  n: string;
  title: string;
  body: string;
};

export type ProcessStep = {
  n: string;
  title: string;
  body: string;
};

export type TrustPoint = {
  n: string;
  title: string;
  body: string;
};

export type NavLink = {
  label: string;
  hash: string;
};

export type TestimonialItem = {
  quote: string;
  name: string;
  town: string;
  projectType: string;
};


export type Dictionary = {
  meta: {
    title: string;
    description: string;
    keywords: string[];
    category: string;
    ogImageAlt: string;
  };
  nav: {
    ariaLabel: string;
    homeAria: string;
    openMenu: string;
    closeMenu: string;
    links: NavLink[];
    requestQuote: string;
  };
  hero: {
    imageAlt: string;
    eyebrow: string;
    h1Before: string;
    h1Highlight: string;
    subhead: string;
    requestQuote: string;
    call: string;
    stats: StatItem[];
  };
  services: {
    eyebrow: string;
    title: string;
    intro: string;
    items: ServiceItem[];
    expectations: string[];
  };
  projects: {
    eyebrow: string;
    title: string;
    intro: string;
    viewProject: string;
    beforeLabel: string;
    afterLabel: string;
    beforePlaceholder: string;
    readouts: StatItem[];
  };
  process: {
    eyebrow: string;
    title: string;
    intro: string;
    steps: ProcessStep[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    intro: string;
    items: TestimonialItem[];
    trustBar: StatItem[];
  };
  trust: {
    eyebrow: string;
    title: string;
    intro: string;
    points: TrustPoint[];
    /** How pricing works — deliberately contains no price numbers */
    pricing: {
      title: string;
      disclaimer: string;
    };
    aside: string;
    requestQuote: string;
  };
  whatsapp: {
    label: string;
    aria: string;
  };
  mobileBar: {
    ariaLabel: string;
    whatsapp: string;
    call: string;
  };
  cta: {
    eyebrow: string;
    title: string;
    intro: string;
    requestQuote: string;
    whatsappStart: {
      title: string;
      hint: string;
      /** Prefilled WhatsApp message; {type} is replaced with the chosen project type */
      messageTemplate: string;
    };
    photoForm: {
      eyebrow: string;
      title: string;
      intro: string;
      name: string;
      contact: string;
      message: string;
      photos: string;
      photosHint: string;
      removePhoto: string;
      submit: string;
      sending: string;
      sendError: string;
      note: string;
    };
  };
  footer: {
    homeAria: string;
    tagline: string;
    pages: string;
    contact: string;
    country: string;
    region: string;
  };
  inquiry: {
    title: string;
    eyebrow: string;
    submit: string;
    sending: string;
    note: string;
    success: string;
    sendError: string;
    close: string;
    name: string;
    address: string;
    email: string;
    phone: string;
    projectType: string;
    preferredStart: string;
    message: string;
    projectTypes: string[];
  };
  gallery: {
    tapToEnlarge: string;
    previousPhoto: string;
    nextPhoto: string;
    projectPhotos: string;
    showPhoto: string;
    viewFullSize: string;
    closeGallery: string;
    photoOf: string;
  };
  projectPage: {
    backToProjects: string;
    askSimilar: string;
    callUs: string;
    details: string;
    region: string;
    type: string;
    scope: string;
    whatWeDid: string;
    howItCameTogether: string;
    gallery: string;
    galleryBefore: string;
    galleryAfter: string;
    morePhotosPending: string;
    swipeHint: string;
    similarCta: string;
    requestQuote: string;
    breadcrumbHome: string;
    breadcrumbProjects: string;
    areaServed: string;
  };
  jsonLd: {
    businessDescription: string;
    country: string;
    knowsAbout: string[];
    offerCatalogName: string;
    services: { name: string; serviceType: string }[];
  };
  api: {
    invalidBody: string;
    validationError: string;
    rateLimited: string;
    serverError: string;
    success: string;
    leadSubject: string;
    leadHeading: string;
    leadFields: {
      name: string;
      address: string;
      email: string;
      phone: string;
      projectType: string;
      preferredStart: string;
      message: string;
    };
    confirmationSubject: string;
    confirmationGreeting: string;
    confirmationBody: string;
    photoLeadSubject: string;
    photoLeadHeading: string;
    photoValidationError: string;
    photoTooLarge: string;
    photoSuccess: string;
    photoFields: {
      name: string;
      contact: string;
      message: string;
      photos: string;
    };
  };
};
