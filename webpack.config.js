var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: "./src/js/entry.js",
    output: {
        path: __dirname,
        filename: "./dist/js/bundle.js"
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
                    search: 'green',
                    replace: 'blue',
                    flags: ''
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("./dist/css/styles.css")
    ]
};
