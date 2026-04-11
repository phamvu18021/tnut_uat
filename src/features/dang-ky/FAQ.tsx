"use client";

import { MotionTop } from "@/components/MotionTop";
import { HiX } from "react-icons/hi";
import { AiFillCheckCircle } from "react-icons/ai";
import { BiQuestionMark } from "react-icons/bi";
import {
  Box,
  Container,
  Icon,
  SimpleGrid,
  Stack,
  Text
} from "@chakra-ui/react";
import { FaQuestion } from "react-icons/fa";

interface FAQItem {
  question: string;
  answer: string;
  icon: string;
}

interface FAQProps {
  faqData: FAQItem[];
}

const sampleFAQData = [
  {
    question: "Em đang học lớp 12, có đăng ký được không?",
    answer: "Không. Chương trình chỉ tuyển sinh người đã tốt nghiệp THPT.",
    icon: "no"
  },
  {
    question: "Có cần thi đầu vào không?",
    answer: "Không. Chỉ xét tuyển hồ sơ tốt nghiệp THPT hoặc văn bằng trước đó",
    icon: "no"
  },
  {
    question: "Có cần đến trường thi không?",
    answer:
      "Có. Theo quy định hiện hành, học viên vẫn cần đến điểm thi để thi tập trung một số kỳ thi quan trọng. Tuy nhiên, TNUT sẽ tổ chức thi tại các địa điểm linh hoạt trên toàn quốc, giúp học viên thuận tiện di chuyển và sắp xếp thời gian.",
    icon: "yes"
  },
  {
    question: "Lệ phí học như thế nào?",
    answer:
      "Học phí được tính theo số tín chỉ và từng ngành học, với chính sách rõ ràng và linh hoạt. Học viên có thể đóng học phí theo kỳ hoặc theo tín chỉ, thông qua chuyển khoản hoặc cổng thanh toán trực tuyến.",
    icon: "yes"
  },
  {
    question: "Học viên có được cấp bằng như chính quy không?",
    answer:
      "Có. Sau khi hoàn thành chương trình đào tạo từ xa, học viên sẽ được cấp bằng đại học do TNUT cấp, có giá trị pháp lý tương đương hệ chính quy, không ghi hình thức đào tạo trên bằng.",
    icon: "yes"
  },
  {
    question: "Học hệ từ xa có được thi công chức không?",
    answer:
      "Được. Văn bằng đại học từ xa do TNUT cấp đáp ứng điều kiện thi công chức, viên chức theo quy định của pháp luật.",
    icon: "yes"
  }
];

export const FAQ = ({ faqData }: { faqData: any }) => {
  const getIconProps = (iconValue: string) => {
    if (iconValue === "yes") {
      return { icon: AiFillCheckCircle, color: "green.500" };
    }
    return { icon: HiX, color: "red.500" };
  };
  console.log(faqData);

  return (
    <Box bg="white" py={{ base: 4, lg: 8 }}>
      <Container
        maxW="7xl"
        border="1px solid"
        borderColor="gray.200"
        borderRadius="md"
        boxShadow={"2xl"}
      >
        <Stack spacing={10} py={8}>
          <Stack spacing={3} align="center">
            <MotionTop>
              <Text
                fontSize={{ base: "25px", md: "30px", lg: "40px" }}
                color="#cf0c28"
                fontWeight={700}
                textAlign="center"
              >
                {faqData?.Title || "CÂU HỎI THƯỜNG GẶP."}
              </Text>
            </MotionTop>
            <MotionTop>
              <Text
                fontSize={{ base: "14px", md: "16px" }}
                color="gray.600"
                textAlign="center"
              >
                {faqData?.sub_title ||
                  "Cùng Hệ Từ Xa TR. Đại học Kỹ Thuật Công Nghiệp Thái Nguyên Giải Đáp Thắc Mắc."}
              </Text>
            </MotionTop>
          </Stack>

          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={3}>
            {(faqData?.faq || sampleFAQData).map((item: any, index: number) => (
              <Box key={index} position="relative">
                <Box
                  p={{ base: 2, lg: 6 }}
                  h="full"
                  transition="all 0.2s"
                  _hover={{
                    borderColor: "blue.400",
                    boxShadow: "sm"
                  }}
                >
                  <Stack spacing={2}>
                    <Stack direction="row" spacing={4} align="flex-start">
                      <Box
                        w="50px"
                        h="50px"
                        borderRadius="full"
                        bg="#27244d"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        flexShrink={0}
                      >
                        <Icon as={FaQuestion} color="white" fontSize="24px" />
                      </Box>

                      <Text
                        fontWeight={700}
                        fontSize="18px"
                        color="blue.800"
                        lineHeight="1.6"
                        pt={2}
                      >
                        {index + 1}. {item.question}
                      </Text>
                    </Stack>
                    <Stack
                      direction="row"
                      spacing={3}
                      ml={2}
                      align="flex-start"
                    >
                      <Box display="flex" flexShrink={0} mt={1}>
                        <Icon
                          as={getIconProps(item.icon[0]).icon}
                          color={getIconProps(item.icon[0]).color}
                          fontSize="20px"
                        />
                      </Box>
                      <Text
                        fontSize="16px"
                        color="gray.600"
                        lineHeight="1.7"
                        dangerouslySetInnerHTML={{ __html: item.answer }}
                      />
                    </Stack>
                  </Stack>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
};
