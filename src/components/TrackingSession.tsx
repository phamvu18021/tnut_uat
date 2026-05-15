"use client";
import { useEffect, Suspense, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const utmKeys = [
  "utm_source",
  "utm_campaign",
  "utm_medium",
  "utm_content",
  "utm_term",
  "utm_referrer",
  "utm_id"
];

const TrackingSessionInner = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const processingRef = useRef(false);

  useEffect(() => {
    const handleUTM = () => {
      if (typeof window === "undefined" || processingRef.current) return;

      processingRef.current = true;

      try {
        const currentParams = new URLSearchParams(window.location.search);
        let hasNewUTM = false;
        const utmDataFromUrl: Record<string, string> = {};

        // 1. Lấy UTM từ URL hiện tại
        utmKeys.forEach((key) => {
          const value = currentParams.get(key);
          if (value) {
            hasNewUTM = true;
            utmDataFromUrl[key] = value;
          }
        });

        // 2. Kiểm tra referrer và cập nhật session storage
        const saved = sessionStorage.getItem("utm_data");
        let savedData = saved ? JSON.parse(saved) : null;

        if (hasNewUTM) {
          // Trường hợp URL có UTM mới -> Ghi đè (Last Click)
          if (document.referrer && !document.referrer.includes(window.location.host)) {
            utmDataFromUrl["utm_referrer"] = document.referrer;
          } else if (savedData?.utm_referrer) {
            // Giữ lại referrer cũ nếu đây là navigation nội bộ nhưng có UTM mới (hiếm gặp nhưng có thể)
            utmDataFromUrl["utm_referrer"] = savedData.utm_referrer;
          }
          sessionStorage.setItem("utm_data", JSON.stringify(utmDataFromUrl));
          savedData = utmDataFromUrl;
        } else if (!savedData) {
          // Lần đầu vào web mà không có UTM -> Lưu referrer nếu có
          if (document.referrer && !document.referrer.includes(window.location.host)) {
            const firstData = { utm_referrer: document.referrer };
            sessionStorage.setItem("utm_data", JSON.stringify(firstData));
            savedData = firstData;
          }
        }

        // 3. Đồng bộ ngược lại URL nếu URL đang thiếu UTM nhưng session có lưu
        if (savedData) {
          let changed = false;
          utmKeys.forEach((key) => {
            if (key !== "utm_referrer" && !currentParams.has(key) && savedData[key]) {
              currentParams.set(key, savedData[key]);
              changed = true;
            }
          });

          if (changed) {
            const newUrl = `${window.location.pathname}?${currentParams.toString()}`;
            window.history.replaceState({}, "", newUrl);
          }
        }
      } catch (e) {
        console.error("Error in handleUTM:", e);
      } finally {
        // Reset flag sau một khoảng thời gian ngắn để tránh loop nếu replaceState gây trigger useEffect
        setTimeout(() => {
          processingRef.current = false;
        }, 100);
      }
    };

    handleUTM();
  }, [pathname, searchParams]);

  return null;
};

export const TrackingSession = () => {
  return (
    <Suspense fallback={null}>
      <TrackingSessionInner />
    </Suspense>
  );
};
