/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_URL: "https://infin.mydevfactory.com:8443/"
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: 'https://infin.mydevfactory.com:8443/:path*',
  //     },
  //   ]
  // },
}

module.exports = nextConfig


