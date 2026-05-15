import { Dangky } from "@/features/dang-ky";
import { fetchContentPage } from "@/lib/fetchContentPage";
import { Metadata } from "next";
import { rmsUrl, seoMetadataByUrl } from "@/lib/seo-metadata";

export async function generateMetadata(): Promise<Metadata> {
  return seoMetadataByUrl(rmsUrl("/dang-ky"));
}

export default async function Page() {
  const page_content = await fetchContentPage("dang-ky");
  return <Dangky page_content={page_content} />;
}
