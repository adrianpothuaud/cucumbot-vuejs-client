import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import VueAxios from './plugins/axios'

// Import routing configuration
import router from './router'

require('./assets/cucumbot.css')

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueAxios)

new Vue({
  // Enable routing
  router,
  render: h => h(App)
}).$mount('#app')
