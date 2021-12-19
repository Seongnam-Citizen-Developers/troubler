import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Index from './pages/index.vue'
import MasteryBookShare from './pages/mastery-book-share.vue'

const routes: RouteRecordRaw[] = [
  { name: 'index', path: '/', component: Index },
  {
    name: 'masteryBookShare',
    path: '/mastery/book/share/:code?',
    component: MasteryBookShare,
  },
]

const Router = createRouter({
  history: createWebHistory(),
  routes,
})

export default Router
