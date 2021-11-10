const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = "development";
// let target = "web";

if (process.env.NODE_ENV === "production") {
  mode = "production";
  // target = "browserslist";
}

module.exports = {
  mode: mode,
  // target: target,

  output: {
    assetModuleFilename: "images/[hash][ext][query]"
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        // type: "asset/resource"
        // type: "asset/inline"
        type: "asset",
        // 默认8kB的限制
        // parser: {
        //   dataUrlCondition: {
        //     maxSize: 30 * 1024,
        //   },
        // }
      },
      {
        test: /\.(s[ac]|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
    ],
  },

  plugins: [new MiniCssExtractPlugin()],

  resolve: {
    extensions: [".js", ".jsx"]
  },

  devtool: "source-map",
  devServer: {
    static: './dist',
    hot: true // 默认开启
  }
}