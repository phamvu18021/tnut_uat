"use client";

import { useState, useEffect, useRef } from "react";
import {
  Box,
  HStack,
  Avatar,
  VStack,
  Text,
  IconButton
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { MdClose } from "react-icons/md";

interface NotificationInfo {
  name: string;
  content: string;
  time: string;
}

interface NotificationData {
  image: string;
  info: NotificationInfo;
}

interface NotificationProps {
  notifications?: NotificationData[];
}

export const Notification = ({ notifications }: NotificationProps) => {
  const defaultNotifications: NotificationData[] = [];

  const notificationList = notifications || defaultNotifications;
  const [currentNotification, setCurrentNotification] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);
  const currentIndexRef = useRef(0);
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (notificationList.length === 0) return;

    const today = new Date().toDateString();
    const lastShownDate = localStorage.getItem("notificationLastShown");
    const hasShownToday = lastShownDate === today;

    if (hasShownToday) {
      return;
    }

    currentIndexRef.current = 0;

    const showNotification = () => {
      if (currentIndexRef.current >= notificationList.length) {
        localStorage.setItem("notificationLastShown", today);
        setIsVisible(false);
        if (intervalIdRef.current) {
          clearInterval(intervalIdRef.current);
        }
        return;
      }

      setCurrentNotification(notificationList[currentIndexRef.current]);
      setIsVisible(true);
      currentIndexRef.current++;

      setTimeout(() => {
        setIsVisible(false);
      }, 2500);
    };

    const initialDelay = setTimeout(() => {
      showNotification();
    }, 0);
    
    intervalIdRef.current = setInterval(() => {
      showNotification();
    }, 5000);

    const cleanup = () => {
      clearTimeout(initialDelay);
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };

    return cleanup;
  }, [notificationList]);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <Box
      position="fixed"
      top="20px"
      left="20px"
      zIndex={9999}
      maxW="280px"
      w="100%"
    >
      <AnimatePresence>
        {isVisible && currentNotification && (
          <motion.div
            initial={{ y: -400, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -400, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Box
              bg="white"
              borderRadius="full"
              boxShadow="lg"
              py={2}
              px={2}
              position="relative"
            >
              <HStack spacing={5}>
                <Avatar
                  size="lg"
                  src={currentNotification.image}
                  name={currentNotification.info.name}
                />
                <VStack align="flex-start" spacing={0} flex={1}>
                  <Text fontWeight="700" fontSize="16px" color="gray.800">
                    {currentNotification.info.name}
                  </Text>
                  <Text fontWeight="500" fontSize="14px" color="gray.600">
                    {currentNotification.info.content}
                  </Text>
                  <Text fontWeight="400" fontSize="13px" color="gray.500">
                    {currentNotification.info.time}
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};
