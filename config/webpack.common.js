const path = require("path");

const AssetsPlugin = require("assets-webpack-plugin");

const HTMLWebpackPlugin = require("html-webpack-plugin");

const CopyPlugin = require("copy-webpack-plugin");

const root = path.dirname(__dirname);

const webpack = require("webpack");

module.exports = {
    entry: {
        app: "./src/index.tsx",
    },
    watchOptions: {
        ignored: /node_modules/,
    },
    optimization: {
        splitChunks: {
            chunks: "all",
            automaticNameDelimiter: "-",
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                },
            },
        },
    },
    //  devtool: 'source-map',
    devtool: false,
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".css", ".scss"],
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(tsx|ts)$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"],
            },
            {
                test: /\.(png|jpg|gif|ico)$/,
                loader: "file-loader",
                options: {
                    outputPath: "assets",
                    name: "[name].[ext]",
                },
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    "@svgr/webpack",
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: "assets",
                            name: "[name].[ext]",
                        },
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: "file-loader",
                options: {
                    outputPath: "assets",
                    name: "[name].[ext]",
                },
            },
        ],
    },

    plugins: [
        new AssetsPlugin({
            path: path.join(root, "dist"),
            filename: "assets.json",
            includeAllFileTypes: false,
            fileTypes: ["js", "css"],
        }),
        new HTMLWebpackPlugin({
            template: "./src/index.html",
        }),
        new CopyPlugin({
            patterns: [{ from: "public", to: "public" }],
        }),
    ],
};
