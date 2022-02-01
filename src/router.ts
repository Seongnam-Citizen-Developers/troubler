import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Index from './pages/index.vue'
import PostsIndex from './pages/posts/index.vue'
import PostsId from './pages/posts/id.vue'
import PostsIdEdit from './pages/posts/id-edit.vue'
import PostsWrite from './pages/posts/write.vue'

import DatabaseMasteriesIndex from './pages/database/masteries/index.vue'
import DatabaseMasterybooksShareCode from './pages/database/masterybooks/share-code.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Index
  },
  {
    path: '/posts/write',
    component: PostsWrite
  },
  {
    path: '/posts/:id/edit',
    component: PostsIdEdit
  },
  {
    path: '/posts/:id',
    component: PostsId
  },
  {
    path: '/posts',
    component: PostsIndex
  },
  {
    path: '/database/masteries',
    component: DatabaseMasteriesIndex
  },
  {
    path: '/database/masterybooks/share/:code?',
    component: DatabaseMasterybooksShareCode
  },
]

const Router = createRouter({
  history: createWebHistory(),
  routes,
})

export default Router
