"use client";

import { Box, Text, Button } from "@chakra-ui/react";
import { useModal } from "../ModalContext";
import { BtnTheme } from "../BtnTheme";

interface SidebarProps {
  registrationTitle: string;
  registrationDescription: string;
  registrationButtonText: string;
  highlightedJobsHtml: string;
  descriptionHtml: string;
}

export const Sidebar = ({
  registrationTitle,
  registrationDescription,
  registrationButtonText,
  highlightedJobsHtml,
  descriptionHtml
}: SidebarProps) => {
  const { isOpen, onOpen, onClose } = useModal();

  return (
    <Box w="full" height="fit-content">
      {/* Phần 1: Box đăng ký (sticky) */}
      <Box
        bg="blue.600"
        borderRadius="lg"
        p={6}
        mb={6}
        color="white"
        boxShadow="lg"
        pos={{ base: "static", lg: "sticky" }}
        top="90px"
      >
        <Text fontSize="lg" textAlign={"center"} fontWeight={600} mb={3}>
          {registrationTitle}
        </Text>
        <Text fontSize="sm" textAlign={"center"} mb={4} opacity={0.9}>
          {registrationDescription}
        </Text>
        <Box display={"flex"} justifyContent={"center"}>
          <BtnTheme
            size={{ base: "sm", md: "lg" }}
            onClick={() => !isOpen && onOpen && onOpen()}
            w={{ base: "160px", lg: "200px" }}
          >
            {registrationButtonText}
          </BtnTheme>
        </Box>
      </Box>

      {/* Phần 2: Nội dung HTML 1 */}
      <Box mb={6} px={2}>
        <Box
          color="yellow.500"
          dangerouslySetInnerHTML={{ __html: highlightedJobsHtml }}
        />
      </Box>

      {/* Phần 3: Nội dung HTML 2 */}
      <Box px={2}>
        <Box
          dangerouslySetInnerHTML={{ __html: descriptionHtml }}
          fontSize="sm"
          color="gray.700"
        />
      </Box>
    </Box>
  );
};
