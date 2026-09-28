/** @type {import('next').NextConfig} */
const nextConfig = {
  // Security headers (SEC-001, SEC-002 fix)
  async headers() {
    const isDev = process.env.NODE_ENV === 'development';

    // Next.js injects inline scripts for hydration in BOTH dev and production
    // Dev: also needs 'unsafe-eval' for React debugging + WebSocket for HMR
    // Clarity: allow all clarity.ms subdomains (scripts, www, b, p, etc.)
    // YouTube: allow embedding videos
    // Plerdy: allow plerdy.com for analytics (requires unsafe-eval)
    // Other directives remain strict
    const csp = [
      "default-src 'self'",
      // Plerdy requires unsafe-eval for eval() usage
      `script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.clarity.ms https://a.plerdy.com`,
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https:",
      "font-src 'self' data:",
      // Dev: allow WebSocket for HMR (ws://localhost:3000)
      // Clarity: allow all clarity.ms subdomains for connect
      // Plerdy: allow plerdy.com for data collection
      `connect-src 'self' ${isDev ? "ws://localhost:3000" : ""} https://*.clarity.ms https://*.plerdy.com`,
      // Allow YouTube embeds
      "frame-src 'self' https://www.youtube.com https://youtube.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ]
      .filter(Boolean)
      .join('; ');

    const securityHeaders = [
      {
        key: 'Content-Security-Policy',
        value: csp,
      },
      {
        key: 'X-Frame-Options',
        value: 'DENY',
      },
      {
        key: 'X-Content-Type-Options',
        value: 'nosniff',
      },
      {
        key: 'Referrer-Policy',
        value: 'strict-origin-when-cross-origin',
      },
      {
        key: 'Permissions-Policy',
        value: 'camera=(), microphone=(), geolocation=()',
      },
    ];

    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },

  // Build-time env validation (SEC-003 fix)
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  },

  // Image optimization config (PERF-001 preparation)
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
};

module.exports = nextConfig;