const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const clearWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin=require('mini-css-extract-plugin')

const vueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: {
        app:path.join(__dirname,'../src/main.js')
    },
    resolve:{
        alias:{
            'vue$':'vue/dist/vue.js'
        },
        extensions: ['.js','.vue']
    },
    output: {
        filename: process.env.NODE_ENV == 'production' ?'[chunkhash].bundle.js':'[name].bundle.js',
        // chunkFilename:'[id].[chunkhash].bundle.js',
        path: path.resolve(__dirname,'../dist')
    },
    module: {
        rules: [
            // {
            //     enforce: 'pre',
            //     exclude: /node_modules/,
            //     test:/\.(js|vue)$/,
            //     loader: 'eslint-loader',

            // },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                include:path.resolve(__dirname,'../src'),
            },
            {
                test: /\.js$/, // js文件后缀
                include: path.resolve(__dirname,'../src'),
                exclude: path.resolve(__dirname,'../src/service'),
                use: {
                    loader: 'babel-loader', //使用babel-loader处理
                    options: {
                        cacheDirectory: true
                    },
                }
              },
            {
                test:/\.less$/,
                include: path.resolve(__dirname,'../src'),
                    use: [ process.env.NODE_ENV=='production'?
                    MiniCssExtractPlugin.loader:'vue-style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1,modules: true } },
                    {loader:'postcss-loader'},
                    'less-loader'
                ]
                // })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                include: path.resolve(__dirname,'../src'),  
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: true
        }),
        new vueLoaderPlugin(),
        new clearWebpackPlugin(['dist'], {
            root: process.cwd(),
            verbose: true,
            dry: false
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: "[id].[contenthash].css"
        })
        // new ExtractTextWebapckPlugin('style.css')
    ]
}