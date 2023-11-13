import Vue from 'vue'
import Router from 'vue-router'
import process from '../.eslintrc'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
    }
  ]
})

export default router
