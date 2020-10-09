const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        home: './src/home.js',
        mine: './src/mine.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/home.html',
            filename: 'home.html',
            chunks: ['home'],
        }),
        new HtmlWebpackPlugin({
            template: './src/mine.html',
            filename: 'mine.html',
            chunks: ['mine'],
        }),
    ],
};