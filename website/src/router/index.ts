import { createRouter, createWebHistory } from 'vue-router'
import HomeVue from '../views/Index.vue'
export const childrenRouter = [
  {
    path: '/index/home',
    name: 'home',
    component: () => import('../views/home/index.vue')
  },
  {
    path: '/index/community',
    name: 'community',
    component: () => import('../views/community/index.vue')
  },
  // {
  //   path: '/index/about',
  //   name: 'about',
  //   component: () => import('../views/about/index.vue')
  // },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/index/home'
    },
    {
      path: '/',
      name: 'index',
      component: HomeVue,
      children: [
        {
          path: '/index/home',
          name: 'home',
          component: () => import('../views/home/index.vue')
        },
        {
          path: '/index/about',
          name: 'about',
          component: () => import('../views/about/index.vue')
        },
        {
          path: '/index/community',
          name: 'community',
          component: () => import('../views/community/index.vue')
        },
        {
          path: '/index/detail',
          name: 'detail',
          component: () => import('../views/detail/index.vue')
        },
      ]
    },
    {
      path: '/:catchAll(.*)',
      name: 'notfound',
      component: () => import('../views/404/index.vue')
    },
  ]
})

export default router
