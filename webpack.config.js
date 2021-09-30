const path = require("path");
const HTMLWebackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    port: 3000,
    hot: true,
  },
  plugins: [
    new HTMLWebackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
  ],
};
