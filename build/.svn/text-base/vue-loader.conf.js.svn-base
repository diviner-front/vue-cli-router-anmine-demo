var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  }),
  postcss: [
    require('autoprefixer')({
      browsers: ['last 2 versions', 'Android >= 4.0', 'iOS > 6'] ,
      remove: false
    })
  ],
  cssModules: {
    localIdentName: isProduction
      ? '[hash:base64:18]'
      : '[hash:base64:25]',
    // : '[local]__[hash:base64:5]',
    // importLoaders: true,
    camelCase: true
  }
}
