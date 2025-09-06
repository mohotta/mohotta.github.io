/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable standalone output for Docker deployment
  output: 'standalone',
  
  // Disable type checking during build for faster deployment
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Note: Root page routing is handled by dynamic page detection
  
  // Set build-time environment variable
  env: {
    APP_MODE: 'portfolio',
  },
  // Generate static exports for GitHub Pages compatibility if needed
  // trailingSlash: true,
  // images: {
  //   unoptimized: true
  // }
}

module.exports = nextConfig