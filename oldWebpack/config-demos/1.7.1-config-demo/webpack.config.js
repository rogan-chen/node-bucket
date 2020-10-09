const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    watch: true,
    watchOptions: {
        ignored: /node_modules/, // 忽略监听
        aggregateTimeout: 300, // 防抖，默认 300ms
        poll: 1000, // 每秒轮训 1000 次
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'main.html',
        })
    ],
};