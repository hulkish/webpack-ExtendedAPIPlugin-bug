const ExtendedAPIPlugin = require('webpack/lib/ExtendedAPIPlugin');
const path = require('path');

module.exports = {
  entry: path.resolve('entry.js'),
  output: {
    path: path.resolve('dist'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[id].[chunkhash].js'
  },
  plugins: [new ExtendedAPIPlugin()]
}
