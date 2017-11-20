const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'client', 'index.js'),
  output: {
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'babel-loader'
          }
        }
      }
    ]
  }
}
