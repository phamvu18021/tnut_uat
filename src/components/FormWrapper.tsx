/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState, useRef } from "react";
import {
  Box,
  Heading,
  Skeleton,
  SkeletonText,
  Stack,
  Text
} from "@chakra-ui/react";
import { FormGetFly } from "./FormGetFly";
import { FormSam } from "./FormSam";
import { FormGoogle } from "./FormGoogle";

interface FormData {
  type: "form-getfly" | "form-sam" | "form-google" | "unknown";
  url: string;
  uuid: string;
  divId: string;
  divClass: string;
}

let cachedFormData: FormData | null = null;
let formFetchPromise: Promise<FormData> | null = null;
let isGlobalLoadTriggered = false;
let globalLoadListeners: (() => void)[] = [];


const triggerGlobalLoad = () => {
  if (isGlobalLoadTriggered) return;
  isGlobalLoadTriggered = true;
  globalLoadListeners.forEach((listener) => listener());
  globalLoadListeners = []; // Clear listeners after firing
};

export const FormWrapper = ({
  title,
  color,
  type = "form-main",
  bg = "true"
}: {
  title?: string;
  color?: string;
  type?: "form-main" | "form-poup";
  bg?: "true" | "false";
}) => {
  const [shouldLoad, setShouldLoad] = useState(isGlobalLoadTriggered);
  const [formData, setFormData] = useState<FormData | null>(cachedFormData);
  const [isLoading, setIsLoading] = useState(!cachedFormData);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for Lazy Loading
  useEffect(() => {
    if (isGlobalLoadTriggered) return;

    const listener = () => setShouldLoad(true);
    globalLoadListeners.push(listener);

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          triggerGlobalLoad();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      globalLoadListeners = globalLoadListeners.filter((l) => l !== listener);
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  // Fetch Logic
  useEffect(() => {
    if (!shouldLoad) return;

    if (cachedFormData) {
      setFormData(cachedFormData);
      setIsLoading(false);
      return;
    }

    const fetchFormData = async () => {
      const key = `form-data-form-main`;
      const cacheExpireMs = 1000 * 60 * 60 * 6;

      try {
        const cached = localStorage.getItem(key);
        if (cached) {
          const parsed = JSON.parse(cached);
          if (parsed.expires > Date.now()) {
            cachedFormData = parsed.data;
            setFormData(parsed.data);
            setIsLoading(false);
            return;
          }
        }

        if (!formFetchPromise) {
          formFetchPromise = fetch(`/api/gen-form/?type=form-main`).then(async (res) => {
            if (!res.ok) throw new Error(`Form fetch failed: ${res.statusText}`);
            const data = await res.json();
            localStorage.setItem(
              key,
              JSON.stringify({
                data,
                expires: Date.now() + cacheExpireMs
              })
            );
            return data;
          });
        }

        const data = await formFetchPromise;
        cachedFormData = data;
        setFormData(data);
      } catch (error) {
        console.error("Error fetching form data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFormData();
  }, [shouldLoad]);

  if (!shouldLoad || isLoading) {
    return (
      <Box ref={containerRef} w="100%">
        <Skeleton height="38vh">
          <Box height="38vh"></Box>
        </Skeleton>
      </Box>
    );
  }

  if (!formData) {
    return <Heading color="red.500">Unable to load form</Heading>;
  }

  return (
    <>
      {bg == "true" && (
        <Box
          aria-label="Consultation Form"
          border={"2px solid #FE8C00"}
          rounded={"md"}
        >
          <Box
            px={4}
            py={4}
            roundedTop={"md"}
            bgGradient={"linear-gradient(rgb(255, 234, 64), rgb(254, 140, 0))"}
          >
            <Box display={"flex"} justifyContent={"center"}>
              <Text
                width="380px"
                fontSize="24px"
                fontWeight={600}
                lineHeight="1.2"
                align="center"
                mb={2}
                color="#333333"
                textShadow={"4xl"}
              >
                ĐĂNG KÝ NGAY ĐỂ ĐƯỢC TƯ VẤN MIỄN PHÍ
              </Text>
            </Box>

            <Text
              align="center"
              fontWeight={600}
              fontSize="18px"
              lineHeight="1.2"
              color="white"
              textShadow={"xl"}
            >
              Đăng ký trước thời gian kết thúc hoặc số lượng học viên đạt giới
              hạn
            </Text>
          </Box>
          <Box px={4} pt={4}>
            {title && (
              <Heading
                as="h2"
                size="lg"
                textAlign="center"
                color={color}
                py="10px"
              >
                {title}
              </Heading>
            )}
            {formData.type === "form-getfly" && <FormGetFly {...formData} />}
            {formData.type === "form-sam" && <FormSam {...formData} />}
            {formData.type === "form-google" && (
              <FormGoogle url={formData.url} divId={formData.divId} />
            )}
          </Box>
        </Box>
      )}
      {bg == "false" && (
        <Box px={4} pt={4}>
          {title && (
            <Heading
              as="h2"
              size="lg"
              textAlign="center"
              color={color}
              py="10px"
            >
              {title}
            </Heading>
          )}
          {formData.type === "form-getfly" && <FormGetFly {...formData} />}
          {formData.type === "form-sam" && <FormSam {...formData} />}
          {formData.type === "form-google" && (
            <FormGoogle url={formData.url} divId={formData.divId} />
          )}
        </Box>
      )}
    </>
  );
};
