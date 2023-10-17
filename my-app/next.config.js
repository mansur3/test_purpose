/** @type {import('next').NextConfig} */

const nextConfig = {
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 1,
  },
  staticPageGenerationTimeout: 120,

  reactStrictMode: false,

  env: {
    BASE_URL: "http://127.0.0.1:2233",
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
      },
    ],
  },

  output: "standalone",
};

module.exports = nextConfig;
