"use client";

import { Loading } from "@/components/Loading";
import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Banner = dynamic(() => import("./Banner").then((mod) => mod.Banner), {
  loading: () => <Loading />
});
const Event = dynamic(() => import("./Event").then((mod) => mod.Event), {
  loading: () => <Loading />
});

const Introduce = dynamic(
  () => import("./Introduce").then((mod) => mod.Introduce),
  {
    loading: () => <Loading />
  }
);

const Benefit = dynamic(() => import("./Benefit").then((mod) => mod.Benefit), {
  loading: () => <Loading />
});

const CountdownSection = dynamic(
  () => import("./CountdownSection").then((mod) => mod.CountdownSection),
  {
    loading: () => <Loading />
  }
);

const Slogan = dynamic(() => import("./Slogan").then((mod) => mod.Slogan), {
  loading: () => <Loading />
});
const Advertisement = dynamic(
  () => import("./Advertisement").then((mod) => mod.Advertisement),
  {
    loading: () => <Loading />
  }
);
const Programs = dynamic(
  () => import("./Programs").then((mod) => mod.Programs),
  {
    loading: () => <Loading />
  }
);

// const Testimonials = dynamic(
//   () => import("./Testimonials").then((mod) => mod.Testimonials),
//   {
//     loading: () => <Loading />
//   }
// );
const Majors = dynamic(() => import("./Majors").then((mod) => mod.Majors), {
  loading: () => <Loading />
});

const Circulars = dynamic(
  () => import("./Circulars").then((mod) => mod.Circulars),
  {
    loading: () => <Loading />
  }
);

export const Home = () => {
  const [home_content, setHomeContent] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.6 // Kích hoạt khi 50% của phần tử hiển thị trong viewport
  });
  useEffect(() => {
    const getHomeContent = async () => {
      try {
        const res = await fetch(`/api/content-page/?type=trang-chu`, {
          next: { revalidate: 3 }
        });
        if (!res.ok) {
          throw new Error(`Posts fetch failed with status: ${res.statusText}`);
        }
        const data = await res.json();
        setHomeContent(data?.posts[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getHomeContent();
  }, []);

  useEffect(() => {
    // Kiểm tra xem trongView và isVisible đều là true
    if (inView && !isVisible) {
      setIsVisible(true); // Nếu không thì hiển thị
    }
  }, [inView, isVisible]);
  return (
    <>
      <Banner imagesBanner={home_content?.acf?.anh_banner} />
      <Introduce introduce={home_content?.acf?.section_2} />
      <Box ref={ref}>
        {isVisible && (
          <>
            <Benefit />
            <CountdownSection
              title={home_content?.acf?.info_lkg?.left_column?.title || ""}
              sub_title={home_content?.acf?.info_lkg?.left_column?.desc || ""}
            />
            <Slogan slogan={home_content?.acf?.slogan} />
            <Majors majors={home_content?.acf?.nganh_dao_tao} />
            <Programs cms={home_content?.acf?.section_obj} />
            {/* <Testimonials
              testimonials={home_content?.acf?.danh_gia_cua_hoc_vien}
            /> */}
            <Event />
            <Advertisement advertisement={home_content?.acf?.quang_cao} />
            <Circulars circulars={home_content?.acf?.thong_tu} />
          </>
        )}
      </Box>
    </>
  );
};
