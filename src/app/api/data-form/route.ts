import { fetchAuth } from "@/ultil/fetchAuth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const type = request.nextUrl.searchParams.get("type") || "";
  const apiUrl = process.env.API_URL || "";

  let url = "";
  let uuid = "";
  let divId = "";
  let divClass = "";

  try {
    const responeWordpress = await fetchAuth({
      url: `${apiUrl}/form`,
      revalidate: 1
    });
    const data: any[] = await responeWordpress.json();
    const htmlString = data?.length > 0 ? data[0]?.acf?.[String(type)] : "";

    const getFormRegex = /GetForm\("([^"]+)", "([^"]+)"\)/;
    const divRegex = /<div id="([^"]+)" class="([^"]+)"/;
    const getFormMatch = htmlString.match(getFormRegex);
    const divMatch = htmlString.match(divRegex);

    if (getFormMatch && divMatch) {
      url = getFormMatch[1];
      uuid = getFormMatch[2];
      divId = divMatch[1];
      divClass = divMatch[2];
    }
  } catch {}

  return NextResponse.json({ url, uuid, divId, divClass });
}
