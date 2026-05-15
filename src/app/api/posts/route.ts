import { clean, plainTextFromHtml } from "@/lib/sanitize-server";
import { fetchAuth } from "@/ultil/fetchAuth";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const type = request.nextUrl.searchParams.get("type") || "";
  const page = request.nextUrl.searchParams.get("page") || "";
  const perPage = request.nextUrl.searchParams.get("per_page") || "8";
  const apiUrl = process.env.API_URL || "";

  let posts: any[] = [];
  let totalPosts = "0";

  try {
    const idNew = 217;
    const idNotifi = 216;
    const id = type === "news" ? idNew : type === "notifis" ? idNotifi : null;
    const endPoint = id
      ? `${apiUrl}/posts?_embed&per_page=${perPage}&status=publish&page=${page}&categories=${id}`
      : `${apiUrl}/posts?_embed&per_page=8&status=publish&page=${page}`;

    const response = await fetchAuth({ url: endPoint, revalidate: 1 });
    totalPosts = String(response.headers.get("X-WP-Total") || "0");
    const postsRaw: any[] = (await response.json()) || [];

    posts = postsRaw.map((post: any) => ({
      id: post.id,
      slug: post.slug,
      date: post.date,
      title: clean(post.title?.rendered || ""),
      plain_title: plainTextFromHtml(post.title?.rendered || ""),
      excerpt: clean(post.excerpt?.rendered || ""),
      featured_image:
        post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null
    }));
  } catch (error) {
    console.error("API Fetch Error:", error);
    posts = [];
  }

  return NextResponse.json({ posts, totalPosts });
}
