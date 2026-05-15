import { fetchAuth } from "@/ultil/fetchAuth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const apiUrl = process.env.API_URL || "";
  const len = request.nextUrl.searchParams.get("len") || "9";
  let posts: any[] = [];

  try {
    const endPoint = `${apiUrl}/posts?_embed&per_page=${len}&status=draft&page=1`;
    const response = await fetchAuth({ url: endPoint, revalidate: 100 });
    const postsNotFeatureImage: any[] = (await response.json()) || [];
    posts = postsNotFeatureImage.map((post: any) => ({
      ...post,
      featured_image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null
    }));
  } catch {
    posts = [];
  }

  return NextResponse.json({ posts });
}
