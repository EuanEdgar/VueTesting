import VueRouter from 'vue-router'

import Index from 'containers'
import HelloWorld from 'containers/HelloWorld'
import Pokedex from 'containers/Pokedex'
import DragAndDrop from 'containers/DragAndDrop'
import PageRenderer from 'containers/PageRenderer'

export const routes = [{
  path: '/',
  component: Index,
  label: 'Index',
}, {
  path: '/hello',
  component: HelloWorld,
  label: 'Hello',
}, {
  path: '/pokedex',
  component: Pokedex,
  label: 'Pokedex',
}, {
  path: '/drag_and_drop',
  component: DragAndDrop,
  label: 'Drag and drop demo',
}, {
  path: '/page_renderer',
  component: PageRenderer,
  label: 'Page Renderer',
}]

const router = new VueRouter({
  routes,
})

export default router
