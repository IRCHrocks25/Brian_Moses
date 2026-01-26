/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // Enable image optimization
  images: {
    unoptimized: false,
  },
}

module.exports = nextConfig

