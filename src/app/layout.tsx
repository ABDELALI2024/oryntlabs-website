import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import { LocaleAttributes } from "@/components/ui/LocaleAttributes";
import { WhatsAppFloat } from "@/components/ui/WhatsAppButton";
import {
  buildMetadata,
  JsonLd,
  organizationJsonLd,
  websiteJsonLd,
  localBusinessJsonLd,
  siteNavigationJsonLd,
} from "@/lib/seo";
import { SITE } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "OryntLabs | Digital Technology & Business Solutions in Morocco",
    description:
      "OryntLabs is a Morocco-based digital technology company headquartered in Rabat, providing web development, software, AI, SaaS, digital transformation, design, branding and professional printing solutions.",
    path: "/",
    locale: "en",
    keywords: [
      "digital technology Morocco",
      "web development Morocco",
      "software development Morocco",
      "AI solutions Morocco",
      "SaaS development Morocco",
      "design Morocco",
      "branding Morocco",
      "printing services Morocco",
      "Rabat technology company",
      "digital transformation Morocco",
      "business solutions Morocco",
    ],
  });
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="canonical" href={SITE.url} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#102a43" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <LanguageProvider>
          <LocaleAttributes />
          <JsonLd
            data={[
              organizationJsonLd(),
              websiteJsonLd(),
              localBusinessJsonLd(),
              siteNavigationJsonLd(),
            ]}
          />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2"
          >
            Skip to main content
          </a>
          <Header />
          <main id="main-content" className="min-h-[60vh]">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </LanguageProvider>
      </body>
    </html>
  );
}
