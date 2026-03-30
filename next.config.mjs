/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for catching subtle bugs early
  reactStrictMode: true,

  // Optimise images from any domain (essential for your Real Estate/E-commerce apps)
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    // Modern formats for smaller payloads
    formats: ["image/avif", "image/webp"],
  },

  // Allow framer-motion and other ESM packages to be compiled
  transpilePackages: ["framer-motion"],

  // Strict Content Security Policy headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
