import ErrorBoundary from "@/components/ErrorBoundary";
import { Post } from "@/features/post";
import { LayoutPost } from "@/layouts/layoutPost";
import { fetchAuth } from "@/ultil/fetchAuth";
import { Metadata } from "next";
import { rmsUrl, seoMetadataByUrl } from "@/lib/seo-metadata";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  return seoMetadataByUrl(rmsUrl(`/${slug}`));
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const apiUrl = process.env.API_URL || "";

  let post = null;
  try {
    const res = await fetchAuth({ url: `${apiUrl}/posts?slug=${slug}`, revalidate: 3600 });
    const posts = await res.json();
    post = posts?.[0] || null;
  } catch {
    post = null;
  }

  return (
    <LayoutPost>
      <ErrorBoundary fallback={<h1>Lỗi phía máy chủ</h1>}>
        <Post post={post} />
      </ErrorBoundary>
    </LayoutPost>
  );
}
