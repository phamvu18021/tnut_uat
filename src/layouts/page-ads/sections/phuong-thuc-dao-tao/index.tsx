"use client";

import {
  Box,
  Heading,
  Text,
  Image,
  Container,
  SimpleGrid
} from "@chakra-ui/react";
import { MotionTop } from "@/components/MotionTop";
import { MotionBot } from "@/components/MotionBot";

export interface TrainingMethodItem {
  icon: string;
  title: string;
  description: string;
}

export interface PhuongThucDaoTaoProps {
  title?: string;
  backgroundImage?: string;
  topImage?: string;
  items: TrainingMethodItem[];
}

const iconPositionsDesktop = [
  { top: "223px", left: "45px" },
  { top: "215px", left: "279px" },
  { top: "223px", left: "516px" },
  { top: "215px", left: "756px" },
  { top: "215px", left: "1000px" }
];

const iconPositionsMobile = [
  { top: "86px", left: "12px" },
  { top: "265px", left: "10px" },
  { top: "419px", left: "10px" },
  { top: "563px", left: "12px" },
  { top: "713px", left: "10px" }
];

const textPositionsDesktop = [
  { top: "420px", left: "-10px", width: "296px", height: "157px" },
  { top: "97px", left: "218px", width: "296px", height: "106px" },
  { top: "411px", left: "496px", width: "214px", height: "113px" },
  { top: "96px", left: "721px", width: "252px", height: "106px" },
  { top: "411px", left: "965px", width: "243px", height: "112px" }
];

const textPositionsMobile = [
  { top: "82px", left: "122px", width: "260px", height: "161px" },
  { top: "275px", left: "122px", width: "260px", height: "115px" },
  { top: "429px", left: "122px", width: "260px", height: "113px" },
  { top: "571px", left: "122px", width: "260px", height: "115px" },
  { top: "710px", left: "122px", width: "260px", height: "112px" }
];

const itemColors = [
  {
    borderColor: "#66B828",
    gradientFrom: "#C7DF4C",
    gradientTo: "#439100"
  },
  {
    borderColor: "#724DFC",
    gradientFrom: "#2D95FF",
    gradientTo: "#421AD9"
  },
  {
    borderColor: "#FFBE4C",
    gradientFrom: "#FFB93A",
    gradientTo: "#FC8118"
  },
  {
    borderColor: "#02D6AE",
    gradientFrom: "#177BDF",
    gradientTo: "#00E5BA"
  },
  {
    borderColor: "#FE556A",
    gradientFrom: "#FF3E55",
    gradientTo: "#C60014"
  }
];

