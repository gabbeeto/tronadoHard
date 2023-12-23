const path = require("path");
const htmlWP = require("html-webpack-plugin")


module.exports = {
  entry: "./input/main.js",
  mode: "development",
  plugins: [new htmlWP({template:"./input/index.html"})],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, 'output'),
    clean: true
  },
  module: {
    rules: [
      { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
      { test: /\.(png|jpg|svg|ttf|otf)$/i, type: "asset/resource" }
    ]
  }
}
