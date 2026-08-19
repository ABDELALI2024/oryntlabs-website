import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata, JsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { isValidLocale } from "@/lib/i18n/locale";
import { ProductsPageClient } from "@/app/products/ProductsPageClient";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale) || locale === "en") return {};
  return buildMetadata({
    title: locale === "fr"
      ? "Produits | Langz & Mahamat | OryntLabs"
      : "المنتجات | Langz وMahamat | OryntLabs",
    description: locale === "fr"
      ? "Découvrez les produits OryntLabs: la plateforme d'apprentissage d'Langues par IA Langz et le marché de tâches Mahamat."
      : "اكتشف منتجات OryntLabs: منصة تعلم اللغات بالذكاء الاصطناعي Langz وسوق المهام Mahamat.",
    path: "/products",
    locale: locale as any,
  });
}

export default async function LocaleProductsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale) || locale === "en") notFound();

  return (
    <div className="container-page py-8 sm:py-12">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
        ], locale as any)}
      />
      <ProductsPageClient homePath={`/${locale}`} />
    </div>
  );
}
