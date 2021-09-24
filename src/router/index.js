import { createRouter,  createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/login/index.vue')
    },
    {
      path: '/api-datasets',
      name: 'api-datasets',
      component: () => import('../components/api/datasets/index.vue')
    },
    {
      path: '/html-tag',
      name: 'html-tag',
      component: () => import('../components/html/index.vue')
    }
  ]
})

export default router