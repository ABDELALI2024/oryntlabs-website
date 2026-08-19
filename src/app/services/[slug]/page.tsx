import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ServicePageTemplate, CTASection } from "@/components/sections/ServicePageTemplate";
import {
  JsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  buildMetadata,
} from "@/lib/seo";
import {
  getService,
  hubPages,
  serviceSlugs,
  services,
} from "@/lib/content/services";

const hubSlugs = Object.keys(hubPages);
const allSlugs = [...serviceSlugs, ...hubSlugs];

export function generateStaticParams() {
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const hub = hubPages[slug as keyof typeof hubPages];
  if (hub) {
    return buildMetadata({ ...hub.metadata, path: `/services/${slug}`, locale: "en" });
  }

  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({ ...service.metadata, path: `/services/${slug}`, locale: "en" });
}

export default async function ServiceSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

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
            ]),
            serviceJsonLd({
              name: hub.h1,
              description: hub.intro,
              path: `/services/${slug}`,
              category: "Digital Solutions",
            }),
          ]}
        />
        <nav aria-label="Breadcrumb" className="mb-4 text-sm text-brand-500">
          <Link href="/">Home</Link> / <Link href="/services">Services</Link> / {hub.h1}
        </nav>
        <h1 className="page-h1">{hub.h1}</h1>
        <p className="mt-4 max-w-3xl text-lg text-brand-600">{hub.intro}</p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="card hover:border-accent-200"
            >
              <h2 className="font-semibold text-brand-900">{service.title}</h2>
              <p className="mt-2 line-clamp-3 text-sm text-brand-600">{service.intro}</p>
            </Link>
          ))}
        </div>

        <div className="mt-12">
          <CTASection />
        </div>
      </div>
    );
  }

  const service = getService(slug);
  if (!service) notFound();

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: service.title },
  ];

  const relatedLinks: { href: string; label: string }[] = [];
  for (const slug of service.relatedSlugs) {
    const s = services[slug];
    if (s) relatedLinks.push({ href: `/services/${s.slug}`, label: s.title });
  }

  const audienceLabel =
    service.audience === "b2b"
      ? "Businesses"
      : service.audience === "b2c"
        ? "Individuals"
        : "Businesses & Individuals";

  return (
    <div className="container-page py-8 sm:py-12">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.title, path: `/services/${slug}` },
          ]),
          serviceJsonLd({
            name: service.title,
            description: service.intro,
            path: `/services/${slug}`,
            audience: audienceLabel,
            category: service.category,
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
