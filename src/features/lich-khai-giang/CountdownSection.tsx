"use client";
import { Box, Text, HStack, VStack, keyframes } from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";

interface CountdownSectionProps {
  targetDate: string;
  title: string;
  location: string;
}

const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const slideUp = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 5px rgba(252, 211, 77, 0.3); }
  50% { box-shadow: 0 0 15px rgba(252, 211, 77, 0.6), 0 0 25px rgba(252, 211, 77, 0.4); }
`;

const shimmer = keyframes`
  0% { left: -100%; }
  100% { left: 100%; }
`;

const blink = keyframes`
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0.3; }
`;

export const CountdownSection = ({
  targetDate,
  title,
  location
}: CountdownSectionProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [prevTimeLeft, setPrevTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const prevTimeLeftRef = useRef({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const target = new Date(targetDate).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setPrevTimeLeft(prevTimeLeftRef.current);
        const newTimeLeft = { days, hours, minutes, seconds };
        prevTimeLeftRef.current = newTimeLeft;
        setTimeLeft(newTimeLeft);
      } else {
        setPrevTimeLeft(prevTimeLeftRef.current);
        const newTimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        prevTimeLeftRef.current = newTimeLeft;
        setTimeLeft(newTimeLeft);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeBox = ({
    value,
    label,
    isChanging,
    isSeconds
  }: {
    value: number;
    label: string;
    isChanging: boolean;
    isSeconds: boolean;
  }) => (
    <VStack spacing={2}>
      <Box
        bg="white"
        borderRadius="12px"
        px={5}
        py={4}
        minW="75px"        textAlign="center"
        fontWeight="bold"
        fontSize={{ base: "xl", md: "2xl" }}        transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
        position="relative"
        overflow="hidden"
        boxShadow={
          isChanging
            ? "0 6px 20px rgba(0,0,0,0.18)"
            : "0 4px 12px rgba(0,0,0,0.15)"
        }
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: "-100%",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(90deg, transparent, rgba(252, 211, 77, 0.2), transparent)",
          animation: `${shimmer} 0.6s ease-out`
        }}
        _hover={{
          transform: "translateY(-2px)",
          boxShadow: "0 6px 20px rgba(0,0,0,0.18)",
          _before: {
            left: "100%"
          }
        }}
      >
        <Text
          color="blue.800"
          lineHeight="1"
          fontWeight="800"
          textShadow="0 1px 2px rgba(0,0,0,0.1)"
          animation={
            isChanging && isSeconds ? `${slideUp} 0.8s ease-in-out` : "none"
          }
        >
          {value.toString().padStart(2, "0")}
        </Text>
      </Box>
      <Text
        fontSize="sm"
        color="#FCD34D"
        fontWeight="700"
        textTransform="uppercase"
        letterSpacing="0.5px"
        animation="none"
        textShadow="0 1px 2px rgba(0,0,0,0.2)"
      >
        {label}
      </Text>
    </VStack>
  );

  return (
    <Box
      bg="blue.800"
      borderRadius="16px"
      p={8}
      boxShadow="0 8px 32px rgba(0, 0, 0, 0.2)"
      position="relative"
      overflow="hidden"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background:
          "linear-gradient(135deg, rgba(252, 211, 77, 0.1) 0%, transparent 50%, rgba(252, 211, 77, 0.05) 100%)",
        pointerEvents: "none"
      }}
    >
      <VStack spacing={6} position="relative" zIndex={1}>
        <VStack spacing={3}>
          <Text
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight="600"
            color="#FCD34D"
            textAlign="center"
            textShadow="0 2px 4px rgba(0,0,0,0.3)"
            letterSpacing="0.5px"
          >
            {title}
          </Text>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color="#FCD34D"
            textAlign="center"
            fontWeight="600"
            opacity={0.9}
            textShadow="0 1px 2px rgba(0,0,0,0.2)"
          >
            📍 {location}
          </Text>
        </VStack>

        <HStack spacing={{ base: 3, md: 6 }} justify="center" flexWrap="wrap">
          <TimeBox
            value={timeLeft.days}
            label="Ngày"
            isChanging={timeLeft.days !== prevTimeLeft.days}
            isSeconds={false}
          />
          <TimeBox
            value={timeLeft.hours}
            label="Giờ"
            isChanging={timeLeft.hours !== prevTimeLeft.hours}
            isSeconds={false}
          />
          <TimeBox
            value={timeLeft.minutes}
            label="Phút"
            isChanging={timeLeft.minutes !== prevTimeLeft.minutes}
            isSeconds={false}
          />
          <TimeBox
            value={timeLeft.seconds}
            label="Giây"
            isChanging={timeLeft.seconds !== prevTimeLeft.seconds}
            isSeconds={true}
          />
        </HStack>
      </VStack>
    </Box>
  );
};
