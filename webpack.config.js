const webpack = require('webpack');
const path = require('path');
require('dotenv').config();

/** @type {import('webpack-cli').WebpackConfiguration} */
module.exports = {
    entry: './src/main.ts',
    context: __dirname,
    devtool: false,
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        }),
    ],
    devServer: {
        port: process.env.PORT || 9000,
        host: '0.0.0.0',
        static: {
            directory: __dirname,
        },
        devMiddleware: {
            publicPath: '/dist/',
            writeToDisk: true,
        },
    },
};
