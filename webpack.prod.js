const { merge } = require('webpack-merge');
const CompressionPlugin = require('compression-webpack-plugin');
const commonConfig = require('./webpack.common.js');

module.exports = merge(commonConfig, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    publicPath: '/crypto-exchange/'
  },
  plugins: [
    new CompressionPlugin({
      algorithm: 'gzip'
    })
  ]
});
