import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { buildMetadata, JsonLd, breadcrumbJsonLd, productJsonLd } from "@/lib/seo";
import { isValidLocale } from "@/lib/i18n/locale";
import { getProduct, productSlugs } from "@/lib/content/services";
import { CTASection } from "@/components/sections/ServicePageTemplate";
import type { Locale } from "@/lib/i18n/translations";

export function generateStaticParams() {
  return [
    ...productSlugs.map((slug) => ({ locale: "fr", slug })),
    ...productSlugs.map((slug) => ({ locale: "ar", slug })),
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isValidLocale(locale) || locale === "en") return {};
  const product = getProduct(slug);
  if (!product) return {};
  return buildMetadata({ ...product.metadata, path: `/products/${slug}`, locale: locale as Locale });
}

export default async function LocaleProductPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isValidLocale(locale) || locale === "en") notFound();
  const loc = locale as Locale;
  const prefix = `/${locale}`;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <div className="container-page py-8 sm:py-12">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: product.name, path: `/products/${slug}` },
          ], loc),
          productJsonLd({
            name: product.name,
            description: product.description,
            path: `/products/${slug}`,
            status: product.status,
            locale: loc,
          }),
        ]}
      />
      <nav className="mb-4 text-sm text-brand-500">
        <Link href={`${prefix}/`}>Home</Link> / <Link href={`${prefix}/products`}>Products</Link> / {product.name}
      </nav>
      <div className="flex flex-wrap items-center gap-3">
        <h1 className="page-h1">{product.name}</h1>
        <span className="rounded-full bg-brand-100 px-3 py-1 text-sm font-medium capitalize text-brand-700">{product.status}</span>
      </div>
      <p className="mt-2 text-lg font-medium text-accent-600">{product.tagline}</p>
      <p className="mt-4 max-w-3xl text-lg text-brand-600">{product.description}</p>
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-brand-950">Features</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {product.features.map((feature: string) => (
            <li key={feature} className="card text-sm text-brand-700">{feature}</li>
          ))}
        </ul>
      </section>
      <p className="mt-8 text-sm text-brand-500">[REQUIRES REAL BUSINESS DATA — product URL, pricing, and signup links]</p>
      <div className="mt-12">
        <CTASection title={`Interested in ${product.name}?`} description="Contact us for product access, partnerships, or custom platform development." />
      </div>
    </div>
  );
}
