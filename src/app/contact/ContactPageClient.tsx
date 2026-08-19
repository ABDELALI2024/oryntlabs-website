"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { localizedPath } from "@/lib/i18n/locale";
import { SITE } from "@/lib/site";
import { ContactForm } from "@/components/forms/ContactForm";
import { ContactInfo } from "@/components/layout/ContactInfo";

export function ContactPageClient({ homePath = "/" }: { homePath?: string }) {
  const { t, locale } = useLanguage();
  const hp = homePath;

  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-4 text-sm text-brand-500">
        <Link href={hp}>Home</Link> / {t.nav.contact}
      </nav>

      <h1 className="page-h1">{t.contact.title}</h1>
      <p className="mt-4 text-lg text-brand-600">
        {t.contact.intro}
      </p>

      <div className="mt-6 rounded-2xl border border-brand-100 bg-brand-50 p-6">
        <h2 className="font-semibold text-brand-900">{t.contact.quickTitle}</h2>
        <p className="mt-2 text-sm text-brand-600">
          {t.contactInfo.email}: <a href={`mailto:${SITE.email}`} className="text-accent-600 hover:underline">{SITE.email}</a>
          {" · "}
          {t.contactInfo.whatsapp}: <a href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:underline">{SITE.whatsapp}</a>
        </p>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <div>
          <ContactInfo />
        </div>
        <ContactForm />
      </div>
    </>
  );
}
