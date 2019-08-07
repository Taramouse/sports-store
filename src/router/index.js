import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import ShoppingCart from '@/views/ShoppingCart'
import Checkout from '@/views/Checkout'
import OrderThanks from '@/views/OrderThanks'

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
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    },
    {
      path: '/orderthanks/:id',
      name: 'OrderThanks',
      component: OrderThanks
    }
  ]
})
