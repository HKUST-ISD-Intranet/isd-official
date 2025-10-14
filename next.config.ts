import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    //output: 'export', // Enables static export
    basePath: process.env.CI === 'true' ? '/isd-official' : '',
    assetPrefix: process.env.CI === 'true' ? '/isd-official/' : '',
    trailingSlash: true,
    images: {
        unoptimized: true, // Disables image optimization for static export
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });
        return config;
    },
    experimental: {
        turbo: {
            rules: {
                '*.svg': {
                    loaders: ['@svgr/webpack'],
                    as: '*.ts', // Or "*.js"
                },
            },
        },
    },
};

export default nextConfig;
