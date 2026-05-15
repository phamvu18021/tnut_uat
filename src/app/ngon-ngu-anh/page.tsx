import { NganhNgonNguTiengAnh } from "@/features/nganh-ngon-ngu-anh";
import { Metadata } from "next";
import { rmsUrl, seoMetadataByUrl } from "@/lib/seo-metadata";

export async function generateMetadata(): Promise<Metadata> {
  return seoMetadataByUrl(rmsUrl("/ngon-ngu-anh"));
}

export default function Page() {
  return <NganhNgonNguTiengAnh />;
}
