"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { localizedPath } from "@/lib/i18n/locale";
import { SITE } from "@/lib/site";
import { FAQSection, CTASection } from "@/components/sections/ServicePageTemplate";

const categoryHrefs: Record<string, string> = {
  technology: "/services#technology",
  design: "/services/design",
  printing: "/services/printing",
  presence: "/services/digital-presence",
};

const techServices = [
  { slug: "/services/web-development", titleKey: "web-development" as const, descKey: "webDevelopment" as const },
  { slug: "/services/software-development", titleKey: "software-development" as const, descKey: "softwareDevelopment" as const },
  { slug: "/services/mobile-app-development", titleKey: "mobile-app-development" as const, descKey: "mobileAppDevelopment" as const },
  { slug: "/services/ai-solutions", titleKey: "ai-solutions" as const, descKey: "aiSolutions" as const },
  { slug: "/services/saas-development", titleKey: "saas-development" as const, descKey: "saasDevelopment" as const },
];

const techDescs: Record<string, Record<string, string>> = {
  en: {
    "web-development": "Business websites, portfolios, and web apps.",
    "software-development": "Custom tools and business applications.",
    "mobile-app-development": "iOS, Android, and cross-platform apps.",
    "ai-solutions": "Practical AI features and automation.",
    "saas-development": "Subscription software products.",
  },
  fr: {
    "web-development": "Sites web d'entreprise, portfolios et applications web.",
    "software-development": "Outils personnalisés et applications métier.",
    "mobile-app-development": "Applications iOS, Android et multiplateformes.",
    "ai-solutions": "Fonctionnalités IA et automatisation pratiques.",
    "saas-development": "Produits logiciels en abonnement.",
  },
  ar: {
    "web-development": "مواقع أعمال، معرض أعمال وتطبيقات ويب.",
    "software-development": "أدوات مخصصة وتطبيقات أعمال.",
    "mobile-app-development": "تطبيقات iOS وAndroid ومتعددة المنصات.",
    "ai-solutions": "ميزات ذكاء اصطناعي عملية وأتمتة.",
    "saas-development": "منتجات برمجيات اشتراكية.",
  },
};

const designServices = [
  { slug: "/services/logo-design", titleKey: "logo-design" as const },
  { slug: "/services/branding", titleKey: "branding" as const },
  { slug: "/services/cv-design", titleKey: "cv-design" as const },
  { slug: "/services/business-card-design", titleKey: "business-card-design" as const },
];

const designDescs: Record<string, Record<string, string>> = {
  en: { "logo-design": "Distinct logos for digital and print.", branding: "Visual identity and brand systems.", "cv-design": "Professional resumes for job seekers.", "business-card-design": "Design for professional networking." },
  fr: { "logo-design": "Logos uniques pour digital et impression.", branding: "Identité visuelle et systèmes de marque.", "cv-design": "CVs professionnels pour chercheurs d'emploi.", "business-card-design": "Design pour le réseau professionnel." },
  ar: { "logo-design": "شعارات مميزة للرقمي والطباعة.", branding: "هوية بصرية وأنظمة علامة تجارية.", "cv-design": "سير ذاتية احترافية للباحثين عن العمل.", "business-card-design": "تصميم للتواصل المهني." },
};

const printingServices = [
  { slug: "/services/business-card-printing", titleKey: "business-card-printing" as const },
  { slug: "/services/flyer-printing", titleKey: "flyer-printing" as const },
  { slug: "/services/brochure-printing", titleKey: "brochure-printing" as const },
  { slug: "/services/custom-printing", titleKey: "custom-printing" as const },
];

const printingDescs: Record<string, Record<string, string>> = {
  en: { "business-card-printing": "Professional card printing.", "flyer-printing": "Marketing and event flyers.", "brochure-printing": "Company and product brochures.", "custom-printing": "Unique formats and materials." },
  fr: { "business-card-printing": "Impression de cartes professionnelles.", "flyer-printing": "Flyers marketing et événementiels.", "brochure-printing": "Brochures d'entreprise et produits.", "custom-printing": "Formats et matériaux uniques." },
  ar: { "business-card-printing": "طباعة بطاقات احترافية.", "flyer-printing": "منشورات تسويقية وحدثية.", "brochure-printing": "كتيبات الشركات والمنتجات.", "custom-printing": "تنسيقات ومواد فريدة." },
};

