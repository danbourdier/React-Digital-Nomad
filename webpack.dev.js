const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')


module.exports = merge( common, {

  mode: 'development',

  devtool: 'inline-source-map',

  devServer: {
    contentBase: path.resolve( __dirname, 'dist' ),
    publicPath: '/',
    open: true,
    hot: true,
    port: 8080,
    compress: true,
    watchContentBase: true,
  }

})