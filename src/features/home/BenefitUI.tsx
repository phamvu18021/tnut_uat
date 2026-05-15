"use client";

import { MotionTop } from "@/components/MotionTop";
import { cleanText } from "@/lib/sanitize-client";
import {
  As,
  Box,
  Container,
  Heading,
  Icon,
  SimpleGrid,
  Text,
  VStack
} from "@chakra-ui/react";
import { BsClockHistory } from "react-icons/bs";
import { MdOutlineWorkHistory } from "react-icons/md";
import { PiCertificate } from "react-icons/pi";
import { RiCustomerService2Line } from "react-icons/ri";

export const Item = ({
  title,
  desc,
  descs,
  icon
}: {
  title: string;
  desc: string;
  descs: string;
  icon?: As;
}) => {
  return (
    <Box
      pos="relative"
      transition="all 0.3s ease-in-out"
      bg={{ base: "#3d3a5c", md: "#3d3a5c", lg: "transparent" }}
      borderRadius="16px"
      p={{ base: 4, md: 6, lg: 8 }}
      h={{ base: "200px", md: "240px", lg: "280px" }}
      cursor="pointer"
      role="group"
      _hover={{
        bg: "#ff6b1a",
        h: { base: "300px", md: "350px", lg: "400px" },
        transform: {
          base: "translateY(-50px)",
          md: "translateY(-55px)",
          lg: "translateY(-60px)"
        },
        boxShadow: "0 25px 50px rgba(255, 107, 26, 0.3)",
        "& svg": {
          color: "white"
        },
        "& .description": {
          color: "white"
        }
      }}
    >
      <VStack spacing={4} h="full" align="start">
        <Icon
          as={icon}
          w={{ base: "40px", md: "44px", lg: "48px" }}
          h={{ base: "40px", md: "44px", lg: "48px" }}
          color="#ff6b1a"
          transition="color 0.3s ease-in-out"
        />

        <VStack spacing={{ base: 2, md: 3, lg: 3 }} flex="1" align="start">
          <Text
            fontSize={{ base: "16px", md: "18px", lg: "20px" }}
            fontWeight="bold"
            color="white"
            lineHeight="1.2"
          >
            {title}
          </Text>

          <VStack spacing={{ base: 1, md: 2, lg: 2 }} align="start">
            <Text
              className="description"
              color="rgba(255, 255, 255, 0.8)"
              fontSize={{ base: "12px", md: "13px", lg: "14px" }}
              lineHeight="1.6"
              transition="color 0.3s ease-in-out"
            >
              {desc}
            </Text>
            <Text
              className="description"
              color="rgba(255, 255, 255, 0.8)"
              fontSize={{ base: "12px", md: "13px", lg: "14px" }}
              lineHeight="1.6"
              transition="color 0.3s ease-in-out"
            >
              {descs}
            </Text>
          </VStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export const BenefitUI = ({ homeContent }: { homeContent?: any | null }) => {
  const benefits = [
    {
      title:
        homeContent?.acf?.loi_ich?.loi_ich_1.loi_ich_title ||
        ".Thời gian Đào tạo ngắn",
      desc:
        homeContent?.acf?.loi_ich?.loi_ich_1.loi_ich_desc ||
        "• .Người học có thể học vượt để rút ngắn thời gian học tập theo quy định đào tạo tín chỉ ",
      descs:
        homeContent?.acf?.loi_ich?.loi_ich_1.loi_ich_descs ||
        "• .Thời gian đào tạo từ 2-4,5 năm ",
      icon: BsClockHistory
    },
    {
      title:
        homeContent?.acf?.loi_ich?.loi_ich_2.loi_ich_title ||
        ".Bằng Đại học uy tín ",
      desc:
        homeContent?.acf?.loi_ich?.loi_ich_2.loi_ich_desc ||
        "• .Bằng không ghi hình thức đào tạo và được Bộ GD&ĐT công nhận ",
      descs:
        homeContent?.acf?.loi_ich?.loi_ich_2.loi_ich_descs ||
        "• .Có giá trị sử dụng trọn đời",
      icon: PiCertificate
    },
    {
      title: homeContent?.acf?.loi_ich?.loi_ich_3.loi_ich_title || ".Tư vấn 24/7",
      desc:
        homeContent?.acf?.loi_ich?.loi_ich_3.loi_ich_desc ||
        "• .Tư vấn lộ trình học miễn phí",
      descs:
        homeContent?.acf?.loi_ich?.loi_ich_3.loi_ich_descs ||
        "• .Hỗ trợ học tập và kỹ thuật nhanh chóng - tận tình",
      icon: RiCustomerService2Line
    },
    {
      title:
        homeContent?.acf?.loi_ich?.loi_ich_4.loi_ich_title ||
        ".Kho học liệu đa dạng",
      desc:
        homeContent?.acf?.loi_ich?.loi_ich_4.loi_ich_desc ||
        "• .Tài liệu học tập đa Phương tiện (video, slide, script,..) ",
      descs:
        homeContent?.acf?.loi_ich?.loi_ich_4.loi_ich_descs ||
        "• .Giáo trình do giảng viên đang trực tiếp công tác tại trường biên soạn.",
      icon: MdOutlineWorkHistory
    }
  ];

  return (
    <Box bg="white" py={{ base: "40px", lg: "80px" }}>
      <Container maxW="7xl">
        <Heading
          as="h2"
          textAlign={"center"}
          textColor={"blue.800"}
          fontWeight={600}
          fontSize={{ base: 20, lg: 40 }}
          lineHeight={1.2}
          mb={{ base: 8, lg: 0 }}
          dangerouslySetInnerHTML={{
            __html: cleanText(
              homeContent?.acf?.title_section_3 ||
                "Ưu điểm của hệ đào tạo từ xa\r\nTrường Đại học Kỹ thuật công nghiệp Thái Nguyên."
            )
          }}
        />
        <Box
          pos="relative"
          h={{ base: "auto", md: "auto", lg: "450px" }}
          overflow="visible"
        >
          <Box
            bg="blue.800"
            borderRadius="24px"
            p={{ base: 4, md: 6, lg: 8 }}
            h={{ base: "200px", md: "240px", lg: "280px" }}
            pos="absolute"
            top="50%"
            left={0}
            right={0}
            transform="translateY(-50%)"
            zIndex={1}
            display={{ base: "none", md: "none", lg: "block" }}
          />
          <Box
            pos={{ base: "relative", md: "relative", lg: "absolute" }}
            top={{ base: "auto", md: "auto", lg: "280px" }}
            left={0}
            right={0}
            transform={{ base: "none", md: "none", lg: "translateY(-200px)" }}
            zIndex={2}
          >
            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 4 }}
              spacing={{ base: 4, md: 5, lg: 6 }}
              w="full"
            >
              {benefits.map((categoty, index) => (
                <MotionTop key={index}>
                  <Item
                    title={categoty.title}
                    desc={categoty.desc}
                    descs={categoty.descs}
                    icon={categoty.icon}
                  />
                </MotionTop>
              ))}
            </SimpleGrid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
