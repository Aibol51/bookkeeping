import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/', 
    name: 'home',
    component: Home
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
