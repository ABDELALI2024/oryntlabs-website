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
});

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "OryntLabs | Digital Solutions, Creative Services & Technology in Rabat, Morocco",
    description: SITE.description,
    path: "/",
    locale: "en",
    keywords: [
      "digital solutions Morocco",
      "digital services Rabat",
      "web development Morocco",
      "software development Morocco",
      "mobile app development Morocco",
      "AI solutions Morocco",
      "SaaS development Morocco",
      "graphic design Morocco",
      "logo design Morocco",
      "branding Morocco",
      "printing services Morocco",
      "digital presence Morocco",
      "Rabat technology company",
    ],
  });
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="canonical" href={SITE.url} />
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
