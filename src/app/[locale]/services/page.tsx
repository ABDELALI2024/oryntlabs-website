import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata, JsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { isValidLocale } from "@/lib/i18n/locale";
import { ServicesPageClient } from "@/app/services/ServicesPageClient";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale) || locale === "en") return {};
  return buildMetadata({
    title: locale === "fr"
      ? "Services Digitaux Maroc | Technologie, Design & Impression | OryntLabs"
      : "الخدمات الرقمية المغرب | التكنولوجيا والتصميم والطباعة | OryntLabs",
    description: locale === "fr"
      ? "Découvrez les services OryntLabs: développement web, logiciel, applications mobiles, solutions IA, SaaS, design, branding, impression et présence digitale à Rabat, Maroc."
      : "اكتشف خدمات OryntLabs: تطوير المواقع والبرمجيات وتطبيقات الهاتف وحلول الذكاء الاصطناعي والتصميم والطباعة والحضور الرقمي في الرباط، المغرب.",
    path: "/services",
    locale: locale as any,
  });
}

export default async function LocaleServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale) || locale === "en") notFound();

  return (
    <div className="container-page py-8 sm:py-12">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ], locale as any)}
      />
      <ServicesPageClient homePath={`/${locale}`} />
    </div>
  );
}
