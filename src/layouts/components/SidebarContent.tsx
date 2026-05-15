"use client";

import { FormWrapper } from "@/components/FormWrapper";
import { categotys } from "@/features/home/Categorys";
import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export const Item = ({
  path,
  image,
  title
}: {
  path: string;
  image: string;
  title: string;
}) => {
  return (
    <Box
      as={Link}
      href={path || "/"}
      pos="relative"
      transition={"all ease .4s"}
      _hover={{ transform: "translateY(-10px)" }}
      objectFit="cover"
    >
      <Image
        loading="lazy"
        width={700}
        height={400}
        src={image}
        alt={title}
        objectFit="cover"
        style={{ height: "150px", maxWidth: "100%", filter: "brightness(50%)" }}
      />

      <Box
        as={Flex}
        pos={"absolute"}
        top={0}
        left={"10%"}
        right={"40%"}
        bottom={0}
        align={"center"}
      >
        <Heading as={"h2"} size={"md"} color={"white"} textAlign={"center"}>
          {title}
        </Heading>
      </Box>
    </Box>
  );
};

export const SidebarContent = ({
  sticky,
  checkpost,
  notifis,
  children
}: {
  sticky?: string;
  checkpost: boolean;
  notifis: any[];
  children: React.ReactNode;
}) => {
  return (
    <Box pos={sticky ? "sticky" : "static"} top={sticky} bg={"gray.100"}>
      {children}
      <Box px={6} pt={"32px"}>
        <FormWrapper />
      </Box>

      <Box px={6} pt={"32px"}>
        <Heading
          as={"h3"}
          size={"md"}
          pb={"20px"}
          textAlign={{ base: "center", lg: "start" }}
        >
          Các ngành đào tạo
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3, lg: 1 }} gap={"20px"}>
          {categotys.map((cat: any, index: number) => (
            <Item
              key={index}
              path={cat.path}
              title={cat.title}
              image={`${cat.image}`}
            />
          ))}
        </SimpleGrid>
      </Box>

      <Box py={"32px"}>
        <Heading
          as={"h3"}
          size={"md"}
          pb={"8px"}
          pl={"20px"}
          textAlign={{ base: "center", lg: "start" }}
        >
          Thông báo
        </Heading>
        <Box>
          {notifis &&
            notifis.slice(0, 5).map((item: any, index: number) => (
              <Box py={3} px={6} key={index}>
                <Text
                  as={Link}
                  href={`/${item.slug}`}
                  lineHeight={1.2}
                  css={{
                    display: "-webkit-box",
                    WebkitLineClamp: "2",
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                  }}
                  fontWeight={500}
                >
                  {item.title}
                </Text>
              </Box>
            ))}
        </Box>
      </Box>
    </Box>
  );
};
