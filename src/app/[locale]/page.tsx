import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata, JsonLd, faqJsonLd } from "@/lib/seo";
import { globalFaqs } from "@/lib/site";
import { isValidLocale } from "@/lib/i18n/locale";
import { HomePageClient } from "@/app/HomePageClient";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale) || locale === "en") return {};
  return buildMetadata({
    title: locale === "fr"
      ? "OryntLabs | Solutions Digitales, Services Créatifs & Technologie à Rabat, Maroc"
      : "OryntLabs | حلول رقمية، خدمات إبداعية وتكنولوجيا في الرباط، المغرب",
    description: locale === "fr"
      ? "OryntLabs aide les entreprises et les particuliers au Maroc avec le développement web, logiciel, mobile, IA, SaaS, design, branding, impression et présence digitale."
      : "تساعد OryntLabs الشركات والأفراد في المغرب في تطوير المواقع والبرمجيات والتطبيقات والذكاء الاصطناعي والتصميم والطباعة والحضور الرقمي.",
    path: "/",
    locale: locale as any,
  });
}

export default async function LocaleHomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale) || locale === "en") notFound();

  return (
    <>
      <JsonLd data={faqJsonLd(globalFaqs.slice(0, 6))} />
      <HomePageClient homePath={`/${locale}`} />
    </>
  );
}
