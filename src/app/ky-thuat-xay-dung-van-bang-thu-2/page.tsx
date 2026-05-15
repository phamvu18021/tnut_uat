import { Ktxdvbt2 } from "@/features/ky-thuat-xay-dung-van-bang-thu-2";
import { Metadata } from "next";
import { rmsUrl, seoMetadataByUrl } from "@/lib/seo-metadata";

export async function generateMetadata(): Promise<Metadata> {
  return seoMetadataByUrl(
    rmsUrl("/ktxdvbt2/ky-thuat-xay-dung-van-bang-thu-2"),
    "Kỹ thuật Xây dựng - Văn bằng thứ 2"
  );
}

export default function Page() {
  return <Ktxdvbt2 />;
}
