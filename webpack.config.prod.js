const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, 'client', 'index.js'),
  output: {
    path: path.join(__dirname, 'public', 'assets'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue/,
        loader: 'vue-loader',
        options: {
          extractCSS: true,
          loaders: {
            js: 'babel-loader'
          }
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'bundle.css',
      allChunks: false
    })
  ]
}
