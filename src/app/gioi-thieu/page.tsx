import { About } from "@/features/about";
import { Metadata } from "next";
import { rmsUrl, seoMetadataByUrl } from "@/lib/seo-metadata";

export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  return seoMetadataByUrl(rmsUrl("/gioi-thieu"));
}

export default function Page() {
  return <About />;
}
