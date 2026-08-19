import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd, faqJsonLd, buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { globalFaqs } from "@/lib/site";
import { isValidLocale } from "@/lib/i18n/locale";
import { FAQPageClient } from "@/app/faq/FAQPageClient";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale) || locale === "en") return {};
  return buildMetadata({
    title: locale === "fr"
      ? "FAQ | Services Digitaux OryntLabs Maroc"
      : "الأسئلة الشائعة | خدمات OryntLabs الرقمية المغرب",
    description: locale === "fr"
      ? "Questions fréquentes sur les services de développement web, design, branding, impression et présence digitale d'OryntLabs au Maroc."
      : "الأسئلة الشائعة حول خدمات تطوير المواقع والتصميم والطباعة والحضور الرقمي من OryntLabs في المغرب.",
    path: "/faq",
    locale: locale as any,
  });
}

export default async function LocaleFAQPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale) || locale === "en") notFound();

  return (
    <div className="container-page py-8 sm:py-12">
      <JsonLd
        data={[
          faqJsonLd(globalFaqs),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ], locale as any),
        ]}
      />
      <FAQPageClient homePath={`/${locale}`} />
    </div>
  );
}
