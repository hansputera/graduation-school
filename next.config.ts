import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{
      hostname: 'avatars.githubusercontent.com',
    }],
  },
  transpilePackages: ['vervalpd-node'],
};

export default nextConfig;
