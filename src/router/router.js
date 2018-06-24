import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '../pages/Hello.vue'
Vue.use(VueRouter)
export default new VueRouter({
    mode: 'history',
    routes: [
       {
           path: '/user/:id',
           component: Hello
       } 
    ]
})