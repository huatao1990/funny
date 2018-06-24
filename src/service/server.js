const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer')
const createApp = require('./app')
const create = renderer.createRenderer({
    template: require('fs').readFileSync('./index.template.html','utf-8')
})
server.get('/',(req,res)=> {
    const app = createApp({url:req.url})
    create.renderToString(app,(err,html)=>{
        res.end(html)
    })
})
server.listen(8850,()=>{console.log('监听成功')})