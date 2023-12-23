const path = require("path");
const htmlWP = require("html-webpack-plugin")


module.exports = {
  entry: "./input/main.js",
  mode: "development",
  plugins: [new htmlWP({ template: "./input/index.html" })],
  devtool: 'inline-source-map',
  devServer: { static: { directory: './output' },
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, 'output'),
    clean: true
  },
  module: {
    rules: [
      { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
      { test: /\.(png|jpg|svg|ttf|otf)$/i, type: "asset/resource" },
      {test: /\.js$/, exclude: /(node_modules|bower_components)/, use: {loader: "babel-loader", options: { presets: ['@babel/preset-env', "@babel/preset-react"]}} }
    ]
  }
}
