const path = require('path');
const fs = require('fs');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//require('es6-promise').polyfill();

module.exports = (env) => {
    if (!env.exploration) {
        return {}
    }
    var exp = [];
    var files = fs.readdirSync('./src/');
    for (var i in files) {
        if (files[i] == env.exploration) {
            var directory = files[i];
        }
    }

    let configCopyWebpack = [
        { from: `src/${directory}/audio`, to: `${directory}/audio` },
        { from: `src/${directory}/data`, to: `${directory}/data` },
        { from: `src/${directory}/images`, to: `${directory}/images` },
        { from: `src/${directory}/styles`, to: `${directory}/styles` }
    ];

    let configAssets = { from: `src/assets`, to: `assets` };

    if ('only' === env.assets) {
        configCopyWebpack = [configAssets];
    } else if ('include' === env.assets) {
        configCopyWebpack.push(configAssets);
    }

    webpackConfig = {
        entry: `./src/${directory}/index.js`,
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Big Ideas Learning',
                hash: true,
                directory: `${directory}`,
                template: `./src/index.html`,
                filename: `./${directory}/index.html`,
            }),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'
            }),
            new CopyWebpackPlugin(configCopyWebpack),
        ],
        output: {
            filename: `${directory}/bundle.js`,
            path: path.resolve(__dirname, 'dist')
        },
        module: {
            rules: [
                {
                    test: /\.(ogg|mp3|wav|mpe?g)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: `${directory}/audio/`
                            }
                        }
                    ]
                },
                {
                    test: /\.css$/,
                    loader: 'style-loader!css-loader?url=false',
                },
                {
                    test: /\.scss$/,
                    loaders: ['style-loader', 'css-loader?url=false', 'sass-loader']
                },
                {
                    test: /\.png$/,
                    loader: 'url-loader?limit=100000'
                },
                {
                    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    loader: 'url-loader?limit=10000&mimetype=application/font-woff',
                    options: {
                        outputPath: `${directory}/fonts/`
                    }
                },
                {
                    test: /\.(ttf|otf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?|(jpg|gif)$/,
                    loader: 'file-loader',
                    options: {
                        outputPath: `${directory}/fonts/`
                    }
                }
            ]
        }
    }

    return webpackConfig
};


