import { fetchAuth } from "@/ultil/fetchAuth";
import { NextResponse } from "next/server";

export async function GET() {
  const apiUrl = process.env.API_URL || "";
  let filteredLines: string[] = [];

  try {
    const responeWordpress = await fetchAuth({
      url: `${apiUrl}/posts?slug=lich-khai-giang`,
      revalidate: 10
    });
    const data: any[] = await responeWordpress.json();
    const htmlString = data?.length > 0 ? data[0]?.content?.rendered : "";
    const textContent = htmlString.replace(/(&#8211;|<[^>]*>)/g, "");
    const lines = textContent.split("\n");
    filteredLines = lines
      .filter((line: string) => line.trim() !== "")
      .map((line: string) => line.trim());
  } catch {
    filteredLines = [];
  }

  return NextResponse.json({ list: filteredLines || [] });
}