# vue-router-demo

完整的导航解析流程：

1. 导航被触发
2. 在失活的组件里（即将离开的页面组件）调用离开守卫 beforeRouteLeave
3. 调用全局前置守卫 beforeEach
4. 在重用的组件里调用 beforeRouteUpdate
5. 在路由配置里调用 beforeEnter（和 4 并级）
6. 解析异步路由组件
7. 在被激活的组件里（即将进入的页面组件）调用 beforeRouteEnter
8. 调用全局的解析守卫 [beforeResolve](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%85%A8%E5%B1%80%E8%A7%A3%E6%9E%90%E5%AE%88%E5%8D%AB)（导航被确认前触发）
9. 导航被确认
10. 调用全局后置守卫 afterEach
11. 触发 DOM 更新
12. 用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数