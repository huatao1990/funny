import Vue from 'vue'
import App from './App.vue'
import classRouter from './router/router'
import store from './store'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router:classRouter,
    template: '<App/>',
    components: { App }
  })
  
