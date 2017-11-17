console.log(__dirname);
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const textPlugin = require('extract-text-webpack-plugin');
const args = require('yargs').argv;

const plugins = [
    new HtmlWebpackPlugin(),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
    new webpack.HotModuleReplacementPlugin()
];

let styleLoader = ['style-loader','css-loader','sass-loader'];

if (args.env && args.env.style) {
    plugins.push(new textPlugin({
        filename: 'style-[hash].css'
    }));

    styleLoader = textPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader','sass-loader']
    });
}


module.exports = {
    entry: {
        main: './index.js',
        vendor: ['jquery']
    },
    context: path.resolve(__dirname,'src'),
    output: {
        filename: './[name]-bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },

            {
                test: /\.s?css$/,
                use: styleLoader
            }
        ]

    },

    plugins,

    devServer: {
        contentBase: path.resolve(__dirname,'dist'),
        publicPath: '/',
        port: 9000,
        hot: !(args.env && args.env.style)
    }
};
