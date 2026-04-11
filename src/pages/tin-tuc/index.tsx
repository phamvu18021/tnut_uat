import ErrorBoundary from "@/components/ErrorBoundary";
import { Posts } from "@/features/posts";
import { fetchSeo } from "@/ultil/seo";
import { GetServerSideProps } from "next";
import Head from "next/head";
import ReactHtmlParser from "html-react-parser";
import { replaceSeoRM } from "@/ultil/seoRankMath";

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const api_url = `https://nologin.tnut.vn/wp-json/rankmath/v1/getHead?url=https://nologin.tnut.vn/tin-tuc-su-kien`;
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
    console.error("fetch failed tin tuc" + error);
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
      <ErrorBoundary fallback={<h1>Lỗi server</h1>}>
        <Posts />
      </ErrorBoundary>
    </>
  );
};

export default Page;
