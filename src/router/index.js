import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home/index.vue')
    },
    {
      path: '/credentials',
      name: 'credentials',
      component: () => import('../views/Credentials/index.vue'),
      meta: {
        hasAuth:true
      }
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: () => import('../views/Feedback/index.vue'),
      meta: {
        hasAuth:true
      }
    },
    {
      path: '/:patchMatch(.*)*',
      redirect: { name: 'home'}
    }
  ],
})

export default router
