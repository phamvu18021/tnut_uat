import { Box, Text, BoxProps } from "@chakra-ui/react";

interface BadgeProps {
  text: string;
  bgColor?: string;
  textColor?: string;
  fontSize?: BoxProps["fontSize"];
  fontWeight?: BoxProps["fontWeight"];
  px?: BoxProps["px"];
  py?: BoxProps["py"];
  borderRadius?: BoxProps["borderRadius"];
  maxW?: BoxProps["maxW"];
  mx?: BoxProps["mx"];
}

export const Badge = ({
  text,
  bgColor = "#FFE0CC",
  textColor = "#FF6400",
  fontSize = { base: "14px", md: "14px", lg: "16px" },
  fontWeight = "600",
  px = { base: 4, md: 4, lg: 4 },
  py = { base: 2, md: 2, lg: 2 },
  borderRadius = "full",
  maxW = "fit-content"
}: BadgeProps) => {
  return (
    <Box
      bg={bgColor}
      color={textColor}
      fontSize={fontSize}
      fontWeight={fontWeight}
      px={px}
      py={py}
      borderRadius={borderRadius}
      maxW={maxW}
      textTransform="uppercase"
      letterSpacing="wide"
    >
      <Text>{text}</Text>
    </Box>
  );
};
