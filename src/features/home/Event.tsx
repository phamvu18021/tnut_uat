"use client";

import { CardBlogEvent } from "@/components/CardBlog";
import { HeadSectionEvent } from "@/components/HeadSection";
import { Container, GridItem, HStack, Heading, SimpleGrid, Button } from "@chakra-ui/react";
import Link from "next/link";

export const Event = ({
  news: initialNews,
  notifis: initialNotifis
}: {
  news?: any[];
  notifis?: any[];
}) => {
  const news = initialNews?.length
    ? [initialNews[0], initialNews[1], initialNews[2], initialNews[4]].filter(
        Boolean
      )
    : [];
  const notifis = initialNotifis?.length
    ? [
        initialNotifis[0],
        initialNotifis[1],
        initialNotifis[2],
        initialNotifis[4]
      ].filter(Boolean)
    : [];

  return (
    <Container maxW={"7xl"} py={"64px"}>
      <HeadSectionEvent
        title="Tin tức - Thông báo"
        subtitle="tin tức"
        desc="Đừng vội lướt qua những tin tức và thông báo cập nhật từ chúng tôi"
      />
      <SimpleGrid columns={{ base: 1, md: 2 }} pt={"24px"} spacing={"8"}>
        <GridItem>
          <Heading
            as={"h3"}
            size={{ base: "sm", lg: "md" }}
            borderBottom={"1px solid"}
            borderColor={"gray.100"}
            textAlign={{ base: "center", lg: "left" }}
            color={"blue.800"}
          >
            Tin tức
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} gap={"24px"}>
            {news?.map((post, index) => (
              <CardBlogEvent
                key={index}
                image={post?.featured_image || ""}
                tag="Tin tức"
                bgTag="red.500"
                title={post?.title || ""}
                desc={post?.excerpt || ""}
                date={post?.date || ""}
                path={`/${post.slug}`}
              />
            ))}
          </SimpleGrid>
        </GridItem>
        {notifis?.length > 0 && (
          <GridItem>
            <Heading
              as={"h3"}
              size={{ base: "sm", lg: "md" }}
              textAlign={{ base: "center", lg: "right" }}
              borderBottom={"1px solid"}
              borderColor={"gray.100"}
              color={"blue.800"}
            >
              Thông báo
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} gap={"24px"}>
              {notifis?.map((post, index) => (
                <CardBlogEvent
                  key={index}
                  image={post?.featured_image || ""}
                  tag="Thông báo"
                  bgTag="green.500"
                  title={post?.title || ""}
                  desc={post?.excerpt || ""}
                  date={post?.date || ""}
                  path={`/${post.slug}`}
                />
              ))}
            </SimpleGrid>
          </GridItem>
        )}
      </SimpleGrid>

      <HStack justify={"center"}>
        <Button
          as={Link}
          href={"/tin-tuc"}
          colorScheme={"#064121"}
          variant={"link"}
          fontSize={{ base: "md", md: "xl" }}
          pt={6}
          fontWeight={500}
        >
          Xem tất cả
        </Button>
      </HStack>
    </Container>
  );
};
