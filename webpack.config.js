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
                // include: [
                //     path.resolve(__dirname, "entry.js")
                //     // path.resolve(__dirname, "css/style-ipla.css")
                // ],
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
                    // , {
                    //     loader: 'postcss-loader'}
                ]
            }) },
            {
                test: /style-ipla\.css$/,
                loader: 'string-replace-loader',
                query: {
                    search: '../fonts/',
                    replace: './fonts'
                }
            }
        ]
      /*  rules: [
            {
                test: /\.css\/\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                        loader: "css-loader",
                        options: {
                            minimize: true
                        }
                        }, {
                        loader: 'postcss-loader'}
                        ]
                })
            }
        ]*/
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        /*new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css\/\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: {removeAll: true } },
            canPrint: true
        })*/
    ]
};
