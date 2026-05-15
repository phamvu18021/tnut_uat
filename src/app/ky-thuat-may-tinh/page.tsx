import { NganhKyThuatMayTinh } from "@/features/nganh-ky-thuat-may-tinh";
import { Metadata } from "next";
import { rmsUrl, seoMetadataByUrl } from "@/lib/seo-metadata";

export async function generateMetadata(): Promise<Metadata> {
  return seoMetadataByUrl(rmsUrl("/ky-thuat-may-tinh"));
}

export default function Page() {
  return <NganhKyThuatMayTinh />;
}
