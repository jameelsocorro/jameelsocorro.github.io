const baseConfig = require('./webpack.base');
const webpack = require('webpack');
const path = require('path');

module.exports = baseConfig({
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        port: 3000
    },
    entry: [
        './index.js'
    ],
    output: {
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'eval-source-map',
    performance: {
        hints: false
    }
});
