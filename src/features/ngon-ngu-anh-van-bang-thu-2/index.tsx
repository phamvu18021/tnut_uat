"use client";

import { PageAdsLayout } from "@/layouts/page-ads";
import { defaultBannerData } from "@/layouts/page-ads/sections/banner/data";
import { defaultThongTinTuyenSinhData } from "@/layouts/page-ads/sections/thong-tin-tuyen-sinh/data";
import { defaultPhuongThucDaoTaoData } from "@/layouts/page-ads/sections/phuong-thuc-dao-tao/data";
import { defaultCountdownData } from "@/layouts/page-ads/sections/countdown/data";
import { defaultRegistrationFormData } from "@/layouts/page-ads/sections/registration-form/data";
import { defaultMauVanBangMoiData } from "@/layouts/page-ads/sections/mau-van-bang-moi/data";
import { useState, useEffect } from "react";

export const Nnavnt2 = () => {
  const [pageContent, setPageContent] = useState<any>(null);

  useEffect(() => {
    const getPageContent = async () => {
      try {
        const res = await fetch(`/api/content-page/?type=nnavbt2`, {
          next: { revalidate: 3 }
        });
        if (!res.ok) {
          throw new Error(`Posts fetch failed with status: ${res.statusText}`);
        }
        const data = await res.json();
        setPageContent(data?.posts[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getPageContent();
  }, []);
  console.log(pageContent);
  const section1Data = {
    ...defaultBannerData,
    backgroundImages: {
      desktop:
        pageContent?.acf?.section_1_com?.background_image ||
        defaultBannerData.backgroundImages.desktop,
      mobile:
        pageContent?.acf?.section_1_com?.background_image ||
        defaultBannerData.backgroundImages.mobile
    },
    titles: {
      main:
        pageContent?.acf?.section_1_com?.title_main ||
        defaultBannerData.titles.main,
      sub:
        pageContent?.acf?.section_1_com?.title_sub ||
        defaultBannerData.titles.sub
    },
    infoSection: {
      timeFlexible:
        pageContent?.acf?.section_1_com?.info_time_flexible ||
        defaultBannerData.infoSection.timeFlexible,
      studyOnline:
        pageContent?.acf?.section_1_com?.info_study_online ||
        defaultBannerData.infoSection.studyOnline,
      recognizedDegree:
        pageContent?.acf?.section_1_com?.info_recognized_degree ||
        defaultBannerData.infoSection.recognizedDegree
    },
    benefits:
      pageContent?.acf?.section_1_com?.benefits?.map(
        (item: { text: string }) => item.text
      ) || defaultBannerData.benefits,
    featureCards:
      pageContent?.acf?.section_1_com?.feature_cards ||
      defaultBannerData.featureCards,
    featureCardsBackground:
      pageContent?.acf?.section_1_com?.feature_CardsBackground ||
      pageContent?.acf?.section_1_com?.feature_cards_background ||
      defaultBannerData.featureCardsBackground,
    personImage: {
      mobile:
        pageContent?.acf?.section_1_com?.featureCardsBackground ||
        defaultBannerData.personImage.mobile,
      tablet:
        pageContent?.acf?.section_1_com?.featureCardsBackground ||
        defaultBannerData.personImage.tablet,
      desktop:
        pageContent?.acf?.section_1_com?.featureCardsBackground ||
        defaultBannerData.personImage.desktop
    },
    buttonText:
      pageContent?.acf?.section_1_com?.buttonText ||
      pageContent?.acf?.section_1_com?.button_text ||
      defaultBannerData.buttonText,
    buttonPopupId: defaultBannerData.buttonPopupId
  };

  const section2Data = {
    ...defaultThongTinTuyenSinhData,
    title:
      pageContent?.acf?.section_2_com?.title ||
      defaultThongTinTuyenSinhData.title,
    backgroundImage:
      pageContent?.acf?.section_2_com?.background_image ||
      defaultThongTinTuyenSinhData.backgroundImage,
    defaultActiveTab:
      pageContent?.acf?.section_2_com?.default_active_tab ||
      defaultThongTinTuyenSinhData.defaultActiveTab,
    tabs:
      pageContent?.acf?.section_2_com?.tabs ||
      defaultThongTinTuyenSinhData.tabs,
    graduationBenefits: {
      title:
        pageContent?.acf?.section_2_com?.graduationBenefits?.title ||
        pageContent?.acf?.section_2_com?.graduation_benefits_title ||
        defaultThongTinTuyenSinhData.graduationBenefits.title,
      content:
        pageContent?.acf?.section_2_com?.graduationBenefits?.content ||
        undefined,
      items:
        pageContent?.acf?.section_2_com?.graduation_benefits_items ||
        defaultThongTinTuyenSinhData.graduationBenefits.items,
      image:
        pageContent?.acf?.section_2_com?.graduationBenefits?.image ||
        pageContent?.acf?.section_2_com?.graduation_benefits_image ||
        defaultThongTinTuyenSinhData.graduationBenefits.image
    }
  };

  const section3Data = {
    ...defaultPhuongThucDaoTaoData,
    title:
      pageContent?.acf?.section_3_com?.title ||
      defaultPhuongThucDaoTaoData.title,
    backgroundImage:
      pageContent?.acf?.section_3_com?.background_image ||
      defaultPhuongThucDaoTaoData.backgroundImage,
    topImage:
      pageContent?.acf?.section_3_com?.top_image ||
      defaultPhuongThucDaoTaoData.topImage,
    items:
      pageContent?.acf?.section_3_com?.items ||
      defaultPhuongThucDaoTaoData.items
  };

  const section4Data = {
    ...defaultCountdownData,
    title: pageContent?.acf?.section_4_com?.title || defaultCountdownData.title,
    sub_title:
      pageContent?.acf?.section_4_com?.sub_title ||
      defaultCountdownData.sub_title
  };

  const section5Data = {
    ...defaultRegistrationFormData,
    leftImage:
      pageContent?.acf?.section_5_com?.left_image ||
      defaultRegistrationFormData.leftImage,
    backgroundImage:
      pageContent?.acf?.section_5_com?.background_image ||
      defaultRegistrationFormData.backgroundImage
  };

  const section6Data = {
    ...defaultMauVanBangMoiData,
    title:
      pageContent?.acf?.section_6_com?.title || defaultMauVanBangMoiData.title,
    sub_title:
      pageContent?.acf?.section_6_com?.sub_title ||
      pageContent?.acf?.section_6_com?.subtitle ||
      defaultMauVanBangMoiData.sub_title,
    description:
      pageContent?.acf?.section_6_com?.description ||
      defaultMauVanBangMoiData.description,
    highlight_text:
      pageContent?.acf?.section_6_com?.highlight_text ||
      defaultMauVanBangMoiData.highlight_text,
    content:
      pageContent?.acf?.section_6_com?.content ||
      defaultMauVanBangMoiData.content,
    image: pageContent?.acf?.section_6_com?.image || "",
    backgroundImage:
      pageContent?.acf?.section_6_com?.backgroundImage ||
      pageContent?.acf?.section_6_com?.background_image ||
      defaultMauVanBangMoiData.backgroundImage,
    videoUrl:
      pageContent?.acf?.section_6_com?.videoUrl ||
      pageContent?.acf?.section_6_com?.video_url ||
      undefined,
    bottomImage:
      pageContent?.acf?.section_6_com?.bottomImage ||
      pageContent?.acf?.section_6_com?.bottom_image ||
      undefined
  };

  const sections = [
    {
      type: "banner" as const,
      data: section1Data
    },
    {
      type: "phuong-thuc-dao-tao" as const,
      data: section3Data
    },
    {
      type: "thong-tin-tuyen-sinh" as const,
      data: section2Data
    },

    {
      type: "countdown" as const,
      data: section4Data
    },
    {
      type: "registration-form" as const,
      data: section5Data
    },
    {
      type: "mau-van-bang-moi" as const,
      data: section6Data
    }
  ];

  return (
    <PageAdsLayout
      sections={sections}
      title={
        pageContent?.acf?.breadcrumbs_com?.title ||
        "Ngôn ngữ Anh - Văn bằng thứ 2"
      }
      image={pageContent?.acf?.breadcrumbs_com?.image}
      path="/ngon-ngu-anh-van-bang-thu-2"
    />
  );
};

export { defaultBannerData } from "@/layouts/page-ads/sections/banner/data";
export type { BannerProps } from "@/layouts/page-ads/sections/banner";
