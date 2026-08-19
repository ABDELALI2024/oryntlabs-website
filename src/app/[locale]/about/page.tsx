import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata, JsonLd, organizationJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { isValidLocale } from "@/lib/i18n/locale";
import { AboutPageClient } from "@/app/about/AboutPageClient";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale) || locale === "en") return {};
  return buildMetadata({
    title: locale === "fr"
      ? "À propos d'OryntLabs | Entreprise de Solutions Digitales à Rabat, Maroc"
      : "عن OryntLabs | شركة حلول رقمية في الرباط، المغرب",
    description: locale === "fr"
      ? "OryntLabs est une entreprise de solutions digitales et services créatifs basée à Rabat, Maroc."
      : "OryntLabs هي شركة حلول رقمية وخدمات إبداعية مقرها في الرباط، المغرب.",
    path: "/about",
    locale: locale as any,
  });
}

export default async function LocaleAboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale) || locale === "en") notFound();

  return (
    <div className="container-page py-8 sm:py-12">
      <JsonLd
        data={[
          organizationJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ], locale as any),
        ]}
      />
      <AboutPageClient homePath={`/${locale}`} contactPath={`/${locale}/contact`} />
    </div>
  );
}
