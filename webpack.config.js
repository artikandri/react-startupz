const path = require("path");

module.exports = {
  // webpack folder’s entry js — excluded from jekll’s build process.
  mode: "development",
  entry: path.resolve(__dirname, "webpack/entry.js"),
  output: {
    // we’re going to put the generated file in the assets folder so jekyll will grab it.
    // if using GitHub Pages, use the following:
    // path: "assets/javascripts"
    path: path.resolve(__dirname, "src/assets/javascripts/"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx|js|ts?$/,
        exclude: /(node_modules)/,
        loader: "babel-loader", // "babel-loader" is also a legal name to reference
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: [
            "transform-class-properties",
            "transform-object-rest-spread",
            "@babel/plugin-proposal-import-attributes-to-assertions",
          ],
        },
      },
    ],
  },
};
