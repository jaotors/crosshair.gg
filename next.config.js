const withImages = require('next-images')

module.exports = withImages({
  reactStrictMode: true,
  webpack: (config) => {
    /*
     * problem: having an error using @svgr/webpack to use svg
     * as component.
     * solution: https://github.com/gregberge/svgr/issues/361
     */
    const found = config.module.rules.findIndex(
      (rule) => rule.test && rule.test.exec('u.svg')
    )
    config.module.rules[found].test = /\.(jpe?g|png|gif)$/i

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
})
