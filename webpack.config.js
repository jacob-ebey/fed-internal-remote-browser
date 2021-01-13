const path = require("path");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const HtmlWebpackPlugin = require("html-webpack-plugin");

/** @type {import("webpack").Configuration} */
const config = {
  mode: "development",
  devtool: false,
  entry: {
    main: "./src/index.js",
    "internal-load": {
      import: "./internal-load.js",
      library: {
        type: "var",
        name: "INTERNAL_LOAD",
      },
    },
  },
  externals: [
    {
      "internal-load": `promise new Promise((res, rej) => {
      const mod = INTERNAL_LOAD;
      mod.default.then(res, rej);
    })`,
    },
  ],
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ["internal-load", "main"],
      chunksSortMode: "manual",
    }),
    new ModuleFederationPlugin({
      remotes: {
        fed: "internal internal-load",
      },
    }),
  ],
};

module.exports = config;
