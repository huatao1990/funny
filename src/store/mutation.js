import * as type from './mutation-type'
export default  {
    [type.SOME](state){
        state.count++
    },
    decrement(state){
        state.count--
    } 
}