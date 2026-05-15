import { DangkyTc } from "@/features/dang-ky-thanh-cong";
import { Metadata } from "next";
import { rmsUrl, seoMetadataByUrl } from "@/lib/seo-metadata";

export async function generateMetadata(): Promise<Metadata> {
  return seoMetadataByUrl(rmsUrl("/cam-on"));
}

export default function Page() {
  return <DangkyTc />;
}
