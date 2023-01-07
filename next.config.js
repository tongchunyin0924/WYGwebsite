/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://withyouglobal.jimdofree.com/',
        permanent: false
      }
    ];
  }
}

module.exports = nextConfig


