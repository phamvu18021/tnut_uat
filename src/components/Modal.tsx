"use client";

import { Box, CloseButton } from "@chakra-ui/react";
import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface IModalBase {
  isOpen: boolean;
  children: ReactNode;
  onOpen: () => void;
  onClose: () => void;
}

export const ModalBase = (props: IModalBase) => {
  const { onClose, isOpen, children } = props;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!mounted) return null;

  return createPortal(
    <Box
      position="fixed"
      top={0}
      left={0}
      w="100vw"
      h="100vh"
      zIndex={1400}
      bg="blackAlpha.600"
      display={isOpen ? "flex" : "none"}
      alignItems="center"
      justifyContent="center"
      onClick={onClose}
    >
      <Box
        bg="white"
        borderRadius="md"
        w={{ base: "90%", md: "2xl" }}
        maxW="400px"
        position="relative"
        onClick={(e) => e.stopPropagation()}
        overflow="hidden"
      >
        <CloseButton position="absolute" right={2} top={2} zIndex={1} onClick={onClose} />
        <Box p={0}>{children}</Box>
      </Box>
    </Box>,
    document.body
  );
};
