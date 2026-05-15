"use client";

import { MotionRightLeft } from "@/components/MotionLeft";
import { MotionTop } from "@/components/MotionTop";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const CountdownSection = ({
  title,
  sub_title,
  homeContent
}: {
  title?: string;
  sub_title?: string;
  homeContent?: any | null;
}) => {
  const [targetDate, setTargetDate] = useState<any>(
    () =>
      homeContent?.acf?.info_lkg?.time_column?.time_count ||
      "2025-11-16T00:00:00"
  );
  const [fetchedContent, setFetchedContent] = useState<any>(null);

  const cms = homeContent ?? fetchedContent;

  useEffect(() => {
    if (homeContent != null) {
      const t = homeContent?.acf?.info_lkg?.time_column?.time_count;
      if (t) setTargetDate(t);
      return;
    }
    const getTargetDate = async () => {
      try {
        const res = await fetch(`/api/content-page/?type=trang-chu`, {
          next: { revalidate: 3 }
        });
        if (!res.ok) {
          throw new Error(`Posts fetch failed with status: ${res.statusText}`);
        }
        const data = await res.json();
        setFetchedContent(data?.posts[0]);
        setTargetDate(data?.posts[0]?.acf?.info_lkg?.time_column?.time_count);
      } catch (error) {
        console.log(error);
      }
    };
    getTargetDate();
  }, [homeContent]);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const CountdownBox = ({ value, label }: { value: number; label: string }) => (
    <Box
      bg="white"
      borderRadius="8px"
      p={4}
      textAlign="center"
      minW="66px"
      boxShadow="0 2px 6px rgba(0,0,0,0.1)"
    >
      <Text
        fontSize="24px"
        fontWeight="bold"
        color="blue.800"
        lineHeight="1"
        mb={1}
      >
        {value.toString().padStart(2, "0")}
      </Text>
      <Text
        fontSize="13px"
        fontWeight="600"
        color="#1E3A8A"
        textTransform="uppercase"
      >
        {label}
      </Text>
    </Box>
  );

  return (
    <Box bg="white" pb="60px" pt={{ base: "60px", lg: "0px" }}>
      <Container maxW="7xl">
        <Grid
          templateColumns={{ base: "1fr", lg: "2fr 1fr" }}
          gap={8}
          alignItems="center"
        >
          <GridItem>
            <VStack spacing={4} align="start">
              <MotionRightLeft>
                {" "}
                <Button
                  bg="#DC2626"
                  color="white"
                  borderRadius="full"
                  px={7}
                  py={5}
                  fontSize="15px"
                  fontWeight="bold"
                  _hover={{ bg: "#B91C1C" }}
                  transition="all 0.3s ease"
                >
                  <Text as="span" fontWeight="bold">
                    {cms?.acf?.info_lkg?.left_column?.sub_title ||
                      "CHỈ CẦN BẰNG THPT."}
                  </Text>
                </Button>
              </MotionRightLeft>

              <Heading
                as="h2"
                fontSize={{ base: "22px", md: "26px", lg: "30px" }}
                fontWeight="bold"
                color="blue.800"
                lineHeight="1.2"
                fontFamily="sans-serif"
              >
                {title ||
                  "XÉT TUYỂN HỒ SƠ HỆ ĐẠI HỌC TỪ XA NGÀNH KỸ THUẬT XÂY DỰNG."}
              </Heading>

              <Text
                fontSize="15px"
                color="#4B5563"
                fontStyle="italic"
                lineHeight="1.5"
              >
                {sub_title ||
                  `(Khoá học gần nhất có thể ngừng nhận đơn đăng ký trước thời hạn nếu đã đủ chỉ tiêu.)`}
              </Text>
            </VStack>
          </GridItem>

          <GridItem>
            <MotionTop>
              <Box
                bg="blue.800"
                borderRadius="14px"
                p={5}
                ml={{ base: "0", lg: "8" }}
                boxShadow="0 3px 12px rgba(74, 44, 90, 0.18)"
                position="relative"
              >
                <VStack spacing={4} align="center">
                  <VStack>
              <Heading
                as="h3"
                fontSize="28px"
                fontWeight="bold"
                color="#FCD34D"
                textAlign="center"
                lineHeight={1.2}
              >
                {cms?.acf?.info_lkg?.time_column?.title || "LỊCH KHAI GIẢNG"}
              </Heading>

              <Text
                as="p"
                fontSize="18px"
                fontWeight="bold"
                color="#FCD34D"
                textAlign="center"
              >
                {cms?.acf?.info_lkg?.time_column?.text_time || "16/11/2025"}
              </Text>
                  </VStack>

                  <Flex gap={2} flexWrap="wrap" justify="center">
                    <CountdownBox value={timeLeft.days} label="Ngày" />
                    <CountdownBox value={timeLeft.hours} label="Giờ" />
                    <CountdownBox value={timeLeft.minutes} label="Phút" />
                    <CountdownBox value={timeLeft.seconds} label="Giây" />
                  </Flex>
                </VStack>
              </Box>
            </MotionTop>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};
