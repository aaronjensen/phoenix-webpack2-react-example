const webpack = require('webpack')
const path = require('path')

const nodeEnv = process.env.NODE_ENV || 'development'
const isProd = nodeEnv === 'production'

const staticDir = path.join(__dirname, 'web/static')
const jsDir = path.join(staticDir, 'js')
const destDir = path.join(__dirname, 'priv/static')
const publicPath = 'http://localhost:4001/'

module.exports = {
  devtool: isProd ? 'hidden-source-map' : 'eval',
  context: jsDir,
  entry: {
    js: [
      `webpack-hot-middleware/client?path=${publicPath}__webpack_hmr`,
      './app',
    ],
  },
  output: {
    path: destDir,
    filename: 'bundle.js',
    publicPath,
    devtoolModuleFilenameTemplate: '/[absolute-resource-path]',
  },
  module: {
    preLoaders: [
      {test: /\.js$/, loader: "flowtype", exclude: /node_modules/},
    ],
    loaders: [
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'babel'
        ]
      },
    ],
  },
  resolve: {
    extensions: ['', '.js'],
    modules: [
      jsDir,
      'node_modules'
    ]
  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   minChunks: Infinity,
    //   filename: 'vendor.bundle.js'
    // }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoErrorsPlugin(),
    // new webpack.LoaderOptionsPlugin({
    //   minimize: true,
    //   debug: false
    // }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   },
    //   output: {
    //     comments: false
    //   },
    //   sourceMap: false
    // }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
    })
  ],
  devServer: {
    contentBase: staticDir,
    hot: true,
    noInfo: true,
  }
}
