"use client";

import { Loading } from "@/components/Loading";
import { fetchSeo } from "@/ultil/seo";
import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import ReactHtmlParser from "html-react-parser";
import { replaceSeoRM } from "@/ultil/seoRankMath";

const DangkyTc = dynamic(
  () => import("@/features/dang-ky-thanh-cong").then((mod) => mod.DangkyTc),
  {
    loading: () => <Loading />
  }
);

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const api_rm_url = process.env.API_RMS_URL || "";
  const api_url = `${api_rm_url}/cam-on`;
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
    console.error("fetch failed camon" + error);
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
      <DangkyTc />
    </>
  );
};

export default Page;
