import type { NextConfig } from "next";

/** Project site: https://ypereverzev.github.io/win.studio/ */
const pagesBase = process.env.GITHUB_PAGES === "true" ? "/win.studio" : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  ...(pagesBase ? { basePath: pagesBase, assetPrefix: pagesBase } : {}),
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
