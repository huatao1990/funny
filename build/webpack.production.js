const merge = require('webpack-merge')
const config = require('./webpack.config.js')
const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsPlugin =require('optimize-css-assets-webpack-plugin')

module.exports = merge(config,{
    mode: 'production',
    plugins: [
    new UglifyJSPlugin(),
    new webpack.NamedModulesPlugin(),
    new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorOptions: { safe: true, discardComments: { removeAll: true } },
        canPrint: true
      }),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV':JSON.stringify('production')
    })
    ],
    optimization: {
        splitChunks: {
            chunks: "initial",
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '.',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    }
})
