<template>
    <div>
       {{$route.params.id}}
       <p :class="$style.flex">{{count}}</p>
       <div>
           <button @click="incre">+</button>
           <button @click="decre">-</button>
           {{todo}}
       </div>
    </div>
</template>
<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
import {SOME} from '../store/mutation-type'
export default {
    created () {
        console.log(this.$style.flex)
    },
    data() {
        return {
            test:[...[1,2]]
        }
    },
    computed: {
    ...mapState([
      'count'
      ]),
    ...mapGetters(
          {
             todo:'todo'
          }
      )
    },
    methods: {
       ...mapActions({
           incre: SOME
       }),
        decre () {
            this.$store.commit('decrement')
        }
    }
}
</script>
<style lang="less" module>
 .className{
        color: red;
    }
    .flex{
        display: flex;
        justify-content: flex-start;
        background: red;
        composes:className;
    }
   
</style>


