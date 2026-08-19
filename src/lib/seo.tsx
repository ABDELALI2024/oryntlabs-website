import type { Metadata } from "next";
import { SITE, localesConfig } from "./site";
import type { Locale } from "./i18n/translations";
import { hreflangs, getLocaleConfig } from "./i18n/locale";

export interface BuildMetadataInput {
  title: string;
  description: string;
  path: string;
  locale?: Locale;
  keywords?: readonly string[];
  ogImage?: string;
  noIndex?: boolean;
}

export function buildMetadata({
  title,
  description,
  path,
  locale = "en",
  keywords,
  ogImage = "/og-default.png",
  noIndex = false,
}: BuildMetadataInput): Metadata {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const url = `${SITE.url}${cleanPath}`;
  const localeCfg = getLocaleConfig(locale);
  const alternates = hreflangs(cleanPath);

  return {
    title,
    description,
    keywords: keywords ? [...keywords] : undefined,
    alternates: {
      canonical: url,
      languages: alternates,
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: localeCfg.ogLocale,
      url,
      siteName: SITE.name,
      title,
      description,
      images: [{ url: `${SITE.url}${ogImage}`, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE.url}${ogImage}`],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/logo.png`,
    foundingDate: String(SITE.founded),
    description: SITE.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.location.city,
      addressRegion: SITE.location.region,
      addressCountry: SITE.location.countryCode,
    },
    areaServed: [
      { "@type": "City", name: SITE.location.city },
      { "@type": "Country", name: SITE.location.country },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: SITE.email,
        telephone: SITE.phone,
        availableLanguage: ["English", "French", "Arabic"],
      },
    ],
    email: SITE.email,
    telephone: SITE.phone,
    sameAs: SITE.sameAs.length > 0 ? SITE.sameAs : undefined,
    knowsAbout: [
      "Web Development",
      "Software Development",
      "Mobile App Development",
      "AI Solutions",
      "SaaS Development",
      "Digital Transformation",
      "Graphic Design",
      "Logo Design",
      "Branding",
      "Printing Services",
      "Digital Presence",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "OryntLabs Services",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Digital & Technology",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Software Development" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile App Development" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Solutions" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "SaaS Development" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Transformation" } },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Design & Creative",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Graphic Design" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Logo Design" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Branding" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media Design" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "CV Design" } },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Printing Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Card Printing" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Flyer Printing" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brochure Printing" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Poster Printing" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sticker Printing" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Printing" } },
          ],
        },
      ],
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/logo.png`,
    description: SITE.shortDescription,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.location.city,
      addressRegion: SITE.location.region,
      addressCountry: SITE.location.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 34.0209,
      longitude: -6.8416,
    },
    areaServed: { "@type": "Country", name: SITE.location.country },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: SITE.email,
        telephone: SITE.phone,
        availableLanguage: ["English", "French", "Arabic"],
      },
    ],
    email: SITE.email,
    telephone: SITE.phone,
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    inLanguage: ["en", "fr", "ar"],
    publisher: {
      "@type": "Organization",
      name: SITE.name,
    },
  };
}

export function siteNavigationJsonLd(locale: Locale = "en") {
  const prefix = locale === "en" ? "" : `/${locale}`;
  return {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: "Main Navigation",
    url: SITE.url,
    hasPart: [
      { "@type": "SiteNavigationElement", name: "Home", url: `${SITE.url}${prefix}/` },
      { "@type": "SiteNavigationElement", name: "Services", url: `${SITE.url}${prefix}/services` },
      { "@type": "SiteNavigationElement", name: "Products", url: `${SITE.url}${prefix}/products` },
      { "@type": "SiteNavigationElement", name: "About", url: `${SITE.url}${prefix}/about` },
      { "@type": "SiteNavigationElement", name: "FAQ", url: `${SITE.url}${prefix}/faq` },
      { "@type": "SiteNavigationElement", name: "Contact", url: `${SITE.url}${prefix}/contact` },
    ],
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[], locale: Locale = "en") {
  const prefix = locale === "en" ? "" : `/${locale}`;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE.url}${prefix}${item.path}`,
    })),
  };
}

export function serviceJsonLd(input: {
  name: string;
  description: string;
  path: string;
  audience?: string;
  category?: string;
  locale?: Locale;
}) {
  const prefix = input.locale === "en" || !input.locale ? "" : `/${input.locale}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
    areaServed: { "@type": "Country", name: SITE.location.country },
    url: `${SITE.url}${prefix}${input.path}`,
    audience: input.audience
      ? { "@type": "Audience", audienceType: input.audience }
      : undefined,
    category: input.category,
    serviceType: input.name,
  };
}

export function productJsonLd(input: {
  name: string;
  description: string;
  path: string;
  status?: "live" | "beta" | "coming-soon";
  locale?: Locale;
}) {
  const prefix = input.locale === "en" || !input.locale ? "" : `/${input.locale}`;
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: input.name,
    description: input.description,
    brand: { "@type": "Organization", name: SITE.name },
    url: `${SITE.url}${prefix}${input.path}`,
    offers: {
      "@type": "Offer",
      url: `${SITE.url}${prefix}${input.path}`,
      availability:
        input.status === "live"
          ? "https://schema.org/InStock"
          : "https://schema.org/PreOrder",
      priceCurrency: "MAD",
    },
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
