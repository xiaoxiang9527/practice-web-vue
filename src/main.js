import Vue from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './registerServiceWorker'
import './plugins/element.js'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
