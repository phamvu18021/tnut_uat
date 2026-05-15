import type { Metadata } from "next";
import { GoogleTagManager } from '@next/third-parties/google';
import Layout from "@/layouts";
import Providers from "./providers";
import "@/styles/globals.css";
import "@/styles/tableContent.css";

export const metadata: Metadata = {
  title: "TNUT",
  description: "Tuyển sinh Đại học Kỹ thuật Công nghiệp",
  verification: {
    google: "-vNFb7d_Uegsq9h12mrwkgQkpdtUxhe-Gedud1ERZiA"
  }
};

async function getGlobalData() {
  const apiUrl = process.env.API_URL || "";
  const hasSSL = process.env.NEXT_PUBLIC_HAS_SSL || "true";
  if (hasSSL === "false") process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

  const fetchContent = async (type: string) => {
    try {
      const res = await fetch(`${apiUrl}/${type}`, {
        next: { revalidate: 60 }
      });
      if (!res.ok) return null;
      const data = await res.json();
      return data?.[0] || null;
    } catch (error) {
      console.error(`Error fetching ${type}:`, error);
      return null;
    }
  };

  const [notification, cta, footer] = await Promise.all([
    fetchContent("notification"),
    fetchContent("cta"),
    fetchContent("trang-chu")
  ]);

  return { notification, cta, footer };
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const globalData = await getGlobalData();

  return (
    <html lang="vi">
      <body>
        <noscript>
          <iframe
            title="Google Tag Manager"
            src="https://www.googletagmanager.com/ns.html?id=GTM-TDCV4KK"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <GoogleTagManager gtmId="GTM-TDCV4KK" />
        <Providers>
          <Layout data={globalData}>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
