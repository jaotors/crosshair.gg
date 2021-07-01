const withImages = require('next-images')

module.exports = withImages({
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: 'empty',
        module: 'empty',
      }
    }

    return config
  },
})
