import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata, JsonLd, breadcrumbJsonLd, serviceJsonLd, faqJsonLd } from "@/lib/seo";
import { isValidLocale } from "@/lib/i18n/locale";
import { getService, hubPages, serviceSlugs, services } from "@/lib/content/services";
import { ServicePageTemplate, CTASection } from "@/components/sections/ServicePageTemplate";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/translations";

const hubSlugs = Object.keys(hubPages);
const allSlugs = [...serviceSlugs, ...hubSlugs];

export function generateStaticParams() {
  return [
    ...allSlugs.map((slug) => ({ locale: "fr", slug })),
    ...allSlugs.map((slug) => ({ locale: "ar", slug })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isValidLocale(locale) || locale === "en") return {};

  const hub = hubPages[slug as keyof typeof hubPages];
  if (hub) {
    return buildMetadata({ ...hub.metadata, path: `/services/${slug}`, locale: locale as Locale });
  }
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({ ...service.metadata, path: `/services/${slug}`, locale: locale as Locale });
}

export default async function LocaleServiceSlugPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isValidLocale(locale) || locale === "en") notFound();
  const loc = locale as Locale;
  const prefix = `/${locale}`;

  const hub = hubPages[slug as keyof typeof hubPages];
  if (hub) {
    const featured = hub.featuredSlugs.map((s) => services[s]).filter(Boolean);
    return (
      <div className="container-page py-8 sm:py-12">
        <JsonLd
          data={[
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: hub.h1, path: `/services/${slug}` },
            ], loc),
            serviceJsonLd({
              name: hub.h1,
              description: hub.intro,
              path: `/services/${slug}`,
              category: "Digital Solutions",
              locale: loc,
            }),
          ]}
        />
        <nav aria-label="Breadcrumb" className="mb-4 text-sm text-brand-500">
          <Link href={`${prefix}/`}>Home</Link> / <Link href={`${prefix}/services`}>Services</Link> / {hub.h1}
        </nav>
        <h1 className="page-h1">{hub.h1}</h1>
        <p className="mt-4 max-w-3xl text-lg text-brand-600">{hub.intro}</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service) => (
            <Link key={service.slug} href={`${prefix}/services/${service.slug}`} className="card hover:border-accent-200">
              <h2 className="font-semibold text-brand-900">{service.title}</h2>
              <p className="mt-2 line-clamp-3 text-sm text-brand-600">{service.intro}</p>
            </Link>
          ))}
        </div>
        <div className="mt-12"><CTASection /></div>
      </div>
    );
  }

  const service = getService(slug);
  if (!service) notFound();

  const breadcrumbs = [
    { label: "Home", href: `${prefix}/` },
    { label: "Services", href: `${prefix}/services` },
    { label: service.title },
  ];
  const relatedLinks: { href: string; label: string }[] = [];
  for (const rSlug of service.relatedSlugs) {
    const s = services[rSlug];
    if (s) relatedLinks.push({ href: `${prefix}/services/${s.slug}`, label: s.title });
  }
  const audienceLabel = service.audience === "b2b" ? "Businesses" : service.audience === "b2c" ? "Individuals" : "Businesses & Individuals";

  return (
    <div className="container-page py-8 sm:py-12">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.title, path: `/services/${slug}` },
          ], loc),
          serviceJsonLd({
            name: service.title,
            description: service.intro,
            path: `/services/${slug}`,
            audience: audienceLabel,
            category: service.category,
            locale: loc,
          }),
          ...(service.faqs.length > 0 ? [faqJsonLd(service.faqs)] : []),
        ]}
      />
      <ServicePageTemplate
        breadcrumbs={breadcrumbs}
        h1={service.h1}
        intro={service.intro}
        valueProposition={service.valueProposition}
        includes={service.includes}
        benefits={service.benefits}
        process={service.process}
        deliverables={service.deliverables}
        faqs={service.faqs}
        relatedLinks={relatedLinks}
        printingDetails={service.printingDetails}
        audience={audienceLabel}
      />
    </div>
  );
}
