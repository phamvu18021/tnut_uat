"use client";

import { Badge } from "@/components/Badge";
import { BtnTheme } from "@/components/BtnTheme";
import { useModal } from "@/components/ModalContext";
import { MotionRightLeft } from "@/components/MotionLeft";
import { MotionTop } from "@/components/MotionTop";
import { cleanText } from "@/lib/sanitize-client";

import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  VStack
} from "@chakra-ui/react";

export const Programs = ({ cms }: { cms: any }) => {
  const { isOpen, onOpen, onClose } = useModal();
  const programs = [
    {
      title: cms?.obj_1?.title || "Chương Trình Cử Nhân",
      description:
        cms?.obj_1?.desc || "Tốt nghiệp THPT tính đến thời điểm dự tuyển.",
      image: cms?.obj_1?.image || "/introAbout.jpg"
    },
    {
      title: cms?.obj_2?.title || "Trung Cấp - Cao Đẳng Lên Đại Học",
      description:
        cms?.obj_2?.desc ||
        "Từ Trung cấp lên Đại học Từ Cao đẳng lên Đại học Từ Cao đẳng nghề lên Đại học Cùng ngành, Trái ngành",
      image: cms?.obj_2?.image || "/introAbout.jpg"
    },
    {
      title: cms?.obj_3?.title || "Cho Người Đi Làm",
      description:
        cms?.obj_3?.desc ||
        "Đang làm việc trong các cơ quan, tổ chức nhà nước hoặc tư nhân Đã có bằng THPT trở lên Có thể vừa học vừa làm",
      image: cms?.obj_3?.image || "/introAbout.jpg"
    },
    {
      title: cms?.obj_4?.title || "Văn Bằng Thứ 2",
      description: cms?.obj_4?.desc || "Đã có ít nhất 1 bằng Đại học",
      image: cms?.obj_4?.image || "/introAbout.jpg"
    }
  ];

  return (
    <Box bg={"blue.900"} py={8}>
      <Container maxW={"7xl"}>
        <Flex
          maxW={"7xl"}
          direction={{ base: "column", lg: "row" }}
          align="center"
          justify="space-between"
          mb={8}
          gap={{ base: 8, lg: 6 }}
        >
          <VStack align="start" spacing={2} flex="1">
            <MotionRightLeft>
              <Box pt={8}>
                <Badge text={cms?.sub_title || "CHƯƠNG TRÌNH DÀNH CHO AI ?."} />
              </Box>
            </MotionRightLeft>
            <Text
              as="h2"
              fontWeight={700}
              fontSize={{ base: "32px", lg: "44px" }}
              color="white"
              textAlign={{ base: "center", lg: "left" }}
              lineHeight="shorter"
              dangerouslySetInnerHTML={{
                __html: cleanText(
                  cms?.title || "Chương trình đào tạo phù hợp cho tất cả"
                )
              }}
            />
          </VStack>

          <VStack
            align="start"
            justifyContent={"start"}
            spacing={4}
            flex="1"
            pl={{ lg: 6 }}
          >
            <Text
              as="p"
              color="white"
              fontSize="16px"
              lineHeight="tall"
              textShadow="0 1px 2px rgba(0,0,0,0.45)"
              dangerouslySetInnerHTML={{
                __html: cleanText(
                  cms?.desc ||
                  "Dù bạn mới tốt nghiệp THPT, đã tốt nghiệp trung cấp, cao đẳng hay đang đi làm và muốn lấy bằng đại học thì đây chắc chắn là nơi dành cho bạn."
                )
              }}
            />

            <BtnTheme
              size={{ base: "sm", md: "lg" }}
              onClick={() => !isOpen && onOpen && onOpen()}
              w={{ base: "160px", lg: "200px" }}
            >
              Đăng Ký Ngay
            </BtnTheme>
          </VStack>
        </Flex>
      </Container>
      <Container maxW="9xl">
        <MotionTop>
          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)"
            }}
            gap={6}
          >
            {programs.map((program, index) => (
              <Box key={index}>
                <MotionTop>
                  <Box
                    position="relative"
                    borderRadius="lg"
                    overflow="hidden"
                    bg="gray.200"
                    minH="400px"
                    cursor="pointer"
                    role="group"
                  >
                    <Image
                      src={program.image}
                      alt={program.title}
                      w="full"
                      h="full"
                      objectFit="cover"
                    />

                    <Box
                      position="absolute"
                      bottom={0}
                      left={0}
                      right={0}
                      bg="rgba(200, 70, 15, 0.92)"
                      px={8}
                      pt={6}
                      pb={10}
                      h="65%"
                      transform="translateY(0)"
                      transition="height 0.3s ease-in-out"
                      _groupHover={{
                        h: "100%"
                      }}
                      display="flex"
                      flexDirection="column"
                      justifyContent="flex-end"
                    >
                      <Heading
                        as="h3"
                        fontSize="26px"
                        lineHeight={1.2}
                        color="white"
                        mb={2}
                        fontWeight="600"
                        textShadow="0 1px 2px rgba(0,0,0,0.35)"
                      >
                        {program.title}
                      </Heading>

                      <Text
                        as="p"
                        color="white"
                        fontSize="sm"
                        lineHeight="short"
                        textShadow="0 1px 1px rgba(0,0,0,0.35)"
                      >
                        {program.description}
                      </Text>
                    </Box>
                  </Box>
                </MotionTop>
              </Box>
            ))}
          </Grid>
        </MotionTop>
      </Container>
    </Box>
  );
};
