import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/Login')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home')
  },
  {
    path: '/all',
    name: 'all',
    component: () => import('@/views/All')
  },
  {
    path: '/douyin',
    name: 'douyin',
    component: () => import('@/views/Douyin')
  },
  {
    path: '/jingdong',
    name: 'jingdong',
    component: () => import('@/views/Jingdong')
  },
  {
    path: '/pdd',
    name: 'pdd',
    component: () => import('@/views/Pdd')
  },
  {
    path: '/tencent',
    name: 'tencent',
    component: () => import('@/views/Tencent')
  },
  {
    path: '/xiaohongshu',
    name: 'xiaohongshu',
    component: () => import('@/views/Xiaohongshu')
  },
  {
    path: '/taobao',
    name: 'taobao',
    component: () => import('@/views/Taobao')
  },
  {
    path: '/chart',
    name: 'chart',
    component: () => import('@/components/charts1')
  },
]

const router = new VueRouter({
  routes
})

export default router
