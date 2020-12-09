const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

const path = require('path')


module.exports = merge( common, {

  mode: 'development',

  devtool: 'inline-source-map',

  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
    compress: true,
    port: 8080,
    publicPath: '/',
    historyApiFallback: true,
    open: true
  }

})