"use client";

import { useEffect } from "react";
import { useRouter } from "next/router";

// Hàm đọc các trường từ sessionStorage
const getTrackingParamsFromSession = (): string => {
  const keys = [
    "utm_source",
    "utm_campaign",
    "utm_medium",
    "utm_content",
    "utm_term",
    "utm_referrer",
    "utm_id"
  ];

  const saved = sessionStorage.getItem("utm_data");
  if (saved) {
    const storedData = JSON.parse(saved);
    const queryParams = new URLSearchParams();

    keys.forEach((key) => {
      if (storedData[key]) {
        queryParams.set(key, storedData[key]);
      }
    });
    return queryParams.toString();
  }

  return "";
};

// Hàm tạo iframe
const createIframeForSam = (
  url: string,
  uuid: string,
  divClass: string
): HTMLIFrameElement => {
  const trackingQuery = getTrackingParamsFromSession();
  const fullUrl = trackingQuery ? `${url}?${trackingQuery}` : url;

  const iframe = document.createElement("iframe");
  iframe.setAttribute("src", fullUrl);
  iframe.style.width = "100%";
  iframe.style.minHeight = "420px";
  iframe.classList.add(divClass);
  return iframe;
};

// Hàm gắn iframe vào container
const attachIframeForSam = (
  url: string,
  uuid: string,
  divId: string,
  divClass: string
): void => {
  const containers = document.getElementsByClassName(divClass);
  Array.from(containers).forEach((container) => {
    if (!container.querySelector("iframe")) {
      const iframe = createIframeForSam(url, uuid, divClass);
      container.appendChild(iframe);
    }
  });
};

interface FormProps {
  url: string;
  uuid: string;
  divId: string;
  divClass: string;
}

export const FormSam: React.FC<FormProps> = ({
  url,
  uuid,
  divId,
  divClass
}) => {
  const router = useRouter();

  useEffect(() => {
    if (url && divClass) {
      // Xóa iframe cũ để render lại với URL mới nhất khi UTM thay đổi
      const container = document.getElementById(divId);
      if (container) {
        container.innerHTML = "";
      }
      attachIframeForSam(url, uuid, divId, divClass);
    }
  }, [url, uuid, divId, divClass, router.asPath]);

  return <div id={divId} className={divClass}></div>;
};
