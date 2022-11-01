/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    images: {
      layoutRaw: true,
      allowFutureImage: true
    }
  },
  images: {
    domains: ['cdn.sanity.io', 'instagram.fgnm3-1.fna.fbcdn.net'],
  },
}

module.exports = nextConfig
