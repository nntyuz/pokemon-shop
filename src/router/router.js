import { createRouter, createWebHistory } from 'vue-router'

import Home from '../page/home.vue'
import Content from '../components/content.vue'

const routes = [
  { name: 'home', path: '/', component: Home },
  { name: 'content', path: '/page/:id', component: Content }
]

const router = createRouter({
  history: createWebHistory(),
  routes // short for `routes: routes`
})

export default router
