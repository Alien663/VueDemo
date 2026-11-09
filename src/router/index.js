import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import('../pages/HomePage.vue')
  },
  {
    path: '/about',
    name: 'AboutUs',
    component: () => import('../pages/AboutUs.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router