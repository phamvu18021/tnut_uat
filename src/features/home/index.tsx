import dynamic from "next/dynamic";
import { Banner } from "./Banner";
import { Benefit } from "./Benefit";
import { CountdownSection } from "./CountdownSection";

const Introduce = dynamic(() => import("./Introduce").then((m) => m.Introduce));
const Slogan = dynamic(() => import("./Slogan").then((m) => m.Slogan));
const Majors = dynamic(() => import("./Majors").then((m) => m.Majors));
const Programs = dynamic(() => import("./Programs").then((m) => m.Programs));
import { Event } from "./Event";
const Advertisement = dynamic(() =>
  import("./Advertisement").then((m) => m.Advertisement)
);
const Circulars = dynamic(() =>
  import("./Circulars").then((m) => m.Circulars)
);

export const Home = ({
  home_content,
  news,
  notifis
}: {
  home_content: any | null;
  news: any[];
  notifis: any[];
}) => {
  return (
    <>
      <Banner imagesBanner={home_content?.acf?.anh_banner} />
      <Introduce introduce={home_content?.acf?.section_2} />
      <Benefit homeContent={home_content} />
      <CountdownSection
        title={home_content?.acf?.info_lkg?.left_column?.title || ""}
        sub_title={home_content?.acf?.info_lkg?.left_column?.desc || ""}
        homeContent={home_content}
      />
      <Slogan slogan={home_content?.acf?.slogan} />
      <Majors majors={home_content?.acf?.nganh_dao_tao} />
      <Programs cms={home_content?.acf?.section_obj} />
      <Event news={news} notifis={notifis} />
      <Advertisement advertisement={home_content?.acf?.quang_cao} />
      <Circulars circulars={home_content?.acf?.thong_tu} />
    </>
  );
};
