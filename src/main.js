import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import provideRouter from './router/index.js'

Vue.use(VueMaterial)

Vue.config.productionTip = false

let router = provideRouter()

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
