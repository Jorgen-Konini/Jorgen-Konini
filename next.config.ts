import type { NextConfig } from "next";

// NEXT_PUBLIC_BASE_PATH is set by the GitHub Pages workflow ("/Jorgen-Konini")
// so the exported site works when served from a project-page subpath.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
};

export default nextConfig;
