/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
   basePath: '/Portfolio',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  }
};

module.exports = nextConfig;

