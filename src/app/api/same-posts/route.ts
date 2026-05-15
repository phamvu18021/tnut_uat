import { fetchAuth } from "@/ultil/fetchAuth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const catId = request.nextUrl.searchParams.get("catId") || "";
  const id = request.nextUrl.searchParams.get("id") || "";
  const apiUrl = process.env.API_URL || "";

  let samePosts: any[] = [];

  if (catId) {
    try {
      const response = await fetchAuth({
        url: `${apiUrl}/posts/?categories=${catId}&exclude=${id}&per_page=3&_embed`,
        revalidate: 1
      });
      const relatedPosts: any[] = await response.json();
      samePosts = relatedPosts.map((post: any) => ({
        ...post,
        featured_image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null
      }));
    } catch {
      samePosts = [];
    }
  }

  return NextResponse.json({ samePosts });
}
