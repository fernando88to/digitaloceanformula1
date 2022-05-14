/** @type {import('next').NextConfig}
 *
 * webpackDevMiddleware foi inseerido para o hot reload
 * https://webpack.js.org/configuration/watch/#watchoptionspoll
 * */


const nextConfig = {
  reactStrictMode: true,
  basePath: "/frontend",
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
      ignored: /node_modules/
    }
    return config
  },
}

module.exports = nextConfig
