/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  exprimental: {
    serverActions: true,
  },
};

export default nextConfig;
