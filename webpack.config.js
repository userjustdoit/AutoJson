var path = require('path');
var webpack = require('webpack');

function resolve (dir) {
    return path.join(__dirname,dir)
}

module.exports = {
    entry: './texttojson/static/js/index.js',
    output: {
        path: resolve('texttojson/build'),
        filename: 'bundle.js'
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
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: '#source-map',
};
