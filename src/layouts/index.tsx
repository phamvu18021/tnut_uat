"use client";

import { ReactNode, useEffect, useState } from "react";
import { CTA } from "./components/Cta";
import { Footer } from "./footer";
import { Header } from "./header";
import { Box } from "@chakra-ui/react";
import { TrackingSession } from "@/components/TrackingSession";
import { Notification } from "@/layouts/components/Notification";
import { useModal } from "@/components/ModalContext";
interface ILayout {
  children: ReactNode;
  data: {
    notification: any;
    cta: any;
    footer: any;
  };
}
const Layout = ({ children, data }: ILayout) => {
  const { isOpen, onOpen } = useModal();

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Check if it's the first time in this session to avoid annoying the user on every page change
      const hasShown = sessionStorage.getItem("mainModalShown");
      if (!hasShown && !isOpen && onOpen) {
        onOpen();
        sessionStorage.setItem("mainModalShown", "true");
      }
    }, 8000); // Increased to 8s to stay out of the critical rendering path

    return () => window.clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, onOpen]);
  return (
    <>
      <Box maxW={"1920px"} mx={"auto"}>
        <TrackingSession />
        <Header />
        <main>{children}</main>
        <Notification notifications={data?.notification?.acf?.notification} />
        <CTA data={data?.cta} />
        <Footer data={data?.footer} />
      </Box>
    </>
  );
};

export default Layout;
