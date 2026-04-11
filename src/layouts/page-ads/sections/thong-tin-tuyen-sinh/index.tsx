"use client";

import {
  Box,
  Heading,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  SimpleGrid,
  Image,
  List,
  ListItem,
  Divider
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { useMemo } from "react";
import { MotionTop } from "@/components/MotionTop";
import { BtnTheme } from "@/components/BtnTheme";
import { useModal } from "@/components/ModalContext";
export interface TabContent {
  title: string;
  content_main?: string;
  items?: string[];
  image?: string;
}

export interface ThongTinTuyenSinhProps {
  title: string;
  backgroundImage?: string;
  tabs: {
    id?: string;
    label: string;
    content: TabContent;
  }[];
  graduationBenefits: {
    title: string;
    content?: Array<{ text: string }>;
    items?: string[];
    image: string;
  };
  defaultActiveTab?: number | string;
}

const processHtmlWithIcons = (html: string): string => {
  if (!html) return "";

  const iconImg =
    '<img src="/iconcheck.svg" alt="" style="display: inline-block; vertical-align: middle; margin-right: 8px; flex-shrink: 0; margin-top: 2px; width: 18px; height: 18px;" />';

  return html.replace(/<li([^>]*)>/gi, (match, attributes) => {
    const hasStyle = /style\s*=/i.test(attributes);
    if (hasStyle) {
      return (
        match.replace(
          /style\s*=\s*["']([^"']*)["']/i,
          (styleMatch, existingStyle) => {
            const newStyle = `${existingStyle}; display: flex; align-items: flex-start;`;
            return `style="${newStyle}"`;
          }
        ) + iconImg
      );
    } else {
      return `<li${attributes} style="display: flex; align-items: flex-start;">${iconImg}`;
    }
  });
};

export const ThongTinTuyenSinhSection = ({
  title,
  backgroundImage,
  tabs,
  graduationBenefits,
  defaultActiveTab = 0
}: ThongTinTuyenSinhProps) => {
  const processedTabs = useMemo(() => {
    return tabs.map((tab, index) => ({
      ...tab,
      id: tab.id || `tab-${index}`,
      processedContent: tab.content.content_main
        ? processHtmlWithIcons(tab.content.content_main)
        : null
    }));
  }, [tabs]);

  const defaultTabIndex = useMemo(() => {
    if (typeof defaultActiveTab === "string") {
      const parsed = parseInt(defaultActiveTab, 10);
      return isNaN(parsed) ? 0 : parsed - 1;
    }
    return typeof defaultActiveTab === "number" ? defaultActiveTab : 0;
  }, [defaultActiveTab]);

  const graduationItems = useMemo(() => {
    if (graduationBenefits.content) {
      return graduationBenefits.content.map((item) => item.text);
    }
    return graduationBenefits.items || [];
  }, [graduationBenefits]);
  const { isOpen, onOpen, onClose } = useModal();

  return (
    <Box
      width="100%"
      bg={backgroundImage ? "transparent" : "blue.600"}
      backgroundImage={backgroundImage ? `url(${backgroundImage})` : undefined}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      py={{ base: 8, md: 10, lg: 10 }}
      px={{ base: 4, md: 6, lg: 8 }}
      position="relative"
    >
      <Box maxW="1200px" margin="0 auto" position="relative" zIndex={1}>
        <MotionTop useScrollTrigger={true}>
          <Heading
            as="h1"
            textAlign="center"
            color={"white"}
            fontSize={{ base: "24px", md: "32px", lg: "40px" }}
            fontWeight="bold"
            mb={{ base: 6, md: 8, lg: 10 }}
          >
            {title}
          </Heading>
        </MotionTop>

        <Box borderRadius="lg" boxShadow="xl" mb={{ base: 6, md: 8, lg: 10 }}>
          <Tabs defaultIndex={defaultTabIndex} colorScheme="blue">
            <TabList
              bg={"transparent"}
              borderBottom="none"
              sx={{
                "&::-webkit-scrollbar": {
                  height: "4px"
                },
                "&::-webkit-scrollbar-track": {
                  background: "#003366"
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "#0066CC",
                  borderRadius: "2px"
                }
              }}
              justifyContent="space-between"
            >
              {processedTabs.map((tab) => (
                <Tab
                  key={tab.id}
                  color="white"
                  bg={"#004875"}
                  fontWeight="bold"
                  borderTopRadius={"3xl"}
                  fontSize={{ base: "11px", md: "13px", lg: "15px" }}
                  px={{ base: 2, md: 3, lg: 8 }}
                  py={{ base: 3, md: 4 }}
                  _selected={{
                    color: "#004080",
                    bg: "#FFD700"
                  }}
                  border={"1px solid #38c2f2"}
                  _hover={{
                    color: "#004080",
                    bg: "#FFD700"
                  }}
                  mb={"2px"}
                >
                  {tab.label}
                </Tab>
              ))}
            </TabList>

            <TabPanels>
              {processedTabs.map((tab) => (
                <TabPanel key={tab.id} p={0}>
                  <Box
                    bg="white"
                    p={{ base: 4, md: 6, lg: 8 }}
                    minHeight={{ base: "auto", lg: "400px" }}
                  >
                    <SimpleGrid
                      columns={{ base: 1, lg: tab.content.image ? 2 : 1 }}
                      spacing={{ base: 4, lg: 0 }}
                      height="100%"
                    >
                      <Box
                        height="100%"
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        order={{ base: tab.content.image ? 2 : 1, lg: 1 }}
                      >
                        <Heading
                          as="h2"
                          fontSize={{ base: "18px", md: "20px", lg: "24px" }}
                          color="#0096d4"
                          fontWeight="bold"
                          dangerouslySetInnerHTML={{
                            __html: tab.content.title
                          }}
                        />
                        <Divider
                          orientation="horizontal"
                          mb={6}
                          mt={2}
                          w={"100px"}
                          color={"black"}
                        />
                        {tab.processedContent ? (
                          <Box
                            fontSize={{
                              base: "14px",
                              md: "15px",
                              lg: "16px"
                            }}
                            color="black"
                            lineHeight="1.6"
                            sx={{
                              "& ul": {
                                listStyle: "none",
                                padding: 0,
                                margin: 0
                              },
                              "& li": {
                                display: "flex",
                                alignItems: "flex-start",
                                marginBottom: "12px"
                              },
                              "& p": {
                                marginBottom: "12px"
                              }
                            }}
                            dangerouslySetInnerHTML={{
                              __html: tab.processedContent
                            }}
                          />
                        ) : (
                          <List spacing={3}>
                            {tab.content.items?.map((item, index) => (
                              <ListItem
                                key={index}
                                fontSize={{
                                  base: "14px",
                                  md: "15px",
                                  lg: "16px"
                                }}
                                color="black"
                                display="flex"
                                alignItems="flex-start"
                                lineHeight="1.6"
                              >
                                <Box
                                  as={FaCheckCircle}
                                  color="#FF0000"
                                  mr={2}
                                  fontSize="18px"
                                  mt="2px"
                                />
                                <Text>{item}</Text>
                              </ListItem>
                            ))}
                          </List>
                        )}
                      </Box>
                      {tab.content.image && (
                        <Box
                          position="relative"
                          width="100%"
                          height={{ base: "250px", lg: "100%" }}
                          borderRadius="2xl"
                          overflow="hidden"
                          order={{ base: 1, lg: 2 }}
                        >
                          <Image
                            src={tab.content.image}
                            alt={tab.content.title}
                            width="100%"
                            height="100%"
                            objectFit="cover"
                            borderRadius="2xl"
                          />
                        </Box>
                      )}
                    </SimpleGrid>
                  </Box>
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </Box>

        <Box>
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={0}>
            <Box
              display={{ base: "none", lg: "block" }}
              position="relative"
              minH="400px"
              borderRadius="2xl"
              border="4px solid #40c9fe"
            >
              <Image
                src={graduationBenefits.image}
                alt="Lễ tốt nghiệp"
                width="100%"
                height="100%"
                objectFit="cover"
                borderRadius="2xl"
              />
            </Box>
            <Box p={{ base: 4, md: 6, lg: 8 }} color="white">
              <Heading
                as="h3"
                fontSize={{ base: "18px", md: "20px", lg: "22px" }}
                color="#FFD700"
                mb={4}
                fontWeight="bold"
                textTransform="uppercase"
              >
                {graduationBenefits.title}
              </Heading>
              <List spacing={4}>
                {graduationItems.map((item, index) => (
                  <ListItem
                    key={index}
                    fontSize={{ base: "14px", md: "15px", lg: "16px" }}
                    color="white"
                    display="flex"
                    alignItems="flex-start"
                    lineHeight="1.6"
                  >
                    <Image
                      src="/iconnext.png"
                      alt=""
                      width="22px"
                      height="18px"
                      mr={2}
                      display="inline-block"
                      flexShrink={0}
                      mt="2px"
                    />
                    {item}
                  </ListItem>
                ))}
              </List>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignContent={"center"}
        mt={{ base: 4, lg: 8 }}
      >
        {" "}
        <BtnTheme
          size={{ base: "sm", md: "lg" }}
          onClick={() => !isOpen && onOpen && onOpen()}
          w={{ base: "160px", lg: "200px" }}
        >
          Đăng Ký Ngay
        </BtnTheme>
      </Box>
    </Box>
  );
};
