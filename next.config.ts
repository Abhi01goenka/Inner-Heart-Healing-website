import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'assets.aceternity.com', "api.microlink.io", "api.microlink.io"]
  }
};

export default nextConfig;
