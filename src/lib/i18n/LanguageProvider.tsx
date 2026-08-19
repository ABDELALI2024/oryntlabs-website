"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { translations, type Locale } from "./translations";
import { getLocaleFromPathname } from "./locale";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (typeof translations)[Locale];
  dir: "ltr" | "rtl";
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const detected = getLocaleFromPathname(pathname);
    setLocaleState(detected);
    document.documentElement.lang = detected;
    document.documentElement.dir = detected === "ar" ? "rtl" : "ltr";
  }, [pathname]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
  }, []);

  const value: LanguageContextValue = {
    locale,
    setLocale,
    t: translations[locale],
    dir: locale === "ar" ? "rtl" : "ltr",
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
