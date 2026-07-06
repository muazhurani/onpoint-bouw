import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hide the floating Next.js "N" dev badge; it is dev-only and confuses design review.
  devIndicators: false,
  async redirects() {
    return [
      {
        source: "/:locale(nl|en)/projects/floor-heating-marble",
        destination: "/:locale/projects/rear-extension",
        permanent: true,
      },
      {
        source: "/:locale(nl|en)/projects/toilet-renovation",
        destination: "/:locale/projects/rear-extension",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
