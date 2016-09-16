var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: [
    APP_DIR + '/index.js'
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|public)/,
        loader: 'babel'
      },
    ]
  },
  resolve: {
    // make it possible to require('file') instead of require('file.jsx')
    extensions: ['', '.js', '.jsx']
  },
};

module.exports = config;
