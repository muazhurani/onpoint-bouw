import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Process from "./components/Process";
import Reports from "./components/Reports";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";
import ScrollBlurOnce from "./components/ScrollBlurOnce";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "OnPoint Bouw",
  url: "https://onpointgeo.nl",
  logo: "https://onpointgeo.nl/icon-black.png",
  image: "https://onpointgeo.nl/images/onpoint-residential-renovation-hero.png",
  description:
    "Residential construction, renovation, extensions, bathrooms, paving and garden projects for homeowners across the Netherlands.",
  email: "info@onpointgeo.nl",
  telephone: "+31614686059",
  address: {
    "@type": "PostalAddress",
    addressCountry: "NL",
  },
  areaServed: {
    "@type": "Country",
    name: "Netherlands",
  },
  knowsAbout: [
    "Home renovation",
    "House extensions",
    "Garden renovation",
    "Paving and patios",
    "Bathroom renovation",
    "Residential construction",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Residential construction services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Home renovations",
          serviceType: "Residential renovation and finishing",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Extensions and structural work",
          serviceType: "House extension construction",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Gardens and paving",
          serviceType: "Garden construction, patios and paving",
        },
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Nav />
      <ScrollBlurOnce />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Process />
        <Reports />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
