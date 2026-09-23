/** @type {import('next').NextConfig} */
const nextConfig = {
  // Security headers (SEC-001, SEC-002 fix)
  async headers() {
    const isDev = process.env.NODE_ENV === 'development';

    // Next.js injects inline scripts for hydration in BOTH dev and production
    // Dev: also needs 'unsafe-eval' for React debugging + WebSocket for HMR
    // Clarity: allow all clarity.ms subdomains (scripts, www, b, p, etc.)
    // Other directives remain strict
    const csp = [
      "default-src 'self'",
      `script-src 'self' 'unsafe-inline' ${isDev ? "'unsafe-eval'" : ""} https://*.clarity.ms`,
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https:",
      "font-src 'self' data:",
      // Dev: allow WebSocket for HMR (ws://localhost:3000)
      // Clarity: allow all clarity.ms subdomains for connect
      `connect-src 'self' ${isDev ? "ws://localhost:3000" : ""} https://*.clarity.ms`,
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