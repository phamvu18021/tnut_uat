import { NganhQuanLyCongNghiep } from "@/features/nganh-quan-ly-cong-nghiep";
import { Metadata } from "next";
import { rmsUrl, seoMetadataByUrl } from "@/lib/seo-metadata";

export async function generateMetadata(): Promise<Metadata> {
  return seoMetadataByUrl(rmsUrl("/quan-ly-cong-nghiep"));
}

export default function Page() {
  return <NganhQuanLyCongNghiep />;
}
