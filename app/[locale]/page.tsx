import Nav from "@/app/components/Nav";
import Hero from "@/app/components/Hero";
import Services from "@/app/components/Services";
import Projects from "@/app/components/Projects";
import Process from "@/app/components/Process";
import Proof from "@/app/components/Proof";
import Reports from "@/app/components/Reports";
import FinalCta from "@/app/components/FinalCta";
import MobileContactBar from "@/app/components/MobileContactBar";
import Footer from "@/app/components/Footer";
import ScrollBlurOnce from "@/app/components/ScrollBlurOnce";
import ScrollProgress from "@/app/components/ScrollProgress";
import { getDictionary } from "@/app/lib/dictionaries";
import { EMAIL, PHONE_TEL } from "@/app/lib/contact";
import { isLocale, localePath, type Locale } from "@/app/lib/i18n";
import { SITE_URL } from "@/app/lib/site";
import Testimonials from "@/app/components/Testimonials";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: HomePageProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) return null;

  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "OnPoint Bouw",
    url: `${SITE_URL}${localePath(locale)}`,
    logo: `${SITE_URL}/icon-black.png`,
    image: `${SITE_URL}/images/onpoint-residential-renovation-hero.png`,
    description: dict.jsonLd.businessDescription,
    email: EMAIL,
    telephone: PHONE_TEL,
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

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "OnPoint Bouw",
    url: SITE_URL,
    logo: `${SITE_URL}/icon-black.png`,
    email: EMAIL,
    telephone: PHONE_TEL,
    address: {
      "@type": "PostalAddress",
      addressCountry: "NL",
    },
    // TODO: Add real profile URLs (Google Business, social media) to sameAs.
    sameAs: [],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([localBusinessJsonLd, organizationJsonLd]).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />
      <Nav />
      <ScrollBlurOnce />
      <ScrollProgress />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Process />
        <Testimonials />
        <Reports />
        <FinalCta />
      </main>
      <Footer />
      <MobileContactBar />
    </>
  );
}
