import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mjs-app',
      component: require('@/components/mjs-app').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
