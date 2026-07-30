import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const root = path.dirname(fileURLToPath(import.meta.url));

const usePolling =
  process.env.WATCHPACK_POLLING === "true" ||
  process.env.CHOKIDAR_USEPOLLING === "true";

const nextConfig: NextConfig = {
  // Avoid picking a parent folder when another lockfile exists above this repo.
  outputFileTracingRoot: root,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        source: "/video/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, stale-while-revalidate=86400",
          },
          { key: "Accept-Ranges", value: "bytes" },
        ],
      },
    ];
  },
  webpack: (config, { dev }) => {
    if (dev && usePolling) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
        ignored: ["**/node_modules/**", "**/.git/**"],
      };
    }
    return config;
  },
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 92],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
