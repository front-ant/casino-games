const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
  test: /\.css$/,
  loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
},
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          "file-loader"
        ]
      }
    ]
  },
  plugins: [
  new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
  }),
  new MiniCssExtractPlugin({
    filename: "[name].css",
    chunkFilename: "[id].css"
  })
]
};
