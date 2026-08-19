"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { localizedPath } from "@/lib/i18n/locale";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { WhatsAppIconLink } from "@/components/ui/WhatsAppButton";
import { SITE } from "@/lib/site";

const serviceLinks = (t: ReturnType<typeof useLanguage>["t"], locale: string) => ({
  technology: [
    { href: localizedPath("/services/web-development", locale as any), label: t.mega.webDev },
    { href: localizedPath("/services/software-development", locale as any), label: t.mega.softwareDev },
    { href: localizedPath("/services/mobile-app-development", locale as any), label: t.mega.mobileApps },
    { href: localizedPath("/services/ai-solutions", locale as any), label: t.mega.aiSolutions },
    { href: localizedPath("/services/saas-development", locale as any), label: t.mega.saasDev },
  ],
  design: [
    { href: localizedPath("/services/design", locale as any), label: t.mega.designLabel },
    { href: localizedPath("/services/logo-design", locale as any), label: t.mega.logoDesign },
    { href: localizedPath("/services/branding", locale as any), label: t.mega.branding },
    { href: localizedPath("/services/cv-design", locale as any), label: t.mega.cvDesign },
  ],
  printing: [
    { href: localizedPath("/services/printing", locale as any), label: t.mega.printingLabel },
    { href: localizedPath("/services/business-card-printing", locale as any), label: t.mega.businessCards },
    { href: localizedPath("/services/flyer-printing", locale as any), label: t.mega.flyers },
    { href: localizedPath("/services/custom-printing", locale as any), label: t.mega.customPrinting },
  ],
  presence: [
    { href: localizedPath("/services/domain-hosting", locale as any), label: t.mega.domainHosting },
    { href: localizedPath("/services/digital-presence", locale as any), label: t.mega.digitalPresence },
    { href: localizedPath("/services/google-business-profile", locale as any), label: t.mega.googleBusiness },
  ],
});

export function Header() {
  const { t, locale } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-white/95 backdrop-blur">
      <div className="container-page flex h-14 items-center justify-between gap-3 sm:h-16 sm:gap-4">
        <Link href={localizedPath("/", locale)} className="flex items-center gap-2 min-h-[44px]">
          <Image src="/logo.png" alt="OryntLabs" width={36} height={36} className="rounded-md" priority />
          <span className="text-lg font-bold text-brand-950 hidden sm:inline">
            Orynt<span className="text-accent-600">Labs</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          <MegaMenu triggerLabel={t.nav.services} columns={[
            { title: t.mega.technology, links: serviceLinks(t, locale).technology },
            { title: t.mega.design, links: serviceLinks(t, locale).design },
            { title: t.mega.printing, links: serviceLinks(t, locale).printing },
            { title: t.mega.presence, links: serviceLinks(t, locale).presence },
          ]} />
          <Link href={localizedPath("/products", locale)} className="min-h-[44px] flex items-center text-sm font-medium text-brand-700 hover:text-brand-950">
            {t.nav.products}
          </Link>
          <Link href={localizedPath("/about", locale)} className="min-h-[44px] flex items-center text-sm font-medium text-brand-700 hover:text-brand-950">
            {t.nav.about}
          </Link>
          <Link href={localizedPath("/faq", locale)} className="min-h-[44px] flex items-center text-sm font-medium text-brand-700 hover:text-brand-950">
            {t.nav.faq}
          </Link>
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-3">
          <LanguageSwitcher />
          <WhatsAppIconLink
            className="hidden rounded-lg p-2.5 text-[#25D366] hover:bg-green-50 sm:flex min-h-[44px] min-w-[44px]"
            label={t.footer.whatsapp}
          />
          <a
            href={`mailto:${SITE.email}`}
            className="hidden rounded-lg p-2.5 text-brand-600 hover:bg-brand-50 hover:text-brand-900 lg:flex min-h-[44px] min-w-[44px]"
            aria-label={t.footer.email}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </a>
          <Link href={localizedPath("/contact", locale)} className="btn-primary hidden min-h-[44px] sm:inline-flex">
            {t.nav.getQuote}
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

function MegaMenu({
  triggerLabel,
  columns,
}: {
  triggerLabel: string;
  columns: { title: string; links: { href: string; label: string }[] }[];
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open]);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={openMenu}
      onMouseLeave={closeMenu}
      onFocus={openMenu}
      onBlur={(e) => {
        if (!ref.current?.contains(e.relatedTarget)) closeMenu();
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        onKeyDown={(e) => { if (e.key === "Escape") setOpen(false); }}
        className="min-h-[44px] flex items-center text-sm font-medium text-brand-700 hover:text-brand-950"
        aria-expanded={open}
        aria-haspopup="true"
      >
        {triggerLabel}
        <svg className={`ms-1 h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute start-0 top-full z-50 pt-3">
          <div className="grid w-[min(640px,90vw)] grid-cols-1 gap-6 rounded-2xl border border-brand-100 bg-white p-6 shadow-lg sm:grid-cols-2 lg:grid-cols-4">
            {columns.map((col) => (
              <MegaColumn key={col.title} title={col.title} links={col.links} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MegaColumn({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-brand-500">{title}</p>
      <ul className="space-y-1">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="min-h-[44px] flex items-center text-sm text-brand-700 hover:text-accent-600 py-1">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MobileNav() {
  const { t, locale } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("keydown", handleEscape);
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-brand-200 px-3 text-sm font-medium text-brand-800"
        aria-expanded={open}
        aria-label={t.nav.menu}
      >
        {open ? (
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
          </svg>
        )}
      </button>
      {open && (
        <nav className="absolute end-0 mt-2 w-64 rounded-xl border border-brand-100 bg-white p-4 shadow-lg" aria-label="Mobile navigation">
          <ul className="space-y-1 text-sm">
            <li><Link href={localizedPath("/services", locale)} className="min-h-[44px] flex items-center py-2">{t.nav.services}</Link></li>
            <li><Link href={localizedPath("/services/business-solutions", locale)} className="min-h-[44px] flex items-center py-2">{t.nav.businessSolutions}</Link></li>
            <li><Link href={localizedPath("/services/individual-solutions", locale)} className="min-h-[44px] flex items-center py-2">{t.nav.individualSolutions}</Link></li>
            <li><Link href={localizedPath("/products", locale)} className="min-h-[44px] flex items-center py-2">{t.nav.products}</Link></li>
            <li><Link href={localizedPath("/about", locale)} className="min-h-[44px] flex items-center py-2">{t.nav.about}</Link></li>
            <li><Link href={localizedPath("/faq", locale)} className="min-h-[44px] flex items-center py-2">{t.nav.faq}</Link></li>
            <li>
              <a href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer" className="min-h-[44px] flex items-center py-2 text-[#25D366]">
                {t.footer.whatsapp}: {SITE.whatsapp}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="min-h-[44px] flex items-center py-2 text-brand-700">
                {SITE.email}
              </a>
            </li>
            <li><Link href={localizedPath("/contact", locale)} className="min-h-[44px] flex items-center py-2 font-semibold text-accent-600">{t.nav.contact}</Link></li>
          </ul>
        </nav>
      )}
    </div>
  );
}
