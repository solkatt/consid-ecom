/** @type {import('next').NextConfig} */
const options = {
  reactStrictMode: true,
}

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};
