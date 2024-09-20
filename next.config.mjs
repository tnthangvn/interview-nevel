/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'docs',
  output: 'export',
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
      };
    }
    return config;
  },
};

export default nextConfig;
