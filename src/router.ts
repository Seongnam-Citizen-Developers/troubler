import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Index from './pages/index.vue'
import MasteryBookShare from './pages/mastery-book-share.vue'
import Spinner from './pages/spinner.vue'

const routes: RouteRecordRaw[] = [
  { name: 'index', path: '/', component: Index },
  {
    name: 'masteryBookShare',
    path: '/mastery/book/share/:code?',
    component: MasteryBookShare,
  },
  {
    name: 'spinner',
    path: '/test',
    component: Spinner,
  },
]

const Router = createRouter({
  history: createWebHistory(),
  routes,
})

export default Router
