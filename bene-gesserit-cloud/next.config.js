/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Anthropic SDK and libsql client are server-only
    serverComponentsExternalPackages: ["@anthropic-ai/sdk", "@libsql/client"],
  },
};

module.exports = nextConfig;
