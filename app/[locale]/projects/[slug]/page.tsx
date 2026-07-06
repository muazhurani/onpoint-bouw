import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import InquiryButton from "@/app/components/InquiryButton";
import ProjectGallery from "@/app/components/ProjectGallery";
import { CornerTicks } from "@/app/components/PhotoFrame";
import Footer from "@/app/components/Footer";
import Nav from "@/app/components/Nav";
import { getDictionary } from "@/app/lib/dictionaries";
import { PHONE_TEL } from "@/app/lib/contact";
import { isLocale, localePath, type Locale } from "@/app/lib/i18n";
import { getAllProjectParams, getProject } from "@/app/lib/projects";

type ProjectPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return getAllProjectParams();
}

const siteUrl = "https://onpointgeo.nl";

export async function generateMetadata({ params }: ProjectPageProps) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) return {};

  const locale = rawLocale as Locale;
  const project = getProject(slug, locale);
  if (!project) return {};

  const canonical = localePath(locale, `/projects/${project.slug}`);

  return {
    title: project.title,
    description: project.summary,
    keywords: project.keywords,
    alternates: {
      canonical,
      languages: {
        nl: localePath("nl", `/projects/${project.slug}`),
        en: localePath("en", `/projects/${project.slug}`),
      },
    },
    openGraph: {
      title: `${project.title} | OnPoint Bouw`,
      description: project.summary,
      url: canonical,
      type: "article",
      images: [
        {
          url: project.cover,
          alt: project.coverAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | OnPoint Bouw`,
      description: project.summary,
      images: [project.cover],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) notFound();

  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);
  const project = getProject(slug, locale);
  if (!project) notFound();

  const hasPendingGalleryPhotos = project.gallery.some((item) => !item.src);
  const page = dict.projectPage;
  const gallerySectionTitles = {
    before: page.galleryBefore,
    after: page.galleryAfter,
  } as const;
  const projectUrl = `${siteUrl}${localePath(locale, `/projects/${project.slug}`)}`;

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    url: projectUrl,
    image: `${siteUrl}${project.cover}`,
    keywords: project.keywords.join(", "),
    creator: {
      "@type": "HomeAndConstructionBusiness",
      name: "OnPoint Bouw",
      url: siteUrl,
      areaServed: page.areaServed,
    },
    locationCreated: {
      "@type": "Place",
      name: project.location,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: page.breadcrumbHome,
        item: `${siteUrl}${localePath(locale)}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: page.breadcrumbProjects,
        item: `${siteUrl}${localePath(locale, "/#projects")}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: projectUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([projectJsonLd, breadcrumbJsonLd]).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />
      <Nav />
      <main className="overflow-x-clip">
        <section className="relative overflow-hidden border-b border-grid-line bg-paper pt-28 sm:pt-32">
          <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-6 pb-16 wide:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] wide:items-end">
            <div className="min-w-0">
              <Link
                href={localePath(locale, "/#projects")}
                className="font-mono text-[0.75rem] font-medium uppercase tracking-[0.08em] text-slate transition-colors duration-150 hover:text-ink"
              >
                {page.backToProjects}
              </Link>
              <p className="mt-8 eyebrow text-slate">
                <span aria-hidden="true" className="mr-2 text-accent-yellow">
                  +
                </span>
                {project.eyebrow}
              </p>
              <h1 className="mt-4 max-w-[14ch] font-display text-[clamp(2.2rem,4.8vw,3.75rem)] font-bold leading-[1.06] tracking-[-0.03em]">
                {project.title}
              </h1>
              <p className="mt-6 max-w-[48ch] text-[1.125rem] leading-[1.7] text-slate">
                {project.summary}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <InquiryButton
                  kind="quote"
                  className="bg-accent-yellow px-7 py-3.5 font-medium text-ink transition-all duration-150 hover:-translate-y-0.5 hover:bg-signal-orange"
                >
                  {page.askSimilar}
                </InquiryButton>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="border border-ink/25 px-7 py-3.5 font-medium text-ink transition-all duration-150 hover:-translate-y-0.5 hover:border-ink"
                >
                  {page.callUs}
                </a>
              </div>
            </div>

            <figure className="min-w-0">
              <div className="relative aspect-[4/3] overflow-hidden border border-grid-line bg-ink/[0.04]">
                <CornerTicks />
                <Image
                  src={project.cover}
                  alt={project.coverAlt}
                  fill
                  priority
                  sizes="(max-width: 900px) calc(100vw - 48px), 620px"
                  className="object-cover"
                />
              </div>
            </figure>
          </div>
        </section>

        <section className="section-pad">
          <div className="mx-auto grid w-full max-w-[1200px] gap-12 px-6 wide:grid-cols-[minmax(0,0.34fr)_minmax(0,0.66fr)]">
            <aside className="min-w-0">
              <p className="eyebrow text-slate">
                <span aria-hidden="true" className="mr-2 text-accent-yellow">
                  +
                </span>
                {page.details}
              </p>
              <dl className="mt-6 border-y border-grid-line">
                <div className="border-b border-grid-line py-4">
                  <dt className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-slate">
                    {page.region}
                  </dt>
                  <dd className="mt-1 text-ink">{project.location}</dd>
                </div>
                <div className="border-b border-grid-line py-4">
                  <dt className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-slate">
                    {page.type}
                  </dt>
                  <dd className="mt-1 text-ink">{project.timeframe}</dd>
                </div>
                <div className="py-4">
                  <dt className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-slate">
                    {page.scope}
                  </dt>
                  <dd className="mt-3">
                    <ul className="space-y-2 text-slate">
                      {project.scope.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="text-accent-yellow" aria-hidden="true">
                            +
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
            </aside>

            <div className="min-w-0">
              <p className="eyebrow text-slate">
                <span aria-hidden="true" className="mr-2 text-accent-yellow">
                  +
                </span>
                {page.whatWeDid}
              </p>
              <h2 className="mt-3 font-display text-[clamp(1.8rem,3vw,2.4rem)] font-bold leading-tight">
                {page.howItCameTogether}
              </h2>
              <div className="mt-6 grid gap-5 text-[1.0625rem] leading-[1.8] text-slate">
                {project.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {project.gallery.length > 0 ? (
                <div className="mt-12">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <p className="eyebrow text-slate">
                      <span
                        aria-hidden="true"
                        className="mr-2 text-accent-yellow"
                      >
                        +
                      </span>
                      {page.gallery}
                    </p>
                    <p className="max-w-[36ch] text-[0.875rem] leading-[1.6] text-slate">
                      {hasPendingGalleryPhotos
                        ? page.morePhotosPending
                        : page.swipeHint}
                    </p>
                  </div>
                  {project.gallerySections?.length ? (
                    project.gallerySections.map((section, sectionIndex) => (
                      <div
                        key={section.id}
                        className={sectionIndex === 0 ? "mt-8" : "mt-14"}
                      >
                        <p className="eyebrow text-slate">
                          <span
                            aria-hidden="true"
                            className="mr-2 text-accent-yellow"
                          >
                            +
                          </span>
                          {gallerySectionTitles[section.id]}
                        </p>
                        <ProjectGallery items={section.items} />
                      </div>
                    ))
                  ) : (
                    <ProjectGallery items={project.gallery} />
                  )}
                </div>
              ) : null}

              <div className="mt-12 border-t border-grid-line pt-8">
                <p className="max-w-[44ch] text-[1.0625rem] leading-[1.7] text-slate">
                  {page.similarCta}
                </p>
                <InquiryButton
                  kind="quote"
                  className="mt-6 inline-block bg-accent-yellow px-7 py-3.5 font-medium text-ink transition-all duration-150 hover:-translate-y-0.5 hover:bg-signal-orange"
                >
                  {page.requestQuote}
                </InquiryButton>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
