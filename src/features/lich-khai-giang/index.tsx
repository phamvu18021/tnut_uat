"use client";

import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Divider,
  HStack,
  Text
} from "@chakra-ui/react";
import { Majors } from "../home/Majors";
import { LkgMain } from "./LkgMain";
import { LkgTuyensinh } from "./LkgTuyensinh";
import dynamic from "next/dynamic";
import Image from "next/image";

const GallerySection = dynamic(
  () => import("./GallerySection").then((mod) => mod.GallerySection),
  { ssr: false }
);

export const LichKg = ({ data }: { data: any }) => {
  const page_content = data;

  return (
    <>
      <Box position="relative" overflow="hidden">
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg={"rgba(0, 0, 0, 0.5)"}
          zIndex={1}
        />
        <Image
          src={page_content?.acf?.breadcrumbs?.image || "/bannernews.webp"}
          alt="Lịch khai giảng Banner"
          fill
          priority
          loading="eager"
          style={{ objectFit: "cover", objectPosition: "bottom" }}
          sizes="100vw"
        />
        <Container
          maxW={"7xl"}
          py={{ base: "28px", lg: "42px" }}
          color={"white"}
          pl={{ base: 6, lg: 0 }}
          position="relative"
          zIndex={2}
        >
          <HStack
            pt={{ base: 8, lg: 16 }}
            pb={{ base: 2, lg: 8 }}
            color={"gray.50"}
          >
            <Box display={"flex"} alignContent={"center"}>
              <Divider
                zIndex={2}
                borderBottomWidth={"3px"}
                borderBlockEndColor={"gray.50"}
                w={"40px"}
              />
            </Box>
            <Text
              textAlign={"start"}
              fontSize={{ base: "12px", lg: "20px" }}
              fontWeight={500}
            >
              Lịch khai giảng
            </Text>
          </HStack>
          <Box>
            <Text
              fontWeight={400}
              textAlign={"start"}
              fontSize={{ base: "32px", lg: "60px" }}
              pb={{ base: "36px", lg: "52px" }}
            >
              {page_content?.acf?.breadcrumbs?.title ||
                ".Đại học Kỹ thuật Công nghiệp"}
            </Text>
          </Box>

          <Breadcrumb
            spacing="8px"
            separator={<ChevronRightIcon color="gray.50" />}
            fontWeight="medium"
            fontSize="md"
            pb={{ base: 2, lg: 8 }}
          >
            <BreadcrumbItem color="gray.50" fontWeight={300}>
              <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem color="gray.50" px={4} fontWeight={600}>
              <BreadcrumbLink href="/lich-khai-giang">
                Lịch khai giảng
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Container>
      </Box>

      <LkgMain
        title={page_content?.acf?.lick_kg?.title || ".KHAI GIẢNG ĐỢT I NĂM 2024"}
        lichkg1={page_content?.acf?.lick_kg?.lich_kg_hn}
        lichkg2={page_content?.acf?.lick_kg?.lich_kg_hcm}
        title_1={page_content?.acf?.lick_kg?.title_1}
        title_2={page_content?.acf?.lick_kg?.title_2}
        time_count_1={page_content?.acf?.lick_kg?.time_count_1}
        time_count_2={page_content?.acf?.lick_kg?.time_count_2}
      />

      <GallerySection
        section_title={page_content?.acf?.gallery?.title}
        images={page_content?.acf?.gallery?.list_item}
      />
      <LkgTuyensinh info={page_content?.acf?.info} />
      <Box bg={"gray.50"}>
        <Container maxW={"7xl"}>
          <Majors majors={page_content?.acf?.nganh_dao_tao} />
        </Container>
      </Box>
    </>
  );
};
