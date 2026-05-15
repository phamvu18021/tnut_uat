import { SidebarSearch } from "./SidebarSearch";
import { SidebarContent } from "./SidebarContent";
import { fetchAuth } from "@/ultil/fetchAuth";
import { clean } from "@/lib/sanitizeHtml";

async function getNotifis() {
  const type = "notifis";
  const perPage = "5";
  const page = "1";
  const apiUrl = process.env.API_URL || "";

  try {
    const idNotifi = 216;
    const endPoint = `${apiUrl}/posts?_embed&per_page=${perPage}&status=publish&page=${page}&categories=${idNotifi}`;

    const response = await fetchAuth({ url: endPoint, revalidate: 3 });
    if (!response.ok) {
      throw new Error(`Posts fetch failed with status: ${response.statusText}`);
    }
    const totalNotifis = String(response.headers.get("X-WP-Total") || "0");
    const postsRaw: any[] = (await response.json()) || [];

    const notifis = postsRaw.map((post: any) => ({
      id: post.id,
      slug: post.slug,
      title: clean(post.title?.rendered || ""),
    }));

    return { notifis, totalNotifis };
  } catch (error) {
    console.error("Sidebar Fetch Error:", error);
    return { notifis: [], totalNotifis: "0" };
  }
}

export const Sidebar = async ({
  sticky,
  checkpost
}: {
  sticky?: string;
  checkpost: boolean;
}) => {
  const { notifis, totalNotifis } = await getNotifis();

  return (
    <SidebarContent
      sticky={sticky}
      checkpost={checkpost}
      notifis={notifis}
    >
      <SidebarSearch />
    </SidebarContent>
  );
};
