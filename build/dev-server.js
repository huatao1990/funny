const webpackDevServer = require('webpack-dev-server')
const config = require('./webpack.dev.js')
const webpack = require('webpack')
const devserver = {
        contentBase: '../dist',
        compress: true,
        hot: true,
        open:  true,
        port: 8850,
        host: 'localhost'
}
webpackDevServer.addDevServerEntrypoints(config,devserver)
const compiler = webpack(config)
const server = new webpackDevServer(compiler,devserver)

server.listen(8850, 'localhost',()=> {
    console.log('启动成功')
})

