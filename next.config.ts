import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-DNS-Prefetch-Control",    value: "on" },
  { key: "X-Frame-Options",           value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options",    value: "nosniff" },
  { key: "Referrer-Policy",           value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy",        value: "camera=(), microphone=(self), geolocation=()" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // 'unsafe-eval' is required by the Razorpay checkout and Twilio Voice SDKs.
      // 'unsafe-inline' is required by the theme bootstrap script and the GA snippet.
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://checkout.razorpay.com https://api.ringreply.in https://www.googletagmanager.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https:",
      "font-src 'self'",
      // api.ringreply.in: REST + Twilio token; Razorpay: checkout + lumberjack analytics;
      // Twilio: media/signaling; Google: Analytics beacons.
      "connect-src 'self' https://api.ringreply.in https://*.razorpay.com https://*.twilio.com wss://*.twilio.com https://www.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com",
      "frame-src https://api.razorpay.com https://checkout.razorpay.com",
      "media-src 'self' mediastream: blob:",
      // Hardening: block plugins, lock down <base>, restrict form posts & framing, force HTTPS sub-resources.
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'self'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
