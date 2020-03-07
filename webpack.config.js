var path = require('path')
var webpack = require('webpack')
var nodeExternals = require('webpack-node-externals')

const common = {
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  resolve: {
    alias: {
      '@material-ui/core': '@material-ui/core/es'
    }
  },
}

module.exports = [
  {
    ...common,
    entry: './React/Browser/index.js',
    output: {
      path : path.resolve(__dirname, 'dist'),
      publicPath : '/',
      filename : 'client.js'
    },
    plugins: [
      new webpack.DefinePlugin({
        __isBrowser__: "true"
      })
    ]
  },
  {
    ...common,
    target: 'node',
    entry: './server.js',
    externals: [nodeExternals()],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'server.js',
      publicPath: '/'
    },
    plugins: [
      new webpack.DefinePlugin({
        __isBrowser__: "false"
      })
    ]
  }
]