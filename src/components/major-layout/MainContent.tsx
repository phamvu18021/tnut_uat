"use client";

import {
  Box,
  Container,
  Text,
  SimpleGrid,
  GridItem,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  List,
  ListItem,
  ListIcon,
  Icon
} from "@chakra-ui/react";
import {
  MdPerson,
  MdCheckCircle,
  MdSchool,
  MdBook,
  MdAccessTime
} from "react-icons/md";
import { Badge } from "../Badge";
import styles from "@/styles/Post.module.css";

interface InfoBoxProps {
  icon: any;
  title: string;
  value: string;
}

const InfoBox = ({ icon, title, value }: InfoBoxProps) => (
  <Box
    bg="white"
    borderRadius="lg"
    p={2}
    border="1px solid"
    borderColor="orange.200"
    minH="80px"
    display="flex"
    flexDirection="row"
    alignItems="center"
    justifyContent="flex-start"
    gap={4}
  >
    <Icon as={icon} boxSize={16} color="orange.500" flexShrink={0} />
    <Box display="flex" flexDirection="column" alignItems="flex-start">
      <Text fontSize="16px" fontWeight={600} mb={2} color="gray.800">
        {title}
      </Text>
      <Text fontSize="md" fontWeight={500} color="gray.600">
        {value}
      </Text>
    </Box>
  </Box>
);

interface MainContentProps {
  introductionText: string;
  param_1: string;
  param_2: string;
  param_3: string;
  sub_title: string;
  value_1: string;
  value_2: string;
  value_3: string;
}

export const MainContent = ({ content }: { content: MainContentProps }) => {
  return (
    <Box>
      <Badge text="THÔNG TIN VÀ CƠ HỘI VIỆC LÀM" />
      <Box mb={8}>
        <Text fontSize="38px" fontWeight={600} my={4} color="gray.800">
          Giới thiệu
        </Text>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap={4} mb={6}>
          <InfoBox
            icon={MdSchool}
            title={content.param_1}
            value={content.value_1}
          />
          <InfoBox
            icon={MdBook}
            title={content.param_2}
            value={content.value_2}
          />
          <InfoBox
            icon={MdAccessTime}
            title={content.param_3}
            value={content.value_3}
          />
        </SimpleGrid>

        <Box
          className={styles["post__main"]}
          dangerouslySetInnerHTML={{ __html: content.introductionText }}
          fontSize="md"
          lineHeight="1.6"
          color="gray.700"
        />
      </Box>
    </Box>
  );
};
