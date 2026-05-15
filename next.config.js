/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nologin.tnut.vn",
        pathname: "/**"
      }
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [320, 375, 414, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 24, 32, 48, 64, 96, 128, 256, 384],
    qualities: [25, 50, 75, 85, 90, 100],
    minimumCacheTTL: 60 * 60 * 24
  },

  compress: true,
  poweredByHeader: false,
  generateEtags: true,

  logging: {
    fetches: {
      fullUrl: true
    }
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Link",
            value:
              '<https://nologin.tnut.vn>; rel="preconnect", <https://nologin.tnut.vn>; rel="dns-prefetch", <https://www.googletagmanager.com>; rel="preconnect"'
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on"
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff"
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN"
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin"
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()"
          }
        ]
      }
    ];
  },

  experimental: {
    optimizePackageImports: [
      "@chakra-ui/react",
      "framer-motion",
      "lucide-react",
      "react-icons",
      "swiper"
    ]
  },

  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? {
            exclude: ["error", "warn"]
          }
        : false
  }
};

module.exports = nextConfig;
