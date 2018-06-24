const Vue = require('vue')

module.exports=function createApp(content) {
    return new Vue({
        data: {
            url: content.url
        },
        template: `<div>您访问的是{{url}}</div>`
    })
}