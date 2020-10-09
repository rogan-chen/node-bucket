const { smart } = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config');
const webpack = require('webpack');

module.exports = smart(webpackBaseConfig, {
    mode: 'development',
    plugins: [
        new webpack.DefinePlugin({
            MY_ENV: JSON.stringify('development')
        })
    ]
})