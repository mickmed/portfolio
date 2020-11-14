const HtmlWebpackPlugin = require("html-webpack-plugin")
// const path = require("path")
// var webpack = require('webpack');

module.exports = {
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    // open: true
    historyApiFallback: true,
  },

  entry: "./src/index.js",

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
    
  ],

  module: {
    rules: [
 

      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
     
    ],
  },
}
