"use client";

import { BtnTheme } from "@/components/BtnTheme";
import { useModal } from "@/components/ModalContext";
import { Box, Skeleton } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SkeletonLoader = () => {
  return (
    <Skeleton
      width="100%"
      height={{ base: "auto", md: "670px" }}
      aspectRatio={{ base: "16/9", md: "unset" }}
      fadeDuration={0.5}
    />
  );
};

export const CardBanner = ({
  image,
  isLcp
}: {
  image: string;
  isLcp?: boolean;
}) => {
  const { isOpen, onOpen } = useModal();

  return (
    <Box
      position="relative"
      width="100%"
      height={{ base: "auto", md: "670px" }}
      aspectRatio={{ base: "16/9", md: "unset" }}
      overflow="hidden"
    >
      <Image
        priority={isLcp}
        fetchPriority={isLcp ? "high" : "low"}
        loading={isLcp ? "eager" : "lazy"}
        decoding={isLcp ? "sync" : "async"}
        alt="Banner tuyển sinh Đại học Kỹ thuật Công nghiệp Thái Nguyên"
        src={image}
        fill
        sizes="100vw"
        quality={75}
        style={{
          objectFit: "cover" 
        }}
      />

      <BtnTheme
        position="absolute"
        top="80%"
        left={{ base: "10%", lg: "18%" }}
        size={{ base: "xs", md: "lg" }}
        fontSize={{ base: "14px", lg: "20px" }}
        onClick={() => !isOpen && onOpen && onOpen()}
        w={{ base: "140px", md: "220px", lg: "260px" }}
      >
        ĐĂNG KÝ NGAY!
      </BtnTheme>
    </Box>
  );
};
const SwiperContainer = styled.div`
.swiper-button-next, .swiper-button-prev {
  color: #fff;
}
.swiper-button-prev:after,.swiper-container-rtl .swiper-button-next:after {
  font-size:30px
}
.swiper-button-next:after, .swiper-rtl .swiper-button-prev:after{
  font-size:30px
}
.swiper-pagination {
  position: absolute;
  top: 82%;
  left: 80%;
  transform: translate3d(-50%, 0, 0);
  @media (max-width: 420px) {
  display: none;
  }
}
.swiper-horizontal>.swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal, .swiper-pagination-custom, .swiper-pagination-fraction {
    top: 82% !important;
    left: 80% !important;
    width: 100%;
}
.swiper-pagination-horizontal{
  position: absolute;
  top: 82% !important;
  left: 80% !important;
}
.swiper-pagination-bullet {
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  justify-content: center;
  font-size: 16px;
  color: #8A8A8A;
  opacity: 1;
  background: rgba(0, 0, 0, 0);
}

.swiper-pagination-bullet-active {
  color: #fff;
  background: #4299E1;
}
@media (max-width: 420px) {
  
}
}`;
export const Banner = (imagesBanner: any) => {
  if (!imagesBanner?.imagesBanner) {
    return <SkeletonLoader />;
  }

  const teachers = [
    {
      title:
        ".Ứng dụng nền tảng Đại học số tiên tiến, Tuyển sinh liên tục, Xét duyệt hồ sơ dự tuyển, Bằng cấp tương đương hệ chính quy",
      avt: imagesBanner.imagesBanner.anh_banner_1 || `/main.jpg`,
      desc: `ĐẠI HỌC TỪ XA`
    },
    {
      title:
        "Với hệ đào tạo từ xa tnut, chương trình học được thiết kế theo quy chuẩn của Bộ GD&ĐT, đảm bảo cho học viên đầy đủ kiến thức chuyên môn và kinh nghiệm thực hành thực tế, thỏa sức theo đuổi đam mê.",
      avt: imagesBanner.imagesBanner.anh_banner_2 || `/main.jpg`,
      desc: `CÁC NGÀNH ĐÀO TẠO "HOT"`
    },
    {
      title:
        "Với hệ đào tạo từ xa tnut, chương trình học được thiết kế theo quy chuẩn của Bộ GD&ĐT, đảm bảo cho học viên đầy đủ kiến thức chuyên môn và kinh nghiệm thực hành thực tế, thỏa sức theo đuổi đam mê.",
      avt: imagesBanner.imagesBanner.anh_banner_3 || `/main.jpg`,
      desc: `CÁC NGÀNH ĐÀO TẠO "HOT"`
    },
    {
      title:
        "Với hệ đào tạo từ xa tnut, chương trình học được thiết kế theo quy chuẩn của Bộ GD&ĐT, đảm bảo cho học viên đầy đủ kiến thức chuyên môn và kinh nghiệm thực hành thực tế, thỏa sức theo đuổi đam mê.",
      avt: imagesBanner.imagesBanner.anh_banner_4 || `/main.jpg`,
      desc: `CÁC NGÀNH ĐÀO TẠO "HOT"`
    },
    {
      title:
        "Với hệ đào tạo từ xa tnut, chương trình học được thiết kế theo quy chuẩn của Bộ GD&ĐT, đảm bảo cho học viên đầy đủ kiến thức chuyên môn và kinh nghiệm thực hành thực tế, thỏa sức theo đuổi đam mê.",
      avt: imagesBanner.imagesBanner.anh_banner_5 || `/main.jpg`,
      desc: `CÁC NGÀNH ĐÀO TẠO "HOT"`
    }
  ];

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    }
  };
  return (
    <SwiperContainer>
      <Swiper
        pagination={pagination}
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        navigation={true}
      >
        {teachers?.map((teacher, index) => (
          <SwiperSlide key={index} className="swiperSlide">
            <CardBanner image={teacher.avt} isLcp={index === 0} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperContainer>
  );
};
