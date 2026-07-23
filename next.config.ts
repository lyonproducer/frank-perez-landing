import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
  },
  outputFileTracingRoot: process.cwd(),
  images: {
    qualities: [78, 85, 90, 95],
  },
};

export default nextConfig;
