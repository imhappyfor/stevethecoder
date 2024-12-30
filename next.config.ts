import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    // Add a rule for audio files
    config.module.rules.push({
      test: /\.(mp3|wav|ogg)$/,
      type: 'asset/resource',
      generator: {
        // This is where Next will place the processed file
        filename: 'static/media/[name].[hash][ext]',
      },
    })
    return config
  },
};

export default nextConfig;
