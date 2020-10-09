const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'production',
    entry: {
        reactXXX: [
            'react',
            'react-dom',
        ],
        jQuery: ['jquery'],
    },
    output: {
        filename: '[name].dll.js',
        path: path.join(__dirname, 'build/lib'),
        library: '[name]',
    },
    plugins: [
        new webpack.DllPlugin({
            name: '[name]_[hash]',
            path: path.join(__dirname, 'build/lib/[name].manifest.json'),
        }),
    ],
};