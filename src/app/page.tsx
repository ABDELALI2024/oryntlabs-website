import { JsonLd, faqJsonLd } from "@/lib/seo";
import { globalFaqs } from "@/lib/site";
import { HomePageClient } from "./HomePageClient";

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(globalFaqs.slice(0, 6))} />
      <HomePageClient homePath="/" />
    </>
  );
}
