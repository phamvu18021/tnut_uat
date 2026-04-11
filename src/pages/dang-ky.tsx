"use client";

import { Loading } from "@/components/Loading";
import { fetchSeo } from "@/ultil/seo";
import { replaceSeoRM } from "@/ultil/seoRankMath";
import ReactHtmlParser from "html-react-parser";
import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";

const Dangky = dynamic(
  () => import("@/features/dang-ky").then((mod) => mod.Dangky),
  {
    loading: () => <Loading />
  }
);

export const getServerSideProps: GetServerSideProps = async () => {
  const api_rm_url = process.env.API_RMS_URL || "";
  const api_url = `${api_rm_url}/dang-ky`;
  try {
    const res = await fetchSeo({ url: api_url, revalidate: 3600 });
    if (!res.ok) {
      throw new Error(`Posts fetch failed with status: ${res.statusText}`);
    }
    const head = await res.json();
    return {
      props: {
        head: head.head || null
      }
    };
  } catch (error) {
    console.error("fetch failed lkg" + error);
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
            {ReactHtmlParser(replaceSeoRM(props.head))}
            <title>{ogTitleContent}</title>
          </Head>
        </div>
      )}
      <Dangky />
    </>
  );
};

export default Page;
