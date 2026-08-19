export const SITE = {
  name: "OryntLabs",
  url: "https://oryntlabs.com",
  locale: "en_US",
  defaultLocale: "en" as const,
  locales: ["en", "fr", "ar"] as const,
  location: {
    city: "Rabat",
    country: "Morocco",
    countryCode: "MA",
    region: "Rabat-Sale-Kenitra",
  },
  founded: 2024,
  entityType: "Digital Solutions & Creative Services Company",
  description:
    "OryntLabs is a digital solutions and creative services company based in Rabat, Morocco. We help businesses and individuals with web development, software development, mobile app development, AI solutions, SaaS development, digital transformation, graphic design, logo design, branding, social media design, CV design, printing services, domain and hosting, and digital presence.",
  shortDescription:
    "Digital solutions, creative services, and technology for businesses and individuals in Morocco.",
  email: "oryntlabs@gmail.com",
  phone: "+212680207045",
  phoneLocal: "0680207045",
  whatsapp: "0680207045",
  whatsappUrl: "https://wa.me/212680207045",
  responseTime: "Within 24 hours",
  sameAs: [] as string[],
  socialProfiles: {
    facebook: "",
    instagram: "",
    linkedin: "",
    twitter: "",
  },
} as const;

export const localesConfig = [
  { code: "en", label: "English", htmlLang: "en", dir: "ltr" as const, locale: "en_US" },
  { code: "fr", label: "Francais", htmlLang: "fr", dir: "ltr" as const, locale: "fr_FR" },
  { code: "ar", label: "العربية", htmlLang: "ar", dir: "rtl" as const, locale: "ar_MA" },
] as const;

export type Audience = "b2b" | "b2c" | "both";

export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  title: string;
  h1: string;
  intro: string;
  valueProposition: string;
  category: "technology" | "design" | "printing" | "presence" | "hub";
  audience: Audience;
  primaryKeyword: string;
  includes: string[];
  benefits: { title: string; description: string }[];
  process: { step: string; description: string }[];
  deliverables: string[];
  faqs: FAQ[];
  relatedSlugs: string[];
  metadata: PageMetadata;
  printingDetails?: {
    formats?: string[];
    materials?: string[];
    finishing?: string[];
    delivery?: string;
  };
}

export interface Product {
  slug: string;
  name: string;
  status: "live" | "beta" | "coming-soon";
  tagline: string;
  description: string;
  features: string[];
  metadata: PageMetadata;
}

export const serviceCategories = [
  {
    id: "technology",
    title: "Digital & Technology",
    description: "Websites, software, mobile apps, AI, SaaS, and digital transformation.",
    href: "/services#technology",
  },
  {
    id: "design",
    title: "Design & Creative",
    description: "Logo design, branding, social media design, CVs, and visual identity.",
    href: "/services/design",
  },
  {
    id: "printing",
    title: "Printing",
    description: "Business cards, flyers, brochures, posters, stickers, and custom print.",
    href: "/services/printing",
  },
  {
    id: "presence",
    title: "Digital Presence",
    description: "Domain, hosting, online presence, and Google Business Profile setup.",
    href: "/services/digital-presence",
  },
] as const;

export const globalFaqs: FAQ[] = [
  {
    question: "What digital services does OryntLabs provide?",
    answer:
      "OryntLabs provides web development, custom software development, mobile app development, AI solutions, SaaS development, digital transformation, graphic design, logo design, branding, social media design, CV design, business card design, printing services (business cards, flyers, brochures, posters, stickers, catalogues, custom printing), domain and hosting, and digital presence support for businesses and individuals in Morocco.",
  },
  {
    question: "Does OryntLabs work with businesses?",
    answer:
      "Yes. OryntLabs works with startups, SMEs, organizations, and professionals who need websites, software, branding, printing, and digital transformation support in Morocco.",
  },
  {
    question: "Does OryntLabs provide services for individuals?",
    answer:
      "Yes. OryntLabs helps individuals with personal websites, portfolio sites, CV design, branding, business cards, and professional online presence.",
  },
  {
    question: "Does OryntLabs create websites?",
    answer:
      "Yes. OryntLabs designs and develops business websites, portfolio sites, web applications, and e-commerce platforms tailored to your goals. All websites are built with SEO-friendly structure and mobile-first design.",
  },
  {
    question: "Does OryntLabs provide AI solutions?",
    answer:
      "Yes. OryntLabs builds AI-powered features, automation workflows, and intelligent product capabilities as part of broader digital solutions. AI is one part of our broader services that also include design, printing, and digital presence.",
  },
  {
    question: "Does OryntLabs provide printing services?",
    answer:
      "Yes. OryntLabs offers business card printing, flyer printing, brochure printing, poster printing, sticker printing, catalogue printing, and custom printing for businesses and individuals in Rabat and across Morocco.",
  },
  {
    question: "Where is OryntLabs located?",
    answer:
      "OryntLabs is based in Rabat, Morocco. We serve clients locally in Rabat and across Morocco, and can support remote projects where appropriate.",
  },
  {
    question: "How can I request a quote from OryntLabs?",
    answer:
      "Use the OryntLabs contact form at oryntlabs.com/contact to select your service, describe your project, and submit your details. You can also reach us by email at oryntlabs@gmail.com or WhatsApp at 0680207045. We typically respond within 24 hours.",
  },
  {
    question: "What is OryntLabs?",
    answer:
      "OryntLabs is a digital solutions and creative services company based in Rabat, Morocco. Founded in 2024, we help businesses and individuals with technology, design, branding, printing, and digital presence.",
  },
  {
    question: "Does OryntLabs serve clients outside Morocco?",
    answer:
      "While OryntLabs is based in Rabat, Morocco, we can support remote projects for clients outside Morocco on a case-by-case basis.",
  },
];
