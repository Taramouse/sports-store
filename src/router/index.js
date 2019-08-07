import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import ShoppingCart from '@/views/ShoppingCart'
import Checkout from '@/views/Checkout'
import OrderThanks from '@/views/OrderThanks'
import Authentication from '@/views/admin/Authentication'
import Admin from '@/views/admin/Admin'
import dataStore from '@/store'

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
      path: '/thanks/:id',
      name: 'OrderThanks',
      component: OrderThanks
    },
    {
      path: '/login',
      name: 'Authentication',
      component: Authentication
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      beforeEnter (to, from, next) {
        if (dataStore.state.auth.authenticated) {
          next()
        } else {
          next('/login')
        }
      }
    }
  ]
})
