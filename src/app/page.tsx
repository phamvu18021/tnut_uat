import { Home } from "@/features/home";
import { fetchPosts } from "@/lib/fetchPosts";
import { fetchTrangChuPage } from "@/lib/fetchTrangChu";
import { Metadata } from "next";
import { rmsUrl, seoMetadataByUrl } from "@/lib/seo-metadata";

export async function generateMetadata(): Promise<Metadata> {
  return seoMetadataByUrl(rmsUrl());
}

export default async function Page() {
  const [home_content, news, notifis] = await Promise.all([
    fetchTrangChuPage(),
    fetchPosts("news", 1, 5),
    fetchPosts("notifis", 1, 5)
  ]);

  return <Home home_content={home_content} news={news} notifis={notifis} />;
}
