// const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/public/index.html',
  filename: 'index.html',
  inject: 'head'
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
    // path: path.resolve(__dirname, 'dist'),
    filename: './bundle.js'
  },
  plugins: [HTMLWebpackPluginConfig],
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", ".css", "*"]
  }
};