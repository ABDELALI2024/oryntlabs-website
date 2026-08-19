import type { Metadata } from "next";
import { buildMetadata, JsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { ProductsPageClient } from "./ProductsPageClient";

export const metadata: Metadata = buildMetadata({
  title: "Products | Langz & Mahamat | OryntLabs",
  description: "Explore OryntLabs products: Langz AI language learning platform and Mahamat task marketplace. Built by OryntLabs in Rabat, Morocco.",
  path: "/products",
  locale: "en",
  keywords: ["OryntLabs products", "Langz", "Mahamat", "AI language learning", "task marketplace Morocco"],
});

export default function ProductsPage() {
  return (
    <div className="container-page py-8 sm:py-12">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
        ])}
      />
      <ProductsPageClient homePath="/" />
    </div>
  );
}