export function HomePageClient({ homePath = "/" }: { homePath?: string }) {
  const { t, locale } = useLanguage();
  const hp = homePath;

  const catNames: Record<string, string> = t.categoryNames;
  const catDescs: Record<string, string> = t.categoryDescriptions;

  return (
    <>
      {/* Hero */}
      <section className="border-b border-brand-100 bg-gradient-to-b from-brand-50 to-white">
        <div className="container-page grid gap-8 py-12 sm:gap-10 sm:py-16 lg:grid-cols-2 lg:items-center lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-600">
              {SITE.location.city}, {SITE.location.country} · {t.home.heroTag}
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-brand-950 sm:text-5xl lg:text-6xl">
              {t.home.heroTitle}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-brand-600">
              {t.home.heroDesc}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={localizedPath("/contact", locale)} className="btn-primary">{t.home.getQuote}</Link>
              <Link href={localizedPath("/services", locale)} className="btn-secondary">{t.home.exploreServices}</Link>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {(["technology", "design", "printing", "presence"] as const).map((id) => (
              <Link key={id} href={localizedPath(categoryHrefs[id], locale)} className="card hover:border-accent-200 hover:shadow-md transition-shadow">
                <h2 className="font-semibold text-brand-900">{catNames[id]}</h2>
                <p className="mt-2 text-sm text-brand-600">{catDescs[id]}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Answer-first: Who we are */}
      <section className="container-page py-8 sm:py-12">
        <div className="rounded-2xl border border-brand-100 bg-brand-50 p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-brand-950">{t.home.whoTitle}</h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-brand-700">
                <strong>OryntLabs</strong> {t.home.whoDesc}
              </p>
              <p className="mt-3 text-brand-700">
                {t.home.whoServes}
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-brand-900">{t.home.quickAnswers}</h3>
              <dl className="space-y-2 text-sm">
                <div className="flex gap-2">
                  <dt className="font-medium text-brand-800 shrink-0">{t.home.whoWeServe}</dt>
                  <dd className="text-brand-600">{t.home.whoWeServeAnswer}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-medium text-brand-800 shrink-0">{t.home.whereWeAre}</dt>
                  <dd className="text-brand-600">{SITE.location.city}, {SITE.location.country}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-medium text-brand-800 shrink-0">{t.home.whatWeDo}</dt>
                  <dd className="text-brand-600">{t.home.whatWeDoAnswer}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-medium text-brand-800 shrink-0">{t.home.contactLabel}</dt>
                  <dd className="text-brand-600">
                    <a href={`mailto:${SITE.email}`} className="text-accent-600 hover:underline">{SITE.email}</a>
                    {" · "}
                    <a href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:underline">WhatsApp</a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* B2B / B2C */}
      <section className="container-page py-8 sm:py-12">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card">
            <h2 className="text-2xl font-bold text-brand-950">{t.home.b2bTitle}</h2>
            <p className="mt-3 text-brand-600">{t.home.b2bDesc}</p>
            <Link href={localizedPath("/services/business-solutions", locale)} className="mt-5 inline-block text-sm font-semibold text-accent-600 hover:underline">{t.home.b2bCta} →</Link>
          </div>
          <div className="card">
            <h2 className="text-2xl font-bold text-brand-950">{t.home.b2cTitle}</h2>
            <p className="mt-3 text-brand-600">{t.home.b2cDesc}</p>
            <Link href={localizedPath("/services/individual-solutions", locale)} className="mt-5 inline-block text-sm font-semibold text-accent-600 hover:underline">{t.home.b2cCta} →</Link>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="bg-brand-50 py-10 sm:py-16" id="technology">
        <div className="container-page">
          <h2 className="section-heading">{t.home.techTitle}</h2>
          <p className="section-subheading">{t.home.techSubtitle}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {techServices.map((s) => (
              <Link key={s.slug} href={localizedPath(s.slug, locale)} className="card hover:border-accent-200 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-brand-900">{t.serviceNames[s.titleKey]}</h3>
                <p className="mt-2 text-sm text-brand-600">{techDescs[locale][s.titleKey]}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Design */}
      <section className="container-page py-10 sm:py-16">
        <h2 className="section-heading">{t.home.designTitle}</h2>
        <p className="section-subheading">{t.home.designSubtitle}</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {designServices.map((s) => (
            <Link key={s.slug} href={localizedPath(s.slug, locale)} className="card hover:border-accent-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-brand-900">{t.serviceNames[s.titleKey]}</h3>
              <p className="mt-2 text-sm text-brand-600">{designDescs[locale][s.titleKey]}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Printing */}
      <section className="bg-brand-50 py-10 sm:py-16">
        <div className="container-page">
          <h2 className="section-heading">{t.home.printingTitle}</h2>
          <p className="section-subheading">{t.home.printingSubtitle}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {printingServices.map((s) => (
              <Link key={s.slug} href={localizedPath(s.slug, locale)} className="card hover:border-accent-200 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-brand-900">{t.serviceNames[s.titleKey]}</h3>
                <p className="mt-2 text-sm text-brand-600">{printingDescs[locale][s.titleKey]}</p>
              </Link>
            ))}
          </div>
          <Link href={localizedPath("/services/printing", locale)} className="mt-6 inline-block text-sm font-semibold text-accent-600 hover:underline">
            {t.home.viewAllPrinting} →
          </Link>
        </div>
      </section>

      {/* Where we operate */}
      <section className="container-page py-8 sm:py-12">
        <div className="rounded-2xl border border-brand-100 p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-brand-950">{t.home.whereTitle}</h2>
          <p className="mt-3 max-w-3xl text-brand-600">
            {t.home.whereDesc}
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Link href={localizedPath("/services", locale)} className="card hover:border-accent-200">
              <h3 className="font-semibold text-brand-900">{t.home.allServices}</h3>
              <p className="mt-2 text-sm text-brand-600">{t.home.allServicesDesc}</p>
            </Link>
            <Link href={localizedPath("/contact", locale)} className="card hover:border-accent-200">
              <h3 className="font-semibold text-brand-900">{t.home.contactLabelCard}</h3>
              <p className="mt-2 text-sm text-brand-600">{t.home.contactDesc}</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="border-y border-brand-100 bg-white py-10 sm:py-16">
        <div className="container-page">
          <h2 className="section-heading">{t.home.whyTitle}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="card">
              <h3 className="font-semibold text-brand-900">{t.home.why1Title}</h3>
              <p className="mt-2 text-sm text-brand-600">{t.home.why1Desc}</p>
            </div>
            <div className="card">
              <h3 className="font-semibold text-brand-900">{t.home.why2Title}</h3>
              <p className="mt-2 text-sm text-brand-600">{t.home.why2Desc}</p>
            </div>
            <div className="card">
              <h3 className="font-semibold text-brand-900">{t.home.why3Title}</h3>
              <p className="mt-2 text-sm text-brand-600">{t.home.why3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Local */}
      <section className="container-page py-10 sm:py-16">
        <div className="card bg-brand-900 text-white">
          <h2 className="text-2xl font-bold">{t.home.localTitle}</h2>
          <p className="mt-3 max-w-2xl text-brand-200">{t.home.localDesc}</p>
          <p className="mt-4 text-sm text-brand-300">
            {SITE.location.city}, {SITE.location.country} ·{" "}
            <a href={`mailto:${SITE.email}`} className="text-white hover:underline">{SITE.email}</a>
            {" · "}
            <a href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:underline">
              WhatsApp {SITE.whatsapp}
            </a>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-page py-10 sm:py-16">
        <div className="space-y-4">
          <h2 className="section-heading">{t.faq.title}</h2>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-10 sm:pb-16">
        <CTASection
          title={t.home.ctaTitle}
          description={t.home.ctaDesc}
        />
      </section>
    </>
  );
}
