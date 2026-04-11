"use client";

import {
  Box,
  Container,
  Text,
  SimpleGrid,
  Button,
  Image,
  Flex,
  VStack,
  GridItem,
  Divider
} from "@chakra-ui/react";
import { useModal } from "../ModalContext";
import { BtnTheme } from "../BtnTheme";
import { cleanText } from "@/lib/sanitizeHtml";

interface ProgramValuesSectionProps {
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
}

export const ProgramValuesSection = ({
  content
}: {
  content: ProgramValuesSectionProps;
}) => {
  const { isOpen, onOpen, onClose } = useModal();

  return (
    <Box minH="100vh" bg="white">
      <Container maxW="1480px" py={{ base: 12, md: 20 }}>
        {/* Top Row - Benefits 01 & 02 */}
        <SimpleGrid
          columns={{ base: 1, md: 7 }}
          gap={{ base: 8, md: 16 }}
          alignItems="flex-start"
          mb={16}
        >
          {/* Left Column - Image */}
          <GridItem colSpan={{ base: 1, md: 3 }}>
            <Box>
              <Box overflow="hidden" boxShadow="2xl">
                <Image
                  src={content.image_1 || "/sep.webp"}
                  alt="TNUT Graduates"
                  w="full"
                  h="auto"
                  objectFit="cover"
                />
              </Box>
            </Box>
          </GridItem>

          {/* Right Column - Content */}
          <GridItem colSpan={{ base: 1, md: 4 }}>
            <VStack spacing={8} align="stretch">
              {/* Benefit 01 */}
              <Box>
                <Text
                  fontSize={{ base: "36px", md: "48px" }}
                  fontWeight={700}
                  color="purple.900"
                  lineHeight={{ base: 1.2, lg: 1.6 }}
                >
                  01.{" "}
                  <Text
                    as="span"
                    fontSize={{ base: "18px", md: "20px" }}
                    fontWeight={500}
                  >
                    {content.title_1 || "BẰNG CỬ NHÂN ĐƯỢC BỘ GD&ĐT CÔNG NHẬN"}
                  </Text>
                </Text>
                <Divider borderColor="gray.500" mb={3} />
                <Box
                  dangerouslySetInnerHTML={{
                    __html:
                      content.content_1 ||
                      '<p>Tốt nghiệp Hệ từ xa sinh viên được nhận bằng Đại học danh giá do trường Đại học Kỹ thuật Công nghiệp (TNUT) cấp, được Bộ GD công nhận, sử dụng để thi công chức nhà nước, tăng bậc lương, học lên các cấp học cao hơn. <span style="color: #ff6600;"><strong>Đặc biệt: Trên văn bằng không ghi hình thức đào tạo tương đương chương trình Văn bằng 2, Liên thông,...</strong></span></p>'
                  }}
                  fontSize={{ base: "14px", md: "16px" }}
                  lineHeight="relaxed"
                />
              </Box>

              {/* Benefit 02 */}
              <Box>
                <Text
                  fontSize={{ base: "36px", md: "48px" }}
                  fontWeight={700}
                  color="purple.900"
                  lineHeight={{ base: 1.2, lg: 1.6 }}
                >
                  02.{" "}
                  <Text
                    as="span"
                    fontSize={{ base: "18px", md: "20px" }}
                    fontWeight={500}
                    textAlign={"center"}
                  >
                    {content.title_2 ||
                      "CHƯƠNG TRÌNH ĐÀO TẠO CỦA TNUT E-LEARNING"}
                  </Text>
                </Text>
                <Divider borderColor="gray.500" mb={3} />
                <Box
                  dangerouslySetInnerHTML={{
                    __html:
                      content.content_2 ||
                      '<p><span style="color: #ff0000;">Chương trình đào tạo bao gồm các môn học cơ bản tương tự các ngành khác trên thị trường và bổ sung thêm khối kiến thức Kỹ thuật, Công nghệ. Với chuyên môn này chính là lợi thế của sinh viên Hệ từ xa TNUT E-learning phù hợp với cách doanh nghiệp lĩnh vực công nghệ nước ngoài. Các kiến thức cơ bản đều được đào tạo đầy đủ.</span></p>'
                  }}
                  fontSize={{ base: "14px", md: "16px" }}
                  lineHeight="relaxed"
                />
              </Box>
            </VStack>
          </GridItem>
        </SimpleGrid>

        {/* Main Heading */}
        <Box mb={16}>
          <Text
            fontSize={{ base: "24px", md: "40px" }}
            fontWeight={700}
            textAlign="center"
            color="purple.900"
            lineHeight="tight"
            dangerouslySetInnerHTML={{
              __html: cleanText(
                content.section_title ||
                  "GIÁ TRỊ NHẬN ĐƯỢC TỪ CHƯƠNG TRÌNH ĐÀO TẠO HỆ TỪ XA"
              )
            }}
          />
        </Box>

        {/* Bottom Row - Benefits 03 & 04 */}
        <SimpleGrid
          columns={{ base: 1, md: 7 }}
          gap={{ base: 8, md: 16 }}
          alignItems="center"
          mb={12}
        >
          {/* Left Column - Content */}
          <GridItem colSpan={{ base: 1, md: 4 }}>
            <VStack spacing={8} align="stretch">
              {/* Benefit 03 */}
              <Box>
                <Text
                  fontSize={{ base: "36px", md: "48px" }}
                  fontWeight={700}
                  lineHeight={{ base: 1.2, lg: 1.6 }}
                  color="purple.900"
                >
                  03.{" "}
                  <Text
                    as="span"
                    fontSize={{ base: "18px", md: "20px" }}
                    fontWeight={500}
                  >
                    {content.title_3 ||
                      "CƠ HỘI THỰC HÀNH THỰC TẾ TẠI NƠI LÀM VIỆC"}
                  </Text>
                </Text>
                <Divider borderColor="gray.500" mb={3} />
                <Box
                  dangerouslySetInnerHTML={{
                    __html:
                      content.content_3 ||
                      "<p>Một số sinh viên hệ từ xa đã có kinh nghiệm làm việc tại các doanh nghiệp về lĩnh vực Công Nghệ. Đây là lợi thế lớn vì họ có thể kết hợp giữa học và làm, vừa bổ sung kiến thức chuyên môn, vừa tích lũy kinh nghiệm thực tế. Có thể sử dụng chuyên môn hệ từ xa vào công việc tại công ty</p>"
                  }}
                  fontSize={{ base: "14px", md: "16px" }}
                  lineHeight="relaxed"
                />
              </Box>

              {/* Benefit 04 */}
              <Box>
                <Text
                  fontSize={{ base: "24px", md: "48px" }}
                  lineHeight={{ base: 1.2, lg: 1.6 }}
                  fontWeight={700}
                  color="purple.900"
                >
                  04.{" "}
                  <Text
                    as="span"
                    fontSize={{ base: "16px", md: "20px" }}
                    fontWeight={500}
                  >
                    {content.title_4}
                  </Text>
                </Text>
                <Divider borderColor="gray.500" mb={3} />
                <Box
                  dangerouslySetInnerHTML={{ __html: content.content_4 || "" }}
                  fontSize={{ base: "14px", md: "16px" }}
                  lineHeight="relaxed"
                />
              </Box>
            </VStack>
          </GridItem>

          {/* Right Column - Image */}
          <GridItem colSpan={{ base: 1, md: 3 }}>
            <Box>
              <Box overflow="hidden" boxShadow="2xl">
                <Image
                  src={content.image_2}
                  alt="TNUT Student"
                  w="full"
                  h="auto"
                  objectFit="cover"
                />
              </Box>
            </Box>
          </GridItem>
        </SimpleGrid>

        {/* CTA Button */}
        <Flex justify="center">
          <BtnTheme
            size={{ base: "sm", md: "lg" }}
            onClick={() => !isOpen && onOpen && onOpen()}
            w={{ base: "220px", lg: "260px" }}
          >
            NHẬN TƯ VẤN MIỄN PHÍ
          </BtnTheme>
        </Flex>
      </Container>
    </Box>
  );
};
