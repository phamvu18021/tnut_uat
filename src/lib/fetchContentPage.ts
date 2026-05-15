export async function fetchContentPage(type: string): Promise<any | null> {
  const apiUrl = process.env.API_URL || "";
  const hasSSL = process.env.NEXT_PUBLIC_HAS_SSL || "true";
  if (hasSSL === "false") process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

  try {
    const endPoint = `${apiUrl}/${type}`;
    const res = await fetch(endPoint, {
      next: { revalidate: 3 }
    });
    if (!res.ok) {
        throw new Error(`Content page fetch failed for ${type} with status: ${res.statusText}`);
    }
    const posts: any[] = (await res.json()) || [];
    return posts[0] ?? null;
  } catch (error) {
    console.error(`Error fetching content page for ${type}:`, error);
    return null;
  }
}
