import type { Metadata } from "next";
import { buildMetadata, JsonLd, organizationJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { AboutPageClient } from "./AboutPageClient";

export const metadata: Metadata = buildMetadata({
  title: "About OryntLabs | Digital Solutions Company in Rabat, Morocco",
  description: "OryntLabs is a digital solutions and creative services company based in Rabat, Morocco. We help businesses and individuals with web development, software, design, branding, printing, and digital presence.",
  path: "/about",
  locale: "en",
  keywords: [
    "about OryntLabs",
    "OryntLabs Rabat",
    "digital solutions company Morocco",
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
