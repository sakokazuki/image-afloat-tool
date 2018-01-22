const webpack = require("webpack")
const path = require("path")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const libTarget = process.env.NODE_ENV.indexOf('pkg') !== -1 ? 'var' : 'commonjs2'
const filename = process.env.NODE_ENV.indexOf('pkg') !== -1 ? 'image-afloat-tool-pkg.min.js' : 'image-afloat-tool.js'
const output = process.env.NODE_ENV.indexOf('production') !== -1 ? '/lib' : '/dev'
const plugins = process.env.NODE_ENV.indexOf('min') !== -1 ? [new UglifyJsPlugin()] : []

module.exports = {
  context: __dirname + '/dev',
  entry: {
    'bundle2': ['./js/index']
  },
  output: {
    path: __dirname + output,
    filename: filename,
    library: "ImageAfloatTool",
    libraryTarget: libTarget
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015', "stage-3"]
          }
        }
      },
      {
        test: /\.styl$/,
        use: ['style-loader', 'css-loader', 'stylus-loader']
      }
    ]
  },
  // watch: true,
  resolve: {
    modules: [
      path.resolve(__dirname, "./app/js"),
      "node_modules"
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dev'),
    port: 3000,
  },
  plugins: plugins,
  devtool: 'inline-source-map'
};
