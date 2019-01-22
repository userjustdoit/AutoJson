var path = require('path');
const utils = require('./utils')
var webpack = require('webpack');
const config = require('../config')

// 页面模板
var HtmlWebpackPlugin = require('html-webpack-plugin')
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

var fs = require("fs");

function resolve (dir) {
    return path.join(__dirname,'..',dir)
}

module.exports = {
    entry: utils.entries(),
    output: {
        path: resolve('dist'),
        filename: '[name]/[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src')]
            }
        ]
    },
    mode: 'production',
    plugins: [
        // copy custom static assets
        new CopyWebpackPlugin([
            {
                from: resolve('static'),
                to: config.build.assetsSubDirectory,
                ignore: ['.*']
            }
        ]),
        new WebpackCleanupPlugin({
            exclude: ["static/**"],//不清除static下的文件
        })
    ].concat(utils.htmlPlugin()),
    resolve: {
        extensions: ['.js', '.html'],
        alias: {
            '@': resolve('src'),
        }
    },
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: '#source-map',
};
