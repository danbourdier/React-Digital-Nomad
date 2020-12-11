const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')



module.exports = merge( common, {

  mode: 'development',

  devtool: 'inline-source-map',

  devServer: {
    contentBase: path.resolve( __dirname, 'src' ),
    // contentBase: './',
    compress: true,
    open: true,
    port: 8080,
    watchContentBase: true,
    historyApiFallback: true,
  }

})