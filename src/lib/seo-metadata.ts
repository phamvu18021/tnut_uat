import { fetchSeo } from "@/ultil/seo";
import { replaceSeoRM } from "@/ultil/seoRankMath";
import type { Metadata } from "next";

const extractMeta = (head: string, name: string, isProperty = false): string | undefined => {
  const attr = isProperty ? "property" : "name";
  const regex = new RegExp(`<meta\\s+${attr}="${name}"\\s+content="([^"]*)"`, "i");
  const match = head.match(regex);
  if (match) return match[1];

  const regexAlt = new RegExp(`<meta\\s+content="([^"]*)"\\s+${attr}="${name}"`, "i");
  const matchAlt = head.match(regexAlt);
  return matchAlt ? matchAlt[1] : undefined;
};

const extractMetaAll = (head: string, name: string, isProperty = false): string[] => {
  const attr = isProperty ? "property" : "name";
  const regex = new RegExp(`<meta\\s+${attr}="${name}"\\s+content="([^"]*)"`, "gi");
  const matches = [...head.matchAll(regex)];
  let results = matches.map((m) => m[1]);

  const regexAlt = new RegExp(
    `<meta\\s+content="([^"]*)"\\s+${attr}="${name}"`,
    "gi"
  );
  const matchesAlt = [...head.matchAll(regexAlt)];
  results = [...results, ...matchesAlt.map((m) => m[1])];

  return results;
};

export async function seoMetadataByUrl(
  url: string,
  fallbackTitle?: string
): Promise<Metadata> {
  try {
    const res = await fetchSeo({ url, revalidate: 3600 });
    if (!res.ok) return fallbackTitle ? { title: fallbackTitle } : {};
    const data = await res.json();
    let head = data?.head || "";

    head = replaceSeoRM(head);

    const titleMatch = head.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    const title = titleMatch ? titleMatch[1].trim() : undefined;
    const ogTitle = extractMeta(head, "og:title", true);
    const twitterTitle = extractMeta(head, "twitter:title");
    const effectiveTitle = title || ogTitle || twitterTitle || fallbackTitle || "TNUT";
    const description = extractMeta(head, "description");
    const author = extractMeta(head, "author");
    const robots = extractMeta(head, "robots");
    const canonicalMatch = head.match(/<link\s+rel="canonical"\s+href="([^"]*)"/i);
    const canonical = canonicalMatch ? canonicalMatch[1] : undefined;
    const ogDescription = extractMeta(head, "og:description", true);
    const ogImage = extractMeta(head, "og:image", true);
    const ogUrl = extractMeta(head, "og:url", true);
    const ogType = extractMeta(head, "og:type", true);
    const ogLocale = extractMeta(head, "og:locale", true);
    const ogSiteName = extractMeta(head, "og:site_name", true);
    const ogPublishedTime = extractMeta(head, "article:published_time", true);
    const ogModifiedTime =
      extractMeta(head, "article:modified_time", true) ||
      extractMeta(head, "og:updated_time", true);
    const articleSection = extractMeta(head, "article:section", true);
    const articleTags = extractMetaAll(head, "article:tag", true);
    const fbAppId = extractMeta(head, "fb:app_id", true);
    const twitterDescription = extractMeta(head, "twitter:description");
    const twitterImage = extractMeta(head, "twitter:image");
    const twitterCard = extractMeta(head, "twitter:card");
    const twitterLabel1 = extractMeta(head, "twitter:label1");
    const twitterData1 = extractMeta(head, "twitter:data1");
    const twitterLabel2 = extractMeta(head, "twitter:label2");
    const twitterData2 = extractMeta(head, "twitter:data2");
    const metadata: Metadata = {
      title: {
        absolute: effectiveTitle,
      },
      description,
      robots,
      authors: author ? [{ name: author }] : undefined,
      alternates: canonical ? { canonical: canonical } : undefined,
      openGraph: {
        title: ogTitle || effectiveTitle,
        description: ogDescription || description,
        url: ogUrl,
        type: (ogType as any) === "article" ? "article" : "website",
        locale: ogLocale,
        siteName: ogSiteName,
        publishedTime: ogPublishedTime,
        modifiedTime: ogModifiedTime,
        images: ogImage ? [{ url: ogImage }] : undefined,
        section: articleSection,
        tags: articleTags.length > 0 ? articleTags : undefined,
      } as any,

      twitter: {
        title: twitterTitle || effectiveTitle,
        description: twitterDescription || description,
        card: (twitterCard as any) || "summary_large_image",
        images: twitterImage ? [twitterImage] : undefined,
      },
      other: {},
    };

    if (fbAppId) metadata.other!["fb:app_id"] = fbAppId;
    if (twitterLabel1) metadata.other!["twitter:label1"] = twitterLabel1;
    if (twitterData1) {
      metadata.other!["twitter:data1"] = twitterData1;
      if (
        twitterLabel1 === "Được viết bởi" ||
        twitterLabel1?.toLowerCase() === "written by"
      ) {
        metadata.authors = [{ name: twitterData1 }];
      }
    }
    if (twitterLabel2) metadata.other!["twitter:label2"] = twitterLabel2;
    if (twitterData2) metadata.other!["twitter:data2"] = twitterData2;
    if (Object.keys(metadata.other!).length === 0) delete metadata.other;

    return metadata;
  } catch (error) {
    console.error("SEO Metadata Error:", error);
    return fallbackTitle ? { title: fallbackTitle } : {};
  }
}

export function rmsUrl(path = ""): string {
  const base = process.env.API_RMS_URL || "";
  return `${base}${path}`;
}

