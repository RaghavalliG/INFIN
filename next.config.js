/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_URL: "https://128.199.30.38:5000/"
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: 'https://infin.mydevfactory.com/:path*',
  //     },
  //   ]
  // },
}

module.exports = nextConfig


