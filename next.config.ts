import { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async rewrites() {
    return [{ source: "/", destination: "/2026" }];
  },
};

export default nextConfig;
