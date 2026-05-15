import { NgonNguAnhHeTuXa } from "@/features/ngon-ngu-anh-he-tu-xa";
import { Metadata } from "next";
import { rmsUrl, seoMetadataByUrl } from "@/lib/seo-metadata";

export async function generateMetadata(): Promise<Metadata> {
  return seoMetadataByUrl(rmsUrl("/nnahtx/ngon-ngu-anh-he-tu-xa"), "Ngôn ngữ Anh - Hệ từ xa");
}

export default function Page() {
  return <NgonNguAnhHeTuXa />;
}
