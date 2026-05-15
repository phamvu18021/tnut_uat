import { LichKg } from "@/features/lich-khai-giang";
import { Metadata } from "next";
import { rmsUrl, seoMetadataByUrl } from "@/lib/seo-metadata";

export async function generateMetadata(): Promise<Metadata> {
  return seoMetadataByUrl(rmsUrl("/lich-khai-giang"));
}

async function getData() {
  const apiUrl = process.env.API_URL || "";
  const hasSSL = process.env.NEXT_PUBLIC_HAS_SSL || "true";
  if (hasSSL === "false") process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  const res = await fetch(`${apiUrl}/lichkg`, { next: { revalidate: 60 } });
  if (!res.ok) return null;
  const posts = await res.json();
  return Array.isArray(posts) ? posts[0] : posts;
}

export default async function Page() {
  const data = await getData();
  return <LichKg data={data} />;
}
