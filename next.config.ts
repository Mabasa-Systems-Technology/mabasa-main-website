import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  // Reserve text-and-data-mining rights (W3C TDMRep). Search indexing is unaffected.
  { key: "tdm-reservation", value: "1" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Never ship original source to browsers.
  productionBrowserSourceMaps: false,
  turbopack: { root: __dirname },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com", pathname: "/photo-*" }],
  },
  async redirects() {
    const moved: Array<[string, string]> = [
      ["technology-consulting", "strategy-and-advisory"],
      ["systems-integration", "technology-transformation"],
      ["cloud-and-infrastructure", "technology-transformation"],
      ["ai-and-automation", "artificial-intelligence-and-data"],
      ["data-engineering-and-analytics", "artificial-intelligence-and-data"],
      ["custom-software-development", "engineering-and-implementation"],
    ];
    return moved.map(([from, to]) => ({
      source: `/services/${from}`,
      destination: `/services/${to}`,
      permanent: true,
    }));
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
