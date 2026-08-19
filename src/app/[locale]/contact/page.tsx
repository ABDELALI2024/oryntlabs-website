import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata, JsonLd, localBusinessJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { isValidLocale } from "@/lib/i18n/locale";
import { ContactPageClient } from "@/app/contact/ContactPageClient";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale) || locale === "en") return {};
  return buildMetadata({
    title: locale === "fr"
      ? "Contacter OryntLabs | Demander un devis | Rabat, Maroc"
      : "اتصل بـ OryntLabs | اطلب عرض سعر | الرباط، المغرب",
    description: locale === "fr"
      ? "Contactez OryntLabs pour des projets de sites web, logiciels, design, branding, impression et présence digitale à Rabat, Maroc."
      : "اتصل بـ OryntLabs للمواقع والبرمجيات والتصميم والطباعة والحضور الرقمي في الرباط، المغرب.",
    path: "/contact",
    locale: locale as any,
  });
}

export default async function LocaleContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale) || locale === "en") notFound();

  return (
    <div className="container-page py-8 sm:py-12">
      <JsonLd
        data={[
          localBusinessJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ], locale as any),
        ]}
      />
      <ContactPageClient homePath={`/${locale}`} />
    </div>
  );
}
