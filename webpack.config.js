const path = require('path');

module.exports = {
  context: __dirname,
  entry: "./src/entry.jsx",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './dist/bundle.js'
  },
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
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};