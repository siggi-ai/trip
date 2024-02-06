import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Gall1 from '../views/Gallery1.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/first',
        name: 'first',
        component: Gall1
    },
  ]
})

export default router