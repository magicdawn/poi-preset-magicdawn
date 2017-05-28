# poi-preset-magicdawn
> [poi](https://github.com/egoist/poi) preset for self use

[![Build Status](https://img.shields.io/travis/magicdawn/poi-preset-magicdawn.svg?style=flat-square)](https://travis-ci.org/magicdawn/poi-preset-magicdawn)
[![Coverage Status](https://img.shields.io/codecov/c/github/magicdawn/poi-preset-magicdawn.svg?style=flat-square)](https://codecov.io/gh/magicdawn/poi-preset-magicdawn)
[![npm version](https://img.shields.io/npm/v/poi-preset-magicdawn.svg?style=flat-square)](https://www.npmjs.com/package/poi-preset-magicdawn)
[![npm downloads](https://img.shields.io/npm/dm/poi-preset-magicdawn.svg?style=flat-square)](https://www.npmjs.com/package/poi-preset-magicdawn)
[![npm license](https://img.shields.io/npm/l/poi-preset-magicdawn.svg?style=flat-square)](http://magicdawn.mit-license.org)

## Install
```sh
$ npm i poi-preset-magicdawn -S
```

## API

poi.config.js
```js
module.exports = {
  presets: [
    require('poi-preset-magicdawn', options)
  ]
}
```

### functions

- [x] inline-source-map support, via `--debug` cli flag
- [x] image loader config
- [x] customed filename output, for self use

### options

- `image` config the image loader
- `image.sizeLimit`: `string | number`, the image size limt, default `"10kb"`
- `image.output`: `string`, the output of the filenae, default `img/[name].[hash:8].[ext]`

### cli config

- `--debug`: if debug, set `webpack.devtool = 'inline-source-map'`, only work in `development` mode

## Changelog
[CHANGELOG.md](CHANGELOG.md)

## License
the MIT License http://magicdawn.mit-license.org