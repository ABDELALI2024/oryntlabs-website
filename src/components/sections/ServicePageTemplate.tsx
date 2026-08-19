"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { localizedPath } from "@/lib/i18n/locale";

export function CTASection({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  const { t, locale } = useLanguage();

  return (
    <section className="rounded-3xl bg-brand-900 px-6 py-8 text-white sm:px-10 sm:py-10">
      <h2 className="text-2xl font-bold sm:text-3xl">{title ?? t.cta.defaultTitle}</h2>
      <p className="mt-3 max-w-2xl text-brand-200">{description ?? t.cta.defaultDesc}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href={localizedPath("/contact", locale)} className="btn bg-white text-brand-900 hover:bg-brand-50">
          {t.cta.getQuote}
        </Link>
        <Link href={localizedPath("/services", locale)} className="btn border border-brand-600 text-white hover:bg-brand-800">
          {t.cta.exploreServices}
        </Link>
      </div>
    </section>
  );
}

export function FAQSection({ faqs }: { faqs: { question: string; answer: string }[] }) {
  return (
    <section className="space-y-4" aria-labelledby="faq-heading">
      <div className="space-y-3">
        {faqs.map((faq) => (
          <details key={faq.question} className="card group">
            <summary className="min-h-[44px] flex cursor-pointer items-center list-none py-2 font-medium text-brand-900 marker:content-none">
              <span className="pe-2 text-accent-600 transition-transform group-open:rotate-90" aria-hidden="true">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
              {faq.question}
            </summary>
            <p className="mt-3 pb-2 text-sm leading-relaxed text-brand-600">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function ServicePageTemplate({
  breadcrumbs,
  h1,
  intro,
  valueProposition,
  includes,
  benefits,
  process,
  deliverables,
  faqs,
  relatedLinks,
  printingDetails,
  audience,
}: {
  breadcrumbs: { label: string; href?: string }[];
  h1: string;
  intro: string;
  valueProposition: string;
  includes: string[];
  benefits: { title: string; description: string }[];
  process: { step: string; description: string }[];
  deliverables: string[];
  faqs: { question: string; answer: string }[];
  relatedLinks: { href: string; label: string }[];
  printingDetails?: {
    formats?: string[];
    materials?: string[];
    finishing?: string[];
    delivery?: string;
  };
  audience: string;
}) {
  const { t, locale } = useLanguage();

  return (
    <article>
      <header className="mb-10">
        <nav aria-label="Breadcrumb" className="mb-4 text-sm text-brand-500">
          {breadcrumbs.map((item, i) => (
            <span key={item.label}>
              {i > 0 && " / "}
              {item.href ? <Link href={item.href} className="hover:text-brand-800">{item.label}</Link> : item.label}
            </span>
          ))}
        </nav>
        <h1 className="page-h1">{h1}</h1>
        <p className="mt-4 max-w-3xl text-lg text-brand-600">{intro}</p>
        <p className="mt-3 max-w-3xl font-medium text-brand-800">{valueProposition}</p>
        <p className="mt-2 text-sm text-brand-500">{t.serviceTemplate.audience}: {audience}</p>
      </header>

      <div className="grid gap-8 lg:grid-cols-3 lg:gap-10">
        <div className="space-y-10 lg:col-span-2">
          <Section title={t.serviceTemplate.includes}>
            <ul className="grid gap-2 sm:grid-cols-2">
              {includes.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-brand-700">
                  <span className="text-accent-600" aria-hidden="true">✓</span>{item}
                </li>
              ))}
            </ul>
          </Section>

          <Section title={t.serviceTemplate.benefits}>
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="card">
                  <h3 className="font-semibold text-brand-900">{benefit.title}</h3>
                  <p className="mt-2 text-sm text-brand-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section title={t.serviceTemplate.process}>
            <ol className="space-y-4">
              {process.map((step, index) => (
                <li key={step.step} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-900 text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-brand-900">{step.step}</h3>
                    <p className="mt-1 text-sm text-brand-600">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Section>

          <Section title={t.serviceTemplate.deliverables}>
            <ul className="list-disc space-y-1 pl-5 text-sm text-brand-700">
              {deliverables.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </Section>

          {printingDetails && (
            <Section title={t.serviceTemplate.printingSpecs}>
              <div className="grid gap-4 sm:grid-cols-2">
                {printingDetails.formats && <SpecList title={t.serviceTemplate.formats} items={printingDetails.formats} />}
                {printingDetails.materials && <SpecList title={t.serviceTemplate.materials} items={printingDetails.materials} />}
                {printingDetails.finishing && <SpecList title={t.serviceTemplate.finishing} items={printingDetails.finishing} />}
                {printingDetails.delivery && (
                  <div className="card sm:col-span-2">
                    <h3 className="font-semibold text-brand-900">{t.serviceTemplate.delivery}</h3>
                    <p className="mt-2 text-sm text-brand-600">{printingDetails.delivery}</p>
                  </div>
                )}
              </div>
            </Section>
          )}

          {faqs.length > 0 && <FAQSection faqs={faqs} />}
        </div>

        <aside className="space-y-6">
          <div className="card sticky top-24">
            <h2 className="text-lg font-semibold text-brand-950">{t.serviceTemplate.requestQuote}</h2>
            <p className="mt-2 text-sm text-brand-600">{t.serviceTemplate.requestQuoteDesc}</p>
            <Link href={localizedPath("/contact", locale)} className="btn-primary mt-4 w-full">{t.cta.getQuote}</Link>
          </div>

          {relatedLinks.length > 0 && (
            <div className="card">
              <h2 className="text-lg font-semibold text-brand-950">{t.serviceTemplate.relatedServices}</h2>
              <ul className="mt-3 space-y-2 text-sm">
                {relatedLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-accent-600 hover:underline">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>

      <div className="mt-12">
        <CTASection />
      </div>
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-brand-950">{title}</h2>
      {children}
    </section>
  );
}

function SpecList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="card">
      <h3 className="font-semibold text-brand-900">{title}</h3>
      <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-brand-600">
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}
