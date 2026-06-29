import Nav from "@/app/components/Nav";
import Hero from "@/app/components/Hero";
import Services from "@/app/components/Services";
import Projects from "@/app/components/Projects";
import Process from "@/app/components/Process";
import Reports from "@/app/components/Reports";
import FinalCta from "@/app/components/FinalCta";
import Footer from "@/app/components/Footer";
import ScrollBlurOnce from "@/app/components/ScrollBlurOnce";
import { getDictionary } from "@/app/lib/dictionaries";
import { isLocale, localePath, type Locale } from "@/app/lib/i18n";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: HomePageProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) return null;

  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);
  const siteUrl = "https://onpointgeo.nl";

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "OnPoint Bouw",
    url: `${siteUrl}${localePath(locale)}`,
    logo: `${siteUrl}/icon-black.png`,
    image: `${siteUrl}/images/onpoint-residential-renovation-hero.png`,
    description: dict.jsonLd.businessDescription,
    email: "info@onpointgeo.nl",
    telephone: "+31614686059",
    address: {
      "@type": "PostalAddress",
      addressCountry: "NL",
    },
    areaServed: {
      "@type": "Country",
      name: dict.jsonLd.country,
    },
    knowsAbout: dict.jsonLd.knowsAbout,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: dict.jsonLd.offerCatalogName,
      itemListElement: dict.jsonLd.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          serviceType: service.serviceType,
        },
      })),
    },
  };

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
