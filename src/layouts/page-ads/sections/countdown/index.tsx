"use client";

import { CountdownSection } from "@/features/home/CountdownSection";
import { Box } from "@chakra-ui/react";

export interface CountdownSectionProps {
  title?: string;
  sub_title?: string;
}

export const CountdownSectionPageAds = ({
  title,
  sub_title
}: CountdownSectionProps) => {
    
  return <Box mt={10}><CountdownSection title={title} sub_title={sub_title} /></Box>
};

