import { createRouter, createWebHistory } from 'vue-router'

import Home from '../page/home.vue'

const routes = [{ name: 'home', path: '/', component: Home }]

const router = createRouter({
  history: createWebHistory(),
  routes // short for `routes: routes`
})

export default router
