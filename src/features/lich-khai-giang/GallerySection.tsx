"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Box, Text, Container, VStack } from "@chakra-ui/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface GalleryImage {
  image: string;
}

interface GallerySectionProps {
  images?: GalleryImage[];
  section_title: string;
}

export const GallerySection = ({
  images,
  section_title
}: GallerySectionProps) => {
  const defaultImages: GalleryImage[] = [
    {
      image: "/about3.webp"
    },
    {
      image: "/about3.webp"
    },
    {
      image: "/about3.webp"
    },
    {
      image: "/about3.webp"
    },
    {
      image: "/about3.webp"
    },
    {
      image: "/about3.webp"
    }
  ];

  const galleryImages = images || defaultImages;
  console.log(images);
  return (
    <Box bg="gray.50" py={{ base: 12, lg: 16 }}>
      <Container maxW="7xl">
        <VStack spacing={8}>
          <Text
            fontSize={{ base: "25px", md: "30px", lg: "40px" }}
            color="blue.800"
            fontWeight={600}
            textAlign="center"
          >
            {section_title || "HÌNH ẢNH LỄ KHAI GIẢNG GẦN NHẤT"}
          </Text>

          <Box position="relative" w="full">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                nextEl: ".swiper-button-next-gallery",
                prevEl: ".swiper-button-prev-gallery"
              }}
              pagination={{
                el: ".swiper-pagination-gallery",
                clickable: true,
                bulletClass: "swiper-pagination-bullet-gallery",
                bulletActiveClass: "swiper-pagination-bullet-active-gallery"
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2
                },
                1024: {
                  slidesPerView: 3
                }
              }}
              className="gallery-swiper"
            >
              {galleryImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <Box
                    bg="white"
                    borderRadius="lg"
                    overflow="hidden"
                    boxShadow="md"
                    transition="all 0.3s ease"
                    _hover={{
                      transform: "translateY(-4px)",
                      boxShadow: "lg"
                    }}
                    h="full"
                    my={2}
                  >
                    <Box position="relative" w="full" h="300px">
                      <Image
                        src={image.image}
                        alt={"image"}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </Box>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>

            <Box
              className="swiper-button-prev-gallery"
              position="absolute"
              left="-60px"
              top="50%"
              transform="translateY(-50%)"
              zIndex={10}
              w="48px"
              h="48px"
              bg="blue.600"
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
              color="white"
              cursor="pointer"
              _hover={{ bg: "blue.700" }}
              transition="all 0.2s"
              sx={{ display: { base: "none", xl: "flex" } }}
            >
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </Box>

            <Box
              className="swiper-button-next-gallery"
              position="absolute"
              right="-60px"
              top="50%"
              transform="translateY(-50%)"
              zIndex={10}
              w="48px"
              h="48px"
              bg="blue.600"
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
              color="white"
              cursor="pointer"
              _hover={{ bg: "blue.700" }}
              transition="all 0.2s"
              sx={{ display: { base: "none", xl: "flex" } }}
            >
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Box>

            <Box
              className="swiper-pagination-gallery"
              display="flex"
              justifyContent="center"
              mt={6}
              gap={2}
            />
          </Box>
        </VStack>
      </Container>

      <style jsx global>{`
        .swiper-pagination-bullet-gallery {
          width: 8px;
          height: 8px;
          background-color: #3182ce;
          border-radius: 4px;
          opacity: 0.5;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active-gallery {
          opacity: 1;
          width: 24px;
        }
      `}</style>
    </Box>
  );
};
