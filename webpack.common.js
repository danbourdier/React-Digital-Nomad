const path = require('path')

// const modeBool = process.env.NODE_ENV === 'production'

const tempDir = __dirname + '/index.html'
const tempFileName = 'index.html'

const outputPath = path.join(__dirname, './dist')
// const outputPublicPath = modeBool ? '/React-Digital-Nomad/dist' : '/'

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: tempDir,
  filename: tempFileName,
  inject: 'head',
  favicon: "favicon.png"
})


module.exports = {

  entry: path.resolve( __dirname, 'src', 'index.jsx' ),

  output: {
    path: outputPath,
    filename: 'bundle.js',
    publicPath: '/'
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
    HTMLWebpackPluginConfig,
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