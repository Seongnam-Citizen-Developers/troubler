import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Index from './pages/index.vue'
import Info from './pages/info.vue'
import PostsIndex from './pages/posts/index.vue'
import PostsId from './pages/posts/id.vue'
import PostsIdEdit from './pages/posts/id-edit.vue'
import PostsWrite from './pages/posts/write.vue'

import DatabasesMasteryIndex from './pages/databases/mastery/index.vue'
import DatabaseMasterybooksShareCode from './pages/databases/masterybook/share-code.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Index,
  },
  {
    path: '/info',
    component: Info,
  },
  {
    path: '/posts/write',
    component: PostsWrite,
  },
  {
    path: '/posts/:id/edit',
    component: PostsIdEdit,
  },
  {
    path: '/posts/:id',
    component: PostsId,
  },
  {
    path: '/posts',
    component: PostsIndex,
  },
  {
    path: '/databases/mastery',
    component: DatabasesMasteryIndex,
  },
  // {
  //   path: '/databases/masterybook/share/:code?',
  //   component: DatabaseMasterybooksShareCode,
  // },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export { router }
