import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    output: 'export', // Enables static export
    basePath: process.env.CI === 'true' ? '/isd-official' : '', 
    assetPrefix: process.env.CI === 'true' ? '/isd-official/' : '', 
    trailingSlash: true,
    images: {
        unoptimized: true, // Disables image optimization for static export
    },
};

export default nextConfig;
