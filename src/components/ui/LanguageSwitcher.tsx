"use client";

import { useRouter, usePathname } from "next/navigation";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { locales } from "@/lib/i18n/translations";
import { switchLocalePath } from "@/lib/i18n/locale";
import type { Locale } from "@/lib/i18n/translations";

export function LanguageSwitcher() {
  const { locale } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();

  function handleSwitch(target: Locale) {
    if (target === locale) return;
    const newPath = switchLocalePath(pathname, target);
    router.push(newPath);
  }

  return (
    <div
      className="flex items-center rounded-lg border border-brand-200 bg-white p-0.5"
      role="group"
      aria-label="Language"
    >
      {locales.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => handleSwitch(code as Locale)}
          className={`min-h-[36px] min-w-[36px] rounded-md px-2.5 py-1.5 text-xs font-semibold transition-colors ${
            locale === code
              ? "bg-brand-900 text-white"
              : "text-brand-600 hover:bg-brand-50 hover:text-brand-900"
          }`}
          aria-pressed={locale === code}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
