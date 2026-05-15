"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ModalProvider } from "@/components/ModalContext";
import theme from "@/theme";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <ModalProvider>{children}</ModalProvider>
    </ChakraProvider>
  );
}
