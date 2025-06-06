import { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  eslint: {
    // https://nextjs.org/docs/app/api-reference/next-config-js/eslint
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
