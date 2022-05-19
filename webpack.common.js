const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader',
                }
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.css', '.scss'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}