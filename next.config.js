/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // ⬅️ جلوگیری از بهینه‌سازی sharp
    loader: 'default', // ⬅️ مطمئن میشه از loader پیشفرض استفاده شه
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
};

module.exports = nextConfig;
