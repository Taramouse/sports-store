import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import Vuelidate from 'vuelidate'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false

Vue.filter('currency', (value) => new Intl.NumberFormat('en-US', {
  style: 'currency', currency: 'USD'
}).format(value))

Vue.use(Vuelidate)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
