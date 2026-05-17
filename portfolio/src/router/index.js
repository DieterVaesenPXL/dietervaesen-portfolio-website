import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/work',
      name: 'work',
      component: () => import('../views/WorkPage.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutPage.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactPage.vue'),
    },
    {
      path: '/cv',
      name: 'cv',
      component: () => import('../views/CurriculumVitae.vue'),
    },
  ],
})

export default router
