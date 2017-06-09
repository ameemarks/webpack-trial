var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                fallback: "style-loader",
                    publicPath: "",
                use: [
                    {
                        loader: "css-loader",
                        options: {
                            minimize: true
                        }
                    }
                ]
            }) },
            {
                test: /\.css$/,
                loader: 'string-replace-loader',
                query: {
                    search: 'caption',
                    replace: 'ciasteczko',
                    flags: ''
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css")
    ]
};
