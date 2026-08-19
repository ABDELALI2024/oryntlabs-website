"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { localizedPath } from "@/lib/i18n/locale";
import { products } from "@/lib/content/services";
import { CTASection } from "@/components/sections/ServicePageTemplate";

export function ProductsPageClient({ homePath = "/" }: { homePath?: string }) {
  const { t, locale } = useLanguage();
  const hp = homePath;

  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-4 text-sm text-brand-500">
        <Link href={hp}>Home</Link> / {t.nav.products}
      </nav>

      <h1 className="page-h1">{t.products.title}</h1>
      <p className="mt-4 max-w-3xl text-lg text-brand-600">
        {t.products.subtitle}
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {Object.values(products).map((product) => (
          <Link key={product.slug} href={localizedPath(`/products/${product.slug}`, locale)} className="card hover:border-accent-200">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-brand-950">{product.name}</h2>
              <span className="rounded-full bg-brand-100 px-2.5 py-0.5 text-xs font-medium capitalize text-brand-700">
                {product.status}
              </span>
            </div>
            <p className="mt-2 font-medium text-accent-600">{product.tagline}</p>
            <p className="mt-3 text-sm text-brand-600">{product.description}</p>
          </Link>
        ))}
      </div>

      <div className="mt-12">
        <CTASection title={t.products.customTitle} description={t.products.customDesc} />
      </div>
    </>
  );
}
