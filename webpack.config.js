var webpack = require('webpack');
var path = require('path');
// var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './src/index'
  ],
  // mode: "development",
  mode: "production",
  module: {
    rules: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.s?css$/, loader: 'style-loader!css-loader!sass-loader' },
      // { test: /\.html$/, loader: 'html-loader' },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, './dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './dist',
    hot: true
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: './dist/index.html'
    // }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
