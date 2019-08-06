import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import ShoppingCart from '@/views/ShoppingCart'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cart',
      name: 'ShoppingCart',
      component: ShoppingCart
    }
  ]
})
