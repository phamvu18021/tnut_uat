"use client";
import { Badge } from "@/components/Badge";
import { FormWrapper } from "@/components/FormWrapper";
import { MotionTop } from "@/components/MotionTop";

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  GridItem,
  Heading,
  SimpleGrid,
  Stack,
  Text
} from "@chakra-ui/react";
export const Introduce = (introduce: any) => {
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 12 }}
        maxW={"7xl"}
        pb={12}
        pt={4}
        gap={{ base: 8, lg: 32 }}
        margin={"0 auto"}
      >
        <GridItem colSpan={{ base: 1, lg: 4 }}>
          <Box pt={{ base: "0px", lg: "24px" }}>
            <FormWrapper />
          </Box>
        </GridItem>

        <GridItem colSpan={{ base: 1, lg: 8 }}>
          <Stack bg="White" height="full">
            <MotionTop>
              <Badge
                text={
                  introduce?.introduce?.sub_title ||
                  "TRƯỜNG ĐẠI HỌC KỸ THUẬT CÔNG NGHIỆP THÁI NGUYÊN"
                }
              />
            </MotionTop>

            <MotionTop>
              <Heading
                as="h2"
                fontSize={{ base: "24px", md: "24px", lg: "40px" }}
                color="blue.900"
                fontWeight={600}
                mt={4}
              >
                {introduce?.introduce?.section_title || "Thông tin tuyển sinh"}
              </Heading>
            </MotionTop>

            <MotionTop>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color="gray.700"
                py={4}
              >
                {introduce?.introduce?.desc || "Nội dung thông tin tuyển sinh"}
              </Text>
            </MotionTop>

            <Accordion>
              <AccordionItem
                border="none"
                borderBottom="1px solid"
                borderColor="gray.200"
              >
                <AccordionButton
                  px={{ base: 0, md: 2, lg: 0 }}
                  py={{ base: 3, md: 4, lg: 4 }}
                  _hover={{ color: "orange.600" }}
                  _expanded={{ color: "orange.600" }}
                >
                  <Box
                    flex="1"
                    textAlign="left"
                    fontSize={{ base: "14px", md: "16px", lg: "18px" }}
                    fontWeight={500}
                    pr={{ base: 2, md: 4, lg: 0 }}
                  >
                    {introduce?.introduce?.title_1 || "Đối tượng tuyển sinh"}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel
                  pb={{ base: 3, md: 4, lg: 4 }}
                  px={{ base: 0, md: 2, lg: 0 }}
                >
                  <Text
                    fontSize={{ base: "13px", md: "14px", lg: "16px" }}
                    color="gray.700"
                    lineHeight={{ base: "1.5", md: "1.6", lg: "1.7" }}
                    dangerouslySetInnerHTML={{
                      __html:
                        introduce?.introduce?.content_1 ||
                        "Nội dung về đối tượng tuyển sinh sẽ được cập nhật sau."
                    }}
                  />
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem
                border="none"
                borderBottom="1px solid"
                borderColor="gray.200"
              >
                <AccordionButton
                  px={{ base: 0, md: 2, lg: 0 }}
                  py={{ base: 3, md: 4, lg: 4 }}
                  _hover={{ color: "orange.600" }}
                  _expanded={{ color: "orange.600" }}
                >
                  <Box
                    flex="1"
                    textAlign="left"
                    fontSize={{ base: "14px", md: "16px", lg: "18px" }}
                    fontWeight={500}
                    pr={{ base: 2, md: 4, lg: 0 }}
                  >
                    {introduce?.introduce?.title_2 || "Hình thức tuyển sinh"}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel
                  pb={{ base: 3, md: 4, lg: 4 }}
                  px={{ base: 0, md: 2, lg: 0 }}
                >
                  <Text
                    fontSize={{ base: "13px", md: "14px", lg: "16px" }}
                    color="gray.700"
                    lineHeight={{ base: "1.5", md: "1.6", lg: "1.7" }}
                    dangerouslySetInnerHTML={{
                      __html:
                        introduce?.introduce?.content_2 ||
                        "Nội dung về hình thức tuyển sinh sẽ được cập nhật sau."
                    }}
                  />
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem
                border="none"
                borderBottom="1px solid"
                borderColor="gray.200"
              >
                <AccordionButton
                  px={{ base: 0, md: 2, lg: 0 }}
                  py={{ base: 3, md: 4, lg: 4 }}
                  _hover={{ color: "orange.600" }}
                  _expanded={{ color: "orange.600" }}
                >
                  <Box
                    flex="1"
                    textAlign="left"
                    fontSize={{ base: "14px", md: "16px", lg: "18px" }}
                    fontWeight={500}
                    pr={{ base: 2, md: 4, lg: 0 }}
                  >
                    {introduce?.introduce?.title_3 || "Yêu cầu tuyển sinh"}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel
                  pb={{ base: 3, md: 4, lg: 4 }}
                  px={{ base: 0, md: 2, lg: 0 }}
                >
                  <Text
                    fontSize={{ base: "13px", md: "14px", lg: "16px" }}
                    color="gray.700"
                    lineHeight={{ base: "1.5", md: "1.6", lg: "1.7" }}
                    dangerouslySetInnerHTML={{
                      __html:
                        introduce?.introduce?.content_3 ||
                        "Nội dung về yêu cầu tuyển sinh sẽ được cập nhật sau."
                    }}
                  />
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem
                border="none"
                borderBottom="1px solid"
                borderColor="gray.200"
              >
                <AccordionButton
                  px={{ base: 0, md: 2, lg: 0 }}
                  py={{ base: 3, md: 4, lg: 4 }}
                  _hover={{ color: "orange.600" }}
                  _expanded={{ color: "orange.600" }}
                >
                  <Box
                    flex="1"
                    textAlign="left"
                    fontSize={{ base: "14px", md: "16px", lg: "18px" }}
                    fontWeight={500}
                    pr={{ base: 2, md: 4, lg: 0 }}
                  >
                    {introduce?.introduce?.title_4 || "Nơi tiếp nhận hồ sơ"}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel
                  pb={{ base: 3, md: 4, lg: 4 }}
                  px={{ base: 0, md: 2, lg: 0 }}
                >
                  <Text
                    fontSize={{ base: "13px", md: "14px", lg: "16px" }}
                    color="gray.700"
                    lineHeight={{ base: "1.5", md: "1.6", lg: "1.7" }}
                    dangerouslySetInnerHTML={{
                      __html:
                        introduce?.introduce?.content_4 ||
                        "Nội dung về nơi tiếp nhận hồ sơ sẽ được cập nhật sau."
                    }}
                  />
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem
                border="none"
                borderBottom="1px solid"
                borderColor="gray.200"
              >
                <AccordionButton
                  px={{ base: 0, md: 2, lg: 0 }}
                  py={{ base: 3, md: 4, lg: 4 }}
                  _hover={{ color: "orange.600" }}
                  _expanded={{ color: "orange.600" }}
                >
                  <Box
                    flex="1"
                    textAlign="left"
                    fontSize={{ base: "14px", md: "16px", lg: "18px" }}
                    fontWeight={500}
                    pr={{ base: 2, md: 4, lg: 0 }}
                  >
                    {introduce?.introduce?.title_5 || "Văn bằng"}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel
                  pb={{ base: 3, md: 4, lg: 4 }}
                  px={{ base: 0, md: 2, lg: 0 }}
                >
                  <Text
                    fontSize={{ base: "13px", md: "14px", lg: "16px" }}
                    color="gray.700"
                    lineHeight={{ base: "1.5", md: "1.6", lg: "1.7" }}
                    dangerouslySetInnerHTML={{
                      __html:
                        introduce?.introduce?.content_5 ||
                        "Nội dung về văn bằng sẽ được cập nhật sau."
                    }}
                  />
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Stack>
        </GridItem>
      </SimpleGrid>
    </Container>
  );
};
