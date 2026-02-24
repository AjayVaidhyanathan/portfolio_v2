import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Prevent MIME-type sniffing
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          // Prevent clickjacking
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          // Force HTTPS for 1 year
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          // Control referrer information
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // Disable browser features not needed for a static portfolio
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()",
          },
          // Content Security Policy
          // - default-src 'self': only load resources from same origin
          // - script-src: allow self + framer-motion inline scripts
          // - style-src: allow self + Google Fonts + inline styles needed by Tailwind/framer
          // - font-src: allow Google Fonts CDN
          // - img-src: allow self + data URIs
          // - frame-src: allow Figma embeds (used in some case studies)
          // - connect-src: allow self only (no API calls)
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",  // unsafe-eval needed by Next.js dev; consider removing for prod-only if desired
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: blob:",
              "frame-src https://www.figma.com",
              "connect-src 'self'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join("; "),
          },
          // Prevent XSS reflected attacks in older browsers
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
