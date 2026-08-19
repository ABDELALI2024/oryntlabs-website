import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProduct, productSlugs } from "@/lib/content/services";
import { JsonLd, breadcrumbJsonLd, productJsonLd, buildMetadata } from "@/lib/seo";
import { CTASection } from "@/components/sections/ServicePageTemplate";

export function generateStaticParams() {
  return productSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return buildMetadata({ ...product.metadata, path: `/products/${slug}`, locale: "en" });
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
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
          ]),
          productJsonLd({
            name: product.name,
            description: product.description,
            path: `/products/${slug}`,
            status: product.status,
          }),
        ]}
      />

      <nav className="mb-4 text-sm text-brand-500">
        <Link href="/">Home</Link> / <Link href="/products">Products</Link> / {product.name}
      </nav>

      <div className="flex flex-wrap items-center gap-3">
        <h1 className="page-h1">{product.name}</h1>
        <span className="rounded-full bg-brand-100 px-3 py-1 text-sm font-medium capitalize text-brand-700">
          {product.status}
        </span>
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

      <p className="mt-8 text-sm text-brand-500">
        [REQUIRES REAL BUSINESS DATA — product URL, pricing, and signup links]
      </p>

      <div className="mt-12">
        <CTASection title={`Interested in ${product.name}?`} description="Contact us for product access, partnerships, or custom platform development." />
      </div>
    </div>
  );
}
