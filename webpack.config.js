const path = require("path")
const ccsPlagin = require("mini-css-extract-plugin")
const htmlWebpackPlagin = require("html-webpack-plugin")

module.exports = {
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].js'
    },
    plugins: [
        new htmlWebpackPlagin({ template: "./index.html" }), new ccsPlagin()
    ],
    mode: 'development',
    module: {
        rules: [
            { test: /\.sass$/, use: [ccsPlagin.loader, 'css-loader', 'sass-loader'] },
            { test: /\.css$/, use: [ccsPlagin.loader, 'css-loader'] },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
        ],
    },
    devServer: {
        port: 6567
    }
}