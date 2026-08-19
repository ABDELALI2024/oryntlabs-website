"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { localizedPath } from "@/lib/i18n/locale";
import { serviceSlugs, services } from "@/lib/content/services";
import { CTASection } from "@/components/sections/ServicePageTemplate";

export function ServicesPageClient({ homePath = "/" }: { homePath?: string }) {
  const { t, locale } = useLanguage();
  const hp = homePath;

  const grouped = {
    technology: serviceSlugs.filter((s) => services[s].category === "technology"),
    design: serviceSlugs.filter((s) => services[s].category === "design"),
    printing: serviceSlugs.filter((s) => services[s].category === "printing"),
    presence: serviceSlugs.filter((s) => services[s].category === "presence"),
  };

  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-4 text-sm text-brand-500">
        <Link href={hp}>Home</Link> / {t.nav.services}
      </nav>

      <h1 className="page-h1">{t.services.title}</h1>
      <p className="mt-4 max-w-3xl text-lg text-brand-600">
        {t.services.subtitle}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link href={localizedPath("/services/business-solutions", locale)} className="btn-secondary">{t.nav.businessSolutions}</Link>
        <Link href={localizedPath("/services/individual-solutions", locale)} className="btn-secondary">{t.nav.individualSolutions}</Link>
      </div>

      <div className="mt-12 space-y-12">
        <ServiceGroup title={t.services.digitalTech} id="technology" slugs={grouped.technology} t={t} locale={locale} />
        <ServiceGroup title={t.services.designCreative} id="design" slugs={grouped.design} t={t} locale={locale} />
        <ServiceGroup title={t.services.printingLabel} id="printing" slugs={grouped.printing} t={t} locale={locale} />
        <ServiceGroup title={t.services.digitalPresence} id="presence" slugs={grouped.presence} t={t} locale={locale} />
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {(["technology", "design", "printing", "presence"] as const).map((id) => (
          <div key={id} className="card">
            <h2 className="font-semibold text-brand-900">{t.categoryNames[id]}</h2>
            <p className="mt-2 text-sm text-brand-600">{t.categoryDescriptions[id]}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <CTASection />
      </div>
    </>
  );
}

function ServiceGroup({ title, id, slugs, t, locale }: { title: string; id: string; slugs: string[]; t: ReturnType<typeof useLanguage>["t"]; locale: string }) {
  return (
    <section id={id}>
      <h2 className="text-2xl font-bold text-brand-950">{title}</h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {slugs.map((slug) => {
          const service = services[slug];
          return (
            <li key={slug}>
              <Link href={localizedPath(`/services/${slug}`, locale as any)} className="card block hover:border-accent-200">
                <h3 className="font-semibold text-brand-900">{t.serviceNames[slug as keyof typeof t.serviceNames] ?? service.title}</h3>
                <p className="mt-2 text-sm text-brand-600 line-clamp-2">{service.intro}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
