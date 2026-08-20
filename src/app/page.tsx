import { Suspense } from "react";
import { JsonLd, faqJsonLd } from "@/lib/seo";
import { globalFaqs } from "@/lib/site";
import { HomePageClient } from "./HomePageClient";

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(globalFaqs.slice(0, 8))} />
      <Suspense>
        <HomePageClient homePath="/" />
      </Suspense>
    </>
  );
}
