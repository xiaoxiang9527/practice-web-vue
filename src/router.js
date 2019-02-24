import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/exam',
      name: 'exam',
      component: ()=>import('@/views/exam')
    },
    {
      path: '/',
      name: 'home',
      component:()=>import('@/views/home')
    },
    {
      path: '*',
      name: 'errorpage',
      component: ()=>import('@/views/errorpage')
    }
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
