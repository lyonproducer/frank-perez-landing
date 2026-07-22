import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
  },
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
