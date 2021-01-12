const path = require("path");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const HtmlWebpackPlugin = require("html-webpack-plugin");

/** @type {import("webpack").Configuration} */
const config = {
  mode: "development",
  devtool: false,
  output: {
    path: path.resolve(__dirname, "public/dist"),
  },
  externalsType: "script",
  externals: [
    {
      "internal-load": ["/internal-load.js", "INTERNAL_LOAD"],
    },
  ],
  plugins: [
    new HtmlWebpackPlugin({
      filename: "../index.html",
    }),
    new ModuleFederationPlugin({
      remotes: {
        fed: "internal internal-load",
      },
    }),
  ],
};

module.exports = config;
