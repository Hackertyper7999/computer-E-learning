/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['placeholder.com'],
    unoptimized: true,
  },
  // Add environment variables that should be available to the client
  env: {
    USE_MOCK_DB: process.env.USE_MOCK_DB || "true",
  },
  // Configure webpack to handle SQLite in serverless environments
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Exclude better-sqlite3 from server bundle
      config.externals.push('better-sqlite3');
    }
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
