import { SITE } from "@/lib/site";
import type { Locale } from "./translations";

export const locales: Locale[] = ["en", "fr", "ar"];

export function isValidLocale(code: string): code is Locale {
  return (locales as string[]).includes(code);
}

export function getLocaleFromPathname(pathname: string): Locale {
  const firstSegment = pathname.split("/")[1];
  if (isValidLocale(firstSegment) && firstSegment !== "en") {
    return firstSegment;
  }
  return "en";
}

export function localizedPath(path: string, locale: Locale): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (locale === "en") return cleanPath;
  return `/${locale}${cleanPath}`;
}

export function getLocaleConfig(locale: Locale) {
  const config = {
    en: { lang: "en", dir: "ltr" as const, ogLocale: "en_US", label: "English" },
    fr: { lang: "fr", dir: "ltr" as const, ogLocale: "fr_FR", label: "Français" },
    ar: { lang: "ar", dir: "rtl" as const, ogLocale: "ar_MA", label: "العربية" },
  };
  return config[locale];
}

export function hreflangs(canonicalPath: string) {
  const cleanPath = canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`;
  return {
    en: `${SITE.url}${cleanPath}`,
    fr: `${SITE.url}/fr${cleanPath}`,
    ar: `${SITE.url}/ar${cleanPath}`,
    "x-default": `${SITE.url}${cleanPath}`,
  };
}

export function switchLocalePath(pathname: string, targetLocale: Locale): string {
  const currentLocale = getLocaleFromPathname(pathname);
  let cleanPath = pathname;

  if (currentLocale !== "en") {
    cleanPath = pathname.replace(new RegExp(`^/${currentLocale}`), "") || "/";
  }

  if (!cleanPath.startsWith("/")) {
    cleanPath = `/${cleanPath}`;
  }

  if (targetLocale === "en") return cleanPath;
  return `/${targetLocale}${cleanPath}`;
}

export const STATIC_PATHS = [
  "/",
  "/about",
  "/contact",
  "/services",
  "/products",
  "/faq",
  "/privacy",
  "/terms",
];
