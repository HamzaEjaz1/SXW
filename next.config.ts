import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  turbopack: {
    root: path.resolve(process.cwd()),
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
