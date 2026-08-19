"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { localizedPath } from "@/lib/i18n/locale";
import { SITE } from "@/lib/site";
import { CTASection } from "@/components/sections/ServicePageTemplate";

const categoryHrefs: Record<string, string> = {
  technology: "/services#technology",
  design: "/services/design",
  printing: "/services/printing",
  presence: "/services/digital-presence",
};

export function AboutPageClient({ homePath = "/", contactPath }: { homePath?: string; contactPath?: string }) {
  const { t, locale } = useLanguage();
  const hp = homePath;
  const cp = contactPath ?? localizedPath("/contact", locale);

  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-4 text-sm text-brand-500">
        <Link href={hp}>Home</Link> / {t.nav.about}
      </nav>

      <h1 className="page-h1">{t.about.title}</h1>
      <p className="mt-4 max-w-3xl text-lg text-brand-600">
        <strong>OryntLabs</strong> {t.about.intro}
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="card">
          <h2 className="text-xl font-bold text-brand-950">{t.about.whoTitle}</h2>
          <p className="mt-3 text-sm text-brand-600">{t.about.whoDesc}</p>
        </div>
        <div className="card">
          <h2 className="text-xl font-bold text-brand-950">{t.about.whatTitle}</h2>
          <p className="mt-3 text-sm text-brand-600">{t.about.whatDesc}</p>
        </div>
        <div className="card">
          <h2 className="text-xl font-bold text-brand-950">{t.about.whoServesTitle}</h2>
          <p className="mt-3 text-sm text-brand-600">{t.about.whoServesDesc}</p>
        </div>
        <div className="card">
          <h2 className="text-xl font-bold text-brand-950">{t.about.whereTitle}</h2>
          <p className="mt-3 text-sm text-brand-600">{t.about.whereDesc}</p>
          <dl className="mt-3 space-y-1 text-sm">
            <div className="flex gap-2">
              <dt className="font-medium text-brand-800">{t.contactInfo.email}:</dt>
              <dd><a href={`mailto:${SITE.email}`} className="text-accent-600 hover:underline">{SITE.email}</a></dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-medium text-brand-800">{t.contactInfo.whatsapp}:</dt>
              <dd><a href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:underline">{SITE.whatsapp}</a></dd>
            </div>
          </dl>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-brand-950">{t.about.serviceCategoriesTitle}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {(["technology", "design", "printing", "presence"] as const).map((id) => (
            <Link key={id} href={localizedPath(categoryHrefs[id], locale)} className="card hover:border-accent-200">
              <h3 className="font-semibold text-brand-900">{t.categoryNames[id]}</h3>
              <p className="mt-2 text-sm text-brand-600">{t.categoryDescriptions[id]}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-brand-950">{t.about.productsTitle}</h2>
        <p className="mt-3 text-brand-600">
          {t.about.productsDesc}
        </p>
      </section>

      <div className="mt-12">
        <CTASection />
      </div>
    </>
  );
}
