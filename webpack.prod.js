const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: 'main.[chunkhash].js',
        clean: true
    },
    optimization: {
        minimizer: [
          new CssMinimizerPlugin(),
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "main.[chunkhash].css",
        }),
        new HtmlWebpackPlugin({
            title: 'Project - Production',
            template: 'src/index.html',
            minify: true,
            inject: 'body',
            publicPath: '/'
        })
    ]
})