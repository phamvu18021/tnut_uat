"use client";
import { useModal } from "@/components/ModalContext";

import {
  Box,
  Heading,
  Text,
  VStack,
  ListItem,
  Button,
  HStack,
  Grid,
  GridItem,
  keyframes
} from "@chakra-ui/react";
import { FormWrapper } from "@/components/FormWrapper";
import { MotionTop } from "@/components/MotionTop";
import { MotionBot } from "@/components/MotionBot";
import { MotionRight } from "@/components/MotionRight";
import { MotionRightLeft } from "@/components/MotionLeft";

const tada = keyframes`
  0% { transform: scale(1) rotate(0deg); }
  10%, 20% { transform: scale(0.9) rotate(-3deg); }
  30%, 50%, 70%, 90% { transform: scale(1.1) rotate(3deg); }
  40%, 60%, 80% { transform: scale(1.1) rotate(-3deg); }
  100% { transform: scale(1) rotate(0deg); }
`;

export interface FeatureCardData {
  iconImage: string;
  textTop: string;
  textBottom: string;
}

interface FeatureCardsSectionProps {
  containerPosition: {
    width: { base: string; md: string; lg: string };
    height: { base: string; md: string; lg: string };
    top: { base: string; md: string; lg: string };
    left: { base: string; md: string; lg: string };
  };
  cards: FeatureCardData[];
  backgroundImage: string;
}

export interface BannerProps {
  backgroundImages: {
    desktop: string;
    mobile: string;
  };
  titles: {
    main: string;
    sub: string;
  };
  infoSection: {
    timeFlexible: string;
    studyOnline: string;
    recognizedDegree: string;
  };
  benefits: string[];
  featureCards: FeatureCardData[];
  featureCardsBackground: string;
  personImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  buttonText: string;
  buttonPopupId?: string;
  containerHeight?: {
    base: string;
    md: string;
    lg: string;
  };
  containerMaxWidth?: {
    base: string;
    md: string;
    lg: string;
  };
}

const FeatureCard = ({ iconImage, textTop, textBottom }: FeatureCardData) => {
  return (
    <HStack
      spacing={{ base: 2, md: 2.5, lg: 3 }}
      align="top"
      position="relative"
      zIndex={4}
    >
      <Box
        sx={{
          width: { base: "46px", md: "50px", lg: "56px" },
          height: { base: "44px", md: "48px", lg: "52px" },
          flexShrink: 0
        }}
      >
        <Box
          width="100%"
          height="100%"
          backgroundImage={`url(${iconImage})`}
          backgroundSize="cover"
          backgroundPosition={{
            base: "left top",
            md: "left top",
            lg: "left center"
          }}
          backgroundRepeat="no-repeat"
        />
      </Box>

      <Heading
        as="h3"
        sx={{
          fontSize: { base: "13px", md: "14px", lg: "16px" },
          fontWeight: "bold",
          lineHeight: "1.6",
          color: "white",
          textAlign: { base: "left", md: "left", lg: "left" }
        }}
      >
        {textTop} <br />
        <Text as="span" color="rgb(255, 222, 95)">
          {textBottom}
        </Text>
      </Heading>
    </HStack>
  );
};

