import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service | OryntLabs",
  description: "Terms of service for OryntLabs website and services.",
  path: "/terms",
  locale: "en",
});

export default function TermsPage() {
  return (
    <div className="container-page prose prose-brand max-w-3xl py-8 sm:py-12">
      <h1>Terms of Service</h1>
      <p>
        These terms govern use of the OryntLabs website and engagement with our services.
      </p>
      <p className="text-sm text-brand-500">
        [REQUIRES REAL BUSINESS DATA — complete legal terms with governing law, liability, and service conditions]
      </p>
      <p><Link href="/contact">Contact us</Link> for questions about our terms.</p>
    </div>
  );
}
