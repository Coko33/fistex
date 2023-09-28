/** @type {import('next').NextConfig} */

/*
Removing the issuer option (i.e. issuer: /\.[jt]sx?$/,) resolved this problem for me (we're only using svgr for all svg files, as per OP).
*/
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = nextConfig;
