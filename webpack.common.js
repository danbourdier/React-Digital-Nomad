const path = require('path')

const tempDir = __dirname + '/index.html'
const tempFileName = 'index.html'

const outputPath = path.join(__dirname, './dist')

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
    filename: '[name].js',
    publicPath: '/'
  },

  module: {
    rules: [
      { test: /\.jsx?$/, 
        exclude: /(node_modules)/, 
        use: [ "babel-loader" ]
        // use: {
        //   loader: ['babel-loader'],
        //   options: { presets: ['@babel/env', '@babel/react'] }
        // },
      }, 
      { test: /\.css$/i, 
        use: [ 
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: '../' }
          }, 
          'css-loader'
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              // outputPath: "images/",
              publicPath: "../"
            }
          }
        ]
      },
    ]
  },

  optimization: {
    splitChunks: { chunks: "all" }
  },

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