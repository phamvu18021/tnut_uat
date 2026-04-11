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
}
const Layout = ({ children }: ILayout) => {
  const { isOpen, onOpen } = useModal();

  const [page_content, setPageContent] = useState<any>(null);

  useEffect(() => {
    const getPageContent = async () => {
      try {
        const res = await fetch(`/api/content-page/?type=notification`, {
          next: { revalidate: 3 }
        });
        if (!res.ok) {
          throw new Error(`Posts fetch failed with status: ${res.statusText}`);
        }
        const data = await res.json();
        setPageContent(data?.posts[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getPageContent();
  }, []);
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isOpen && onOpen) onOpen();
    }, 2000);

    return () => window.clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Box maxW={"1920px"} mx={"auto"}>
        <TrackingSession />
        <Header />
        <main>{children}</main>
        <Notification notifications={page_content?.acf?.notification} />
        <CTA />
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
