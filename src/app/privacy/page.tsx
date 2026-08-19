import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | OryntLabs",
  description: "Privacy policy for OryntLabs website and services.",
  path: "/privacy",
  locale: "en",
});

export default function PrivacyPage() {
  return (
    <div className="container-page prose prose-brand max-w-3xl py-8 sm:py-12">
      <h1>Privacy Policy</h1>
      <p>
        This privacy policy explains how OryntLabs collects, uses, and protects information submitted through
        this website and our services.
      </p>
      <p className="text-sm text-brand-500">
        [REQUIRES REAL BUSINESS DATA — complete legal privacy policy with jurisdiction, data controller details, and retention policies]
      </p>
      <p><Link href="/contact">Contact us</Link> for privacy-related questions.</p>
    </div>
  );
}
