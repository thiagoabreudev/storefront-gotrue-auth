import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/recover'
  },
  {
    path: '/recover/:token',
    name: 'Recover',
    component: () => import(/* webpackChunkName: "recovery" */ '../views/Recover.vue')
  }

]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
