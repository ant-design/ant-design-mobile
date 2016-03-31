var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
var pkg = require('./package');
var autoprefixer = require('autoprefixer');

var entry = {};
entry['index'] = './scripts/importCss.js';
entry['demo'] = './scripts/demo.js';
entry['mobile'] = './mobile/entry/index.jsx';

module.exports = {
  entry: entry,

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: '[name].js'
  },

  module: {
    loaders: [
    {test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192'
    },
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }, {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract(
        'css?sourceMap&-minimize!' + 'postcss-loader!' + 'less?sourceMap'
      )
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract(
        'css?sourceMap&-minimize!' + 'postcss-loader'
      )
    }]
  },

  postcss: [autoprefixer],

  plugins: [
    new ExtractTextPlugin('[name].css')
  ],

  devtool: 'source-map'
};
