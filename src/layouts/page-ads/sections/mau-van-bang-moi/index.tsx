"use client";

import {
  Box,
  Heading,
  Image,
  Container,
  Grid,
  GridItem,
  Text,
  Flex,
  Divider
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { MotionTop } from "@/components/MotionTop";
import { MotionRight } from "@/components/MotionRight";
import { BtnTheme } from "@/components/BtnTheme";
import { useModal } from "@/components/ModalContext";
export interface ContentItem {
  title: string;
  Desc: string;
}

export interface MauVanBangMoiProps {
  title?: string;
  sub_title?: string;
  description?: string;
  highlight_text?: string;
  content?: ContentItem[];
  image: string;
  backgroundImage?: string;
  videoUrl?: string;
  bottomImage?: string;
}

export const MauVanBangMoiSection = ({
  title = "MẪU VĂN BẰNG MỚI",
  sub_title = "BẰNG CẤP GIÁ TRỊ TƯƠNG ĐƯƠNG VỚI BẰNG ĐÀO TẠO CHÍNH QUY",
  description = "Từ ngày 01/03/2020, bằng tốt nghiệp đại học sẽ không còn phân biệt hình thức đào tạo như chính quy, tại chức, từ xa...\nTheo Thông tư 27/2019/TT-BGDĐT, trên văn bằng sẽ vẫn ghi các nội dung cũ nhưng không ghi thông tin về hình thức đào tạo",
  highlight_text,
  content,
  image,
  backgroundImage,
  videoUrl,
  bottomImage
}: MauVanBangMoiProps) => {
  const { isOpen, onOpen, onClose } = useModal();

  return (
    <Box
      width="100%"
      position="relative"
      bg={
        backgroundImage
          ? "transparent"
          : "linear-gradient(180deg, #E0F2FE 0%, #BAE6FD 100%)"
      }
      backgroundImage={backgroundImage ? `url(${backgroundImage})` : undefined}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      py={{ base: 8, md: 12, lg: 16 }}
      px={{ base: 4, md: 6, lg: 8 }}
    >
      <Box position="relative" width="100%">
        {image && (
          <Box
            position="absolute"
            right="0"
            top="0"
            bottom="0"
            width="auto"
            height="100%"
            zIndex={0}
            display={{ base: "none", lg: "block" }}
          >
            <Image
              src={image}
              alt=""
              height="100%"
              width="auto"
              objectFit="cover"
              objectPosition="right"
            />
          </Box>
        )}

        <Container maxW="1200px" position="relative" zIndex={1}>
          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(7, 1fr)"
            }}
            gap={{ base: 6, md: 8 }}
            alignItems="center"
          >
            <GridItem colSpan={{ base: 1, md: 4 }} order={{ base: 1, md: 1 }}>
              <MotionTop useScrollTrigger={true}>
                <Box>
                  <Heading
                    as="h2"
                    fontSize={{ base: "28px", md: "32px", lg: "40px" }}
                    fontWeight="bold"
                    color="#007ECA"
                    lineHeight="1.4"
                  >
                    {title}
                  </Heading>
                  <Divider
                    mb={4}
                    color={"#007eca"}
                    borderColor={"#007eca"}
                    borderWidth={"1px"}
                    w={"140px"}
                    orientation="horizontal"
                  />
                  <Heading
                    as="h3"
                    fontSize={{ base: "22px", md: "26px", lg: "30px" }}
                    fontWeight="bold"
                    color="#FF0000"
                    mb={4}
                    lineHeight="1.4"
                  >
                    {sub_title}
                  </Heading>

                  {description && (
                    <Box
                      fontSize={{ base: "14px", md: "15px", lg: "16px" }}
                      color="#000000"
                      mb={6}
                      lineHeight="1.6"
                      whiteSpace="pre-line"
                      dangerouslySetInnerHTML={{ __html: description }}
                    />
                  )}

                  {highlight_text && (
                    <Text
                      fontSize={{ base: "18px", md: "20px", lg: "22px" }}
                      fontWeight="bold"
                      color="#FF0000"
                      mb={6}
                      lineHeight="1.6"
                    >
                      {highlight_text}
                    </Text>
                  )}

                  {content && content.length > 0 && (
                    <Box>
                      {content.map((item, index) => (
                        <Box key={index} mb={4}>
                          <Flex alignItems="flex-start" gap={3}>
                            <Box
                              as={FaCheckCircle}
                              color="#007ECA"
                              fontSize={{
                                base: "20px",
                                md: "22px",
                                lg: "24px"
                              }}
                              mt={1}
                              flexShrink={0}
                            />
                            <Box flex={1}>
                              <Text
                                fontSize={{
                                  base: "15px",
                                  md: "16px",
                                  lg: "17px"
                                }}
                                fontWeight="bold"
                                color="#000000"
                                mb={2}
                                lineHeight="1.5"
                              >
                                {item.title}
                              </Text>
                              <Text
                                fontSize={{
                                  base: "14px",
                                  md: "15px",
                                  lg: "16px"
                                }}
                                color="#000000"
                                lineHeight="1.6"
                              >
                                {item.Desc}
                              </Text>
                            </Box>
                          </Flex>
                        </Box>
                      ))}
                    </Box>
                  )}
                </Box>
              </MotionTop>
            </GridItem>

            <GridItem colSpan={{ base: 1, md: 3 }} order={{ base: 1, md: 3 }}>
              <MotionRight useScrollTrigger={true}>
                <Box
                  position="relative"
                  width="100%"
                  height="100%"
                  minH={{ base: "200px", md: "400px", lg: "500px" }}
                  display={{ base: "block", lg: "none" }}
                >
                  <Image
                    src={image}
                    alt={title || "Mẫu văn bằng mới"}
                    width="100%"
                    height="100%"
                    objectFit="contain"
                    borderRadius="lg"
                  />
                </Box>
              </MotionRight>
            </GridItem>
          </Grid>
        </Container>
      </Box>

      {(videoUrl || bottomImage) && (
        <Container
          maxW="1200px"
          position="relative"
          zIndex={1}
          mt={{ base: 8, md: 12 }}
        >
          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)"
            }}
            gap={{ base: 6, md: 8 }}
            alignItems="start"
          >
            {videoUrl && (
              <GridItem>
                <Box
                  position="relative"
                  width="100%"
                  height="100%"
                  minH={{ base: "250px", md: "250px", lg: "410px" }}
                  paddingBottom={{ base: "56.25%", md: "56.25%" }}
                  overflow="hidden"
                  borderRadius="lg"
                  bg="gray.100"
                  border={"8px solid #31b3eb"}
                >
                  <Box
                    as="iframe"
                    position="absolute"
                    top="0"
                    left="0"
                    width="100%"
                    height="100%"
                    border="none"
                    src={videoUrl}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="YouTube video player"
                  />
                </Box>
              </GridItem>
            )}

            {bottomImage && (
              <GridItem order={{ base: videoUrl ? 2 : 1, md: 2 }}>
                <Box
                  position="relative"
                  width="100%"
                  height="100%"
                  minH={{ base: "250px", md: "250px", lg: "400px" }}
                >
                  <Image
                    src={bottomImage}
                    alt="Diploma"
                    width="100%"
                    height="100%"
                    objectFit="contain"
                    borderRadius="lg"
                  />
                </Box>
              </GridItem>
            )}
          </Grid>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignContent={"center"}
            mt={{ base: 4, lg: 8 }}
          >
            {" "}
            <BtnTheme
              size={{ base: "sm", md: "lg" }}
              onClick={() => !isOpen && onOpen && onOpen()}
              w={{ base: "160px", lg: "200px" }}
            >
              Đăng Ký Ngay
            </BtnTheme>
          </Box>
        </Container>
      )}
    </Box>
  );
};
