const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        static: './'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "main.css",
        }),
        new HtmlWebpackPlugin({
            title: 'Project - Development',
            template: 'src/index.html',
            inject: 'body',
            publicPath: '/'
        })
    ]
})