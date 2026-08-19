"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { FAQSection, CTASection } from "@/components/sections/ServicePageTemplate";
import { globalFaqs } from "@/lib/site";

export function FAQPageClient({ homePath = "/" }: { homePath?: string }) {
  const { t } = useLanguage();
  const hp = homePath;

  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-4 text-sm text-brand-500">
        <Link href={hp}>Home</Link> / {t.nav.faq}
      </nav>

      <h1 className="page-h1">{t.faq.title}</h1>
      <p className="mt-4 max-w-3xl text-lg text-brand-600">
        {t.faq.subtitle}
      </p>
      <div className="mt-10">
        <FAQSection faqs={globalFaqs} />
      </div>
      <div className="mt-12">
        <CTASection />
      </div>
    </>
  );
}
