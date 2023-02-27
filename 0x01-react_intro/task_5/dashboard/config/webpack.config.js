const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "inline-source-map",
  output: {
    path: "./dist",
    filename: "bundle.js",
  },
  devServer: {
    static: "./dist",
    compress: true,
	port: 8564,
  },
  module: {
    rules: [
      { 
        test: /\.css$/, 
        use:["style-loader", "css-loader"], 
        options: { 
          modules: true 
        }, 
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
			options: {
		      bypassOnDebug: true,
			  disable: true
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
      }
    ],
  },
};