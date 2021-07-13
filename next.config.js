const withImages = require('next-images')

module.exports = withImages({
  reactStrictMode: true,
  webpack: (config) => {
    const found = config.module.rules.findIndex((rule) => console.log(rule.test) || rule.test?.exec('u.svg'));
    config.module.rules[found].test = /\.(jpe?g|png|gif)$/i;

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
})
