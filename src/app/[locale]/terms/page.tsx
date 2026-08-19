import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { isValidLocale } from "@/lib/i18n/locale";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale) || locale === "en") return {};
  return buildMetadata({
    title: locale === "fr" ? "Conditions d'utilisation | OryntLabs" : "شروط الاستخدام | OryntLabs",
    description: locale === "fr" ? "Conditions d'utilisation du site et des services OryntLabs." : "شروط الاستخدام لموقع وخدمات OryntLabs.",
    path: "/terms",
    locale: locale as any,
  });
}

export default async function LocaleTermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale) || locale === "en") notFound();
  const prefix = `/${locale}`;

  return (
    <div className="container-page prose prose-brand max-w-3xl py-8 sm:py-12">
      <h1>{locale === "fr" ? "Conditions d'utilisation" : "شروط الاستخدام"}</h1>
      <p>{locale === "fr"
        ? "Ces conditions régissent l'utilisation du site web OryntLabs et l'engagement avec nos services."
        : "تحكم شروط الاستخدام هذه استخدام موقع OryntLabs والتفاعل مع خدماتنا."
      }</p>
      <p className="text-sm text-brand-500">[REQUIRES REAL BUSINESS DATA]</p>
      <p><Link href={`${prefix}/contact`}>{locale === "fr" ? "Contactez-nous" : "اتصل بنا"}</Link> {locale === "fr" ? "pour des questions sur nos conditions." : "للأسئلة حول شروطنا."}</p>
    </div>
  );
}
