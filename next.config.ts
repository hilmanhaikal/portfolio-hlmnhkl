import { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["https://hlmnhkl.netlify.app/"], // Allow optimized images
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // Improves caching
          },
        ],
      },
    ];
  },
};

export default nextConfig;
