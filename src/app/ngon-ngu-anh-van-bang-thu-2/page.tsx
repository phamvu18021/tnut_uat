import { Nnavnt2 } from "@/features/ngon-ngu-anh-van-bang-thu-2";
import { Metadata } from "next";
import { rmsUrl, seoMetadataByUrl } from "@/lib/seo-metadata";

export async function generateMetadata(): Promise<Metadata> {
  return seoMetadataByUrl(
    rmsUrl("/nnavbt2/ngon-ngu-anh-van-bang-thu-2"),
    "Ngôn ngữ Anh - Văn bằng thứ 2"
  );
}

export default function Page() {
  return <Nnavnt2 />;
}
