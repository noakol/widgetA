const { resolve } = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const pkg = require('./package.json');

module.exports = {
    entry: {
        widgetA: ['./']
    },


    output: {
        path: resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: 'widgetA',
        libraryTarget: 'umd'
    },

    context: resolve(__dirname, 'src'),

    module: {
        rules: [{
            test: /.jsx?$/,
            include: resolve(__dirname, 'src'),
            loader: 'babel-loader',
            options: {
                presets: [['env', { modules: false }], 'react']
            }
        }]
    },

    resolve: {
        extensions: ['.js', '.json', '.jsx']
    },

    plugins: [
        new HtmlPlugin(),
        new BundleAnalyzerPlugin()
    ]
};