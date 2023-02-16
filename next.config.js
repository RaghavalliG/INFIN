/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_URL: "http://128.199.30.38:5000/"
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: 'http://128.199.30.38:5000/:path*',
  //     },
  //   ]
  // },
}

module.exports = nextConfig


