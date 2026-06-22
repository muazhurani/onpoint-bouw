import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import FieldWork from "./components/FieldWork";
import Flatness from "./components/Flatness";
import Process from "./components/Process";
import Reports from "./components/Reports";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";
import ScrollBlurOnce from "./components/ScrollBlurOnce";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "OnPoint Geomatics",
  url: "https://onpointgeo.nl",
  logo: "https://onpointgeo.nl/logo-black.png",
  image: "https://onpointgeo.nl/images/onpoint-total-station-civil-site.png",
  description:
    "High-accuracy construction surveying and geomatics for layout, stakeout, concrete slabs, steel, civil works, FF/FL surveys and as-built verification.",
  email: "info@onpointgeo.nl",
  telephone: "+31614686059",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Eindhoven",
    addressCountry: "NL",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Eindhoven",
    },
    {
      "@type": "Country",
      name: "Netherlands",
    },
  ],
  knowsAbout: [
    "Construction surveying",
    "Layout and stakeout",
    "Concrete slab surveys",
    "Steel verification",
    "Civil works surveying",
    "Floor flatness and levelness surveys",
    "As-built verification",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Construction surveying services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Layout and stakeout",
          serviceType: "Construction layout and stakeout",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Floor flatness and levelness surveys",
          serviceType: "FF/FL concrete slab survey",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "As-built verification",
          serviceType: "Steel, slab and civil works verification",
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
        <FieldWork />
        <Flatness />
        <Process />
        <Reports />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