const FeatureCardsSection = ({
  containerPosition,
  cards,
  backgroundImage
}: FeatureCardsSectionProps) => {
  return (
    <Box
      position="absolute"
      sx={{
        ...containerPosition,
        transform: {
          base: "none",
          md: "translateX(-50%)",
          lg: "none"
        }
      }}
    >
      <Box
        position="absolute"
        sx={{
          width: { base: "410px", md: "700px", lg: "840px" },
          height: { base: "113px", md: "90px", lg: "90px" },
          top: { base: "0px", md: "0px", lg: "444.946px" },
          borderRadius: "11px",
          boxShadow: "rgb(255, 222, 89) 2px 5px 18px -15px",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          overflow: "hidden"
        }}
      />

      <Grid
        templateColumns={{
          base: "repeat(3, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(3, 1fr)"
        }}
        gap={{ base: 2, md: 3, lg: 4 }}
        position="relative"
        sx={{
          top: { base: "0px", md: "0px", lg: "444.946px" },
          padding: { base: "8px", md: "12px", lg: "15px" },
          zIndex: 4,
          width: { base: "410px", md: "700px", lg: "840px" }
        }}
      >
        {cards.map((card, index) => (
          <GridItem key={index}>
            <FeatureCard {...card} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export const BannerSection = ({
  backgroundImages,
  titles,
  infoSection,
  benefits,
  featureCards,
  featureCardsBackground,
  personImage,
  buttonText,
  buttonPopupId = "POPUP1",
  containerHeight = { base: "1400px", md: "800px", lg: "657.5px" },
  containerMaxWidth = { base: "420px", md: "768px", lg: "960px" }
}: BannerProps) => {
  const { isOpen, onOpen } = useModal();

  return (
    <Box
      width="100%"
      minHeight="100%"
      overflow="hidden"
      position="relative"
      backgroundImage={{
        base: backgroundImages.mobile,
        md: backgroundImages.mobile,
        lg: backgroundImages.desktop
      }}
      backgroundSize="cover"
      backgroundPosition="50% 0%"
      backgroundRepeat="repeat"
      backgroundAttachment="scroll"
    >
      <Box
        position="relative"
        margin="0 auto"
        width="100%"
        sx={{
          height: containerHeight,
          maxW: containerMaxWidth
        }}
      >
        <Box position="relative" margin="0 auto" height="100%">
          <MotionTop immediate={true} useScrollTrigger={true}>
            <Box
              position="absolute"
              sx={{
                top: { base: "30px", md: "50px", lg: "40px" },
                left: { base: "50%", md: "360px", lg: "50%" },
                transform: {
                  base: "translateX(-50%)",
                  md: "none",
                  lg: "translateX(-42%)"
                },
                width: {
                  base: "calc(100% - 40px)",
                  md: "calc(100% - 380px)",
                  lg: "550px"
                },
                display: "flex",
                alignItems: "flex-start"
              }}
            >
              <VStack sx={{ textAlign: "center" }}>
                <Heading
                  as="h1"
                  sx={{
                    fontSize: { base: "18px", md: "22px", lg: "28px" },
                    fontWeight: "bold",
                    color: "#FFD346",
                    textDecoration: "underline"
                  }}
                >
                  {titles.main}
                </Heading>
                <Heading
                  as="h2"
                  sx={{
                    fontSize: { base: "24px", md: "30px", lg: "32px" },
                    fontWeight: "bold",
                    color: "#ffffff",
                    marginTop: "0"
                  }}
                >
                  {titles.sub}
                </Heading>
              </VStack>
            </Box>
          </MotionTop>

          <MotionRightLeft immediate={true} useScrollTrigger={true}>
            <Box
              position="absolute"
              sx={{
                top: { base: "145px", md: "155px", lg: "165px" },
                left: { base: "50%", md: "360px", lg: "50%" },
                transform: {
                  base: "translateX(-50%)",
                  md: "none",
                  lg: "translateX(-50%)"
                },
                width: {
                  base: "calc(100% - 40px)",
                  md: "calc(100% - 380px)",
                  lg: "500px"
                },
                maxWidth: { base: "400px", md: "380px", lg: "none" },
                display: "flex",
                alignItems: "flex-start",
                gap: "8px"
              }}
            >
            <Box
              sx={{
                width: { base: "6px", md: "8px", lg: "10px" },
                height: { base: "80px", md: "85px", lg: "90px" },
                backgroundColor: "#004080",
                borderRadius: "6px",
                flexShrink: 0
              }}
            />
            <Box display="flex" flexDirection="column" gap="4px">
              <Text
                sx={{
                  fontSize: { base: "14px", md: "16px", lg: "18px" },
                  color: "#FFFFFF",
                  fontWeight: "600"
                }}
              >
                {infoSection.timeFlexible}
              </Text>
              <Text
                sx={{
                  fontSize: { base: "18px", md: "22px", lg: "24px" },
                  fontWeight: "bold",
                  color: "#FFD346"
                }}
              >
                {infoSection.studyOnline}
              </Text>
              <Text
                sx={{
                  fontSize: { base: "14px", md: "16px", lg: "18px" },
                  color: "#FFFFFF",
                  fontWeight: "600"
                }}
              >
                {infoSection.recognizedDegree}
              </Text>
            </Box>
          </Box>
          </MotionRightLeft>

          <MotionRight immediate={true} useScrollTrigger={true}>
            <Box
              position="absolute"
              sx={{
                top: { base: "250px", md: "270px", lg: "280px" },
                left: { base: "50%", md: "360px", lg: "50%" },
                transform: {
                  base: "translateX(-50%)",
                  md: "none",
                  lg: "translateX(-50%)"
                },
                width: {
                  base: "calc(100% - 40px)",
                  md: "calc(100% - 380px)",
                  lg: "500px"
                },
                maxWidth: { base: "400px", md: "380px", lg: "none" },
                padding: { base: "20px", md: "25px", lg: "30px" },
                borderRadius: { base: "12px", md: "13px", lg: "15px" },
                backgroundColor: "#004080",
                display: "flex",
                flexDirection: "column",
                gap: "10px"
              }}
            >
            {benefits.map((benefit, index) => (
              <Text
                key={index}
                sx={{
                  fontSize: { base: "14px", md: "16px", lg: "18px" },
                  fontWeight: "bold",
                  color: "#FFFFFF"
                }}
              >
                - {benefit}
              </Text>
            ))}
          </Box>
          </MotionRight>

          <MotionBot immediate={true} useScrollTrigger={true}>
            <FeatureCardsSection
            containerPosition={{
              width: { base: "400px", md: "700px", lg: "1225.43px" },
              height: { base: "113px", md: "390px", lg: "534.946px" },
              top: { base: "1240px", md: "700px", lg: "85.5508px" },
              left: { base: "0px", md: "50%", lg: "300px" }
            }}
            cards={featureCards}
            backgroundImage={featureCardsBackground}
          />
          </MotionBot>

          <Box
            position="absolute"
            sx={{
              width: { base: "358px", md: "320px", lg: "358px" },
              height: { base: "588px", md: "520px", lg: "588px" },
              top: { base: "350px", md: "50px", lg: "36px" },
              left: { base: "0px", md: "20px", lg: "-190px" },
              mx: "10px"
            }}
          >
            <Box bg={"white"} borderRadius={"2xl"}>
              <FormWrapper />
            </Box>
          </Box>

          <MotionRight immediate={true} useScrollTrigger={true}>
            <Box
              position="absolute"
              sx={{
                width: { base: "400px", md: "380px", lg: "847px" },
                height: { base: "266px", md: "300px", lg: "545px" },
                top: { base: "970px", md: "360px", lg: "40px" },
                left: { base: "0px", md: "360px", lg: "550px" },
                overflow: "hidden"
              }}
            >
            <Box
              position="absolute"
              width="100%"
              height="100%"
              sx={{
                backgroundImage: {
                  base: `url(${personImage.mobile})`,
                  md: `url(${personImage.tablet})`,
                  lg: `url(${personImage.desktop})`
                },
                backgroundSize: "cover",
                backgroundPosition: "left top",
                backgroundRepeat: "no-repeat",
                pointerEvents: "none"
              }}
            />
          </Box>
          </MotionRight>

          <MotionBot immediate={true} useScrollTrigger={true}>
            <Button
            position="absolute"
            sx={{
              width: { base: "160px", md: "220px", lg: "325px" },
              height: { base: "38.9362px", md: "44px", lg: "48px" },
              top: { base: "1140px", md: "560px", lg: "470px" },
              left: { base: "117px", md: "460px", lg: "770px" },
              transform: { base: "none", md: "none", lg: "none" },
              borderRadius: "24px",
              bgGradient: "linear(to-b, rgb(255, 226, 89), rgb(255, 167, 81))",
              animation: `${tada} 1s ease-in-out infinite`,
              _hover: {
                bg: "rgb(255, 167, 81)",
                animation: `${tada} 0.6s ease-in-out`
              },
              color: "white",
              fontWeight: "bold",
              fontSize: { base: "14px", md: "16px", lg: "18px" },
              lineHeight: "1.6",
              cursor: "pointer",
              _active: {
                transform: {
                  base: "translateY(2px)",
                  md: "translateY(2px)",
                  lg: "translateY(2px)"
                },
                transition: "transform 0.2s linear"
              }
            }}
            onClick={() => !isOpen && onOpen && onOpen()}
          >
            {buttonText}
          </Button>
          </MotionBot>
        </Box>
      </Box>
    </Box>
  );
};
