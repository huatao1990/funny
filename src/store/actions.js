import * as type from './mutation-type'
export default {
    async [type.SOME]({commit}) {
        await (function(){setTimeout(()=>{
            commit(type.SOME)
            console.log('121212')
        },1000)
    })()
        console.log('22')
    }
}