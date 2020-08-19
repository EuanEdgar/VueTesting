import Vue from 'vue'
import App from 'components/app'

window.app = new Vue({
  el: '#app',
  template: `<App />`,
  components: {
    App,
  }
})
