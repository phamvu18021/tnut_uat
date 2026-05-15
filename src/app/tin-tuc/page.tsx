import ErrorBoundary from "@/components/ErrorBoundary";
import { Posts } from "@/features/posts";
import { Metadata } from "next";
import { seoMetadataByUrl } from "@/lib/seo-metadata";
import { fetchAuth } from "@/ultil/fetchAuth";
import { clean, plainTextFromHtml } from "@/lib/sanitize-server";

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await seoMetadataByUrl(
    "https://nologin.tnut.vn/wp-json/rankmath/v1/getHead?url=https://nologin.tnut.vn/tin-tuc-su-kien"
  );
  
  return {
    ...metadata,
    alternates: {
      ...metadata.alternates,
    },
  };
}

async function getInitialPosts() {
  const apiUrl = process.env.API_URL || "";
  const idNew = 217;
  const perPage = "8";
  const page = "1";
  
  try {
    const endPoint = `${apiUrl}/posts?_embed&per_page=${perPage}&status=publish&page=${page}&categories=${idNew}`;
    const response = await fetchAuth({ url: endPoint, revalidate: 3600 });
    const totalPosts = String(response.headers.get("X-WP-Total") || "0");
    const postsRaw: any[] = (await response.json()) || [];
    const posts = postsRaw.map((post: any) => ({
      id: post.id,
      slug: post.slug,
      date: post.date,
      title: clean(post.title?.rendered || ""),
      plain_title: plainTextFromHtml(post.title?.rendered || ""),
      excerpt: clean(post.excerpt?.rendered || ""),
      featured_image:
        post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null
    }));
    return { posts, totalPosts };
  } catch (error) {
    console.error("Error fetching initial posts:", error);
    return { posts: [], totalPosts: "0" };
  }
}

export default async function Page() {
  const { posts, totalPosts } = await getInitialPosts();

  return (
    <ErrorBoundary fallback={<h1>Lỗi server</h1>}>
      <Posts initialPosts={posts} initialTotalPosts={totalPosts} />
    </ErrorBoundary>
  );
}
