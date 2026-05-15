import { NganhKyThuatXayDung } from "@/features/nganh-ky-thuat-xay-dung";
import { Metadata } from "next";
import { rmsUrl, seoMetadataByUrl } from "@/lib/seo-metadata";

export async function generateMetadata(): Promise<Metadata> {
  return seoMetadataByUrl(rmsUrl("/ky-thuat-xay-dung"));
}

export default function Page() {
  return <NganhKyThuatXayDung />;
}
