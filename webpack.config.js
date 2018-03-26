const path = require('path');
const fs = require('fs');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//require('es6-promise').polyfill();

module.exports = (env) => {
    // if (!env.exploration) {
    //     return {}
    // }
    var exp = [];
    var directory = './dist';
    var source = './src/assets';

    // var files = fs.readdirSync('./src/');
    // for (var i in files) {
    //     if (files[i] == env.exploration) {
    //         var directory = files[i];
    //     }
    // }

    let configCopyWebpack = [
        { from: `${source}/data`, to: `./assets/data` },
        { from: `${source}/im`, to: `./assets/im` },
        { from: `${source}/products`, to: `./assets/products` },
        { from: `${source}/scripts`, to: `./assets/scripts` },
        { from: `${source}/styles`, to: `./assets/styles` }
    ];

    //let configAssets = { from: `src/assets`, to: `${directory}/assets` };

    // if ('only' === env.assets) {
    //     //configCopyWebpack = [configAssets];
    // } else if ('include' === env.assets) {
    //     //configCopyWebpack.push(configAssets);
    // }

    //configCopyWebpack = [configAssets];

    webpackConfig = {
        entry: `./src/index.js`,
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Decorplast',
                hash: true,
                directory: `${directory}`,
                template: `./src/template.html`,
                filename: `./index.html`,
            }),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery'
            }),
            new CopyWebpackPlugin(configCopyWebpack),
        ],
        output: {
            filename: `./bundle.js`,
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
                                outputPath: `./audio/`
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
                    test: /\.(png|jpg)$/,
                    loader: 'url-loader?limit=100000'
                },
                {
                    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    loader: 'url-loader?limit=10000&mimetype=application/font-woff',
                    options: {
                        outputPath: `./assets/fonts/`
                    }
                },
                {
                    test: /\.(ttf|otf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?|(jpg|gif)$/,
                    loader: 'file-loader',
                    options: {
                        outputPath: `./assets/fonts/`
                    }
                }
            ]
        }
    }

    return webpackConfig
};


