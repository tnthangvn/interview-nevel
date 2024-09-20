/** @type {import('next').NextConfig} */
const basePath = process.env.NODE_ENV === 'production' ? '/interview-nevel' : '';
const nextConfig = {
  distDir: 'docs',
  output: 'export',
  basePath,
  images: {
    unoptimized: true,
    loader: "imgix",
    path: "https://tnthangvn.github.io/",
  }
};

export default nextConfig;
