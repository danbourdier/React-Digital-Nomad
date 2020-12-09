const path = require('path')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  title: 'Production',
  template: __dirname + '/index.html',
  filename: 'index.html',
  inject: 'head',
  favicon: "favicon.png"
})


module.exports = {

  context: __dirname,

  entry: "./src/index.jsx",

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      }, 
      {
        test: /\.css$/i,
        use: ['css-loader'],
      }

    ]
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  plugins: [ 
    new CleanWebpackPlugin(),
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