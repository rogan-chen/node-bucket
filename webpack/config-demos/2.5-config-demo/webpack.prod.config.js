const { smart } = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config');
const webpack = require('webpack');

module.exports = smart(webpackBaseConfig, {
    mode: 'production',
    plugins: [
        new webpack.DefinePlugin({
            MY_ENV: JSON.stringify('production')
        })
    ]
})