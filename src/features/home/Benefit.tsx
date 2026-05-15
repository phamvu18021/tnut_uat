"use client";

import { useEffect, useState } from "react";
import { BenefitUI } from "./BenefitUI";

export const Benefit = ({ homeContent }: { homeContent?: any | null }) => {
  const [data, setData] = useState<any>(homeContent);

  useEffect(() => {
    if (homeContent) {
      setData(homeContent);
      return;
    }

    const fetchData = async () => {
      try {
        const res = await fetch("/api/content-page/?type=trang-chu");
        if (res.ok) {
          const result = await res.json();
          setData(result?.posts?.[0]);
        }
      } catch (error) {
        console.error("Error fetching benefit data:", error);
      }
    };

    if (!data) {
      fetchData();
    }
  }, [homeContent, data]);

  return <BenefitUI homeContent={data} />;
};


