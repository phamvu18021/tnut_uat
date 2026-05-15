import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const type = request.nextUrl.searchParams.get("type") || "";
  const apiUrl = process.env.API_URL || "";
  const hasSSL = process.env.NEXT_PUBLIC_HAS_SSL || "true";
  if (hasSSL === "false") process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

  let posts: any[] = [];
  try {
    const endPoint = `${apiUrl}/${type}`;
    const response = await fetch(endPoint, { next: { revalidate: 1 } });
    posts = (await response.json()) || [];
  } catch {
    posts = [];
  }

  return NextResponse.json({ posts });
}
