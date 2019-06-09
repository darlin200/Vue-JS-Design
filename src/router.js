import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: function(to, from, savedPosition) {
    if (to.hash) {
        return {selector: to.hash}
    } else {
        return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/comments',
      name: 'comments',
      // route level code-splitting
      // this generates a separate chunk (comments.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "comments" */ './views/Comments.vue')
    },
    {
      path: '/comment',
      name: 'comment',
      // route level code-splitting
      // this generates a separate chunk (comment.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "comment" */ './views/Comment.vue')
    }
  ]
})
