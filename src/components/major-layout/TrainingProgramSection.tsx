"use client";

import {
  Box,
  Container,
  Text,
  List,
  ListItem,
  ListIcon,
  SimpleGrid,
  GridItem
} from "@chakra-ui/react";
import { MdPerson } from "react-icons/md";
import { FormWrapper } from "../FormWrapper";

interface TrainingProgramSectionProps {
  title: string;
  desc: string;
  image: string;
  form_text_1: string;
  form_text_2: string;
  eligibilityList: { text: string }[];
}

export const TrainingProgramSection = ({
  trainning
}: {
  trainning: TrainingProgramSectionProps;
}) => {
  return (
    <Box
      py={12}
      mt={{ base: 0, lg: 32 }}
      position="relative"
      bgImage={trainning?.image || "/TNUT-train.jpg"}
      bgAttachment="fixed"
      bgPosition="center center"
      bgRepeat="no-repeat"
      bgSize="cover"
    // transition="background 0.3s, border-radius 0.3s, opacity 0.3s"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="rgba(42, 67, 101, 0.8)"
        zIndex={1}
      />

      <Container maxW="7xl" position="relative" zIndex={2}>
        <SimpleGrid columns={{ base: 1, lg: 3 }} gap={8}>
          <GridItem colSpan={{ base: 1, lg: 2 }}>
            <Text
              fontSize={{ base: "28px", lg: "38px" }}
              fontWeight={600}
              mb={4}
              color="white"
            >
              {trainning?.title || "Chương trình đào tạo"}
            </Text>

            <Box
              color="white"
              dangerouslySetInnerHTML={{
                __html: trainning?.desc || "trainning.trainingProgramText"
              }}
              fontSize="16px"
              lineHeight="1.6"
              mb={6}
            />

            <List spacing={3}>
              {trainning?.eligibilityList?.map((item, index) => (
                <ListItem key={index} display="flex" alignItems="center">
                  <ListIcon as={MdPerson} color="orange.500" />
                  <Text fontSize="16px" color="white">
                    {item.text}
                  </Text>
                </ListItem>
              ))}
            </List>
          </GridItem>

          <GridItem colSpan={{ base: 1, lg: 1 }}>
            <Box mt={{ base: 4, lg: -32 }} bg={"white"} rounded={"md"}>
              {/* Placeholder cho form - có thể thay thế bằng form thực tế */}
              <FormWrapper />
            </Box>
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
};