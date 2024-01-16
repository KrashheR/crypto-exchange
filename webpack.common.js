const _resolve = require('path').resolve;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: _resolve(__dirname, './src/index.js'),
  output: {
    filename: './bundle.[contenthash].js',
    path: _resolve(__dirname, 'build'),
    clean: true
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })]
};
