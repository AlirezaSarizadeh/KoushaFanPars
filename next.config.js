/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './custom-loader.js'
  }
};

module.exports = nextConfig;
