/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './custom-loader.js'
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.kfp-dental.com/api/:path*', // آدرس واقعی API لاراول
      },
    ];
  },
};

module.exports = nextConfig;
