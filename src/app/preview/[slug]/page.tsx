import ErrorBoundary from "@/components/ErrorBoundary";
import { Post } from "@/features/post";
import { LayoutPost } from "@/layouts/layoutPost";
import { fetchAuth } from "@/ultil/fetchAuth";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const apiUrl = process.env.API_URL || "";

  let post = null;
  try {
    const res = await fetchAuth({ url: `${apiUrl}/posts/${slug}?_embed` });
    post = await res.json();
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
