import type { Metadata } from "next";
import { buildMetadata, JsonLd, organizationJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { AboutPageClient } from "./AboutPageClient";

export const metadata: Metadata = buildMetadata({
  title: "About OryntLabs | Digital Technology Company in Rabat, Morocco",
  description: "OryntLabs is a Morocco-based digital technology company headquartered in Rabat, providing web development, software, AI, SaaS, design, branding and professional printing solutions.",
  path: "/about",
  locale: "en",
  keywords: [
    "about OryntLabs",
    "OryntLabs Rabat",
    "digital technology company Morocco",
    "technology company Rabat",
  ],
});

export default function AboutPage() {
  return (
    <div className="container-page py-8 sm:py-12">
      <JsonLd
        data={[
          organizationJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />
      <AboutPageClient homePath="/" contactPath="/contact" />
    </div>
  );
}
