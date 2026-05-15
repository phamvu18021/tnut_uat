"use client";

import { useEffect, Suspense } from "react";
import { usePathname } from "next/navigation";

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

import { Skeleton, Box } from "@chakra-ui/react";
import { useRef, useState } from "react";

interface FormProps {
  url: string;
  uuid: string;
  divId: string;
  divClass: string;
}


export const FormSamInner: React.FC<FormProps> = ({
  url,
  uuid,
  divId,
  divClass
}) => {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (url && containerRef.current) {
      const container = containerRef.current;
      
      if (!container.querySelector("iframe")) {
        const trackingQuery = getTrackingParamsFromSession();
        const fullUrl = trackingQuery ? `${url}?${trackingQuery}` : url;
        const iframe = document.createElement("iframe");
        iframe.setAttribute("src", fullUrl);
        iframe.style.width = "100%";
        iframe.style.minHeight = "420px";
        iframe.classList.add(divClass);
        
        iframe.onload = () => {
          setIsLoaded(true);
        };
        
        container.appendChild(iframe);
      } else {
        setIsLoaded(true);
      }
    }
  }, [url, uuid, divClass, pathname]);

  return (
    <Box w="100%">
      {!isLoaded && (
        <Skeleton height="420px" width="100%" />
      )}
      <div 
        ref={containerRef} 
        id={divId} 
        className={divClass} 
        style={{ display: isLoaded ? "block" : "none" }}
      ></div>
    </Box>
  );
};


export const FormSam: React.FC<FormProps> = (props) => {
  return (
    <Suspense fallback={null}>
      <FormSamInner {...props} />
    </Suspense>
  );
};