"use client";

import { Box, SimpleGrid, Image, GridItem } from "@chakra-ui/react";
import { FormWrapper } from "@/components/FormWrapper";
import { MotionRight } from "@/components/MotionRight";
import { MotionRightLeft } from "@/components/MotionLeft";

export interface RegistrationFormSectionProps {
  backgroundImage?: string;
  leftImage: string;
}

export const RegistrationFormSection = ({
  backgroundImage,
  leftImage
}: RegistrationFormSectionProps) => {
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
      <Box maxW="1200px" margin="0 auto">
        <SimpleGrid
          columns={{ base: 1, lg: 3 }}
          spacing={{ base: 6, md: 8, lg: 10 }}
          alignItems="center"
        >
          <GridItem
            colSpan={{ base: 1, md: 2 }}
            display={{ base: "none", lg: "block" }}
            position="relative"
          >
            <Image
              src={leftImage}
              alt="Students"
              width="100%"
              height="auto"
              objectFit="contain"
              borderRadius="lg"
            />
          </GridItem>

          <MotionRight useScrollTrigger={true}>
            <Box position="relative" bg={"white"} borderRadius={"2x"} zIndex={1}>
              <FormWrapper />
            </Box>
          </MotionRight>
        </SimpleGrid>
      </Box>
    </Box>
  );
};
