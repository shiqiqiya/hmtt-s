import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'

// 懒加载写法
const Home = () => import('@/views/Home')
const Video = () => import('@/views/Video')
const Question = () => import('@/views/Question')
const My = () => import('@/views/My')
const Login = () => import('@/views/Login')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: Home
      },
      {
        path: 'video',
        component: Video
      },
      {
        path: 'question',
        component: Question
      },
      {
        path: 'my',
        component: My,
        // name 属性易于维护
        name: 'my'
      }
    ]
  },
  {
    path: '/login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
