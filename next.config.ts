import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export to ./out for Firebase Hosting (no server required)
  output: "export",
  // The default image loader needs a server; images are pre-sized in /public
  images: { unoptimized: true },
  experimental: {
    agentFeedback: true,
  },
  // Cache Components / PPR need a server and are incompatible with output: "export"
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
