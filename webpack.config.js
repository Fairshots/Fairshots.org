const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = (env, argv) => ({
    entry: path.resolve(__dirname, "index.js"),

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
        chunkFilename: "[name].bundle.js",
        publicPath: "/"
    },
    devtool: "inline-source-map",
    devServer: {
        historyApiFallback: true,
        disableHostCheck: true,
        hot: true
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },

    plugins:
        argv.mode === "production"
            ? [
                  new HtmlWebpackPlugin({
                      // production
                      hash: false,
                      template: path.resolve(__dirname, "index.html"),
                      filename: path.join(__dirname, "dist", "index.html")
                  }),

                  new MiniCssExtractPlugin({
                      filename: "[name].css",
                      chunkFilename: "[id].css"
                  }),

                  new UglifyJsPlugin({
                      uglifyOptions: {
                          output: {
                              comments: false,
                              beautify: false
                          }
                      }
                  })
              ]
            : [
                  new HtmlWebpackPlugin({
                      // development
                      hash: false,
                      template: "./index.html",
                      filename: path.join(__dirname, "dist", "index.html")
                  }),
                  new HtmlWebpackPlugin({
                      // development
                      hash: false,
                      template: "./popup_response.html",
                      filename: path.join(__dirname, "dist", "popup_response.html")
                  }),
                  new webpack.HotModuleReplacementPlugin()
              ],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        configFile: path.resolve("babel.config.js")
                    }
                }
            },
            /*
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
            { test: /\.(woff|woff2)$/, loader: "url-loader?prefix=font/&limit=5000" },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/octet-stream"
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader"
            },
            */
            {
                test: /\.s?css$/,
                use: [
                    argv.mode === "production" ? MiniCssExtractPlugin.loader : "style-loader",
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS
                ]
            },
            {
                test: /\.(jpe?g|png|gif|ico)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "assets",
                            publicPath: "/assets"
                        }
                    }
                ]
            }
        ]
    }
});
