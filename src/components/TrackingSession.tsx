"use client";
import { useEffect } from "react";
import { useRouter } from "next/router";

const utmKeys = [
  "utm_source",
  "utm_campaign",
  "utm_medium",
  "utm_content",
  "utm_term",
  "utm_referrer",
  "utm_id"
];

export const TrackingSession = () => {
  const router = useRouter();

  useEffect(() => {
    const handleUTM = () => {
      // Sử dụng setTimeout 0ms để đảm bảo trình duyệt đã cập nhật window.location.search sau khi chuyển trang
      setTimeout(() => {
        if (typeof window === "undefined") return;

        const params = new URLSearchParams(window.location.search);
        const utmData: Record<string, string> = {};
        let hasUTM = false;

        // 1. Lấy UTM từ URL hiện tại
        utmKeys.forEach((key) => {
          const value = params.get(key);
          if (value) {
            hasUTM = true;
            utmData[key] = value;
          }
        });

        // Kiểm tra referrer
        if (document.referrer) {
          const saved = sessionStorage.getItem("utm_data");
          const savedData = saved ? JSON.parse(saved) : {};
          if (document.referrer !== savedData.utm_referrer) {
            hasUTM = true;
            utmData["utm_referrer"] = document.referrer;
          }
        }

        // Lưu vào session (Ghi đè hoàn toàn - Last Click)
        if (hasUTM) {
          sessionStorage.setItem("utm_data", JSON.stringify(utmData));
        }

        // 2. Đồng bộ ngược lại URL nếu URL đang thiếu
        const saved = sessionStorage.getItem("utm_data");
        if (saved) {
          const storedData = JSON.parse(saved);
          const currentParams = new URLSearchParams(window.location.search);
          let changed = false;

          utmKeys.forEach((key) => {
            if (key !== "utm_referrer" && !currentParams.has(key) && storedData[key]) {
              currentParams.set(key, storedData[key]);
              changed = true;
            }
          });

          if (changed) {
            const newUrl = `${window.location.pathname}?${currentParams.toString()}`;
            window.history.replaceState({}, "", newUrl);
          }
        }
      }, 0);
    };

    handleUTM();
    router.events.on("routeChangeComplete", handleUTM);
    return () => router.events.off("routeChangeComplete", handleUTM);
  }, [router.asPath]); // Lắng nghe asPath để đảm bảo cập nhật ngay khi đổi URL

  return null;
};
