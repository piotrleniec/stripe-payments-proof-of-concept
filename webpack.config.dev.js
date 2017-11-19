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
        loader: 'vue-loader'
      },
      {
        test: /\.css/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.(ttf|woff2|woff|eot|svg)/,
        loader: 'file-loader'
      }
    ]
  }
}
