const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new webpack.DefinePlugin({
            DEV: JSON.stringify('development'),
            COUNT: '1 + 1',
            FLAG: 'true',
        }),
    ],
};