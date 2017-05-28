'use strict'

module.exports = options => poi => {
  // debug, use `inline-source-map`
  if (poi.argv.debug) {
    poi.webpackConfig.devtool('inline-source-map')
  }

  // output filenames in production
  poi.mode('production', function() {
    poi.options.filename = {
      js: 'js/[name].[chunkhash:8].js',
      chunk: 'js/[id].[chunkhash:8].chunk.js',
      css: 'css/[name].[chunkhash:8].css',
      // static: 'static/[name].[ext]',
    }
  })

  // add image loader rules
  poi.webpackConfig.module.rule('image')
    .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
    .use('created-by-magicdawn')
      .loader('url-loader', 'url-loader')
      .options({
        limit: 10 * 1024,
        name: 'img/[name].[hash:7].[ext]'
      })
}