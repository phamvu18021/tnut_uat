import { Ktxdhtx } from "@/features/ky-thuat-xay-dung-he-tu-xa";
import { Metadata } from "next";
import { rmsUrl, seoMetadataByUrl } from "@/lib/seo-metadata";

export async function generateMetadata(): Promise<Metadata> {
  return seoMetadataByUrl(
    rmsUrl("/ktxdhtx/ky-thuat-xay-dung-he-tu-xa"),
    "Kỹ thuật Xây dựng - Hệ từ xa"
  );
}

export default function Page() {
  return <Ktxdhtx />;
}
