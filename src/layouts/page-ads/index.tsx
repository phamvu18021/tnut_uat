"use client";

import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { BannerSection } from "./sections/banner";
import { ThongTinTuyenSinhSection } from "./sections/thong-tin-tuyen-sinh";
import { CountdownSectionPageAds } from "./sections/countdown";
import { RegistrationFormSection } from "./sections/registration-form";
import { PhuongThucDaoTaoSection } from "./sections/phuong-thuc-dao-tao";
import { MauVanBangMoiSection } from "./sections/mau-van-bang-moi";
import { SectionData, PageAdsLayoutProps } from "./types";

const renderSection = (section: SectionData) => {
  switch (section.type) {
    case "banner":
      return <BannerSection {...section.data} />;
    case "thong-tin-tuyen-sinh":
      return <ThongTinTuyenSinhSection {...section.data} />;
    case "countdown":
      return <CountdownSectionPageAds {...section.data} />;
    case "registration-form":
      return <RegistrationFormSection {...section.data} />;
    case "phuong-thuc-dao-tao":
      return <PhuongThucDaoTaoSection {...section.data} />;
    case "mau-van-bang-moi":
      return <MauVanBangMoiSection {...section.data} />;
    default:
      return null;
  }
};

export const PageAdsLayout = ({ sections }: PageAdsLayoutProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.6
  });

  useEffect(() => {
    if (inView && !isVisible) {
      setIsVisible(true);
    }
  }, [inView, isVisible]);

  return (
    <>
      {sections[0] && (
        <Box width="100%">
          {renderSection(sections[0])}
        </Box>
      )}
      <Box ref={ref} minH="100px">
        {isVisible && (
          <>
            {sections.slice(1).map((section, index) => (
              <Box key={index + 1} width="100%">
                {renderSection(section)}
              </Box>
            ))}
          </>
        )}
      </Box>
    </>
  );
};

export type { SectionData, PageAdsLayoutProps, SectionType } from "./types";
