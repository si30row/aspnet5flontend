const path = require('path');
const srcPath = './js/src';
const distPath = './js/build';

module.exports = {
	mode: 'production',
    entry: {
        app01: `${srcPath}/app.js`
    },
    devtool: 'sourcemaps',
    output: {
        path: __dirname,
        filename: `${distPath}/[name].bundle.js`
    },
    optimization: {
        splitChunks: {
            name: 'vendor',
            chunks: 'initial'
        }
    },
    module: {
        rules: [
            {
                test: /\.js$|\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        ]
    },
    devServer: {
        contentBase: '/',
        port: 3000,
        inline: true,
        open: true
    },
};