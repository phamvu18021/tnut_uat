"use client";

import { Box, Text, Button, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export const CardReg = ({
  title,
  desc,
  image,
  hoverImage,
  path
}: {
  title: string;
  desc?: string;
  image?: string;
  hoverImage?: string;
  path?: string;
}) => {
  return (
    <Box
      position="relative"
      borderRadius="lg"
      overflow="hidden"
      shadow="lg"
      transition="all 0.3s"
      cursor="pointer"
      h="full"
      role="group"
    >
      <Box position="relative" w="full" h="300px">
        <Image
          placeholder="blur"
          blurDataURL={image || `/no-image.jpeg`}
          loading="lazy"
          width={720}
          height={300}
          src={image || `/no-image.jpeg`}
          alt={`Ảnh khóa học ${title}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        />

        {/* Tiêu đề luôn hiển thị ở trung tâm */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={6}
        >
          <Text
            fontSize="2xl"
            fontWeight="bold"
            textAlign="center"
            lineHeight={1.2}
            color="white"
            textShadow="2px 2px 4px rgba(0,0,0,0.8)"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </Box>

        {/* Overlay trượt từ trái sang phải khi hover */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          display="flex"
          alignItems="center"
          justifyContent="center"
          transform="translateX(-100%)"
          transition="transform 0.5s ease-in-out"
          _groupHover={{ transform: "translateX(0)" }}
          p={6}
          overflow="hidden"
        >
          {/* Nếu có hoverImage thì hiển thị ảnh đó, không thì hiển thị ảnh gốc + overlay xanh */}
          {hoverImage ? (
            <>
              <Image
                placeholder="blur"
                blurDataURL={hoverImage}
                loading="lazy"
                width={720}
                height={300}
                src={hoverImage}
                alt={`Ảnh hover ${title}`}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bg="rgba(0, 33, 71, 0.7)"
              />
            </>
          ) : (
            <>
              <Image
                placeholder="blur"
                blurDataURL={image || `/no-image.jpeg`}
                loading="lazy"
                width={720}
                height={300}
                src={image || `/no-image.jpeg`}
                alt={`Ảnh gốc ${title}`}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bg="rgba(0, 33, 71, 0.9)"
              />
            </>
          )}

          {/* Nội dung hiển thị trên overlay */}
          <VStack
            spacing={6}
            textAlign="center"
            color="white"
            position="relative"
            zIndex={1}
          >
            <Text
              fontSize="2xl"
              fontWeight="bold"
              textShadow="2px 2px 4px rgba(0,0,0,0.8)"
              lineHeight={1.2}
              dangerouslySetInnerHTML={{ __html: title }}
            />

            {desc && (
              <Text
                fontSize="sm"
                lineHeight="1.2"
                textShadow="1px 1px 2px rgba(0,0,0,0.8)"
                maxW="90%"
                dangerouslySetInnerHTML={{ __html: desc }}
              />
            )}

            <Link href={path ?? "#"}>
              <Button
                bg="white"
                color="#fdc800"
                fontWeight="bold"
                borderRadius="full"
                px={8}
                py={3}
                fontSize="md"
                _hover={{
                  bg: "#fdc800",
                  color: "white",
                  transform: "translateY(-2px)"
                }}
                transition="all 0.3s"
                boxShadow="lg"
              >
                Tìm Hiểu Thêm
              </Button>
            </Link>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};
