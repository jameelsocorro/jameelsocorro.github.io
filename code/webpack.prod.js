const baseConfig = require('./webpack.base');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = baseConfig({

	mode: 'production',
	entry: './index.js',

	output: {
		filename: '[name].[chunkhash].js',
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
        new MiniCssExtractPlugin({
          filename: '[name].css'
        }),
        new CleanWebpackPlugin(['build'])
	],

    stats: {
        colors: true,
        hash: false,
        timings: true,
        assets: true,
        chunks: true,
        chunkModules: true,
        modules: true,
        children: true
	}

});
