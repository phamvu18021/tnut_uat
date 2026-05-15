import { Loading } from "@/components/Loading";
import { LayoutBottom } from "@/layouts/layoutPosts/LayoutBottom";
import {
  Box,
  Container,
  Divider,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  HStack
} from "@chakra-ui/react";
import Image from "next/image";
import { Suspense } from "react";
import { ListPosts } from "./ListPosts";

export const Posts = ({
  initialPosts,
  initialTotalPosts
}: {
  initialPosts?: any[];
  initialTotalPosts?: string;
}) => {
  return (
    <Box pb={"40px"}>
      <Box bg={"#F8F9FA"}>
        <Box
          pos="relative"
          overflow="hidden"
          minH={{ base: "200px", lg: "300px" }}
        >
          <Image
            src="/bannernews.webp"
            alt="Banner News"
            fill
            priority
            fetchPriority="high"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
            quality={90}
            style={{
              objectFit: "cover",
              objectPosition: "50% 100%",
              filter: "brightness(0.6)"
            }}
          />
          <Container
            maxW={"7xl"}
            py={{ base: "28px", lg: "42px" }}
            color={"white"}
            pl={{ base: 6, lg: 0 }}
            pos="relative"
            zIndex={1}
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
                NEWS
              </Text>
            </HStack>
            <Box>
              <Text
                fontWeight={400}
                textAlign={"start"}
                fontSize={{ base: "32px", lg: "60px" }}
                pb={{ base: "36px", lg: "52px" }}
              >
                TIN TỨC VÀ SỰ KIỆN
              </Text>
            </Box>

            <Breadcrumb
              spacing="8px"
              separator={<Text color="gray.50" as="span">/</Text>}
              fontWeight="medium"
              fontSize="md"
              pb={{ base: 2, lg: 8 }}
            >
              <BreadcrumbItem color="gray.50" fontWeight={300}>
                <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem color="gray.50" px={4} fontWeight={600}>
                <BreadcrumbLink href="/tin-tuc">
                  Tin tức & sự kiện
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Container>
        </Box>
      </Box>
      <Box pt={"20px"}>
        <Suspense fallback={<Loading />}>
          <LayoutBottom sticky="120px">
            <ListPosts
              cate="news"
              initialPosts={initialPosts}
              initialTotalPosts={initialTotalPosts}
            />
          </LayoutBottom>
        </Suspense>
      </Box>
      <Divider size={"xl"} />
    </Box>
  );
};
