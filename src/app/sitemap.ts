import type { MetadataRoute } from "next";
import { SITE, localesConfig } from "@/lib/site";
import { hubPages, productSlugs, serviceSlugs } from "@/lib/content/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/about", "/contact", "/services", "/products", "/faq", "/privacy", "/terms"];
  const hubSlugs = Object.keys(hubPages);
  const nonDefaultLocales = localesConfig.filter((l) => l.code !== SITE.defaultLocale);

  const mainEntries: MetadataRoute.Sitemap = [
    ...staticPages.map((path) => ({
      url: `${SITE.url}${path}`,
      lastModified: new Date(),
      changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : 0.8,
    })),
    ...serviceSlugs.map((slug) => ({
      url: `${SITE.url}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...hubSlugs.map((slug) => ({
      url: `${SITE.url}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...productSlugs.map((slug) => ({
      url: `${SITE.url}/products/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  const localeEntries: MetadataRoute.Sitemap = [];
  for (const locale of nonDefaultLocales) {
    for (const path of staticPages) {
      localeEntries.push({
        url: `${SITE.url}/${locale.code}${path}`,
        lastModified: new Date(),
        changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
        priority: path === "" ? 0.9 : 0.7,
      });
    }
    for (const slug of serviceSlugs) {
      localeEntries.push({
        url: `${SITE.url}/${locale.code}/services/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.6,
      });
    }
    for (const slug of hubSlugs) {
      localeEntries.push({
        url: `${SITE.url}/${locale.code}/services/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.65,
      });
    }
    for (const slug of productSlugs) {
      localeEntries.push({
        url: `${SITE.url}/${locale.code}/products/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.6,
      });
    }
  }

  return [...mainEntries, ...localeEntries];
}
