/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: false,
  env: {
    API_KEY: process.env.API_KEY,
  },
};

module.exports = nextConfig;
