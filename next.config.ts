import type { NextConfig } from "next";

const ONE_MONTH = "public, max-age=2592000, stale-while-revalidate=86400";
const ONE_DAY = "public, max-age=86400, stale-while-revalidate=604800";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2592000,
  },
  async headers() {
    // Long caching only in production, so edits show up straight away while developing.
    if (process.env.NODE_ENV !== "production") return [];
    return [
      { source: "/images/:path*", headers: [{ key: "Cache-Control", value: ONE_MONTH }] },
      { source: "/gallery/:path*", headers: [{ key: "Cache-Control", value: ONE_MONTH }] },
      { source: "/css/:path*", headers: [{ key: "Cache-Control", value: ONE_DAY }] },
      { source: "/js/:path*", headers: [{ key: "Cache-Control", value: ONE_DAY }] },
    ];
  },
  experimental: {
    agentUpgrade: "security",
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      { source: "/product", destination: "/overhead-conveyors", permanent: true },
    ];
  },
};

export default nextConfig;
