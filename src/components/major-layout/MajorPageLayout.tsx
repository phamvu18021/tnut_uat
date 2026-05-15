"use client";

import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Divider,
  Flex,
  HStack,
  Text
} from "@chakra-ui/react";
import { MainContent } from "./MainContent";
import { Sidebar } from "./Sidebar";
import { ChevronRightIcon } from "@chakra-ui/icons";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const CountdownSection = dynamic(
  () =>
    import("@/features/home/CountdownSection").then((mod) => ({
      default: mod.CountdownSection
    })),
  {
    ssr: false,
  }
);

const Benefit = dynamic(
  () =>
    import("@/features/home/Benefit").then((mod) => ({ default: mod.Benefit })),
  {
    ssr: false,
  }
);

const ProgramValuesSection = dynamic(
  () =>
    import("./ProgramValuesSection").then((mod) => ({
      default: mod.ProgramValuesSection
    })),
  {
    ssr: false,
  }
);

const TrainingProgramSection = dynamic(
  () =>
    import("./TrainingProgramSection").then((mod) => ({
      default: mod.TrainingProgramSection
    })),
  {
    ssr: false,
  }
);

interface MajorPageProps {
  title?: string;
  image?: string;
  path?: string;
  content: {
    introductionText: string;
    param_1: string;
    param_2: string;
    param_3: string;
    sub_title: string;
    value_1: string;
    value_2: string;
    value_3: string;
  };
  sidebar: {
    registrationTitle: string;
    registrationDescription: string;
    registrationButtonText: string;
    highlightedJobsHtml: string;
    descriptionHtml: string;
  };
  trainning: {
    title: string;
    desc: string;
    image: string;
    form_text_1: string;
    form_text_2: string;
    eligibilityList: { text: string }[];
  };
  programValues: {
    section_title?: string;
    image_1?: string;
    title_1?: string;
    content_1?: string;
    title_2?: string;
    content_2?: string;
    image_2?: string;
    title_3?: string;
    content_3?: string;
    title_4?: string;
    content_4?: string;
  };
  section_kg: {
    title?: string;
    sub_title?: string;
  };
}

export const MajorPageLayout = ({
  image,
  title,
  path,
  content,
  sidebar,
  trainning,
  programValues,
  section_kg
}: MajorPageProps) => {
  const { ref, inView } = useInView({
    threshold: 0.5
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView && !isVisible) {
      setIsVisible(true);
    }
  }, [inView, isVisible]);
  return (
    <Box>
      <Box
        bg={"rgba(0, 0, 0, 0.5)"}
        bgImage={image}
        bgSize={"cover"}
        bgPosition={"50% 100%"}
        backgroundBlendMode={"overlay"}
      >
        <Container maxW={"7xl"} py="52px" color={"white"}>
          <HStack pt={16} color={"gray.50"}>
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
              {"NGÀNH"}
            </Text>
          </HStack>
          <Box>
            <Text
              fontWeight={400}
              textAlign={"start"}
              fontSize={{ base: "28px", lg: "60px" }}
              pt={"18px"}
              pb="42px"
            >
              {title || "Ngành "}
            </Text>
          </Box>

          <Breadcrumb
            px={4}
            spacing="4px"
            separator={<ChevronRightIcon color="gray.50" />}
            fontWeight="medium"
            fontSize={{ base: "13px", lg: "16px" }}
          >
            <BreadcrumbItem color="gray.50" fontWeight={300}>
              <BreadcrumbLink href="/">TRANG CHỦ</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem
              color="gray.50"
              fontWeight={300}
              pointerEvents={"none"}
              cursor={"not-allowed"}
            >
              <BreadcrumbLink>CHƯƠNG TRÌNH ĐÀO TẠO</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem color="gray.50" fontWeight={600}>
              <BreadcrumbLink href={path}>{title}</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Container>
      </Box>
      <Container maxW="7xl" py={8}>
        <Flex
          direction={{ base: "column", lg: "row" }}
          gap={8}
          align="flex-start"
        >
          <Box flex="3" minW="0">
            {content && <MainContent content={content} />}
          </Box>

          <Divider
            orientation="vertical"
            borderColor="#ff6400"
            borderWidth="2px"
            height="auto"
            alignSelf="stretch"
            display={{ base: "none", lg: "block" }}
          />

          <Box flex="1" minW="0" maxW={{ lg: "400px" }}>
            {sidebar && <Sidebar {...sidebar} />}
          </Box>
        </Flex>
      </Container>
      <Box ref={ref}>
        {isVisible && (
          <>
            {trainning && <TrainingProgramSection trainning={trainning} />}
            <Benefit />
            <CountdownSection
              title={section_kg?.title}
              sub_title={section_kg?.sub_title}
            />
            {programValues && (
              <ProgramValuesSection content={programValues} />
            )}{" "}
          </>
        )}
      </Box>
    </Box>
  );
};
