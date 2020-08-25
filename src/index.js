import Vue from 'vue'

import { BootstrapVue } from 'bootstrap-vue'

import VueRouter from 'vue-router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import PokemonSearch from 'components/PokemonSearch'
import hello_world from 'components/hello_world'

const router = new VueRouter({
  routes: [{
    path: '/',
    component: hello_world,
  },
  {
    path: '/pokedex',
    component: PokemonSearch,
  }],
})

Vue.use(BootstrapVue)
Vue.use(VueRouter)

window.app = new Vue({
  el: '#app',
  router,
  template: '<router-view />'
})
