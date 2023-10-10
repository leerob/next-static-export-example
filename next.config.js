/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    loader: 'custom',
    loaderFile: './app/image.tsx',
  },
};

module.exports = nextConfig;
