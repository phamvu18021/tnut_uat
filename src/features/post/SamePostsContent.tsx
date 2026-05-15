"use client";

import { CardBlog } from "@/components/CardBlog";
import {
  Box,
  Button,
  Divider,
  GridItem,
  HStack,
  Heading,
  SimpleGrid
} from "@chakra-ui/react";
import Link from "next/link";
import { formatDate } from "@/ultil/date";

export const SamePostsContent = ({ samePosts }: { samePosts: any[] }) => {
  return (
    <>
      <Divider pt={"32px"} />
      <Box pt={"20px"}>
        <HStack justifyContent={"space-between"} pb={"16px"}>
          <Heading as={"h3"} size={"md"}>
            Bài viết liên quan
          </Heading>
          <Button
            as={Link}
            href={"/tin-tuc"}
            variant={"link"}
            colorScheme="red"
          >
            Xem tất cả
          </Button>
        </HStack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={"20px"}>
          {samePosts.map((postCat, index) => {
            if (index < 3)
              return (
                <GridItem key={index}>
                  <CardBlog
                    date={postCat?.date ? formatDate(postCat.date) : ""}
                    title={postCat?.title?.rendered}
                    desc=""
                    image={postCat?.featured_image || ""}
                    path={`/${postCat.slug}`}
                  />
                </GridItem>
              );
          })}
        </SimpleGrid>
      </Box>
    </>
  );
};
