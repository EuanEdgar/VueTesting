import VueRouter from 'vue-router'

import Index from 'containers'
import HelloWorld from 'containers/HelloWorld'
import Pokedex from 'containers/Pokedex'

const router = new VueRouter({
  routes: [{
    path: '/',
    component: Index,
  }, {
    path: '/hello',
    component: HelloWorld,
  }, {
    path: '/pokedex',
    component: Pokedex,
  }],
})

export default router
