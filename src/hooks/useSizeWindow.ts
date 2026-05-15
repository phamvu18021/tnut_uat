"use client";

import { useEffect, useState } from "react";

export const useSize = () => {
  const hasWindow = typeof window !== "undefined";
  const [size, setSize] = useState({
    width: hasWindow ? window.innerWidth : 0,
  });

  useEffect(() => {
    if (!hasWindow) return;

    let timeoutId: NodeJS.Timeout | null = null;
    const handleResize = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setSize({ width: window.innerWidth });
      }, 150); // Debounce resize to avoid excessive re-renders
    };

    window.addEventListener("resize", handleResize);
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, [hasWindow]);

  return { size };
};
