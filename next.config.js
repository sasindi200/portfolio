/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Set basePath if deploying to https://username.github.io/repo-name
  // basePath: '/sasindi-portfolio',
  // assetPrefix: '/sasindi-portfolio/',
};

module.exports = nextConfig;
