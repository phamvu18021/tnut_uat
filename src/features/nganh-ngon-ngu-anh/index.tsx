import { MajorPageLayout } from "@/components/major-layout";
import { nganhNgonNguTiengAnhData } from "@/data/major-page-data";

async function getPageContent() {
  try {
    const apiUrl = process.env.API_URL || "";
    const hasSSL = process.env.NEXT_PUBLIC_HAS_SSL || "true";
    if (hasSSL === "false") process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    const res = await fetch(`${apiUrl}/ngon-ngu-anh`, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    const posts = await res.json();
    return posts?.[0] ?? null;
  } catch {
    return null;
  }
}

export const NganhNgonNguTiengAnh = async () => {
  const pageContent = await getPageContent();
  const contentData = {
    ...nganhNgonNguTiengAnhData.content,
    param_1:
      pageContent?.acf?.section_2_com?.param_1 ||
      nganhNgonNguTiengAnhData.content.param_1,
    param_2:
      pageContent?.acf?.section_2_com?.param_2 ||
      nganhNgonNguTiengAnhData.content.param_2,
    param_3:
      pageContent?.acf?.section_2_com?.param_3 ||
      nganhNgonNguTiengAnhData.content.param_3,
    sub_title:
      pageContent?.acf?.section_2_com?.sub_title ||
      nganhNgonNguTiengAnhData.content.sub_title,
    value_1:
      pageContent?.acf?.section_2_com?.value_1 ||
      nganhNgonNguTiengAnhData.content.value_1,
    value_2:
      pageContent?.acf?.section_2_com?.value_2 ||
      nganhNgonNguTiengAnhData.content.value_2,
    value_3:
      pageContent?.acf?.section_2_com?.value_3 ||
      nganhNgonNguTiengAnhData.content.value_3,
    introductionText:
      pageContent?.acf?.section_2_com?.content ||
      nganhNgonNguTiengAnhData.content.introductionText
  };

  const sidebarData = {
    ...nganhNgonNguTiengAnhData.sidebar,
    registrationTitle:
      pageContent?.acf?.section_2_sidebar?.box_title ||
      nganhNgonNguTiengAnhData.sidebar.registrationTitle,
    registrationDescription:
      pageContent?.acf?.section_2_sidebar?.desc_box ||
      nganhNgonNguTiengAnhData.sidebar.registrationDescription,
    highlightedJobsHtml:
      pageContent?.acf?.section_2_sidebar?.content_1 ||
      nganhNgonNguTiengAnhData.sidebar.highlightedJobsHtml,
    descriptionHtml:
      pageContent?.acf?.section_2_sidebar?.content_2 ||
      nganhNgonNguTiengAnhData.sidebar.descriptionHtml
  };
  const trainningData = {
    title: pageContent?.acf?.section_3_com?.title,
    desc: pageContent?.acf?.section_3_com?.desc,
    image: pageContent?.acf?.section_3_com?.image,
    form_text_1: pageContent?.acf?.section_3_com?.form_text_1,
    form_text_2: pageContent?.acf?.section_3_com?.form_text_2,
    eligibilityList:
      pageContent?.acf?.section_3_com?.list_item ||
      nganhNgonNguTiengAnhData.trainning.eligibilityList
  };

  const programValuesData = {
    section_title:
      pageContent?.acf?.section_4_com?.section_title ||
      nganhNgonNguTiengAnhData.programValues?.section_title,
    image_1:
      pageContent?.acf?.section_4_com?.image_1 ||
      nganhNgonNguTiengAnhData.programValues?.image_1,
    title_1:
      pageContent?.acf?.section_4_com?.title_1 ||
      nganhNgonNguTiengAnhData.programValues?.title_1,
    content_1:
      pageContent?.acf?.section_4_com?.content_1 ||
      nganhNgonNguTiengAnhData.programValues?.content_1,
    title_2:
      pageContent?.acf?.section_4_com?.title_2 ||
      nganhNgonNguTiengAnhData.programValues?.title_2,
    content_2:
      pageContent?.acf?.section_4_com?.content_2 ||
      nganhNgonNguTiengAnhData.programValues?.content_2,
    image_2:
      pageContent?.acf?.section_4_com?.image_2 ||
      nganhNgonNguTiengAnhData.programValues?.image_2,
    title_3:
      pageContent?.acf?.section_4_com?.title_3 ||
      nganhNgonNguTiengAnhData.programValues?.title_3,
    content_3:
      pageContent?.acf?.section_4_com?.content_3 ||
      nganhNgonNguTiengAnhData.programValues?.content_3,
    title_4:
      pageContent?.acf?.section_4_com?.title_4 ||
      nganhNgonNguTiengAnhData.programValues?.title_4,
    content_4:
      pageContent?.acf?.section_4_com?.content_4 ||
      nganhNgonNguTiengAnhData.programValues?.content_4
  };

  return (
    <MajorPageLayout
      image={
        pageContent?.acf?.breadcrumbs_com?.image || "/nganh-ngon-ngu-anh.webp"
      }
      title={pageContent?.acf?.breadcrumbs_com?.title || "Ngôn ngữ Anh"}
      path={"/ngon-ngu-anh"}
      content={contentData}
      sidebar={sidebarData}
      trainning={trainningData}
      programValues={programValuesData}
      section_kg={{
        title: pageContent?.acf?.section_kg?.title,
        sub_title: pageContent?.acf?.section_kg?.sub_title
      }}
    />
  );
};
