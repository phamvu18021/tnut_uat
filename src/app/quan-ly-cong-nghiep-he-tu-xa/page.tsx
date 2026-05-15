import { Qlcnhtx } from "@/features/quan-ly-cong-nghiep-he-tu-xa";
import { Metadata } from "next";
import { rmsUrl, seoMetadataByUrl } from "@/lib/seo-metadata";

export async function generateMetadata(): Promise<Metadata> {
  return seoMetadataByUrl(
    rmsUrl("/qlcnhtx/quan-ly-cong-nghiep-he-tu-xa"),
    "Quản lý Công nghiệp - Hệ từ xa"
  );
}

export default function Page() {
  return <Qlcnhtx />;
}
