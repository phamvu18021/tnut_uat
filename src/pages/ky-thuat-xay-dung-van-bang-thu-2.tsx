"use client";

import { Loading } from "@/components/Loading";
import dynamic from "next/dynamic";
import ReactHtmlParser from "html-react-parser";
import { fetchSeo } from "@/ultil/seo";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { replaceSeoRM, replaceSeoRMPage } from "@/ultil/seoRankMath";
const PageContent = dynamic(
  () =>
    import("@/features/ky-thuat-xay-dung-van-bang-thu-2").then((mod) => mod.Ktxdvbt2),
  {
    loading: () => <Loading />
  }
);

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const api_rm_url = process.env.API_RMS_URL || "";
  const api_url = `${api_rm_url}/ktxdvbt2/ky-thuat-xay-dung-van-bang-thu-2`;
  try {
    const res = await fetchSeo({ url: api_url, revalidate: 3600 });
    if (!res.ok) {
      throw new Error(`Posts fetch failed with status: ${res.statusText}`);
    }
    const head = await res.json();
    return {
      props: {
        head: head.head
      }
    };
  } catch (error) {
    console.error("fetch failed ktxd-van-bang-thu-2" + error);
    return {
      props: {
        head: null
      }
    };
  }
};

const Page = (props: any) => {
  const getTitleFromMeta = (head: string) => {
    const match = head.match(/<meta\s+property="og:title"\s+content="([^"]*)"/);
    return match ? match[1] : null;
  };
  const ogTitleContent = props.head ? getTitleFromMeta(props.head) : null;

  return (
    <>
      {props.head && (
        <div>
          <Head>
            {ReactHtmlParser(
              replaceSeoRMPage({ input: props.head, page: "ktxdvbt2" })
            )}
            <title>{ogTitleContent || "Kỹ thuật Xây dựng - Văn bằng thứ 2"}</title>
          </Head>
        </div>
      )}
      <PageContent />
    </>
  );
};

export default Page;

