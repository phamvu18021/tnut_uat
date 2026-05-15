import { clean, plainTextFromHtml } from "@/lib/sanitizeHtml";
import { fetchAuth } from "@/ultil/fetchAuth";

export async function fetchPosts(type: "news" | "notifis", page: number = 1, perPage: number = 8) {
  const apiUrl = process.env.API_URL || "";
  const idNew = 217;
  const idNotifi = 216;
  const id = type === "news" ? idNew : idNotifi;

  try {
    const endPoint = `${apiUrl}/posts?_embed&per_page=${perPage}&status=publish&page=${page}&categories=${id}`;
    const response = await fetchAuth({ url: endPoint, revalidate: 3 });
    if (!response.ok) {
        throw new Error(`Posts fetch failed for ${type} with status: ${response.statusText}`);
    }
    const postsRaw: any[] = (await response.json()) || [];

    const posts = postsRaw.map((post: any) => ({
      id: post.id,
      slug: post.slug,
      date: post.date?.split("T")[0] || "",
      title: clean(post.title?.rendered || ""),
      plain_title: plainTextFromHtml(post.title?.rendered || ""),
      excerpt: clean(post.excerpt?.rendered || ""),
      featured_image:
        post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null
    }));
    
    return posts;
  } catch (error) {
    console.error(`Error fetching posts for ${type}:`, error);
    return [];
  }
}
