/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const path = require('path');

module.exports = {
  webpack: (config, { isServer }) => {
    // Resolve the '@' alias to the root directory
    config.resolve.alias['@'] = path.join(__dirname, '');

    return config;
  },
};

module.exports = nextConfig
