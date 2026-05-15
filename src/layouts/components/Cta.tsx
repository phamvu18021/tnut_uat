import { BtnMes, BtnPhone, BtnEmail } from "@/components/BtnCTA";
import { Box, Flex, VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
export const CTA = ({ data }: { data: any }) => {
  const page_content = data;

  return (
    <Box
      pos={"fixed"}
      top={{ lg: "50%", base: "80%" }}
      right={"0"}
      className="CTA"
      zIndex={5}
    >
      <Flex
        key={"e1"}
        height={"160px"}
        width={"200px"}
        alignItems={"center"}
        top={"-160%"}
        left={"-105%"}
        position={"absolute"}
      >
        <BtnEmail label={page_content?.acf?.email_title} />
      </Flex>

      <VStack gap={0} alignItems={"flex-end"}>
        <BtnMes
          label={page_content?.acf?.messenger}
          link={page_content?.acf?.link_messenger}
        />
        <BtnPhone
          label={page_content?.acf?.phone}
          link={page_content?.acf?.link_phone}
        />
      </VStack>
    </Box>
  );
};
