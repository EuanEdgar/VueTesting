import Vue from 'vue'

import { BootstrapVue } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueRouter from 'vue-router'
import router from 'router'

Vue.use(BootstrapVue)
Vue.use(VueRouter)


window.app = new Vue({
  el: '#app',
  router,
  template: '<router-view />'
})
