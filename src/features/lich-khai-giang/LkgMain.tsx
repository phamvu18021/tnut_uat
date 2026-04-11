"use client";
import {
  Box,
  Container,
  Text,
  SimpleGrid,
  VStack,
  Flex
} from "@chakra-ui/react";
import { CountdownSection } from "./CountdownSection";
import { BtnTheme } from "@/components/BtnTheme";
import { useModal } from "@/components/ModalContext";

export const LkgMain = ({
  title,
  title_1,
  title_2,
  time_count_1,
  time_count_2,
  lichkg1,
  lichkg2
}: {
  title: string;
  title_1: string;
  title_2: string;
  time_count_1: string;
  time_count_2: string;
  lichkg1: string;
  lichkg2: string;
}) => {
  const { isOpen, onOpen, onClose } = useModal();

  return (
    <>
      <Box bg="white" py={{ base: 8, lg: 12 }}>
        <Container maxW="7xl">
          <VStack spacing={8}>
            <VStack spacing={1}>
              <Text
                fontSize={{ base: "25px", md: "30px", lg: "40px" }}
                color="blue.800"
                fontWeight={600}
                textAlign="center"
              >
                {title}
              </Text>
              <Text
                fontSize={{ base: "16px", md: "18px", lg: "18px" }}
                color="red.600"
                textAlign="center"
                fontWeight={500}
              >
                ( Tuyển sinh từ bằng THPT hoặc tương đương trở lên! )
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6} w="full">
              <CountdownSection
                targetDate={time_count_1 || "2025-12-30T08:00:00"}
                title={title_1 || "Cơ sở Hà Nội"}
                location={lichkg1}
              />
              <CountdownSection
                targetDate={time_count_2 || "2025-12-30T08:00:00"}
                title={title_2 || "Cơ sở TP. Hồ Chí Minh"}
                location={lichkg2}
              />
            </SimpleGrid>
          </VStack>
          <Flex mt={12} justify="center">
            <BtnTheme
              size={{ base: "sm", md: "lg" }}
              onClick={() => !isOpen && onOpen && onOpen()}
              w={{ base: "220px", lg: "260px" }}
            >
              NỘP HỒ SƠ NGAY
            </BtnTheme>
          </Flex>
        </Container>
      </Box>
    </>
  );
};
