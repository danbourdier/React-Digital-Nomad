// const path = require('path');

module.exports = {
  context: __dirname,
  entry: "./src/index.jsx",
  output: {
    // path: path.resolve(__dirname, 'dist'),
    filename: './bundle.js'
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
      }, 
      {
        test: /\.css$/i,
        use: ['css-loader'],
      }

    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};