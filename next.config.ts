import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Team is now a section of About.
      { source: "/team", destination: "/about#team", permanent: false },
    ];
  },
};

export default nextConfig;
