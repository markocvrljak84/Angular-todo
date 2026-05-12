import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const root = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // Avoid picking a parent folder when another lockfile exists above this repo.
  outputFileTracingRoot: root,
};

export default nextConfig;
