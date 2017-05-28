const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const Dotenv = require('dotenv-webpack');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body',
});

const DotenvPlugin = new Dotenv({
  systemvars: true,
});

module.exports = {
  entry: './src/js/index.js',
  output: {
    publicPath: '/',
    path: path.resolve('static'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [HtmlWebpackPluginConfig, DotenvPlugin],
};
