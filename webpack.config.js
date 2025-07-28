const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = (env, argv) => {
  const mode = argv.mode || "development";
  const isDev = mode === "development";
  const chunks = argv.chunks || false;
  const isChunks = chunks === "chunks";

  return {
    mode,
    entry: path.resolve(__dirname, "src", "index.js"),
    devtool: isDev ? "inline-source-map" : false,
    devServer: {
      static: "./dist",
    },
    performance: {
      maxAssetSize: 1000 * 1024 * 5,
      hints: false,
    },
    optimization: {
      splitChunks: isChunks ? {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: -10,
          },
        },
      } : false,
      runtimeChunk: 'single',     // отдельный runtime чанк
      minimize: !isDev,           // минифицировать только в проде
      minimizer: [
        "...",                    // дефолтный minimizer для JS (Terser)
        new CssMinimizerPlugin(), // минификация CSS
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Hello world!",
        minify: false,
        template: path.resolve(__dirname, "public", "index.html"),
        inject: "body",
      }),
      /*!isDev &&*/ new MiniCssExtractPlugin({
        filename: "css/[name].css",
        chunkFilename: 'css/[name].[contenthash].chunk.css',
      }),
    ].filter(Boolean),
    output: {
      filename: "js/[name].js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.html$/,
          use: {
            loader: "html-loader",
            options: {
              sources: isDev ? true : true,
              minimize: false,
            },
          },
        },
        {
          test: /\.css$/i,
          use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                sourceMap: isDev,
              },
            },
          ],
        },
        {
          test: /\.(jpg|png|svg|jpeg|gif|webp)$/,
          type: "asset/resource",
          generator: {
            filename: "assets/images/[name][ext][query]",
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
        },
      ],
    },
  };
};
