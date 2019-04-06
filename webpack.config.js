// THE MASTER CONFIG FILE
const path = require('path');

let config;

const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  title: "JSX",
  template: './index.html',
  filename: 'index.html',
  inject: 'body'
})

const UglifyJSPluginConfig = new UglifyJSPlugin({
  parallel: true,
  extractComments: true,
  cache: true
})

const CompressionPluginConfig = new CompressionPlugin({
  algorithm: "gzip"
})


const dev = {
  mode: "development",
  entry: './src/index.js',
  devServer: {
    contentBase: path.resolve(__dirname + "/src"),
    compress: true,
    port: 9000,
    historyApiFallback: true
  },
  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: 'index_bundle.js'
  },
  plugins: [HtmlWebpackPluginConfig],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.(s*)css$/,
        include: [
          path.resolve(__dirname + '/src/styles')
        ]
      },
      {
        use: 'file-loader',
        test: /\.(jpe?g|gif|png|svg|webp|woff|ttf|wav|mp3|mp4|obj)$/,
        include: [
          path.resolve(__dirname + '/src')
        ]
      }
    ]
  }
};

const prod = {
  mode: "production",
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.(s*)css$/,
        include: [
          path.resolve(__dirname + '/src/styles')
        ]
      },
      {
        use: 'file-loader',
        test: /\.(jpe?g|gif|png|svg|webp|woff|ttf|wav|mp3|mp4|obj)$/,
        include: [
          path.resolve(__dirname + '/src')
        ]
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig, UglifyJSPluginConfig, CompressionPluginConfig],
}

if(process.env.NODE == 'production') {
  console.log('its prod')
  config = prod
} else {
  config = dev
}

module.exports = config