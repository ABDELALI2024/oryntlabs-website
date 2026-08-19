import type { Metadata } from "next";
import { JsonLd, faqJsonLd, buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { globalFaqs } from "@/lib/site";
import { FAQPageClient } from "./FAQPageClient";

export const metadata: Metadata = buildMetadata({
  title: "FAQ | OryntLabs Digital Technology & Business Solutions",
  description: "Answers to common questions about OryntLabs web development, software, AI solutions, design, branding, printing services and digital presence in Morocco.",
  path: "/faq",
  locale: "en",
  keywords: ["OryntLabs FAQ", "digital technology questions Morocco", "web development FAQ", "printing services FAQ"],
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
