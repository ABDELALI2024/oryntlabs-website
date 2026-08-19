import type { Metadata } from "next";
import { buildMetadata, JsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { ServicesPageClient } from "./ServicesPageClient";

export const metadata: Metadata = buildMetadata({
  title: "Digital Services Morocco | Technology, Design & Printing | OryntLabs",
  description: "Explore OryntLabs services: web development, software, mobile apps, AI solutions, SaaS, design, branding, printing, and digital presence in Rabat, Morocco.",
  path: "/services",
  locale: "en",
  keywords: ["digital services Morocco", "OryntLabs services", "technology services Rabat"],
});

export default function ServicesPage() {
  return (
    <div className="container-page py-8 sm:py-12">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <ServicesPageClient homePath="/" />
    </div>
  );
}
