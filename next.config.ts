import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{
      hostname: 'avatars.githubusercontent.com',
    }],
  },
  transpilePackages: ['vervalpd-node'],
  poweredByHeader: false,
  experimental: {
    serverMinification: true,
    forceSwcTransforms: true,
    turbopackMinify: true,
    optimizeCss: true,
    useCache: true,
    slowModuleDetection: {
      buildTimeThresholdMs: 360,
    },
    webpackMemoryOptimizations: true,
    serverSourceMaps: false,
    optimizePackageImports: ['vervalpd-node', 'arktype'],
  }
};

export default nextConfig;
