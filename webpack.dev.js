/* eslint-disable @typescript-eslint/no-var-requires,import/no-extraneous-dependencies */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    entry: {
        app: './src/main.tsx',
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        host: '0.0.0.0',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Yet Another Clock',
            template: './dist/index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
});
