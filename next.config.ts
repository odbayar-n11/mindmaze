import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // 75 is the default for every image; the classroom slider asks for 90
    qualities: [75, 90],
  },
};

export default nextConfig;
