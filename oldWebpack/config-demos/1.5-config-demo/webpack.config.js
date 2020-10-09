const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    externals: {
        jquery: '$',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'main.html',
        }),
        new webpack.ProvidePlugin({
            $: 'jquery'
        }),
    ],
    module: {
        rules: [
            // {
            //     test: require.resolve('jquery'),
            //     use: {
            //         loader: 'expose-loader',
            //         options: '$',
            //     },
            // },
            // {
            //     test: require.resolve('jquery'),
            //     use: {
            //         loader: 'expose-loader',
            //         options: 'jQuery',
            //     },
            // },
        ]
    },
};