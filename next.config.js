const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa');
const path = require('path');

const prod = process.env.NODE_ENV === 'production';

const nextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(jpe?g|png|svg|gif|ico|eot|ttf|woff|woff2|mp4|pdf|webm|txt)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/chunks/[path][name].[hash][ext]',
      },
    });

    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/assets/styles')],
  },
};

module.exports = withPlugins(
  [
    [
      withPWA,
      {
        pwa: {
          dest: 'public',
          disable: prod ? false : true,
        },
      },
    ],
  ],
  { reactStrictMode: true },
  nextConfig
);
