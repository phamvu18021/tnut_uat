import { Box } from "@chakra-ui/react";
import { Banner } from "../home/Banner";
import { Benefit } from "../home/Benefit";
import { Majors } from "../home/Majors";
import { Slogan } from "../home/Slogan";
import { IntroduceAbout } from "./IntroduceAbout";

async function getPageContent() {
  try {
    const apiUrl = process.env.API_URL || "";
    const hasSSL = process.env.NEXT_PUBLIC_HAS_SSL || "true";
    if (hasSSL === "false") process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

    const res = await fetch(`${apiUrl}/gioi-thieu`, {
      next: { revalidate: 3600 }
    });
    if (!res.ok) return null;
    const posts = await res.json();
    return posts?.[0] ?? null;
  } catch {
    return null;
  }
}

export const About = async () => {
  const page_content = await getPageContent();

  return (
    <>
      <Box color={"blue.800"}>
        <Box bg="radial-gradient(circle, rgba(5,70,89,1) 2%, rgba(98,212,245,1) 100%, rgba(252,89,52,1) 100%)"></Box>
        <Box>
          <Banner imagesBanner={page_content?.acf?.anh_banner} />
          <IntroduceAbout introduceAbout={page_content?.acf?.gioi_thieu} />
          <Benefit />
          <Slogan slogan={page_content?.acf?.slogan} />
          <Majors majors={page_content?.acf?.nganh_dao_tao} />
        </Box>
      </Box>
    </>
  );
};
