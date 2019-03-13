import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: (to, from, next) => {
        // ...
        console.log('路由独享的守卫 - 定义在路由上的 beforeEnter')
        next()
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/argu',
      name: 'argu',
      component: () => import(/* webpackChunkName: "argu" */ './views/Argu.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  // 可以做一些登录逻辑的处理
  console.log('全局前置守卫 - beforeEach')
  next()
})

router.afterEach((to, from) => {
  // ...
  console.log('全局后置钩子 - afterEach')
})

router.beforeResolve((to, from, next) => {
  // ...
  console.log('全局解析守卫 - beforeResolve')
  next()
})

export default router