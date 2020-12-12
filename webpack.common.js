const path = require('path')
const webpack = require('webpack')

const templateDir = process.env.NODE_ENV === 'production' ? __dirname + '/index.html' : __dirname + '/public/sudo.html'
const tempFileName = process.env.NODE_ENV === 'production' ? 'index.html' : 'sudo.html'
console.log(tempFileName)
const outputPath = path.join(__dirname, './dist')
const outputPublicPath = process.env.NODE_ENV === 'production' ? '/React-Digital-Nomad/' : '/'

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: templateDir,
  filename: tempFileName,
  inject: 'body',
  favicon: "favicon.png"
})


module.exports = {

  entry: path.resolve( __dirname, 'src', 'index.jsx' ),

  output: {
    path: outputPath,
    filename: 'bundle.js',
    publicPath: outputPublicPath
  },

  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /(node_modules)/, 
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/env', '@babel/react'] }
        },
      }, 
      { test: /\.css$/i, 
        use: [ 
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: '../' }
          }, 
          'css-loader'
        ],
      }
    ]
  },

  // optimization: {
  //   splitChunks: { chunks: "all" }
  // },

  plugins: [ 
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    HTMLWebpackPluginConfig
  ],

  resolve: {
    extensions: [".js", ".jsx", ".css", "*"]
  },

  performance: {
    hints: false
  },

  stats: {
    errorDetails: true,
    warnings: true,
    colors: true,
  },


};