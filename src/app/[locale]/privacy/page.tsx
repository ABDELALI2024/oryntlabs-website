import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { isValidLocale } from "@/lib/i18n/locale";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale) || locale === "en") return {};
  return buildMetadata({
    title: locale === "fr" ? "Politique de confidentialité | OryntLabs" : "سياسة الخصوصية | OryntLabs",
    description: locale === "fr" ? "Politique de confidentialité du site et des services OryntLabs." : "سياسة الخصوصية لموقع وخدمات OryntLabs.",
    path: "/privacy",
    locale: locale as any,
  });
}

export default async function LocalePrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale) || locale === "en") notFound();
  const prefix = `/${locale}`;

  return (
    <div className="container-page prose prose-brand max-w-3xl py-8 sm:py-12">
      <h1>{locale === "fr" ? "Politique de confidentialité" : "سياسة الخصوصية"}</h1>
      <p>{locale === "fr"
        ? "Cette politique de confidentialité explique comment OryntLabs collecte, utilise et protège les informations soumises via ce site web et nos services."
        : "تشرح سياسة الخصوصية هذه كيفية جمع OryntLabs للمعلومات وحمايتها عبر موقعنا وخدماتنا."
      }</p>
      <p className="text-sm text-brand-500">[REQUIRES REAL BUSINESS DATA]</p>
      <p><Link href={`${prefix}/contact`}>{locale === "fr" ? "Contactez-nous" : "اتصل بنا"}</Link> {locale === "fr" ? "pour les questions liées à la confidentialité." : "للأسئلة المتعلقة بالخصوصية."}</p>
    </div>
  );
}
