import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import provideRouter from './router/index.js'
import i18n from './i18n'

Vue.use(VueMaterial)

Vue.config.productionTip = false

let router = provideRouter()

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
