/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // Enable image optimization
  images: {
    unoptimized: false,
    // Allow images from Railway domain
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'brianmoses-production.up.railway.app',
      },
      {
        protocol: 'https',
        hostname: '*.up.railway.app',
      },
    ],
  },
  // Ensure proper headers for Railway deployment
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig

