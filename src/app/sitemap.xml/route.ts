import { menus, TMenus } from "@/router";
import fs from "fs";
import path from "path";

const CACHE_TTL = 10 * 60 * 1000;
const CACHE_FILE = path.join(process.cwd(), "sitemapcache", "sitemap.json");

const URL = process.env.NEXT_PUBLIC_DOMAIN;
const API_URL = process.env.API_URL;
const PER_PAGE = 100;

function writeSitemapCache(data: any) {
  const dir = path.dirname(CACHE_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(
    CACHE_FILE,
    JSON.stringify({ data, generatedAt: Date.now() }, null, 2)
  );
}

function readSitemapCache() {
  if (!fs.existsSync(CACHE_FILE)) return null;
  try {
    return JSON.parse(fs.readFileSync(CACHE_FILE, "utf8"));
  } catch (err) {
    return null;
  }
}

const getAllPaths = (menuItems: TMenus): string[] => {
  const paths: string[] = [];
  menuItems.forEach((menu) => {
    if (menu.path !== "#") paths.push(menu.path);
    if (menu?.childs) paths.push(...getAllPaths(menu.childs));
  });
  return paths;
};

const getPostPath = (slug: string, catSlugs: string[]): string => {
  if (catSlugs.includes("seo-khoa-hoc")) return `/${slug}`;
  if (catSlugs.includes("khoa-hoc-vmc")) return `/khoa-hoc/${slug}`;
  return `/tin-tuc/${slug}`;
};

const generateSiteMap = (posts: any[]) => {
  const staticPaths = getAllPaths(menus);
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPaths
      .map(
        (staticPath: string) => `<url>
            <loc>${URL}${staticPath}</loc>
          </url>`
      )
      .join("")}
      ${posts
      .map(
        ({ slug, catSlugs }) => `<url>
              <loc>${URL}${getPostPath(slug, catSlugs)}</loc>
          </url>`
      )
      .join("")}
   </urlset>`;
};

export async function GET() {
  const hasSSL = process.env.NEXT_PUBLIC_HAS_SSL || "true";
  if (hasSSL === "false") process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

  let postsData: any[] = [];
  let needRefresh = true;
  const cache = readSitemapCache();
  if (cache) {
    const expired = Date.now() - cache.generatedAt > CACHE_TTL;
    if (!expired) {
      postsData = cache.data;
      needRefresh = false;
    }
  }

  if (needRefresh) {
    try {
      const catRes = await fetch(
        `${API_URL}/categories?per_page=100&_fields=id,slug`
      );
      const categories = (await catRes.json()) || [];
      const catMap: Record<number, string> = {};
      categories.forEach((c: any) => (catMap[c.id] = c.slug));

      const resPage1 = await fetch(
        `${API_URL}/posts?per_page=${PER_PAGE}&status=publish&page=1&_fields=slug,categories`
      );

      if (resPage1.ok) {
        const page1 = await resPage1.json();
        const totalPages = parseInt(
          resPage1.headers.get("X-WP-TotalPages") || "1",
          10
        );

        let allRawPosts = [...page1];

        const fetches = [];
        for (let p = 2; p <= totalPages; p++) {
          fetches.push(
            fetch(
              `${API_URL}/posts?per_page=${PER_PAGE}&status=publish&page=${p}&_fields=slug,categories`
            ).then((r) => (r.ok ? r.json() : []))
          );
        }

        if (fetches.length > 0) {
          const rest = await Promise.all(fetches);
          rest.forEach((list) => (allRawPosts = [...allRawPosts, ...list]));
        }

        postsData = allRawPosts.map((post) => ({
          slug: post.slug,
          catSlugs: post.categories
            .map((id: number) => catMap[id])
            .filter(Boolean)
        }));

        writeSitemapCache(postsData);
      }
    } catch (err) {
      console.error("❌ API error, using fallback cache:", err);
      if (cache) {
        postsData = cache.data;
      }
    }
  }

  const sitemap = generateSiteMap(postsData);
  return new Response(sitemap, {
    headers: {
      "Content-Type": "text/xml"
    }
  });
}
