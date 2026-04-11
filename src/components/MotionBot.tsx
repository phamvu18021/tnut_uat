"use client";

import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export const MotionBot = ({ 
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
        initial={{
          position: "relative",
          top: -100,
          opacity: 0
        }}
        animate={{
          position: "relative",
          top: 0,
          opacity: 1
        }}
        transition={{ duration: 1, delay: 2 }}
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
        top: -100,
        opacity: 0
      }}
      animate={
        shouldAnimate
          ? {
              position: "relative",
              top: 0,
              opacity: 1
            }
          : {
              position: "relative",
              top: -100,
              opacity: 0
            }
      }
      transition={{ duration: 1, delay: 1 }}
    >
      {children}
    </motion.div>
  );
};

