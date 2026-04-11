"use client";

import { PageAdsLayout } from "@/layouts/page-ads";
import { defaultBannerData } from "@/layouts/page-ads/sections/banner/data";
import { defaultThongTinTuyenSinhData } from "@/layouts/page-ads/sections/thong-tin-tuyen-sinh/data";
import { defaultPhuongThucDaoTaoData } from "@/layouts/page-ads/sections/phuong-thuc-dao-tao/data";
import { defaultCountdownData } from "@/layouts/page-ads/sections/countdown/data";
import { defaultRegistrationFormData } from "@/layouts/page-ads/sections/registration-form/data";
import { defaultMauVanBangMoiData } from "@/layouts/page-ads/sections/mau-van-bang-moi/data";
import { useState, useEffect } from "react";

export const NgonNguAnhHeTuXa = () => {
  const [pageContent, setPageContent] = useState<any>(null);

  useEffect(() => {
    const getPageContent = async () => {
      try {
        const res = await fetch(`/api/content-page/?type=nnahtx`, {
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

  const getValue = (value: any, defaultValue: any) => {
    if (
      value === false ||
      value === null ||
      value === undefined ||
      value === ""
    ) {
      return defaultValue;
    }
    return value;
  };

  const section1Data = {
    ...defaultBannerData,
    backgroundImages: {
      desktop: getValue(
        pageContent?.acf?.section_1_com?.background_image,
        defaultBannerData.backgroundImages.desktop
      ),
      mobile: getValue(
        pageContent?.acf?.section_1_com?.background_image,
        defaultBannerData.backgroundImages.mobile
      )
    },
    titles: {
      main: getValue(
        pageContent?.acf?.section_1_com?.title_main,
        defaultBannerData.titles.main
      ),
      sub: getValue(
        pageContent?.acf?.section_1_com?.title_sub,
        defaultBannerData.titles.sub
      )
    },
    infoSection: {
      timeFlexible: getValue(
        pageContent?.acf?.section_1_com?.info_time_flexible,
        defaultBannerData.infoSection.timeFlexible
      ),
      studyOnline: getValue(
        pageContent?.acf?.section_1_com?.info_study_online,
        defaultBannerData.infoSection.studyOnline
      ),
      recognizedDegree: getValue(
        pageContent?.acf?.section_1_com?.info_recognized_degree,
        defaultBannerData.infoSection.recognizedDegree
      )
    },
    benefits:
      pageContent?.acf?.section_1_com?.benefits &&
      pageContent?.acf?.section_1_com?.benefits !== false &&
      Array.isArray(pageContent?.acf?.section_1_com?.benefits)
        ? pageContent.acf.section_1_com.benefits.map(
            (item: { text: string }) => item.text
          )
        : defaultBannerData.benefits,
    featureCards: getValue(
      pageContent?.acf?.section_1_com?.feature_cards,
      defaultBannerData.featureCards
    ),
    featureCardsBackground: getValue(
      pageContent?.acf?.section_1_com?.feature_CardsBackground ||
        pageContent?.acf?.section_1_com?.feature_cards_background,
      defaultBannerData.featureCardsBackground
    ),
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
    buttonText: getValue(
      pageContent?.acf?.section_1_com?.buttonText ||
        pageContent?.acf?.section_1_com?.button_text,
      defaultBannerData.buttonText
    ),
    buttonPopupId: defaultBannerData.buttonPopupId
  };

  const section2Data = {
    ...defaultThongTinTuyenSinhData,
    title: getValue(
      pageContent?.acf?.section_2_com?.title,
      defaultThongTinTuyenSinhData.title
    ),
    backgroundImage: getValue(
      pageContent?.acf?.section_2_com?.background_image,
      defaultThongTinTuyenSinhData.backgroundImage
    ),
    defaultActiveTab: getValue(
      pageContent?.acf?.section_2_com?.default_active_tab,
      defaultThongTinTuyenSinhData.defaultActiveTab
    ),
    tabs: getValue(
      pageContent?.acf?.section_2_com?.tabs,
      defaultThongTinTuyenSinhData.tabs
    ),
    graduationBenefits: {
      title: getValue(
        pageContent?.acf?.section_2_com?.graduationBenefits?.title ||
          pageContent?.acf?.section_2_com?.graduation_benefits_title,
        defaultThongTinTuyenSinhData.graduationBenefits.title
      ),
      content:
        pageContent?.acf?.section_2_com?.graduationBenefits?.content !==
          false && pageContent?.acf?.section_2_com?.graduationBenefits?.content
          ? pageContent.acf.section_2_com.graduationBenefits.content
          : undefined,
      items: getValue(
        pageContent?.acf?.section_2_com?.graduation_benefits_items,
        defaultThongTinTuyenSinhData.graduationBenefits.items
      ),
      image: getValue(
        pageContent?.acf?.section_2_com?.graduationBenefits?.image ||
          pageContent?.acf?.section_2_com?.graduation_benefits_image,
        defaultThongTinTuyenSinhData.graduationBenefits.image
      )
    }
  };

  const section3Data = {
    ...defaultPhuongThucDaoTaoData,
    title: getValue(
      pageContent?.acf?.section_3_com?.title,
      defaultPhuongThucDaoTaoData.title
    ),
    backgroundImage: getValue(
      pageContent?.acf?.section_3_com?.background_image,
      defaultPhuongThucDaoTaoData.backgroundImage
    ),
    topImage: getValue(
      pageContent?.acf?.section_3_com?.top_image,
      defaultPhuongThucDaoTaoData.topImage
    ),
    items: getValue(
      pageContent?.acf?.section_3_com?.items,
      defaultPhuongThucDaoTaoData.items
    )
  };

  const section4Data = {
    ...defaultCountdownData,
    title: getValue(
      pageContent?.acf?.section_4_com?.title,
      defaultCountdownData.title
    ),
    sub_title: getValue(
      pageContent?.acf?.section_4_com?.sub_title,
      defaultCountdownData.sub_title
    )
  };

  const section5Data = {
    ...defaultRegistrationFormData,
    leftImage: getValue(
      pageContent?.acf?.section_5_com?.left_image,
      defaultRegistrationFormData.leftImage
    ),
    backgroundImage: getValue(
      pageContent?.acf?.section_5_com?.background_image,
      defaultRegistrationFormData.backgroundImage
    )
  };

  const section6Data = {
    ...defaultMauVanBangMoiData,
    title: getValue(
      pageContent?.acf?.section_6_com?.title,
      defaultMauVanBangMoiData.title
    ),
    sub_title: getValue(
      pageContent?.acf?.section_6_com?.sub_title ||
        pageContent?.acf?.section_6_com?.subtitle,
      defaultMauVanBangMoiData.sub_title
    ),
    description: getValue(
      pageContent?.acf?.section_6_com?.description,
      defaultMauVanBangMoiData.description
    ),
    highlight_text: getValue(
      pageContent?.acf?.section_6_com?.highlight_text,
      defaultMauVanBangMoiData.highlight_text
    ),
    content: getValue(
      pageContent?.acf?.section_6_com?.content,
      defaultMauVanBangMoiData.content
    ),
    image: getValue(
      pageContent?.acf?.section_6_com?.image,
      defaultMauVanBangMoiData.image
    ),
    backgroundImage: getValue(
      pageContent?.acf?.section_6_com?.backgroundImage ||
        pageContent?.acf?.section_6_com?.background_image,
      defaultMauVanBangMoiData.backgroundImage
    ),
    videoUrl: getValue(
      pageContent?.acf?.section_6_com?.videoUrl ||
        pageContent?.acf?.section_6_com?.video_url,
      defaultMauVanBangMoiData.videoUrl
    ),
    bottomImage: getValue(
      pageContent?.acf?.section_6_com?.bottomImage ||
        pageContent?.acf?.section_6_com?.bottom_image,
      defaultMauVanBangMoiData.bottomImage
    )
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
      title={getValue(
        pageContent?.acf?.breadcrumbs_com?.title,
        "Ngôn ngữ Anh - Hệ từ xa"
      )}
      image={getValue(pageContent?.acf?.breadcrumbs_com?.image, undefined)}
      path="/ngon-ngu-anh-he-tu-xa"
    />
  );
};

export { defaultBannerData } from "@/layouts/page-ads/sections/banner/data";
export type { BannerProps } from "@/layouts/page-ads/sections/banner";
