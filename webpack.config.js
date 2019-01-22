var path = require('path');
var webpack = require('webpack');
// 页面模板
var HtmlWebpackPlugin = require('html-webpack-plugin')
var WebpackOnBuildPlugin = require('on-build-webpack');

var fs = require("fs");
//设置为你的目标文件夹地址
var buildDir = 'texttojson/build/';

function resolve (dir) {
    return path.join(__dirname,dir)
}

console.log('building');

module.exports = {
    entry: {'index':'./texttojson/static/js/index.js'},
    output: {
        path: resolve('texttojson/build'),
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('texttojson/static/js')]
            }
        ]
    },
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve('texttojson/index.html'),
            title: 'Webpack-demos',
            filename: 'index.html',
            inject: true,
        }),
        new WebpackOnBuildPlugin(function(stats) {
            const newlyCreatedAssets = stats.compilation.assets;
            fs.readdir(path.resolve(buildDir), (err, files) => {
                files.forEach(file => {
                    if (!newlyCreatedAssets[file]) {
                        //fs.unlink(path.resolve(buildDir + file));
                        fs.unlink(resolve(buildDir + file), function(err){
                            if(err){
                                throw err;
                            }
                            console.log('文件:'+file+'删除成功！');
                        })
                    }
                });
            });
        })
    ],
    resolve: {
        extensions: ['.js', '.html'],
        alias: {
            '@': resolve(''),
        }
    },
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: '#source-map',
};
