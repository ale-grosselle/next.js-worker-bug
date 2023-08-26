/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { webpack }) => {
    //console.log('config', config);
    return config;
  },
};

module.exports = nextConfig;
