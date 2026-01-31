import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/veridian-gemoni',
  assetPrefix: '/veridian-gemoni',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
