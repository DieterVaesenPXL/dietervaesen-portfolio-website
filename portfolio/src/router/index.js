import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const workPages = [
  {
    path: 'bookdesign',
    name: 'bookdesign',
    component: () => import('../views/BookDesignPage.vue'),
  },
  {
    path: 'logodesign',
    name: 'logodesign',
    component: () => import('../views/LogoDesignPage.vue'),
  },
  {
    path: 'posterdesign',
    name: 'posterdesign',
    component: () => import('../views/PosterDesignPage.vue'),
  },
  {
    path: 'internship',
    name: 'internship',
    component: () => import('../views/InternshipPage.vue'),
  },
  {
    path: 'photography',
    name: 'photography',
    component: () => import('../views/PhotographyPage.vue'),
  },
  {
    path: 'webdesign',
    name: 'webdesign',
    component: () => import('../views/WebdesignPage.vue'),
  },
  {
    path: 'huiscosemansknuts',
    name: 'huiscosemansknuts',
    component: () => import('../views/HuisCosemansKnutsPage.vue'),
  },
  {
    path: 'typography',
    name: 'typography',
    component: () => import('../views/TypographyPage.vue'),
  },
  {
    path: 'virgajesse',
    name: 'virgajesse',
    component: () => import('../views/VirgaJessePage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 120,
        behavior: 'smooth',
      }
    }

    return { top: 0 }
  },

  routes: [
    {
      path: '/',
      component: DefaultLayout,

      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/HomePage.vue'),
        },

        {
          path: 'work',
          name: 'work',
          component: () => import('../views/WorkPage.vue'),
        },

        ...workPages.map(project => ({
          path: `work/${project.path}`,
          name: project.name,
          component: project.component,
        })),

        {
          path: 'about',
          name: 'about',
          component: () => import('../views/AboutPage.vue'),
        },

        {
          path: 'contact',
          name: 'contact',
          component: () => import('../views/ContactPage.vue'),
        },

        {
          path: 'cv',
          name: 'cv',
          component: () => import('../views/CurriculumVitae.vue'),
        },
        {
          path: 'eindreflectie',
          name: 'eindreflectie',
          component: () => import('../views/ReflectionPage.vue'),
        },
      ],
    },
  ],
})

export default router
