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
        options: { extractCSS: true }
      },
      {
        test: /\.css/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader'
        })
      },
      {
        test: /\.(ttf|woff2|woff|eot|svg)/,
        loader: 'file-loader'
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
