import { NganhKinhTeCongNghiep } from "@/features/nganh-kinh-te-cong-nghiep";
import { Metadata } from "next";
import { rmsUrl, seoMetadataByUrl } from "@/lib/seo-metadata";

export async function generateMetadata(): Promise<Metadata> {
  return seoMetadataByUrl(rmsUrl("/kinh-te-cong-nghiep"));
}

export default function Page() {
  return <NganhKinhTeCongNghiep />;
}
