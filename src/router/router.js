import { createRouter, createWebHistory } from 'vue-router'

import Home from '../page/home.vue'
import Cart from '../page/cart.vue'
import Favorites from '../page/favorites.vue'

const routes = [
  { name: 'home', path: '/', component: Home },
  { name: 'cart', path: '/cart', component: Cart },
  { name: 'favorites', path: '/favorites', component: Favorites }
]

const router = createRouter({
  history: createWebHistory(),
  routes // short for `routes: routes`
})

export default router
