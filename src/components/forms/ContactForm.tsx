"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const serviceOptions = [
  "Website",
  "Software / App",
  "AI Solutions",
  "Design",
  "Branding",
  "Printing",
  "Domain / Hosting",
  "Digital Presence",
  "Other",
];

export function ContactForm({ defaultService }: { defaultService?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="card border-accent-200 bg-accent-50/30">
        <h3 className="text-lg font-semibold text-brand-950">{t.form.thankTitle}</h3>
        <p className="mt-2 text-brand-600">{t.form.thankDesc}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-4" noValidate>
      <div>
        <label htmlFor="service" className="mb-1 block text-sm font-medium text-brand-800">
          {t.form.serviceLabel}
        </label>
        <select
          id="service"
          name="service"
          defaultValue={defaultService || ""}
          required
          className="form-input"
        >
          <option value="" disabled>{t.form.servicePlaceholder}</option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="description" className="mb-1 block text-sm font-medium text-brand-800">
          {t.form.descLabel}
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          required
          className="form-input"
          placeholder={t.form.descPlaceholder}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-brand-800">{t.form.nameLabel}</label>
          <input id="name" name="name" type="text" required className="form-input" />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-brand-800">{t.form.emailLabel}</label>
          <input id="email" name="email" type="email" required className="form-input" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-brand-800">{t.form.phoneLabel}</label>
          <input id="phone" name="phone" type="tel" className="form-input" />
        </div>
        <div>
          <label htmlFor="company" className="mb-1 block text-sm font-medium text-brand-800">{t.form.companyLabel}</label>
          <input id="company" name="company" type="text" className="form-input" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="budget" className="mb-1 block text-sm font-medium text-brand-800">{t.form.budgetLabel}</label>
          <select id="budget" name="budget" className="form-input">
            <option value="">{t.form.budgetPrefer}</option>
            <option value="under-5k">{t.form.budgetLow}</option>
            <option value="5k-15k">{t.form.budgetMid}</option>
            <option value="15k-plus">{t.form.budgetHigh}</option>
          </select>
        </div>
        <div>
          <label htmlFor="timeline" className="mb-1 block text-sm font-medium text-brand-800">{t.form.timelineLabel}</label>
          <select id="timeline" name="timeline" className="form-input">
            <option value="">{t.form.timelineFlexible}</option>
            <option value="urgent">{t.form.timelineUrgent}</option>
            <option value="1-3-months">{t.form.timeline13}</option>
            <option value="3-plus-months">{t.form.timeline3plus}</option>
          </select>
        </div>
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        {t.form.submit}
      </button>
    </form>
  );
}
