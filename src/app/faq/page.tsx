import type { Metadata } from "next";
import { JsonLd, faqJsonLd, buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { globalFaqs } from "@/lib/site";
import { FAQPageClient } from "./FAQPageClient";

export const metadata: Metadata = buildMetadata({
  title: "FAQ | OryntLabs Digital Services Morocco",
  description: "Frequently asked questions about OryntLabs web development, design, branding, printing, AI solutions, and digital presence services in Morocco.",
  path: "/faq",
  locale: "en",
  keywords: ["OryntLabs FAQ", "digital services questions Morocco", "web development FAQ"],
});

export default function FAQPage() {
  return (
    <div className="container-page py-8 sm:py-12">
      <JsonLd
        data={[
          faqJsonLd(globalFaqs),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
        ]}
      />
      <FAQPageClient homePath="/" />
    </div>
  );
}
