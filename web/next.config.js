const { withPlausibleProxy } = require('next-plausible');

/** @type {import('next').NextConfig} */
const moduleExports = withPlausibleProxy()({
  swcMinify: true,
  reactStrictMode: true,
  // experimental: {
  //   newNextLinkBehavior: true,
  //   scrollRestoration: true,
  //   legacyBrowsers: false,
  //   runtime: 'nodejs'
  // },
  images: {
    domains: ['xnfts-dev.s3.us-west-2.amazonaws.com', 'xnfts.s3.us-west-2.amazonaws.com'],
    formats: ['image/avif', 'image/webp']
  },
  typescript: {
    ignoreBuildErrors: true
  }
});

module.exports = moduleExports;
