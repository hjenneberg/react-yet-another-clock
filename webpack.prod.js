/* eslint-disable @typescript-eslint/no-var-requires,import/no-extraneous-dependencies */
const path = require('path');
const ManifestPlugin = require('webpack-manifest-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const merge = require('webpack-merge');
const common = require('./webpack.common.js');


module.exports = merge(common, {
    entry: {
        app: './src/components/App.tsx',
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'lib'),
        library: 'react-yet-another-clock',
        libraryTarget: 'commonjs2',
    },
    mode: 'production',
    devtool: 'source-map',
    externals: ['react'],
    plugins: [
        new ManifestPlugin(),
        // new BundleAnalyzerPlugin(),
    ],
});
