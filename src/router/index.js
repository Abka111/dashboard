import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import bill from '../views/bill.vue'
import file from '../views/file.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children : [
        {
          path: '/bill',
          name: 'bill',
          component: bill
        },
        {
          path: '/file',
          name: 'file',
          component: file
        }
      ]
      
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
