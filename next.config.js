/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_URL: "https://infin.mydevfactory.com/"
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


