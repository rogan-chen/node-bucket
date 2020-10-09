const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        home: './src/home.js',
        mine: './src/mine.js',
    },
    output: {
        filename: '[name].[chunkhash:8].js',
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
            chunks: ['home', 'mine'],
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: "all",
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: true,
            cacheGroups: {
                common: {
                    chunks: 'initial',
                    minSize: 0,
                    minChunks: 2, 
                },
                ventor: {
                    test: /node_modules/,
                    chunks: 'initial',
                    minSize: 0,
                    minChunks: 2, 
                    priority: 1,
                },
            },
        },
    },
};