export const PhuongThucDaoTaoSection = ({
  title = "PHƯƠNG THỨC ĐÀO TẠO",
  backgroundImage,
  topImage,
  items
}: PhuongThucDaoTaoProps) => {
  return (
    <Box
      width="100%"
      position="relative"
      bg={backgroundImage ? "transparent" : "white"}
      backgroundImage={backgroundImage ? `url(${backgroundImage})` : undefined}
      backgroundSize="cover"
      backgroundPosition="50% 0%"
      backgroundRepeat="repeat"
      minH={{ base: "889px", md: "auto", lg: "604px" }}
    >
      <Container
        maxW="1200px"
        position="relative"
        zIndex={1}
        px={0}
        sx={{
          "@media (min-width: 768px) and (max-width: 1024px)": {
            px: 6
          }
        }}
      >
        <Box position="relative" width="100%" height="100%">
          <MotionTop useScrollTrigger={true}>
            <Heading
              as="h2"
              position="absolute"
              color="#007ECA"
              fontWeight="bold"
              lineHeight="1.6"
              textAlign="center"
              sx={{
                "@media (min-width: 1025px)": {
                  width: "678px",
                  top: "9px",
                  left: "261px",
                  fontSize: "38px"
                },
                "@media (min-width: 768px) and (max-width: 1024px)": {
                  width: "100%",
                  top: "10px",
                  left: "0px",
                  fontSize: "24px",
                  textAlign: "center"
                },
                "@media (max-width: 767px)": {
                  width: "390px",
                  top: "10px",
                  left: "0px",
                  fontSize: "24px"
                }
              }}
            >
              {title}
            </Heading>
          </MotionTop>

          <Box
            position="absolute"
            width="75px"
            height="3px"
            bg="#A5E4FF"
            sx={{
              "@media (min-width: 1025px)": {
                top: "70px",
                left: "563px"
              },
              "@media (min-width: 768px) and (max-width: 1024px)": {
                top: "52px",
                left: "50%",
                transform: "translateX(-50%)"
              },
              "@media (max-width: 767px)": {
                top: "52px",
                left: "173px"
              }
            }}
          />

          {topImage && (
            <Box
              position="absolute"
              display={{ base: "block", md: "none", lg: "block" }}
              sx={{
                "@media (min-width: 1025px)": {
                  width: "1221px",
                  height: "294px",
                  top: "155px",
                  left: "-9px"
                },
                "@media (max-width: 767px)": {
                  width: "400px",
                  height: "96px",
                  top: "397px",
                  left: "-630px"
                }
              }}
            >
              <Image
                src={topImage}
                alt="Phương thức đào tạo"
                width="100%"
                height="100%"
                objectFit="cover"
              />
            </Box>
          )}

          <Box
            display={{ base: "block", md: "none", lg: "block" }}
            sx={{
              "@media (min-width: 768px) and (max-width: 1024px)": {
                display: "none"
              }
            }}
          >
            {items.map((item, index) => {
              const iconPosDesktop = iconPositionsDesktop[index] || {};
              const iconPosMobile = iconPositionsMobile[index] || {};
              const textPosDesktop = textPositionsDesktop[index] || {};
              const textPosMobile = textPositionsMobile[index] || {};
              const colors = itemColors[index] || itemColors[0];
              const MotionComponent = index % 2 === 0 ? MotionTop : MotionBot;

              return (
                <MotionComponent key={index} useScrollTrigger={true}>
                  <Box>
                    <Box
                      position="absolute"
                      sx={{
                        "@media (min-width: 1025px)": {
                          width: "173px",
                          height: "173px",
                          top: iconPosDesktop.top,
                          left: iconPosDesktop.left
                        },
                        "@media (max-width: 767px)": {
                          width: "100px",
                          height: "100px",
                          top: iconPosMobile.top,
                          left: iconPosMobile.left
                        }
                      }}
                    >
                    <Box
                      position="absolute"
                      width="100%"
                      height="100%"
                      borderWidth="3px"
                      borderStyle="solid"
                      borderColor={colors.borderColor}
                      borderRadius="100px"
                      bg="transparent"
                      top={0}
                      left={0}
                    />
                    <Box
                      position="absolute"
                      sx={{
                        "@media (min-width: 1025px)": {
                          width: "145px",
                          height: "145px",
                          top: "14px",
                          left: "14px"
                        },
                        "@media (max-width: 767px)": {
                          width: "84px",
                          height: "84px",
                          top: "8px",
                          left: "8px"
                        }
                      }}
                      borderRadius="100px"
                      bgGradient={`linear(to-b, ${colors.gradientFrom}, ${colors.gradientTo})`}
                    />
                    <Box
                      position="relative"
                      width="100%"
                      height="100%"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Image
                        src={item.icon}
                        alt={item.title}
                        position="absolute"
                        sx={{
                          "@media (min-width: 1025px)": {
                            width: "84px",
                            height: "98px",
                            top: "30px",
                            left: "45px"
                          },
                          "@media (max-width: 767px)": {
                            width: "49px",
                            height: "57px",
                            top: "17px",
                            left: "26px"
                          }
                        }}
                        objectFit="contain"
                      />
                    </Box>
                  </Box>

                  <Box
                    position="absolute"
                    sx={{
                      "@media (min-width: 1025px)": {
                        top: textPosDesktop.top,
                        left: textPosDesktop.left,
                        width: textPosDesktop.width,
                        height: textPosDesktop.height
                      },
                      "@media (max-width: 767px)": {
                        top: textPosMobile.top,
                        left: textPosMobile.left,
                        width: textPosMobile.width,
                        height: textPosMobile.height
                      }
                    }}
                  >
                    <Heading
                      as="h3"
                      position="absolute"
                      fontSize="18px"
                      fontWeight="bold"
                      lineHeight="1.6"
                      color="#004782"
                      top="0px"
                      sx={{
                        "@media (min-width: 1025px)": {
                          textAlign: "center",
                          width: index === 0 ? "164px" : index === 1 ? "164px" : index === 2 ? "164px" : index === 3 ? "164px" : "189px",
                          left: index === 0 ? "59px" : index === 1 ? "66px" : index === 2 ? "25px" : index === 3 ? "44px" : "27px"
                        },
                        "@media (max-width: 767px)": {
                          textAlign: "left",
                          width: index === 0 ? "159px" : "100%",
                          left: "0px"
                        }
                      }}
                    >
                      {item.title}
                    </Heading>
                    <Text
                      position="absolute"
                      fontSize="16px"
                      lineHeight="1.6"
                      color="#000000"
                      whiteSpace="pre-line"
                      left="0px"
                      sx={{
                        "@media (min-width: 1025px)": {
                          textAlign: "center",
                          top: index === 0 || index === 1 || index === 3 ? "29px" : index === 2 ? "36px" : "35px",
                          width: "276px"
                        },
                        "@media (max-width: 767px)": {
                          textAlign: "left",
                          top: index === 0 ? "33px" : index === 1 || index === 3 ? "38px" : index === 2 ? "36px" : "35px",
                          width: "260px"
                        }
                      }}
                    >
                      {item.description}
                    </Text>
                  </Box>
                </Box>
                </MotionComponent>
              );
            })}
          </Box>

          <Box
            display="none"
            sx={{
              "@media (min-width: 768px) and (max-width: 1024px)": {
                display: "block"
              }
            }}
            pt={24}
          >
            <SimpleGrid columns={2} spacing={6}>
              {items.map((item, index) => {
                const colors = itemColors[index] || itemColors[0];
                const MotionComponent = index % 2 === 0 ? MotionTop : MotionBot;
                return (
                  <MotionComponent key={index} useScrollTrigger={true}>
                    <Box mb={6}>
                    <Box
                      position="relative"
                      width="100px"
                      height="100px"
                      margin="0 auto"
                      mb={4}
                    >
                      <Box
                        position="absolute"
                        width="100%"
                        height="100%"
                        borderWidth="3px"
                        borderStyle="solid"
                        borderColor={colors.borderColor}
                        borderRadius="100px"
                        bg="transparent"
                        top={0}
                        left={0}
                      />
                      <Box
                        position="absolute"
                        width="84px"
                        height="84px"
                        top="8px"
                        left="8px"
                        borderRadius="100px"
                        bgGradient={`linear(to-b, ${colors.gradientFrom}, ${colors.gradientTo})`}
                      />
                    <Box
                      position="relative"
                      width="100%"
                      height="100%"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      pt="17px"
                    >
                      <Image
                        src={item.icon}
                        alt={item.title}
                        position="absolute"
                        width="49px"
                        height="57px"
                        top="17px"
                        left="26px"
                        objectFit="contain"
                      />
                    </Box>
                  </Box>
                  <Box textAlign="left">
                    <Heading
                      as="h3"
                      fontSize="18px"
                      fontWeight="bold"
                      lineHeight="1.6"
                      color="#004782"
                      mb={2}
                    >
                      {item.title}
                    </Heading>
                    <Text
                      fontSize="16px"
                      lineHeight="1.6"
                      color="#000000"
                      whiteSpace="pre-line"
                    >
                      {item.description}
                    </Text>
                  </Box>
                </Box>
                  </MotionComponent>
                );
              })}
            </SimpleGrid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

