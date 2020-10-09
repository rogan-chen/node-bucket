var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'eslint-loader'
        }],
    },
};