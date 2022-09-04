module.exports = {
  context: __dirname + "/dist/renderer",
  entry: "./main.js",
  //   mode: "production",
  mode: "development",
  output: {
    path: __dirname + "/dist/renderer",
    filename: "bundle.js",
  },
};
