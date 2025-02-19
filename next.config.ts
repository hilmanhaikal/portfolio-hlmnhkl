import { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["hlmnhkl.netlify.app"], // Fix: Remove protocol (https://)
  },
  async headers() {
    return [
      {
        source: "/sitemap.xml",
        headers: [
          {
            key: "Content-Type",
            value: "application/xml", // Explicitly set XML content type
          },
          {
            key: "Cache-Control",
            value: "public, max-age=86400, must-revalidate", // Cache for 1 day
          },
        ],
      },
    ];
  },
};

export default nextConfig;
