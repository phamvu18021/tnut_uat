"use client";

import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export const MotionTop = ({ 
  children, 
  immediate = false,
  useScrollTrigger = false
}: { 
  children: ReactNode;
  immediate?: boolean;
  useScrollTrigger?: boolean;
}) => {
  const { ref, inView } = useInView({
    threshold: immediate ? 0 : 0.2,
    triggerOnce: true
  });
  const [shouldAnimate, setShouldAnimate] = useState(immediate && useScrollTrigger);

  useEffect(() => {
    if (useScrollTrigger) {
      if (immediate) {
        setShouldAnimate(true);
      }
    }
  }, [immediate, useScrollTrigger]);

  useEffect(() => {
    if (useScrollTrigger && inView) {
      setShouldAnimate(true);
    }
  }, [inView, useScrollTrigger]);

  if (!useScrollTrigger) {
    return (
      <motion.div
        initial={{ opacity: 1, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{
        position: "relative",
        bottom: 500,
        top: 100,
        opacity: 0
      }}
      animate={
        shouldAnimate
          ? {
              position: "relative",
              bottom: 0,
              top: 0,
              opacity: 1
            }
          : {
              position: "relative",
              bottom: 500,
              top: 100,
              opacity: 0
            }
      }
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};
