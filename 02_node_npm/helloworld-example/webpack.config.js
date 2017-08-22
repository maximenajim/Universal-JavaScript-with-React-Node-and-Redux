var webpack = require("webpack");
var path = require("path");

var CLIENT = path.resolve(__dirname, "client");
var OUTPUT = path.resolve(__dirname, "build/client");

var config = {
  entry: CLIENT + "/index.jsx",
  output: {
    path: OUTPUT,
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      include: CLIENT,
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};

module.exports = config;
