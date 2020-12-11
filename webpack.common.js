const path = require('path')
const webpack = require('webpack')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  title: 'Production',
  template: __dirname + '/index.html',
  filename: 'index.html',
  inject: 'body',
  favicon: "favicon.png"
})

const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {

  entry: path.resolve(__dirname, "src", "index.jsx" ),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: ASSET_PATH
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

  plugins: [ 
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH),
    }),
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