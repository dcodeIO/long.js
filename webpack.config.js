var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: "./src/long.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "long.js",
    library: "Long",
    libraryTarget: "umd"
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true })
  ],
  devtool: "source-map"
};
