import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
