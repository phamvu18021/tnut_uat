export async function fetchTrangChuPage(): Promise<any | null> {
  const apiUrl = process.env.API_URL || "";
  const hasSSL = process.env.NEXT_PUBLIC_HAS_SSL || "true";
  if (hasSSL === "false") process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

  try {
    const res = await fetch(`${apiUrl}/trang-chu`, {
      next: { revalidate: 3 }
    });
    if (!res.ok) return null;
    const posts: any[] = (await res.json()) || [];
    return posts[0] ?? null;
  } catch {
    return null;
  }
}
