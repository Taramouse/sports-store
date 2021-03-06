import Vue from 'vue'
import Router from 'vue-router'
import dataStore from '@/store'
import Home from '@/views/Home.vue'
import ShoppingCart from '@/views/ShoppingCart'
import Checkout from '@/views/Checkout'
import OrderThanks from '@/views/OrderThanks'

// import Authentication from '@/views/admin/Authentication'
// import Admin from '@/views/admin/Admin'
// import ProductAdmin from '@/views/admin/ProductAdmin'
// import OrderAdmin from '@/views/admin/OrderAdmin'
// import ProductEditor from '@/views/admin/ProductEditor'

const Authentication = () =>
  import(/* webpackChunkName: "admin" */ '@/views/admin/Authentication')
const Admin = () =>
  import(/* webpackChunkName: "admin" */ '@/views/admin/Admin')
const ProductAdmin = () =>
  import(/* webpackChunkName: "admin" */ '@/views/admin/ProductAdmin')
const OrderAdmin = () =>
  import(/* webpackChunkName: "admin" */ '@/views/admin/OrderAdmin')
const ProductEditor = () =>
  import(/* webpackChunkName: "admin" */ '@/views/admin/ProductEditor')

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
      component: Admin,
      beforeEnter (to, from, next) {
        if (dataStore.state.auth.authenticated) {
          next()
        } else {
          next('/login')
        }
      },
      children: [
        {
          path: 'products/:op(create|edit)/:id(\\d+)?',
          name: 'ProductEditor',
          component: ProductEditor
        },
        {
          path: 'orders',
          name: 'OrderAdmin',
          component: OrderAdmin
        },
        {
          path: 'products',
          name: 'ProductAdmin',
          component: ProductAdmin
        },
        {
          path: '',
          redirect: '/admin/products'
        }
      ]
    }
  ]
})
