import type { Metadata } from "next";
import { buildMetadata, JsonLd, localBusinessJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { ContactPageClient } from "./ContactPageClient";

export const metadata: Metadata = buildMetadata({
  title: "Contact OryntLabs | Get a Quote | Rabat, Morocco",
  description: "Contact OryntLabs for web development, software, design, branding, printing, and digital projects. Based in Rabat, Morocco. Response within 24 hours.",
  path: "/contact",
  locale: "en",
  keywords: [
    "contact OryntLabs",
    "request a quote Morocco",
    "web development quote Rabat",
    "digital services contact Morocco",
  ],
});

export default function ContactPage() {
  return (
    <div className="container-page py-8 sm:py-12">
      <JsonLd
        data={[
          localBusinessJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
      <ContactPageClient homePath="/" />
    </div>
  );
}
