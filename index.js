'use strict'

const bytes = require('bytes')
const _merge = require('lodash.merge')

const defaultOptions = {
  image: {
    limit: '10kb',
    output: 'img/[name].[hash:8].[ext]'
  }
}

module.exports = options => poi => {
  options = _merge(defaultOptions, options)

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
  const imageSizeLimit = bytes.parse(options.image.sizeLimit)
  poi.webpackConfig.module.rule('image')
    .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
    .use('created-by-magicdawn')
    .loader('url-loader', 'url-loader')
    .options({
      limit: imageSizeLimit,
      name: options.image.output,
    })
}