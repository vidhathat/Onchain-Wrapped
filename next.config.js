/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['nft-cdn.alchemy.com', 'ipfs.io', 'yet-another-domain.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

}

module.exports = nextConfig
