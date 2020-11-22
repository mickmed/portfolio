const HtmlWebpackPlugin = require("html-webpack-plugin")
// const path = require("path")
// var webpack = require('webpack');

module.exports = {
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    // open: true
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': '*',
    }

  },
  // watch: true,
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
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "/src/img",
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]!static',
              outputPath: '/src/fonts/',

             
            },
            // include: /node_modules/
          }
        ]

      },
      // {
      //     test: /\.ttf$/,
      //     use: [
      //       {
      //         loader: 'ttf-loader',
      //         options: {
      //           name: './font/[hash].[ext]',
      //         },
      //       },
      //     ]
      // }


    ],
  },
}
